(()=>{var Li=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}},Ri=class extends Li{},Di=class extends Ri{constructor(){super(...arguments),this.role=null}},Qa=class{observe(){}unobserve(){}disconnect(){}},Cs={createElement:function(){return new Gt.HTMLElement},createElementNS:function(){return new Gt.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Gt={ResizeObserver:Qa,document:Cs,Node:Ri,Element:Di,HTMLElement:class extends Di{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Gt.DocumentFragment}},DocumentFragment:class extends Li{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Os="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window=="undefined"||typeof window.customElements=="undefined",Us=Object.keys(Gt).every(t=>t in globalThis),l=Os&&!Us?Gt:globalThis,$=Os&&!Us?Cs:globalThis.document;var h={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},y={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},za={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},xs=Object.entries(za),o=xs.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),kn={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Ye=xs.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...kn}),Ud=Object.entries(Ye).reduce((t,[e,i])=>{let a=o[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"}),Ps=Object.entries(o).reduce((t,[e,i])=>{let a=Ye[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),J={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},Ce={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"};var Ci={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},j={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},te={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"};var Ns={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"};var Fs=new WeakMap,Xa=t=>{let e=Fs.get(t);return e||Fs.set(t,e=new Set),e},Hs=new l.ResizeObserver(t=>{for(let e of t)for(let i of Xa(e.target))i(e)});function Oi(t,e){Xa(t).add(e),Hs.observe(t)}function Ui(t,e){let i=Xa(t);i.delete(e),i.size||Hs.unobserve(t)}function W(t){let e={};for(let i of t)e[i.name]=i.value;return e}function Bs(t){var e;return(e=yn(t))!=null?e:Oe(t,"media-controller")}function yn(t){var e;let{MEDIA_CONTROLLER:i}=y,a=t.getAttribute(i);if(a)return(e=wn(t))==null?void 0:e.getElementById(a)}var xi=(t,e,i=".value")=>{let a=t.querySelector(i);a&&(a.textContent=e)},Mn=(t,e)=>{let i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Pi=(t,e)=>Mn(t,e)[0],ve=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:ve(t,e.getRootNode().host),Oe=(t,e)=>{if(!t)return null;let i=t.closest(e);return i||Oe(t.getRootNode().host,e)};function Za(t=document){var e;let i=t==null?void 0:t.activeElement;return i?(e=Za(i.shadowRoot))!=null?e:i:null}function wn(t){var e;let i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Ni(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){let s=getComputedStyle(r);if(i&&s.opacity==="0"||a&&s.visibility==="hidden"||s.display==="none")return!1;r=r.parentElement,e--}return!0}function $s(t,e,i,a){let r=a.x-i.x,s=a.y-i.y,n=r*r+s*s;if(n===0)return 0;let d=((t-i.x)*r+(e-i.y)*s)/n;return Math.max(0,Math.min(1,d))}function O(t,e){let i=Ln(t,a=>a===e);return i||Ja(t,e)}function Ln(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let s;try{s=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(let n of s!=null?s:[])if(e(n.selectorText))return n}}function Ja(t,e){var i,a;let r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],s=r==null?void 0:r[r.length-1];if(!(s!=null&&s.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let n=s==null?void 0:s.sheet.insertRule(`${e}{}`,s.sheet.cssRules.length);return(a=s.sheet.cssRules)==null?void 0:a[n]}function C(t,e,i=Number.NaN){let a=t.getAttribute(e);return a!=null?+a:i}function P(t,e,i){let a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}C(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function b(t,e){return t.hasAttribute(e)}function A(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}b(t,e)!=i&&t.toggleAttribute(e,i)}function R(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function L(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}let a=`${i}`;R(t,e,void 0)!==a&&t.setAttribute(e,a)}var Ws=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},de=(t,e,i)=>(Ws(t,e,"read from private field"),i?i.call(t):e.get(t)),Rn=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Fi=(t,e,i,a)=>(Ws(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Q;function Dn(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}var ut=class extends l.HTMLElement{constructor(){if(super(),Rn(this,Q,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER,o.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,s,n,d,c;e===y.MEDIA_CONTROLLER&&(i&&((s=(r=de(this,Q))==null?void 0:r.unassociateElement)==null||s.call(r,this),Fi(this,Q,null)),a&&this.isConnected&&(Fi(this,Q,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(c=(d=de(this,Q))==null?void 0:d.associateElement)==null||c.call(d,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Fi(this,Q,Cn(this)),this.getAttribute(y.MEDIA_CONTROLLER)&&((i=(e=de(this,Q))==null?void 0:e.associateElement)==null||i.call(e,this)),de(this,Q)&&(de(this,Q).addEventListener("pointerdown",this),de(this,Q).addEventListener("click",this),de(this,Q).hasAttribute("tabindex")||(de(this,Q).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(y.MEDIA_CONTROLLER)&&((i=(e=de(this,Q))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=de(this,Q))==null||a.removeEventListener("pointerdown",this),(r=de(this,Q))==null||r.removeEventListener("click",this),Fi(this,Q,null)}handleEvent(e){var i;let a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){let{clientX:s,clientY:n}=e,{left:d,top:c,width:k,height:I}=this.getBoundingClientRect(),T=s-d,v=n-c;if(T<0||v<0||T>k||v>I||k===0&&I===0)return;let m=this._pointerType||"mouse";if(this._pointerType=void 0,m===Ci.TOUCH){this.handleTap(e);return}else if(m===Ci.MOUSE||m===Ci.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return b(this,o.MEDIA_PAUSED)}set mediaPaused(e){A(this,o.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let i=this.mediaPaused?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(i,{composed:!0,bubbles:!0}))}};Q=new WeakMap;ut.shadowRootOptions={mode:"open"};ut.getTemplateHTML=Dn;function Cn(t){var e;let i=t.getAttribute(y.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Oe(t,"media-controller")}l.customElements.get("media-gesture-receiver")||l.customElements.define("media-gesture-receiver",ut);var ja=ut;var Vs={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var Ks,qt={en:Vs},ht=((Ks=globalThis.navigator)==null?void 0:Ks.language)||"en",Gs=t=>{ht=t};var On=t=>{var e,i,a;let[r]=ht.split("-");return((e=qt[ht])==null?void 0:e[t])||((i=qt[r])==null?void 0:i[t])||((a=qt.en)==null?void 0:a[t])||t},qs=()=>{let[t]=ht.split("-");return qt[ht]?ht:qt[t]?t:"en"},f=(t,e={})=>On(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);var ar=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},H=(t,e,i)=>(ar(t,e,"read from private field"),i?i.call(t):e.get(t)),Z=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ce=(t,e,i,a)=>(ar(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ue=(t,e,i)=>(ar(t,e,"access private method"),i),Yt,$i,mt,vt,Et,er,pt,Hi,tr,Ys,ir,Qs,Qt,Wi,Vi,rr,ft,zt,Ue,Bi,_={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function Un(t){return`
    <style>
      
      :host([${o.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${_.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${_.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${_.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${_.AUDIO}])[${_.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${_.AUDIO}])[${_.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${_.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${_.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${_.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${_.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${_.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${_.USER_INACTIVE}]:not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_AIRPLAYING}]):not([${o.MEDIA_IS_CASTING}]):not([${_.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${_.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${_.USER_INACTIVE}]:not([${_.NO_AUTOHIDE}]):not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_CASTING}]):not([${_.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${_.USER_INACTIVE}][${_.AUTOHIDE_OVER_CONTROLS}]:not([${_.NO_AUTOHIDE}]):not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_CASTING}]):not([${_.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      
      :host(:not([${_.AUDIO}])[${o.MEDIA_HAS_PLAYED}]) slot[name=poster],
      :host(:not([${_.AUDIO}])[${o.MEDIA_STREAM_TYPE}="${te.ON_DEMAND}"][${o.MEDIA_CURRENT_TIME}]:not([${o.MEDIA_CURRENT_TIME}="0"])) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${ja.shadowRootOptions.mode}">
          ${ja.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}var xn=Object.values(o),Pn="sm:384 md:576 lg:768 xl:960";function Nn(t){zs(t.target,t.contentRect.width)}function zs(t,e){var i;if(!t.isConnected)return;let a=(i=t.getAttribute(_.BREAKPOINTS))!=null?i:Pn,r=Fn(a),s=Hn(r,e),n=!1;if(Object.keys(r).forEach(d=>{if(s.includes(d)){t.hasAttribute(`breakpoint${d}`)||(t.setAttribute(`breakpoint${d}`,""),n=!0);return}t.hasAttribute(`breakpoint${d}`)&&(t.removeAttribute(`breakpoint${d}`),n=!0)}),n){let d=new CustomEvent(Ye.BREAKPOINTS_CHANGE,{detail:s});t.dispatchEvent(d)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(Ye.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Fn(t){let e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function Hn(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}var Qe=class extends l.HTMLElement{constructor(){if(super(),Z(this,tr),Z(this,ir),Z(this,Qt),Z(this,Vi),Z(this,ft),Z(this,Yt,void 0),Z(this,$i,0),Z(this,mt,null),Z(this,vt,null),Z(this,Et,void 0),this.breakpointsComputed=!1,Z(this,er,e=>{let i=this.media;for(let a of e){if(a.type!=="childList")continue;let r=a.removedNodes;for(let s of r){if(s.slot!="media"||a.target!=this)continue;let n=a.previousSibling&&a.previousSibling.previousElementSibling;if(!n||!i)this.mediaUnsetCallback(s);else{let d=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(d=!1);d&&this.mediaUnsetCallback(s)}}if(i)for(let s of a.addedNodes)s===i&&this.handleMediaUpdated(i)}}),Z(this,pt,!1),Z(this,Hi,e=>{H(this,pt)||(setTimeout(()=>{Nn(e),ce(this,pt,!1)},0),ce(this,pt,!0))}),Z(this,Ue,void 0),Z(this,Bi,()=>{if(!H(this,Ue).assignedElements({flatten:!0}).length){H(this,mt)&&this.mediaUnsetCallback(H(this,mt));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}ce(this,Yt,new MutationObserver(H(this,er)))}static get observedAttributes(){return[_.AUTOHIDE,_.GESTURES_DISABLED].concat(xn).filter(e=>![o.MEDIA_RENDITION_LIST,o.MEDIA_AUDIO_TRACK_LIST,o.MEDIA_CHAPTERS_CUES,o.MEDIA_WIDTH,o.MEDIA_HEIGHT,o.MEDIA_ERROR,o.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==_.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(ce(this,mt,e),e.localName.includes("-")&&await l.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;H(this,Yt).observe(this,{childList:!0,subtree:!0}),Oi(this,H(this,Hi));let a=this.getAttribute(_.AUDIO)!=null?f("audio player"):f("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(_.USER_INACTIVE,""),zs(this,this.getBoundingClientRect().width);let r=this.querySelector(":scope > slot[slot=media]");r&&(ce(this,Ue,r),H(this,Ue).addEventListener("slotchange",H(this,Bi))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=l.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;Ui(this,H(this,Hi)),clearTimeout(H(this,vt)),H(this,Yt).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=l.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),H(this,Ue)&&(H(this,Ue).removeEventListener("slotchange",H(this,Bi)),ce(this,Ue,null)),ce(this,pt,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){ce(this,mt,null)}handleEvent(e){switch(e.type){case"pointerdown":ce(this,$i,e.timeStamp);break;case"pointermove":ue(this,tr,Ys).call(this,e);break;case"pointerup":ue(this,ir,Qs).call(this,e);break;case"mouseleave":ue(this,Qt,Wi).call(this);break;case"mouseup":this.removeAttribute(_.KEYBOARD_CONTROL);break;case"keyup":ue(this,ft,zt).call(this),this.setAttribute(_.KEYBOARD_CONTROL,"");break}}set autohide(e){let i=Number(e);ce(this,Et,isNaN(i)?0:i)}get autohide(){return(H(this,Et)===void 0?2:H(this,Et)).toString()}get breakpoints(){return R(this,_.BREAKPOINTS)}set breakpoints(e){L(this,_.BREAKPOINTS,e)}get audio(){return b(this,_.AUDIO)}set audio(e){A(this,_.AUDIO,e)}get gesturesDisabled(){return b(this,_.GESTURES_DISABLED)}set gesturesDisabled(e){A(this,_.GESTURES_DISABLED,e)}get keyboardControl(){return b(this,_.KEYBOARD_CONTROL)}set keyboardControl(e){A(this,_.KEYBOARD_CONTROL,e)}get noAutohide(){return b(this,_.NO_AUTOHIDE)}set noAutohide(e){A(this,_.NO_AUTOHIDE,e)}get autohideOverControls(){return b(this,_.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){A(this,_.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return b(this,_.USER_INACTIVE)}set userInteractive(e){A(this,_.USER_INACTIVE,e)}};Yt=new WeakMap;$i=new WeakMap;mt=new WeakMap;vt=new WeakMap;Et=new WeakMap;er=new WeakMap;pt=new WeakMap;Hi=new WeakMap;tr=new WeakSet;Ys=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-H(this,$i)<250)return;ue(this,Vi,rr).call(this),clearTimeout(H(this,vt));let e=this.hasAttribute(_.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&ue(this,ft,zt).call(this)};ir=new WeakSet;Qs=function(t){if(t.pointerType==="touch"){let e=!this.hasAttribute(_.USER_INACTIVE);[this,this.media].includes(t.target)&&e?ue(this,Qt,Wi).call(this):ue(this,ft,zt).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&ue(this,ft,zt).call(this)};Qt=new WeakSet;Wi=function(){if(H(this,Et)<0||this.hasAttribute(_.USER_INACTIVE))return;this.setAttribute(_.USER_INACTIVE,"");let t=new l.CustomEvent(Ye.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Vi=new WeakSet;rr=function(){if(!this.hasAttribute(_.USER_INACTIVE))return;this.removeAttribute(_.USER_INACTIVE);let t=new l.CustomEvent(Ye.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};ft=new WeakSet;zt=function(){ue(this,Vi,rr).call(this),clearTimeout(H(this,vt));let t=parseInt(this.autohide);t<0||ce(this,vt,setTimeout(()=>{ue(this,Qt,Wi).call(this)},t*1e3))};Ue=new WeakMap;Bi=new WeakMap;Qe.shadowRootOptions={mode:"open"};Qe.getTemplateHTML=Un;l.customElements.get("media-container")||l.customElements.define("media-container",Qe);var ur=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Xe=(t,e,i)=>(ur(t,e,"read from private field"),i?i.call(t):e.get(t)),Le=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},hr=(t,e,i,a)=>(ur(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ze=(t,e,i)=>(ur(t,e,"access private method"),i),Gi,Zt,Ze,Ki,sr,or,Xs,nr,Zs,lr,Js,dr,js,cr,eo;function Bn(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function $n(t){return`
    <slot id="content"></slot>
  `}var Xt={OPEN:"open",ANCHOR:"anchor"},xe=class extends l.HTMLElement{constructor(){super(),Le(this,Ki),Le(this,or),Le(this,nr),Le(this,lr),Le(this,dr),Le(this,cr),Le(this,Gi,!1),Le(this,Zt,null),Le(this,Ze,null)}static get observedAttributes(){return[Xt.OPEN,Xt.ANCHOR]}get open(){return b(this,Xt.OPEN)}set open(e){A(this,Xt.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":ze(this,lr,Js).call(this,e);break;case"focusout":ze(this,dr,js).call(this,e);break;case"keydown":ze(this,cr,eo).call(this,e);break}}connectedCallback(){ze(this,Ki,sr).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){ze(this,Ki,sr).call(this),e===Xt.OPEN&&a!==i&&(this.open?ze(this,or,Xs).call(this):ze(this,nr,Zs).call(this))}focus(){hr(this,Zt,Za());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;let a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}};Gi=new WeakMap;Zt=new WeakMap;Ze=new WeakMap;Ki=new WeakSet;sr=function(){if(!Xe(this,Gi)&&(hr(this,Gi,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let t=W(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{let{style:e}=O(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};or=new WeakSet;Xs=function(){var t;(t=Xe(this,Ze))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};nr=new WeakSet;Zs=function(){var t;(t=Xe(this,Ze))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};lr=new WeakSet;Js=function(t){hr(this,Ze,t.relatedTarget),ve(this,t.relatedTarget)||(this.open=!this.open)};dr=new WeakSet;js=function(t){var e;ve(this,t.relatedTarget)||((e=Xe(this,Zt))==null||e.focus(),Xe(this,Ze)&&Xe(this,Ze)!==t.relatedTarget&&this.open&&(this.open=!1))};cr=new WeakSet;eo=function(t){var e,i,a,r,s;let{key:n,ctrlKey:d,altKey:c,metaKey:k}=t;d||c||k||this.keysUsed.includes(n)&&(t.preventDefault(),t.stopPropagation(),n==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):n==="Escape"&&((s=Xe(this,Zt))==null||s.focus(),this.open=!1))};xe.shadowRootOptions={mode:"open"};xe.getTemplateHTML=Bn;xe.getSlotTemplateHTML=$n;l.customElements.get("media-chrome-dialog")||l.customElements.define("media-chrome-dialog",xe);var Wn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Pe=(t,e,i)=>(Wn(t,e,"read from private field"),i?i.call(t):e.get(t)),to=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_t,gt,Jt={HOTKEYS:"hotkeys"},Vn=[{keys:[{key:" ",label:"Space"},{key:"k"}],description:"Toggle Playback"},{keys:[{key:"m"}],description:"Toggle mute"},{keys:[{key:"f"}],description:"Toggle fullscreen"},{keys:[{key:"c"}],description:"Toggle captions or subtitles, if available"},{keys:[{key:"p"}],description:"Toggle Picture in Picture"},{keys:[{key:"ArrowLeft",label:"\u2190"},{key:"j"}],description:"Seek back 10s"},{keys:[{key:"ArrowRight",label:"\u2192"},{key:"l"}],description:"Seek forward 10s"},{keys:[{key:"ArrowUp",label:"\u2191"}],description:"Turn volume up"},{keys:[{key:"ArrowDown",label:"\u2193"}],description:"Turn volume down"},{keys:[{key:"<",label:"< (SHIFT+,)"}],description:"Decrease playback rate"},{keys:[{key:">",label:"> (SHIFT+.)"}],description:"Increase playback rate"},{keys:[{key:"shift+/",label:"SHIFT+/"}],description:"Show keyboard shortcuts"}];function Yi(t){return t===" "?"nospace":`no${t.toLowerCase()}`}function Kn(t){let e=new Set(t==null?void 0:t.split(/\s+/));return Vn.map(({keys:i,description:a})=>({keys:i.filter(({key:r})=>!e.has(Yi(r))),description:a})).filter(({keys:i})=>i.length)}function Gn(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${io(t[Jt.HOTKEYS])}
    </slot>
  `}function io(t){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${Kn(t).map(({keys:i,description:a})=>`
        <tr>
          <td>
            <div class="key-combo">${i.map(({key:s,label:n=s},d)=>d>0?`<span class="key-separator">or</span><span class="key">${n}</span>`:`<span class="key">${n}</span>`).join("")}</div>
          </td>
          <td class="description">${a}</td>
        </tr>
      `).join("")}</table>
  `}var qi=class extends xe{constructor(){super(...arguments),to(this,_t,e=>{var i;if(!this.open)return;let a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;let r=e.composedPath(),s=r[0]===this||r.includes(this),n=r.includes(a);s&&!n&&(this.open=!1)}),to(this,gt,e=>{if(!this.open)return;let i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}static get observedAttributes(){return[...super.observedAttributes,Jt.HOTKEYS]}get hotkeys(){var e;return(e=R(this,Jt.HOTKEYS))!=null?e:void 0}set hotkeys(e){L(this,Jt.HOTKEYS,e)}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",Pe(this,_t)),document.addEventListener("keydown",Pe(this,gt)))}disconnectedCallback(){this.removeEventListener("click",Pe(this,_t)),document.removeEventListener("keydown",Pe(this,gt))}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),e==="open")this.open?(this.addEventListener("click",Pe(this,_t)),document.addEventListener("keydown",Pe(this,gt))):(this.removeEventListener("click",Pe(this,_t)),document.removeEventListener("keydown",Pe(this,gt)));else if(e===Jt.HOTKEYS&&a!==i){let s=(r=this.shadowRoot)==null?void 0:r.querySelector("#content");s&&(s.innerHTML=io(a))}}};_t=new WeakMap;gt=new WeakMap;qi.getSlotTemplateHTML=Gn;l.customElements.get("media-keyboard-shortcuts-dialog")||l.customElements.define("media-keyboard-shortcuts-dialog",qi);var ao=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},q=(t,e,i)=>(ao(t,e,"read from private field"),i?i.call(t):e.get(t)),jt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Qi=(t,e,i,a)=>(ao(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),bt,At,zi,Je,Re,Ne,Tt=class{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){jt(this,Re),jt(this,bt,void 0),jt(this,At,void 0),jt(this,zi,void 0),jt(this,Je,new Set),Qi(this,bt,e),Qi(this,At,i),Qi(this,zi,new Set(a))}[Symbol.iterator](){return q(this,Re,Ne).values()}get length(){return q(this,Re,Ne).size}get value(){var e;return(e=[...q(this,Re,Ne)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Qi(this,Je,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...q(this,Re,Ne)][e]}values(){return q(this,Re,Ne).values()}forEach(e,i){q(this,Re,Ne).forEach(e,i)}add(...e){var i,a;e.forEach(r=>q(this,Je).add(r)),!(this.value===""&&!((i=q(this,bt))!=null&&i.hasAttribute(`${q(this,At)}`)))&&((a=q(this,bt))==null||a.setAttribute(`${q(this,At)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>q(this,Je).delete(a)),(i=q(this,bt))==null||i.setAttribute(`${q(this,At)}`,`${this.value}`)}contains(e){return q(this,Re,Ne).has(e)}toggle(e,i){return typeof i!="undefined"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}};bt=new WeakMap;At=new WeakMap;zi=new WeakMap;Je=new WeakMap;Re=new WeakSet;Ne=function(){return q(this,Je).size?q(this,Je):q(this,zi)};function ro(t){return t==null?void 0:t.map(qn).join(" ")}function qn(t){if(t){let{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function so(t){return t==null?void 0:t.map(Yn).join(" ")}function Yn(t){if(t){let{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(s=>s!=null).join(":")}}function St(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}var Xi=t=>new Promise(e=>setTimeout(e,t));var Qn=(t="")=>t.split(/\s+/),oo=(t="")=>{let[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?J.CAPTIONS:J.SUBTITLES,language:i,label:r}},mr=(t="",e={})=>Qn(t).map(i=>{let a=oo(i);return{...e,...a}}),pr=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?oo(e):e):typeof t=="string"?mr(t):[t]:[],zn=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,ei=(t=[])=>Array.prototype.map.call(t,zn).join(" "),Xn=(t,e)=>i=>i[t]===e,no=t=>{let e=Object.entries(t).map(([i,a])=>Xn(i,a));return i=>e.every(a=>a(i))},je=(t,e=[],i=[])=>{let a=pr(i).map(no),r=s=>a.some(n=>n(s));Array.from(e).filter(r).forEach(s=>{s.mode=t})},et=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];let i=typeof e=="function"?e:no(e);return Array.from(t.textTracks).filter(i)},lo=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(o.MEDIA_SUBTITLES_SHOWING)};var uo=t=>{var e;let{media:i,fullscreenElement:a}=t;try{let r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){let s=(e=a[r])==null?void 0:e.call(a);if(s instanceof Promise)return s.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},co="exitFullscreen"in $?"exitFullscreen":"webkitExitFullscreen"in $?"webkitExitFullscreen":"webkitCancelFullScreen"in $?"webkitCancelFullScreen":void 0,ho=t=>{var e;let{documentElement:i}=t;if(co){let a=(e=i==null?void 0:i[co])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},ti="fullscreenElement"in $?"fullscreenElement":"webkitFullscreenElement"in $?"webkitFullscreenElement":void 0,Zn=t=>{let{documentElement:e,media:i}=t,a=e==null?void 0:e[ti];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Ns.FULLSCREEN?i:a},mo=t=>{var e;let{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;let s=Zn(t);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let n=s.shadowRoot;if(!(ti in n))return ve(s,r);for(;n!=null&&n[ti];){if(n[ti]===r)return!0;n=(e=n[ti])==null?void 0:e.shadowRoot}}return!1},Jn="fullscreenEnabled"in $?"fullscreenEnabled":"webkitFullscreenEnabled"in $?"webkitFullscreenEnabled":void 0,po=t=>{let{documentElement:e,media:i}=t;return!!(e!=null&&e[Jn])||i&&"webkitSupportsFullscreen"in i};var Zi,Er=()=>{var t,e;return Zi||(Zi=(e=(t=$)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),Zi)},Eo=async(t=Er())=>{if(!t)return!1;let e=t.volume;t.volume=e/2+.1;let i=new AbortController,a=await Promise.race([jn(t,i.signal),el(t,e)]);return i.abort(),a},jn=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),el=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Xi(10)}return t.volume!==e},tl=/.*Version\/.*Safari\/.*/.test(l.navigator.userAgent),vr=(t=Er())=>l.matchMedia("(display-mode: standalone)").matches&&tl?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",fr=(t=Er())=>po({documentElement:$,media:t}),vo=fr(),fo=vr(),_o=!!l.WebKitPlaybackTargetAvailabilityEvent,go=!!l.chrome;var It=t=>et(t.media,e=>[J.SUBTITLES,J.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),_r=t=>et(t.media,e=>e.mode===Ce.SHOWING&&[J.SUBTITLES,J.CAPTIONS].includes(e.kind)),Ji=(t,e)=>{let i=It(t),a=_r(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)je(Ce.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let s=i[0],{options:n}=t;if(!(n!=null&&n.noSubtitlesLangPref)){let I=l.localStorage.getItem("media-chrome-pref-subtitles-lang"),T=I?[I,...l.navigator.languages]:l.navigator.languages,v=i.filter(m=>T.some(g=>m.language.toLowerCase().startsWith(g.split("-")[0]))).sort((m,g)=>{let E=T.findIndex(S=>m.language.toLowerCase().startsWith(S.split("-")[0])),M=T.findIndex(S=>g.language.toLowerCase().startsWith(S.split("-")[0]));return E-M});v[0]&&(s=v[0])}let{language:d,label:c,kind:k}=s;je(Ce.DISABLED,i,a),je(Ce.SHOWING,i,[{language:d,label:c,kind:k}])}}},ji=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?il(t,e):Object.entries(t).every(([i,a])=>i in e&&ji(a,e[i])),il=(t,e)=>{let i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,s)=>ji(r,e[s])):!0};var al=Object.values(te),ea,rl=Eo().then(t=>(ea=t,ea)),bo=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof l.HTMLElement))return;let i=e.localName;if(!i.includes("-"))return;let a=l.customElements.get(i);a&&e instanceof a||(await l.customElements.whenDefined(i),l.customElements.upgrade(e))}))},sl=new l.DOMParser,ol=t=>t&&(sl.parseFromString(t,"text/html").body.textContent||t),kt={mediaError:{get(t,e){let{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;let{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;let{media:r}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;let{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;let{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;let{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;let{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){let{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;let{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;let{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){let{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;let{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){let{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{let r=l.localStorage.getItem("media-chrome-pref-muted")!==null,s=i.hasAttribute("muted");if(a){r&&l.localStorage.removeItem("media-chrome-pref-muted");return}if(s&&!r)return;l.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{let{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{let r=l.localStorage.getItem("media-chrome-pref-muted")==="true";kt.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){let{media:e}=t;return e==null?void 0:e.loop},set(t,e){let{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;let{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){let{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?l.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&l.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{let{options:{noVolumePref:i}}=e;if(!i)try{let{media:a}=e;if(!a)return;let r=l.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;kt.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){let{media:e}=t;return typeof(e==null?void 0:e.volume)=="undefined"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;let{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){let{media:i}=e;!i||!St(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata","seeking"]},mediaDuration:{get(t){let{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){let{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;let{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;let{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((r,s)=>[Number(a.start(s).toFixed(3)),Number(a.end(s).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){let{media:e,options:{defaultStreamType:i}={}}=t,a=[te.LIVE,te.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;let{streamType:r}=e;if(al.includes(r))return r===te.UNKNOWN?a:r;let s=e.duration;return s===1/0?te.LIVE:Number.isFinite(s)?te.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){let{media:e}=t;if(!e)return Number.NaN;let{targetLiveWindow:i}=e,a=kt.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===te.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){let{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(kt.mediaStreamType.get(t)===te.LIVE))return!1;let r=e.seekable;if(!r)return!0;if(!r.length)return!1;let s=r.end(r.length-1)-i;return e.currentTime>=s},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return It(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return _r(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;let{media:r,options:s}=e;if(!r)return;let n=d=>{var c;!s.defaultSubtitles||d&&![J.CAPTIONS,J.SUBTITLES].includes((c=d==null?void 0:d.track)==null?void 0:c.kind)||Ji(e,!0)};return r.addEventListener("loadstart",n),(i=r.textTracks)==null||i.addEventListener("addtrack",n),(a=r.textTracks)==null||a.addEventListener("removetrack",n),()=>{var d,c;r.removeEventListener("loadstart",n),(d=r.textTracks)==null||d.removeEventListener("addtrack",n),(c=r.textTracks)==null||c.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(t){var e;let{media:i}=t;if(!i)return[];let[a]=et(i,{kind:J.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:r,startTime:s,endTime:n})=>({text:ol(r),startTime:s,endTime:n}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;let{media:a}=e;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),s=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",t),s==null||s.addEventListener("load",t),()=>{r==null||r.removeEventListener("load",t),s==null||s.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;let{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?ve(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let s=r.pictureInPictureElement.shadowRoot;for(;s!=null&&s.pictureInPictureElement;){if(s.pictureInPictureElement===a)return!0;s=(i=s.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){let{media:i}=e;if(i)if(t){if(!$.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){let s=()=>{i.removeEventListener("loadedmetadata",n),i.preload="none"},n=()=>{i.requestPictureInPicture().catch(a),s()};i.addEventListener("loadedmetadata",n),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),s()},1e3)}else throw r}else throw r})}else $.pictureInPictureElement&&$.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;let{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;let{media:r}=t;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){let{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=t,r=Array.prototype.findIndex.call(i.videoRenditions,s=>s.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;let{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;let{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){let{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}let a=t;for(let r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return mo(t)},set(t,e,i){var a,r;t?(uo(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):ho(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;let{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;let{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){let{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&l.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){let{media:e}=t;if(!vo||!fr(e))return j.UNSUPPORTED}},mediaPipUnavailable:{get(t){let{media:e}=t;if(!fo||!vr(e))return j.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return j.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){let{media:e}=t;if(ea===!1||(e==null?void 0:e.volume)==null)return j.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{ea==null&&rl.then(e=>t(e?void 0:j.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;let{media:a}=t;if(!go||!((i=a==null?void 0:a.remote)!=null&&i.state))return j.UNSUPPORTED;if(!(e==null||e==="available"))return j.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;let{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(s=>{t({availability:s?"available":"not-available"})}).catch(s=>{s.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var s;(s=a==null?void 0:a.remote)==null||s.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!_o)return j.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return j.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;let{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(s=>{t({availability:s?"available":"not-available"})}).catch(s=>{s.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var s;(s=a==null?void 0:a.remote)==null||s.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;let{media:i}=t;if(!(i!=null&&i.videoRenditions))return j.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return j.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;let{media:a}=t;if(!(a!=null&&a.audioTracks))return j.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return j.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){let{options:{mediaLang:e}={}}=t;return e!=null?e:"en"}}};var Ao={[h.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,s;let{media:n}=e,d=i!=null?i:void 0,c,k;if(n&&d!=null){let[m]=et(n,{kind:J.METADATA,label:"thumbnails"}),g=Array.prototype.find.call((a=m==null?void 0:m.cues)!=null?a:[],(E,M,S)=>M===0?E.endTime>d:M===S.length-1?E.startTime<=d:E.startTime<=d&&E.endTime>d);if(g){let E=/'^(?:[a-z]+:)?\/\//i.test(g.text)||(r=n==null?void 0:n.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,M=new URL(g.text,E);k=new URLSearchParams(M.hash).get("#xywh").split(",").map(X=>+X),c=M.href}}let I=t.mediaDuration.get(e),v=(s=t.mediaChaptersCues.get(e).find((m,g,E)=>g===E.length-1&&I===m.endTime?m.startTime<=d&&m.endTime>=d:m.startTime<=d&&m.endTime>d))==null?void 0:s.text;return i!=null&&v==null&&(v=""),{mediaPreviewTime:d,mediaPreviewImage:c,mediaPreviewCoords:k,mediaPreviewChapter:v}},[h.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[h.MEDIA_PLAY_REQUEST](t,e){var i,a,r,s;let n="mediaPaused",c=t.mediaStreamType.get(e)===te.LIVE,k=!((i=e.options)!=null&&i.noAutoSeekToLive),I=t.mediaTargetLiveWindow.get(e)>0;if(c&&k&&!I){let T=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(T){let v=(s=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?s:0,m=T-v;t.mediaCurrentTime.set(m,e)}}t[n].set(!1,e)},[h.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){let a="mediaPlaybackRate",r=i;t[a].set(r,e)},[h.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[h.MEDIA_UNMUTE_REQUEST](t,e){let i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[h.MEDIA_LOOP_REQUEST](t,e,{detail:i}){let a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[h.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){let a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[h.MEDIA_SEEK_REQUEST](t,e,{detail:i}){let a="mediaCurrentTime",r=i;t[a].set(r,e)},[h.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;let s="mediaCurrentTime",n=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(n)))return;let d=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,c=n-d;t[s].set(c,e)},[h.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;let{options:r}=e,s=It(e),n=pr(i),d=(a=n[0])==null?void 0:a.language;d&&!r.noSubtitlesLangPref&&l.localStorage.setItem("media-chrome-pref-subtitles-lang",d),je(Ce.SHOWING,s,n)},[h.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){let a=It(e),r=i!=null?i:[];je(Ce.DISABLED,a,r)},[h.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){Ji(e,i)},[h.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){let a="mediaRenditionSelected",r=i;t[a].set(r,e)},[h.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){let a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[h.MEDIA_ENTER_PIP_REQUEST](t,e){let i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[h.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[h.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){let a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[h.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[h.MEDIA_ENTER_CAST_REQUEST](t,e){let i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[h.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[h.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}};var To=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=kt,requestMap:r=Ao,options:s={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{let d=[],c={options:{...s}},k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),I=E=>{E!=null&&(ji(E,k)||(k=Object.freeze({...k,...E}),d.forEach(M=>M(k))))},T=()=>{let E=Object.entries(a).reduce((M,[S,{get:X}])=>(M[S]=X(c),M),{});I(E)},v={},m,g=async(E,M)=>{var S,X,$t,Wt,lt,Me,we,Vt,qe,os,ns,ls,ds,cs,us,hs;let fn=!!m;if(m={...c,...m!=null?m:{},...E},fn)return;await bo(...Object.values(E));let dt=d.length>0&&M===0&&n,ms=c.media!==m.media,ps=((S=c.media)==null?void 0:S.textTracks)!==((X=m.media)==null?void 0:X.textTracks),Es=(($t=c.media)==null?void 0:$t.videoRenditions)!==((Wt=m.media)==null?void 0:Wt.videoRenditions),vs=((lt=c.media)==null?void 0:lt.audioTracks)!==((Me=m.media)==null?void 0:Me.audioTracks),fs=((we=c.media)==null?void 0:we.remote)!==((Vt=m.media)==null?void 0:Vt.remote),_s=c.documentElement!==m.documentElement,gs=!!c.media&&(ms||dt),bs=!!((qe=c.media)!=null&&qe.textTracks)&&(ps||dt),As=!!((os=c.media)!=null&&os.videoRenditions)&&(Es||dt),Ts=!!((ns=c.media)!=null&&ns.audioTracks)&&(vs||dt),Ss=!!((ls=c.media)!=null&&ls.remote)&&(fs||dt),Is=!!c.documentElement&&(_s||dt),Ya=gs||bs||As||Ts||Ss||Is,ct=d.length===0&&M===1&&n,ks=!!m.media&&(ms||ct),ys=!!((ds=m.media)!=null&&ds.textTracks)&&(ps||ct),Ms=!!((cs=m.media)!=null&&cs.videoRenditions)&&(Es||ct),ws=!!((us=m.media)!=null&&us.audioTracks)&&(vs||ct),Ls=!!((hs=m.media)!=null&&hs.remote)&&(fs||ct),Rs=!!m.documentElement&&(_s||ct),Ds=ks||ys||Ms||ws||Ls||Rs;if(!(Ya||Ds)){Object.entries(m).forEach(([D,Kt])=>{c[D]=Kt}),T(),m=void 0;return}Object.entries(a).forEach(([D,{get:Kt,mediaEvents:_n=[],textTracksEvents:gn=[],videoRenditionsEvents:bn=[],audioTracksEvents:An=[],remoteEvents:Tn=[],rootEvents:Sn=[],stateOwnersUpdateHandlers:In=[]}])=>{v[D]||(v[D]={});let ee=x=>{let B=Kt(c,x);I({[D]:B})},G;G=v[D].mediaEvents,_n.forEach(x=>{G&&gs&&(c.media.removeEventListener(x,G),v[D].mediaEvents=void 0),ks&&(m.media.addEventListener(x,ee),v[D].mediaEvents=ee)}),G=v[D].textTracksEvents,gn.forEach(x=>{var B,le;G&&bs&&((B=c.media.textTracks)==null||B.removeEventListener(x,G),v[D].textTracksEvents=void 0),ys&&((le=m.media.textTracks)==null||le.addEventListener(x,ee),v[D].textTracksEvents=ee)}),G=v[D].videoRenditionsEvents,bn.forEach(x=>{var B,le;G&&As&&((B=c.media.videoRenditions)==null||B.removeEventListener(x,G),v[D].videoRenditionsEvents=void 0),Ms&&((le=m.media.videoRenditions)==null||le.addEventListener(x,ee),v[D].videoRenditionsEvents=ee)}),G=v[D].audioTracksEvents,An.forEach(x=>{var B,le;G&&Ts&&((B=c.media.audioTracks)==null||B.removeEventListener(x,G),v[D].audioTracksEvents=void 0),ws&&((le=m.media.audioTracks)==null||le.addEventListener(x,ee),v[D].audioTracksEvents=ee)}),G=v[D].remoteEvents,Tn.forEach(x=>{var B,le;G&&Ss&&((B=c.media.remote)==null||B.removeEventListener(x,G),v[D].remoteEvents=void 0),Ls&&((le=m.media.remote)==null||le.addEventListener(x,ee),v[D].remoteEvents=ee)}),G=v[D].rootEvents,Sn.forEach(x=>{G&&Is&&(c.documentElement.removeEventListener(x,G),v[D].rootEvents=void 0),Rs&&(m.documentElement.addEventListener(x,ee),v[D].rootEvents=ee)});let wi=v[D].stateOwnersUpdateHandlers;if(wi&&Ya&&(Array.isArray(wi)?wi:[wi]).forEach(B=>{typeof B=="function"&&B()}),Ds){let x=In.map(B=>B(ee,m)).filter(B=>typeof B=="function");v[D].stateOwnersUpdateHandlers=x.length===1?x[0]:x}else Ya&&(v[D].stateOwnersUpdateHandlers=void 0)}),Object.entries(m).forEach(([D,Kt])=>{c[D]=Kt}),T(),m=void 0};return g({media:t,fullscreenElement:e,documentElement:i,options:s}),{dispatch(E){let{type:M,detail:S}=E;if(r[M]&&k.mediaErrorCode==null){I(r[M](a,c,E));return}M==="mediaelementchangerequest"?g({media:S}):M==="fullscreenelementchangerequest"?g({fullscreenElement:S}):M==="documentelementchangerequest"?g({documentElement:S}):M==="optionschangerequest"&&(Object.entries(S!=null?S:{}).forEach(([X,$t])=>{c.options[X]=$t}),T())},getState(){return k},subscribe(E){return g({},d.length+1),d.push(E),E(k),()=>{let M=d.indexOf(E);M>=0&&(g({},d.length-1),d.splice(M,1))}}}};var Ir=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},p=(t,e,i)=>(Ir(t,e,"read from private field"),i?i.call(t):e.get(t)),ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},he=(t,e,i,a)=>(Ir(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Fe=(t,e,i)=>(Ir(t,e,"access private method"),i),De,ii,w,ae,ai,fe,ta,ri,ia,gr,it,aa,br,si,ra,Ar,Lo,Ro=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],So=10,Io=.025,ko=.25,nl=.25,ll=2,u={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"},Tr=class extends Qe{constructor(){super(),ie(this,ia),ie(this,aa),ie(this,si),ie(this,Ar),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ie(this,De,new Tt(this,u.HOTKEYS)),ie(this,ii,void 0),ie(this,w,void 0),ie(this,ae,null),ie(this,ai,void 0),ie(this,fe,void 0),ie(this,ta,i=>{var a;(a=p(this,w))==null||a.dispatch(i)}),ie(this,ri,void 0),ie(this,it,i=>{let{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||Ro.includes(a))){this.removeEventListener("keyup",p(this,it));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};he(this,ai,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);let s=a.toLowerCase(),n=new l.CustomEvent(Ps[s],{composed:!0,detail:r});this.dispatchEvent(n)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(u.NO_HOTKEYS,u.HOTKEYS,u.DEFAULT_STREAM_TYPE,u.DEFAULT_SUBTITLES,u.DEFAULT_DURATION,u.NO_MUTED_PREF,u.NO_VOLUME_PREF,u.LANG,u.LOOP,u.LIVE_EDGE_OFFSET,u.SEEK_TO_LIVE_OFFSET,u.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return p(this,w)}set mediaStore(e){var i,a;if(p(this,w)&&((i=p(this,fe))==null||i.call(this),he(this,fe,void 0)),he(this,w,e),!p(this,w)&&!this.hasAttribute(u.NO_DEFAULT_STORE)){Fe(this,ia,gr).call(this);return}he(this,fe,(a=p(this,w))==null?void 0:a.subscribe(p(this,ai)))}get fullscreenElement(){var e;return(e=p(this,ii))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(u.FULLSCREEN_ELEMENT)&&this.removeAttribute(u.FULLSCREEN_ELEMENT),he(this,ii,e),(i=p(this,w))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return b(this,u.DEFAULT_SUBTITLES)}set defaultSubtitles(e){A(this,u.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return R(this,u.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){L(this,u.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return C(this,u.DEFAULT_DURATION)}set defaultDuration(e){P(this,u.DEFAULT_DURATION,e)}get noHotkeys(){return b(this,u.NO_HOTKEYS)}set noHotkeys(e){A(this,u.NO_HOTKEYS,e)}get keysUsed(){return R(this,u.KEYS_USED)}set keysUsed(e){L(this,u.KEYS_USED,e)}get liveEdgeOffset(){return C(this,u.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){P(this,u.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return b(this,u.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){A(this,u.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return b(this,u.NO_VOLUME_PREF)}set noVolumePref(e){A(this,u.NO_VOLUME_PREF,e)}get noMutedPref(){return b(this,u.NO_MUTED_PREF)}set noMutedPref(e){A(this,u.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return b(this,u.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){A(this,u.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return b(this,u.NO_DEFAULT_STORE)}set noDefaultStore(e){A(this,u.NO_DEFAULT_STORE,e)}get resolvedLang(){return qs()}attributeChangedCallback(e,i,a){var r,s,n,d,c,k,I,T,v,m,g,E;if(super.attributeChangedCallback(e,i,a),e===u.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(u.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys(),Fe(this,si,ra).call(this);else if(e===u.HOTKEYS)p(this,De).value=a,Fe(this,si,ra).call(this);else if(e===u.DEFAULT_SUBTITLES&&a!==i)(r=p(this,w))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(u.DEFAULT_SUBTITLES)}});else if(e===u.DEFAULT_STREAM_TYPE)(n=p(this,w))==null||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(s=this.getAttribute(u.DEFAULT_STREAM_TYPE))!=null?s:void 0}});else if(e===u.LIVE_EDGE_OFFSET&&a!==i)(d=p(this,w))==null||d.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(u.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(u.SEEK_TO_LIVE_OFFSET):this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0}});else if(e===u.SEEK_TO_LIVE_OFFSET&&a!==i)(c=p(this,w))==null||c.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(u.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(u.SEEK_TO_LIVE_OFFSET):this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0}});else if(e===u.NO_AUTO_SEEK_TO_LIVE)(k=p(this,w))==null||k.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(u.NO_AUTO_SEEK_TO_LIVE)}});else if(e===u.FULLSCREEN_ELEMENT){let M=a?(I=this.getRootNode())==null?void 0:I.getElementById(a):void 0;he(this,ii,M),(T=p(this,w))==null||T.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===u.LANG&&a!==i?(Gs(a),(v=p(this,w))==null||v.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===u.LOOP&&a!==i?(m=p(this,w))==null||m.dispatch({type:h.MEDIA_LOOP_REQUEST,detail:a!=null}):e===u.NO_VOLUME_PREF&&a!==i?(g=p(this,w))==null||g.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(u.NO_VOLUME_PREF)}}):e===u.NO_MUTED_PREF&&a!==i&&((E=p(this,w))==null||E.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(u.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!p(this,w)&&!this.hasAttribute(u.NO_DEFAULT_STORE)&&Fe(this,ia,gr).call(this),(e=p(this,w))==null||e.dispatch({type:"documentelementchangerequest",detail:$}),(i=p(this,w))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),p(this,w)&&!p(this,fe)&&he(this,fe,(a=p(this,w))==null?void 0:a.subscribe(p(this,ai))),p(this,ri)!==void 0&&p(this,w)&&this.media&&setTimeout(()=>{var r,s,n;(s=(r=this.media)==null?void 0:r.textTracks)!=null&&s.length&&((n=p(this,w))==null||n.dispatch({type:h.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:p(this,ri)}))},0),this.hasAttribute(u.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,s,n;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),p(this,w)){let d=p(this,w).getState();he(this,ri,!!((i=d.mediaSubtitlesShowing)!=null&&i.length)),(a=p(this,w))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=p(this,w))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(s=p(this,w))==null||s.dispatch({type:h.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}p(this,fe)&&((n=p(this,fe))==null||n.call(this),he(this,fe,void 0)),this.unassociateElement(this),p(this,ae)&&(p(this,ae).remove(),he(this,ae,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=p(this,w))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=p(this,w))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){wo(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:i}=this;if(i.has(e))return;let a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),s=pl(e,a,r);Object.values(h).forEach(n=>{e.addEventListener(n,p(this,ta))}),i.set(e,s)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(h).forEach(r=>{e.removeEventListener(r,p(this,ta))})}registerMediaStateReceiver(e){if(!e)return;let i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),p(this,w)&&Object.entries(p(this,w).getState()).forEach(([r,s])=>{wo([e],r,s)}))}unregisterMediaStateReceiver(e){let i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Fe(this,aa,br))}disableHotkeys(){this.removeEventListener("keydown",Fe(this,aa,br)),this.removeEventListener("keyup",p(this,it))}get hotkeys(){return p(this,De)}set hotkeys(e){L(this,u.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,s,n,d,c,k,I;let T=e.target;if(((r=(a=(i=T.getAttribute(u.KEYS_USED))==null?void 0:i.split(" "))!=null?a:T==null?void 0:T.keysUsed)!=null?r:[]).map(S=>S==="Space"?" ":S).filter(Boolean).includes(e.key))return;let m,g,E;if(!(p(this,De).contains(Yi(e.key))||e.shiftKey&&(e.key==="/"||e.key==="?")&&p(this,De).contains("noshift+/")))switch(e.key){case" ":case"k":m=p(this,w).getState().mediaPaused?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new l.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"m":m=this.mediaStore.getState().mediaVolumeLevel==="off"?h.MEDIA_UNMUTE_REQUEST:h.MEDIA_MUTE_REQUEST,this.dispatchEvent(new l.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"f":m=this.mediaStore.getState().mediaIsFullscreen?h.MEDIA_EXIT_FULLSCREEN_REQUEST:h.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new l.CustomEvent(m,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new l.CustomEvent(h.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let S=this.hasAttribute(u.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(u.KEYBOARD_BACKWARD_SEEK_OFFSET):So;g=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)-S,0),E=new l.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(E);break}case"ArrowRight":case"l":{let S=this.hasAttribute(u.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(u.KEYBOARD_FORWARD_SEEK_OFFSET):So;g=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)+S,0),E=new l.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(E);break}case"ArrowUp":{let S=this.hasAttribute(u.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(u.KEYBOARD_UP_VOLUME_STEP):Io;g=Math.min(((d=this.mediaStore.getState().mediaVolume)!=null?d:1)+S,1),E=new l.CustomEvent(h.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(E);break}case"ArrowDown":{let S=this.hasAttribute(u.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(u.KEYBOARD_DOWN_VOLUME_STEP):Io;g=Math.max(((c=this.mediaStore.getState().mediaVolume)!=null?c:1)-S,0),E=new l.CustomEvent(h.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(E);break}case"<":{let S=(k=this.mediaStore.getState().mediaPlaybackRate)!=null?k:1;g=Math.max(S-ko,nl).toFixed(2),E=new l.CustomEvent(h.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(E);break}case">":{let S=(I=this.mediaStore.getState().mediaPlaybackRate)!=null?I:1;g=Math.min(S+ko,ll).toFixed(2),E=new l.CustomEvent(h.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:g}),this.dispatchEvent(E);break}case"/":case"?":{e.shiftKey&&Fe(this,Ar,Lo).call(this);break}case"p":{m=this.mediaStore.getState().mediaIsPip?h.MEDIA_EXIT_PIP_REQUEST:h.MEDIA_ENTER_PIP_REQUEST,E=new l.CustomEvent(m,{composed:!0,bubbles:!0}),this.dispatchEvent(E);break}default:break}}};De=new WeakMap;ii=new WeakMap;w=new WeakMap;ae=new WeakMap;ai=new WeakMap;fe=new WeakMap;ta=new WeakMap;ri=new WeakMap;ia=new WeakSet;gr=function(){var t;this.mediaStore=To({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(u.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(u.DEFAULT_DURATION)?+this.getAttribute(u.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(u.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(u.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(u.SEEK_TO_LIVE_OFFSET):this.hasAttribute(u.LIVE_EDGE_OFFSET)?+this.getAttribute(u.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(u.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(u.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(u.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(u.NO_SUBTITLES_LANG_PREF)}})};it=new WeakMap;aa=new WeakSet;br=function(t){var e;let{metaKey:i,altKey:a,key:r,shiftKey:s}=t,n=s&&(r==="/"||r==="?");if(n&&((e=p(this,ae))!=null&&e.open)){this.removeEventListener("keyup",p(this,it));return}if(i||a||!n&&!Ro.includes(r)){this.removeEventListener("keyup",p(this,it));return}let d=t.target,c=d instanceof HTMLElement&&(d.tagName.toLowerCase()==="media-volume-range"||d.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!p(this,De).contains(Yi(r))&&!c&&t.preventDefault(),this.addEventListener("keyup",p(this,it),{once:!0})};si=new WeakSet;ra=function(){p(this,ae)&&(p(this,ae).hotkeys=p(this,De).value||void 0,(this.noHotkeys||p(this,De).contains("noshift+/"))&&(p(this,ae).open=!1))};Ar=new WeakSet;Lo=function(){p(this,ae)||(he(this,ae,$.createElement("media-keyboard-shortcuts-dialog")),Fe(this,si,ra).call(this),this.appendChild(p(this,ae))),p(this,ae).open=!0};var dl=Object.values(o),cl=Object.values(za),Do=t=>{var e,i,a,r;let{observedAttributes:s}=t.constructor;!s&&((e=t.nodeName)!=null&&e.includes("-"))&&(l.customElements.upgrade(t),{observedAttributes:s}=t.constructor);let n=(r=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,y.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(s||n)?(s||n).filter(d=>dl.includes(d)):[]},ul=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&l.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof l.customElements.get(t.nodeName.toLowerCase()))&&l.customElements.upgrade(t),cl.some(a=>a in t)},Sr=t=>ul(t)||!!Do(t).length,yo=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},Mo={[o.MEDIA_SUBTITLES_LIST]:ei,[o.MEDIA_SUBTITLES_SHOWING]:ei,[o.MEDIA_SEEKABLE]:yo,[o.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(yo).join(" "),[o.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[o.MEDIA_RENDITION_LIST]:ro,[o.MEDIA_AUDIO_TRACK_LIST]:so},hl=async(t,e,i)=>{var a,r;if(t.isConnected||await Xi(0),typeof i=="boolean"||i==null)return A(t,e,i);if(typeof i=="number")return P(t,e,i);if(typeof i=="string")return L(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);let s=(r=(a=Mo[e])==null?void 0:a.call(Mo,i))!=null?r:i;return t.setAttribute(e,s)},ml=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},tt=(t,e)=>{if(ml(t))return;let i=(r,s)=>{var n,d;Sr(r)&&s(r);let{children:c=[]}=r!=null?r:{},k=(d=(n=r==null?void 0:r.shadowRoot)==null?void 0:n.children)!=null?d:[];[...c,...k].forEach(T=>tt(T,s))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!Sr(t)){l.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},wo=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}let r=Do(a),s=e.toLowerCase();r.includes(s)&&hl(a,s,i)})},pl=(t,e,i)=>{tt(t,e);let a=I=>{var T;let v=(T=I==null?void 0:I.composedPath()[0])!=null?T:I.target;e(v)},r=I=>{var T;let v=(T=I==null?void 0:I.composedPath()[0])!=null?T:I.target;i(v)};t.addEventListener(h.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(h.UNREGISTER_MEDIA_STATE_RECEIVER,r);let s=I=>{I.forEach(T=>{let{addedNodes:v=[],removedNodes:m=[],type:g,target:E,attributeName:M}=T;g==="childList"?(Array.prototype.forEach.call(v,S=>tt(S,e)),Array.prototype.forEach.call(m,S=>tt(S,i))):g==="attributes"&&M===y.MEDIA_CHROME_ATTRIBUTES&&(Sr(E)?e(E):i(E))})},n=[],d=I=>{let T=I.target;T.name!=="media"&&(n.forEach(v=>tt(v,i)),n=[...T.assignedElements({flatten:!0})],n.forEach(v=>tt(v,e)))};t.addEventListener("slotchange",d);let c=new MutationObserver(s);return c.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{tt(t,i),t.removeEventListener("slotchange",d),c.disconnect(),t.removeEventListener(h.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(h.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};l.customElements.get("media-controller")||l.customElements.define("media-controller",Tr);var Co=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},sa=(t,e,i)=>(Co(t,e,"read from private field"),i?i.call(t):e.get(t)),El=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},oa=(t,e,i,a)=>(Co(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),_e;function vl(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}var oi=class extends l.HTMLElement{constructor(){if(super(),El(this,_e,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,n,d,c;e===y.MEDIA_CONTROLLER&&(i&&((s=(r=sa(this,_e))==null?void 0:r.unassociateElement)==null||s.call(r,this),oa(this,_e,null)),a&&this.isConnected&&(oa(this,_e,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(c=(d=sa(this,_e))==null?void 0:d.associateElement)==null||c.call(d,this)))}connectedCallback(){var e,i,a;let r=this.getAttribute(y.MEDIA_CONTROLLER);r&&(oa(this,_e,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=sa(this,_e))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=sa(this,_e))==null?void 0:e.unassociateElement)==null||i.call(e,this),oa(this,_e,null)}};_e=new WeakMap;oi.shadowRootOptions={mode:"open"};oi.getTemplateHTML=vl;l.customElements.get("media-control-bar")||l.customElements.define("media-control-bar",oi);var yt={PLACEMENT:"placement",BOUNDS:"bounds"};function fl(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}var Mt=class extends l.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Ni(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}let a=getComputedStyle(this),r=(e=Oe(this,"#"+this.bounds))!=null?e:Bs(this);if(!r)return;let{x:s,width:n}=r.getBoundingClientRect(),{x:d,width:c}=this.getBoundingClientRect(),k=d+c,I=s+n,T=a.getPropertyValue("--media-tooltip-offset-x"),v=T?parseFloat(T.replace("px","")):0,m=a.getPropertyValue("--media-tooltip-container-margin"),g=m?parseFloat(m.replace("px","")):0,E=d-s+v-g,M=k-I+v+g;if(E<0){this.style.setProperty("--media-tooltip-offset-x",`${E}px`);return}if(M>0){this.style.setProperty("--media-tooltip-offset-x",`${M}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[yt.PLACEMENT,yt.BOUNDS]}get placement(){return R(this,yt.PLACEMENT)}set placement(e){L(this,yt.PLACEMENT,e)}get bounds(){return R(this,yt.BOUNDS)}set bounds(e){L(this,yt.BOUNDS,e)}};Mt.shadowRootOptions={mode:"open"};Mt.getTemplateHTML=fl;l.customElements.get("media-tooltip")||l.customElements.define("media-tooltip",Mt);var kr=Mt;var wr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},V=(t,e,i)=>(wr(t,e,"read from private field"),i?i.call(t):e.get(t)),at=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},na=(t,e,i,a)=>(wr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Oo=(t,e,i)=>(wr(t,e,"access private method"),i),ge,Lt,yr,Uo,Be,wt,la,Mr,xo,He={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function _l(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${kr.shadowRootOptions.mode}">
          ${kr.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function gl(t,e){return`
    <slot></slot>
  `}function bl(){return""}var N=class extends l.HTMLElement{constructor(){if(super(),at(this,yr),at(this,Mr),at(this,ge,void 0),this.preventClick=!1,this.tooltipEl=null,at(this,Lt,e=>{this.preventClick||this.handleClick(e),setTimeout(V(this,Be),0)}),at(this,Be,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),at(this,wt,e=>{let{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",V(this,wt));return}this.preventClick||this.handleClick(e)}),at(this,la,e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",V(this,wt));return}this.addEventListener("keyup",V(this,wt),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",He.TOOLTIP_PLACEMENT,y.MEDIA_CONTROLLER,o.MEDIA_LANG]}enable(){this.addEventListener("click",V(this,Lt)),this.addEventListener("keydown",V(this,la)),this.tabIndex=0}disable(){this.removeEventListener("click",V(this,Lt)),this.removeEventListener("keydown",V(this,la)),this.removeEventListener("keyup",V(this,wt)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,s,n,d,c;e===y.MEDIA_CONTROLLER?(i&&((s=(r=V(this,ge))==null?void 0:r.unassociateElement)==null||s.call(r,this),na(this,ge,null)),a&&this.isConnected&&(na(this,ge,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(c=(d=V(this,ge))==null?void 0:d.associateElement)==null||c.call(d,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===He.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===o.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),Oo(this,yr,Uo).call(this)&&V(this,Be).call(this)}connectedCallback(){var e,i,a;let{style:r}=O(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let s=this.getAttribute(y.MEDIA_CONTROLLER);s&&(na(this,ge,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=V(this,ge))==null?void 0:i.associateElement)==null||a.call(i,this)),l.customElements.whenDefined("media-tooltip").then(()=>Oo(this,Mr,xo).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=V(this,ge))==null?void 0:e.unassociateElement)==null||i.call(e,this),na(this,ge,null),this.removeEventListener("mouseenter",V(this,Be)),this.removeEventListener("focus",V(this,Be)),this.removeEventListener("click",V(this,Lt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return R(this,He.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){L(this,He.TOOLTIP_PLACEMENT,e)}get mediaController(){return R(this,y.MEDIA_CONTROLLER)}set mediaController(e){L(this,y.MEDIA_CONTROLLER,e)}get disabled(){return b(this,He.DISABLED)}set disabled(e){A(this,He.DISABLED,e)}get noTooltip(){return b(this,He.NO_TOOLTIP)}set noTooltip(e){A(this,He.NO_TOOLTIP,e)}handleClick(e){}};ge=new WeakMap;Lt=new WeakMap;yr=new WeakSet;Uo=function(){try{return this.matches(":hover, :focus-visible")}catch{return this.matches(":hover, :focus")}};Be=new WeakMap;wt=new WeakMap;la=new WeakMap;Mr=new WeakSet;xo=function(){this.addEventListener("mouseenter",V(this,Be)),this.addEventListener("focus",V(this,Be)),this.addEventListener("click",V(this,Lt));let t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};N.shadowRootOptions={mode:"open"};N.getTemplateHTML=_l;N.getSlotTemplateHTML=gl;N.getTooltipContentHTML=bl;l.customElements.get("media-chrome-button")||l.customElements.define("media-chrome-button",N);var Al=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,Tl=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function Sl(t){return`
    <style>
      :host([${o.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${o.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${o.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${o.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Al}</slot>
      <slot name="pause">${Tl}</slot>
    </slot>
  `}function Il(){return`
    <slot name="tooltip-play">${f("Play")}</slot>
    <slot name="tooltip-pause">${f("Pause")}</slot>
  `}var Po=t=>{let e=t.mediaPaused?f("play"):f("pause");t.setAttribute("aria-label",e)},ni=class extends N{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED,o.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Po(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===o.MEDIA_PAUSED||e===o.MEDIA_LANG)&&Po(this)}get mediaPaused(){return b(this,o.MEDIA_PAUSED)}set mediaPaused(e){A(this,o.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?h.MEDIA_PLAY_REQUEST:h.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};ni.getSlotTemplateHTML=Sl;ni.getTooltipContentHTML=Il;l.customElements.get("media-play-button")||l.customElements.define("media-play-button",ni);var xr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},F=(t,e,i)=>(xr(t,e,"read from private field"),i?i.call(t):e.get(t)),z=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$e=(t,e,i,a)=>(xr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),me=(t,e,i)=>(xr(t,e,"access private method"),i),be,_a,da,ca,pe,va,ua,ha,ma,Pr,No,pa,Lr,Ea,Rr,fa,Nr,Dr,Fo,Cr,Ho,Or,Bo,Ur,$o;function kl(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function yl(t){return""}var Ae=class extends l.HTMLElement{constructor(){if(super(),z(this,Pr),z(this,pa),z(this,Ea),z(this,fa),z(this,Dr),z(this,Cr),z(this,Or),z(this,Ur),z(this,be,void 0),z(this,_a,void 0),z(this,da,void 0),z(this,ca,void 0),z(this,pe,{}),z(this,va,[]),z(this,ua,()=>{if(this.range.matches(":focus-visible")){let{style:e}=O(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),z(this,ha,()=>{let{style:e}=O(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),z(this,ma,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),$e(this,da,this.shadowRoot.querySelector("#startpoint")),$e(this,ca,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",y.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,n,d,c;e===y.MEDIA_CONTROLLER?(i&&((s=(r=F(this,be))==null?void 0:r.unassociateElement)==null||s.call(r,this),$e(this,be,null)),a&&this.isConnected&&($e(this,be,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(c=(d=F(this,be))==null?void 0:d.associateElement)==null||c.call(d,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),me(this,pa,Lr).call(this)):(this.range.setAttribute(e,a),me(this,Ea,Rr).call(this)))}connectedCallback(){var e,i,a;let{style:r}=O(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),F(this,pe).pointer=O(this.shadowRoot,"#pointer"),F(this,pe).progress=O(this.shadowRoot,"#progress"),F(this,pe).thumb=O(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),F(this,pe).activeSegment=O(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let s=this.getAttribute(y.MEDIA_CONTROLLER);s&&($e(this,be,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=F(this,be))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",F(this,ua)),this.shadowRoot.addEventListener("focusout",F(this,ha)),me(this,pa,Lr).call(this),Oi(this.container,F(this,ma))}disconnectedCallback(){var e,i;me(this,Ea,Rr).call(this),(i=(e=F(this,be))==null?void 0:e.unassociateElement)==null||i.call(e,this),$e(this,be,null),this.shadowRoot.removeEventListener("focusin",F(this,ua)),this.shadowRoot.removeEventListener("focusout",F(this,ha)),Ui(this.container,F(this,ma))}updatePointerBar(e){var i;(i=F(this,pe).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;let a=this.range.valueAsNumber*100;(e=F(this,pe).progress)==null||e.style.setProperty("width",`${a}%`),(i=F(this,pe).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){let i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;let a=[...new Set([+this.range.min,...e.flatMap(s=>[s.start,s.end]),+this.range.max])];$e(this,va,[...a]);let r=a.pop();for(let[s,n]of a.entries()){let[d,c]=[s===0,s===a.length-1],k=d?"calc(var(--segments-gap) / -1)":`${n*100}%`,T=`calc(${((c?r:a[s+1])-n)*100}%${d||c?"":" - var(--segments-gap)"})`,v=$.createElementNS("http://www.w3.org/2000/svg","rect"),m=Ja(this.shadowRoot,`#segments-clipping rect:nth-child(${s+1})`);m.style.setProperty("x",k),m.style.setProperty("width",T),i.append(v)}}getPointerRatio(e){return $s(e.clientX,e.clientY,F(this,da).getBoundingClientRect(),F(this,ca).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":me(this,Ur,$o).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":me(this,Dr,Fo).call(this,e);break;case"pointerdown":me(this,fa,Nr).call(this,e);break;case"pointerup":me(this,Cr,Ho).call(this);break;case"pointerleave":me(this,Or,Bo).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}};be=new WeakMap;_a=new WeakMap;da=new WeakMap;ca=new WeakMap;pe=new WeakMap;va=new WeakMap;ua=new WeakMap;ha=new WeakMap;ma=new WeakMap;Pr=new WeakSet;No=function(t){let e=F(this,pe).activeSegment;if(!e)return;let i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${F(this,va).findIndex((s,n,d)=>{let c=d[n+1];return c!=null&&i>=s&&i<=c})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};pa=new WeakSet;Lr=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Ea=new WeakSet;Rr=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=l.window)==null||t.removeEventListener("pointerup",this),(e=l.window)==null||e.removeEventListener("pointermove",this)};fa=new WeakSet;Nr=function(t){var e;$e(this,_a,t.composedPath().includes(this.range)),(e=l.window)==null||e.addEventListener("pointerup",this,{once:!0})};Dr=new WeakSet;Fo=function(t){var e;t.pointerType!=="mouse"&&me(this,fa,Nr).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=l.window)==null||e.addEventListener("pointermove",this)};Cr=new WeakSet;Ho=function(){var t;(t=l.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Or=new WeakSet;Bo=function(){var t,e;this.removeEventListener("pointerleave",this),(t=l.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=F(this,pe).activeSegment)==null||e.style.removeProperty("transform")};Ur=new WeakSet;$o=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),me(this,Pr,No).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!F(this,_a))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};Ae.shadowRootOptions={mode:"open"};Ae.getTemplateHTML=kl;Ae.getContainerTemplateHTML=yl;l.customElements.get("media-chrome-range")||l.customElements.define("media-chrome-range",Ae);var Wo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ga=(t,e,i)=>(Wo(t,e,"read from private field"),i?i.call(t):e.get(t)),Ml=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ba=(t,e,i,a)=>(Wo(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Te;function wl(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}var Rt=class extends l.HTMLElement{constructor(){if(super(),Ml(this,Te,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;let r=this.getAttribute(y.MEDIA_CONTROLLER);r&&(ba(this,Te,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=ga(this,Te))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=ga(this,Te))==null?void 0:e.unassociateElement)==null||i.call(e,this),ba(this,Te,null)}attributeChangedCallback(e,i,a){var r,s,n,d,c;[o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===y.MEDIA_CONTROLLER&&(i&&((s=(r=ga(this,Te))==null?void 0:r.unassociateElement)==null||s.call(r,this),ba(this,Te,null)),a&&this.isConnected&&(ba(this,Te,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(c=(d=ga(this,Te))==null?void 0:d.associateElement)==null||c.call(d,this)))}get mediaPreviewImage(){return R(this,o.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){L(this,o.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(o.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(o.MEDIA_PREVIEW_COORDS);return}this.setAttribute(o.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;let[a,r,s,n]=e,d=i.split("#")[0],c=getComputedStyle(this),{maxWidth:k,maxHeight:I,minWidth:T,minHeight:v}=c,m=c.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain",g,E;if(m==="fill"){let Me=parseInt(k)/s,we=parseInt(I)/n,Vt=parseInt(T)/s,qe=parseInt(v)/n;g=Me<1?Me:Math.max(Me,Vt),E=we<1?we:Math.max(we,qe)}else{let Me=Math.min(parseInt(k)/s,parseInt(I)/n),we=Math.max(parseInt(T)/s,parseInt(v)/n),qe=Me<1?Me:we>1?we:1;g=qe,E=qe}let{style:M}=O(this.shadowRoot,":host"),S=O(this.shadowRoot,"img").style,X=this.shadowRoot.querySelector("img"),Wt=Math.min(g,E)<1?"min":"max";M.setProperty(`${Wt}-width`,"initial","important"),M.setProperty(`${Wt}-height`,"initial","important"),M.width=`${s*g}px`,M.height=`${n*E}px`;let lt=()=>{S.width=`${this.imgWidth*g}px`,S.height=`${this.imgHeight*E}px`,S.display="block"};X.src!==d&&(X.onload=()=>{this.imgWidth=X.naturalWidth,this.imgHeight=X.naturalHeight,lt(),X.onload=null},X.src=d,lt()),lt(),S.transform=`translate(-${a*g}px, -${r*E}px)`}};Te=new WeakMap;Rt.shadowRootOptions={mode:"open"};Rt.getTemplateHTML=wl;l.customElements.get("media-preview-thumbnail")||l.customElements.define("media-preview-thumbnail",Rt);var Fr=Rt;var Vo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Aa=(t,e,i)=>(Vo(t,e,"read from private field"),i?i.call(t):e.get(t)),Ll=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ta=(t,e,i,a)=>(Vo(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Se;function Rl(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function Dl(t,e){return`
    <slot></slot>
  `}var se=class extends l.HTMLElement{constructor(){if(super(),Ll(this,Se,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,n,d,c;e===y.MEDIA_CONTROLLER&&(i&&((s=(r=Aa(this,Se))==null?void 0:r.unassociateElement)==null||s.call(r,this),Ta(this,Se,null)),a&&this.isConnected&&(Ta(this,Se,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(c=(d=Aa(this,Se))==null?void 0:d.associateElement)==null||c.call(d,this)))}connectedCallback(){var e,i,a;let{style:r}=O(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let s=this.getAttribute(y.MEDIA_CONTROLLER);s&&(Ta(this,Se,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=Aa(this,Se))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Aa(this,Se))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ta(this,Se,null)}};Se=new WeakMap;se.shadowRootOptions={mode:"open"};se.getTemplateHTML=Rl;se.getSlotTemplateHTML=Dl;l.customElements.get("media-text-display")||l.customElements.define("media-text-display",se);var Ko=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Go=(t,e)=>{let i=t===1?f(Ko[e].singular):f(Ko[e].plural);return`${t} ${i}`},rt=t=>{if(!St(t))return"";let e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),s=[a.getHours(),a.getMinutes(),a.getSeconds()].map((n,d)=>n&&Go(n,d)).filter(n=>n).join(", ");return i?f("{time} remaining",{time:s}):e===0?Go(0,2):s};function st(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),s=Math.floor(t/3600),n=Math.floor(e/60%60),d=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(s=r=a="0"),s=s>0||d>0?s+":":"",r=((s||n>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+s+r+a}var Cu=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});var Yo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},qo=(t,e,i)=>(Yo(t,e,"read from private field"),i?i.call(t):e.get(t)),Cl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ol=(t,e,i,a)=>(Yo(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),li,Hr=class extends se{constructor(){super(),Cl(this,li,void 0),Ol(this,li,this.shadowRoot.querySelector("slot")),qo(this,li).textContent=st(0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_PREVIEW_TIME&&a!=null&&(qo(this,li).textContent=st(parseFloat(a)))}get mediaPreviewTime(){return C(this,o.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){P(this,o.MEDIA_PREVIEW_TIME,e)}};li=new WeakMap;l.customElements.get("media-preview-time-display")||l.customElements.define("media-preview-time-display",Hr);var Qo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ul=(t,e,i)=>(Qo(t,e,"read from private field"),i?i.call(t):e.get(t)),xl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Pl=(t,e,i,a)=>(Qo(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Sa,Br=class extends se{constructor(){super(),xl(this,Sa,void 0),Pl(this,Sa,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_CHAPTER,o.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===o.MEDIA_PREVIEW_CHAPTER||e===o.MEDIA_LANG)&&a!==i&&a!=null)if(Ul(this,Sa).textContent=a,a!==""){let r=f("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return R(this,o.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){L(this,o.MEDIA_PREVIEW_CHAPTER,e)}};Sa=new WeakMap;l.customElements.get("media-preview-chapter-display")||l.customElements.define("media-preview-chapter-display",Br);var zo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Y=(t,e,i)=>(zo(t,e,"read from private field"),i?i.call(t):e.get(t)),Ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},re=(t,e,i,a)=>(zo(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Nl=(t,e,i,a)=>({set _(r){re(t,e,r,i)},get _(){return Y(t,e,a)}}),Dt,Ia,Ct,di,ka,ya,Ma,Ot,ot,wa,La=class{constructor(e,i,a){Ie(this,Dt,void 0),Ie(this,Ia,void 0),Ie(this,Ct,void 0),Ie(this,di,void 0),Ie(this,ka,void 0),Ie(this,ya,void 0),Ie(this,Ma,void 0),Ie(this,Ot,void 0),Ie(this,ot,0),Ie(this,wa,(r=performance.now())=>{re(this,ot,requestAnimationFrame(Y(this,wa))),re(this,di,performance.now()-Y(this,Ct));let s=1e3/this.fps;if(Y(this,di)>s){re(this,Ct,r-Y(this,di)%s);let n=1e3/((r-Y(this,Ia))/++Nl(this,ka)._),d=(r-Y(this,ya))/1e3/this.duration,c=Y(this,Ma)+d*this.playbackRate;c-Y(this,Dt).valueAsNumber>0?re(this,Ot,this.playbackRate/this.duration/n):(re(this,Ot,.995*Y(this,Ot)),c=Y(this,Dt).valueAsNumber+Y(this,Ot)),this.callback(c)}}),re(this,Dt,e),this.callback=i,this.fps=a}start(){Y(this,ot)===0&&(re(this,Ct,performance.now()),re(this,Ia,Y(this,Ct)),re(this,ka,0),Y(this,wa).call(this))}stop(){Y(this,ot)!==0&&(cancelAnimationFrame(Y(this,ot)),re(this,ot,0))}update({start:e,duration:i,playbackRate:a}){let r=e-Y(this,Dt).valueAsNumber,s=Math.abs(i-this.duration);(r>0||r<-.5/i||s>=.5)&&this.callback(e),re(this,Ma,e),re(this,ya,performance.now()),this.duration=i,this.playbackRate=a}};Dt=new WeakMap;Ia=new WeakMap;Ct=new WeakMap;di=new WeakMap;ka=new WeakMap;ya=new WeakMap;Ma=new WeakMap;Ot=new WeakMap;ot=new WeakMap;wa=new WeakMap;var Gr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},U=(t,e,i)=>(Gr(t,e,"read from private field"),i?i.call(t):e.get(t)),K=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},oe=(t,e,i,a)=>(Gr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ne=(t,e,i)=>(Gr(t,e,"access private method"),i),Ut,We,Ca,ui,Oa,Da,hi,mi,xt,Pt,ci,$r,Xo,Wr,Ua,qr,xa,Yr,Pa,Qr,Vr,Zo,pi,Na,Kr,Jo,Fl=t=>{let e=t.range,i=rt(+jo(t)),a=rt(+t.mediaSeekableEnd),r=i&&a?f("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):f("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function Hl(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${o.MEDIA_PREVIEW_IMAGE}], [${o.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${o.MEDIA_PREVIEW_IMAGE}], [${o.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${o.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${o.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${o.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${Fr.shadowRootOptions.mode}">
            ${Fr.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}var Ra=(t,e=t.mediaCurrentTime)=>{let i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;let r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},jo=(t,e=t.range.valueAsNumber)=>{let i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i},Ei=class extends Ae{constructor(){super(),K(this,$r),K(this,Ua),K(this,xa),K(this,Pa),K(this,Vr),K(this,pi),K(this,Kr),K(this,Ut,null),K(this,We,void 0),K(this,Ca,void 0),K(this,ui,void 0),K(this,Oa,void 0),K(this,Da,void 0),K(this,hi,void 0),K(this,mi,void 0),K(this,xt,void 0),K(this,Pt,void 0),K(this,ci,()=>{ne(this,$r,Xo).call(this)?U(this,We).start():U(this,We).stop()}),K(this,Wr,a=>{this.dragging||(St(a)&&(this.range.valueAsNumber=a),U(this,Pt)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),oe(this,Ca,this.shadowRoot.querySelectorAll('[part~="box"]')),oe(this,Oa,this.shadowRoot.querySelector('[part~="preview-box"]')),oe(this,Da,this.shadowRoot.querySelector('[part~="current-box"]'));let i=getComputedStyle(this);oe(this,hi,parseInt(i.getPropertyValue("--media-box-padding-left"))),oe(this,mi,parseInt(i.getPropertyValue("--media-box-padding-right"))),oe(this,We,new La(this.range,U(this,Wr),60))}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED,o.MEDIA_DURATION,o.MEDIA_SEEKABLE,o.MEDIA_CURRENT_TIME,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_TIME,o.MEDIA_PREVIEW_CHAPTER,o.MEDIA_BUFFERED,o.MEDIA_PLAYBACK_RATE,o.MEDIA_LOADING,o.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",f("seek")),U(this,ci).call(this),oe(this,Ut,this.getRootNode()),(e=U(this,Ut))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),U(this,We).stop(),(e=U(this,Ut))==null||e.removeEventListener("transitionstart",this),oe(this,Ut,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===o.MEDIA_CURRENT_TIME||e===o.MEDIA_PAUSED||e===o.MEDIA_ENDED||e===o.MEDIA_LOADING||e===o.MEDIA_DURATION||e===o.MEDIA_SEEKABLE?(U(this,We).update({start:Ra(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),U(this,ci).call(this),Fl(this)):e===o.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===o.MEDIA_DURATION||e===o.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=U(this,xt),this.updateBar()))}get mediaChaptersCues(){return U(this,xt)}set mediaChaptersCues(e){var i;oe(this,xt,e),this.updateSegments((i=U(this,xt))==null?void 0:i.map(a=>({start:Ra(this,a.startTime),end:Ra(this,a.endTime)})))}get mediaPaused(){return b(this,o.MEDIA_PAUSED)}set mediaPaused(e){A(this,o.MEDIA_PAUSED,e)}get mediaLoading(){return b(this,o.MEDIA_LOADING)}set mediaLoading(e){A(this,o.MEDIA_LOADING,e)}get mediaDuration(){return C(this,o.MEDIA_DURATION)}set mediaDuration(e){P(this,o.MEDIA_DURATION,e)}get mediaCurrentTime(){return C(this,o.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){P(this,o.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return C(this,o.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){P(this,o.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(o.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(o.MEDIA_BUFFERED);return}let i=e.map(a=>a.join(":")).join(" ");this.setAttribute(o.MEDIA_BUFFERED,i)}get mediaSeekable(){let e=this.getAttribute(o.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(o.MEDIA_SEEKABLE);return}this.setAttribute(o.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;let[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return R(this,o.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){L(this,o.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return C(this,o.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){P(this,o.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return b(this,o.MEDIA_ENDED)}set mediaEnded(e){A(this,o.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{let s=this.mediaCurrentTime,[,n=this.mediaSeekableStart]=(e=i.find(([d,c])=>d<=s&&s<=c))!=null?e:[];a=Ra(this,n)}let{style:r}=O(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let i=O(this.shadowRoot,"#current-rail"),a=O(this.shadowRoot,'[part~="current-box"]'),r=ne(this,Ua,qr).call(this,U(this,Da)),s=ne(this,xa,Yr).call(this,r,this.range.valueAsNumber),n=ne(this,Pa,Qr).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${s})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${n}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":ne(this,Kr,Jo).call(this);break;case"pointermove":ne(this,Vr,Zo).call(this,e);break;case"pointerup":U(this,Pt)&&oe(this,Pt,!1);break;case"pointerdown":oe(this,Pt,!0);break;case"pointerleave":ne(this,pi,Na).call(this,null);break;case"transitionstart":ve(e.target,this)&&setTimeout(()=>U(this,ci).call(this),0);break}}};Ut=new WeakMap;We=new WeakMap;Ca=new WeakMap;ui=new WeakMap;Oa=new WeakMap;Da=new WeakMap;hi=new WeakMap;mi=new WeakMap;xt=new WeakMap;Pt=new WeakMap;ci=new WeakMap;$r=new WeakSet;Xo=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Ni(this)};Wr=new WeakMap;Ua=new WeakSet;qr=function(t){var e;let a=((e=this.getAttribute("bounds")?Oe(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),s=t.offsetWidth,n=-(r.left-a.left-s/2),d=a.right-r.left-s/2;return{box:{width:s,min:n,max:d},bounds:a,range:r}};xa=new WeakSet;Yr=function(t,e){let i=`${e*100}%`,{width:a,min:r,max:s}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(s)){let d=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${d})`}return i};Pa=new WeakSet;Qr=function(t,e){let{width:i,min:a,max:r}=t.box,s=e*t.range.width;if(s<a+U(this,hi)){let n=t.range.left-t.bounds.left-U(this,hi);return`${s-i/2+n}px`}if(s>r-U(this,mi)){let n=t.bounds.right-t.range.right-U(this,mi);return`${s+i/2-n-t.range.width}px`}return 0};Vr=new WeakSet;Zo=function(t){let e=[...U(this,Ca)].some(I=>t.composedPath().includes(I));if(!this.dragging&&(e||!t.composedPath().includes(this))){ne(this,pi,Na).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=O(this.shadowRoot,"#preview-rail"),r=O(this.shadowRoot,'[part~="preview-box"]'),s=ne(this,Ua,qr).call(this,U(this,Oa)),n=(t.clientX-s.range.left)/s.range.width;n=Math.max(0,Math.min(1,n));let d=ne(this,xa,Yr).call(this,s,n),c=ne(this,Pa,Qr).call(this,s,n);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${c}`),r.style.setProperty("--_box-width",`${s.box.width}px`);let k=Math.round(U(this,ui))-Math.round(n*i);Math.abs(k)<1&&n>.01&&n<.99||(oe(this,ui,n*i),ne(this,pi,Na).call(this,U(this,ui)))};pi=new WeakSet;Na=function(t){this.dispatchEvent(new l.CustomEvent(h.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Kr=new WeakSet;Jo=function(){U(this,We).stop();let t=jo(this);this.dispatchEvent(new l.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Ei.shadowRootOptions={mode:"open"};Ei.getContainerTemplateHTML=Hl;l.customElements.get("media-time-range")||l.customElements.define("media-time-range",Ei);var Zr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ee=(t,e,i)=>(Zr(t,e,"read from private field"),i?i.call(t):e.get(t)),nt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Jr=(t,e,i,a)=>(Zr(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Ke=(t,e,i)=>(Zr(t,e,"access private method"),i),Nt,ke,Wa,jr,tn,Ba,es,vi,Fa,Ha,zr,Ve={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},en=[...Object.values(Ve),o.MEDIA_CURRENT_TIME,o.MEDIA_DURATION,o.MEDIA_SEEKABLE],an=["Enter"," "],Bl="&nbsp;/&nbsp;",Xr=(t,{timesSep:e=Bl}={})=>{var i,a;let r=(i=t.mediaCurrentTime)!=null?i:0,[,s]=(a=t.mediaSeekable)!=null?a:[],n=0;Number.isFinite(t.mediaDuration)?n=t.mediaDuration:Number.isFinite(s)&&(n=s);let d=t.remaining?st(0-(n-r)):st(r);return t.showDuration?`${d}${e}${st(n)}`:d},$l=t=>{var e;let i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[],r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",f("video not loaded, unknown time."));return}let s=t.remaining?rt(0-(r-i)):rt(i);if(!t.showDuration){t.setAttribute("aria-description",s);return}let n=rt(r),d=f("{currentTime} of {totalTime}",{currentTime:s,totalTime:n});t.setAttribute("aria-description",d)};function Wl(t,e){return`
    <slot>${Xr(e)}</slot>
  `}var Vl=t=>{t.setAttribute("aria-label",f("playback time"))},$a=class extends se{constructor(){super(),nt(this,jr),nt(this,Ba),nt(this,vi),nt(this,Ha),nt(this,Nt,void 0),nt(this,ke,null),nt(this,Wa,e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!an.includes(r)){this.removeEventListener("keyup",Ee(this,ke));return}this.addEventListener("keyup",Ee(this,ke))}),Jr(this,Nt,this.shadowRoot.querySelector("slot")),Ee(this,Nt).innerHTML=`${Xr(this)}`}static get observedAttributes(){return[...super.observedAttributes,...en,"disabled"]}connectedCallback(){let{style:e}=O(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",f("playback time")),Ke(this,vi,Fa).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Ke(this,Ba,es).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){Vl(this),en.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Ke(this,vi,Fa).call(this):Ke(this,Ha,zr).call(this):e===Ve.NO_TOGGLE&&a!==i&&(this.noToggle?Ke(this,Ha,zr).call(this):Ke(this,vi,Fa).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return b(this,Ve.REMAINING)}set remaining(e){A(this,Ve.REMAINING,e)}get showDuration(){return b(this,Ve.SHOW_DURATION)}set showDuration(e){A(this,Ve.SHOW_DURATION,e)}get noToggle(){return b(this,Ve.NO_TOGGLE)}set noToggle(e){A(this,Ve.NO_TOGGLE,e)}get mediaDuration(){return C(this,o.MEDIA_DURATION)}set mediaDuration(e){P(this,o.MEDIA_DURATION,e)}get mediaCurrentTime(){return C(this,o.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){P(this,o.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(o.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(o.MEDIA_SEEKABLE);return}this.setAttribute(o.MEDIA_SEEKABLE,e.join(":"))}update(){let e=Xr(this);$l(this),e!==Ee(this,Nt).innerHTML&&(Ee(this,Nt).innerHTML=e)}};Nt=new WeakMap;ke=new WeakMap;Wa=new WeakMap;jr=new WeakSet;tn=function(){Ee(this,ke)||(Jr(this,ke,t=>{let{key:e}=t;if(!an.includes(e)){this.removeEventListener("keyup",Ee(this,ke));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",Ee(this,Wa)),this.addEventListener("click",this.toggleTimeDisplay))};Ba=new WeakSet;es=function(){Ee(this,ke)&&(this.removeEventListener("keyup",Ee(this,ke)),this.removeEventListener("keydown",Ee(this,Wa)),this.removeEventListener("click",this.toggleTimeDisplay),Jr(this,ke,null))};vi=new WeakSet;Fa=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Ke(this,jr,tn).call(this))};Ha=new WeakSet;zr=function(){this.removeAttribute("role"),this.disable(),Ke(this,Ba,es).call(this)};$a.getSlotTemplateHTML=Wl;l.customElements.get("media-time-display")||l.customElements.define("media-time-display",$a);var Kl=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,rn=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Gl=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function ql(t){return`
    <style>
      :host(:not([${o.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${o.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${o.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${o.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Kl}</slot>
      <slot name="low">${rn}</slot>
      <slot name="medium">${rn}</slot>
      <slot name="high">${Gl}</slot>
    </slot>
  `}function Yl(){return`
    <slot name="tooltip-mute">${f("Mute")}</slot>
    <slot name="tooltip-unmute">${f("Unmute")}</slot>
  `}var sn=t=>{let i=t.mediaVolumeLevel==="off"?f("unmute"):f("mute");t.setAttribute("aria-label",i)},fi=class extends N{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),sn(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_VOLUME_LEVEL&&sn(this)}get mediaVolumeLevel(){return R(this,o.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){L(this,o.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e=this.mediaVolumeLevel==="off"?h.MEDIA_UNMUTE_REQUEST:h.MEDIA_MUTE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};fi.getSlotTemplateHTML=ql;fi.getTooltipContentHTML=Yl;l.customElements.get("media-mute-button")||l.customElements.define("media-mute-button",fi);var nn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ql=(t,e,i)=>(nn(t,e,"read from private field"),i?i.call(t):e.get(t)),zl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Xl=(t,e,i,a)=>(nn(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),Va,Zl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Jl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function jl(t){return`
    <style>
      :host([${o.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${o.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Zl}</slot>
      <slot name="exit">${Jl}</slot>
    </slot>
  `}function ed(){return`
    <slot name="tooltip-enter">${f("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${f("Exit fullscreen mode")}</slot>
  `}var on=t=>{let e=t.mediaIsFullscreen?f("exit fullscreen mode"):f("enter fullscreen mode");t.setAttribute("aria-label",e)},_i=class extends N{constructor(){super(...arguments),zl(this,Va,null)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_FULLSCREEN,o.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),on(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_FULLSCREEN&&on(this)}get mediaFullscreenUnavailable(){return R(this,o.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){L(this,o.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return b(this,o.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){A(this,o.MEDIA_IS_FULLSCREEN,e)}handleClick(e){Xl(this,Va,e);let i=Ql(this,Va)instanceof PointerEvent,a=this.mediaIsFullscreen?new l.CustomEvent(h.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new l.CustomEvent(h.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}};Va=new WeakMap;_i.getSlotTemplateHTML=jl;_i.getTooltipContentHTML=ed;l.customElements.get("media-fullscreen-button")||l.customElements.define("media-fullscreen-button",_i);var dn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},gi=(t,e,i)=>(dn(t,e,"read from private field"),i?i.call(t):e.get(t)),ln=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},bi=(t,e,i,a)=>(dn(t,e,"write to private field"),a?a.call(t,i):e.set(t,i),i),ye,Ga,Ka={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},cn=500,td=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function id(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${cn}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${td}</slot>
    <div id="status" role="status" aria-live="polite">${f("media loading")}</div>
  `}var Ai=class extends l.HTMLElement{constructor(){if(super(),ln(this,ye,void 0),ln(this,Ga,cn),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=W(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[y.MEDIA_CONTROLLER,o.MEDIA_PAUSED,o.MEDIA_LOADING,Ka.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,s,n,d,c;e===Ka.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===y.MEDIA_CONTROLLER&&(i&&((s=(r=gi(this,ye))==null?void 0:r.unassociateElement)==null||s.call(r,this),bi(this,ye,null)),a&&this.isConnected&&(bi(this,ye,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(c=(d=gi(this,ye))==null?void 0:d.associateElement)==null||c.call(d,this)))}connectedCallback(){var e,i,a;let r=this.getAttribute(y.MEDIA_CONTROLLER);r&&(bi(this,ye,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=gi(this,ye))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=gi(this,ye))==null?void 0:e.unassociateElement)==null||i.call(e,this),bi(this,ye,null)}get loadingDelay(){return gi(this,Ga)}set loadingDelay(e){bi(this,Ga,e);let{style:i}=O(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return b(this,o.MEDIA_PAUSED)}set mediaPaused(e){A(this,o.MEDIA_PAUSED,e)}get mediaLoading(){return b(this,o.MEDIA_LOADING)}set mediaLoading(e){A(this,o.MEDIA_LOADING,e)}get mediaController(){return R(this,y.MEDIA_CONTROLLER)}set mediaController(e){L(this,y.MEDIA_CONTROLLER,e)}get noAutohide(){return b(this,Ka.NO_AUTOHIDE)}set noAutohide(e){A(this,Ka.NO_AUTOHIDE,e)}};ye=new WeakMap;Ga=new WeakMap;Ai.shadowRootOptions={mode:"open"};Ai.getTemplateHTML=id;l.customElements.get("media-loading-indicator")||l.customElements.define("media-loading-indicator",Ai);var Ft={SEEK_OFFSET:"seekoffset"},ts=30,ad=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function rd(t,e){return`
    <slot name="icon">${ad(e.seekOffset)}</slot>
  `}var sd=(t,e)=>{t.setAttribute("aria-label",f("seek back {seekOffset} seconds",{seekOffset:e}))};function od(){return f("Seek backward")}var nd=0,Ti=class extends N{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,Ft.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=C(this,Ft.SEEK_OFFSET,ts)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),sd(this,this.seekOffset),e===Ft.SEEK_OFFSET&&(this.seekOffset=C(this,Ft.SEEK_OFFSET,ts))}get seekOffset(){return C(this,Ft.SEEK_OFFSET,ts)}set seekOffset(e){P(this,Ft.SEEK_OFFSET,e),this.setAttribute("aria-label",f("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),xi(Pi(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return C(this,o.MEDIA_CURRENT_TIME,nd)}set mediaCurrentTime(e){P(this,o.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new l.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};Ti.getSlotTemplateHTML=rd;Ti.getTooltipContentHTML=od;l.customElements.get("media-seek-backward-button")||l.customElements.define("media-seek-backward-button",Ti);var Ht={SEEK_OFFSET:"seekoffset"},is=30,ld=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function dd(t,e){return`
    <slot name="icon">${ld(e.seekOffset)}</slot>
  `}var cd=(t,e)=>{t.setAttribute("aria-label",f("seek forward {seekOffset} seconds",{seekOffset:e}))};function ud(){return f("Seek forward")}var hd=0,Si=class extends N{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,Ht.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=C(this,Ht.SEEK_OFFSET,is)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),cd(this,this.seekOffset),e===Ht.SEEK_OFFSET&&(this.seekOffset=C(this,Ht.SEEK_OFFSET,is))}get seekOffset(){return C(this,Ht.SEEK_OFFSET,is)}set seekOffset(e){P(this,Ht.SEEK_OFFSET,e),this.setAttribute("aria-label",f("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),xi(Pi(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return C(this,o.MEDIA_CURRENT_TIME,hd)}set mediaCurrentTime(e){P(this,o.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,i=new l.CustomEvent(h.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}};Si.getSlotTemplateHTML=dd;Si.getTooltipContentHTML=ud;l.customElements.get("media-seek-forward-button")||l.customElements.define("media-seek-forward-button",Si);var md=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},un=(t,e,i)=>(md(t,e,"read from private field"),i?i.call(t):e.get(t)),pd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},qa,Ed=1,vd=t=>t.mediaMuted?0:t.mediaVolume,fd=t=>`${Math.round(t*100)}%`,as=class extends Ae{constructor(){super(...arguments),pd(this,qa,()=>{let e=this.range.value,i=new l.CustomEvent(h.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME,o.MEDIA_MUTED,o.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",f("volume")),this.range.addEventListener("input",un(this,qa))}disconnectedCallback(){this.range.removeEventListener("input",un(this,qa)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===o.MEDIA_VOLUME||e===o.MEDIA_MUTED)&&(this.range.valueAsNumber=vd(this),this.range.setAttribute("aria-valuetext",fd(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return C(this,o.MEDIA_VOLUME,Ed)}set mediaVolume(e){P(this,o.MEDIA_VOLUME,e)}get mediaMuted(){return b(this,o.MEDIA_MUTED)}set mediaMuted(e){A(this,o.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return R(this,o.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){L(this,o.MEDIA_VOLUME_UNAVAILABLE,e)}};qa=new WeakMap;l.customElements.get("media-volume-range")||l.customElements.define("media-volume-range",as);var hn=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function _d(t){return`
    <style>
      :host([${o.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${o.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${hn}</slot>
      <slot name="exit">${hn}</slot>
    </slot>
  `}function gd(){return`
    <slot name="tooltip-enter">${f("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${f("Exit picture in picture mode")}</slot>
  `}var mn=t=>{let e=t.mediaIsPip?f("exit picture in picture mode"):f("enter picture in picture mode");t.setAttribute("aria-label",e)},Ii=class extends N{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_PIP,o.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),mn(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_PIP&&mn(this)}get mediaPipUnavailable(){return R(this,o.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){L(this,o.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return b(this,o.MEDIA_IS_PIP)}set mediaIsPip(e){A(this,o.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?h.MEDIA_EXIT_PIP_REQUEST:h.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};Ii.getSlotTemplateHTML=_d;Ii.getTooltipContentHTML=gd;l.customElements.get("media-pip-button")||l.customElements.define("media-pip-button",Ii);var bd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Bt=(t,e,i)=>(bd(t,e,"read from private field"),i?i.call(t):e.get(t)),Ad=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ge,rs={RATES:"rates"},Td=[1,1.2,1.5,1.7,2],ki=1;function ss(t){return Math.round(t*100)/100}function Sd(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?ss(+t.mediaplaybackrate):ki}x</slot>
  `}function Id(){return f("Playback rate")}var yi=class extends N{constructor(){var e;super(),Ad(this,Ge,new Tt(this,rs.RATES,{defaultValue:Td})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${ss((e=this.mediaPlaybackRate)!=null?e:ki)}x`}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PLAYBACK_RATE,rs.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===rs.RATES&&(Bt(this,Ge).value=a),e===o.MEDIA_PLAYBACK_RATE){let r=a?+a:Number.NaN,s=ss(Number.isNaN(r)?ki:r);this.container.innerHTML=`${s}x`,this.setAttribute("aria-label",f("Playback rate {playbackRate}",{playbackRate:s}))}}get rates(){return Bt(this,Ge)}set rates(e){e?Array.isArray(e)?Bt(this,Ge).value=e.join(" "):typeof e=="string"&&(Bt(this,Ge).value=e):Bt(this,Ge).value=""}get mediaPlaybackRate(){return C(this,o.MEDIA_PLAYBACK_RATE,ki)}set mediaPlaybackRate(e){P(this,o.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;let a=Array.from(Bt(this,Ge).values(),n=>+n).sort((n,d)=>n-d),r=(i=(e=a.find(n=>n>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:ki,s=new l.CustomEvent(h.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(s)}};Ge=new WeakMap;yi.getSlotTemplateHTML=Sd;yi.getTooltipContentHTML=Id;l.customElements.get("media-playback-rate-button")||l.customElements.define("media-playback-rate-button",yi);var kd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,yd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Md(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${kd}</slot>
      <slot name="off">${yd}</slot>
    </slot>
  `}function wd(){return`
    <slot name="tooltip-enable">${f("Enable captions")}</slot>
    <slot name="tooltip-disable">${f("Disable captions")}</slot>
  `}var pn=t=>{t.setAttribute("aria-checked",lo(t).toString())},Mi=class extends N{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_SUBTITLES_LIST,o.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",f("closed captions")),pn(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_SUBTITLES_SHOWING&&pn(this)}get mediaSubtitlesList(){return En(this,o.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){vn(this,o.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return En(this,o.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){vn(this,o.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new l.CustomEvent(h.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}};Mi.getSlotTemplateHTML=Md;Mi.getTooltipContentHTML=wd;var En=(t,e)=>{let i=t.getAttribute(e);return i?mr(i):[]},vn=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}let a=ei(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};l.customElements.get("media-captions-button")||l.customElements.define("media-captions-button",Mi);customElements.whenDefined("media-captions-button").then(()=>{document.querySelectorAll("media-captions-button").forEach(t=>{let e=()=>{let i=t.getAttribute("aria-checked");i!==null&&(t.removeAttribute("aria-checked"),t.setAttribute("aria-pressed",i),t.setAttribute("aria-label","Subtitles"))};e(),new MutationObserver(e).observe(t,{attributes:!0,attributeFilter:["aria-checked"]})})});})();
