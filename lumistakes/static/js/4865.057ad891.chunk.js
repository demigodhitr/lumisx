"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4865],{10363:(e,t,i)=>{var r=i(37022),a=i(56370),s=(i(61446),i(39446)),o=i(37845);const n=r.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var c=function(e,t,i,r){var a,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(s<3?a(o):s>3?a(t,i,o):a(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let w=class extends r.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,r.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};w.styles=[s.W5,s.fD,s.ck,n],c([(0,a.MZ)()],w.prototype,"size",void 0),c([(0,a.MZ)({type:Boolean})],w.prototype,"disabled",void 0),c([(0,a.MZ)()],w.prototype,"icon",void 0),c([(0,a.MZ)()],w.prototype,"iconColor",void 0),w=c([(0,o.E)("wui-icon-link")],w)},12904:(e,t,i)=>{i.d(t,{J:()=>v});var r=i(37022),a=i(56370),s=i(61139),o=i(43103),n=i(89268),c=i(91391);const w=r.AH`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var l=function(e,t,i,r){var a,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(s<3?a(o):s>3?a(t,i,o):a(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let v=class extends r.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=s.I.state.view,this.viewDirection="",this.unsubscribe.push(s.I.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((e=>{let[t]=e;const i=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",i),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout((()=>{this.prevHeight=i,this.style.animation="unset"}),c.o.ANIMATION_DURATIONS.ModalHeight)})),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return r.qy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return r.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return r.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return r.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return r.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return r.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return r.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return r.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return r.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return r.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return r.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return r.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return r.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return r.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return r.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return r.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return r.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return r.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return r.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return r.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return r.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return r.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return r.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return r.qy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return r.qy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return r.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return r.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return r.qy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return r.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return r.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return r.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return r.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return r.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return r.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return r.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return r.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return r.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return r.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return r.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return r.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return r.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return r.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return r.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return r.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return r.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return r.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return r.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return r.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return r.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return r.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return r.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return r.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return r.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return r.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`}}onViewChange(e){o.I.hide();let t=c.o.VIEW_DIRECTION.Next;const{history:i}=s.I.state;i.length<this.prevHistoryLength&&(t=c.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=i.length,this.viewDirection=t,setTimeout((()=>{this.view=e}),c.o.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};v.styles=w,l([(0,a.wk)()],v.prototype,"view",void 0),l([(0,a.wk)()],v.prototype,"viewDirection",void 0),v=l([(0,n.EM)("w3m-router")],v)},29319:(e,t,i)=>{var r=i(37022),a=i(56370),s=(i(7836),i(39446)),o=i(37845);const n=r.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var c=function(e,t,i,r){var a,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(s<3?a(o):s>3?a(t,i,o):a(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let w=class extends r.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"mini-700":"micro-700";return r.qy`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};w.styles=[s.W5,n],c([(0,a.MZ)()],w.prototype,"variant",void 0),c([(0,a.MZ)()],w.prototype,"size",void 0),w=c([(0,o.E)("wui-tag")],w)},43103:(e,t,i)=>{i.d(t,{I:()=>o});var r=i(38993),a=i(76844);const s=(0,r.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),o={state:s,subscribe:e=>(0,r.B1)(s,(()=>e(s))),subscribeKey:(e,t)=>(0,a.u$)(s,e,t),showTooltip(e){let{message:t,triggerRect:i,variant:r}=e;s.open=!0,s.message=t,s.triggerRect=i,s.variant=r},hide(){s.open=!1,s.message="",s.triggerRect={width:0,height:0,top:0,left:0}}}},61747:(e,t,i)=>{var r=i(37022),a=i(56370),s=i(43103),o=i(89268);i(84107),i(10477),i(84875);const n=r.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var c=function(e,t,i,r){var a,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(o=(s<3?a(o):s>3?a(t,i,o):a(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o};let w=class extends r.WF{constructor(){super(),this.unsubscribe=[],this.open=s.I.state.open,this.message=s.I.state.message,this.triggerRect=s.I.state.triggerRect,this.variant=s.I.state.variant,this.unsubscribe.push(s.I.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,r.qy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};w.styles=[n],c([(0,a.wk)()],w.prototype,"open",void 0),c([(0,a.wk)()],w.prototype,"message",void 0),c([(0,a.wk)()],w.prototype,"triggerRect",void 0),c([(0,a.wk)()],w.prototype,"variant",void 0),w=c([(0,o.EM)("w3m-tooltip"),(0,o.EM)("w3m-tooltip")],w)},85098:(e,t,i)=>{i(29319)}}]);
//# sourceMappingURL=4865.057ad891.chunk.js.map