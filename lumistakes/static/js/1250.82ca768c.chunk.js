"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1250],{51250:(e,t,r)=>{r.r(t),r.d(t,{W3mBuyInProgressView:()=>re,W3mOnRampActivityView:()=>$,W3mOnRampProvidersView:()=>K,W3mOnrampFiatSelectView:()=>M,W3mOnrampTokensView:()=>Y,W3mOnrampWidget:()=>de,W3mWhatIsABuyView:()=>oe});var i=r(37022),o=r(56370),s=r(56440),a=r(24684),n=r(38993),c=r(76844),l=r(80883),u=r(84657),p=r(595),d=r(16496),h=r(65618),m=r(15814);const w={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},y={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},g={providers:u.tM,selectedProvider:null,error:null,purchaseCurrency:w,paymentCurrency:y,purchaseCurrencies:[w],paymentCurrencies:[],quotesLoading:!1},f=(0,n.BX)(g),b={state:f,subscribe:e=>(0,n.B1)(f,(()=>e(f))),subscribeKey:(e,t)=>(0,c.u$)(f,e,t),setSelectedProvider(e){if(e&&"meld"===e.name){const t=m.W.state.activeChain===l.o.CHAIN.SOLANA?"SOL":"USDC",r=p.U.state.address??"",i=new URL(e.url);i.searchParams.append("publicKey",u.Db),i.searchParams.append("destinationCurrencyCode",t),i.searchParams.append("walletAddress",r),e.url=i.toString()}f.selectedProvider=e},setPurchaseCurrency(e){f.purchaseCurrency=e},setPaymentCurrency(e){f.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){const e=await h.T.getOnrampOptions();f.purchaseCurrencies=e.purchaseCurrencies,f.paymentCurrencies=e.paymentCurrencies,f.paymentCurrency=e.paymentCurrencies[0]||y,f.purchaseCurrency=e.purchaseCurrencies[0]||w,await d.N.fetchCurrencyImages(e.paymentCurrencies.map((e=>e.id))),await d.N.fetchTokenImages(e.purchaseCurrencies.map((e=>e.symbol)))},async getQuote(){f.quotesLoading=!0;try{const e=await h.T.getOnrampQuote({purchaseCurrency:f.purchaseCurrency,paymentCurrency:f.paymentCurrency,amount:f.paymentAmount?.toString()||"0",network:f.purchaseCurrency?.symbol});return f.quotesLoading=!1,f.purchaseAmount=Number(e?.purchaseAmount.amount),e}catch(e){return f.error=e.message,f.quotesLoading=!1,null}finally{f.quotesLoading=!1}},resetState(){f.providers=u.tM,f.selectedProvider=null,f.error=null,f.purchaseCurrency=w,f.paymentCurrency=y,f.purchaseCurrencies=[w],f.paymentCurrencies=[],f.paymentAmount=void 0,f.purchaseAmount=void 0,f.quotesLoading=!1}};var v=r(68231),x=r(36596),C=r(42661),k=r(89268);r(84107),r(84875),r(29787),r(60677),r(71056),r(94582);const T=i.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var A=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let P=class extends i.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return i.qy`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?i.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:i.qy`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await d.N._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return i.qy`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return i.qy`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return i.qy`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};P.styles=[T],A([(0,o.MZ)({type:Boolean})],P.prototype,"disabled",void 0),A([(0,o.MZ)()],P.prototype,"color",void 0),A([(0,o.MZ)()],P.prototype,"label",void 0),A([(0,o.MZ)()],P.prototype,"purchaseValue",void 0),A([(0,o.MZ)()],P.prototype,"purchaseCurrency",void 0),A([(0,o.MZ)()],P.prototype,"date",void 0),A([(0,o.MZ)({type:Boolean})],P.prototype,"completed",void 0),A([(0,o.MZ)({type:Boolean})],P.prototype,"inProgress",void 0),A([(0,o.MZ)({type:Boolean})],P.prototype,"failed",void 0),A([(0,o.MZ)()],P.prototype,"onClick",void 0),A([(0,o.MZ)()],P.prototype,"symbol",void 0),A([(0,o.MZ)()],P.prototype,"icon",void 0),P=A([(0,k.EM)("w3m-onramp-activity-item")],P);const I=i.AH`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var R=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let $=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=b.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=v.W.state.coinbaseTransactions,this.tokenImages=x.j.state.tokenImages,this.unsubscribe.push(b.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})),x.j.subscribeKey("tokenImages",(e=>this.tokenImages=e)),(()=>{clearTimeout(this.refetchTimeout)}),v.W.subscribe((e=>{this.coinbaseTransactions={...e.coinbaseTransactions}}))),v.W.clearCursor(),this.fetchTransactions()}render(){return i.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map((e=>{const t=a.r.formatDate(e?.metadata?.minedAt),r=e.transfers[0],o=r?.fungible_info;if(!o)return null;const n=o?.icon?.url||this.tokenImages?.[o.symbol||""];return i.qy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${(0,s.J)(o.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${(0,s.J)(n)}
          symbol=${(0,s.J)(o.symbol)}
        ></w3m-onramp-activity-item>
      `}))}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map((e=>{const t=parseInt(e,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{const r=k.tt.getTransactionGroupTitle(t,e),o=this.coinbaseTransactions[t]?.[e];return o?i.qy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(o)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=p.U.state.address,t=C.H.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await v.W.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){const e=new Date;0!==(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter((e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?this.refetchTimeout=setTimeout((async()=>{const e=p.U.state.address;await v.W.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(i.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}};$.styles=I,R([(0,o.wk)()],$.prototype,"selectedOnRampProvider",void 0),R([(0,o.wk)()],$.prototype,"loading",void 0),R([(0,o.wk)()],$.prototype,"coinbaseTransactions",void 0),R([(0,o.wk)()],$.prototype,"tokenImages",void 0),$=R([(0,k.EM)("w3m-onramp-activity-view")],$);var O=r(68737),j=r(73609);r(45770),r(56326),r(455);const S=i.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var W=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let M=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=b.state.paymentCurrency,this.currencies=b.state.paymentCurrencies,this.currencyImages=x.j.state.currencyImages,this.checked=O.o.state.isLegalCheckboxChecked,this.unsubscribe.push(b.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),x.j.subscribeKey("currencyImages",(e=>this.currencyImages=e)),O.o.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=C.H.state,r=C.H.state.features?.legalCheckbox,o=Boolean(e||t)&&Boolean(r)&&!this.checked;return i.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,s.J)(o?"disabled":void 0)}
      >
        ${this.currenciesTemplate(o)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.currencies.map((t=>i.qy`
        <wui-list-item
          imageSrc=${(0,s.J)(this.currencyImages?.[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0,s.J)(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `))}selectCurrency(e){e&&(b.setPaymentCurrency(e),j.W.close())}};M.styles=S,W([(0,o.wk)()],M.prototype,"selectedCurrency",void 0),W([(0,o.wk)()],M.prototype,"currencies",void 0),W([(0,o.wk)()],M.prototype,"currencyImages",void 0),W([(0,o.wk)()],M.prototype,"checked",void 0),M=W([(0,k.EM)("w3m-onramp-fiat-select-view")],M);var _=r(61139),E=r(24657),q=r(79323),D=r(59979),N=r(1348);r(10477),r(13110);const U=i.AH`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var B=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let L=class extends i.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return i.qy`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,s.J)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?i.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:i.qy`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const e=m.W.getAllRequestedCaipNetworks(),t=e?.filter((e=>e?.assets?.imageId))?.slice(0,5);return i.qy`
      <wui-flex class="networks">
        ${t?.map((e=>i.qy`
            <wui-flex class="network-icon">
              <wui-image src=${(0,s.J)(N.$.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `))}
      </wui-flex>
    `}};L.styles=[U],B([(0,o.MZ)({type:Boolean})],L.prototype,"disabled",void 0),B([(0,o.MZ)()],L.prototype,"color",void 0),B([(0,o.MZ)()],L.prototype,"name",void 0),B([(0,o.MZ)()],L.prototype,"label",void 0),B([(0,o.MZ)()],L.prototype,"feeRange",void 0),B([(0,o.MZ)({type:Boolean})],L.prototype,"loading",void 0),B([(0,o.MZ)()],L.prototype,"onClick",void 0),L=B([(0,k.EM)("w3m-onramp-provider-item")],L);r(43901);const z=i.AH`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var Z=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let H=class extends i.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=C.H.state;return e||t?i.qy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return i.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){q.E.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:p.U.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),_.I.push("WhatIsABuy")}};H.styles=[z],H=Z([(0,k.EM)("w3m-onramp-providers-footer")],H);var F=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let K=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.providers=b.state.providers,this.unsubscribe.push(b.subscribeKey("providers",(e=>{this.providers=e})))}firstUpdated(){const e=this.providers.map((async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url)));Promise.all(e).then((e=>{this.providers=this.providers.map(((t,r)=>({...t,url:e[r]||""})))}))}render(){return i.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter((e=>e.supportedChains.includes(m.W.state.activeChain??"eip155"))).map((e=>i.qy`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `))}onClickProvider(e){b.setSelectedProvider(e),_.I.push("BuyInProgress"),E.w.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),q.E.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:p.U.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=p.U.state.address,t=m.W.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!t?.name)throw new Error("No network found");const r=u.oU.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??u.oU.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=b.state.purchaseCurrency,o=i?[i.symbol]:b.state.purchaseCurrencies.map((e=>e.symbol));return await h.T.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:u.oU.WC_COINBASE_PAY_SDK_CHAINS,assets:o}],partnerUserId:e,purchaseAmount:b.state.purchaseAmount})}};F([(0,o.wk)()],K.prototype,"providers",void 0),K=F([(0,k.EM)("w3m-onramp-providers-view")],K);const V=i.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var J=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let Y=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=b.state.purchaseCurrencies,this.tokens=b.state.purchaseCurrencies,this.tokenImages=x.j.state.tokenImages,this.checked=O.o.state.isLegalCheckboxChecked,this.unsubscribe.push(b.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),x.j.subscribeKey("tokenImages",(e=>this.tokenImages=e)),O.o.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=C.H.state,r=C.H.state.features?.legalCheckbox,o=Boolean(e||t)&&Boolean(r)&&!this.checked;return i.qy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,s.J)(o?"disabled":void 0)}
      >
        ${this.currenciesTemplate(o)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.tokens.map((t=>i.qy`
        <wui-list-item
          imageSrc=${(0,s.J)(this.tokenImages?.[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${(0,s.J)(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `))}selectToken(e){e&&(b.setPurchaseCurrency(e),j.W.close())}};Y.styles=V,J([(0,o.wk)()],Y.prototype,"selectedCurrency",void 0),J([(0,o.wk)()],Y.prototype,"tokens",void 0),J([(0,o.wk)()],Y.prototype,"tokenImages",void 0),J([(0,o.wk)()],Y.prototype,"checked",void 0),Y=J([(0,k.EM)("w3m-onramp-token-select-view")],Y);var G=r(93022),Q=r(7258),X=r(36141);r(92016),r(27667);const ee=i.AH`
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
`;var te=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let re=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=b.state.selectedProvider,this.uri=G.x.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(b.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e}))),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We\u2019ll notify you once your Buy is processed";return i.qy`
      <wui-flex
        data-error=${(0,s.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,s.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

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
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name)this.startTime=Date.now(),this.initializeCoinbaseTransactions()}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval((()=>this.watchCoinbaseTransactions()),4e3)}async watchCoinbaseTransactions(){try{const e=p.U.state.address;if(!e)throw new Error("No address found");const t=await h.T.fetchTransactions({account:e,onramp:"coinbase"});t.data.filter((e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?(clearInterval(this.intervalId),_.I.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){Q.P.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,E.w.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?i.qy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=X.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)return Q.P.showError("No link found"),void _.I.goBack();try{E.w.copyToClopboard(this.selectedOnRampProvider.url),Q.P.showSuccess("Link copied")}catch{Q.P.showError("Failed to copy")}}};re.styles=ee,te([(0,o.wk)()],re.prototype,"intervalId",void 0),te([(0,o.wk)()],re.prototype,"selectedOnRampProvider",void 0),te([(0,o.wk)()],re.prototype,"uri",void 0),te([(0,o.wk)()],re.prototype,"ready",void 0),te([(0,o.wk)()],re.prototype,"showRetry",void 0),te([(0,o.wk)()],re.prototype,"buffering",void 0),te([(0,o.wk)()],re.prototype,"error",void 0),te([(0,o.wk)()],re.prototype,"startTime",void 0),te([(0,o.MZ)({type:Boolean})],re.prototype,"isMobile",void 0),te([(0,o.MZ)()],re.prototype,"onRetry",void 0),re=te([(0,k.EM)("w3m-buy-in-progress-view")],re);var ie=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let oe=class extends i.WF{render(){return i.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${_.I.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};oe=ie([(0,k.EM)("w3m-what-is-a-buy-view")],oe);r(76184);const se=i.AH`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var ae=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let ne=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=x.j.state.currencyImages,this.tokenImages=x.j.state.tokenImages,this.unsubscribe.push(b.subscribeKey("purchaseCurrency",(e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))})),b.subscribeKey("paymentCurrency",(e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))})),b.subscribe((e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)})),x.j.subscribe((e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}})))}firstUpdated(){b.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return i.qy`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?i.qy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>j.W.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,s.J)(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:i.qy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};ne.styles=se,ae([(0,o.MZ)({type:String})],ne.prototype,"type",void 0),ae([(0,o.MZ)({type:Number})],ne.prototype,"value",void 0),ae([(0,o.wk)()],ne.prototype,"currencies",void 0),ae([(0,o.wk)()],ne.prototype,"selectedCurrency",void 0),ae([(0,o.wk)()],ne.prototype,"currencyImages",void 0),ae([(0,o.wk)()],ne.prototype,"tokenImages",void 0),ne=ae([(0,k.EM)("w3m-onramp-input")],ne);const ce=i.AH`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var le=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};const ue={USD:"$",EUR:"\u20ac",GBP:"\xa3"},pe=[100,250,500,1e3];let de=class extends i.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=m.W.state.activeCaipAddress,this.loading=j.W.state.loading,this.paymentCurrency=b.state.paymentCurrency,this.paymentAmount=b.state.paymentAmount,this.purchaseAmount=b.state.purchaseAmount,this.quoteLoading=b.state.quotesLoading,this.unsubscribe.push(m.W.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),j.W.subscribeKey("loading",(e=>{this.loading=e})),b.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return i.qy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${pe.map((e=>i.qy`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${ue[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?i.qy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:i.qy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||j.W.open({view:"OnRampProviders"})}openModal(){j.W.open({view:"Connect"})}async onPaymentAmountChange(e){b.setPaymentAmount(Number(e.detail)),await b.getQuote()}async selectPresetAmount(e){b.setPaymentAmount(e),await b.getQuote()}};de.styles=ce,le([(0,o.MZ)({type:Boolean})],de.prototype,"disabled",void 0),le([(0,o.wk)()],de.prototype,"caipAddress",void 0),le([(0,o.wk)()],de.prototype,"loading",void 0),le([(0,o.wk)()],de.prototype,"paymentCurrency",void 0),le([(0,o.wk)()],de.prototype,"paymentAmount",void 0),le([(0,o.wk)()],de.prototype,"purchaseAmount",void 0),le([(0,o.wk)()],de.prototype,"quoteLoading",void 0),de=le([(0,k.EM)("w3m-onramp-widget")],de)},71056:(e,t,r)=>{var i=r(37022),o=r(56370),s=r(39446),a=r(37845);const n=i.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var c=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let l=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[s.W5,s.ck,n],c([(0,o.MZ)()],l.prototype,"src",void 0),c([(0,o.MZ)()],l.prototype,"alt",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),l=c([(0,a.E)("wui-image")],l)}}]);
//# sourceMappingURL=1250.82ca768c.chunk.js.map