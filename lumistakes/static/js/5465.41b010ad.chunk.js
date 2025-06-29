"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5465],{25465:(e,t,i)=>{i.r(t),i.d(t,{W3mEmailLoginView:()=>z,W3mEmailVerifyDeviceView:()=>P,W3mEmailVerifyOtpView:()=>T,W3mUpdateEmailPrimaryOtpView:()=>M,W3mUpdateEmailSecondaryOtpView:()=>N,W3mUpdateEmailWalletView:()=>F});var o=i(79323),r=i(15814),n=i(93022),a=i(42661),s=i(73609),l=i(24657),c=i(89268),u=i(37022),d=i(56370),p=i(61139),h=i(73939),m=i(7258),w=(i(84107),i(43901),i(94582),i(52574),i(39446)),f=i(69929),g=i(37845);const v=u.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var b=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let y=class extends u.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return u.qy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};y.styles=[w.W5,w.fD,v],b([(0,d.MZ)({type:Boolean})],y.prototype,"disabled",void 0),b([(0,d.MZ)({type:String})],y.prototype,"value",void 0),y=b([(0,g.E)("wui-input-numeric")],y);const E=u.AH`
  :host {
    position: relative;
    display: block;
  }
`;var x=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let I=class extends u.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const i=e.target,o=this.getInputElement(i);if(!o)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const r=o.selectionStart;switch(e.key){case"ArrowLeft":r&&o.setSelectionRange(r+1,r+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===o.value?this.focusInputField("prev",t):this.updateInput(o,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const i=this.numerics[e<this.length?e:t],o=i?this.getInputElement(i):void 0;o&&(o.disabled=!1,o.focus())}if("prev"===e){const e=t-1,i=this.numerics[e>-1?e:t],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return u.qy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>u.qy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,i){const o=this.numerics[t],r=e||(o?this.getInputElement(o):void 0);r&&(r.value=i,this.values=this.values.map(((e,o)=>o===t?i:e)))}selectInput(e){const t=e.target;if(t){const e=this.getInputElement(t);e?.select()}}handleInput(e,t){const i=e.target,o=this.getInputElement(i);if(o){const i=o.value;if("insertFromPaste"===e.inputType)this.handlePaste(o,i,t);else{f.Z.isNumber(i)&&e.data?(this.updateInput(o,t,e.data),this.focusInputField("next",t)):this.updateInput(o,t,"")}}this.dispatchInputChangeEvent()}handlePaste(e,t,i){const o=t[0];if(o&&f.Z.isNumber(o)){this.updateInput(e,i,o);const r=t.substring(1);if(i+1<this.length&&r.length){const e=this.numerics[i+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,r,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};I.styles=[w.W5,E],x([(0,d.MZ)({type:Number})],I.prototype,"length",void 0),x([(0,d.MZ)({type:String})],I.prototype,"otp",void 0),x([(0,d.wk)()],I.prototype,"values",void 0),I=x([(0,g.E)("wui-otp")],I);i(84875);var O=i(22538);const C=u.AH`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var k=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let R=class extends u.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=O.Q.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=p.I.state.data?.email,this.authConnector=h.a.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=Boolean(this.timeoutTimeLeft),t=this.getFooterLabels(e);return u.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?u.qy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:u.qy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?u.qy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=O.Q.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=O.Q.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(t){this.error=l.w.parseError(t),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";if(!h.a.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),m.P.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){m.P.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(e?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(e?`in ${this.timeoutTimeLeft}s`:"Code")}}};R.styles=C,k([(0,d.wk)()],R.prototype,"loading",void 0),k([(0,d.wk)()],R.prototype,"timeoutTimeLeft",void 0),k([(0,d.wk)()],R.prototype,"error",void 0),R=k([(0,c.EM)("w3m-email-otp-widget")],R);var A=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let T=class extends R{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){if(await this.authConnector.provider.connectOtp({otp:e}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!r.W.state.activeChain)throw new Error("Active chain is not set on ChainControll");await n.x.connectExternal(this.authConnector,r.W.state.activeChain),o.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),a.H.state.siwx||s.W.close()}}catch(t){throw o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};T=A([(0,c.EM)("w3m-email-verify-otp-view")],T);i(60677);const $=u.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var D=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let P=class extends u.WF{constructor(){super(),this.email=p.I.state.data?.email,this.authConnector=h.a.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return u.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),o.E.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),p.I.replace("EmailVerifyOtp",{email:this.email})}catch(e){p.I.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),m.P.showSuccess("Code email resent")}}catch(e){m.P.showError(e)}finally{this.loading=!1}}};P.styles=$,D([(0,d.wk)()],P.prototype,"loading",void 0),P=D([(0,c.EM)("w3m-email-verify-device-view")],P);var S=i(22677);i(92016),i(47438);const _=u.AH`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var j=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let F=class extends u.WF{constructor(){super(...arguments),this.formRef=(0,S._)(),this.initialEmail=p.I.state.data?.email??"",this.redirectView=p.I.state.data?.redirectView,this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){return u.qy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,S.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=h.a.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const i=await t.provider.updateEmail({email:this.email});o.E.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?p.I.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):p.I.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){m.P.showError(t),this.loading=!1}}buttonsTemplate(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?u.qy`
      <wui-flex gap="s">
        <wui-button size="md" variant="neutral" fullWidth @click=${p.I.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:u.qy`
        <wui-button
          size="md"
          variant="main"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};F.styles=_,j([(0,d.wk)()],F.prototype,"email",void 0),j([(0,d.wk)()],F.prototype,"loading",void 0),F=j([(0,c.EM)("w3m-update-email-wallet-view")],F);var L=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let M=class extends R{constructor(){super(),this.email=p.I.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),p.I.replace("UpdateEmailSecondaryOtp",p.I.state.data))}catch(t){throw o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onStartOver=()=>{p.I.replace("UpdateEmailWallet",p.I.state.data)}}};M=L([(0,c.EM)("w3m-update-email-primary-otp-view")],M);var V=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let N=class extends R{constructor(){super(),this.email=p.I.state.data?.newEmail,this.redirectView=p.I.state.data?.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&p.I.reset(this.redirectView))}catch(t){throw o.E.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:l.w.parseError(t)}}),t}},this.onStartOver=()=>{p.I.replace("UpdateEmailWallet",p.I.state.data)}}};N=V([(0,c.EM)("w3m-update-email-secondary-otp-view")],N);var W=i(80883),q=i(32819),U=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let z=class extends u.WF{constructor(){super(),this.authConnector=h.a.getAuthConnector(),this.isEmailEnabled=a.H.state.features?.email,this.isAuthEnabled=this.checkIfAuthEnabled(h.a.state.connectors),this.connectors=h.a.state.connectors,h.a.subscribeKey("connectors",(e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}))}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return u.qy`<wui-flex
      flexDirection="column"
      .padding=${["3xs","m","m","m"]}
      gap="l"
    >
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){const t=e.filter((e=>e.type===q.o.CONNECTOR_TYPE_AUTH)).map((e=>e.chain));return W.o.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((e=>t.includes(e)))}};U([(0,d.wk)()],z.prototype,"connectors",void 0),z=U([(0,c.EM)("w3m-email-login-view")],z)},43901:(e,t,i)=>{var o=i(37022),r=i(56370),n=i(56440),a=(i(7836),i(39446)),s=i(37845);const l=o.AH`
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
`;var c=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return o.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,n.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};u.styles=[a.W5,a.fD,l],c([(0,r.MZ)()],u.prototype,"tabIdx",void 0),c([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.MZ)()],u.prototype,"color",void 0),u=c([(0,s.E)("wui-link")],u)},47438:(e,t,i)=>{var o=i(37022),r=i(56370),n=i(56440),a=(i(7836),i(39446)),s=i(37845);i(52501);const l=o.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var c=function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let u=class extends o.WF{constructor(){super(...arguments),this.disabled=!1}render(){return o.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,n.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?o.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};u.styles=[a.W5,l],c([(0,r.MZ)()],u.prototype,"errorMessage",void 0),c([(0,r.MZ)({type:Boolean})],u.prototype,"disabled",void 0),c([(0,r.MZ)()],u.prototype,"value",void 0),c([(0,r.MZ)()],u.prototype,"tabIdx",void 0),u=c([(0,s.E)("wui-email-input")],u)},60677:(e,t,i)=>{i(90702)},94582:(e,t,i)=>{i(23723)}}]);
//# sourceMappingURL=5465.41b010ad.chunk.js.map