"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[621],{621:(e,t,i)=>{i.r(t),i.d(t,{AppKitAccountButton:()=>C,AppKitButton:()=>T,AppKitConnectButton:()=>M,AppKitNetworkButton:()=>H,W3mAccountButton:()=>k,W3mAccountSettingsView:()=>se,W3mAccountView:()=>Fe,W3mAllWalletsView:()=>Lt,W3mButton:()=>S,W3mChooseAccountNameView:()=>To,W3mConnectButton:()=>j,W3mConnectView:()=>_i,W3mConnectWalletsView:()=>Zo,W3mConnectingExternalView:()=>to,W3mConnectingMultiChainView:()=>ao,W3mConnectingWcBasicView:()=>$o,W3mConnectingWcView:()=>ko,W3mDownloadsView:()=>Ro,W3mGetWalletView:()=>Oo,W3mNetworkButton:()=>_,W3mNetworkSwitchView:()=>Yo,W3mNetworksView:()=>oa,W3mProfileView:()=>Qe,W3mRouter:()=>B.J,W3mSIWXSignMessageView:()=>Ta,W3mSwitchActiveChainView:()=>sa,W3mSwitchAddressView:()=>rt,W3mUnsupportedChainView:()=>ha,W3mWalletCompatibleNetworksView:()=>va,W3mWhatIsANetworkView:()=>ua,W3mWhatIsAWalletView:()=>qo});var o=i(37022),a=i(56370),r=i(56440),n=i(15814),s=i(1348),l=i(42661),c=i(36596),u=i(595),d=i(24657),p=i(73609),h=i(89268),w=(i(71056),i(23723),i(7836),i(52574),i(39446)),g=i(69929),f=i(37845);i(43946),i(90702);const b=o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var m=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let v=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return o.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,r.J)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return o.qy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `,t=this.loading?o.qy`<wui-loading-spinner size="md" color="fg-200"></wui-loading-spinner>`:o.qy`<wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>`;return o.qy`${e} ${t}`}return null}};v.styles=[w.W5,w.fD,b],m([(0,a.MZ)()],v.prototype,"networkSrc",void 0),m([(0,a.MZ)()],v.prototype,"avatarSrc",void 0),m([(0,a.MZ)()],v.prototype,"balance",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"isUnsupportedChain",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"disabled",void 0),m([(0,a.MZ)({type:Boolean})],v.prototype,"loading",void 0),m([(0,a.MZ)()],v.prototype,"address",void 0),m([(0,a.MZ)()],v.prototype,"profileName",void 0),m([(0,a.MZ)()],v.prototype,"charsStart",void 0),m([(0,a.MZ)()],v.prototype,"charsEnd",void 0),v=m([(0,f.E)("wui-account-button")],v);var y=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class x extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.W.getAccountData(this.namespace)?.caipAddress,this.balanceVal=n.W.getAccountData(this.namespace)?.balance,this.balanceSymbol=n.W.getAccountData(this.namespace)?.balanceSymbol,this.profileName=n.W.getAccountData(this.namespace)?.profileName,this.profileImage=n.W.getAccountData(this.namespace)?.profileImage,this.network=n.W.getNetworkData(this.namespace)?.caipNetwork,this.networkImage=s.$.getNetworkImage(this.network),this.isSupported=!!l.H.state.allowUnsupportedChain||(!n.W.state.activeChain||n.W.checkIfSupportedNetwork(n.W.state.activeChain))}firstUpdated(){const e=this.namespace;e?this.unsubscribe.push(n.W.subscribeChainProp("accountState",(e=>{this.caipAddress=e?.caipAddress,this.balanceVal=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage}),e),n.W.subscribeChainProp("networkState",(t=>{this.network=t?.caipNetwork,this.isSupported=n.W.checkIfSupportedNetwork(e,t?.caipNetwork),this.networkImage=s.$.getNetworkImage(t?.caipNetwork)}),e)):this.unsubscribe.push(c.j.subscribeNetworkImages((()=>{this.networkImage=s.$.getNetworkImage(this.network)})),n.W.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),u.U.subscribeKey("balance",(e=>this.balanceVal=e)),u.U.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),u.U.subscribeKey("profileName",(e=>this.profileName=e)),u.U.subscribeKey("profileImage",(e=>this.profileImage=e)),n.W.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=s.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.W.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)})))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!n.W.state.activeChain)return null;const e="show"===this.balance,t="string"!==typeof this.balanceVal;return o.qy`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain&&!this.isSupported}
        address=${(0,r.J)(d.w.getPlainAddress(this.caipAddress))}
        profileName=${(0,r.J)(this.profileName)}
        networkSrc=${(0,r.J)(this.networkImage)}
        avatarSrc=${(0,r.J)(this.profileImage)}
        balance=${e?d.w.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid=${"account-button"+(this.namespace?`-${this.namespace}`:"")}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}async onClick(){await n.W.switchActiveNamespace(this.namespace),this.isSupported||l.H.state.allowUnsupportedChain?p.W.open():p.W.open({view:"UnsupportedChain"})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await s.$.fetchNetworkImage(e?.assets?.imageId))}}y([(0,a.MZ)({type:Boolean})],x.prototype,"disabled",void 0),y([(0,a.MZ)()],x.prototype,"balance",void 0),y([(0,a.MZ)()],x.prototype,"charsStart",void 0),y([(0,a.MZ)()],x.prototype,"charsEnd",void 0),y([(0,a.MZ)()],x.prototype,"namespace",void 0),y([(0,a.wk)()],x.prototype,"caipAddress",void 0),y([(0,a.wk)()],x.prototype,"balanceVal",void 0),y([(0,a.wk)()],x.prototype,"balanceSymbol",void 0),y([(0,a.wk)()],x.prototype,"profileName",void 0),y([(0,a.wk)()],x.prototype,"profileImage",void 0),y([(0,a.wk)()],x.prototype,"network",void 0),y([(0,a.wk)()],x.prototype,"networkImage",void 0),y([(0,a.wk)()],x.prototype,"isSupported",void 0);let k=class extends x{};k=y([(0,h.EM)("w3m-account-button")],k);let C=class extends x{};C=y([(0,h.EM)("appkit-account-button")],C);const $=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var I=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class E extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.caipAddress=n.W.state.activeCaipAddress}firstUpdated(){this.namespace?this.unsubscribe.push(n.W.subscribeChainProp("accountState",(e=>{this.caipAddress=e?.caipAddress}),this.namespace)):this.unsubscribe.push(n.W.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.caipAddress?o.qy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,r.J)(this.balance)}
            .charsStart=${(0,r.J)(this.charsStart)}
            .charsEnd=${(0,r.J)(this.charsEnd)}
            namespace=${(0,r.J)(this.namespace)}
          >
          </appkit-account-button>
        `:o.qy`
          <appkit-connect-button
            size=${(0,r.J)(this.size)}
            label=${(0,r.J)(this.label)}
            loadingLabel=${(0,r.J)(this.loadingLabel)}
            namespace=${(0,r.J)(this.namespace)}
          ></appkit-connect-button>
        `}}E.styles=$,I([(0,a.MZ)({type:Boolean})],E.prototype,"disabled",void 0),I([(0,a.MZ)()],E.prototype,"balance",void 0),I([(0,a.MZ)()],E.prototype,"size",void 0),I([(0,a.MZ)()],E.prototype,"label",void 0),I([(0,a.MZ)()],E.prototype,"loadingLabel",void 0),I([(0,a.MZ)()],E.prototype,"charsStart",void 0),I([(0,a.MZ)()],E.prototype,"charsEnd",void 0),I([(0,a.MZ)()],E.prototype,"namespace",void 0),I([(0,a.wk)()],E.prototype,"caipAddress",void 0);let S=class extends E{};S=I([(0,h.EM)("w3m-button")],S);let T=class extends E{};T=I([(0,h.EM)("appkit-button")],T);const A=o.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var R=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let W=class extends o.WF{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return o.qy`
      <button data-size=${this.size} ?disabled=${this.loading}>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};W.styles=[w.W5,w.fD,A],R([(0,a.MZ)()],W.prototype,"size",void 0),R([(0,a.MZ)({type:Boolean})],W.prototype,"loading",void 0),W=R([(0,f.E)("wui-connect-button")],W);var O=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class N extends o.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=p.W.state.open,this.loading=this.namespace?p.W.state.loadingNamespaceMap.get(this.namespace):p.W.state.loading,this.unsubscribe.push(p.W.subscribe((e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-connect-button
        size=${(0,r.J)(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${"connect-button"+(this.namespace?`-${this.namespace}`:"")}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?p.W.close():this.loading||p.W.open({view:"Connect",namespace:this.namespace})}}O([(0,a.MZ)()],N.prototype,"size",void 0),O([(0,a.MZ)()],N.prototype,"label",void 0),O([(0,a.MZ)()],N.prototype,"loadingLabel",void 0),O([(0,a.MZ)()],N.prototype,"namespace",void 0),O([(0,a.wk)()],N.prototype,"open",void 0),O([(0,a.wk)()],N.prototype,"loading",void 0);let j=class extends N{};j=O([(0,h.EM)("w3m-connect-button")],j);let M=class extends N{};M=O([(0,h.EM)("appkit-connect-button")],M);var P=i(79323);const q=o.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var D=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let U=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return o.qy`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?o.qy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:o.qy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};U.styles=[w.W5,w.fD,q],D([(0,a.MZ)()],U.prototype,"imageSrc",void 0),D([(0,a.MZ)({type:Boolean})],U.prototype,"isUnsupportedChain",void 0),D([(0,a.MZ)({type:Boolean})],U.prototype,"disabled",void 0),U=D([(0,f.E)("wui-network-button")],U);const Z=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var z=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class L extends o.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=n.W.state.activeCaipNetwork,this.networkImage=s.$.getNetworkImage(this.network),this.caipAddress=n.W.state.activeCaipAddress,this.loading=p.W.state.loading,this.isSupported=!!l.H.state.allowUnsupportedChain||(!n.W.state.activeChain||n.W.checkIfSupportedNetwork(n.W.state.activeChain)),this.unsubscribe.push(c.j.subscribeNetworkImages((()=>{this.networkImage=s.$.getNetworkImage(this.network)})),n.W.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),n.W.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=s.$.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.W.checkIfSupportedNetwork(e.chainNamespace),s.$.fetchNetworkImage(e?.assets?.imageId)})),p.W.subscribeKey("loading",(e=>this.loading=e)))}firstUpdated(){s.$.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=!this.network||n.W.checkIfSupportedNetwork(this.network.chainNamespace);return o.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!l.H.state.allowUnsupportedChain&&!e}
        imageSrc=${(0,r.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported||l.H.state.allowUnsupportedChain?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(P.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),p.W.open({view:"Networks"}))}}L.styles=Z,z([(0,a.MZ)({type:Boolean})],L.prototype,"disabled",void 0),z([(0,a.MZ)({type:String})],L.prototype,"label",void 0),z([(0,a.wk)()],L.prototype,"network",void 0),z([(0,a.wk)()],L.prototype,"networkImage",void 0),z([(0,a.wk)()],L.prototype,"caipAddress",void 0),z([(0,a.wk)()],L.prototype,"loading",void 0),z([(0,a.wk)()],L.prototype,"isSupported",void 0);let _=class extends L{};_=z([(0,h.EM)("w3m-network-button")],_);let H=class extends L{};H=z([(0,h.EM)("appkit-network-button")],H);var B=i(12904),F=i(80883),V=i(73939),J=i(84657),K=i(7258),G=i(61139),Y=i(93022),X=i(71636);i(84107),i(10363),i(45770),i(61446),i(78973);const Q=o.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var ee=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let te=class extends o.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return o.qy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};te.styles=[w.W5,w.fD,Q],ee([(0,a.MZ)()],te.prototype,"label",void 0),ee([(0,a.MZ)()],te.prototype,"description",void 0),ee([(0,a.MZ)()],te.prototype,"icon",void 0),te=ee([(0,f.E)("wui-notice-card")],te);i(84875);var ie=i(59979),oe=i(88861),ae=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let re=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=oe.i.getConnectedSocialProvider(),this.socialUsername=oe.i.getConnectedSocialUsername(),this.namespace=n.W.state.activeChain,this.unsubscribe.push(n.W.subscribeKey("activeChain",(e=>{this.namespace=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=V.a.getConnectorId(this.namespace),t=V.a.getAuthConnector();if(!t||e!==F.o.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const i=t.provider.getEmail()??"";return i||this.socialUsername?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(i,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(i)}</wui-text>
      </wui-list-item>
    `:(this.style.cssText="display: none",null)}onGoToUpdateEmail(e,t){t||G.I.push("UpdateEmailWallet",{email:e,redirectView:"Account"})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};ae([(0,a.wk)()],re.prototype,"namespace",void 0),re=ae([(0,h.EM)("w3m-account-auth-button")],re);var ne=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let se=class extends o.WF{constructor(){super(),this.usubscribe=[],this.networkImages=c.j.state.networkImages,this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.preferredAccountType=u.U.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(u.U.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):p.W.close()})),u.U.subscribeKey("preferredAccountType",(e=>this.preferredAccountType=e)),n.W.subscribeKey("activeCaipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,r.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,r.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=this.network?.chainNamespace,t=V.a.getConnectorId(e),i=V.a.getAuthConnector();return n.W.checkIfNamesSupported()&&i&&t===F.o.CONNECTOR_ID.AUTH&&!this.profileName?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=this.network?.chainNamespace,t=V.a.getConnectorId(e),i=V.a.getAuthConnector(),{origin:a}=location;return!i||t!==F.o.CONNECTOR_ID.AUTH||a.includes(J.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=n.W.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=e?.find((e=>{let{id:t}=e;return t===this.network?.id}));return t||!i}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=this.network?.chainNamespace,t=n.W.checkIfSmartAccountEnabled(),i=V.a.getConnectorId(e);return V.a.getAuthConnector()&&i===F.o.CONNECTOR_ID.AUTH&&t?(this.switched||(this.text=this.preferredAccountType===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){G.I.push("ChooseAccountName")}async changePreferredAccountType(){const e=n.W.checkIfSmartAccountEnabled(),t=this.preferredAccountType!==ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e?ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:ie.Vl.ACCOUNT_TYPES.EOA;V.a.getAuthConnector()&&(this.loading=!0,await Y.x.setPreferredAccountType(t),this.text=t===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,X.R.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&G.I.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await Y.x.disconnect(),p.W.close()}catch{P.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){P.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),G.I.push("UpgradeEmailWallet")}};ne([(0,a.wk)()],se.prototype,"address",void 0),ne([(0,a.wk)()],se.prototype,"profileImage",void 0),ne([(0,a.wk)()],se.prototype,"profileName",void 0),ne([(0,a.wk)()],se.prototype,"network",void 0),ne([(0,a.wk)()],se.prototype,"preferredAccountType",void 0),ne([(0,a.wk)()],se.prototype,"disconnecting",void 0),ne([(0,a.wk)()],se.prototype,"loading",void 0),ne([(0,a.wk)()],se.prototype,"switched",void 0),ne([(0,a.wk)()],se.prototype,"text",void 0),se=ne([(0,h.EM)("w3m-account-settings-view")],se);i(92016),i(10477);const le=o.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ce=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ue=class extends o.WF{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail"}render(){const e=n.W.state.activeChain,t=V.a.getConnectorId(e)===F.o.CONNECTOR_ID.AUTH;return o.qy`<button data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${t?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){e.target instanceof HTMLElement&&"copy-address"===e.target.id?this.onCopyClick?.(e):this.onProfileClick?.(e)}getIconTemplate(e){return o.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};ue.styles=[w.W5,w.fD,le],ce([(0,a.MZ)()],ue.prototype,"avatarSrc",void 0),ce([(0,a.MZ)()],ue.prototype,"profileName",void 0),ce([(0,a.MZ)()],ue.prototype,"address",void 0),ce([(0,a.MZ)()],ue.prototype,"icon",void 0),ce([(0,a.MZ)()],ue.prototype,"onProfileClick",void 0),ce([(0,a.MZ)()],ue.prototype,"onCopyClick",void 0),ue=ce([(0,f.E)("wui-profile-button-v2")],ue);const de=o.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var pe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let he=class extends o.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const i=t===this.activeTab;return o.qy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(e){return e.icon?o.qy`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const i=this.buttons[this.activeTab],o=this.buttons[e],a=i?.querySelector("wui-text"),r=o?.querySelector("wui-text"),n=o?.getBoundingClientRect(),s=r?.getBoundingClientRect();i&&a&&!t&&e!==this.activeTab&&(a.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&n&&s&&r&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(n.width+s.width)+6}px`,o.animate([{width:`${n.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),r.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};he.styles=[w.W5,w.fD,de],pe([(0,a.MZ)({type:Array})],he.prototype,"tabs",void 0),pe([(0,a.MZ)()],he.prototype,"onTabChange",void 0),pe([(0,a.MZ)({type:Array})],he.prototype,"buttons",void 0),pe([(0,a.MZ)({type:Boolean})],he.prototype,"disabled",void 0),pe([(0,a.MZ)()],he.prototype,"localTabWidth",void 0),pe([(0,a.wk)()],he.prototype,"activeTab",void 0),pe([(0,a.wk)()],he.prototype,"isDense",void 0),he=pe([(0,f.E)("wui-tabs")],he);i(85098);const we=o.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var ge=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fe=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.caipAddress=u.U.state.caipAddress,this.address=d.w.getPlainAddress(u.U.state.caipAddress),this.allAccounts=u.U.state.allAccounts,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.disconnecting=!1,this.balance=u.U.state.balance,this.balanceSymbol=u.U.state.balanceSymbol,this.features=l.H.state.features,this.namespace=n.W.state.activeChain,this.chainId=n.W.state.activeCaipNetwork?.id,this.unsubscribe.push(u.U.subscribeKey("caipAddress",(e=>{this.address=d.w.getPlainAddress(e),this.caipAddress=e})),u.U.subscribeKey("balance",(e=>this.balance=e)),u.U.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),u.U.subscribeKey("profileName",(e=>this.profileName=e)),u.U.subscribeKey("profileImage",(e=>this.profileImage=e)),l.H.subscribeKey("features",(e=>this.features=e)),u.U.subscribeKey("allAccounts",(e=>{this.allAccounts=e})),n.W.subscribeKey("activeChain",(e=>this.namespace=e)),n.W.subscribeKey("activeCaipNetwork",(e=>{if(e){const[t,i]=e?.caipNetworkId?.split(":")||[];t&&i&&(this.namespace=t,this.chainId=i)}})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.caipAddress)return null;const e=n.W.state.activeChain!==F.o.CHAIN.SOLANA&&this.allAccounts.length>1;return o.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${d.w.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){if(!this.namespace)return null;const e=this.features?.onramp,t=J.oU.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace);return e&&t?o.qy`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||J.oU.DEFAULT_FEATURES.walletFeaturesOrder).map((e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}}))}activityTemplate(){if(!this.namespace)return null;const e=n.W.state.activeChain===F.o.CHAIN.SOLANA;return this.features?.history&&J.oU.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?o.qy` <wui-list-item
          iconVariant="blue"
          icon="clock"
          iconSize="sm"
          ?chevron=${!e}
          ?disabled=${e}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}>
            Activity
          </wui-text>
          ${e?o.qy`<wui-tag variant="main">Coming soon</wui-tag>`:""}
        </wui-list-item>`:null}swapsTemplate(){const e=this.features?.swaps,t=n.W.state.activeChain===F.o.CHAIN.EVM;return e&&t?o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `:null}sendTemplate(){const e=this.features?.send,t=n.W.state.activeChain===F.o.CHAIN.EVM;return e&&t?o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Send</wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=n.W.state.activeChain,t=V.a.getConnectorId(e),i=V.a.getAuthConnector(),{origin:a}=location;return!i||t!==F.o.CONNECTOR_ID.AUTH||a.includes(J.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){G.I.push("SwitchAddress")}handleClickPay(){G.I.push("OnRampProviders")}handleClickSwap(){G.I.push("Swap")}handleClickSend(){G.I.push("WalletSend")}explorerBtnTemplate(){return u.U.state.addressExplorerUrl?o.qy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return o.qy`
      <wui-avatar
        alt=${(0,r.J)(this.caipAddress)}
        address=${(0,r.J)(d.w.getPlainAddress(this.caipAddress))}
        imageSrc=${(0,r.J)(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?h.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Zv.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.allAccounts.find((e=>e.address===this.address)),t=u.U.state.addressLabels.get(this.address);return"bip122"===this.namespace?this.btcAccountsTemplate():o.qy`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,r.J)(this.address)}
        icon="${e?.type===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&n.W.state.activeChain===F.o.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,r.J)(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}btcAccountsTemplate(){return o.qy`<wui-flex gap="m" alignItems="center" flexDirection="column">
      <wui-avatar
        .imageSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>
      <wui-tabs
        .tabs=${[{label:"Payment"},{label:"Ordinals"}]}
        .onTabChange=${e=>u.U.setCaipAddress(`bip122:${this.chainId}:${this.allAccounts[e]?.address||""}`,this.namespace)}
      ></wui-tabs>
      <wui-flex gap="xs" alignItems="center" justifyContent="center">
        <wui-text variant="large-600" color="fg-100">
          ${h.Zv.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        </wui-text>
        <wui-icon-link
          size="md"
          icon="copy"
          iconColor="fg-200"
          @click=${this.onCopyAddress}
        ></wui-icon-link>
      </wui-flex>
    </wui-flex>`}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}onTransactions(){P.E.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:u.U.state.preferredAccountType===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await Y.x.disconnect(),p.W.close()}catch{P.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=u.U.state.addressExplorerUrl;e&&d.w.openHref(e,"_blank")}onGoToUpgradeView(){P.E.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),G.I.push("UpgradeEmailWallet")}};fe.styles=we,ge([(0,a.wk)()],fe.prototype,"caipAddress",void 0),ge([(0,a.wk)()],fe.prototype,"address",void 0),ge([(0,a.wk)()],fe.prototype,"allAccounts",void 0),ge([(0,a.wk)()],fe.prototype,"profileImage",void 0),ge([(0,a.wk)()],fe.prototype,"profileName",void 0),ge([(0,a.wk)()],fe.prototype,"disconnecting",void 0),ge([(0,a.wk)()],fe.prototype,"balance",void 0),ge([(0,a.wk)()],fe.prototype,"balanceSymbol",void 0),ge([(0,a.wk)()],fe.prototype,"features",void 0),ge([(0,a.wk)()],fe.prototype,"namespace",void 0),ge([(0,a.wk)()],fe.prototype,"chainId",void 0),fe=ge([(0,h.EM)("w3m-account-default-widget")],fe);const be=o.AH`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var me=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ve=class extends o.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return o.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};ve.styles=[w.W5,be],me([(0,a.MZ)()],ve.prototype,"dollars",void 0),me([(0,a.MZ)()],ve.prototype,"pennies",void 0),ve=me([(0,f.E)("wui-balance")],ve);const ye=o.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var xe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ke=class extends o.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return o.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};ke.styles=[w.W5,w.fD,ye],xe([(0,a.MZ)()],ke.prototype,"text",void 0),xe([(0,a.MZ)()],ke.prototype,"icon",void 0),ke=xe([(0,f.E)("wui-icon-button")],ke);const Ce=o.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var $e=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ie=class extends o.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return o.qy`<button data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${g.Z.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?o.qy`<wui-image src=${this.networkSrc}></wui-image>`:o.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Ie.styles=[w.W5,w.fD,Ce],$e([(0,a.MZ)()],Ie.prototype,"networkSrc",void 0),$e([(0,a.MZ)()],Ie.prototype,"avatarSrc",void 0),$e([(0,a.MZ)()],Ie.prototype,"profileName",void 0),$e([(0,a.MZ)()],Ie.prototype,"address",void 0),$e([(0,a.MZ)()],Ie.prototype,"icon",void 0),Ie=$e([(0,f.E)("wui-profile-button")],Ie);const Ee=o.AH`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
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
`;var Se=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Te=class extends o.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,o.qy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Te.styles=[w.W5,w.fD,Ee],Se([(0,a.MZ)()],Te.prototype,"placement",void 0),Se([(0,a.MZ)()],Te.prototype,"variant",void 0),Se([(0,a.MZ)()],Te.prototype,"message",void 0),Te=Se([(0,f.E)("wui-tooltip")],Te);var Ae=i(91391);i(70374);const Re=o.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var We=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Oe=class extends o.WF{render(){return o.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};Oe.styles=Re,Oe=We([(0,h.EM)("w3m-account-activity-widget")],Oe);i(60677),i(43901);const Ne=o.AH`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var je=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Me=class extends o.WF{render(){return o.qy`${this.nftTemplate()}`}nftTemplate(){return o.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text
          variant="paragraph-500"
          align="center"
          color="fg-100"
          data-testid="nft-template-title"
          >Coming soon</wui-text
        >
        <wui-text
          variant="small-400"
          align="center"
          color="fg-200"
          data-testid="nft-template-description"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)} data-testid="link-receive-funds"
        >Receive funds</wui-link
      >
    </wui-flex>`}onReceiveClick(){G.I.push("WalletReceive")}};Me.styles=Ne,Me=je([(0,h.EM)("w3m-account-nfts-widget")],Me);i(29319);const Pe=o.AH`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var qe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let De=class extends o.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?o.qy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:o.qy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};De.styles=[w.W5,w.fD,Pe],qe([(0,a.MZ)()],De.prototype,"icon",void 0),qe([(0,a.MZ)()],De.prototype,"text",void 0),qe([(0,a.MZ)()],De.prototype,"description",void 0),qe([(0,a.MZ)()],De.prototype,"tag",void 0),qe([(0,a.MZ)()],De.prototype,"iconBackgroundColor",void 0),qe([(0,a.MZ)()],De.prototype,"iconColor",void 0),qe([(0,a.MZ)({type:Boolean})],De.prototype,"disabled",void 0),De=qe([(0,f.E)("wui-list-description")],De);i(30737);const Ue=o.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Ze=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ze=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=u.U.state.tokenBalance,this.unsubscribe.push(u.U.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.qy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.qy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="buy-crypto"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="receive-funds"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map((e=>o.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`))}onReceiveClick(){G.I.push("WalletReceive")}onBuyClick(){P.E.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:u.U.state.preferredAccountType===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("OnRampProviders")}};ze.styles=Ue,Ze([(0,a.wk)()],ze.prototype,"tokenBalance",void 0),ze=Ze([(0,h.EM)("w3m-account-tokens-widget")],ze);i(71996),i(61747);const Le=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var _e=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let He=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.network=n.W.state.activeCaipNetwork,this.currentTab=u.U.state.currentTab,this.tokenBalance=u.U.state.tokenBalance,this.features=l.H.state.features,this.networkImage=s.$.getNetworkImage(this.network),this.unsubscribe.push(c.j.subscribeNetworkImages((()=>{this.networkImage=s.$.getNetworkImage(this.network)})),u.U.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):p.W.close()})),n.W.subscribeKey("activeCaipNetwork",(e=>this.network=e)),l.H.subscribeKey("features",(e=>this.features=e))),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearInterval(this.watchTokenBalance)}firstUpdated(){u.U.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");return o.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,r.J)(this.address)}
        networkSrc=${(0,r.J)(this.networkImage)}
        icon="chevronBottom"
        avatarSrc=${(0,r.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,r.J)(this.profileName??void 0)}
        data-testid="w3m-profile-button"
      ></wui-profile-button>

      ${this.tokenBalanceTemplate()} ${this.orderedWalletFeatures()}

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${d.w.isMobile()&&window.innerWidth<430?(window.innerWidth-48)/3+"px":"104px"}
        .tabs=${Ae.o.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){const e=this.features?.walletFeaturesOrder||J.oU.DEFAULT_FEATURES.walletFeaturesOrder;return e.every((e=>!this.features?.[e]))?null:o.qy`<wui-flex gap="s">
      ${e.map((e=>{switch(e){case"onramp":return this.onrampTemplate();case"swaps":return this.swapsTemplate();case"receive":return this.receiveTemplate();case"send":return this.sendTemplate();default:return null}}))}
    </wui-flex>`}onrampTemplate(){const e=this.features?.onramp;return e?o.qy`
      <w3m-tooltip-trigger text="Buy">
        <wui-icon-button
          data-testid="wallet-features-onramp-button"
          @click=${this.onBuyClick.bind(this)}
          icon="card"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}swapsTemplate(){const e=this.features?.swaps,t=n.W.state.activeChain===F.o.CHAIN.EVM;return e&&t?o.qy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}receiveTemplate(){const e=this.features?.receive;return e?o.qy`
      <w3m-tooltip-trigger text="Receive">
        <wui-icon-button
          data-testid="wallet-features-receive-button"
          @click=${this.onReceiveClick.bind(this)}
          icon="arrowBottomCircle"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}sendTemplate(){const e=this.features?.send,t=n.W.state.activeChain===F.o.CHAIN.EVM;return e&&t?o.qy`
      <w3m-tooltip-trigger text="Send">
        <wui-icon-button
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          icon="send"
        ></wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval((()=>u.U.fetchTokenBalance((e=>this.onTokenBalanceError(e)))),1e4)}onTokenBalanceError(e){if(e instanceof Error&&e.cause instanceof Response){e.cause.status===F.o.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}}listContentTemplate(){return 0===this.currentTab?o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?o.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=d.w.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:i="00"}=d.w.formatTokenBalance(e);return o.qy`<wui-balance dollars=${t} pennies=${i}></wui-balance>`}return o.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}onTabChange(e){u.U.setCurrentTab(e)}onProfileButtonClick(){const{allAccounts:e}=u.U.state;e.length>1?G.I.push("Profile"):G.I.push("AccountSettings")}onBuyClick(){G.I.push("OnRampProviders")}onSwapClick(){this.network?.caipNetworkId&&!J.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?G.I.push("UnsupportedChain",{swapUnsupportedChain:!0}):(P.E.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:u.U.state.preferredAccountType===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("Swap"))}onReceiveClick(){G.I.push("WalletReceive")}onSendClick(){P.E.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:u.U.state.preferredAccountType===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),G.I.push("WalletSend")}};He.styles=Le,_e([(0,a.wk)()],He.prototype,"watchTokenBalance",void 0),_e([(0,a.wk)()],He.prototype,"address",void 0),_e([(0,a.wk)()],He.prototype,"profileImage",void 0),_e([(0,a.wk)()],He.prototype,"profileName",void 0),_e([(0,a.wk)()],He.prototype,"network",void 0),_e([(0,a.wk)()],He.prototype,"currentTab",void 0),_e([(0,a.wk)()],He.prototype,"tokenBalance",void 0),_e([(0,a.wk)()],He.prototype,"features",void 0),_e([(0,a.wk)()],He.prototype,"networkImage",void 0),He=_e([(0,h.EM)("w3m-account-wallet-features-widget")],He);var Be=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Fe=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.namespace=n.W.state.activeChain,this.unsubscribe.push(n.W.subscribeKey("activeChain",(e=>{this.namespace=e})))}render(){if(!this.namespace)return null;const e=V.a.getConnectorId(this.namespace),t=V.a.getAuthConnector();return o.qy`
      ${t&&e===F.o.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};Be([(0,a.wk)()],Fe.prototype,"namespace",void 0),Fe=Be([(0,h.EM)("w3m-account-view")],Fe);var Ve=i(65618);const Je=o.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var Ke=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ge=class extends o.WF{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.labels=u.U.state.addressLabels,this.caipNetwork=n.W.state.activeCaipNetwork,this.socialProvider=oe.i.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),Ve.T.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then((e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce(((e,t)=>e+(t?.value||0)),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})).catch((()=>{this.fetchingBalance=!1,this.requestUpdate()}))}render(){const e=this.getLabel(),t=n.W.state.activeChain,i=V.a.getConnectorId(t);return this.shouldShowIcon=i===F.o.CONNECTOR_ID.AUTH,o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===ie.Vl.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:o.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${g.Z.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:o.qy` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);const t=n.W.state.activeChain,i=V.a.getConnectorId(t);return e||i!==F.o.CONNECTOR_ID.AUTH?e||(e="EOA"):e=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,e}};Ge.styles=[w.W5,w.fD,Je],Ke([(0,a.MZ)()],Ge.prototype,"accountAddress",void 0),Ke([(0,a.MZ)()],Ge.prototype,"accountType",void 0),Ke([(0,a.MZ)({type:Boolean})],Ge.prototype,"selected",void 0),Ke([(0,a.MZ)({type:Function})],Ge.prototype,"onSelect",void 0),Ge=Ke([(0,f.E)("wui-list-account")],Ge);const Ye=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var Xe=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Qe=class extends o.WF{constructor(){super(),this.usubscribe=[],this.address=u.U.state.address,this.profileImage=u.U.state.profileImage,this.profileName=u.U.state.profileName,this.accounts=u.U.state.allAccounts,this.loading=!1,this.usubscribe.push(u.U.subscribeKey("address",(e=>{e?this.address=e:p.W.close()}))),this.usubscribe.push(u.U.subscribeKey("profileImage",(e=>{this.profileImage=e}))),this.usubscribe.push(u.U.subscribeKey("profileName",(e=>{this.profileName=e})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return o.qy`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,r.J)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?h.Zv.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):h.Zv.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>G.I.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return o.qy`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e=>this.accountTemplate(e)))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){this.loading=!0;if(V.a.getAuthConnector()){const t=e.type;await Y.x.setPreferredAccountType(t)}u.U.setShouldUpdateToAddress(e.address,n.W.state.activeChain),this.loading=!1}accountTemplate(e){return o.qy`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":o.qy`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.address&&(d.w.copyToClopboard(this.address),K.P.showSuccess("Address copied"))}catch{K.P.showError("Failed to copy")}}};Qe.styles=Ye,Xe([(0,a.wk)()],Qe.prototype,"address",void 0),Xe([(0,a.wk)()],Qe.prototype,"profileImage",void 0),Xe([(0,a.wk)()],Qe.prototype,"profileName",void 0),Xe([(0,a.wk)()],Qe.prototype,"accounts",void 0),Xe([(0,a.wk)()],Qe.prototype,"loading",void 0),Qe=Xe([(0,h.EM)("w3m-profile-view")],Qe);const et=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var tt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let it=class extends o.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};it.styles=[w.W5,w.fD,et],tt([(0,a.MZ)()],it.prototype,"imageSrc",void 0),tt([(0,a.MZ)()],it.prototype,"text",void 0),tt([(0,a.MZ)()],it.prototype,"size",void 0),it=tt([(0,f.E)("wui-banner-img")],it);const ot=o.AH`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var at=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let rt=class extends o.WF{constructor(){super(),this.metadata=l.H.state.metadata,this.allAccounts=u.U.state.allAccounts||[],this.balances={},this.labels=u.U.state.addressLabels,this.currentAddress=u.U.state.address||"",this.caipNetwork=n.W.state.activeCaipNetwork,u.U.subscribeKey("allAccounts",(e=>{this.allAccounts=e}))}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach((e=>{Ve.T.getBalance(e.address,this.caipNetwork?.caipNetworkId).then((t=>{let i=this.balances[e.address]||0;t.balances.length>0&&(i=t.balances.reduce(((e,t)=>e+(t?.value||0)),0)),this.balances[e.address]=i,this.requestUpdate()}))}))}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,r.J)(this.metadata?.icons[0])}
          text=${(0,r.J)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(((e,t)=>this.getAddressTemplate(e,t)))}
      </wui-flex>
    `}getAddressTemplate(e,t){const i=this.labels?.get(e.address),a=n.W.state.activeChain,r=V.a.getConnectorId(a)===F.o.CONNECTOR_ID.AUTH;return o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${r?o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:o.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${i||h.Zv.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"===typeof this.balances[e.address]?`$${this.balances[e.address]?.toFixed(2)}`:o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":o.qy`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){const t=n.W.state.activeCaipNetwork,i=t?.chainNamespace,o=`${i}:${t?.id}:${e}`;u.U.setCaipAddress(o,i),p.W.close()}};rt.styles=ot,at([(0,a.wk)()],rt.prototype,"allAccounts",void 0),at([(0,a.wk)()],rt.prototype,"balances",void 0),rt=at([(0,h.EM)("w3m-switch-address-view")],rt);var nt=i(22677);const st=o.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var lt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ct=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,nt._)(),this.checked=void 0}render(){return o.qy`
      <label>
        <input
          ${(0,nt.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,r.J)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};ct.styles=[w.W5,w.fD,w.ck,st],lt([(0,a.MZ)({type:Boolean})],ct.prototype,"checked",void 0),ct=lt([(0,f.E)("wui-switch")],ct);const ut=o.AH`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var dt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let pt=class extends o.WF{constructor(){super(...arguments),this.checked=void 0}render(){return o.qy`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,r.J)(this.checked)}></wui-switch>
      </button>
    `}};pt.styles=[w.W5,w.fD,ut],dt([(0,a.MZ)({type:Boolean})],pt.prototype,"checked",void 0),pt=dt([(0,f.E)("wui-certified-switch")],pt);const ht=o.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var wt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let gt=class extends o.WF{constructor(){super(...arguments),this.icon="copy"}render(){return o.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};gt.styles=[w.W5,w.fD,ht],wt([(0,a.MZ)()],gt.prototype,"icon",void 0),gt=wt([(0,f.E)("wui-input-element")],gt);i(52501);const ft=o.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var bt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let mt=class extends o.WF{constructor(){super(...arguments),this.inputComponentRef=(0,nt._)()}render(){return o.qy`
      <wui-input-text
        ${(0,nt.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};mt.styles=[w.W5,ft],mt=bt([(0,f.E)("wui-search-bar")],mt);var vt=i(16496);const yt=o.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;i(59970);const xt=o.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var kt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ct=class extends o.WF{constructor(){super(...arguments),this.type="wallet"}render(){return o.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${yt}`:o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ct.styles=[w.W5,w.fD,xt],kt([(0,a.MZ)()],Ct.prototype,"type",void 0),Ct=kt([(0,f.E)("wui-card-select-loader")],Ct);const $t=o.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var It=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Et=class extends o.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&g.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&g.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&g.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&g.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&g.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&g.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&g.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&g.Z.getSpacingStyles(this.margin,3)};\n    `,o.qy`<slot></slot>`}};Et.styles=[w.W5,$t],It([(0,a.MZ)()],Et.prototype,"gridTemplateRows",void 0),It([(0,a.MZ)()],Et.prototype,"gridTemplateColumns",void 0),It([(0,a.MZ)()],Et.prototype,"justifyItems",void 0),It([(0,a.MZ)()],Et.prototype,"alignItems",void 0),It([(0,a.MZ)()],Et.prototype,"justifyContent",void 0),It([(0,a.MZ)()],Et.prototype,"alignContent",void 0),It([(0,a.MZ)()],Et.prototype,"columnGap",void 0),It([(0,a.MZ)()],Et.prototype,"rowGap",void 0),It([(0,a.MZ)()],Et.prototype,"gap",void 0),It([(0,a.MZ)()],Et.prototype,"padding",void 0),It([(0,a.MZ)()],Et.prototype,"margin",void 0),Et=It([(0,f.E)("wui-grid")],Et);var St=i(93005);i(63625);const Tt=o.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var At=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Rt=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),o.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?o.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:o.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Rt.styles=[w.fD,w.W5,Tt],At([(0,a.MZ)()],Rt.prototype,"size",void 0),At([(0,a.MZ)()],Rt.prototype,"name",void 0),At([(0,a.MZ)()],Rt.prototype,"imageSrc",void 0),At([(0,a.MZ)()],Rt.prototype,"walletIcon",void 0),At([(0,a.MZ)({type:Boolean})],Rt.prototype,"installed",void 0),At([(0,a.MZ)()],Rt.prototype,"badgeSize",void 0),Rt=At([(0,f.E)("wui-wallet-image")],Rt);const Wt=o.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Ot=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Nt=class extends o.WF{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return o.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,r.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,r.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=s.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await s.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Nt.styles=Wt,Ot([(0,a.wk)()],Nt.prototype,"visible",void 0),Ot([(0,a.wk)()],Nt.prototype,"imageSrc",void 0),Ot([(0,a.wk)()],Nt.prototype,"imageLoading",void 0),Ot([(0,a.MZ)()],Nt.prototype,"wallet",void 0),Nt=Ot([(0,h.EM)("w3m-all-wallets-list-item")],Nt);const jt=o.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Mt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Pt="local-paginator";let qt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!vt.N.state.wallets.length,this.wallets=vt.N.state.wallets,this.recommended=vt.N.state.recommended,this.featured=vt.N.state.featured,this.unsubscribe.push(vt.N.subscribeKey("wallets",(e=>this.wallets=e)),vt.N.subscribeKey("recommended",(e=>this.recommended=e)),vt.N.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return o.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const e=this.shadowRoot?.querySelector("wui-grid");e&&(await vt.N.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>o.qy`
        <wui-card-select-loader type="wallet" id=${(0,r.J)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){const e=d.w.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return St.A.markWalletsAsInstalled(e).map((e=>o.qy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:o}=vt.N.state,a=window.innerWidth<352?3:4,r=e.length+t.length;let n=Math.ceil(r/a)*a-r+a;return n-=e.length?i.length%a:0,0===o&&i.length>0?null:0===o||[...i,...e,...t].length<o?this.shimmerTemplate(n,Pt):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${Pt}`);e&&(this.paginationObserver=new IntersectionObserver((e=>{let[t]=e;if(t?.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=vt.N.state;i.length<t&&vt.N.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){V.a.selectWalletConnector(e)}};qt.styles=jt,Mt([(0,a.wk)()],qt.prototype,"loading",void 0),Mt([(0,a.wk)()],qt.prototype,"wallets",void 0),Mt([(0,a.wk)()],qt.prototype,"recommended",void 0),Mt([(0,a.wk)()],qt.prototype,"featured",void 0),qt=Mt([(0,h.EM)("w3m-all-wallets-list")],qt);i(94582);const Dt=o.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ut=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Zt=class extends o.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?o.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await vt.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=vt.N.state,t=St.A.markWalletsAsInstalled(e);return e.length?o.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map((e=>o.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:o.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){V.a.selectWalletConnector(e)}};Zt.styles=Dt,Ut([(0,a.wk)()],Zt.prototype,"loading",void 0),Ut([(0,a.MZ)()],Zt.prototype,"query",void 0),Ut([(0,a.MZ)()],Zt.prototype,"badge",void 0),Zt=Ut([(0,h.EM)("w3m-all-wallets-search")],Zt);var zt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Lt=class extends o.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=d.w.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return o.qy`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?o.qy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,r.J)(this.badge)}
          ></w3m-all-wallets-search>`:o.qy`<w3m-all-wallets-list badge=${(0,r.J)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",K.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return d.w.isMobile()?o.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){G.I.push("ConnectingWalletConnect")}};zt([(0,a.wk)()],Lt.prototype,"search",void 0),zt([(0,a.wk)()],Lt.prototype,"badge",void 0),Lt=zt([(0,h.EM)("w3m-all-wallets-view")],Lt);var _t=i(95543),Ht=i(41286),Bt=i(68737);const Ft=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Vt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Jt=class extends o.WF{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};Jt.styles=[w.W5,w.fD,Ft],Vt([(0,a.MZ)()],Jt.prototype,"text",void 0),Vt([(0,a.MZ)({type:Boolean})],Jt.prototype,"disabled",void 0),Vt([(0,a.MZ)()],Jt.prototype,"tabIdx",void 0),Jt=Vt([(0,f.E)("wui-list-button")],Jt);i(40135);var Kt=i(32819);i(47438);const Gt=o.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Yt=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Xt=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.formRef=(0,nt._)(),this.email="",this.loading=!1,this.error=""}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){return o.qy`
      <form ${(0,nt.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,r.J)(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?o.qy`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if(!F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===n.W.state.activeChain))){const e=n.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void G.I.push("SwitchNetwork",{network:e})}try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=V.a.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:i}=await t.provider.connectEmail({email:this.email});P.E.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===i?(P.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),G.I.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===i?G.I.push("EmailVerifyDevice",{email:this.email}):"CONNECT"===i&&(await Y.x.connectExternal(t,n.W.state.activeChain),G.I.replace("Account"))}catch(t){const e=d.w.parseError(t);e?.includes("Invalid email")?this.error="Invalid email. Try again.":K.P.showError(t)}finally{this.loading=!1}}onFocusEvent(){P.E.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Xt.styles=Gt,Yt([(0,a.MZ)()],Xt.prototype,"tabIdx",void 0),Yt([(0,a.wk)()],Xt.prototype,"email",void 0),Yt([(0,a.wk)()],Xt.prototype,"loading",void 0),Yt([(0,a.wk)()],Xt.prototype,"error",void 0),Xt=Yt([(0,h.EM)("w3m-email-login-widget")],Xt);i(56326),i(455);var Qt=i(17372);i(3892),i(47528);const ei=o.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ti=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ii=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};ii.styles=[w.W5,w.fD,ei],ti([(0,a.MZ)()],ii.prototype,"logo",void 0),ti([(0,a.MZ)({type:Boolean})],ii.prototype,"disabled",void 0),ti([(0,a.MZ)()],ii.prototype,"tabIdx",void 0),ii=ti([(0,f.E)("wui-logo-select")],ii);const oi=o.AH`
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var ai=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ri=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.features=l.H.state.features,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),l.H.subscribeKey("features",(e=>this.features=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){const e="explore"===this.walletGuide;let t=this.features?.socials;return!t&&e?(t=J.oU.DEFAULT_FEATURES.socials,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return 2===e.length?o.qy` <wui-flex gap="xs">
        ${e.slice(0,2).map((e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
            ></wui-logo-select>`))}
      </wui-flex>`:o.qy` <wui-list-social
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      logo=${(0,r.J)(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${(0,r.J)(this.tabIdx)}
    ></wui-list-social>`}bottomViewTemplate(){let e=this.features?.socials;const t="explore"===this.walletGuide;return(!this.authConnector||!e||!e?.length)&&t&&(e=J.oU.DEFAULT_FEATURES.socials),e?e.length<=2?null:e&&e.length>6?o.qy`<wui-flex gap="xs">
        ${e.slice(1,5).map((e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,r.J)(this.tabIdx)}
            ></wui-logo-select>`))}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,r.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`:e?o.qy`<wui-flex gap="xs">
      ${e.slice(1,e.length).map((e=>o.qy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></wui-logo-select>`))}
    </wui-flex>`:null:null}onMoreSocialsClick(){G.I.push("ConnectSocials")}async onSocialClick(e){if(!F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===n.W.state.activeChain))){const e=n.W.getFirstCaipNetworkSupportsAuthConnector();if(e)return void G.I.push("SwitchNetwork",{network:e})}e&&await(0,Qt.Up)(e)}};ri.styles=oi,ai([(0,a.MZ)()],ri.prototype,"walletGuide",void 0),ai([(0,a.MZ)()],ri.prototype,"tabIdx",void 0),ai([(0,a.wk)()],ri.prototype,"connectors",void 0),ai([(0,a.wk)()],ri.prototype,"features",void 0),ai([(0,a.wk)()],ri.prototype,"authConnector",void 0),ri=ai([(0,h.EM)("w3m-social-login-widget")],ri);i(98203);const ni=o.AH`
  :host {
    padding-bottom: var(--wui-spacing-s);
  }
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var si=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let li=class extends o.WF{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?o.qy`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://walletguide.walletconnect.network"
              title="Find one on WalletGuide"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:o.qy`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          .padding=${["s","0","s","0"]}
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,r.J)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){G.I.push("Create")}};li.styles=ni,si([(0,a.MZ)()],li.prototype,"tabIdx",void 0),si([(0,a.MZ)()],li.prototype,"walletGuide",void 0),li=si([(0,h.EM)("w3m-wallet-guide")],li);const ci=o.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var ui=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let di=class extends o.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return o.qy`${this.walletImages.slice(0,4).map((e=>{let{src:t,walletName:i}=e;return o.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${(0,r.J)(i)}
            ></wui-wallet-image>
          `}))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>o.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};di.styles=[w.W5,ci],ui([(0,a.MZ)({type:Array})],di.prototype,"walletImages",void 0),di=ui([(0,f.E)("wui-all-wallets-image")],di);const pi=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var hi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let wi=class extends o.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?o.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?o.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?o.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:o.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?o.qy`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?o.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?o.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};wi.styles=[w.W5,w.fD,pi],hi([(0,a.MZ)({type:Array})],wi.prototype,"walletImages",void 0),hi([(0,a.MZ)()],wi.prototype,"imageSrc",void 0),hi([(0,a.MZ)()],wi.prototype,"name",void 0),hi([(0,a.MZ)()],wi.prototype,"tagLabel",void 0),hi([(0,a.MZ)()],wi.prototype,"tagVariant",void 0),hi([(0,a.MZ)()],wi.prototype,"icon",void 0),hi([(0,a.MZ)()],wi.prototype,"walletIcon",void 0),hi([(0,a.MZ)()],wi.prototype,"tabIdx",void 0),hi([(0,a.MZ)({type:Boolean})],wi.prototype,"installed",void 0),hi([(0,a.MZ)({type:Boolean})],wi.prototype,"disabled",void 0),hi([(0,a.MZ)({type:Boolean})],wi.prototype,"showAllWallets",void 0),hi([(0,a.MZ)({type:Boolean})],wi.prototype,"loading",void 0),hi([(0,a.MZ)({type:String})],wi.prototype,"loadingSpinnerColor",void 0),wi=hi([(0,f.E)("wui-list-wallet")],wi);var gi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.count=vt.N.state.count,this.isFetchingRecommendedWallets=vt.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)),vt.N.subscribeKey("count",(e=>this.count=e)),vt.N.subscribeKey("isFetchingRecommendedWallets",(e=>this.isFetchingRecommendedWallets=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=l.H.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!d.w.isMobile())return null;const i=vt.N.state.featured.length,a=this.count+i,n=a<10?a:10*Math.floor(a/10),s=n<a?`${n}+`:`${n}`;return o.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,r.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){P.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),G.I.push("AllWallets")}};gi([(0,a.MZ)()],fi.prototype,"tabIdx",void 0),gi([(0,a.wk)()],fi.prototype,"connectors",void 0),gi([(0,a.wk)()],fi.prototype,"count",void 0),gi([(0,a.wk)()],fi.prototype,"isFetchingRecommendedWallets",void 0),fi=gi([(0,h.EM)("w3m-all-wallets-widget")],fi);var bi=i(80629),mi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let vi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"ANNOUNCED"===e.type));return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(bi.g.showConnector).map((e=>o.qy`
              <wui-list-wallet
                imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${(0,r.J)(this.tabIdx)}
              >
              </wui-list-wallet>
            `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?d.w.isMobile()?G.I.push("AllWallets"):G.I.push("ConnectingWalletConnect"):G.I.push("ConnectingExternal",{connector:e})}};mi([(0,a.MZ)()],vi.prototype,"tabIdx",void 0),mi([(0,a.wk)()],vi.prototype,"connectors",void 0),vi=mi([(0,h.EM)("w3m-connect-announced-widget")],vi);var yi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let xi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.loading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e))),d.w.isTelegram()&&d.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",(e=>this.loading=!e))))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{customWallets:e}=l.H.state;if(!e?.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return o.qy`<wui-flex flexDirection="column" gap="xs">
      ${t.map((e=>o.qy`
          <wui-list-wallet
            imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,r.J)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=oe.i.getRecentWallets(),i=this.connectors.map((e=>e.info?.rdns)).filter(Boolean),o=t.map((e=>e.rdns)).filter(Boolean),a=i.concat(o);if(a.includes("io.metamask.mobile")&&d.w.isMobile()){const e=a.indexOf("io.metamask.mobile");a[e]="io.metamask"}return e.filter((e=>!a.includes(String(e?.rdns))))}onConnectWallet(e){this.loading||G.I.push("ConnectingWalletConnect",{wallet:e})}};yi([(0,a.MZ)()],xi.prototype,"tabIdx",void 0),yi([(0,a.wk)()],xi.prototype,"connectors",void 0),yi([(0,a.wk)()],xi.prototype,"loading",void 0),xi=yi([(0,h.EM)("w3m-connect-custom-widget")],xi);var ki=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ci=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"EXTERNAL"===e.type)).filter((e=>e.id!==F.o.CONNECTOR_ID.COINBASE_SDK));return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){G.I.push("ConnectingExternal",{connector:e})}};ki([(0,a.MZ)()],Ci.prototype,"tabIdx",void 0),ki([(0,a.wk)()],Ci.prototype,"connectors",void 0),Ci=ki([(0,h.EM)("w3m-connect-external-widget")],Ci);var $i=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ii=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((e=>o.qy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){V.a.selectWalletConnector(e)}};$i([(0,a.MZ)()],Ii.prototype,"tabIdx",void 0),$i([(0,a.MZ)()],Ii.prototype,"wallets",void 0),Ii=$i([(0,h.EM)("w3m-connect-featured-widget")],Ii);var Ei=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Si=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const e=this.connectors;return!e?.length||1===e.length&&"Browser Wallet"===e[0]?.name&&!d.w.isMobile()?(this.style.cssText="display: none",null):o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>{const t=e.info?.rdns;return d.w.isMobile()||"Browser Wallet"!==e.name?t||Y.x.checkInstalled()?bi.g.showConnector(e)?o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null:(this.style.cssText="display: none",null):null}))}
      </wui-flex>
    `}onConnector(e){V.a.setActiveConnector(e),G.I.push("ConnectingExternal",{connector:e})}};Ei([(0,a.MZ)()],Si.prototype,"tabIdx",void 0),Ei([(0,a.MZ)()],Si.prototype,"connectors",void 0),Si=Ei([(0,h.EM)("w3m-connect-injected-widget")],Si);var Ti=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ai=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name));return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){V.a.setActiveConnector(e),G.I.push("ConnectingMultiChain")}};Ti([(0,a.MZ)()],Ai.prototype,"tabIdx",void 0),Ti([(0,a.wk)()],Ai.prototype,"connectors",void 0),Ai=Ti([(0,h.EM)("w3m-connect-multi-chain-widget")],Ai);var Ri=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Wi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.loading=!1,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e))),d.w.isTelegram()&&d.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",(e=>this.loading=!e))))}render(){const e=oe.i.getRecentWallets().filter((e=>!this.connectors.some((t=>t.id===e.id||t.name===e.name))));return e.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||V.a.selectWalletConnector(e)}};Ri([(0,a.MZ)()],Wi.prototype,"tabIdx",void 0),Ri([(0,a.wk)()],Wi.prototype,"connectors",void 0),Ri([(0,a.wk)()],Wi.prototype,"loading",void 0),Wi=Ri([(0,h.EM)("w3m-connect-recent-widget")],Wi);var Oi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ni=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,d.w.isTelegram()&&d.w.isIos()&&(this.loading=!Y.x.state.wcUri,this.unsubscribe.push(Y.x.subscribeKey("wcUri",(e=>this.loading=!e))))}render(){const{connectors:e}=V.a.state,{customWallets:t,featuredWalletIds:i}=l.H.state,a=oe.i.getRecentWallets(),n=e.find((e=>"walletConnect"===e.id)),c=e.filter((e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type)).filter((e=>"Browser Wallet"!==e.name));if(!n)return null;if(i||t||!this.wallets.length)return this.style.cssText="display: none",null;const u=c.length+a.length,d=Math.max(0,2-u),p=St.A.filterOutDuplicateWallets(this.wallets).slice(0,d);return p.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${p.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,r.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const t=V.a.getConnector(e.id,e.rdns);t?G.I.push("ConnectingExternal",{connector:t}):G.I.push("ConnectingWalletConnect",{wallet:e})}};Oi([(0,a.MZ)()],Ni.prototype,"tabIdx",void 0),Oi([(0,a.MZ)()],Ni.prototype,"wallets",void 0),Oi([(0,a.wk)()],Ni.prototype,"loading",void 0),Ni=Oi([(0,h.EM)("w3m-connect-recommended-widget")],Ni);var ji=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Mi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.connectorImages=c.j.state.connectorImages,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)),c.j.subscribeKey("connectorImages",(e=>this.connectorImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(d.w.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find((e=>"walletConnect"===e.id));if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[e?.imageId??""];return o.qy`
      <wui-list-wallet
        imageSrc=${(0,r.J)(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,r.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){V.a.setActiveConnector(e),G.I.push("ConnectingWalletConnect")}};ji([(0,a.MZ)()],Mi.prototype,"tabIdx",void 0),ji([(0,a.wk)()],Mi.prototype,"connectors",void 0),ji([(0,a.wk)()],Mi.prototype,"connectorImages",void 0),Mi=ji([(0,h.EM)("w3m-connect-walletconnect-widget")],Mi);const Pi=o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var qi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Di=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=V.a.state.connectors,this.recommended=vt.N.state.recommended,this.featured=vt.N.state.featured,this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>this.connectors=e)),vt.N.subscribeKey("recommended",(e=>this.recommended=e)),vt.N.subscribeKey("featured",(e=>this.featured=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:t,announced:i,injected:a,multiChain:n,recommended:s,featured:l,external:c}=bi.g.getConnectorsByType(this.connectors,this.recommended,this.featured);return bi.g.getConnectorTypeOrder({custom:e,recent:t,announced:i,injected:a,multiChain:n,recommended:s,featured:l,external:c}).map((e=>{switch(e){case"injected":return o.qy`
            ${n.length?o.qy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${i.length?o.qy`<w3m-connect-announced-widget
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${a.length?o.qy`<w3m-connect-injected-widget
                  .connectors=${a}
                  tabIdx=${(0,r.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return o.qy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return o.qy`<w3m-connect-recent-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return o.qy`<w3m-connect-featured-widget
            .wallets=${l}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return o.qy`<w3m-connect-custom-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return o.qy`<w3m-connect-external-widget
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return o.qy`<w3m-connect-recommended-widget
            .wallets=${s}
            tabIdx=${(0,r.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${e}`),null}}))}};Di.styles=Pi,qi([(0,a.MZ)()],Di.prototype,"tabIdx",void 0),qi([(0,a.wk)()],Di.prototype,"connectors",void 0),qi([(0,a.wk)()],Di.prototype,"recommended",void 0),qi([(0,a.wk)()],Di.prototype,"featured",void 0),Di=qi([(0,h.EM)("w3m-connector-list")],Di);var Ui=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Zi=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,r.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,r.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Ui([(0,a.MZ)()],Zi.prototype,"tabIdx",void 0),Zi=Ui([(0,h.EM)("w3m-wallet-login-list")],Zi);const zi=o.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Li=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let _i=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=V.a.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=l.H.state.features,this.enableWallets=l.H.state.enableWallets,this.noAdapters=n.W.state.noAdapters,this.walletGuide="get-started",this.checked=Bt.o.state.isLegalCheckboxChecked,this.isEmailEnabled=this.features?.email&&!n.W.state.noAdapters,this.isSocialEnabled=this.features?.socials&&this.features.socials.length>0&&!n.W.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(V.a.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)})),l.H.subscribeKey("features",(e=>this.setEmailAndSocialEnableCheck(e,this.noAdapters))),l.H.subscribeKey("enableWallets",(e=>this.enableWallets=e)),n.W.subscribeKey("noAdapters",(e=>this.setEmailAndSocialEnableCheck(this.features,e))),Bt.o.subscribeKey("isLegalCheckboxChecked",(e=>this.checked=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.resizeObserver?.disconnect();const e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleConnectListScroll()})),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state,i=l.H.state.features?.legalCheckbox,a=Boolean(e||t)&&Boolean(i)&&"get-started"===this.walletGuide&&!this.checked,r={connect:!0,disabled:a},n=l.H.state.enableWalletGuide,s=this.enableWallets,c=this.isSocialEnabled||this.authConnector,u=a?-1:void 0;return o.qy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          class=${(0,Ht.H)(r)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="s"
            .padding=${c&&s&&n&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            ${this.renderConnectMethod(u)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(a)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=e?.email&&!t,this.isSocialEnabled=e?.socials&&e.socials.length>0&&!t,this.features=e,this.noAdapters=t}checkIfAuthEnabled(e){const t=e.filter((e=>e.type===Kt.o.CONNECTOR_TYPE_AUTH)).map((e=>e.chain));return F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((e=>t.includes(e)))}renderConnectMethod(e){const t=St.A.getConnectOrderMethod(this.features,this.connectors);return o.qy`${t.map(((t,i)=>{switch(t){case"email":return o.qy`${this.emailTemplate(e)} ${this.separatorTemplate(i,"email")}`;case"social":return o.qy`${this.socialListTemplate(e)}
          ${this.separatorTemplate(i,"social")}`;case"wallet":return o.qy`${this.walletListTemplate(e)}
          ${this.separatorTemplate(i,"wallet")}`;default:return null}}))}`}checkMethodEnabled(e){switch(e){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){const t=St.A.getConnectOrderMethod(this.features,this.connectors)[e+1];if(!t)return;return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){const i=this.checkIsThereNextMethod(e),a="explore"===this.walletGuide;switch(t){case"wallet":return this.enableWallets&&i&&!a?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const e="social"===i;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&i?o.qy`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const e="email"===i;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&i?o.qy`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return this.isEmailEnabled&&this.isAuthEnabled?o.qy`<w3m-email-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,r.J)(e)}
    ></w3m-email-login-widget>`:null}socialListTemplate(e){return this.isSocialEnabled&&this.isAuthEnabled?o.qy`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${(0,r.J)(e)}
    ></w3m-social-login-widget>`:null}walletListTemplate(e){const t=this.enableWallets,i=!1===this.features?.emailShowWallets,a=this.features?.collapseWallets,n=i||a;if(!t)return null;if((d.w.isTelegram()||d.w.isSafari())&&d.w.isIos()&&Y.x.connectWalletConnect().catch((e=>({}))),"explore"===this.walletGuide)return null;return this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&n?o.qy`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${(0,r.J)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:o.qy`<w3m-wallet-login-list tabIdx=${(0,r.J)(e)}></w3m-wallet-login-list>`}guideTemplate(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!l.H.state.enableWalletGuide)return null;const t={guide:!0,disabled:e},i=e?-1:void 0;return this.authConnector||this.isSocialEnabled?o.qy`
      ${"explore"!==this.walletGuide||n.W.state.noAdapters?null:o.qy`<wui-separator data-testid="wui-separator" id="explore" text="or"></wui-separator>`}
      <wui-flex flexDirection="column" .padding=${["l","0","0","0"]} class=${(0,Ht.H)(t)}>
        <w3m-wallet-guide
          tabIdx=${(0,r.J)(i)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:o.qy`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");if(!e)return;e.scrollHeight>470?(e.style.setProperty("--connect-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,\n          black 40px,\n          black calc(100% - 40px),\n          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%\n        )"),e.style.setProperty("--connect-scroll--top-opacity",h.z8.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",h.z8.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty("--connect-mask-image","none"),e.style.setProperty("--connect-scroll--top-opacity","0"),e.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){G.I.push("ConnectWallets")}};_i.styles=zi,Li([(0,_t.w)()],_i.prototype,"connectors",void 0),Li([(0,_t.w)()],_i.prototype,"authConnector",void 0),Li([(0,_t.w)()],_i.prototype,"features",void 0),Li([(0,_t.w)()],_i.prototype,"enableWallets",void 0),Li([(0,_t.w)()],_i.prototype,"noAdapters",void 0),Li([(0,a.MZ)()],_i.prototype,"walletGuide",void 0),Li([(0,_t.w)()],_i.prototype,"checked",void 0),Li([(0,_t.w)()],_i.prototype,"isEmailEnabled",void 0),Li([(0,_t.w)()],_i.prototype,"isSocialEnabled",void 0),Li([(0,_t.w)()],_i.prototype,"isAuthEnabled",void 0),_i=Li([(0,h.EM)("w3m-connect-view")],_i);var Hi=i(36141);i(27667),i(61772);const Bi=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Fi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Vi=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Vi.styles=[w.W5,w.fD,Bi],Fi([(0,a.MZ)({type:Boolean})],Vi.prototype,"disabled",void 0),Fi([(0,a.MZ)()],Vi.prototype,"label",void 0),Fi([(0,a.MZ)()],Vi.prototype,"buttonLabel",void 0),Vi=Fi([(0,f.E)("wui-cta-button")],Vi);const Ji=o.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var Ki=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Gi=class extends o.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:a,homepage:r}=this.wallet,n=d.w.isMobile(),s=d.w.isIos(),l=d.w.isAndroid(),c=[t,i,r,a].filter(Boolean).length>1,u=h.Zv.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!n?o.qy`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>G.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&r?o.qy`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?o.qy`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&l?o.qy`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&d.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&d.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&d.w.openHref(this.wallet.homepage,"_blank")}};Gi.styles=[Ji],Ki([(0,a.MZ)({type:Object})],Gi.prototype,"wallet",void 0),Gi=Ki([(0,h.EM)("w3m-mobile-download-links")],Gi);const Yi=o.AH`
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
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Xi=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class Qi extends o.WF{constructor(){super(),this.wallet=G.I.state.data?.wallet,this.connector=G.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=s.$.getWalletImage(this.wallet)??s.$.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=Y.x.state.wcUri,this.error=Y.x.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Y.x.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),Y.x.subscribeKey("wcError",(e=>this.error=e)),Y.x.subscribeKey("buffering",(e=>this.buffering=e))),(d.w.isTelegram()||d.w.isSafari())&&d.w.isIos()&&Y.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),o.qy`
      <wui-flex
        data-error=${(0,r.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,r.J)(this.imageSrc)}></wui-wallet-image>

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
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.qy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?o.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(Y.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=Hi.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(d.w.copyToClopboard(this.uri),K.P.showSuccess("Link copied"))}catch{K.P.showError("Failed to copy")}}}Qi.styles=Yi,Xi([(0,a.wk)()],Qi.prototype,"isRetrying",void 0),Xi([(0,a.wk)()],Qi.prototype,"uri",void 0),Xi([(0,a.wk)()],Qi.prototype,"error",void 0),Xi([(0,a.wk)()],Qi.prototype,"ready",void 0),Xi([(0,a.wk)()],Qi.prototype,"showRetry",void 0),Xi([(0,a.wk)()],Qi.prototype,"secondaryBtnLabel",void 0),Xi([(0,a.wk)()],Qi.prototype,"secondaryLabel",void 0),Xi([(0,a.wk)()],Qi.prototype,"buffering",void 0),Xi([(0,a.wk)()],Qi.prototype,"isLoading",void 0),Xi([(0,a.MZ)({type:Boolean})],Qi.prototype,"isMobile",void 0),Xi([(0,a.MZ)()],Qi.prototype,"onRetry",void 0);var eo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let to=class extends Qi{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");P.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(n.W.subscribeKey("activeCaipAddress",(e=>{e&&p.W.close()})))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((e=>e()))}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id===F.o.CONNECTOR_ID.COINBASE_SDK&&this.error||(await Y.x.connectExternal(this.connector,this.connector.chain),P.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){P.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};to=eo([(0,h.EM)("w3m-connecting-external-view")],to);const io=o.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var oo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ao=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=V.a.state.activeConnector,this.unsubscribe.push(V.a.subscribeKey("activeConnector",(e=>this.activeConnector=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,r.J)(s.$.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e=>e.name?o.qy`
            <wui-list-wallet
              imageSrc=${(0,r.J)(s.$.getChainImage(e.chain))}
              name=${F.o.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              data-testid="wui-list-chain-${e.chain}"
            ></wui-list-wallet>
          `:null))}onConnector(e){const t=this.activeConnector?.connectors?.find((t=>t.chain===e.chain));t?"walletConnect"===t.id?d.w.isMobile()?G.I.push("AllWallets"):G.I.push("ConnectingWalletConnect"):G.I.push("ConnectingExternal",{connector:t}):K.P.showError("Failed to find connector")}};ao.styles=io,oo([(0,a.wk)()],ao.prototype,"activeConnector",void 0),ao=oo([(0,h.EM)("w3m-connecting-multi-chain-view")],ao);var ro=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let no=class extends o.WF{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Y.x.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return o.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((e=>{let{platform:t}=e;return t})),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};ro([(0,a.MZ)({type:Array})],no.prototype,"platforms",void 0),ro([(0,a.MZ)()],no.prototype,"onSelectPlatfrom",void 0),ro([(0,a.wk)()],no.prototype,"buffering",void 0),no=ro([(0,h.EM)("w3m-connecting-header")],no);var so=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let lo=class extends Qi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),P.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=V.a.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name));if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await Y.x.connectExternal(t,t.chain),p.W.close(),P.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){P.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};lo=so([(0,h.EM)("w3m-connecting-wc-browser")],lo);var co=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let uo=class extends Qi{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),P.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:o}=d.w.formatNativeUrl(e,this.uri);Y.x.setWcLinking({name:t,href:o}),Y.x.setRecentWallet(this.wallet),d.w.openHref(i,"_blank")}catch{this.error=!0}}};uo=co([(0,h.EM)("w3m-connecting-wc-desktop")],uo);var po=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ho=class extends Qi{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())},this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:i,href:o}=d.w.formatNativeUrl(e,this.uri);Y.x.setWcLinking({name:t,href:o}),Y.x.setRecentWallet(this.wallet);const a=d.w.isIframe()?"_top":"_self";d.w.openHref(i,a),clearTimeout(this.labelTimeout),this.secondaryLabel=J.oU.CONNECT_LABELS.MOBILE}catch(e){P.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel=void 0,this.secondaryLabel=J.oU.CONNECT_LABELS.MOBILE,document.addEventListener("visibilitychange",this.onBuffering.bind(this)),P.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}}),this.btnLabelTimeout=setTimeout((()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=J.oU.CONNECT_LABELS.MOBILE}),J.oU.FIVE_SEC_MS),this.labelTimeout=setTimeout((()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"}),J.oU.THREE_SEC_MS)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}onBuffering(){const e=d.w.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(Y.x.setBuffering(!0),setTimeout((()=>{Y.x.setBuffering(!1)}),5e3))}onTryAgain(){this.buffering||(Y.x.setWcError(!1),this.onConnect())}};ho=po([(0,h.EM)("w3m-connecting-wc-mobile")],ho);i(75938),i(43805);const wo=o.AH`
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
`;var go=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fo=class extends Qi{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),P.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach((e=>e())),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`
      <wui-flex
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
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return Y.x.setWcLinking(void 0),Y.x.setRecentWallet(this.wallet),o.qy` <wui-qr-code
      size=${e}
      theme=${Hi.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,r.J)(s.$.getWalletImage(this.wallet))}
      color=${(0,r.J)(Hi.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,r.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};fo.styles=wo,fo=go([(0,h.EM)("w3m-connecting-wc-qrcode")],fo);var bo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let mo=class extends o.WF{constructor(){if(super(),this.wallet=G.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");P.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,r.J)(s.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};mo=bo([(0,h.EM)("w3m-connecting-wc-unsupported")],mo);var vo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let yo=class extends Qi{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(Y.x.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),P.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:o}=d.w.formatUniversalUrl(e,this.uri);Y.x.setWcLinking({name:t,href:o}),Y.x.setRecentWallet(this.wallet),d.w.openHref(i,"_blank")}catch{this.error=!0}}};vo([(0,a.wk)()],yo.prototype,"isLoading",void 0),yo=vo([(0,h.EM)("w3m-connecting-wc-web")],yo);var xo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ko=class extends o.WF{constructor(){super(),this.wallet=G.I.state.data?.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(l.H.state.siwx),this.determinePlatforms(),this.initializeConnection()}render(){return o.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("browser"!==this.platform&&(!l.H.state.manualWCControl||e))try{const{wcPairingExpiry:t,status:i}=Y.x.state;(e||d.w.isPairingExpired(t)||"connecting"===i)&&(await Y.x.connectWalletConnect(),this.isSiwxEnabled||p.W.close())}catch(t){P.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),Y.x.setWcError(!0),K.P.showError(t.message??"Connection error"),Y.x.resetWcConnection(),G.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:o,rdns:a}=this.wallet,r=o?.map((e=>{let{injected_id:t}=e;return t})).filter(Boolean),s=[...a?[a]:r??[]],c=!l.H.state.isUniversalProvider&&s.length,u=e,p=i,h=Y.x.checkInstalled(s),w=c&&h,g=t&&!d.w.isMobile();w&&!n.W.state.noAdapters&&this.platforms.push("browser"),u&&this.platforms.push(d.w.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!c||n.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};xo([(0,a.wk)()],ko.prototype,"platform",void 0),xo([(0,a.wk)()],ko.prototype,"platforms",void 0),xo([(0,a.wk)()],ko.prototype,"isSiwxEnabled",void 0),ko=xo([(0,h.EM)("w3m-connecting-wc-view")],ko);var Co=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $o=class extends o.WF{constructor(){super(...arguments),this.isMobile=d.w.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:t}=vt.N.state,{customWallets:i}=l.H.state,a=oe.i.getRecentWallets(),r=e.length||t.length||i?.length||a.length;return o.qy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${r?o.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return o.qy`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};Co([(0,a.wk)()],$o.prototype,"isMobile",void 0),$o=Co([(0,h.EM)("w3m-connecting-wc-basic-view")],$o);var Io=i(71222);const Eo=o.AH`
  .continue-button-container {
    width: 100%;
  }
`;var So=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let To=class extends o.WF{constructor(){super(...arguments),this.loading=!1}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{d.w.openHref(Io.T.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){G.I.push("RegisterAccountName"),P.E.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:u.U.state.preferredAccountType===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};To.styles=Eo,So([(0,a.wk)()],To.prototype,"loading",void 0),To=So([(0,h.EM)("w3m-choose-account-name-view")],To);var Ao=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ro=class extends o.WF{constructor(){super(...arguments),this.wallet=G.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return o.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&d.w.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&d.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&d.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&d.w.openHref(this.wallet.homepage,"_blank")}};Ro=Ao([(0,h.EM)("w3m-downloads-view")],Ro);var Wo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Oo=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{d.w.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=vt.N.state,{customWallets:i}=l.H.state;return[...t,...i??[],...e].slice(0,4).map((e=>o.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,r.J)(s.$.getWalletImage(e))}
          @click=${()=>{d.w.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};Oo=Wo([(0,h.EM)("w3m-get-wallet-view")],Oo);i(13110);var No=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let jo=class extends o.WF{constructor(){super(...arguments),this.data=[]}render(){return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>o.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>o.qy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};No([(0,a.MZ)({type:Array})],jo.prototype,"data",void 0),jo=No([(0,h.EM)("w3m-help-widget")],jo);var Mo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Po=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let qo=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Po}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){P.E.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),G.I.push("GetWallet")}};qo=Mo([(0,h.EM)("w3m-what-is-a-wallet-view")],qo);const Do=o.AH`
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
`;var Uo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Zo=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=Bt.o.state.isLegalCheckboxChecked,this.unsubscribe.push(Bt.o.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=l.H.state,i=l.H.state.features?.legalCheckbox,a=Boolean(e||t)&&Boolean(i),n=a&&!this.checked,s=n?-1:void 0;return o.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${a?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,r.J)(n?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,r.J)(s)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}};Zo.styles=Do,Uo([(0,a.wk)()],Zo.prototype,"checked",void 0),Zo=Uo([(0,h.EM)("w3m-connect-wallets-view")],Zo);const zo=o.AH`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Lo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let _o=class extends o.WF{render(){return o.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};_o.styles=[w.W5,zo],_o=Lo([(0,f.E)("wui-loading-hexagon")],_o);const Ho=o.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Bo=o.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Fo=o.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Vo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Jo=class extends o.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:Bo,md:yt,lg:Ho},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,o.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Jo.styles=[w.W5,Fo],Vo([(0,a.MZ)()],Jo.prototype,"size",void 0),Vo([(0,a.MZ)()],Jo.prototype,"name",void 0),Vo([(0,a.MZ)({type:Object})],Jo.prototype,"networkImagesBySize",void 0),Vo([(0,a.MZ)()],Jo.prototype,"imageSrc",void 0),Vo([(0,a.MZ)({type:Boolean})],Jo.prototype,"selected",void 0),Vo([(0,a.MZ)({type:Boolean})],Jo.prototype,"round",void 0),Jo=Vo([(0,f.E)("wui-network-image")],Jo);const Ko=o.AH`
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

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Go=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Yo=class extends o.WF{constructor(){super(),this.network=G.I.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return o.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,r.J)(s.$.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=n.W.state.activeChain,t=V.a.getConnectorId(e);return V.a.getAuthConnector()&&t===F.o.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=n.W.state.activeChain,t=V.a.getConnectorId(e);return V.a.getAuthConnector()&&t===F.o.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&await n.W.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};Yo.styles=Ko,Go([(0,a.wk)()],Yo.prototype,"showRetry",void 0),Go([(0,a.wk)()],Yo.prototype,"error",void 0),Yo=Go([(0,h.EM)("w3m-network-switch-view")],Yo);i(76184);const Xo=o.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Qo=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ea=class extends o.WF{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return o.qy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled}>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?o.qy`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?o.qy`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:o.qy`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};ea.styles=[w.W5,w.fD,Xo],Qo([(0,a.MZ)()],ea.prototype,"imageSrc",void 0),Qo([(0,a.MZ)()],ea.prototype,"name",void 0),Qo([(0,a.MZ)({type:Boolean})],ea.prototype,"disabled",void 0),Qo([(0,a.MZ)({type:Boolean})],ea.prototype,"selected",void 0),Qo([(0,a.MZ)({type:Boolean})],ea.prototype,"transparent",void 0),ea=Qo([(0,f.E)("wui-list-network")],ea);const ta=o.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var ia=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let oa=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.network=n.W.state.activeCaipNetwork,this.requestedCaipNetworks=n.W.getAllRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=d.w.debounce((e=>{this.search=e}),100),this.unsubscribe.push(c.j.subscribeNetworkImages((()=>this.requestUpdate())),n.W.subscribeKey("activeCaipNetwork",(e=>this.network=e)),n.W.subscribeKey("chains",(()=>this.requestedCaipNetworks=n.W.getAllRequestedCaipNetworks())))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){P.E.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),G.I.push("WhatIsANetwork")}networksTemplate(){const e=n.W.getAllRequestedCaipNetworks(),t=n.W.getAllApprovedCaipNetworkIds(),i=d.w.sortRequestedNetworks(t,e);return this.search?this.filteredNetworks=i?.filter((e=>e?.name?.toLowerCase().includes(this.search.toLowerCase()))):this.filteredNetworks=i,this.filteredNetworks?.map((e=>o.qy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,r.J)(s.$.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `))}getNetworkDisabled(e){const t=e.chainNamespace,i=u.U.getCaipAddress(t),o=n.W.getAllApprovedCaipNetworkIds(),a=!1!==n.W.getNetworkProp("supportsAllNetworks",t),r=V.a.getConnectorId(t),s=V.a.getAuthConnector(),l=r===F.o.CONNECTOR_ID.AUTH&&s;return!(!i||a||l)&&!o?.includes(e.caipNetworkId)}onSwitchNetwork(e){const t=G.I.state.data;if(e.id===this.network?.id)return;const i=e.chainNamespace!==n.W.state.activeChain,o=u.U.state.caipAddress,a=u.U.getCaipAddress(e.chainNamespace),r=V.a.getConnectorId(n.W.state.activeChain)===F.o.CONNECTOR_ID.AUTH,s=F.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((t=>t===e.chainNamespace));o?r&&s?G.I.push("SwitchNetwork",{...t,network:e}):r&&!s||i&&!a?G.I.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):G.I.push("SwitchNetwork",{...t,network:e}):G.I.push("SwitchNetwork",{...t,network:e})}};oa.styles=ta,ia([(0,a.wk)()],oa.prototype,"network",void 0),ia([(0,a.wk)()],oa.prototype,"requestedCaipNetworks",void 0),ia([(0,a.wk)()],oa.prototype,"filteredNetworks",void 0),ia([(0,a.wk)()],oa.prototype,"search",void 0),oa=ia([(0,h.EM)("w3m-networks-view")],oa);const aa=o.AH`
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

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
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

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var ra=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const na={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let sa=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=G.I.state.data?.switchToChain,this.caipNetwork=G.I.state.data?.network,this.activeChain=n.W.state.activeChain}firstUpdated(){this.unsubscribe.push(n.W.subscribeKey("activeChain",(e=>this.activeChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.switchToChain?F.o.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t=F.o.CHAIN_NAME_MAP[this.switchToChain];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual name=${(0,r.J)(na[this.switchToChain])}></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(n.W.setIsSwitchingNamespace(!0),V.a.setFilterByNamespace(this.switchToChain),this.caipNetwork?await n.W.switchActiveNetwork(this.caipNetwork):n.W.setActiveNamespace(this.switchToChain),G.I.reset("Connect"))}};sa.styles=aa,ra([(0,a.MZ)()],sa.prototype,"activeChain",void 0),sa=ra([(0,h.EM)("w3m-switch-active-chain-view")],sa);var la=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const ca=[{images:["network","layers","system"],title:"The system\u2019s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let ua=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ca}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{d.w.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ua=la([(0,h.EM)("w3m-what-is-a-network-view")],ua);const da=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var pa=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ha=class extends o.WF{constructor(){super(),this.swapUnsupportedChain=G.I.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconecting=!1,this.unsubscribe.push(c.j.subscribeNetworkImages((()=>this.requestUpdate())))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?o.qy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:o.qy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=n.W.getAllRequestedCaipNetworks(),t=n.W.getAllApprovedCaipNetworkIds(),i=d.w.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?i.filter((e=>J.oU.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId))):i).map((e=>o.qy`
        <wui-list-network
          imageSrc=${(0,r.J)(s.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=!0,await Y.x.disconnect(),p.W.close()}catch{P.E.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),K.P.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const t=u.U.state.caipAddress,i=n.W.getAllApprovedCaipNetworkIds(),o=(n.W.getNetworkProp("supportsAllNetworks",e.chainNamespace),G.I.state.data);t?i?.includes(e.caipNetworkId)?await n.W.switchActiveNetwork(e):G.I.push("SwitchNetwork",{...o,network:e}):t||(n.W.setActiveCaipNetwork(e),G.I.push("Connect"))}};ha.styles=da,pa([(0,a.wk)()],ha.prototype,"disconecting",void 0),ha=pa([(0,h.EM)("w3m-unsupported-chain-view")],ha);const wa=o.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var ga=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fa=class extends o.WF{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return o.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};fa.styles=[w.W5,w.fD,wa],ga([(0,a.MZ)()],fa.prototype,"icon",void 0),ga([(0,a.MZ)()],fa.prototype,"text",void 0),fa=ga([(0,f.E)("wui-banner")],fa);const ba=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var ma=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let va=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=u.U.state.preferredAccountType,this.unsubscribe.push(u.U.subscribeKey("preferredAccountType",(e=>{this.preferredAccountType=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=n.W.getAllRequestedCaipNetworks(),t=n.W.getAllApprovedCaipNetworkIds(),i=n.W.state.activeCaipNetwork,a=n.W.checkIfSmartAccountEnabled();let l=d.w.sortRequestedNetworks(t,e);if(a&&this.preferredAccountType===ie.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;l=[i]}return l.map((e=>o.qy`
        <wui-list-network
          imageSrc=${(0,r.J)(s.$.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};va.styles=ba,ma([(0,a.wk)()],va.prototype,"preferredAccountType",void 0),va=ma([(0,h.EM)("w3m-wallet-compatible-networks-view")],va);var ya=i(13237);const xa=o.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var ka=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ca=class extends o.WF{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,o.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Ca.styles=[w.W5,xa],ka([(0,a.MZ)()],Ca.prototype,"imageSrc",void 0),ka([(0,a.MZ)()],Ca.prototype,"alt",void 0),ka([(0,a.MZ)({type:Boolean})],Ca.prototype,"borderRadiusFull",void 0),Ca=ka([(0,f.E)("wui-visual-thumbnail")],Ca);const $a=o.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Ia=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ea=class extends o.WF{constructor(){super(...arguments),this.dappImageUrl=l.H.state.metadata?.icons,this.walletImageUrl=u.U.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return o.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Ea.styles=$a,Ea=Ia([(0,h.EM)("w3m-siwx-sign-message-thumbnails")],Ea);var Sa=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ta=class extends o.WF{constructor(){super(...arguments),this.dappName=l.H.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await ya.U.requestSignMessage().finally((()=>this.isSigning=!1))}async onCancel(){this.isCancelling=!0,await ya.U.cancelSignMessage().finally((()=>this.isCancelling=!1))}};Sa([(0,a.wk)()],Ta.prototype,"isCancelling",void 0),Sa([(0,a.wk)()],Ta.prototype,"isSigning",void 0),Ta=Sa([(0,h.EM)("w3m-siwx-sign-message-view")],Ta)},3892:(e,t,i)=>{var o=i(37022),a=i(56370),r=i(56440),n=(i(7836),i(39446)),s=i(37845);i(47528);const l=o.AH`
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
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,r.J)(this.tabIdx)}>
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
    `}templatePlacement(){return"center"===this.align?o.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};u.styles=[n.W5,n.fD,l],c([(0,a.MZ)()],u.prototype,"logo",void 0),c([(0,a.MZ)()],u.prototype,"name",void 0),c([(0,a.MZ)()],u.prototype,"align",void 0),c([(0,a.MZ)()],u.prototype,"tabIdx",void 0),c([(0,a.MZ)({type:Boolean})],u.prototype,"disabled",void 0),u=c([(0,s.E)("wui-list-social")],u)},17372:(e,t,i)=>{i.d(t,{Up:()=>p});var o=i(595),a=i(15814),r=i(73939),n=i(79323),s=i(61139),l=i(7258),c=i(24657),u=i(88861);async function d(e){s.I.push("ConnectingSocial");const t=r.a.getAuthConnector();let i=null;try{const r=setTimeout((()=>{throw new Error("Social login timed out. Please try again.")}),45e3);if(t&&e){if(c.w.isTelegram()||(i=function(){try{return c.w.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes")}catch(e){throw new Error("Could not open social popup")}}()),i)o.U.setSocialWindow(i,a.W.state.activeChain);else if(!c.w.isTelegram())throw new Error("Could not create social popup");const{uri:n}=await t.provider.getSocialRedirectUri({provider:e});if(!n)throw i?.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=n),c.w.isTelegram()){u.i.setTelegramSocialProvider(e);const t=c.w.formatTelegramSocialLoginUrl(n);c.w.openHref(t,"_top")}clearTimeout(r)}}catch(n){i?.close(),l.P.showError(n?.message)}}async function p(e){o.U.setSocialProvider(e,a.W.state.activeChain),n.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),"farcaster"===e?await async function(){s.I.push("ConnectingFarcaster");const e=r.a.getAuthConnector();if(e&&!o.U.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();o.U.setFarcasterUrl(t,a.W.state.activeChain)}catch(t){s.I.goBack(),l.P.showError(t)}}():await d(e)}},30737:(e,t,i)=>{var o=i(37022),a=i(56370),r=(i(61446),i(71056),i(7836),i(52574),i(39446)),n=i(69929),s=i(37845);const l=o.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return o.qy`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${n.Z.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?o.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:o.qy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};u.styles=[r.W5,r.fD,l],c([(0,a.MZ)()],u.prototype,"tokenName",void 0),c([(0,a.MZ)()],u.prototype,"tokenImageUrl",void 0),c([(0,a.MZ)({type:Number})],u.prototype,"tokenValue",void 0),c([(0,a.MZ)()],u.prototype,"tokenAmount",void 0),c([(0,a.MZ)()],u.prototype,"tokenCurrency",void 0),c([(0,a.MZ)({type:Boolean})],u.prototype,"clickable",void 0),u=c([(0,s.E)("wui-list-token")],u)},40135:(e,t,i)=>{var o=i(37022),a=i(56370),r=(i(7836),i(39446)),n=i(37845);const s=o.AH`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.text=""}render(){return o.qy`${this.template()}`}template(){return this.text?o.qy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};c.styles=[r.W5,s],l([(0,a.MZ)()],c.prototype,"text",void 0),c=l([(0,n.E)("wui-separator")],c)},43946:(e,t,i)=>{var o=i(37022),a=i(56370),r=(i(71056),i(39446)),n=i(69929),s=i(37845);const l=o.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `,o.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",o.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=n.Z.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant="default",null}};u.styles=[r.W5,l],c([(0,a.MZ)()],u.prototype,"imageSrc",void 0),c([(0,a.MZ)()],u.prototype,"alt",void 0),c([(0,a.MZ)()],u.prototype,"address",void 0),c([(0,a.MZ)()],u.prototype,"size",void 0),u=c([(0,s.E)("wui-avatar")],u)},47438:(e,t,i)=>{var o=i(37022),a=i(56370),r=i(56440),n=(i(7836),i(39446)),s=i(37845);i(52501);const l=o.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.disabled=!1}render(){return o.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,r.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?o.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};u.styles=[n.W5,l],c([(0,a.MZ)()],u.prototype,"errorMessage",void 0),c([(0,a.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,a.MZ)()],u.prototype,"value",void 0),c([(0,a.MZ)()],u.prototype,"tabIdx",void 0),u=c([(0,s.E)("wui-email-input")],u)},47528:(e,t,i)=>{var o=i(37022),a=i(56370),r=(i(61446),i(39446)),n=i(37845);const s=o.AH`
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
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.logo="google"}render(){return o.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};c.styles=[r.W5,s],l([(0,a.MZ)()],c.prototype,"logo",void 0),c=l([(0,n.E)("wui-logo")],c)},61772:(e,t,i)=>{var o=i(37022),a=i(56370),r=(i(61446),i(71056),i(7836),i(39446)),n=i(37845);const s=o.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

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

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var l=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let c=class extends o.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e="sm"===this.size?"small-600":"paragraph-600";return o.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};c.styles=[r.W5,r.fD,s],l([(0,a.MZ)()],c.prototype,"variant",void 0),l([(0,a.MZ)()],c.prototype,"imageSrc",void 0),l([(0,a.MZ)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,a.MZ)()],c.prototype,"icon",void 0),l([(0,a.MZ)()],c.prototype,"size",void 0),l([(0,a.MZ)()],c.prototype,"text",void 0),c=l([(0,n.E)("wui-chip-button")],c)},63625:(e,t,i)=>{i(59970)},71222:(e,t,i)=>{i.d(t,{T:()=>o});const o={URLS:{FAQ:"https://walletconnect.com/faq"}}},71996:(e,t,i)=>{var o=i(37022),a=i(56370),r=i(43103),n=i(61139),s=i(73609),l=i(89268);const c=o.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var u=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let d=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=r.I.state.open,this.unsubscribe.push(n.I.subscribeKey("view",(()=>{r.I.hide()})),s.W.subscribeKey("open",(e=>{e||r.I.hide()})),r.I.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),r.I.hide()}render(){return o.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||r.I.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||r.I.hide()}};d.styles=[c],u([(0,a.MZ)()],d.prototype,"text",void 0),u([(0,a.wk)()],d.prototype,"open",void 0),d=u([(0,l.EM)("w3m-tooltip-trigger")],d)},98203:(e,t,i)=>{var o=i(37022),a=i(56370),r=(i(61446),i(71056),i(7836),i(39446)),n=i(69929),s=i(37845);const l=o.AH`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var c=function(e,t,i,o){var a,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let u=class extends o.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return o.qy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:n.Z.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?o.qy`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?o.qy`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};u.styles=[r.W5,r.fD,l],c([(0,a.MZ)()],u.prototype,"variant",void 0),c([(0,a.MZ)()],u.prototype,"imageSrc",void 0),c([(0,a.MZ)()],u.prototype,"imageIcon",void 0),c([(0,a.MZ)()],u.prototype,"imageIconSize",void 0),c([(0,a.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,a.MZ)()],u.prototype,"icon",void 0),c([(0,a.MZ)()],u.prototype,"href",void 0),c([(0,a.MZ)()],u.prototype,"text",void 0),u=c([(0,s.E)("wui-chip")],u)}}]);
//# sourceMappingURL=621.095acd13.chunk.js.map