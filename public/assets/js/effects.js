/* bohdan.work: the liquid highlight behind the main nav ("Gooey Move").
   A pill follows the hovered link on a spring and stretches as it moves, with
   a tail of small circles behind it. An SVG blur + contrast filter melts them
   into one shape. Without this script, CSS draws a plain active pill. */
(function () {
  "use strict";

  var SVG = "http://www.w3.org/2000/svg";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var BLUR = 7, CONTRAST = 18, FILTER_PAD = 45;
  var STIFFNESS = 426.4, DAMPING = 26.06, STRETCH = 0.18;
  var TAIL = 0.4, TAIL_REACH = 1, TAIL_STIFFNESS = 170, TAIL_DAMPING = 22;

  function el(name, attrs) {
    var node = document.createElementNS(SVG, name);
    Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    return node;
  }

  // Advances [position, velocity] towards the target in steps of at most 1/60 s
  function spring(pos, vel, target, stiffness, damping, dt) {
    var steps = Math.max(1, Math.ceil(dt * 60)), h = dt / steps;
    while (steps-- > 0) {
      vel += (stiffness * (target - pos) - damping * vel) * h;
      pos += vel * h;
    }
    return [pos, vel];
  }

  function init(nav) {
    var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
    var current = links.filter(function (a) { return a.getAttribute("aria-current") === "page"; })[0];

    var layer = document.createElement("div");
    layer.className = "goo-layer";
    var wrap = document.createElement("div");
    wrap.style.cssText = "position:absolute;inset:0;pointer-events:none;z-index:0;isolation:isolate;opacity:var(--goo-opacity)";
    var svg = el("svg", { "aria-hidden": "true", focusable: "false" });
    svg.style.cssText = "position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:-1;will-change:filter,transform";
    var filter = el("filter", { id: "goo-filter", filterUnits: "userSpaceOnUse", "color-interpolation-filters": "sRGB" });
    filter.appendChild(el("feGaussianBlur", { "in": "SourceGraphic", stdDeviation: BLUR, result: "blur" }));
    filter.appendChild(el("feColorMatrix", {
      "in": "blur", type: "matrix",
      values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 " + CONTRAST + " " + (0.5 - CONTRAST * 5 / 12),
      result: "goo"
    }));
    filter.appendChild(el("feComposite", { "in": "SourceGraphic", in2: "goo", operator: "atop", result: "shape" }));
    var defs = el("defs");
    defs.appendChild(filter);
    var group = el("g", { filter: "url(#goo-filter)" });
    group.style.fill = "var(--goo-fill)";
    var tailEnd = el("circle", { r: 0 }), tailA = el("circle", { r: 0 }), tailB = el("circle", { r: 0 });
    var blob = el("rect", { x: 0, y: 0, width: 0, height: 0 });
    blob.style.transformBox = "fill-box";
    blob.style.transformOrigin = "center";
    blob.style.willChange = "transform";
    [tailEnd, tailA, tailB, blob].forEach(function (n) { group.appendChild(n); });
    svg.appendChild(defs);
    svg.appendChild(group);
    wrap.appendChild(svg);
    layer.appendChild(wrap);
    nav.insertBefore(layer, nav.firstChild);

    // Target box, and the spring state of the pill center and of the tail
    var box = null, cx = 0, cy = 0, vx = 0, vy = 0;
    var tx = 0, ty = 0, tvx = 0, tvy = 0, tr = 0, phase = 0;
    var running = false, last = 0, pressed = false;

    function measure(a) {
      if (!a) return null;
      var n = nav.getBoundingClientRect(), r = a.getBoundingClientRect();
      return { x: r.left - n.left, y: r.top - n.top, w: r.width, h: r.height };
    }

    function paint(speed) {
      var transform = "translate(" + (cx - box.w / 2) + "px, " + (cy - box.h / 2) + "px)";
      if (speed > 2) {
        var s = Math.min(STRETCH, speed * 6e-4);
        var angle = Math.round(Math.atan2(vy, vx) * 100) / 100;
        transform += " rotate(" + angle + "rad) scale(" + (1 + s).toFixed(3) + ", " + (1 / (1 + s * 0.65)).toFixed(3) + ") rotate(" + (-angle) + "rad)";
      }
      blob.style.transform = transform;
      blob.setAttribute("width", box.w);
      blob.setAttribute("height", box.h);
      blob.setAttribute("rx", box.h / 2);
    }

    function hideTail() {
      tailEnd.setAttribute("r", 0);
      tailA.setAttribute("r", 0);
      tailB.setAttribute("r", 0);
    }

    function paintTail(speed, dt) {
      var s;
      s = spring(tx, tvx, cx, TAIL_STIFFNESS, TAIL_DAMPING, dt); tx = s[0]; tvx = s[1];
      s = spring(ty, tvy, cy, TAIL_STIFFNESS, TAIL_DAMPING, dt); ty = s[0]; tvy = s[1];
      var dirX = speed > 0.001 ? vx / speed : 1, dirY = speed > 0.001 ? vy / speed : 0;
      var half = Math.max(4, Math.abs(dirX) * box.h + Math.abs(dirY) * box.w) / 2;
      var along = (Math.abs(dirX) * box.w + Math.abs(dirY) * box.h) / 2;
      var dx = tx - cx, dy = ty - cy, dist = Math.hypot(dx, dy), reach = along + half * TAIL_REACH;
      if (dist > reach) {
        tx = cx + dx / dist * reach;
        ty = cy + dy / dist * reach;
        dx = tx - cx;
        dy = ty - cy;
      }
      var goal = half * TAIL * Math.max(0, Math.min(1, (speed - 20) / 120));
      tr += (goal - tr) * Math.min(1, dt * 10);
      if (tr < 0.3) { hideTail(); return; }
      phase += speed * dt * 0.045;
      var wave = tr * 0.16, a = Math.sin(phase) * wave, b = Math.sin(phase + 2.4) * -wave;
      tailEnd.setAttribute("cx", tx);
      tailEnd.setAttribute("cy", ty);
      tailEnd.setAttribute("r", tr);
      tailA.setAttribute("cx", cx + dx * 0.45 - dirY * a);
      tailA.setAttribute("cy", cy + dy * 0.45 + dirX * a);
      tailA.setAttribute("r", tr * 0.62);
      tailB.setAttribute("cx", cx + dx * 0.75 - dirY * b);
      tailB.setAttribute("cy", cy + dy * 0.75 + dirX * b);
      tailB.setAttribute("r", tr * 0.4);
    }

    function frame(now) {
      if (!running) return;
      var dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;
      var gx = box.x + box.w / 2, gy = box.y + box.h / 2, s;
      s = spring(cx, vx, gx, STIFFNESS, DAMPING, dt); cx = s[0]; vx = s[1];
      s = spring(cy, vy, gy, STIFFNESS, DAMPING, dt); cy = s[0]; vy = s[1];
      var speed = Math.hypot(vx, vy);
      paint(speed);
      paintTail(speed, dt);
      if (Math.abs(cx - gx) < 0.05 && Math.abs(cy - gy) < 0.05 && speed < 1 && tr < 0.3) {
        running = false;
        return;
      }
      requestAnimationFrame(frame);
    }

    // Jump straight to the target, with no spring and no tail. Pages with no
    // active link (legal, 404) have no target at rest, so the pill is hidden
    function snap(a) {
      box = measure(a);
      vx = vy = tvx = tvy = tr = 0;
      running = false;
      hideTail();
      if (!box) {
        cx = cy = tx = ty = 0;
        blob.setAttribute("width", 0);
        blob.setAttribute("height", 0);
        return;
      }
      cx = tx = box.x + box.w / 2;
      cy = ty = box.y + box.h / 2;
      paint(0);
    }

    function moveTo(a) {
      if (reduceMotion || !a) { snap(a); return; }
      box = measure(a);
      if (!running) {
        running = true;
        last = performance.now();
        requestAnimationFrame(frame);
      }
    }

    // The filter region has to cover the nav plus room for the blur and tail
    function fitFilter() {
      filter.setAttribute("x", -FILTER_PAD);
      filter.setAttribute("y", -FILTER_PAD);
      filter.setAttribute("width", nav.offsetWidth + FILTER_PAD * 2);
      filter.setAttribute("height", nav.offsetHeight + FILTER_PAD * 2);
    }

    function settle() {
      fitFilter();
      if (!pressed) snap(current);
    }

    links.forEach(function (a) {
      var hover = function () { if (!pressed) moveTo(a); };
      a.addEventListener("pointerenter", hover);
      a.addEventListener("focus", hover);
      // Pressing another link keeps the pill there while the next page loads
      a.addEventListener("pointerdown", function () {
        if (a === current) return;
        pressed = true;
        moveTo(a);
      });
    });
    nav.addEventListener("pointerleave", function () { if (!pressed) moveTo(current); });
    window.addEventListener("resize", settle);
    // Coming back through the history cache: the page may hold a pressed state
    window.addEventListener("pageshow", function () {
      pressed = false;
      settle();
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(settle);

    settle();
    // Hide the CSS pill only once the first frame of this one is on screen
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { nav.classList.add("goo-ready"); });
    });
  }

  function start() {
    var nav = document.querySelector("[data-goo]");
    if (!nav) return;
    try { init(nav); } catch (e) { console.warn("Gooey nav failed", e); }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
