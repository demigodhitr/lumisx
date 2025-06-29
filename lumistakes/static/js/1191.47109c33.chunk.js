/*! For license information please see 1191.47109c33.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1191],{455:(e,t,o)=>{var r=o(37022),i=o(42661),a=o(89268);o(84107),o(84875),o(43805);const s=r.AH`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
    margin-top: var(--wui-spacing-s);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var n=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let c=class extends r.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=i.H.state,o=i.H.state.features?.legalCheckbox;return e||t?o?null:r.qy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=i.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=i.H.state;return e?r.qy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=i.H.state;return e?r.qy`<a href=${e}>Privacy Policy</a>`:null}};c.styles=[s],c=n([(0,a.EM)("w3m-legal-footer")],c)},3892:(e,t,o)=>{var r=o(37022),i=o(56370),a=o(56440),s=(o(7836),o(39446)),n=o(37845);o(47528);const c=r.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var l=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let d=class extends r.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return r.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?r.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};d.styles=[s.W5,s.fD,c],l([(0,i.MZ)()],d.prototype,"logo",void 0),l([(0,i.MZ)()],d.prototype,"name",void 0),l([(0,i.MZ)()],d.prototype,"align",void 0),l([(0,i.MZ)()],d.prototype,"tabIdx",void 0),l([(0,i.MZ)({type:Boolean})],d.prototype,"disabled",void 0),d=l([(0,n.E)("wui-list-social")],d)},10477:(e,t,o)=>{o(61446)},17372:(e,t,o)=>{o.d(t,{Up:()=>h});var r=o(595),i=o(15814),a=o(73939),s=o(79323),n=o(61139),c=o(7258),l=o(24657),d=o(88861);async function u(e){n.I.push("ConnectingSocial");const t=a.a.getAuthConnector();let o=null;try{const a=setTimeout((()=>{throw new Error("Social login timed out. Please try again.")}),45e3);if(t&&e){if(l.w.isTelegram()||(o=function(){try{return l.w.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),o)r.U.setSocialWindow(o,i.W.state.activeChain);else if(!l.w.isTelegram())throw new Error("Could not create social popup");const{uri:s}=await t.provider.getSocialRedirectUri({provider:e});if(!s)throw o?.close(),new Error("Could not fetch the social redirect uri");if(o&&(o.location.href=s),l.w.isTelegram()){d.i.setTelegramSocialProvider(e);const t=l.w.formatTelegramSocialLoginUrl(s);l.w.openHref(t,"_top")}clearTimeout(a)}}catch(s){o?.close(),c.P.showError(s?.message)}}async function h(e){r.U.setSocialProvider(e,i.W.state.activeChain),s.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await async function(){n.I.push("ConnectingFarcaster");const e=a.a.getAuthConnector();if(e&&!r.U.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();r.U.setFarcasterUrl(t,i.W.state.activeChain)}catch(t){n.I.goBack(),c.P.showError(t)}}():await u(e)}},22677:(e,t,o)=>{o.d(t,{_:()=>s,K:()=>l});var r=o(28531),i=o(44952),a=o(30533);const s=()=>new n;class n{}const c=new WeakMap,l=(0,a.u$)(class extends i.Kq{render(e){return r.s6}update(e,t){let[o]=t;const i=o!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=o,this.ht=e.options?.host,this.rt(this.ct=e.element)),r.s6}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.Y){const t=this.ht??globalThis;let o=c.get(t);void 0===o&&(o=new WeakMap,c.set(t,o)),void 0!==o.get(this.Y)&&this.Y.call(this.ht,void 0),o.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return"function"==typeof this.Y?c.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},23723:(e,t,o)=>{var r=o(37022),i=o(56370),a=o(39446),s=o(37845);const n=r.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var c=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let l=class extends r.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,r.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[a.W5,n],c([(0,i.MZ)()],l.prototype,"color",void 0),c([(0,i.MZ)()],l.prototype,"size",void 0),l=c([(0,s.E)("wui-loading-spinner")],l)},27667:(e,t,o)=>{var r=o(37022),i=o(56370),a=o(39446),s=o(37845);const n=r.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var c=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let l=class extends r.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,o=116+t,i=245+t,a=360+1.75*t;return r.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};l.styles=[a.W5,n],c([(0,i.MZ)({type:Number})],l.prototype,"radius",void 0),l=c([(0,s.E)("wui-loading-thumbnail")],l)},43805:(e,t,o)=>{var r=o(37022),i=(o(61446),o(7836),o(52574),o(39446)),a=o(37845);const s=r.AH`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`;var n=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let c=class extends r.WF{render(){return r.qy`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};c.styles=[i.W5,i.fD,s],c=n([(0,a.E)("wui-ux-by-reown")],c)},43901:(e,t,o)=>{var r=o(37022),i=o(56370),a=o(56440),s=(o(7836),o(39446)),n=o(37845);const c=r.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var l=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let d=class extends r.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return r.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,a.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};d.styles=[s.W5,s.fD,c],l([(0,i.MZ)()],d.prototype,"tabIdx",void 0),l([(0,i.MZ)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,i.MZ)()],d.prototype,"color",void 0),d=l([(0,n.E)("wui-link")],d)},47528:(e,t,o)=>{var r=o(37022),i=o(56370),a=(o(61446),o(39446)),s=o(37845);const n=r.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var c=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let l=class extends r.WF{constructor(){super(...arguments),this.logo="google"}render(){return r.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};l.styles=[a.W5,n],c([(0,i.MZ)()],l.prototype,"logo",void 0),l=c([(0,s.E)("wui-logo")],l)},51191:(e,t,o)=>{o.r(t),o.d(t,{W3mConnectSocialsView:()=>f,W3mConnectingFarcasterView:()=>W,W3mConnectingSocialView:()=>T});var r=o(37022),i=o(56370),a=o(56440),s=o(68737),n=o(42661),c=o(89268),l=(o(84107),o(56326),o(455),o(73939)),d=o(61139),u=o(84657),h=o(17372);o(3892);const p=r.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var g=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let v=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=l.a.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=n.H.state.features,this.unsubscribe.push(l.a.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),n.H.subscribeKey("features",(e=>this.features=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){let e=this.features?.socials||[];const t=Boolean(this.authConnector),o=e?.length,i="ConnectSocials"===d.I.state.view;return t&&o||i?(i&&!o&&(e=u.oU.DEFAULT_FEATURES.socials),r.qy` <wui-flex flexDirection="column" gap="xs">
      ${e.map((e=>r.qy`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            name=${e}
            logo=${e}
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></wui-list-social>`))}
    </wui-flex>`):null}async onSocialClick(e){e&&await(0,h.Up)(e)}};v.styles=p,g([(0,i.MZ)()],v.prototype,"tabIdx",void 0),g([(0,i.wk)()],v.prototype,"connectors",void 0),g([(0,i.wk)()],v.prototype,"authConnector",void 0),g([(0,i.wk)()],v.prototype,"features",void 0),v=g([(0,c.EM)("w3m-social-login-list")],v);const w=r.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var b=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let f=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.checked=s.o.state.isLegalCheckboxChecked,this.unsubscribe.push(s.o.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state,o=n.H.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(o),s=i&&!this.checked,c=s?-1:void 0;return r.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,a.J)(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,a.J)(c)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};f.styles=w,b([(0,i.wk)()],f.prototype,"checked",void 0),f=b([(0,c.EM)("w3m-connect-socials-view")],f);var y=o(595),x=o(15814),m=o(79323),k=o(88861),C=o(93022),$=o(7258),R=o(73609),P=o(36141),E=(o(60677),o(27667),o(47528),o(84875),o(91391));const O=r.AH`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var I=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let T=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=y.U.state.socialProvider,this.socialWindow=y.U.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=l.a.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===E.o.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),y.U.setSocialWindow(void 0,x.W.state.activeChain)),this.connecting=!0,this.updateMessage();const t=e.data.resultUri;this.socialProvider&&m.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await this.authConnector.provider.connectSocial(t),this.socialProvider&&(k.i.setConnectedSocialProvider(this.socialProvider),await C.x.connectExternal(this.authConnector,this.authConnector.chain),m.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(t){this.error=!0,this.updateMessage(),this.socialProvider&&m.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else d.I.goBack(),$.P.showError("Untrusted Origin"),this.socialProvider&&m.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(y.U.subscribe((e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&(R.W.state.open||n.H.state.enableEmbedded)&&R.W.close()}))),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),y.U.setSocialWindow(void 0,x.W.state.activeChain)}render(){return r.qy`
      <wui-flex
        data-error=${(0,a.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,a.J)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=P.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval((()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==d.I.state.view||(this.socialProvider&&m.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),d.I.goBack()),clearInterval(e))}),1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};T.styles=O,I([(0,i.wk)()],T.prototype,"socialProvider",void 0),I([(0,i.wk)()],T.prototype,"socialWindow",void 0),I([(0,i.wk)()],T.prototype,"error",void 0),I([(0,i.wk)()],T.prototype,"connecting",void 0),I([(0,i.wk)()],T.prototype,"message",void 0),T=I([(0,c.EM)("w3m-connecting-social-view")],T);var z=o(24657);o(92016),o(10477),o(43901),o(75938),o(63625);const j=r.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var S=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let W=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=y.U.state.socialProvider,this.uri=y.U.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=l.a.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(y.U.subscribeKey("farcasterUrl",(e=>{e&&(this.uri=e,this.connectFarcaster())})),y.U.subscribeKey("socialProvider",(e=>{e&&(this.socialProvider=e)}))),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),r.qy`${this.platformTemplate()}`}platformTemplate(){return z.w.isMobile()?r.qy`${this.mobileTemplate()}`:r.qy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?r.qy`${this.loadingTemplate()}`:r.qy`${this.qrTemplate()}`}qrTemplate(){return r.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return r.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return r.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=P.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await(this.authConnector?.provider.connectFarcaster()),this.socialProvider&&(k.i.setConnectedSocialProvider(this.socialProvider),m.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0,await C.x.connectExternal(this.authConnector,this.authConnector.chain),this.socialProvider&&m.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,R.W.close()}catch(e){this.socialProvider&&m.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),d.I.goBack(),$.P.showError(e)}}mobileLinkTemplate(){return r.qy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&z.w.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return r.qy` <wui-qr-code
      size=${e}
      theme=${P.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,a.J)(P.W.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return r.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(z.w.copyToClopboard(this.uri),$.P.showSuccess("Link copied"))}catch{$.P.showError("Failed to copy")}}};W.styles=j,S([(0,i.wk)()],W.prototype,"socialProvider",void 0),S([(0,i.wk)()],W.prototype,"uri",void 0),S([(0,i.wk)()],W.prototype,"ready",void 0),S([(0,i.wk)()],W.prototype,"loading",void 0),W=S([(0,c.EM)("w3m-connecting-farcaster-view")],W)},56326:(e,t,o)=>{var r=o(37022),i=o(56370),a=o(68737),s=o(42661),n=o(89268),c=o(56440),l=o(22677),d=(o(61446),o(39446)),u=o(37845);const h=r.AH`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var p=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let g=class extends r.WF{constructor(){super(...arguments),this.inputElementRef=(0,l._)(),this.checked=void 0}render(){return r.qy`
      <label>
        <input
          ${(0,l.K)(this.inputElementRef)}
          ?checked=${(0,c.J)(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};g.styles=[d.W5,h],p([(0,i.MZ)({type:Boolean})],g.prototype,"checked",void 0),g=p([(0,u.E)("wui-checkbox")],g);o(84875);const v=r.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var w=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let b=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.H.state,o=s.H.state.features?.legalCheckbox;return(e||t)&&o?r.qy`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=s.H.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=s.H.state;return e?r.qy`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=s.H.state;return e?r.qy`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){a.o.setIsLegalCheckboxChecked(!this.checked)}};b.styles=[v],w([(0,i.wk)()],b.prototype,"checked",void 0),b=w([(0,n.EM)("w3m-legal-checkbox")],b)},59970:(e,t,o)=>{var r=o(37022),i=o(56370),a=o(37845);const s=r.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var n=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let c=class extends r.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,r.qy`<slot></slot>`}};c.styles=[s],n([(0,i.MZ)()],c.prototype,"width",void 0),n([(0,i.MZ)()],c.prototype,"height",void 0),n([(0,i.MZ)()],c.prototype,"borderRadius",void 0),n([(0,i.MZ)()],c.prototype,"variant",void 0),c=n([(0,a.E)("wui-shimmer")],c)},60677:(e,t,o)=>{o(90702)},63625:(e,t,o)=>{o(59970)},68737:(e,t,o)=>{o.d(t,{o:()=>s});var r=o(38993),i=o(76844);const a=(0,r.BX)({isLegalCheckboxChecked:!1}),s={state:a,subscribe:e=>(0,r.B1)(a,(()=>e(a))),subscribeKey:(e,t)=>(0,i.u$)(a,e,t),setIsLegalCheckboxChecked(e){a.isLegalCheckboxChecked=e}}},78973:(e,t,o)=>{var r=o(37022),i=o(56370),a=(o(23723),o(7836),o(39446)),s=o(37845);const n=r.AH`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var c=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};const l={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},d={lg:"paragraph-600",md:"small-600"},u={lg:"md",md:"md"};let h=class extends r.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??d[this.size];return r.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=u[this.size],t=this.disabled?l.disabled:l[this.variant];return r.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return r.qy``}};h.styles=[a.W5,a.fD,n],c([(0,i.MZ)()],h.prototype,"size",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"disabled",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"fullWidth",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"loading",void 0),c([(0,i.MZ)()],h.prototype,"variant",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"hasIconLeft",void 0),c([(0,i.MZ)({type:Boolean})],h.prototype,"hasIconRight",void 0),c([(0,i.MZ)()],h.prototype,"borderRadius",void 0),c([(0,i.MZ)()],h.prototype,"textVariant",void 0),h=c([(0,s.E)("wui-button")],h)},90702:(e,t,o)=>{var r=o(37022),i=o(56370),a=(o(61446),o(39446)),s=o(37845);const n=r.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var c=function(e,t,o,r){var i,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(s=(a<3?i(s):a>3?i(t,o,s):i(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let l=class extends r.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,o="xl"===this.size,i=t?"12%":"16%",a=t?"xxs":o?"s":"3xl",s="gray"===this.background,n="opaque"===this.background,c="accent-100"===this.backgroundColor&&n||"success-100"===this.backgroundColor&&n||"error-100"===this.backgroundColor&&n||"inverse-100"===this.backgroundColor&&n;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||s?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${a});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,r.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};l.styles=[a.W5,a.fD,n],c([(0,i.MZ)()],l.prototype,"size",void 0),c([(0,i.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,i.MZ)()],l.prototype,"iconColor",void 0),c([(0,i.MZ)()],l.prototype,"iconSize",void 0),c([(0,i.MZ)()],l.prototype,"background",void 0),c([(0,i.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,i.MZ)()],l.prototype,"borderColor",void 0),c([(0,i.MZ)()],l.prototype,"icon",void 0),l=c([(0,s.E)("wui-icon-box")],l)},92016:(e,t,o)=>{o(78973)}}]);
//# sourceMappingURL=1191.47109c33.chunk.js.map