/* bohdan.work: smooth scroll, booking links, clock and the reeded-glass panels. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var site = window.SITE || {};

  /* ---------- Booking and email ---------- */
  var email = site.email || "hello@bohdan.work";
  var bookingHref = site.bookingUrl
    ? site.bookingUrl
    : "mailto:" + email + "?subject=" + encodeURIComponent("Intro call");

  document.querySelectorAll("[data-book]").forEach(function (a) {
    a.setAttribute("href", bookingHref);
    if (site.bookingUrl) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener");
    }
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = email;
    if (el.tagName === "A") el.setAttribute("href", "mailto:" + email);
  });

  if (site.linkedin) {
    document.querySelectorAll("[data-linkedin]").forEach(function (l) {
      l.setAttribute("href", site.linkedin);
      l.hidden = false;
    });
  }

  /* ---------- Smooth scroll (Lenis), off for reduced motion ---------- */
  if (!reduceMotion && typeof window.Lenis === "function") {
    window.__lenis = new window.Lenis({ autoRaf: true, lerp: 0.1, wheelMultiplier: 1, anchors: { offset: -88 } });
  }

  /* ---------- Header: ink colors when it sits over light content ---------- */
  var hdr = document.querySelector(".over-hero");
  if (hdr) {
    var hTick = false;
    var tone = function () {
      hTick = false;
      var y = hdr.offsetHeight / 2, light = true;
      document.querySelectorAll(".glass").forEach(function (g) {
        var r = g.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) light = false;
      });
      hdr.classList.toggle("on-light", light);
    };
    window.addEventListener("scroll", function () {
      if (!hTick) { hTick = true; requestAnimationFrame(tone); }
    }, { passive: true });
    window.addEventListener("resize", tone);
    tone();
  }

  /* ---------- Video player: load Media Chrome when the player comes close ---------- */
  var players = document.querySelectorAll("[data-player]");
  if (players.length) {
    var loadPlayer = function () {
      if (document.querySelector("script[data-player-js]")) return;
      var s = document.createElement("script");
      s.src = players[0].getAttribute("data-player-src");
      s.setAttribute("data-player-js", "");
      document.head.appendChild(s);
    };
    // Fetch it once the page has settled (it is small and the video itself
    // still waits for a click), or right away if the player is already near
    var idle = window.requestIdleCallback || function (cb) { return setTimeout(cb, 1200); };
    if (document.readyState === "complete") idle(loadPlayer, { timeout: 2500 });
    else window.addEventListener("load", function () { idle(loadPlayer, { timeout: 2500 }); });
    if ("IntersectionObserver" in window) {
      var po = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) { loadPlayer(); po.disconnect(); }
      });
      players.forEach(function (p) { po.observe(p); });
    }
  }

  /* ---------- Work: mark the project on screen in the rail ---------- */
  var railItems = document.querySelectorAll("[data-rail]");
  var cases = document.querySelectorAll("[data-case]");
  if (railItems.length && cases.length) {
    var current = null, ticking = false;
    var spy = function () {
      ticking = false;
      var railEl = document.querySelector(".work-rail");
      if (railEl) {
        var stuckTop = parseFloat(getComputedStyle(railEl).top) || 0;
        railEl.classList.toggle("is-stuck", getComputedStyle(railEl).position === "sticky" && railEl.getBoundingClientRect().top <= stuckTop + 1 && window.innerWidth <= 900);
      }
      var line = window.innerHeight * 0.4, id = cases[0].id;
      cases.forEach(function (c) { if (c.getBoundingClientRect().top <= line) id = c.id; });
      if (id === current) return;
      current = id;
      railItems.forEach(function (a) {
        var on = a.getAttribute("data-rail") === id;
        a.parentNode.classList.toggle("is-active", on);
        if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
      });
      // keep the active chip visible in the mobile bar
      var active = document.querySelector('[data-rail="' + id + '"]');
      var bar = active && active.closest(".rail-list");
      if (bar && bar.scrollWidth > bar.clientWidth) {
        bar.scrollTo({ left: active.parentNode.offsetLeft - 16, behavior: reduceMotion ? "auto" : "smooth" });
      }
    };
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(spy); }
    }, { passive: true });
    window.addEventListener("resize", spy);
    spy();
  }

  /* ---------- Photos: pinned sideways strip on desktop, swipe on phones, lightbox ---------- */
  var strip = document.querySelector("[data-photos]");
  if (strip) {
    var photoBtns = Array.prototype.slice.call(strip.querySelectorAll(".photo-btn"));
    var track = strip.querySelector(".photos-track");
    var pin = document.querySelector("[data-photos-pin]");
    var section = pin && pin.closest(".photos-section");
    var indexEl = document.querySelector("[data-photo-index]");
    var bar = document.querySelector("[data-photo-progress]");
    var desktop = window.matchMedia("(min-width: 900px)");
    var dist = 0, pinned = false;

    photoBtns.forEach(function (b) {
      var im = b.querySelector("img");
      if (im.complete && im.naturalWidth) im.classList.add("is-loaded");
      else im.addEventListener("load", function () { im.classList.add("is-loaded"); });
    });

    var edge = function () { return parseFloat(getComputedStyle(strip).paddingLeft) || 0; };
    var setIndex = function (i) {
      if (indexEl) indexEl.textContent = (i + 1 < 10 ? "0" : "") + (i + 1);
    };
    var nearest = function (x) {
      // photo whose left edge is closest to the offset x along the track
      var best = 0, bd = Infinity;
      photoBtns.forEach(function (b, i) {
        var d = Math.abs(b.parentNode.offsetLeft - x);
        if (d < bd) { bd = d; best = i; }
      });
      return best;
    };

    // Desktop: section height = one screen + how far the track must travel
    var measure = function () {
      pinned = desktop.matches && !!pin;
      if (section) section.classList.toggle("is-pinned", pinned);
      if (!pinned) {
        if (pin) pin.style.height = "";
        track.style.transform = "";
        return;
      }
      dist = Math.max(0, track.scrollWidth + edge() * 2 - strip.clientWidth);
      // only touch the height when it really changes, so the page never jumps
      var h = Math.round(window.innerHeight + dist);
      if (Math.abs((parseFloat(pin.style.height) || 0) - h) > 1) pin.style.height = h + "px";
      frame(true);
    };
    // The track follows the scroll position with its own easing, so it glides
    // even on mouse wheels that scroll in steps. The loop only runs while the
    // track is still catching up.
    var target = 0, shown = 0, running = false;
    var render = function () {
      track.style.transform = "translate3d(" + (-shown).toFixed(2) + "px,0,0)";
      var p = dist ? shown / dist : 0;
      if (bar) bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
      setIndex(Math.round(p * (photoBtns.length - 1)));
    };
    var loop = function () {
      var diff = target - shown;
      if (Math.abs(diff) < 0.3 || reduceMotion) {
        shown = target;
        running = false;
        render();
        return;
      }
      shown += diff * 0.14;
      render();
      requestAnimationFrame(loop);
    };
    var frame = function (instant) {
      if (!pinned) return;
      var p = dist ? Math.min(1, Math.max(0, -pin.getBoundingClientRect().top / dist)) : 0;
      target = p * dist;
      if (instant === true) { shown = target; render(); return; }
      if (!running) { running = true; requestAnimationFrame(loop); }
    };
    if (window.__lenis && window.__lenis.on) window.__lenis.on("scroll", frame);
    else window.addEventListener("scroll", frame, { passive: true });
    window.addEventListener("resize", measure);
    if (desktop.addEventListener) desktop.addEventListener("change", measure);
    photoBtns.forEach(function (b) { b.querySelector("img").addEventListener("load", measure); });

    // The first pass through the strip used to stutter: lazy photos were
    // fetched and decoded on the main thread while the track was moving.
    // Load and decode all of them a little before the section arrives.
    var warmed = false;
    var warm = function () {
      if (warmed) return;
      warmed = true;
      photoBtns.forEach(function (b) {
        var im = b.querySelector("img");
        im.loading = "eager";
        if (im.decode) im.decode().catch(function () {});
      });
    };
    if ("IntersectionObserver" in window && section) {
      var wo = new IntersectionObserver(function (en) {
        if (en.some(function (x) { return x.isIntersecting; })) { warm(); wo.disconnect(); }
      }, { rootMargin: "150% 0px" });
      wo.observe(section);
    } else {
      warm();
    }
    measure();

    // Phones: native swipe strip, counter follows
    strip.addEventListener("scroll", function () {
      if (pinned) return;
      var x = strip.scrollLeft;
      setIndex(nearest(x));
      if (bar) {
        var max = strip.scrollWidth - strip.clientWidth;
        bar.style.transform = "scaleX(" + (max > 0 ? x / max : 0).toFixed(4) + ")";
      }
    }, { passive: true });

    // Keyboard: a photo that gets focus while the strip is pinned may sit off
    // screen to the side, so move the page to the point where it is in view
    strip.addEventListener("focusin", function (e) {
      if (!pinned) return;
      var btn = e.target.closest && e.target.closest(".photo-btn");
      if (!btn) return;
      var li = btn.parentNode;
      var x = li.offsetLeft, w = li.offsetWidth, view = strip.clientWidth - edge() * 2;
      if (x >= shown && x + w <= shown + view) return; // already visible
      var want = Math.min(dist, Math.max(0, x + w - view));
      if (x < shown) want = Math.max(0, x);
      var top = pin.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + want, behavior: "auto" });
      target = shown = want; render();
    });

    // Bring photo i into view (used after the lightbox closes)
    var goTo = function (i) {
      var li = photoBtns[i].parentNode;
      if (pinned) {
        var top = pin.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: top + Math.min(dist, Math.max(0, li.offsetLeft)), behavior: "auto" });
      } else {
        strip.scrollTo({ left: li.offsetLeft - edge(), behavior: reduceMotion ? "auto" : "smooth" });
      }
    };

    // Lightbox
    var lb = document.querySelector("[data-lightbox]");
    if (lb && typeof lb.showModal === "function") {
      var lbImg = lb.querySelector(".lightbox-img");
      var lbCount = lb.querySelector("[data-lb-count]");
      var cur = 0;
      var show = function (i, animate) {
        cur = (i + photoBtns.length) % photoBtns.length;
        var b = photoBtns[cur], small = b.querySelector("img");
        var set = function () {
          lbImg.src = b.getAttribute("data-full");
          lbImg.alt = small.alt;
          lbCount.textContent = (cur + 1) + " / " + photoBtns.length;
          lbImg.classList.remove("is-swapping");
        };
        if (animate && !reduceMotion) {
          lbImg.classList.add("is-swapping");
          var pre = new Image();
          pre.onload = pre.onerror = function () { setTimeout(set, 120); };
          pre.src = b.getAttribute("data-full");
        } else {
          set();
        }
        // warm the neighbours
        [cur + 1, cur - 1].forEach(function (n) {
          var nb = photoBtns[(n + photoBtns.length) % photoBtns.length];
          new Image().src = nb.getAttribute("data-full");
        });
      };
      var close = function () {
        if (!lb.open) return;
        if (reduceMotion) { lb.close(); return; }
        lb.classList.add("is-closing");
        setTimeout(function () { lb.classList.remove("is-closing"); lb.close(); }, 160);
      };
      photoBtns.forEach(function (b, i) {
        b.addEventListener("click", function () {
          show(i, false);
          if (window.__lenis) window.__lenis.stop();
          lb.showModal();
        });
      });
      lb.querySelector("[data-lb-prev]").addEventListener("click", function () { show(cur - 1, true); });
      lb.querySelector("[data-lb-next]").addEventListener("click", function () { show(cur + 1, true); });
      lb.querySelector("[data-lb-close]").addEventListener("click", close);
      lb.addEventListener("cancel", function (e) { e.preventDefault(); close(); });
      lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
      lb.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") show(cur + 1, true);
        if (e.key === "ArrowLeft") show(cur - 1, true);
      });
      // swipe on touch screens
      var sx = null;
      lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
      lb.addEventListener("touchend", function (e) {
        if (sx === null) return;
        var dx = e.changedTouches[0].clientX - sx;
        if (Math.abs(dx) > 48) show(cur + (dx < 0 ? 1 : -1), true);
        sx = null;
      });
      lb.addEventListener("close", function () {
        if (window.__lenis) window.__lenis.start();
        // the page stays where it was; on phones the strip shows the last photo viewed
        if (!pinned) goTo(cur);
        photoBtns[cur].focus({ preventScroll: true });
      });
    }
  }

  /* ---------- Local time in Brno ---------- */
  var clocks = document.querySelectorAll("[data-clock]");
  if (clocks.length && window.Intl) {
    var fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Prague" });
    var tick = function () {
      var t = fmt.format(new Date());
      clocks.forEach(function (el) { el.textContent = t; });
    };
    tick();
    setInterval(tick, 30000);
  }

  /* ---------- Month counts on the hero cards ---------- */
  document.querySelectorAll("[data-from]").forEach(function (el) {
    var from = el.getAttribute("data-from").split("-");
    var to = el.getAttribute("data-to");
    var end = to ? to.split("-") : [new Date().getFullYear(), new Date().getMonth() + 1];
    var months = (Number(end[0]) - Number(from[0])) * 12 + (Number(end[1]) - Number(from[1])) + 1;
    if (months > 0) el.textContent = months + " mo";
  });

  /* ---------- Reeded glass: a photograph seen through fluted glass ----------
     Every <canvas class="glass-canvas"> draws its parent's photo through
     vertical flutes. data-fx / data-fy pick the focal point (0..1), data-zoom
     how close the crop is, data-follow="false" turns off cursor tracking. */
  var images = {};
  function loadImage(src, cb) {
    if (images[src]) {
      if (images[src].complete && images[src].naturalWidth) cb(images[src], true);
      else images[src].addEventListener("load", function () { cb(images[src], false); });
      return;
    }
    var img = new Image();
    img.src = src;
    images[src] = img;
    // From cache the image is usually complete right away: draw in this same
    // task, before the first paint, so the flat fallback never shows
    if (img.complete && img.naturalWidth) cb(img, true);
    else img.addEventListener("load", function () { cb(img, false); });
  }

  function initGlass(canvas) {
    if (!canvas.getContext) return;
    var panel = canvas.parentElement;
    var ctx = canvas.getContext("2d", { alpha: false });
    var scene = document.createElement("canvas");
    var sctx = scene.getContext("2d", { alpha: false });
    var fx = parseFloat(canvas.getAttribute("data-fx") || "0.55");
    var fy = parseFloat(canvas.getAttribute("data-fy") || "0.4");
    var zoom = parseFloat(canvas.getAttribute("data-zoom") || "1.12");
    var follow = finePointer && !reduceMotion && canvas.getAttribute("data-follow") !== "false";
    // "viewport": lay the photo out as if the panel were a full screen tall,
    // anchored at the top, so short page heads show the home hero cropped
    var viewportFrame = canvas.getAttribute("data-frame") === "viewport";
    var VH = 0;
    var img = null, shade = null;
    var W = 0, H = 0, dpr = 1, strip = 28;
    var visible = false, running = false, last = 0;

    // Spring state for the cursor offset (decorative mouse tracking)
    var target = { x: 0, y: 0 }, pos = { x: 0, y: 0 }, vel = { x: 0, y: 0 };
    var STIFFNESS = 60, DAMPING = 14;

    function buildShade() {
      var s = document.createElement("canvas");
      s.width = strip;
      s.height = 1;
      var g = s.getContext("2d");
      var grad = g.createLinearGradient(0, 0, strip, 0);
      grad.addColorStop(0, "rgba(0, 20, 40, 0.10)");
      grad.addColorStop(0.18, "rgba(255, 255, 255, 0.11)");
      grad.addColorStop(0.4, "rgba(255, 255, 255, 0.02)");
      grad.addColorStop(0.75, "rgba(0, 0, 0, 0)");
      grad.addColorStop(1, "rgba(0, 20, 40, 0.12)");
      g.fillStyle = grad;
      g.fillRect(0, 0, strip, 1);
      shade = ctx.createPattern(s, "repeat");
    }

    function resize() {
      var r = panel.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = Math.max(1, Math.round(r.width * dpr));
      H = Math.max(1, Math.round(r.height * dpr));
      canvas.width = W;
      canvas.height = H;
      VH = viewportFrame ? Math.max(H, Math.round(window.innerHeight * dpr)) : H;
      scene.width = Math.max(1, Math.round(W / 2));
      scene.height = Math.max(1, Math.round(H / 2));
      strip = Math.max(6, Math.round(Math.min(18, Math.max(9, r.width / 96)) * dpr));
      buildShade();
      draw(performance.now());
    }

    function draw(t) {
      if (!img || !W) return;
      var sw = scene.width, sh = scene.height;
      var vh = VH / 2; // layout height of the photo, in scene pixels
      var scale = Math.max(sw / img.width, vh / img.height) * zoom;
      var dw = img.width * scale, dh = img.height * scale;
      // Wall-clock drift: every page shows the photo at the same moment
      var drift = reduceMotion ? 0 : Date.now() / 1000;
      var ox = Math.sin(drift * 0.11) * sw * 0.025 + pos.x * sw * 0.05;
      var oy = Math.cos(drift * 0.09) * vh * 0.02 + pos.y * vh * 0.04;
      sctx.drawImage(img, (sw - dw) * fx + ox, (vh - dh) * fy + oy, dw, dh);

      var sx = sw / W;
      for (var x = 0; x < W; x += strip) {
        var center = (x + strip / 2) * sx;
        var srcW = strip * sx * 1.5;
        var srcX = Math.min(Math.max(0, center - srcW / 2), sw - srcW);
        ctx.save();
        ctx.translate(x + strip, 0);
        ctx.scale(-1, 1); // each flute flips its slice, like a cylindrical lens
        ctx.drawImage(scene, srcX, 0, srcW, sh, 0, 0, strip, H);
        ctx.restore();
      }
      ctx.fillStyle = shade;
      ctx.fillRect(0, 0, W, H);
      if (!canvas.classList.contains("is-ready")) canvas.classList.add("is-ready");
    }

    function step(now) {
      if (!running) return;
      requestAnimationFrame(step);
      if (now - last < 33) return; // about 30 fps is enough for slow light
      var dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      ["x", "y"].forEach(function (k) {
        var force = (target[k] - pos[k]) * STIFFNESS - vel[k] * DAMPING;
        vel[k] += force * dt;
        pos[k] += vel[k] * dt;
      });
      draw(now);
    }
    function play() {
      if (running || reduceMotion || !visible || document.hidden || !img) return;
      running = true;
      last = performance.now();
      requestAnimationFrame(step);
    }
    function pause() { running = false; }

    loadImage(canvas.getAttribute("data-src"), function (loaded, instant) {
      img = loaded;
      if (instant) canvas.style.transition = "none";
      resize();
      play();
    });

    if ("ResizeObserver" in window) new ResizeObserver(resize).observe(panel);
    if (viewportFrame) window.addEventListener("resize", resize);
    else window.addEventListener("resize", resize);

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) play(); else pause();
      }).observe(panel);
    } else {
      visible = true;
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) pause(); else play();
    });

    if (follow) {
      panel.addEventListener("pointermove", function (e) {
        var r = panel.getBoundingClientRect();
        target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
      });
      panel.addEventListener("pointerleave", function () { target.x = 0; target.y = 0; });
    }
  }

  document.querySelectorAll(".glass-canvas").forEach(initGlass);
})();
