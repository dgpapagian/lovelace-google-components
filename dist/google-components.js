const CARD_VERSION = "1.6.2";
const DEFAULT_ATTRIBUTE = "brightness";
const SETTLE_TIME = 3000;
const HOLD_TIME = 600;
const MIN_SLIDE_TIME = 0;
const TAP_THRESHOLD = 5;
const MIN = 0;
const MAX = 100;
const DEFAULT_CONFIG$4 = {
    type: "custom:google-slider-card",
    attribute: DEFAULT_ATTRIBUTE,
    tap_action: {
        action: "toggle",
        haptic: "light",
    },
    hold_action: {
        action: "more-info",
    },
    hold_time: HOLD_TIME,
    settle_time: SETTLE_TIME,
    min_slide_time: MIN_SLIDE_TIME,
    min: MIN,
    max: MAX,
};
const DEFAULT_BTN_CONFIG = {
    type: "custom:google-button-card",
    attribute: DEFAULT_ATTRIBUTE,
    hold_time: HOLD_TIME,
    settle_time: SETTLE_TIME,
    min_slide_time: MIN_SLIDE_TIME,
    min: MIN,
    max: MAX,
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$2=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$5=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$5.set(s,t));}return t}toString(){return this.cssText}};const r$6=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$4=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$6(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$3,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$5,getOwnPropertySymbols:o$4,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$3(t,s),b={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$5(t),...o$4(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$2=t$2.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$3="?"+h,n$1=`<${o$3}>`,r$4=document,l=()=>r$4.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$4.createTreeWalker(r$4,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$3)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$4.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$4).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$4,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$4.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$2.litHtmlPolyfillSupport;j?.(N,R),(t$2.litHtmlVersions??=[]).push("3.3.1");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;let i$1 = class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T}};i$1._$litElement$=!0,i$1["finalized"]=!0,s.litElementHydrateSupport?.({LitElement:i$1});const o$2=s.litElementPolyfillSupport;o$2?.({LitElement:i$1});(s.litElementVersions??=[]).push("4.2.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$3=(t=o$1,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$3(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$2(r){return n({...r,state:!0,attribute:!1})}

var common$2 = {
	version: "Version",
	invalid_configuration: "Invalid configuration",
	show_warning: "Show Warning",
	no_entity_set: "Entity not set",
	no_entity: "Entity not available",
	on: "On",
	off: "Off",
	offline: "Offline",
	auto: "Auto",
	heat: "Heat",
	cool: "Cool",
	dry: "Dry",
	fan: "Fan",
	playing: "Playing",
	idle: "Cast",
	presence: "Motion",
	off_presence: "No motion"
};
var google_dashboard_card$1 = {
	description: "Configure the navigation path when a card is tapped.",
	cameras: "Cameras path",
	cameras_name: "Cameras",
	lighting: "Lighting path",
	lighting_name: "Lighting",
	lighting_label: "Lights",
	wifi: "Wi-Fi path",
	wifi_name: "Wi-Fi",
	climate: "Climate path",
	climate_name: "Climate",
	device: "Device",
	devices: "Devices",
	placeholder: "./path-or-url",
	"default": "Use default configuration on Tap (Single Tap)",
	tap_type: "Select the type of Tap (Single Tap, Hold Press, Double Tap)",
	single: "Single Tap",
	hold: "Hold Press",
	double: "Double Tap",
	web: "Use Single Tap on Browser (Selected tap on mobile)"
};
var google_climate_card$1 = {
	name: "Entity Name",
	entity: "Entity",
	theme: "Use Material Expressive",
	increase_temp: "Increase Temperature (e.g. 0.5)",
	decrease_temp: "Decrease Temperature (e.g. 0.5)",
	dual_icon: {
		"default": "Use Default Icon",
		options: "Use Dual Icon (On and Off states)."
	},
	fix_temperature: "Enable if temperature is not correct",
	"false": "Not Active",
	"true": "Actve",
	auto: "Auto"
};
var google_button_card$1 = {
	name: "Entity Name",
	control_type: "Control Type",
	type: {
		generic: "Generic (Switch, Button...)",
		thermometer: "Thermometer",
		scene: "Autonomation and scene",
		media: "Multimedia (Google, Alexa...)"
	},
	dual_icon: {
		"default": "Use default icon",
		options: "Use dual icon (Element On and Element Off)."
	},
	dual_text: {
		"default": "Use Default Text",
		text_on: "Text On",
		text_off: "Text Off"
	},
	toggle: {
		title: "Enable automatic actions",
		press: "Action on click",
		hold: "Action on long press",
		click: "Single click (On/Off)",
		info: "Show information"
	}
};
var google_control_card$1 = {
	name: "Card Name",
	entity_card: "Use card as entity",
	entity: "Entity",
	dual_icon: {
		"default": "Use Default Icon",
		options: "Use Dual Icon (On and Off states)."
	},
	actions: {
		press: "Action on click",
		hold: "Action on long press",
		more_info: "More Info",
		toggle: "Toggle",
		navigate: "Navigate",
		url: "URL",
		none: "None",
		google_home: "Open Google Home",
		settings: "Open Settings"
	}
};
var google_slider_card$1 = {
	name: "Card Name",
	entity: "Entity to control",
	icon: "Custom icon (if left empty, changes automatically based on On/Off state)",
	percentage: "Display value as percentage",
	bold_text: "Bold style for the text"
};
var google_lights_card$1 = {
	on_text: "Text for Lights ON",
	off_text: "Text for Lights OFF"
};
var google_media_overlay$1 = {
	media_card: {
		no_content: "Nothing is playing"
	},
	remote: "Open Remote",
	cast: "Cast screen",
	stop_cast: "Stop casting",
	open: "Open ",
	open_google: "Open Google Home"
};
var en = {
	common: common$2,
	google_dashboard_card: google_dashboard_card$1,
	google_climate_card: google_climate_card$1,
	google_button_card: google_button_card$1,
	google_control_card: google_control_card$1,
	google_slider_card: google_slider_card$1,
	google_lights_card: google_lights_card$1,
	google_media_overlay: google_media_overlay$1
};

var en$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common$2,
    default: en,
    google_button_card: google_button_card$1,
    google_climate_card: google_climate_card$1,
    google_control_card: google_control_card$1,
    google_dashboard_card: google_dashboard_card$1,
    google_lights_card: google_lights_card$1,
    google_media_overlay: google_media_overlay$1,
    google_slider_card: google_slider_card$1
});

var common$1 = {
	version: "Versione",
	invalid_configuration: "Configurazione non valida",
	show_warning: "Mostra avviso",
	no_entity_set: "Entità non impostata",
	no_entity: "Entità non disponibile",
	on: "Acceso",
	off: "Spento",
	offline: "Offline",
	auto: "Auto",
	heat: "Riscalda",
	dry: "Deumidificatore",
	cool: "Raffresca",
	fan: "Ventilazione",
	playing: "Riproduzione",
	idle: "Cast",
	presence: "Movimento",
	off_presence: "Nessun movimento"
};
var google_dashboard_card = {
	description: "Configura il percorso di navigazione quando una card viene cliccata.",
	cameras: "Percorso delle telecamere",
	cameras_name: "Telecamere",
	lighting: "Percorso delle luci",
	lighting_name: "Illuminazione",
	lighting_label: "Luci",
	wifi: "Percorso Wi-Fi",
	wifi_name: "Wi-Fi",
	climate: "Percorso del clima",
	climate_name: "Climatizzazione",
	device: "Dispositivo",
	devices: "Dispositivi",
	placeholder: "./percorso-o-url",
	"default": "Usa configurazione di default al Tap(Tap Singolo)",
	tap_type: "Seleziona il tipo di Tap (Tap Singolo, Hold Press, Double Tap)",
	single: "Tap Singolo",
	hold: "Tap a pressione",
	double: "Doppio Tap",
	web: "Usa Tap Singolo sul Browser (Su mobile il tap selezionato)"
};
var google_climate_card = {
	name: "Nome Entità",
	entity: "Entità",
	theme: "Usa Material Expressive",
	increase_temp: "Aumento Temperatura (e.g. 0.5)",
	decrease_temp: "Diminuzione Temperatura (e.g. 0.5)",
	dual_icon: {
		"default": "Usa Icona di default",
		options: "Usa doppia icona (Elemento acceso e spento)."
	},
	fix_temperature: "Abilita se la temperatura non è corretta",
	"false": "Non attivo",
	"true": "Attivo",
	auto: "Automatico"
};
var google_button_card = {
	name: "Nome Entità",
	control_type: "Tipo di controllo",
	type: {
		generic: "Generico (Interruttore, Pulsante...)",
		thermometer: "Termometro",
		scene: "Autonomazioni e scene",
		media: "Multimedia (Google, Alexa...)"
	},
	dual_icon: {
		"default": "Usa Icona di default",
		options: "Usa doppia icona (Elemento acceso e spento)."
	},
	dual_text: {
		"default": "Usa Testo di Default",
		text_on: "Testo On",
		text_off: "Testo Off"
	},
	toggle: {
		title: "Attiva azioni automatiche",
		press: "Azione al clic",
		hold: "Azione alla pressione prolungata",
		click: "Clic singolo (Accensione/Spegnimento)",
		info: "Visualizza informazioni"
	}
};
var google_control_card = {
	name: "Card Name",
	entity_card: "Use card as entity",
	entity: "Entity",
	dual_icon: {
		"default": "Use Default Icon",
		options: "Use Dual Icon (On and Off states)."
	},
	actions: {
		hold: "Azione alla pressione prolungata",
		press: "Azione al clic",
		more_info: "Più informazioni",
		toggle: "Attiva/Disattiva",
		navigate: "Naviga",
		url: "URL",
		none: "Nessuna azione",
		google_home: "Apri Google Home",
		settings: "Apri Impostazioni"
	}
};
var google_slider_card = {
	name: "Nome della Card",
	entity: "Entità da controllare",
	icon: "Icona personalizzata (se vuota, cambia automaticamente in base allo stato On/Off)",
	percentage: "Mostra la percentuale di valore",
	bold_text: "Testo con stile in grassetto"
};
var google_lights_card = {
	on_text: "Testo per Luci Accese",
	off_text: "Testo per Luci Spente"
};
var google_media_overlay = {
	media_card: {
		no_content: "Nessun contenuto in riproduzione"
	},
	remote: "Apri il telecomando",
	cast: "Trasmetti schermo",
	stop_cast: "Interrompi trasmissione",
	open: "Apri",
	open_google: "Apri Google Home"
};
var it = {
	common: common$1,
	google_dashboard_card: google_dashboard_card,
	google_climate_card: google_climate_card,
	google_button_card: google_button_card,
	google_control_card: google_control_card,
	google_slider_card: google_slider_card,
	google_lights_card: google_lights_card,
	google_media_overlay: google_media_overlay
};

var it$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    common: common$1,
    default: it,
    google_button_card: google_button_card,
    google_climate_card: google_climate_card,
    google_control_card: google_control_card,
    google_dashboard_card: google_dashboard_card,
    google_lights_card: google_lights_card,
    google_media_overlay: google_media_overlay,
    google_slider_card: google_slider_card
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages = {
    en: en$1,
    it: it$1,
};
function localize(string, search = "", replace = "") {
    const lang = (localStorage.getItem("selectedLanguage") || "en")
        .replace(/['"]+/g, "")
        .replace("-", "_");
    let translated;
    try {
        translated = string.split(".").reduce((o, i) => o[i], languages[lang]);
    }
    catch (e) {
        translated = string.split(".").reduce((o, i) => o[i], languages["en"]);
    }
    if (translated === undefined)
        translated = string.split(".").reduce((o, i) => o[i], languages["en"]);
    if (search !== "" && replace !== "") {
        translated = translated.replace(search, replace);
    }
    return translated;
}

var t,r$1;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none";}(t||(t={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24";}(r$1||(r$1={}));var ne=function(e,t,r,n){n=n||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=r,e.dispatchEvent(i),i};

function applyRippleEffect(el, event) {
    if (!el)
        return;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    // Posizione relativa al click
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    // Stili base
    Object.assign(ripple.style, {
        position: "absolute",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.3)",
        transform: "scale(0)",
        animation: "ripple-animation 600ms ease-out",
        pointerEvents: "none",
        zIndex: "1",
    });
    // Assicurati che il contenitore abbia overflow hidden e posizione relativa
    const computedStyle = getComputedStyle(el);
    if (computedStyle.position === "static") {
        el.style.position = "relative";
    }
    if (computedStyle.overflow !== "hidden") {
        el.style.overflow = "hidden";
    }
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
}

var ControlType;
(function (ControlType) {
    ControlType["GENERIC"] = "generic";
    ControlType["THERMOMETER"] = "thermometer";
    ControlType["SCENE"] = "scene";
    ControlType["MEDIA_PLAYER"] = "media_player";
})(ControlType || (ControlType = {}));
var DomainType;
(function (DomainType) {
    DomainType["BINARY_SENSOR"] = "binary_sensor";
    DomainType["SENSOR"] = "sensor";
    DomainType["SWITCH"] = "switch";
})(DomainType || (DomainType = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType["MOTION"] = "motion";
    DeviceType["DOOR"] = "door";
    DeviceType["CONNECTIVITY"] = "connectivity";
    DeviceType["MEASUREMENT"] = "measurement";
    DeviceType["BATTERY"] = "battery";
})(DeviceType || (DeviceType = {}));
function isDeviceType(value) {
    return Object.values(DeviceType).includes(value);
}
function getValidDeviceClass(attributes) {
    const deviceClass = attributes.device_class;
    const stateClass = attributes.state_class;
    if (typeof deviceClass === "string" && isDeviceType(deviceClass)) {
        return deviceClass;
    }
    if (typeof stateClass === "string" && isDeviceType(stateClass)) {
        return stateClass;
    }
    return undefined;
}

var OnStates;
(function (OnStates) {
    // Lights
    OnStates["ON"] = "on";
    // Climate
    OnStates["AUTO"] = "auto";
    OnStates["HEAT"] = "heat";
    OnStates["COOL"] = "cool";
    OnStates["HEAT_COOL"] = "heat_cool";
    OnStates["FAN_ONLY"] = "fan_only";
    OnStates["FAN"] = "fan";
    OnStates["DRY"] = "dry";
    OnStates["ECO"] = "eco";
    // Media Player
    OnStates["IDLE"] = "idle";
    OnStates["PLAYING"] = "playing";
    OnStates["PAUSED"] = "paused";
})(OnStates || (OnStates = {}));
var OffStates;
(function (OffStates) {
    OffStates["OFF"] = "off";
})(OffStates || (OffStates = {}));
const OnlineStates = Object.assign(Object.assign({}, OnStates), OffStates);
function isDeviceOn(state) {
    const stateNum = Number.parseInt(state);
    if (!isNaN(stateNum) && stateNum !== 0) {
        // Se è un numero diverso da 0, non è offline
        return false;
    }
    return Object.values(OnStates).includes(state);
}
function isDeviceOnline(state) {
    return (Object.values(OnStates).includes(state) ||
        Object.values(OffStates).includes(state));
}
function isOfflineState(state, control_type = "") {
    const stateNum = Number.parseInt(state);
    if (!isNaN(stateNum) && stateNum !== 0) {
        // Se è un numero diverso da 0, non è offline
        return false;
    }
    if (control_type == "scene" && state == "unknown") {
        return false;
    }
    return !isDeviceOnline(state);
}
var Action;
(function (Action) {
    Action["CLICK"] = "toggle";
    Action["HOLD"] = "info";
})(Action || (Action = {}));
function getOrDefault(value, defValue) {
    return value !== undefined && value !== null ? value : defValue;
}

const google_color = {
    dark: {
        offline: {
            // (Updated on 04/08/2025)
            climate: {
                title: "var(--md-sys-color-outline, #717173)",
                icon: "var(--md-sys-color-outline, #717173)",
                background: "var(--md-sys-color-surface-container-highest, #2c2c2e)",
            },
            // (Updated on 04/08/2025)
            button: {
                title: "var(--md-sys-color-outline, #717173)",
                icon: "var(--md-sys-color-outline, #717173)",
                percentage: "var(--md-sys-color-outline, #717173)",
                background: "var(--md-sys-color-surface-container-highest, #2c2c2e)",
            },
            // (Updated on 04/08/2025)
            light: {
                title: "var(--md-sys-color-outline, #717173)",
                icon: "var(--md-sys-color-outline, #717173)",
                percentage: "var(--md-sys-color-outline, #717173)",
                slider: "var(--md-sys-color-surface-container-highest, #2c2c2e)",
                background: "var(--md-sys-color-surface-container-highest, #2c2c2e)",
            },
        },
        on: {
            climate: {
                // (Updated on 04/08/2025)
                material: {
                    title: "#fedcca",
                    subtitle: "#e6c0b2",
                    icon: "#fedcca",
                    button: "#4b332b",
                    background: "rgba(92, 64, 53, 0.85)",
                },
                material_dry: {
                    title: "#cbe5fe",
                    subtitle: "#b3d7f0",
                    icon: "#cbe5fe",
                    button: "#143546",
                    background: "rgba(26, 61, 82, 0.85)",
                },
                // (Updated on 04/08/2025)
                default: {
                    title: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
                    subtitle: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
                    icon: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
                    button: "var(--md-sys-color-surface-variant, #5c5b60)",
                    background: "var(--md-sys-color-surface-container, rgba(65, 66, 70, 0.83))",
                },
            },
            // (Updated on 04/08/2025)
            button: {
                title: "var(--md-sys-color-on-secondary-container, #d8e3f7)",
                icon: "var(--md-sys-color-on-secondary-container, #d8e3f7)",
                percentage: "var(--md-sys-color-on-secondary-container, #d8e3f7)",
                background: "var(--md-sys-color-secondary-container, #3e4758)",
            },
            // (Updated on 04/08/2025)
            light: {
                title: "#ffe083",
                icon: "#ffe083",
                percentage: "#ffe083",
                slider: "#50472a",
                background: "#333029",
            },
        },
        off: {
            climate: {
                // (Updated on 04/08/2025)
                default: {
                    title: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
                    subtitle: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
                    icon: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
                    button: "var(--md-sys-color-surface-variant, #5c5b60)",
                    background: "var(--md-sys-color-surface-container, #414246)",
                },
            },
            // (Updated on 04/08/2025)
            button: {
                title: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
                icon: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
                percentage: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
                background: "var(--md-sys-color-surface-container, #292a2e)",
            },
            // (Updated on 04/08/2025)
            light: {
                title: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
                icon: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
                percentage: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
                slider: "var(--md-sys-color-surface-container, #292a2e)",
                background: "var(--md-sys-color-surface-container, #292a2e)",
            },
        },
    },
    light: {
        offline: {
            // (Updated on 04/08/2025)
            climate: {
                title: "var(--md-sys-color-outline, #949496)",
                icon: "var(--md-sys-color-outline, #949496)",
                background: "var(--md-sys-color-surface-container-highest, rgba(223, 223, 225, 0.85))",
            },
            // (Updated on 04/08/2025)
            button: {
                title: "var(--md-sys-color-outline, #949496)",
                icon: "var(--md-sys-color-outline, #949496)",
                percentage: "var(--md-sys-color-outline, #949496)",
                background: "var(--md-sys-color-surface-container-highest, #dfdfe1)",
            },
            // (Updated on 04/08/2025)
            light: {
                title: "var(--md-sys-color-outline, #959597)",
                icon: "var(--md-sys-color-outline, #959597)",
                percentage: "var(--md-sys-color-outline, #959597)",
                slider: "var(--md-sys-color-surface-container-highest, #dfdfe1)",
                background: "var(--md-sys-color-surface-container-highest, #dfdfe1)",
            },
        },
        on: {
            climate: {
                // (Updated on 04/08/2025)
                material: {
                    title: "#812800",
                    subtitle: "#812800",
                    icon: "#812800",
                    button: "rgba(245, 180, 150, 0.6)",
                    background: "rgba(258, 193.8, 166, 0.3)",
                },
                material_dry: {
                    title: "#006b9c",
                    subtitle: "#006b9c",
                    icon: "#006b9c",
                    button: "#cbe5fe",
                    background: "#e8f1ff",
                },
                // (Updated on 04/08/2025)
                default: {
                    title: "var(--md-sys-color-on-surface-variant, #525252)",
                    subtitle: "var(--md-sys-color-on-surface-variant, #525252)",
                    icon: "var(--md-sys-color-on-surface-variant, #525252)",
                    button: "var(--md-sys-color-surface-variant, #c1c1c3)",
                    background: "var(--md-sys-color-surface-container, rgba(221, 221, 223, 0.83))",
                },
            },
            // (Updated on 04/08/2025)
            button: {
                title: "var(--md-sys-color-on-secondary-container, #131c2b)",
                icon: "var(--md-sys-color-on-secondary-container, #131c2b)",
                percentage: "var(--md-sys-color-on-secondary-container, #131c2b)",
                background: "var(--md-sys-color-secondary-container, #d8e3f7)",
            },
            // (Updated on 04/08/2025)
            light: {
                title: "#745b00",
                icon: "#745b00",
                percentage: "#745b00",
                slider: "#ffe083",
                background: "#feefc8",
            },
        },
        off: {
            climate: {
                // (Updated on 04/08/2025)
                default: {
                    title: "var(--md-sys-color-on-surface-variant, #525252)",
                    subtitle: "var(--md-sys-color-on-surface-variant, #525252)",
                    icon: "var(--md-sys-color-on-surface-variant, #525252)",
                    button: "var(--md-sys-color-surface-variant, #c1c1c3)",
                    background: "var(--md-sys-color-surface-container, #dddddf)",
                },
            },
            // (Updated on 04/08/2025)
            button: {
                title: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
                icon: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
                percentage: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
                background: "var(--md-sys-color-surface-container, #e8e8ea)",
            },
            // (Updated on 04/08/2025)
            light: {
                title: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
                icon: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
                percentage: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
                slider: "var(--md-sys-color-surface-container, #e8e8ea)",
                background: "var(--md-sys-color-surface-container, #e8e8ea)",
            },
        },
    },
};

function adjustTempAuto(fix_temperature, temperature) {
    if (fix_temperature == "true") {
        return temperature * 5;
    }
    else if (fix_temperature == "auto") {
        if (temperature < 7) {
            return temperature * 5;
        }
    }
    return temperature;
}
function adjustNewTempAuto(fix_temperature, temperature) {
    if (fix_temperature == "true") {
        return temperature / 5;
    }
    else if (fix_temperature == "auto") {
        if (temperature < 7) {
            return temperature / 5;
        }
    }
    return temperature;
}
function isAirConditioning(states) {
    return (states &&
        !states.includes(OnStates.HEAT) &&
        !states.includes(OnStates.HEAT_COOL));
}

var GoogleDevice;
(function (GoogleDevice) {
    GoogleDevice["NEST_MINI"] = "Google Nest Mini";
    GoogleDevice["GOOGLE_HOME"] = "Google Home";
    GoogleDevice["NEST_HUB"] = "Google Nest Hub";
    GoogleDevice["GOOGLE_TV_STREAMER"] = "Google TV Streamer";
    GoogleDevice["GOOGLE_CAST_GROUP"] = "Google Cast Group";
})(GoogleDevice || (GoogleDevice = {}));

function getIcon(stateObj, config, hass) {
    var _a, _b, _c;
    const domain = stateObj.entity_id.split(".")[0];
    const state = stateObj.state;
    const controlType = (_a = config.control_type) !== null && _a !== void 0 ? _a : "generic";
    const useDefault = (_b = config.use_default_icon) !== null && _b !== void 0 ? _b : true;
    const idDeviceTurnOn = isDeviceOn(state);
    if (!useDefault) {
        // Se non si usa l'icona di default, si segue la configurazione personalizzata
        if (config.dual_icon) {
            if (idDeviceTurnOn) {
                return config.icon_on || `mdi:${domain}`;
            }
            else {
                return config.icon_off || `mdi:${domain}`;
            }
        }
        else {
            return config.icon || `mdi:${domain}`;
        }
    }
    // Se use_default_icon è true, prosegui con la logica predefinita
    switch (controlType) {
        case ControlType.THERMOMETER: {
            switch (state) {
                case "auto":
                case "heat_cool":
                    return "mdi:thermostat-auto";
                case "heat":
                    return "mdi:fire";
                case "dry":
                    return "m3of:cool-to-dry";
                case "fan_only":
                    return "m3of:mode-fan";
                case "cool":
                    return "mdi:snowflake";
                case "off":
                case "unavailable":
                    return "m3s:thermometer";
                //return "mdi:thermometer-off";
                default:
                    return "m3of:thermometer";
                //return "mdi:thermometer";
            }
        }
        case ControlType.SCENE:
            return "mdi:creation-outline";
        case ControlType.MEDIA_PLAYER:
            const device_id = hass.entities[config.entity].device_id;
            const google_device = hass.devices[device_id].model || null;
            if (google_device) {
                switch (google_device) {
                    case GoogleDevice.NEST_MINI:
                        return idDeviceTurnOn
                            ? //return state == OnStates.IDLE || state == OnStates.PLAYING
                                "m3of:nest-mini"
                            : "m3o:nest-mini";
                    case GoogleDevice.GOOGLE_HOME:
                        return idDeviceTurnOn
                            ? //return state == OnStates.IDLE || state == OnStates.PLAYING
                                "m3of:home-speaker"
                            : "m3o:home-speaker";
                    case GoogleDevice.NEST_HUB:
                        return idDeviceTurnOn
                            ? //return state == OnStates.IDLE || state == OnStates.PLAYING
                                "m3of:nest-display"
                            : "m3o:nest-display";
                    case GoogleDevice.GOOGLE_CAST_GROUP:
                        return idDeviceTurnOn
                            ? //return state == OnStates.IDLE || state == OnStates.PLAYING
                                "m3rf:speaker-group"
                            : "m3r:speaker-group";
                    default:
                        return idDeviceTurnOn ? "m3rf:tv-gen" : "m3r:tv-gen";
                }
            }
            break;
        case ControlType.GENERIC: {
            const deviceOnline = !isOfflineState(state, controlType);
            if (domain == DomainType.BINARY_SENSOR || domain == DomainType.SENSOR) {
                const device_class = getValidDeviceClass(stateObj.attributes);
                switch (device_class) {
                    case DeviceType.CONNECTIVITY:
                        if (idDeviceTurnOn)
                            return "m3of:nest-wifi-router";
                        else
                            return "m3o:nest-wifi-router";
                    case DeviceType.MOTION:
                        if (idDeviceTurnOn)
                            return "m3rf:sensors-krx";
                        else
                            return "m3r:sensors-krx";
                    case DeviceType.BATTERY:
                        if (deviceOnline) {
                            const batteryLevel = Number.parseInt(state);
                            if (batteryLevel >= 90 && batteryLevel <= 100)
                                return "m3of:battery-android-full";
                            if (batteryLevel >= 70 && batteryLevel < 90)
                                return "m3of:battery-android-5";
                            if (batteryLevel >= 50 && batteryLevel < 70)
                                return "m3of:battery-android-4";
                            if (batteryLevel >= 30 && batteryLevel < 50)
                                return "m3of:battery-android-3";
                            if (batteryLevel >= 10 && batteryLevel < 30)
                                return "m3of:battery-android-2";
                            if (batteryLevel >= 5 && batteryLevel < 10)
                                return "m3of:battery-android-1";
                            if (batteryLevel < 5)
                                return "m3of:battery-android-0";
                            return "m3of:battery-android-5";
                        }
                        else
                            return "m3r:battery-android-alert";
                    case DeviceType.MEASUREMENT:
                        return "mdi:scale-bathroom";
                    case DeviceType.DOOR:
                        if (idDeviceTurnOn)
                            return "m3rf:sensor-door";
                        else
                            return "m3r:sensor-door";
                }
            }
            if (domain == DomainType.SWITCH) {
                if (idDeviceTurnOn)
                    return "m3rf:switch";
                else
                    return "m3r:switch";
            }
        }
    }
    if ((_c = stateObj.attributes.icon) === null || _c === void 0 ? void 0 : _c.trim()) {
        return stateObj.attributes.icon;
    }
    const entity = hass.entities[config.entity];
    if (entity && entity.icon)
        return entity.icon;
    return `mdi:${domain}`;
}
function mapStateDisplay(stateObj, control_type, isOffline, fix_temperature = "false", is_presence_sensor = false) {
    let text = "";
    if (control_type === ControlType.THERMOMETER && !isOffline)
        //text = stateObj.attributes.current_temperature
        //  ? " • " +
        //    (fix_temperature
        //      ? stateObj.attributes.current_temperature * 5
        //      : stateObj.attributes.current_temperature) +
        //    "°"
        //  : "";
        text = stateObj.attributes.current_temperature
            ? " • " +
                adjustTempAuto(fix_temperature, stateObj.attributes.current_temperature) +
                "°"
            : "";
    if (control_type === ControlType.MEDIA_PLAYER && !isOffline) {
        if (!isDeviceOn(stateObj.state))
            return "";
        const app_name = getOrDefault(stateObj.attributes.app_name, "");
        //const title = getOrDefault(stateObj.attributes.media_title, "");
        // text = app_name ? " • " + app_name : "" + title ? " • " + title : "";
        text = app_name ? " • " + app_name : "";
    }
    if (control_type === ControlType.GENERIC && !isOffline) {
        const device_class = getValidDeviceClass(stateObj.attributes);
        if (device_class == DeviceType.BATTERY) {
            const batteryLevel = stateObj.state;
            return batteryLevel + "%";
        }
        // TODO: Testo Sensore porta
        //if (device_class == DeviceType.DOOR) {
        //  const batteryLevel = stateObj.state;
        //  return batteryLevel + "%";
        //}
    }
    return getStateDisplay(stateObj.state, text, is_presence_sensor);
}
function getStateDisplay(state, text = "", is_presence_sensor = false) {
    if (!isDeviceOnline(state)) {
        return localize("common.offline");
    }
    const stateMap = {
        [OnlineStates.ON]: is_presence_sensor
            ? localize("common.presence")
            : localize("common.on"),
        [OnlineStates.OFF]: is_presence_sensor
            ? localize("common.off_presence")
            : localize("common.off"),
        [OnlineStates.AUTO]: localize("common.auto"),
        [OnlineStates.HEAT]: localize("common.heat"),
        [OnlineStates.COOL]: localize("common.cool"),
        [OnlineStates.DRY]: localize("common.dry"),
        [OnlineStates.FAN]: localize("common.fan"),
        [OnlineStates.FAN_ONLY]: localize("common.fan"),
        [OnlineStates.HEAT_COOL]: localize("common.auto"),
        [OnlineStates.IDLE]: localize("common.idle"),
        [OnlineStates.PAUSED]: localize("common.idle"),
        [OnlineStates.PLAYING]: localize("common.playing"),
    };
    const finalState = stateMap[state] || state;
    return text != "" ? finalState + text : finalState;
}
function getName(config, hass) {
    if (config.name)
        return config.name;
    const stateObj = hass.states[config.entity];
    if (stateObj && stateObj.attributes.friendly_name)
        return stateObj.attributes.friendly_name;
    if (hass && hass.entities && hass.entities[config.entity]) {
        const device_id = hass.entities[config.entity].device_id;
        const device = hass.devices[device_id];
        return device.name;
    }
}

let GoogleButtonCard = class GoogleButtonCard extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_BTN_CONFIG;
        this.color = google_color;
        this._moved = false;
    }
    setConfig(config) {
        if (!config || !config.entity) {
            throw new Error(localize("common.invalid_configuration"));
        }
        this._config = config;
    }
    static getStubConfig(_hass, entities) {
        const switcher = entities
            .filter((entity) => entity.split(".")[0] === "switch")
            .sort();
        const randomSwitch = switcher[Math.floor(Math.random() * switcher.length)];
        return {
            type: "custom:google-button-card",
            entity: randomSwitch,
            icon: "mdi:switch",
            height: 97,
        };
    }
    static getCardSize() {
        return 1;
    }
    static async getConfigElement() {
        return document.createElement("google-button-card-editor");
    }
    updated() {
        requestAnimationFrame(() => {
            const wrapper = this.renderRoot.querySelector(".state-wrapper");
            const text = this.renderRoot.querySelector(".state");
            if (wrapper && text) {
                const needsScroll = text.scrollWidth > wrapper.clientWidth;
                if (needsScroll) {
                    text.classList.add("scroll");
                }
                else {
                    text.classList.remove("scroll");
                }
            }
        });
    }
    _onClick(event) {
        applyRippleEffect(event.currentTarget, event);
        this._toggle();
    }
    _toggle() {
        var _a, _b;
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
        if (!this._config || !this.hass)
            return;
        const entityId = this._config.entity;
        if (!entityId)
            return;
        const domain = entityId.split(".")[0];
        const controlType = (_a = this._config.control_type) !== null && _a !== void 0 ? _a : "generic";
        const toggleDomains = [
            "light",
            "switch",
            "fan",
            "climate",
            "input_boolean",
            "cover",
            "script",
        ];
        const isDefaultToggle = (_b = this._config.use_default_toggle) !== null && _b !== void 0 ? _b : true;
        if (isDefaultToggle) {
            const isToggleable = toggleDomains.includes(domain) &&
                controlType != ControlType.THERMOMETER &&
                controlType != ControlType.MEDIA_PLAYER;
            if (isToggleable) {
                return this.hass.callService("homeassistant", "toggle", {
                    entity_id: entityId,
                });
            }
            else {
                if (domain === "media_player" ||
                    controlType == ControlType.MEDIA_PLAYER) {
                    this._openMediaOverlay();
                    return;
                }
                return ne(this, "hass-more-info", { entityId });
            }
        }
        const actionOnTap = this._config.tap_action;
        if (actionOnTap === Action.CLICK) {
            return this.hass.callService("homeassistant", "toggle", {
                entity_id: entityId,
            });
        }
        if (domain === "media_player" || controlType == ControlType.MEDIA_PLAYER) {
            this._openMediaOverlay();
            return;
        }
        return ne(this, "hass-more-info", { entityId });
    }
    _startPress(event) {
        this._cancelPress(); // elimina timer precedente se presente
        this._moved = false;
        if (event instanceof TouchEvent && event.touches.length > 0) {
            this._startX = event.touches[0].clientX;
            this._startY = event.touches[0].clientY;
        }
        else if (event instanceof MouseEvent) {
            this._startX = event.clientX;
            this._startY = event.clientY;
        }
        this._pressTimer = window.setTimeout(() => {
            this._pressTimer = undefined;
            if (!this._moved) {
                this._handleHold();
            }
        }, 500);
    }
    _handleMove(event) {
        if (!this._startX || !this._startY || event.touches.length === 0)
            return;
        const moveX = event.touches[0].clientX;
        const moveY = event.touches[0].clientY;
        const deltaX = Math.abs(moveX - this._startX);
        const deltaY = Math.abs(moveY - this._startY);
        if (deltaX > 10 || deltaY > 10) {
            this._moved = true;
            this._cancelPress(); // annulla il timer
        }
    }
    _cancelPress(event) {
        if (this._pressTimer) {
            clearTimeout(this._pressTimer);
            this._pressTimer = undefined;
            if (!this._moved && event instanceof MouseEvent) {
                this._onClick(event); // solo click "buoni"
            }
        }
    }
    _handleHold() {
        var _a, _b, _c;
        // Feedback tattile (se supportato)
        (_a = navigator.vibrate) === null || _a === void 0 ? void 0 : _a.call(navigator, 50);
        // Se la configurazione o Home Assistant non sono disponibili, esci
        if (!this._config || !this.hass)
            return;
        const entityId = this._config.entity;
        const controlType = (_b = this._config.control_type) !== null && _b !== void 0 ? _b : "generic";
        const useDefaultToggle = (_c = this._config.use_default_toggle) !== null && _c !== void 0 ? _c : true;
        // Se non è definito un entityId, esci
        if (!entityId)
            return;
        const domain = entityId.split(".")[0];
        const toggleDomains = [
            "light",
            "switch",
            "fan",
            "climate",
            "input_boolean",
            "cover",
            "script",
        ];
        const toggleEntity = toggleDomains.includes(domain);
        const isMediaPlayer = controlType === ControlType.MEDIA_PLAYER;
        if (useDefaultToggle) {
            // Se il dominio supporta il toggle o non è un media_player, mostra le info
            if (toggleEntity || !isMediaPlayer) {
                ne(this, "hass-more-info", { entityId });
            }
            else {
                // Altrimenti esegui toggle
                this.hass.callService("homeassistant", "toggle", {
                    entity_id: entityId,
                });
            }
        }
        else {
            // Se non usa il comportamento automatico, usa quello definito in hold_action
            const actionOnHold = this._config.hold_action;
            if (actionOnHold === Action.CLICK) {
                this.hass.callService("homeassistant", "toggle", {
                    entity_id: entityId,
                });
            }
            else {
                ne(this, "hass-more-info", { entityId });
            }
        }
    }
    _openMediaOverlay() {
        const overlay = document.createElement("google-media-overlay");
        overlay.hass = this.hass;
        overlay.entity = this._config.entity;
        // Riferimento reattivo
        const updateHass = () => {
            if (!overlay) {
                // Non è possibile aggiornare un elemento che non esiste
                return;
            }
            overlay.hass = this.hass;
            overlay.requestUpdate();
        };
        // ogni volta che il componente padre si aggiorna, chiama updateHass
        const observer = new MutationObserver(updateHass);
        observer.observe(this, {
            attributes: true,
            childList: false,
            subtree: false,
        });
        overlay.addEventListener("close-overlay", () => {
            observer.disconnect();
            overlay.remove();
        });
        overlay.style.position = "fixed";
        overlay.style.inset = "0";
        overlay.style.zIndex = "9999";
        document.body.appendChild(overlay);
    }
    //private _openMediaOverlay() {
    //  const overlay = document.createElement(
    //    "google-media-overlay"
    //  ) as GoogleMediaOverlay;
    //  overlay.hass = this.hass;
    //  overlay.entity = this._config.entity!;
    //  overlay.style.position = "fixed";
    //  overlay.style.inset = "0";
    //  overlay.style.zIndex = "9999";
    //
    //  overlay.addEventListener("close-overlay", () => {
    //    overlay.remove();
    //  });
    //
    //  document.body.appendChild(overlay);
    //}
    render() {
        var _a, _b, _c;
        if (!this._config || !this.hass)
            return x ``;
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return x `<ha-card
        ><div class="warning">${localize("common.no_entity")}</div></ha-card
      >`;
        }
        const isOn = isDeviceOn(stateObj.state);
        //const domain = this._config.entity!.split(".")[0];
        const name = getName(this._config, this.hass);
        const icon = getIcon(stateObj, this._config, this.hass);
        //let icon = "";
        //if (this._config.icon && this._config.icon.trim() !== "") {
        //  icon = this._config.icon;
        //} else if (
        //  stateObj.attributes.icon &&
        //  stateObj.attributes.icon.trim() !== ""
        //) {
        //  icon = stateObj.attributes.icon;
        //} else {
        //  icon = `mdi:${domain}`;
        //}
        const isOffline = isOfflineState(stateObj.state, this._config.control_type);
        const device_class = getValidDeviceClass(stateObj.attributes);
        let stateDisplay;
        const default_text = (_a = this._config.use_default_text) !== null && _a !== void 0 ? _a : true;
        if (default_text) {
            stateDisplay = mapStateDisplay(stateObj, this._config.control_type, isOffline, this._config.fix_temperature, device_class == DeviceType.MOTION);
        }
        else {
            if (isOn)
                stateDisplay = this._config.text_on;
            else
                stateDisplay = this._config.text_off;
            if (isOfflineState(stateObj.state)) {
                stateDisplay = localize("common.offline");
            }
        }
        const theme = ((_c = (_b = this.hass) === null || _b === void 0 ? void 0 : _b.themes) === null || _c === void 0 ? void 0 : _c.darkMode) ? "dark" : "light";
        const isConditioner = isAirConditioning(stateObj.attributes.hvac_modes);
        this.setColorCard(this._config.control_type, theme, isOffline, isOn, isConditioner);
        return x `
      <ha-card
        class="google-button ${isOn ? "on" : "off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
        style="${isOffline ||
            this._config.control_type == ControlType.THERMOMETER ||
            this._config.control_type == ControlType.MEDIA_PLAYER
            ? "padding: 12px 35px 12px 12px"
            : "padding: 12px 12px"}"
      >
        <div class="content">
          <ha-icon .icon=${icon} class="icon"></ha-icon>
          <div class="text">
            <div class="name ellipsis">${name}</div>
            ${device_class == DeviceType.MEASUREMENT ||
            (this._config.control_type == ControlType.SCENE && default_text) ||
            (this._config.control_type == ControlType.MEDIA_PLAYER && !isOn)
            ? x ``
            : x `<div class="state-wrapper">
                  <div class="state">${stateDisplay}</div>
                </div>`}
          </div>
        </div>
        ${isOffline
            ? x `<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`
            : this._config.control_type == ControlType.THERMOMETER ||
                this._config.control_type == ControlType.MEDIA_PLAYER
                ? x `<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 5%;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon>`
                : x ``}
      </ha-card>
    `;
    }
    setColorCard(control_type, theme, isOffline, isOn, isConditioner) {
        let nameColor = "";
        let iconColor = "";
        let percentageColor = "";
        let containerColor = "";
        if (isOffline) {
            // Offline, tema light
            if (theme === "light") {
                nameColor = this.color.light.offline.button.title;
                iconColor = this.color.light.offline.button.icon;
                percentageColor = this.color.light.offline.button.percentage;
                containerColor = this.color.light.offline.button.background;
            }
            else {
                // Offline, tema dark
                nameColor = this.color.dark.offline.button.title;
                iconColor = this.color.dark.offline.button.icon;
                percentageColor = this.color.dark.offline.button.percentage;
                containerColor = this.color.dark.offline.button.background;
            }
        }
        else if (isOn) {
            // Acceso, tema dark
            if (theme === "dark") {
                if (control_type === "thermometer" && this._config.use_material_color) {
                    if (isConditioner) {
                        nameColor = this.color.dark.on.climate.material_dry.title;
                        iconColor = this.color.dark.on.climate.material_dry.icon;
                        percentageColor = this.color.dark.on.climate.material_dry.subtitle;
                        containerColor = this.color.dark.on.climate.material_dry.background;
                    }
                    else {
                        nameColor = this.color.dark.on.climate.material.title;
                        iconColor = this.color.dark.on.climate.material.icon;
                        percentageColor = this.color.dark.on.climate.material.subtitle;
                        containerColor = this.color.dark.on.climate.material.background;
                    }
                }
                else {
                    nameColor = this.color.dark.on.button.title;
                    iconColor = this.color.dark.on.button.icon;
                    percentageColor = this.color.dark.on.button.percentage;
                    containerColor = this.color.dark.on.button.background;
                }
            }
            else {
                // Acceso, tema light
                if (control_type === "thermometer" && this._config.use_material_color) {
                    if (isConditioner) {
                        nameColor = this.color.light.on.climate.material_dry.title;
                        iconColor = this.color.light.on.climate.material_dry.icon;
                        percentageColor = this.color.light.on.climate.material_dry.subtitle;
                        containerColor =
                            this.color.light.on.climate.material_dry.background;
                    }
                    else {
                        nameColor = this.color.light.on.climate.material.title;
                        iconColor = this.color.light.on.climate.material.icon;
                        percentageColor = this.color.light.on.climate.material.subtitle;
                        containerColor = this.color.light.on.climate.material.background;
                    }
                }
                else {
                    nameColor = this.color.light.on.button.title;
                    iconColor = this.color.light.on.button.icon;
                    percentageColor = this.color.light.on.button.percentage;
                    containerColor = this.color.light.on.button.background;
                }
            }
        }
        else {
            // Spento, tema dark
            if (theme === "dark") {
                nameColor = this.color.dark.off.button.title;
                iconColor = this.color.dark.off.button.icon;
                percentageColor = this.color.dark.off.button.percentage;
                containerColor = this.color.dark.off.button.background;
            }
            else {
                // Spento, tema light
                nameColor = this.color.light.off.button.title;
                iconColor = this.color.light.off.button.icon;
                percentageColor = this.color.light.off.button.percentage;
                containerColor = this.color.light.off.button.background;
            }
        }
        this._setStyleProperty("--bsc-name-color", nameColor);
        this._setStyleProperty("--bsc-icon-color", iconColor);
        this._setStyleProperty("--bsc-percentage-color", percentageColor);
        this._setStyleProperty("--bsc-background", containerColor);
        this._setStyleProperty("--bsc-height", this._config.height || 97, (h) => `${h}px`);
        this._setStyleProperty("--bsc-border-radius", this._config.border_radius);
    }
    _setStyleProperty(name, value, transform = (value) => value) {
        if (value !== undefined && value !== null && value !== "") {
            this.style.setProperty(name, transform(value));
        }
    }
};
GoogleButtonCard.styles = i$4 `
    :host {
      --bsc-height: var(--ha-card-height, 97px);
      --bsc-border-radius: var(--ha-card-border-radius);
    }

    ha-card.google-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 12px;
      border-radius: var(--bsc-border-radius, 28px);
      background: var(--bsc-background);
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      height: var(--bsc-height);
      overflow: hidden; /* fondamentale per contenere il ripple */
      box-shadow:
        0px 0.5px 1px rgba(0, 0, 0, 0.05),
        0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      -webkit-tap-highlight-color: transparent;
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .icon {
      width: 34px;
      height: 34px;
      color: var(--bsc-icon-color);
      align-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
    }

    .name {
      color: var(--bsc-name-color);
      font-size: 15px;
      font-weight: 550;
      line-height: 1.35;
    }

    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .state {
      font-size: 13px;
      color: var(--bsc-percentage-color);
      font-weight: 500;
    }

    .state-wrapper {
      overflow: hidden;
      position: relative;
      max-width: 100%; /* Cambia da 170px */
    }

    .state {
      display: inline-block;
      white-space: nowrap;
    }

    .state.scroll {
      animation: scroll-text 8s linear infinite;
    }

    @keyframes scroll-text {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .warning {
      padding: 16px;
      color: red;
      font-weight: bold;
    }

    @media (max-width: 420px) {
      /*.name,
      .state {
        font-size: small;
      }
      .name {
        line-height: 1.4;
      }*/
      #icon_offline {
        right: 15px;
      }
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleButtonCard.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleButtonCard.prototype, "_config", void 0);
GoogleButtonCard = __decorate([
    t$1("google-button-card")
], GoogleButtonCard);

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

const DEFAULT_CONFIG$3 = {
    type: "custom:google-dashboard-card",
};
const otherAction = (action) => {
    switch (action) {
        case "tap_action":
            return "hold_action";
        case "hold_action":
            return "tap_action";
        case "double_tap_action":
            return "tap_action";
    }
};
function googleDashboadTemplate(camera_path, lighting_path, wifi_path, climate_path, action) {
    return `type: custom:swipe-card
card_width: max-content
parameters:
  grabCursor: true
  centeredSlides: false
  slidesPerView: auto
  spaceBetween: 8
  preventClicksPropagation: true
  preventClicks: true
  threshold: 30
cards:
  - type: custom:button-card
    icon: m3r:videocam
    name: ${localize("google_dashboard_card.cameras_name")}
    triggers_update: all
    label: |
      [[[
          const devices = Object.keys(hass.states).filter((e) =>
          e.startsWith("camera.") &&
          hass.entities[e] &&
          !hass.entities[e].hidden
        ).length;
        return devices > 1 ? devices + " " + "${localize("google_dashboard_card.devices")}" : devices + " " + "${localize("google_dashboard_card.device")}";
      ]]]
    show_name: true
    show_label: true
    show_icon: true
    ${otherAction(action)}:
      action: none
      haptic: medium
    ${action}:
      action: ${camera_path ? "navigate" : "none"}
      navigation_path: ${camera_path}
      haptic: medium
    styles:
      grid:
        - grid-template-columns: 2fr 1fr 1fr
        - grid-template-rows: 2fr 0.1fr 1fr 1fr
        - grid-template-areas: |
            "i . ."
            ". . ."
            "n n n"
            "l l l"
      card:
        - display: |
            [[[
              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&
                hass.entities[e] &&
                !hass.entities[e].hidden);
              return lights.length === 0 ? "none" : "block";
            ]]]
        - margin-bottom: 1px
        - height: 130px
        - width: 130px
        - border-radius: 30px
        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        #- background: |
        #    [[[
        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';
        #    ]]]
      name:
        - font-size: 1rem
        - font-weight: bold
        - justify-self: start
        - align-self: end
        - margin: 0px 20px 0px 20px
        - max-width: -webkit-fill-available;
        - color: |
            [[[
              return hass.themes.darkMode ? '#E8EAED' : '#202124';
            ]]]
      label:
        - font-size: 0.85rem
        - justify-self: start
        - align-self: start
        - margin: 2px 0px 0px 20px
        - color: |
            [[[
              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
            ]]]
      icon:
        - color: |
            [[[
              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';
            ]]]
    state:
      - value: "on"
        styles:
          card:
            - background: |
                [[[
                  return hass.themes.darkMode ? '#302f32' : '#E8F0FE';
                ]]]
          icon:
            - color: |
                [[[
                  return hass.themes.darkMode ? '#fee183' : '#1A73E8';
                ]]]
  - type: custom:button-card
    icon: m3r:light-group
    name: ${localize("google_dashboard_card.lighting_name")}
    triggers_update: all
    label: |
      [[[
        // Conta automaticamente le luci accese
        const lightEntities = Object.keys(hass.states).filter(
        (entity) =>
          entity.startsWith("light.") &&
          hass.states[entity].state !== "unavailable" &&
          hass.entities[entity] &&
          !hass.entities[entity].hidden
        );
        const lightsOn = lightEntities.filter(
          (entity) => hass.states[entity].state === "on"
        ).length;
        const totalLights = lightEntities.length;
        return lightsOn + "/" + totalLights + " ${localize("google_dashboard_card.lighting_label")}";
      ]]]
    show_name: true
    show_label: true
    show_icon: true
    ${otherAction(action)}:
      action: none
      haptic: medium
    ${action}:
      action: ${lighting_path ? "navigate" : "none"}
      navigation_path: ${lighting_path}
      haptic: medium
    styles:
      grid:
        - grid-template-columns: 2fr 1fr 1fr
        - grid-template-rows: 2fr 0.1fr 1fr 1fr
        - grid-template-areas: |
            "i . ."
            ". . ."
            "n n n"
            "l l l"
      card:
        - display: |
            [[[
              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && 
                hass.states[e].state !== "unavailable" &&
                hass.entities[e] &&
                !hass.entities[e].hidden);
              return lights.length === 0 ? "none" : "block";
            ]]]
        - margin-left: |
            [[[
              const camera = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");
              return camera.length === 0 ? "5px" : "0px";
            ]]]
        - margin-bottom: 1px
        - height: 130px
        - width: 130px
        - border-radius: 30px
        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        #- background: |
        #    [[[
        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';
        #    ]]]
      name:
        - font-size: 1rem
        - font-weight: bold
        - justify-self: start
        - align-self: end
        - margin: 0px 20px 0px 20px
        - max-width: -webkit-fill-available;
        - color: |
            [[[
              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
            ]]]
      label:
        - font-size: 0.85rem
        - justify-self: start
        - align-self: start
        - margin: 2px 0px 0px 20px
        - color: |
            [[[
              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
            ]]]
      icon:
        - color: |
            [[[
              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';
            ]]]
    state:
      - operator: template
        value: |
          [[[
            return Object.keys(hass.states).some(entity => 
              entity.startsWith('light.') && 
              hass.states[entity].state === 'on'
            );
          ]]]
        styles:
          card:
            - background: |
                [[[
                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';
                ]]]
          icon:
            - color: |
                [[[
                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';
                ]]]
  - type: custom:button-card
    icon: m3of:wifi
    name: ${localize("google_dashboard_card.wifi_name")}
    triggers_update: all
    label: |
      [[[
        const devices = Object.keys(hass.states).filter(
          (entity) =>
            entity.startsWith("device_tracker.") &&
            hass.states[entity].state === "home" &&
            hass.entities[entity] &&
            !hass.entities[entity].hidden
        ).length;
        return devices > 1 ? (devices + " " + "${localize("google_dashboard_card.devices")}") : (devices + " " + "${localize("google_dashboard_card.device")}");
      ]]]
    show_name: true
    show_label: true
    show_icon: true
    ${otherAction(action)}:
      action: none
      haptic: medium
    ${action}:
      action: ${wifi_path ? "navigate" : "none"}
      navigation_path: ${wifi_path}
      haptic: medium
    styles:
      grid:
        - grid-template-columns: 2fr 1fr 1fr
        - grid-template-rows: 2fr 0.1fr 1fr 1fr
        - grid-template-areas: |
            "i . ."
            ". . ."
            "n n n"
            "l l l"
      card:
        - display: |
            [[[
              const deviceEntities = Object.keys(hass.states).filter(entity => 
                entity.startsWith('device_tracker.') && 
                hass.states[entity].state === 'home' &&
                hass.entities[entity] &&
                !hass.entities[entity].hidden
              );
              return deviceEntities.length === 0 ? "none" : "block";
            ]]]
        - margin-left: |
            [[[
              const cameras = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");
              const lights = Object.keys(hass.states).filter(e => 
                e.startsWith("light.") && hass.states[e].state !== "unavailable");
              return lights.length === 0 ? "-8px" : "0px";

              if (lights.length === 0 && cameras.length === 0) 
                return "5px";
              else if (lights.length != 0 || cameras.length != 0) 
                return "-8px";
              else return "0px";
            ]]]
        - margin-bottom: 1px
        - height: 130px
        - width: 130px
        - border-radius: 30px
        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        #- background: |
        #    [[[
        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';
        #    ]]]
      name:
        - font-size: 1rem
        - font-weight: bold
        - justify-self: start
        - align-self: end
        - margin: 0px 20px 0px 20px
        - max-width: -webkit-fill-available;
        - color: |
            [[[
              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
            ]]]
      label:
        - font-size: 0.85rem
        - justify-self: start
        - align-self: start
        - margin: 2px 0px 0px 20px
        - color: |
            [[[
              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
            ]]]
      icon:
        - color: |
            [[[
              return hass.themes.darkMode ? '#81C995' : '#137333';
            ]]]
    state:
      - operator: template
        value: |
          [[[
            return Object.keys(hass.states).some(entity => 
              entity.startsWith('device_tracker.') && 
              hass.states[entity].state === 'home'
            );
          ]]]
        styles:
          card:
            - background: |
                [[[
                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';
                ]]]
          icon:
            - color: |
                [[[
                  return hass.themes.darkMode ? '#81C995' : '#137333';
                ]]]
  - type: custom:button-card
    entity: light.luce_giovanni
    icon: m3of:thermostat
    name: ${localize("google_dashboard_card.climate_name")}
    triggers_update: all
    label: |
      [[[
        const climateEntities = Object.keys(hass.states).filter(
            (entity) =>
              entity.startsWith("climate.") &&
              hass.states[entity].state !== "unavailable" &&
              hass.entities[entity] &&
              !hass.entities[entity].hidden
          ).length;
          return climateEntities > 1 ? climateEntities + " " + "${localize("google_dashboard_card.devices")}" : climateEntities + " " + "${localize("google_dashboard_card.device")}";
      ]]]
    show_name: true
    show_label: true
    show_icon: true
    ${otherAction(action)}:
      action: none
      haptic: medium
    ${action}:
      action: ${climate_path ? "navigate" : "none"}
      navigation_path: ${climate_path}
      haptic: medium
    styles:
      grid:
        - grid-template-columns: 2fr 1fr 1fr
        - grid-template-rows: 2fr 0.1fr 1fr 1fr
        - grid-template-areas: |
            "i . ."
            ". . ."
            "n n n"
            "l l l"
      card:
        - display: |
            [[[
              const climateEntities = Object.keys(hass.states).filter(entity => 
                entity.startsWith('climate.') && 
                hass.states[entity].state !== 'unavailable' &&
                hass.entities[entity] &&
                !hass.entities[entity].hidden
              );
              return climateEntities.length === 0 ? "none" : "block";
            ]]]
        - margin-left: |
            [[[
              const cameras = Object.keys(hass.states).filter((e) =>
                e.startsWith("camera.") &&
                hass.entities[e] &&
                !hass.entities[e].hidden
              ).length;
              const lights = Object.keys(hass.states).filter(e => 
                e.startsWith("light.") && hass.states[e].state !== "unavailable");
              const deviceEntities = Object.keys(hass.states).filter(entity => 
                entity.startsWith('device_tracker.') && hass.states[entity].state === 'home');
              if (deviceEntities.length === 0 && lights.length === 0 && cameras.length === 0) 
                return "5px";
              else if (deviceEntities.length === 0 && lights.length != 0) 
                return "-8px";
              else return "0px";
            ]]]
        - margin-bottom: 1px
        - height: 130px
        - width: 130px
        - border-radius: 30px
        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        #- background: |
        #    [[[
        #      return hass.themes.darkMode ? '#1F1F1F' : '#F8F9FA';
        #    ]]]
      name:
        - font-size: 1rem
        - font-weight: bold
        - justify-self: start
        - align-self: end
        - margin: 0px 20px 0px 20px
        - max-width: -webkit-fill-available;
        - color: |
            [[[
              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
            ]]]
      label:
        - font-size: 0.85rem
        - justify-self: start
        - align-self: start
        - margin: 2px 0px 0px 20px
        - color: |
            [[[
              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
            ]]]
      icon:
        - color: |
            [[[
              return hass.themes.darkMode ? '#ffdbcd' : '#812800';
            ]]]
    state:
      - operator: template
        value: |
          [[[
            return Object.keys(hass.states).some(entity => 
              entity.startsWith('climate.') && 
              (hass.states[entity].state === 'on' || 
                hass.states[entity].state === 'auto' || 
                hass.states[entity].state === 'heat' || 
                hass.states[entity].state === 'cool' || 
                hass.states[entity].state === 'heat_cool')
            );
          ]]]
        styles:
          card:
            - background: |
                [[[
                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';
                ]]]
          icon:
            - color: |
                [[[
                  return hass.themes.darkMode ? '#FF8A65' : '#812800';
                ]]]
`;
}

let GoogleDashboardCard = class GoogleDashboardCard extends i$1 {
    static getStubConfig() {
        return {
            type: "custom:google-dashboard-card",
        };
    }
    async setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        this._config = config;
    }
    async updated(changedProps) {
        if (changedProps.has("hass")) {
            if (this._card) {
                this._card.hass = this.hass; // aggiorna la card esistente
            }
            else if (this._config) {
                const template = this.mapTemplate(this._config);
                const configJson = jsYaml.load(template);
                const helpers = await window.loadCardHelpers();
                const card = await helpers.createCardElement(configJson);
                card.classList.add("ripple-card");
                card.hass = this.hass;
                this._card = card;
                this.requestUpdate();
            }
            console.log("This LOG is for debug purpose, Google Dashboard");
            console.log(this.hass);
        }
    }
    static getCardSize() {
        return 1;
    }
    static async getConfigElement() {
        return document.createElement("google-dashboard-card-editor");
    }
    mapTemplate(config) {
        const action = this.resolveAction({
            default_action: config.default_action,
            action_type: config.action_type,
            single_tap_web: config.single_tap_web,
        });
        const text = googleDashboadTemplate(config.cameras, config.lighting, config.wifi, config.climate, action);
        return text;
    }
    resolveAction({ default_action, action_type, single_tap_web, }) {
        const ua = navigator.userAgent || "";
        const isWeb = !ua.includes("Android") &&
            !ua.includes("iPhone") &&
            !ua.includes("iPad") &&
            !ua.includes("HomeAssistant");
        if (default_action)
            return "tap_action";
        if (isWeb && single_tap_web)
            return "tap_action";
        if (!action_type)
            return "tap_action";
        return action_type;
    }
    _handleClick(event) {
        const target = event.target;
        // Cerca l'elemento più vicino che abbia una classe riconoscibile, ad es. 'button-card'
        const card = target.closest(".ripple-card");
        if (card) {
            applyRippleEffect(card, event);
        }
    }
    render() {
        if (!this._card) {
            return x `<ha-card>Loading…</ha-card>`;
        }
        // Avvolgi il contenuto in un div che intercetta il click
        return x `
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `;
    }
    createRenderRoot() {
        return this;
    }
};
GoogleDashboardCard.styles = i$4 `
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleDashboardCard.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleDashboardCard.prototype, "_config", void 0);
__decorate([
    r$2()
], GoogleDashboardCard.prototype, "_card", void 0);
GoogleDashboardCard = __decorate([
    t$1("google-dashboard-card")
], GoogleDashboardCard);

let GoogleDashboardCardEditor = class GoogleDashboardCardEditor extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_CONFIG$3;
        this._valueChanged = (ev) => {
            var _a, _b;
            const target = ev.target;
            const configValue = target.getAttribute("configValue");
            const value = ev instanceof CustomEvent && ((_a = ev.detail) === null || _a === void 0 ? void 0 : _a.value) !== undefined
                ? ev.detail.value
                : ((_b = target.checked) !== null && _b !== void 0 ? _b : target.value);
            if (!configValue || this._config[configValue] === value)
                return;
            this._config = Object.assign(Object.assign({}, this._config), { [configValue]: value });
            this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: this._config },
            }));
        };
    }
    setConfig(config) {
        this._config = Object.assign({}, config);
    }
    _entityChanged(ev) {
        var _a;
        const value = ev.detail.value;
        if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.entity) === value)
            return;
        this._config = Object.assign(Object.assign({}, this._config), { entity: value });
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: this._config },
        }));
    }
    async firstUpdated() {
        const helpers = await window.loadCardHelpers();
        const card = await helpers.createCardElement({
            type: "entities",
            entities: [],
        });
        await card.constructor.getConfigElement();
    }
    render() {
        var _a, _b, _c, _d;
        if (!this._config || !this.hass) {
            return x ``;
        }
        this._config.use_default_icon = (_a = this._config.use_default_icon) !== null && _a !== void 0 ? _a : true;
        this._config.default_action = (_b = this._config.default_action) !== null && _b !== void 0 ? _b : true;
        return x `
      <div class="form">
        <span class="switch-label"
          >${localize("google_dashboard_card.description")}</span
        >

        <span class="text-label"
          >${localize("google_dashboard_card.cameras")}</span
        >
        <ha-textfield
          label="${localize("google_dashboard_card.placeholder")}"
          .value=${this._config.cameras || ""}
          configValue="cameras"
          @input=${this._valueChanged}
          placeholder="e.g. ./cameras"
        ></ha-textfield>

        <span class="text-label"
          >${localize("google_dashboard_card.lighting")}</span
        >
        <ha-textfield
          label="${localize("google_dashboard_card.placeholder")}"
          .value=${this._config.lighting || ""}
          configValue="lighting"
          @input=${this._valueChanged}
          placeholder="e.g. ./lighting"
        ></ha-textfield>

        <span class="text-label"
          >${localize("google_dashboard_card.wifi")}</span
        >
        <ha-textfield
          label="${localize("google_dashboard_card.placeholder")}"
          .value=${this._config.wifi || ""}
          configValue="wifi"
          @input=${this._valueChanged}
          placeholder="e.g. ./wifi"
        ></ha-textfield>

        <span class="text-label"
          >${localize("google_dashboard_card.climate")}</span
        >
        <ha-textfield
          label="${localize("google_dashboard_card.placeholder")}"
          .value=${this._config.climate || ""}
          configValue="climate"
          @input=${this._valueChanged}
          placeholder="e.g. ./climate"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_dashboard_card.default")}</span
          >
          <ha-switch
            .checked=${(_c = this._config.default_action) !== null && _c !== void 0 ? _c : true}
            configValue="default_action"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.default_action
            ? x ``
            : x `
              <ha-select
                label="${localize("google_dashboard_card.tap_type")}"
                .value=${this._config.action_type || "tap_action"}
                configValue="action_type"
                @selected=${this._valueChanged}
                @closed=${(ev) => ev.stopPropagation()}
              >
                <mwc-list-item value="tap_action">
                  ${localize("google_dashboard_card.single")}
                </mwc-list-item>
                <mwc-list-item value="hold_action">
                  ${localize("google_dashboard_card.hold")}
                </mwc-list-item>
                <mwc-list-item value="double_tap_action">
                  ${localize("google_dashboard_card.double")}
                </mwc-list-item>
              </ha-select>

              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_dashboard_card.web")}</span
                >
                <ha-switch
                  .checked=${(_d = this._config.single_tap_web) !== null && _d !== void 0 ? _d : false}
                  configValue="single_tap_web"
                  @change=${this._valueChanged}
                />
              </div>
            `}
      </div>
    `;
    }
};
GoogleDashboardCardEditor.styles = i$4 `
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleDashboardCardEditor.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleDashboardCardEditor.prototype, "_config", void 0);
GoogleDashboardCardEditor = __decorate([
    t$1("google-dashboard-card-editor")
], GoogleDashboardCardEditor);

class r {
  #t;
  #h;
  #e = 0;
  #s = 0;
  #o = 0;
  #r = 0;
  #n;
  #l = !1;
  #a;
  #p;
  #i;
  constructor(t, i, { touchActions: e, stopScrollDirection: s = "both" } = {}) {
    this.#t = t, this.#h = e, this.#n = i, this.#a = s, this.#p = this.#u.bind(this), this.#i = this.#v.bind(this), this.addListeners();
  }
  addListeners() {
    this.#t.addEventListener("pointerdown", this.#i), this.#t.addEventListener("pointermove", this.#i), this.#t.addEventListener("pointerup", this.#i), this.#t.addEventListener("pointercancel", this.#i), window.addEventListener("touchmove", this.#p, { passive: !1 }), this.#h && (this.#t.style.touchAction = this.#h);
  }
  removeListeners() {
    this.#t.removeEventListener("pointerdown", this.#i), this.#t.removeEventListener("pointermove", this.#i), this.#t.removeEventListener("pointerup", this.#i), this.#t.removeEventListener("pointercancel", this.#i), window.removeEventListener("touchmove", this.#p), this.#h && this.#t.style.removeProperty("touch-action");
  }
  #c() {
    this.#l = !0;
  }
  #d() {
    this.#l = !1;
  }
  #u(t) {
    this.#l && t.preventDefault();
  }
  #v(t) {
    if (t.type === "pointerdown" && (this.#t.setPointerCapture(t.pointerId), this.#e = t.pageX, this.#s = t.pageY), this.#t.hasPointerCapture(t.pointerId) && t.type !== "pointercancel" && typeof this.#n == "function") {
      const i = t.pageX - this.#e, e = t.pageY - this.#s, s = Math.abs(i / e) > 1, h = Math.abs(i / e) < 1;
      this.#a === "horizontal" && s && this.#c(), this.#a === "vertical" && h && this.#c(), this.#a === "both" && this.#c(), this.#n(t, {
        startX: this.#e,
        startY: this.#s,
        relativeX: i,
        relativeY: e,
        totalX: i + this.#o,
        totalY: e + this.#r
      });
    }
    t.type === "pointerup" && (this.#o = +this.#o + t.pageX - this.#e, this.#r = +this.#r + t.pageY - this.#s, this.#t.releasePointerCapture(t.pointerId), this.#d()), t.type === "pointercancel" && (this.#n(t, {
      startX: this.#e,
      startY: this.#s,
      relativeX: 0,
      relativeY: 0,
      totalX: this.#o,
      totalY: this.#r
    }), this.#t.releasePointerCapture(t.pointerId), this.#d());
  }
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=o=>o??E;

class GoogleSliderCard extends i$1 {
    constructor() {
        super(...arguments);
        // @property({ attribute: false }) public hass!: HomeAssistant;
        this._config = DEFAULT_CONFIG$4;
        this._name = "";
        this.mouseStartPos = { x: 0, y: 0 };
        this.mousePos = { x: 0, y: 0 };
        this.containerWidth = 0;
        this.oldValue = 0;
        this.currentValue = 0;
        this.holdTimer = 0;
        this.isHold = false;
        this._shouldUpdate = true;
        this.updateTimeout = 0;
        this.pressTimeout = 0;
        this.trackingStartTime = 0;
        this.isTap = false;
        this.color = google_color;
        this._handleContextMenu = (e) => {
            if (e.preventDefault) {
                e.preventDefault();
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            return false;
        };
        this._handlePointer = (evt, extra) => {
            this.mousePos = { x: evt.pageX, y: evt.pageY };
            const minSlideTime = this._config.min_slide_time;
            if (evt.type === "pointerdown") {
                this._press();
                this.isTap = true;
                this.isHold = false;
                this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time);
                this.trackingStartTime = Date.now();
                this._resetTrack();
            }
            if (["pointerdown", "pointermove", "pointerup"].includes(evt.type)) {
                this._updateValue();
            }
            if (evt.type === "pointermove") {
                if (this.isTap &&
                    Math.abs(extra.relativeX) < TAP_THRESHOLD &&
                    Math.abs(extra.relativeY) < TAP_THRESHOLD)
                    return;
                this.isTap = false;
                clearTimeout(this.holdTimer);
                this._stopUpdates();
            }
            if (evt.type === "pointercancel") {
                clearTimeout(this.holdTimer);
                this._unpress();
                this._startUpdates();
            }
            if (evt.type === "pointerup") {
                clearTimeout(this.holdTimer);
                this._unpress();
                this._startUpdates();
                if (this.isTap) {
                    this._handleTap();
                    return;
                }
                if (Date.now() - this.trackingStartTime > minSlideTime) {
                    this._setValue();
                    this._startUpdates(true);
                }
            }
        };
        this._setHold = () => {
            this.isTap = false;
            this.isHold = true;
            this._handleAction("hold");
        };
        this._handleTap = () => {
            var _a;
            clearTimeout(this.holdTimer);
            if ((_a = this._config) === null || _a === void 0 ? void 0 : _a.tap_action) {
                if (!this.isHold) {
                    this._handleAction("tap");
                }
            }
        };
    }
    static getStubConfig(_hass) {
        const allEntities = Object.keys(_hass.states);
        const climates = allEntities
            .filter((entity) => entity.startsWith("light."))
            .sort();
        const randomLight = climates[Math.floor(Math.random() * climates.length)];
        return {
            type: "custom:google-slider-card",
            entity: randomLight,
            attribute: "brightness",
            icon: "m3of:lightbulb",
            show_percentage: true,
            bold_text: false,
        };
    }
    static getCardSize() {
        return 1;
    }
    static async getConfigElement() {
        return document.createElement("google-slider-card-editor");
    }
    // life cycle
    setConfig(config) {
        if (!config) {
            throw new Error(localize("common.invalid_configuration"));
        }
        if (!config.entity) {
            throw new Error(localize("common.no_entity_set"));
        }
        if (!config.entity || config.entity.split(".")[0] !== "light") {
            throw new Error("Specify an entity from within the light domain");
        }
        this._config = Object.assign(Object.assign({}, DEFAULT_CONFIG$4), config);
        this._entity = this._config.entity;
        this._config.original_min = this._config.min;
        this._config.original_max = this._config.max;
    }
    set hass(hass) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!this._entity)
            return;
        this._hass = hass;
        this._state = hass.states[this._entity];
        this._status = (_a = this._state) === null || _a === void 0 ? void 0 : _a.state;
        this._name =
            (_f = (_e = (_b = this._config.name) !== null && _b !== void 0 ? _b : (_d = (_c = this._state) === null || _c === void 0 ? void 0 : _c.attributes) === null || _d === void 0 ? void 0 : _d.friendly_name) !== null && _e !== void 0 ? _e : this._entity.split(".")[1]) !== null && _f !== void 0 ? _f : "";
        const currentTheme = ((_g = hass.themes) === null || _g === void 0 ? void 0 : _g.darkMode) ? "dark" : "light";
        const currentEntityState = (_h = hass.states[this._entity]) === null || _h === void 0 ? void 0 : _h.state;
        if (this._lastTheme !== currentTheme ||
            this._lastEntityState !== currentEntityState) {
            this._lastTheme = currentTheme;
            this._lastEntityState = currentEntityState;
            this.requestUpdate(); // forza il re-render se cambia qualcosa
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("contextmenu", this._handleContextMenu);
        this.slideGesture = new r(this, this._handlePointer.bind(this), {
            touchActions: "pan-y",
            stopScrollDirection: "horizontal",
        });
    }
    disconnectedCallback() {
        this.removeEventListener("contextmenu", this._handleContextMenu);
        this.slideGesture.removeListeners();
        super.disconnectedCallback();
    }
    _updateValue() {
        const width = this.containerWidth;
        const dx = this.mousePos.x - this.mouseStartPos.x;
        const percentage = Math.round((100 * dx) / width);
        this.currentValue = this.oldValue + percentage;
        this._checklimits();
        this._updateSlider();
    }
    _handleAction(action) {
        const event = new Event("hass-action", {
            bubbles: true,
            cancelable: false,
            composed: true,
        });
        event.detail = {
            config: this._config,
            action: action,
        };
        this.dispatchEvent(event);
    }
    _resetTrack() {
        this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
        this.oldValue = this.currentValue;
    }
    _press() {
        if (this.pressTimeout)
            clearTimeout(this.pressTimeout);
        this.pressTimeout = window.setTimeout(() => this.setAttribute("pressed", ""), this._config.min_slide_time);
        this.setAttribute("half-pressed", "");
    }
    _unpress() {
        if (this.pressTimeout)
            clearTimeout(this.pressTimeout);
        this.removeAttribute("pressed");
        this.removeAttribute("half-pressed");
    }
    _checklimits() {
        var _a, _b;
        const min = (_a = this._config.min) !== null && _a !== void 0 ? _a : 0;
        const max = (_b = this._config.max) !== null && _b !== void 0 ? _b : 100;
        if (this.currentValue < min) {
            this.currentValue = min;
            this._resetTrack();
        }
        if (this.currentValue > max) {
            this.currentValue = max;
            this._resetTrack();
        }
    }
    _updateSlider() {
        var _a;
        this.style.setProperty("--bsc-percent", this.currentValue + "%");
        const percentage = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById("percentage");
        if (this._state && this._state.attributes.brightness)
            percentage &&
                (percentage.innerText = Math.round(this.currentValue) + "%");
        else
            percentage && (percentage.innerText = localize("common.on"));
    }
    _updateColors() {
        var _a, _b, _c, _d, _e;
        let color = "var(--bsc-color)";
        let brightness = "0%";
        let brightnessUI = "50%";
        let isOn = false;
        if (this._state) {
            if (this._status == "on") {
                const stateColor = (_b = (_a = this._state.attributes) === null || _a === void 0 ? void 0 : _a.rgb_color) !== null && _b !== void 0 ? _b : [255, 255, 255];
                const stateBrightness = (_d = (_c = this._state.attributes) === null || _c === void 0 ? void 0 : _c.brightness) !== null && _d !== void 0 ? _d : 255;
                isOn = true;
                if (stateColor) {
                    color = `rgb(${stateColor.join(",")})`;
                }
                if (stateBrightness) {
                    brightness = `${Math.ceil((100 * stateBrightness) / 255)}%`;
                    brightnessUI = `${Math.ceil((100 * stateBrightness) / 510 + 50)}%`;
                }
            }
            else {
                color = "var(--bsc-off-color)";
            }
        }
        const percentage = (_e = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _e === void 0 ? void 0 : _e.getElementById("percentage");
        if (!isOn) {
            const isOffline = this._status != "on" && this._status != "off";
            if (!isOffline)
                percentage && (percentage.innerText = localize("common.off"));
            else
                percentage && (percentage.innerText = localize("common.offline"));
        }
        this.style.setProperty("--bsc-entity-color", color);
        this.style.setProperty("--bsc-brightness", brightness);
        this.style.setProperty("--bsc-brightness-ui", brightnessUI);
        if (this._config.icon_color && isOn) {
            this.style.setProperty("--bsc-icon-color", this._config.icon_color);
        }
        if (this._config.icon_color && !isOn) {
            this.style.removeProperty("--bsc-icon-color");
        }
    }
    _getValue() {
        var _a, _b, _c, _d, _e;
        if (!this._shouldUpdate)
            return;
        if (!this._state)
            return;
        const attr = (_a = this._config) === null || _a === void 0 ? void 0 : _a.attribute;
        let _value = 0;
        if (this._status == "unavailable") {
            this._config.min = 0;
            this._config.max = 0;
            this.style.setProperty("--bsc-opacity", "0.5");
        }
        else {
            this._config.min = this._config.original_min;
            this._config.max = this._config.original_max;
            this.style.removeProperty("--bsc-opacity");
        }
        if (this._status != "on") {
            _value = (_b = this._config.min) !== null && _b !== void 0 ? _b : 0;
        }
        else {
            switch (attr) {
                case "brightness":
                    _value = Math.round((100 * ((_c = this._state.attributes.brightness) !== null && _c !== void 0 ? _c : 255)) / 255);
                    break;
                case "red":
                case "green":
                case "blue":
                    const rgb = (_d = this._state.attributes.rgb_color) !== null && _d !== void 0 ? _d : [255, 255, 255];
                    if (attr === "red")
                        _value = rgb[0];
                    if (attr === "green")
                        _value = rgb[1];
                    if (attr === "blue")
                        _value = rgb[2];
                    _value = Math.ceil((100 * _value) / 255);
                    break;
                case "hue":
                case "saturation":
                    const hs = (_e = this._state.attributes.hs_color) !== null && _e !== void 0 ? _e : [100, 100];
                    if (attr === "hue")
                        _value = hs[0];
                    if (attr === "saturation")
                        _value = hs[1];
                    break;
            }
        }
        this.currentValue = _value;
        this._updateSlider();
    }
    _setValue() {
        var _a, _b;
        if (!this._state)
            return;
        let value = this.currentValue;
        let attr = this._config.attribute;
        let on = true;
        let _value;
        switch (attr) {
            case "brightness":
                value = Math.ceil((value / 100.0) * 255);
                if (!value)
                    on = false;
                break;
            case "red":
            case "green":
            case "blue":
                _value = (_a = this._state.attributes.rgb_color) !== null && _a !== void 0 ? _a : [255, 255, 255];
                if (attr === "red")
                    _value[0] = value;
                if (attr === "green")
                    _value[1] = value;
                if (attr === "blue")
                    _value[2] = value;
                value = _value;
                attr = "rgb_color";
                break;
            case "hue":
            case "saturation":
                _value = (_b = this._state.attributes.hs_color) !== null && _b !== void 0 ? _b : [100, 100];
                if (attr === "hue")
                    _value[0] = value;
                if (attr === "saturation")
                    _value[1] = value;
                value = _value;
                attr = "hs_color";
                break;
        }
        const params = {
            entity_id: this._state.entity_id,
        };
        if (on) {
            params[attr] = value;
            if (this._config.transition) {
                params.transition = this._config.transition;
            }
            this._hass.callService("light", "turn_on", params);
        }
        else {
            this._hass.callService("light", "turn_off", params);
        }
    }
    _stopUpdates() {
        var _a, _b, _c;
        if (this.updateTimeout)
            clearTimeout(this.updateTimeout);
        if (!this._shouldUpdate)
            return;
        (_c = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById("slider")) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.remove("animate");
        this._shouldUpdate = false;
    }
    _startUpdates(settle = false) {
        if (this.updateTimeout)
            clearTimeout(this.updateTimeout);
        this.updateTimeout = window.setTimeout(() => {
            var _a, _b, _c;
            this._shouldUpdate = true;
            (_c = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById("slider")) === null || _b === void 0 ? void 0 : _b.classList) === null || _c === void 0 ? void 0 : _c.add("animate");
            this.requestUpdate();
        }, settle ? this._config.settle_time : 0);
    }
    _onClick(event) {
        applyRippleEffect(event.currentTarget, event);
    }
    updated() {
        var _a, _b, _c;
        this.containerWidth =
            (_c = (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById("container")) === null || _b === void 0 ? void 0 : _b.clientWidth) !== null && _c !== void 0 ? _c : 0;
        this._getValue();
        this._updateColors();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (!(this._entity && this._entity in ((_b = (_a = this._hass) === null || _a === void 0 ? void 0 : _a.states) !== null && _b !== void 0 ? _b : {}))) {
            return this._showError(`${localize("common.no_entity")}: ${this._entity}`);
        }
        const colorize = (_c = (this._config.colorize && true)) !== null && _c !== void 0 ? _c : false;
        const showPercentage = (_d = (this._config.show_percentage && true)) !== null && _d !== void 0 ? _d : false;
        const boldText = (_e = (this._config.bold_text && true)) !== null && _e !== void 0 ? _e : false;
        const state = (_g = (_f = this._hass) === null || _f === void 0 ? void 0 : _f.states) === null || _g === void 0 ? void 0 : _g[this._entity];
        const isOffline = (state === null || state === void 0 ? void 0 : state.state) != "on" && (state === null || state === void 0 ? void 0 : state.state) != "off";
        const theme = ((_j = (_h = this._hass) === null || _h === void 0 ? void 0 : _h.themes) === null || _j === void 0 ? void 0 : _j.darkMode) ? "dark" : "light";
        const isOn = (state === null || state === void 0 ? void 0 : state.state) === "on";
        // Stili dinamici basati su stato entità e tema
        let nameColor = "";
        let iconColor = "";
        let percentageColor = "";
        let sliderColor = "";
        let containerColor = "";
        const nameMargin = "-20px";
        const iconMargin = "-10px";
        const percentageMargin = "-20px";
        //const nameMargin = '-18%';
        //const iconMargin = '-2%';
        //const percentageMargin = '-18%';
        if (isOffline) {
            // Offline, tema light
            if (theme === "light") {
                nameColor = this.color.light.offline.light.title;
                iconColor = this.color.light.offline.light.icon;
                percentageColor = this.color.light.offline.light.percentage;
                sliderColor = this.color.light.offline.light.slider;
                containerColor = this.color.light.offline.light.background;
                // Offline, tema dark
            }
            else {
                nameColor = this.color.dark.offline.light.title;
                iconColor = this.color.dark.offline.light.icon;
                percentageColor = this.color.dark.offline.light.percentage;
                sliderColor = this.color.dark.offline.light.slider;
                containerColor = this.color.dark.offline.light.background;
            }
        }
        else if (isOn) {
            // Acceso, tema dark
            if (theme === "dark") {
                //nameColor = iconColor = percentageColor = "#ffe083";
                //sliderColor = "#6d5300";
                //containerColor = "#333029";
                nameColor = this.color.dark.on.light.title;
                iconColor = this.color.dark.on.light.icon;
                percentageColor = this.color.dark.on.light.percentage;
                sliderColor = this.color.dark.on.light.slider;
                containerColor = this.color.dark.on.light.background;
                // Acceso, tema light
            }
            else {
                //nameColor = iconColor = percentageColor = "#745b01";
                //sliderColor = "#ffbf00";
                //containerColor = "#feefc8";
                nameColor = this.color.light.on.light.title;
                iconColor = this.color.light.on.light.icon;
                percentageColor = this.color.light.on.light.percentage;
                sliderColor = this.color.light.on.light.slider;
                containerColor = this.color.light.on.light.background;
            }
        }
        else {
            // Spento, tema dark
            if (theme === "dark") {
                //nameColor = iconColor = percentageColor = '#9e9e9e';
                //nameColor = iconColor = percentageColor = "#e3e3e5";
                //sliderColor = "#cccccc";
                //containerColor = "#292a2e";
                nameColor = this.color.dark.off.light.title;
                iconColor = this.color.dark.off.light.icon;
                percentageColor = this.color.dark.off.light.percentage;
                sliderColor = this.color.dark.off.light.slider;
                containerColor = this.color.dark.off.light.background;
            }
            else {
                nameColor = this.color.light.off.light.title;
                iconColor = this.color.light.off.light.icon;
                percentageColor = this.color.light.off.light.percentage;
                sliderColor = this.color.light.off.light.slider;
                containerColor = this.color.light.off.light.background;
            }
        }
        //// On, Dark Theme
        //if (isOn && theme === "dark") {
        //  //nameColor = iconColor = percentageColor = "#ffe083";
        //  //sliderColor = "#6d5300";
        //  //containerColor = "#333029";
        //  nameColor = this.color.dark.on.light.title;
        //  iconColor = this.color.dark.on.light.icon;
        //  percentageColor = this.color.dark.on.light.percentage;
        //  sliderColor = this.color.dark.on.light.slider;
        //  containerColor = this.color.dark.on.light.background;
        //  // On, Light Theme
        //} else if (isOn) {
        //  //nameColor = iconColor = percentageColor = "#745b01";
        //  //sliderColor = "#ffbf00";
        //  //containerColor = "#feefc8";
        //  nameColor = this.color.light.on.light.title;
        //  iconColor = this.color.light.on.light.icon;
        //  percentageColor = this.color.light.on.light.percentage;
        //  sliderColor = this.color.light.on.light.slider;
        //  containerColor = this.color.light.on.light.background;
        //  // Off, Dark Theme
        //} else if (theme === "dark") {
        //  //nameColor = iconColor = percentageColor = '#9e9e9e';
        //  //nameColor = iconColor = percentageColor = "#e3e3e5";
        //  //sliderColor = "#cccccc";
        //  //containerColor = "#292a2e";
        //  nameColor = this.color.dark.off.light.title;
        //  iconColor = this.color.dark.off.light.icon;
        //  percentageColor = this.color.dark.off.light.percentage;
        //  sliderColor = this.color.dark.off.light.slider;
        //  containerColor = this.color.dark.off.light.background;
        //  // On, Light Theme
        //} else {
        //  nameColor = this.color.light.off.light.title;
        //  iconColor = this.color.light.off.light.icon;
        //  percentageColor = this.color.light.off.light.percentage;
        //  sliderColor = this.color.light.off.light.slider;
        //  containerColor = this.color.light.off.light.background;
        //}
        this._setStyleProperty("--bsc-name-color", nameColor);
        this._setStyleProperty("--bsc-icon-color", iconColor);
        this._setStyleProperty("--bsc-percentage-color", percentageColor);
        this._setStyleProperty("--bsc-slider-color", sliderColor);
        this._setStyleProperty("--bsc-background", containerColor);
        this._setStyleProperty("--bsc-name-margin", nameMargin);
        this._setStyleProperty("--bsc-icon-margin", iconMargin);
        this._setStyleProperty("--bsc-percentage-margin", percentageMargin);
        // Altri stili
        this._setStyleProperty("--bsc-primary-text-color", this._config.text_color);
        this._setStyleProperty("--bsc-border-color", this._config.border_color);
        this._setStyleProperty("--bsc-border-radius", this._config.border_radius);
        this._setStyleProperty("--bsc-border-style", this._config.border_style);
        this._setStyleProperty("--bsc-border-width", this._config.border_width);
        this._setStyleProperty("--bsc-height", this._config.height, (h) => `${h}px`);
        const iconName = this._config.icon == undefined ||
            this._config.icon === "m3of:lightbulb" ||
            this._config.icon === "m3r:lightbulb"
            ? isOn
                ? "m3of:lightbulb"
                : "m3r:lightbulb"
            : this._config.icon;
        return x `
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; ${isOffline
            ? "padding: 12px 35px 12px 12px"
            : "padding: 12px 12px"}"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${colorize ? "colorize" : ""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${iconName}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${o(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${boldText ? "bold" : ""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${showPercentage ? "" : "hide"} ${boldText ? "bold" : ""}"
            ></span>
          </p>
        </div>
        ${isOffline
            ? x `
              <ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `
            : ""}
      </ha-card>
    `;
    }
    _setStyleProperty(name, value, transform = (value) => value) {
        if (value !== undefined && value !== null && value !== "") {
            this.style.setProperty(name, transform(value));
        }
    }
    _showWarning(warning) {
        return x ` <hui-warning>${warning}</hui-warning> `;
    }
    _showError(error) {
        const errorCard = document.createElement("hui-error-card");
        errorCard.setConfig({
            type: "error",
            error,
            // origConfig: this._config,
        });
        return x ` ${errorCard} `;
    }
    // https://lit-element.polymer-project.org/guide/styles
    static get styles() {
        return i$4 `
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 97px);
        --bsc-opacity: 1;

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        /*transform: scale(0.99);*/
      }

      :host([pressed]) {
        /*transform: scale(0.98);*/
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        /* opacity: var(--bsc-opacity);*/
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 4px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
        pointer-events: visible;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        padding: 12px 12px;
        box-shadow:
          0px 0.5px 1px rgba(0, 0, 0, 0.05),
          0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        -webkit-tap-highlight-color: transparent;
      }

      .hide {
        display: none;
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        /*opacity: 0.3;*/
        z-index: -1;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        filter: brightness(var(--bsc-brightness-ui));
        transition:
          background-color 1s ease,
          filter 1s ease;
      }

      #slider.animate {
        transition:
          right 1s ease,
          background-color 1s ease,
          filter 1s ease;
      }

      #content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      #label {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
      }

      #name {
        color: var(--bsc-name-color);
        font-size: 15px;
        font-weight: 550;
        line-height: 1.35;
      }

      #name.bold,
      #percentage.bold {
        font-weight: bold !important;
      }

      #percentage {
        color: var(--bsc-percentage-color);
        font-size: 13px;
        margin-top: 1px;
        font-weight: 500;
      }

      #icon {
        width: 32px;
        height: 32px;
        color: var(--bsc-icon-color);
        align-content: center;
        margin-right: 5px;
        transition: color 0.3s ease-out;
      }

      @media (max-width: 420px) {
        #icon_offline {
          right: 15px;
        }
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 600ms ease-out;
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    }
}
__decorate([
    r$2()
], GoogleSliderCard.prototype, "_config", void 0);
__decorate([
    r$2()
], GoogleSliderCard.prototype, "_entity", void 0);
__decorate([
    r$2()
], GoogleSliderCard.prototype, "_state", void 0);
__decorate([
    r$2()
], GoogleSliderCard.prototype, "_status", void 0);
__decorate([
    r$2()
], GoogleSliderCard.prototype, "_name", void 0);

const DEFAULT_CONFIG$2 = {
    type: "custom:google-climate-card",
    entity: "climate.thermo",
    increase_temp: 1,
    decrease_temp: 1,
    use_material_color: true,
    use_default_icon: true,
};

let GoogleClimateCard = class GoogleClimateCard extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_CONFIG$2;
        this.google_color_scheme = google_color;
    }
    setConfig(config) {
        if (!config || !config.entity) {
            throw new Error(localize("common.invalid_configuration"));
        }
        this._config = config;
    }
    static getStubConfig(_hass) {
        const allEntities = Object.keys(_hass.states);
        const climates = allEntities
            .filter((entity) => entity.startsWith("climate."))
            .sort();
        const randomClimate = climates[Math.floor(Math.random() * climates.length)];
        return {
            type: "custom:google-climate-card",
            entity: randomClimate,
            increase_temp: 1,
            decrease_temp: 1,
            use_material_color: true,
            use_default_icon: true,
        };
    }
    static getCardSize() {
        return 1;
    }
    static async getConfigElement() {
        return document.createElement("google-climate-card-editor");
    }
    _onClick(event) {
        applyRippleEffect(event.currentTarget, event);
        if (navigator.vibrate) {
            navigator.vibrate(60);
        }
        if (!this._config || !this.hass)
            return;
        const entityId = this._config.entity;
        ne(this, "hass-more-info", { entityId });
    }
    async _adjustTemp(delta) {
        var _a;
        if (navigator.vibrate) {
            navigator.vibrate(60);
        }
        if (!this.hass || !((_a = this._config) === null || _a === void 0 ? void 0 : _a.entity))
            return;
        const stateObj = this.hass.states[this._config.entity];
        //const current = Number(
        //  this._config.fix_temperature
        //    ? stateObj.attributes.temperature * 5
        //    : stateObj?.attributes?.temperature
        //);
        const current = Number(adjustTempAuto(this._config.fix_temperature, stateObj.attributes.temperature));
        if (isNaN(current))
            return;
        //const newTemp = this._config.fix_temperature
        //  ? (current + delta) / 5
        //  : current + delta;
        const newTemp = adjustNewTempAuto(this._config.fix_temperature, current + delta);
        this.hass.states[this._config.entity].attributes.temperature = newTemp;
        await this.hass.callService("climate", "set_temperature", {
            entity_id: this._config.entity,
            temperature: newTemp,
        });
        // Attendi un momento per permettere a HASS di aggiornare lo stato
        setTimeout(() => {
            this.requestUpdate(); // Forza il re-render manuale
        }, 500); // 500ms è solitamente sufficiente
    }
    setColorCard(use_material_color, theme, isOffline, isOn, isConditioner) {
        let nameColor = "";
        let iconColor = "";
        let adjustTemp = "";
        let internalTemp = "";
        let containerColor = "";
        if (isOffline) {
            // Offline, tema light
            if (theme === "light") {
                nameColor = iconColor =
                    this.google_color_scheme.light.offline.climate.title;
                containerColor =
                    this.google_color_scheme.light.offline.climate.background;
                //containerColor = "#dfdfe1";
            }
            else {
                // Offline, tema dark
                nameColor = iconColor =
                    this.google_color_scheme.dark.offline.climate.title;
                containerColor =
                    this.google_color_scheme.dark.offline.climate.background;
            }
        }
        else if (isOn) {
            // Acceso, tema dark
            if (theme === "dark") {
                if (use_material_color) {
                    if (isConditioner) {
                        nameColor =
                            this.google_color_scheme.dark.on.climate.material_dry.title;
                        iconColor =
                            this.google_color_scheme.dark.on.climate.material_dry.icon;
                        adjustTemp =
                            this.google_color_scheme.dark.on.climate.material_dry.button;
                        internalTemp =
                            this.google_color_scheme.dark.on.climate.material_dry.subtitle;
                        containerColor =
                            this.google_color_scheme.dark.on.climate.material_dry.background;
                    }
                    else {
                        nameColor = this.google_color_scheme.dark.on.climate.material.title;
                        iconColor = this.google_color_scheme.dark.on.climate.material.icon;
                        adjustTemp =
                            this.google_color_scheme.dark.on.climate.material.button;
                        internalTemp =
                            this.google_color_scheme.dark.on.climate.material.subtitle;
                        containerColor =
                            this.google_color_scheme.dark.on.climate.material.background;
                        //containerColor = "#5c4035";
                    }
                }
                else {
                    nameColor = iconColor =
                        this.google_color_scheme.dark.on.climate.default.title;
                    adjustTemp = this.google_color_scheme.dark.on.climate.default.button;
                    internalTemp =
                        this.google_color_scheme.dark.on.climate.default.subtitle;
                    containerColor =
                        this.google_color_scheme.dark.on.climate.default.background;
                    //containerColor = "#414246";
                }
            }
            else {
                // Acceso, tema light
                if (use_material_color) {
                    if (isConditioner) {
                        nameColor =
                            this.google_color_scheme.light.on.climate.material_dry.title;
                        iconColor =
                            this.google_color_scheme.light.on.climate.material_dry.icon;
                        internalTemp =
                            this.google_color_scheme.light.on.climate.material_dry.subtitle;
                        adjustTemp =
                            this.google_color_scheme.light.on.climate.material_dry.button;
                        containerColor =
                            this.google_color_scheme.light.on.climate.material_dry.background;
                    }
                    else {
                        nameColor =
                            this.google_color_scheme.light.on.climate.material.title;
                        iconColor = this.google_color_scheme.light.on.climate.material.icon;
                        internalTemp =
                            this.google_color_scheme.light.on.climate.material.subtitle;
                        adjustTemp =
                            this.google_color_scheme.light.on.climate.material.button;
                        containerColor =
                            this.google_color_scheme.light.on.climate.material.background;
                    }
                }
                else {
                    nameColor =
                        iconColor =
                            internalTemp =
                                this.google_color_scheme.light.on.climate.default.title;
                    adjustTemp = this.google_color_scheme.light.on.climate.default.button;
                    containerColor =
                        this.google_color_scheme.light.on.climate.default.background;
                }
            }
        }
        else {
            // Spento, tema dark (Updated on 21/07/2025)
            if (theme === "dark") {
                nameColor =
                    iconColor =
                        internalTemp =
                            this.google_color_scheme.dark.off.climate.default.title;
                adjustTemp = this.google_color_scheme.dark.off.climate.default.button;
                containerColor =
                    this.google_color_scheme.dark.off.climate.default.background;
            }
            else {
                // Spento, tema light
                nameColor =
                    iconColor =
                        internalTemp =
                            this.google_color_scheme.light.off.climate.default.title;
                adjustTemp = this.google_color_scheme.light.off.climate.default.button;
                containerColor =
                    this.google_color_scheme.light.off.climate.default.background;
            }
        }
        this._setStyleProperty("--bsc-name-color", nameColor);
        this._setStyleProperty("--bsc-icon-color", iconColor);
        this._setStyleProperty("--bsc-adjustTemp-color", adjustTemp);
        this._setStyleProperty("--bsc-internalTemp-color", internalTemp);
        this._setStyleProperty("--bsc-background", containerColor);
    }
    _setStyleProperty(name, value, transform = (value) => value) {
        if (value !== undefined && value !== null && value !== "") {
            this.style.setProperty(name, transform(value));
        }
    }
    render() {
        var _a, _b;
        if (!this._config || !this.hass)
            return x ``;
        const stateObj = this.hass.states[this._config.entity];
        if (!stateObj) {
            return x `<ha-card
        ><div class="warning">${localize("common.no_entity")}</div></ha-card
      >`;
        }
        const name = getName(this._config, this.hass);
        const isOffline = isOfflineState(stateObj.state);
        const stateDisplay = mapStateDisplay(stateObj, "thermometer", isOffline, this._config.fix_temperature);
        const theme = ((_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.themes) === null || _b === void 0 ? void 0 : _b.darkMode) ? "dark" : "light";
        const isOn = isDeviceOn(stateObj.state);
        const isConditioner = isAirConditioning(stateObj.attributes.hvac_modes);
        this.setColorCard(this._config.use_material_color, theme, isOffline, isOn, isConditioner);
        const config = {
            control_type: "thermometer",
            icon: this._config.icon,
            use_default_icon: this._config.use_default_icon,
            dual_icon: this._config.dual_icon,
            icon_on: this._config.icon_on,
            icon_off: this._config.icon_off,
        };
        return x `
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${getIcon(stateObj, config, this.hass)}"
              title="Climate"
              class="chevron"
              style="
                --mdc-icon-size: 20px;
                margin-top: -5px;
              "
            ></ha-icon>

            <span class="valve-name">${name}</span>
          </div>

          ${isOffline
            ? x `<ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`
            : x `<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 0px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon> `}
        </div>
        ${isOffline
            ? x `
              <div class="temperature-control offline-control">
                <div class="temperature-display offline">Offline</div>
              </div>
            `
            : x `
              <div class="temperature-control">
                <button
                  class="control-btn minus-btn"
                  @click=${() => this._adjustTemp(-this._config.decrease_temp |
                -DEFAULT_CONFIG$2.decrease_temp)}
                >
                  −
                </button>
                <div class="temperature-display" id="tempDisplay">
                  ${adjustTempAuto(this._config.fix_temperature, stateObj.attributes.temperature) //this._config.fix_temperature
            //? stateObj.attributes.temperature * 5
            //: stateObj.attributes.temperature
            }
                </div>
                <button
                  class="control-btn plus-btn"
                  @click=${() => this._adjustTemp(this._config.decrease_temp | DEFAULT_CONFIG$2.increase_temp)}
                >
                  +
                </button>
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${stateDisplay}</span>
              </div>
            `}
      </div>
    `;
    }
};
GoogleClimateCard.styles = i$4 `
    .temperature-card {
      background: var(--bsc-background);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
      box-shadow: none;
      position: relative;
      overflow: hidden;
    }

    .temperature-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bsc-background);
      border-radius: 24px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      position: relative;
      z-index: 2;
      pointer-events: visible;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .valve-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 2px;
    }

    .steam-icon {
      color: #888;
      font-size: 20px;
    }

    .valve-name {
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
      color: var(--bsc-icon-color);
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .chevron:hover {
      color: #ccc;
    }

    .temperature-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      position: relative;
      z-index: 2;
    }

    .control-btn {
      width: 80px;
      height: 55px;
      border-radius: 30px;
      background: var(--bsc-adjustTemp-color);
      border: none;
      color: var(--bsc-name-color);
      font-size: 32px;
      font-weight: 300;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      -webkit-tap-highlight-color: transparent;
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }

    .control-btn:active {
      transform: scale(0.98);
    }

    .temperature-display {
      /* color: #c3c3c3; */
      color: var(--bsc-name-color);
      font-size: 72px;
      font-weight: 450;
      text-align: center;
      line-height: 1;
    }

    .internal-temp {
      text-align: center;
      color: var(--bsc-internalTemp-color);
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 2;
      margin-bottom: 20px;
    }

    .offline {
      font-size: 65px;
    }

    .offline-control {
      justify-content: center;
      margin-bottom: 61px;
      margin-top: 30px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    @media (max-width: 420px) {
      .valve-name,
      .state {
        font-size: 15px;
      }
      .valve-name {
        line-height: 1.4;
      }

      .temperature-display {
        font-size: 60px;
      }

      .control-btn {
        width: 65px;
        height: 45px;
        font-size: 28px;
      }

      .offline {
        font-size: 55px;
      }

      .offline-control {
        margin-bottom: 59px;
      }
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleClimateCard.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleClimateCard.prototype, "_config", void 0);
GoogleClimateCard = __decorate([
    t$1("google-climate-card")
], GoogleClimateCard);

let GoogleClimateCardEditor = class GoogleClimateCardEditor extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_CONFIG$2;
        this._valueChanged = (ev) => {
            var _a, _b;
            const target = ev.target;
            const configValue = target.getAttribute("configValue");
            const value = ev instanceof CustomEvent && ((_a = ev.detail) === null || _a === void 0 ? void 0 : _a.value) !== undefined
                ? ev.detail.value
                : ((_b = target.checked) !== null && _b !== void 0 ? _b : target.value);
            if (!configValue || this._config[configValue] === value)
                return;
            this._config = Object.assign(Object.assign({}, this._config), { [configValue]: value });
            this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: this._config },
            }));
        };
    }
    setConfig(config) {
        this._config = Object.assign({}, config);
    }
    _entityChanged(ev) {
        var _a;
        const value = ev.detail.value;
        if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.entity) === value)
            return;
        this._config = Object.assign(Object.assign({}, this._config), { entity: value });
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: this._config },
        }));
    }
    async firstUpdated() {
        const helpers = await window.loadCardHelpers();
        const card = await helpers.createCardElement({
            type: "entities",
            entities: [],
        });
        await card.constructor.getConfigElement();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!this._config || !this.hass) {
            return x ``;
        }
        this._config.use_default_icon = (_a = this._config.use_default_icon) !== null && _a !== void 0 ? _a : true;
        this._config.use_material_color = (_b = this._config.use_material_color) !== null && _b !== void 0 ? _b : true;
        return x `
      <div class="form">
        <ha-textfield
          label="${localize("google_climate_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${localize("google_climate_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${(_c = this._config.use_material_color) !== null && _c !== void 0 ? _c : true}
            configValue="use_material_color"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${(_d = this._config.use_default_icon) !== null && _d !== void 0 ? _d : true}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon
            ? x ``
            : x `
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_climate_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${(_e = this._config.dual_icon) !== null && _e !== void 0 ? _e : false}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>

              ${this._config.dual_icon
                ? x `
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on || ""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                        placeholder="mdi:lightbulb-on"
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off || ""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                        placeholder="mdi:lightbulb-off"
                      ></ha-icon-picker>
                    </div>
                  `
                : x `
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon || ""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb"
                    />
                  `}
            `}

        <ha-textfield
          label="${localize("google_climate_card.increase_temp")}"
          .value=${this._config.increase_temp || 1}
          configValue="increase_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <ha-textfield
          label="${localize("google_climate_card.decrease_temp")}"
          .value=${this._config.decrease_temp || 1}
          configValue="decrease_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${localize("google_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${(_f = this._config.fix_temperature) !== null && _f !== void 0 ? _f : false}
            configValue="fix_temperature"
            @change=${this._valueChanged}
          />
        </div>-->

        <ha-select
          label="${localize("google_climate_card.fix_temperature")}"
          .value=${(_g = this._config.fix_temperature) !== null && _g !== void 0 ? _g : "false"}
          configValue="fix_temperature"
          @selected=${this._valueChanged}
          @closed=${(ev) => ev.stopPropagation()}
        >
          <mwc-list-item value="false">
            ${localize("google_climate_card.false")}
          </mwc-list-item>
          <mwc-list-item value="true">
            ${localize("google_climate_card.true")}
          </mwc-list-item>
          <mwc-list-item value="auto">
            ${localize("google_climate_card.auto")}
          </mwc-list-item>
        </ha-select>
      </div>
    `;
    }
};
GoogleClimateCardEditor.styles = i$4 `
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleClimateCardEditor.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleClimateCardEditor.prototype, "_config", void 0);
GoogleClimateCardEditor = __decorate([
    t$1("google-climate-card-editor")
], GoogleClimateCardEditor);

const DEFAULT_CONFIG$1 = {
    type: "custom:google-control-card",
    name: "Control Card",
    icon: "mdi:link",
    tap_action: {
        action: "more-info",
    },
    hold_action: {
        action: "more-info",
    },
};
function googleControlTemplate(config) {
    const name = config.name;
    const icon = config.icon;
    const entity = config.use_card_entity && config.entity ? "entity: " + config.entity : "";
    return `type: custom:button-card
name: ${name}
icon: ${icon}
${entity}
${tap_action(config.tap_action)}
${hold_action(config.hold_action)}
styles:
  grid:
    - grid-template-columns: 2fr 1fr 1fr
    - grid-template-rows: 2fr 0.1fr 2fr
    - grid-template-areas: |
        "i . ."
        ". . ."
        "n n n"
  card:
    - height: 140px
    - width: 140px
    - border-radius: 30px
    - margin-bottom: 1px
    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
    #- background-color: |
    #    [[[
    #      return hass.themes.darkMode ? '#1f2022' : '#eeedf2';
    #    ]]]
    - background-color: |
        [[[
          return hass.themes.darkMode ? "var(--md-sys-color-surface-container, '#1f2022')" : "var(--md-sys-color-surface-container, '#eeedf2')";
        ]]]
  name:
    - font-size: 1rem
    - font-weight: bold
    - justify-self: start
    - align-self: center
    - margin-left: 20px
    - width: 100px
    - text-align: left
    - white-space: normal
    - overflow-wrap: break-word
    - word-break: break-word
    - color: |
        [[[
          return hass.themes.darkMode ? "var(--md-sys-color-on-surface-variant,'#e3e3e5')" : "var(--md-sys-color-on-surface-variant,'#1b1b1d')";
        ]]]
  icon:
    - color: |
        [[[
          return hass.themes.darkMode ? "var(--md-sys-color-on-surface-variant,'#c4c7d0')" : "var(--md-sys-color-on-surface-variant,'#43484e')";
        ]]]
`;
}
function tap_action(tap_action) {
    if (tap_action == undefined)
        return `tap_action:
  action: none`;
    if (tap_action.action == "google-home")
        return `tap_action:
  action: url
  url_path: |
    [[[
      const ua = navigator.userAgent || "";
      if (ua.includes("Android")) {
        return "app://com.google.android.apps.chromecast.app";
      } else if (ua.includes("iPhone") || ua.includes("iPad")) {
        return "googlehome://";
      } else {
        return "https://home.google.com/";
      }
    ]]]`;
    if (tap_action.action == "settings")
        return `tap_action:
      action: navigate
      navigation_path: |
        [[[ 
          const isAdmin = hass.user?.is_admin;
          if (isAdmin) {
            return "/config/dashboard";
          } else {
            return "/profile";
          }
        ]]]`;
    if (tap_action.action == "navigate")
        return `tap_action:
      action: navigate
      navigation_path: ${tap_action.navigation_path}`;
    if (tap_action.action == "call-service")
        return `tap_action:
      action: call-service
      service: ${tap_action.service}
      service_data: ${tap_action.service_data}`;
    if (tap_action.action == "more-info")
        return `tap_action:
      action: more-info`;
    if (tap_action.action == "toggle")
        return `tap_action:
      action: toggle`;
    if (tap_action.action == "url")
        return `tap_action:
      action: url
      url_path: ${tap_action.url_path}`;
    return `tap_action:
  action: none`;
}
function hold_action(hold_action) {
    if (hold_action == undefined)
        return `hold_action:
  action: none`;
    if (hold_action.action == "google-home")
        return `hold_action:
  action: url
  url_path: |
    [[[
      const ua = navigator.userAgent || "";
      if (ua.includes("Android")) {
        return "app://com.google.android.apps.chromecast.app";
      } else if (ua.includes("iPhone") || ua.includes("iPad")) {
        return "googlehome://";
      } else {
        return "https://home.google.com/";
      }
    ]]]`;
    if (hold_action.action == "settings")
        return `hold_action:
      action: navigate
      navigation_path: |
        [[[ 
          const isAdmin = hass.user?.is_admin;
          if (isAdmin) {
            return "/config/dashboard";
          } else {
            return "/profile";
          }
        ]]]`;
    if (hold_action.action == "navigate")
        return `hold_action:
      action: navigate
      navigation_path: ${hold_action.navigation_path}`;
    if (hold_action.action == "call-service")
        return `hold_action:
      action: call-service
      service: ${hold_action.service}
      service_data: ${hold_action.service_data}`;
    if (hold_action.action == "more-info")
        return `hold_action:
      action: more-info`;
    if (hold_action.action == "toggle")
        return `hold_action:
      action: toggle`;
    if (hold_action.action == "url")
        return `hold_action:
      action: url
      url_path: ${hold_action.url_path}`;
    return `hold_action:
  action: none`;
}

let GoogleControlCard = class GoogleControlCard extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_CONFIG$1;
    }
    async setConfig(config) {
        if (!config) {
            throw new Error(localize("common.invalid_configuration"));
        }
        this._config = config;
    }
    static getStubConfig() {
        return {
            type: "custom:google-control-card",
            name: "Control Card",
            icon: "mdi:link",
            tap_action: {
                action: "more-info",
            },
            hold_action: {
                action: "more-info",
            },
        };
    }
    async updated(changedProps) {
        if (changedProps.has("hass")) {
            if (this._card) {
                this._card.hass = this.hass; // aggiorna la card esistente
            }
            else if (this._config) {
                const template = this.mapTemplate();
                const configJson = jsYaml.load(template);
                const helpers = await window.loadCardHelpers();
                const card = await helpers.createCardElement(configJson);
                card.classList.add("ripple-card");
                card.hass = this.hass;
                this._card = card;
                this.requestUpdate();
            }
        }
    }
    static getCardSize() {
        return 1;
    }
    static async getConfigElement() {
        return document.createElement("google-control-card-editor");
    }
    //private mapAction(actions: any) {
    //  if (actions == undefined) return actions;
    //
    //  // Crea una copia dell'oggetto
    //  const newActions = { ...actions };
    //
    //  if (newActions.action === "navigate") {
    //    newActions.navigation_path = this.evalTripleBrackets(
    //      newActions.navigation_path
    //    );
    //  }
    //
    //  if (newActions.action === "url") {
    //    newActions.url_path = this.evalTripleBrackets(newActions.url_path);
    //  }
    //
    //  return newActions;
    //}
    mapAction(actions) {
        if (!actions || typeof actions !== "object")
            return actions;
        const mapped = Object.assign({}, actions);
        for (const key of ["navigation_path", "url_path"]) {
            if (key in mapped && typeof mapped[key] === "string") {
                mapped[key] = this.evalTripleBrackets(mapped[key]);
            }
        }
        return mapped;
    }
    mapTemplate() {
        const name = getName(this._config, this.hass);
        // Cloniamo l’oggetto per renderlo modificabile
        const newConfig = Object.assign(Object.assign({}, this._config), { name });
        newConfig.tap_action = this.mapAction(newConfig.tap_action);
        newConfig.hold_action = this.mapAction(newConfig.hold_action);
        const text = googleControlTemplate(newConfig);
        return text;
    }
    evalTripleBrackets(input) {
        const tripleBracketRegex = /^\s*\[\[\[\s*([\s\S]*?)\s*\]\]\]\s*$/;
        const match = input.match(tripleBracketRegex);
        if (match) {
            try {
                const fn = new Function(match[1]);
                return fn();
            }
            catch (err) {
                console.error("Eval error:", err);
            }
        }
        return input;
    }
    render() {
        if (!this._card) {
            return x `<ha-card>Loading…</ha-card>`;
        }
        // Avvolgi il contenuto in un div che intercetta il click
        return x `${this._card}`;
    }
    createRenderRoot() {
        return this;
    }
};
GoogleControlCard.styles = i$4 `
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleControlCard.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleControlCard.prototype, "_config", void 0);
__decorate([
    r$2()
], GoogleControlCard.prototype, "_card", void 0);
GoogleControlCard = __decorate([
    t$1("google-control-card")
], GoogleControlCard);

//import { Action } from "../shared/utils";
let GoogleControlCardEditor = class GoogleControlCardEditor extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_CONFIG$1;
        this._configLoaded = false;
        this._valueChanged = (ev) => {
            var _a, _b;
            const target = ev.target;
            const configValue = target.getAttribute("configValue");
            const value = ev instanceof CustomEvent && ((_a = ev.detail) === null || _a === void 0 ? void 0 : _a.value) !== undefined
                ? ev.detail.value
                : ((_b = target.checked) !== null && _b !== void 0 ? _b : target.value);
            if (!configValue || this._config[configValue] === value)
                return;
            this._config = Object.assign(Object.assign({}, this._config), { [configValue]: value });
            this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: this._config },
            }));
        };
    }
    setConfig(config) {
        this._config = Object.assign({}, config);
        this._configLoaded = true;
    }
    _entityChanged(ev) {
        var _a;
        const value = ev.detail.value;
        if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.entity) === value)
            return;
        this._config = Object.assign(Object.assign({}, this._config), { entity: value });
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: this._config },
        }));
    }
    async firstUpdated() {
        const helpers = await window.loadCardHelpers();
        const card = await helpers.createCardElement({
            type: "entities",
            entities: [],
        });
        await card.constructor.getConfigElement();
    }
    _tapActionChanged() {
        return (key, value) => {
            if (!this._configLoaded)
                return;
            if (key === "action" && this._config.tap_action.action != value) {
                const defaultConfigs = {
                    toggle: { action: "toggle" },
                    "more-info": { action: "more-info" },
                    navigate: { action: "navigate", navigation_path: "/" },
                    url: { action: "url", url_path: "" },
                    none: { action: "none" },
                    "google-home": { action: "google-home" },
                    settings: { action: "settings" },
                };
                const action = defaultConfigs[value];
                this._config.tap_action = action;
            }
            else {
                if (key == "navigation_path") {
                    this._config.tap_action.navigation_path = value;
                }
                if (key == "url_path") {
                    this._config.tap_action.url_path = value;
                }
            }
            this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: this._config },
            }));
        };
    }
    _holdActionChanged() {
        return (key, value) => {
            if (!this._configLoaded)
                return;
            if (key === "action" && this._config.hold_action.action != value) {
                const defaultConfigs = {
                    toggle: { action: "toggle" },
                    "more-info": { action: "more-info" },
                    navigate: { action: "navigate", navigation_path: "/" },
                    url: { action: "url", url_path: "" },
                    none: { action: "none" },
                    "google-home": { action: "google-home" },
                    settings: { action: "settings" },
                };
                const action = defaultConfigs[value];
                this._config.hold_action = action;
            }
            else {
                if (key == "navigation_path") {
                    this._config.hold_action.navigation_path = value;
                }
                if (key == "url_path") {
                    this._config.hold_action.url_path = value;
                }
            }
            this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: this._config },
            }));
        };
    }
    render() {
        var _a, _b, _c;
        if (!this._configLoaded || !this.hass)
            return x ``;
        this._config.use_default_icon = (_a = this._config.use_default_icon) !== null && _a !== void 0 ? _a : true;
        this._config.use_card_entity = (_b = this._config.use_card_entity) !== null && _b !== void 0 ? _b : false;
        const renderActionEditor = (action, onChange) => {
            var _a;
            const currentAction = (_a = action === null || action === void 0 ? void 0 : action.action) !== null && _a !== void 0 ? _a : "more-info";
            //console.log("CurrentAction", currentAction);
            return x `
        <ha-select
          style="display: block;"
          label="Azione"
          .value=${currentAction}
          @selected=${(e) => {
                const target = e.target;
                const newAction = target.value;
                onChange("action", newAction);
            }}
          @closed=${(ev) => ev.stopPropagation()}
        >
          <mwc-list-item value="more-info">
            ${localize("google_control_card.actions.more_info")}
          </mwc-list-item>
          <mwc-list-item value="toggle">
            ${localize("google_control_card.actions.toggle")}
          </mwc-list-item>
          <mwc-list-item value="navigate">
            ${localize("google_control_card.actions.navigate")}
          </mwc-list-item>
          <mwc-list-item value="url">
            ${localize("google_control_card.actions.url")}
          </mwc-list-item>
          <mwc-list-item value="none">
            ${localize("google_control_card.actions.none")}
          </mwc-list-item>
          <mwc-list-item value="google-home">
            ${localize("google_control_card.actions.google_home")}
          </mwc-list-item>
          <mwc-list-item value="settings">
            ${localize("google_control_card.actions.settings")}
          </mwc-list-item>
        </ha-select>

        ${currentAction === "navigate"
                ? x `
              <ha-textfield
                style="display: block; margin-top: 10px;"
                label="Percorso di navigazione"
                .value=${(action === null || action === void 0 ? void 0 : action.navigation_path) ||
                    ""}
                @input=${(e) => onChange("navigation_path", e.target.value)}
              ></ha-textfield>
            `
                : ""}
        ${currentAction === "url"
                ? x `
              <ha-textfield
                style="display: block; margin-top: 10px;"
                label="URL"
                .value=${action === null || action === void 0 ? void 0 : action.url_path}
                @input=${(e) => onChange("url_path", e.target.value)}
              ></ha-textfield>
            `
                : ""}
        <!-- Aggiungi altri campi dinamici se servono per call-service ecc. -->
      `;
        };
        return x `
      <div class="form">
        <ha-textfield
          label="${localize("google_control_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_card_entity
            ? x `
              <ha-entity-picker
                label="${localize("google_control_card.entity")}"
                .value=${this._config.entity || ""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${this._entityChanged}
                required
              ></ha-entity-picker>
            `
            : ""}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${!this._config.use_default_icon
            ? x `
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${(_c = this._config.dual_icon) !== null && _c !== void 0 ? _c : false}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>
              ${this._config.dual_icon
                ? x `
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on || ""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off || ""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                    </div>
                  `
                : x `
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon || ""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                  `}
            `
            : ""}

        <div>
          <h3>${localize("google_control_card.actions.press")}</h3>
          ${renderActionEditor(this._config.tap_action, this._tapActionChanged())}
        </div>

        <div>
          <h3>${localize("google_control_card.actions.hold")}</h3>
          ${renderActionEditor(this._config.hold_action, this._holdActionChanged())}
        </div>
      </div>
    `;
    }
};
/*render(): TemplateResult {
  if (!this._config || !this.hass) return html``;

  this._config.use_default_icon = this._config.use_default_icon ?? true;
  this._config.use_default_toggle = this._config.use_default_toggle ?? true;
  this._config.use_card_entity = this._config.use_card_entity ?? false;

  const tapAction = this._config.tap_action || { action: "toggle" };
  const holdAction = this._config.hold_action || { action: "more-info" };

  const renderActionEditor = (
    action: any,
    onChange: (e: CustomEvent) => void
  ) => html`
    <ha-select
      style="display: block;"
      label="Action"
      .value=${action.action}
      @selected=${this._valueChanged}
      @closed=${(ev: Event) => ev.stopPropagation()}
    >
      ${["more-info", "toggle", "navigate", "url", "assist", "none"].map(
        (a) => html`<mwc-list-item .value=${a}>${a}</mwc-list-item>`
      )}
    </ha-select>

    ${action.action === "navigate"
      ? html`
          <ha-textfield
            label="Navigation Path"
            .value=${action.navigation_path || ""}
            @input=${(e: Event) =>
              onChange(
                new CustomEvent("value-changed", {
                  detail: {
                    value: {
                      navigation_path: (e.target as HTMLInputElement).value,
                    },
                  },
                })
              )}
          ></ha-textfield>
        `
      : ""}
    ${action.action === "url"
      ? html`
          <ha-textfield
            label="URL Path"
            .value=${action.url_path || ""}
            @input=${(e: Event) =>
              onChange(
                new CustomEvent("value-changed", {
                  detail: {
                    value: { url_path: (e.target as HTMLInputElement).value },
                  },
                })
              )}
          ></ha-textfield>
        `
      : ""}
    ${action.action === "assist"
      ? html`
          <ha-textfield
            label="Pipeline ID"
            .value=${action.pipeline_id || ""}
            @input=${(e: Event) =>
              onChange(
                new CustomEvent("value-changed", {
                  detail: {
                    value: {
                      pipeline_id: (e.target as HTMLInputElement).value,
                    },
                  },
                })
              )}
          ></ha-textfield>
          <ha-switch
            .checked=${action.start_listening ?? false}
            @change=${(e: Event) =>
              onChange(
                new CustomEvent("value-changed", {
                  detail: {
                    value: {
                      start_listening: (e.target as HTMLInputElement).checked,
                    },
                  },
                })
              )}
          >
            Start Listening
          </ha-switch>
        `
      : ""}
    ${action.action === "more-info"
      ? html`
          <ha-textfield
            label="Entity Override"
            .value=${action.entity || ""}
            @input=${(e: Event) =>
              onChange(
                new CustomEvent("value-changed", {
                  detail: {
                    value: { entity: (e.target as HTMLInputElement).value },
                  },
                })
              )}
          ></ha-textfield>
        `
      : ""}
  `;

  return html`
    <div class="form">
      <ha-textfield
        label="${localize("google_control_card.name")}"
        .value=${this._config.name || ""}
        configValue="name"
        @input=${this._valueChanged}
        placeholder="e.g. Cooler"
      ></ha-textfield>

      <div class="switch-row">
        <span class="switch-label"
          >${localize("google_control_card.entity_card")}</span
        >
        <ha-switch
          .checked=${this._config.use_card_entity}
          configValue="use_card_entity"
          @change=${this._valueChanged}
        />
      </div>

      ${this._config.use_card_entity
        ? html`
            <ha-entity-picker
              label="${localize("google_control_card.entity")}"
              .value=${this._config.entity || ""}
              .hass=${this.hass}
              .includeDomains=${["climate"]}
              allow-custom-entity
              configValue="entity"
              @value-changed=${this._entityChanged}
              required
            ></ha-entity-picker>
          `
        : ""}

      <div class="switch-row">
        <span class="switch-label"
          >${localize("google_control_card.dual_icon.default")}</span
        >
        <ha-switch
          .checked=${this._config.use_default_icon}
          configValue="use_default_icon"
          @change=${this._valueChanged}
        />
      </div>

      ${!this._config.use_default_icon
        ? html`
            <div class="switch-row">
              <span class="switch-label"
                >${localize("google_control_card.dual_icon.options")}</span
              >
              <ha-switch
                .checked=${this._config.dual_icon ?? false}
                configValue="dual_icon"
                @change=${this._valueChanged}
              />
            </div>
            ${this._config.dual_icon
              ? html`
                  <div class="dual-icons">
                    <ha-icon-picker
                      label="Icon ON"
                      .value=${this._config.icon_on || ""}
                      configValue="icon_on"
                      @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                    <ha-icon-picker
                      label="Icon OFF"
                      .value=${this._config.icon_off || ""}
                      configValue="icon_off"
                      @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                  </div>
                `
              : html`
                  <ha-icon-picker
                    label="Icon"
                    .value=${this._config.icon || ""}
                    configValue="icon"
                    @value-changed=${this._valueChanged}
                  ></ha-icon-picker>
                `}
          `
        : ""}

      <div class="switch-row">
        <span class="switch-label"
          >${localize("google_button_card.toggle.title")}</span
        >
        <ha-switch
          .checked=${this._config.use_default_toggle}
          configValue="use_default_toggle"
          @change=${this._valueChanged}
        />
      </div>

      ${!this._config.use_default_toggle
        ? html`
            <div>
              <h3>Tap Action</h3>
              ${renderActionEditor(tapAction, (e: CustomEvent) =>
                this._tapActionChanged(e)
              )}
            </div>

            <div>
              <h3>Hold Action</h3>
              ${renderActionEditor(
                holdAction,
                this._holdActionChanged.bind(this)
              )}
            </div>
          `
        : ""}
    </div>
  `;
}*/
GoogleControlCardEditor.styles = i$4 `
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .action-editor ha-textarea {
      width: 100%;
      font-family: monospace;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleControlCardEditor.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleControlCardEditor.prototype, "_config", void 0);
__decorate([
    r$2()
], GoogleControlCardEditor.prototype, "_configLoaded", void 0);
GoogleControlCardEditor = __decorate([
    t$1("google-control-card-editor")
], GoogleControlCardEditor);

let GoogleButtonCardEditor = class GoogleButtonCardEditor extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_BTN_CONFIG;
        this._valueChanged = (ev) => {
            var _a, _b;
            const target = ev.target;
            const configValue = target.getAttribute("configValue");
            const value = ev instanceof CustomEvent && ((_a = ev.detail) === null || _a === void 0 ? void 0 : _a.value) !== undefined
                ? ev.detail.value
                : ((_b = target.checked) !== null && _b !== void 0 ? _b : target.value);
            if (!configValue || this._config[configValue] === value)
                return;
            this._config = Object.assign(Object.assign({}, this._config), { [configValue]: value });
            this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: this._config },
            }));
        };
    }
    setConfig(config) {
        this._config = Object.assign({}, config);
    }
    _entityChanged(ev) {
        var _a;
        const value = ev.detail.value;
        if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.entity) === value)
            return;
        this._config = Object.assign(Object.assign({}, this._config), { entity: value });
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: this._config },
        }));
    }
    async firstUpdated() {
        const helpers = await window.loadCardHelpers();
        const card = await helpers.createCardElement({
            type: "entities",
            entities: [],
        });
        await card.constructor.getConfigElement();
    }
    setEntityFilter() {
        switch (this._config.control_type) {
            case ControlType.THERMOMETER:
                return ["climate"];
            case ControlType.SCENE:
                return ["scene", "automation"];
            case ControlType.MEDIA_PLAYER:
                return ["media_player"];
            default:
                return undefined;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (!this._config || !this.hass) {
            return x ``;
        }
        this._config.use_default_icon = (_a = this._config.use_default_icon) !== null && _a !== void 0 ? _a : true;
        this._config.use_default_toggle = (_b = this._config.use_default_toggle) !== null && _b !== void 0 ? _b : true;
        this._config.use_default_text = (_c = this._config.use_default_text) !== null && _c !== void 0 ? _c : true;
        return x `
      <div class="form">
        <ha-select
          label="${localize("google_button_card.control_type")}"
          .value=${(_d = this._config.control_type) !== null && _d !== void 0 ? _d : "generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${(ev) => ev.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${localize("google_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${localize("google_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${localize("google_button_card.type.scene")}
          </mwc-list-item>
          <mwc-list-item value="media_player">
            ${localize("google_button_card.type.media")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${localize("google_button_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="Entity"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_button_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${(_e = this._config.use_default_icon) !== null && _e !== void 0 ? _e : true}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon
            ? x ``
            : x `
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_button_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${(_f = this._config.dual_icon) !== null && _f !== void 0 ? _f : false}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>

              ${this._config.dual_icon
                ? x `
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on || ""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                        placeholder="mdi:lightbulb-on"
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off || ""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                        placeholder="mdi:lightbulb-off"
                      ></ha-icon-picker>
                    </div>
                  `
                : x `
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon || ""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb"
                    />
                  `}
            `}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_button_card.dual_text.default")}</span
          >
          <ha-switch
            .checked=${(_g = this._config.use_default_text) !== null && _g !== void 0 ? _g : true}
            configValue="use_default_text"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_text
            ? x ``
            : x `
              <div class="dual-icons">
                <ha-textfield
                  label="${localize("google_button_card.dual_text.text_on")}"
                  .value=${this._config.text_on || ""}
                  configValue="text_on"
                  @input=${this._valueChanged}
                  placeholder="On"
                ></ha-textfield>
                <ha-textfield
                  label="${localize("google_button_card.dual_text.text_off")}"
                  .value=${this._config.text_off || ""}
                  configValue="text_off"
                  @input=${this._valueChanged}
                  placeholder="Off"
                ></ha-textfield>
              </div>
            `}
        ${this._config.control_type != ControlType.THERMOMETER
            ? x ``
            : x ` <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${(_h = this._config.use_material_color) !== null && _h !== void 0 ? _h : false}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <!--<div class="switch-row">
                <span class="switch-label"
                  >${localize("google_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${(_j = this._config.fix_temperature) !== null && _j !== void 0 ? _j : false}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>-->
              <ha-select
                label="${localize("google_climate_card.fix_temperature")}"
                .value=${(_k = this._config.fix_temperature) !== null && _k !== void 0 ? _k : false}
                configValue="fix_temperature"
                @selected=${this._valueChanged}
                @closed=${(ev) => ev.stopPropagation()}
              >
                <mwc-list-item value="false">
                  ${localize("google_climate_card.false")}
                </mwc-list-item>
                <mwc-list-item value="true">
                  ${localize("google_climate_card.true")}
                </mwc-list-item>
                <mwc-list-item value="auto">
                  ${localize("google_climate_card.auto")}
                </mwc-list-item>
              </ha-select>`}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_button_card.toggle.title")}</span
          >
          <ha-switch
            .checked=${(_l = this._config.use_default_toggle) !== null && _l !== void 0 ? _l : true}
            configValue="use_default_toggle"
            @change=${this._valueChanged}
          />
        </div>
        ${this._config.use_default_toggle
            ? x ``
            : x `<ha-select
                label="${localize("google_button_card.toggle.press")}"
                .value=${this._config.tap_action || Action.CLICK}
                configValue="tap_action"
                @selected=${this._valueChanged}
                @closed=${(ev) => ev.stopPropagation()}
              >
                <mwc-list-item value="${Action.CLICK}">
                  ${localize("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="${Action.HOLD}">
                  ${localize("google_button_card.toggle.info")}
                </mwc-list-item>
              </ha-select>

              <ha-select
                label="${localize("google_button_card.toggle.hold")}"
                .value=${this._config.hold_action || Action.HOLD}
                configValue="hold_action"
                @selected=${this._valueChanged}
                @closed=${(ev) => ev.stopPropagation()}
              >
                <mwc-list-item value="${Action.CLICK}">
                  ${localize("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="${Action.HOLD}">
                  ${localize("google_button_card.toggle.info")}
                </mwc-list-item>
              </ha-select>`}
      </div>
    `;
    }
};
GoogleButtonCardEditor.styles = i$4 `
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleButtonCardEditor.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleButtonCardEditor.prototype, "_config", void 0);
GoogleButtonCardEditor = __decorate([
    t$1("google-button-card-editor")
], GoogleButtonCardEditor);

let GoogleSliderCardEditor = class GoogleSliderCardEditor extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_CONFIG$4;
    }
    setConfig(config) {
        this._config = Object.assign({}, config);
    }
    _valueChanged(ev) {
        var _a, _b;
        const target = ev.target;
        const configValue = target.getAttribute("configValue");
        const value = ev instanceof CustomEvent && ((_a = ev.detail) === null || _a === void 0 ? void 0 : _a.value) !== undefined
            ? ev.detail.value
            : ((_b = target.checked) !== null && _b !== void 0 ? _b : target.value);
        if (!configValue || this._config[configValue] === value)
            return;
        this._config = Object.assign(Object.assign({}, this._config), { [configValue]: value });
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: this._config },
        }));
    }
    _entityChanged(ev) {
        var _a;
        const value = ev.detail.value;
        if (((_a = this._config) === null || _a === void 0 ? void 0 : _a.entity) === value)
            return;
        this._config = Object.assign(Object.assign({}, this._config), { entity: value });
        this.dispatchEvent(new CustomEvent("config-changed", {
            detail: { config: this._config },
        }));
    }
    async firstUpdated() {
        const helpers = await window.loadCardHelpers();
        const card = await helpers.createCardElement({
            type: "entities",
            entities: [],
        });
        await card.constructor.getConfigElement();
    }
    setEntityFilter() {
        switch (this._config.control_type) {
            case ControlType.THERMOMETER:
                return ["climate"];
            case ControlType.SCENE:
                return ["scene", "automation"];
            case ControlType.MEDIA_PLAYER:
                return ["media_player"];
            default:
                return undefined;
        }
    }
    renderNotWork() {
        var _a, _b;
        if (!this._config || !this.hass)
            return x ``;
        return x `
      <div class="form">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.entity || ""}
          .includeDomains=${["light"]}
          allow-custom-entity
          label="Entity"
          configValue="entity"
          @value-changed=${this._entityChanged}
        ></ha-entity-picker>

        <ha-textfield
          label="${localize("google_slider_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
        ></ha-textfield>

        <ha-select
          label="${localize("google_slider_card.attribute")}"
          .value=${this._config.attribute || "brightness"}
          configValue="attribute"
          @selected=${this._valueChanged}
          @closed=${(ev) => ev.stopPropagation()}
        >
          <mwc-list-item value="brightness">Brightness</mwc-list-item>
          <mwc-list-item value="red">Red</mwc-list-item>
          <mwc-list-item value="green">Green</mwc-list-item>
          <mwc-list-item value="blue">Blue</mwc-list-item>
          <mwc-list-item value="hue">Hue</mwc-list-item>
          <mwc-list-item value="saturation">Saturation</mwc-list-item>
        </ha-select>

        <ha-switch
          .checked=${(_a = this._config.show_percentage) !== null && _a !== void 0 ? _a : true}
          configValue="show_percentage"
          @change=${this._valueChanged}
        >
        </ha-switch>
        <span>${localize("google_slider_card.show_percentage")}</span>

        <ha-switch
          .checked=${(_b = this._config.bold_text) !== null && _b !== void 0 ? _b : false}
          configValue="bold_text"
          @change=${this._valueChanged}
        >
        </ha-switch>
        <span>${localize("google_slider_card.bold_text")}</span>
      </div>
    `;
    }
    render() {
        var _a, _b;
        if (!this._config || !this.hass) {
            return x ``;
        }
        return x `
      <div class="form">
        <ha-textfield
          label="${localize("google_slider_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${localize("google_slider_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${["light"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${localize("google_slider_card.icon")}"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${this._valueChanged}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${(_a = this._config.show_percentage) !== null && _a !== void 0 ? _a : true}
            configValue="show_percentage"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${(_b = this._config.bold_text) !== null && _b !== void 0 ? _b : false}
            configValue="bold_text"
            @change=${this._valueChanged}
          />
        </div>
      </div>
    `;
    }
};
GoogleSliderCardEditor.styles = i$4 `
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleSliderCardEditor.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleSliderCardEditor.prototype, "_config", void 0);
GoogleSliderCardEditor = __decorate([
    t$1("google-slider-card-editor")
], GoogleSliderCardEditor);

const DEFAULT_CONFIG = {
    type: "custom:google-control-card",
    on_text: "Lights on",
    off_text: "Lights off",
};
function googleTemplate(config) {
    return `type: custom:mod-card
style: |
  ha-card {
    margin-bottom: 0px;
  }
card:
  type: vertical-stack
  cards:
    - type: custom:mod-card
      style:
        hui-horizontal-stack-card:
          $: |
            #root > button-card {
              margin: 0px;
            }
      card:
        type: horizontal-stack
        cards:
          - type: custom:button-card
            show_icon: false
            show_label: false
            show_name: true
            triggers_update: all
            name: |
              [[[
                return '${config.on_text}'
              ]]]
            styles:
              card:
                - height: 65px
                - padding: 0px
                - margin: 0px
                - border-top-left-radius: 999vh
                - border-bottom-left-radius: 999vh
                - border-top-right-radius: 0vh
                - border-bottom-right-radius: 0vh
                - border: 1px solid
                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)
                - font-size: 15px
                - font-weight: 600
                - border-color: |
                    [[[
                      const on = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length > 0;
                      //return on
                      //  ? (hass.themes.darkMode ? "#fae093": "#745b00")
                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');
                      return on
                        ? (hass.themes.darkMode ? "#fae093": "#745b00")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
                - background-color: |
                    [[[
                      const on = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length > 0;
                      //return on
                      //  ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');
                      return on
                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
              name:
                - color: |
                    [[[
                      const on = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length > 0;
                      //return on
                      //  ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                      //  : (hass.themes.darkMode ? "#e3e3e5" : 'var(--md-sys-color-on-surface-variant)');
                      return on
                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                        : 'var(--md-sys-color-on-surface-variant)';
                    ]]]
            tap_action:
              action: call-service
              service: light.turn_on
              data:
                entity_id: all
          - type: custom:button-card
            show_icon: false
            show_label: false
            show_name: true
            triggers_update: all
            name: |
              [[[
                return '${config.off_text}'
              ]]]
            styles:
              card:
                - height: 65px
                - padding: 0px
                - margin: 0px
                - border-top-right-radius: 999vh
                - border-bottom-right-radius: 999vh
                - border-top-left-radius: 0vh
                - border-bottom-left-radius: 0vh
                - border: 1px solid
                - font-size: 15px
                - font-weight: 600
                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)
                - border-color: |
                    [[[
                      const allOff = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length === 0;
                      //return allOff
                      //  ? (hass.themes.darkMode ? "#fae093": "#745b00")
                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');
                      return allOff
                        ? (hass.themes.darkMode ? "#fae093": "#745b00")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
                - background-color: |
                    [[[
                      const allOff = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length === 0;
                      //return allOff
                      //  ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');
                      return allOff
                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                        : "var(--md-sys-color-surface-container)";
                    ]]]
              name:
                - color: |
                    [[[
                      const allOff = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length === 0;
                      //return allOff
                      //  ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                      //  : (hass.themes.darkMode ? "#e3e3e5" : 'var(--md-sys-color-on-surface-variant)');
                      return allOff
                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                        : 'var(--md-sys-color-on-surface-variant)';
                    ]]]
            tap_action:
              action: call-service
              service: light.turn_off
              data:
                entity_id: all
`;
}

let GoogleLightsCard = class GoogleLightsCard extends i$1 {
    static getStubConfig() {
        return {
            type: "custom:google-lights-card",
            on_text: "Lights on",
            off_text: "Lights off",
        };
    }
    async setConfig(config) {
        if (!config)
            throw new Error("Invalid configuration");
        this._config = config;
    }
    async updated(changedProps) {
        if (changedProps.has("hass")) {
            if (this._card) {
                this._card.hass = this.hass; // aggiorna la card esistente
            }
            else if (this._config) {
                const template = this.mapTemplate(this._config);
                const configJson = jsYaml.load(template);
                const helpers = await window.loadCardHelpers();
                const card = await helpers.createCardElement(configJson);
                card.classList.add("ripple-card");
                card.hass = this.hass;
                this._card = card;
                this.requestUpdate();
            }
            console.log("This LOG is for debug purpose, Google Lights");
            console.log(this.hass);
        }
    }
    static getCardSize() {
        return 1;
    }
    static async getConfigElement() {
        return document.createElement("google-lights-card-editor");
    }
    mapTemplate(config) {
        const text = googleTemplate(config);
        return text;
    }
    _handleClick(event) {
        const target = event.target;
        // Cerca l'elemento più vicino che abbia una classe riconoscibile, ad es. 'button-card'
        const card = target.closest(".ripple-card");
        if (card) {
            applyRippleEffect(card, event);
        }
    }
    render() {
        if (!this._card) {
            return x `<ha-card>Loading…</ha-card>`;
        }
        // Avvolgi il contenuto in un div che intercetta il click
        return x `
      <div style="margin: 0px 0px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `;
    }
    createRenderRoot() {
        return this;
    }
};
GoogleLightsCard.styles = i$4 `
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleLightsCard.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleLightsCard.prototype, "_config", void 0);
__decorate([
    r$2()
], GoogleLightsCard.prototype, "_card", void 0);
GoogleLightsCard = __decorate([
    t$1("google-lights-card")
], GoogleLightsCard);

let GoogleLightsCardEditor = class GoogleLightsCardEditor extends i$1 {
    constructor() {
        super(...arguments);
        this._config = DEFAULT_CONFIG;
        this._valueChanged = (ev) => {
            var _a, _b;
            const target = ev.target;
            const configValue = target.getAttribute("configValue");
            const value = ev instanceof CustomEvent && ((_a = ev.detail) === null || _a === void 0 ? void 0 : _a.value) !== undefined
                ? ev.detail.value
                : ((_b = target.checked) !== null && _b !== void 0 ? _b : target.value);
            if (!configValue || this._config[configValue] === value)
                return;
            this._config = Object.assign(Object.assign({}, this._config), { [configValue]: value });
            this.dispatchEvent(new CustomEvent("config-changed", {
                detail: { config: this._config },
            }));
        };
    }
    setConfig(config) {
        this._config = Object.assign({}, config);
    }
    async firstUpdated() {
        const helpers = await window.loadCardHelpers();
        const card = await helpers.createCardElement({
            type: "entities",
            entities: [],
        });
        await card.constructor.getConfigElement();
    }
    render() {
        if (!this._config || !this.hass) {
            return x ``;
        }
        return x `
      <div class="form">
        <span class="text-label"
          >${localize("google_lights_card.on_text")}</span
        >
        <ha-textfield
          label="${localize("google_lights_card.on_text")}"
          .value=${this._config.on_text || ""}
          configValue="on_text"
          @input=${this._valueChanged}
          placeholder="e.g. Lights On"
        ></ha-textfield>

        <span class="text-label"
          >${localize("google_lights_card.off_text")}</span
        >
        <ha-textfield
          label="${localize("google_lights_card.off_text")}"
          .value=${this._config.off_text || ""}
          configValue="off_text"
          @input=${this._valueChanged}
          placeholder="e.g. Lights Off"
        ></ha-textfield>
      </div>
    `;
    }
};
GoogleLightsCardEditor.styles = i$4 `
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleLightsCardEditor.prototype, "hass", void 0);
__decorate([
    r$2()
], GoogleLightsCardEditor.prototype, "_config", void 0);
GoogleLightsCardEditor = __decorate([
    t$1("google-lights-card-editor")
], GoogleLightsCardEditor);

function getGoogleHomeURL() {
    const ua = navigator.userAgent || "";
    if (/Android/i.test(ua)) {
        // Su Android prova ad aprire l'app nativa
        return "app://com.google.android.apps.chromecast.app";
    }
    else if (/iPhone|iPad|iPod/i.test(ua)) {
        // Su iOS usa lo schema URL dell'app
        return "googlehome://";
    }
    else {
        // Browser desktop o altri dispositivi
        return "https://home.google.com/";
    }
}
function getYouTubeURL() {
    const ua = navigator.userAgent || "";
    if (/Android/i.test(ua)) {
        // Su Android prova ad aprire l'app nativa
        return "app://com.google.android.youtube";
    }
    else if (/iPhone|iPad|iPod/i.test(ua)) {
        // Su iOS usa lo schema URL dell'app
        return "youtube://";
    }
    else {
        // Browser desktop o altri dispositivi
        return "https://www.youtube.com/";
    }
}
function getSpotifyURL() {
    const ua = navigator.userAgent || "";
    if (/Android/i.test(ua)) {
        // Intent per aprire Spotify app su Android
        return "app://com.spotify.music";
    }
    else if (/iPhone|iPad|iPod/i.test(ua)) {
        // URL schema per Spotify su iOS
        return "spotify://";
    }
    else {
        // Fallback per desktop / browser
        return "https://open.spotify.com/";
    }
}

let GoogleMediaOverlay = class GoogleMediaOverlay extends i$1 {
    constructor() {
        super(...arguments);
        this._closing = false;
        this._volume = 0; // 0..1
        this._progress = 0; // 0..100
        this._isPlaying = false; // Rimosso @property
        this._isOff = true;
        this._isConnected = false;
        this._isDragging = false;
        // Variabili private per animazioni
        this._animationFrameId = null;
        this._lastPosition = 0; // secondi
        this._lastDuration = 1; // secondi
        this._lastFrameTime = 0; // ms, usato dall'animazione
        this._dragPositionSeconds = 0; // ms, usato dall'animazione
    }
    _close() {
        this._closing = true;
        setTimeout(() => {
            this.dispatchEvent(new CustomEvent("close-overlay", {
                bubbles: true,
                composed: true,
            }));
        }, 200);
    }
    _callService(service, data = {}) {
        if (!this.entity) {
            console.error("No entity defined for service call");
            return;
        }
        try {
            this.hass.callService("media_player", service, Object.assign({ entity_id: this.entity }, data));
        }
        catch (error) {
            console.error("Error calling service:", error);
        }
    }
    // Helper: calcola la posizione "corrente" usando media_position_updated_at
    _computeServerPosition(stateObj) {
        var _a, _b;
        const media_pos = Number((_a = stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes) === null || _a === void 0 ? void 0 : _a.media_position) || 0;
        const updated_at = (_b = stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes) === null || _b === void 0 ? void 0 : _b.media_position_updated_at;
        // se non è presente updated_at, ritorna media_pos come fallback
        if (!updated_at)
            return media_pos;
        const updatedMs = Date.parse(updated_at);
        if (isNaN(updatedMs))
            return media_pos;
        const nowMs = Date.now();
        // elapsed in secondi dal momento in cui HA ha calcolato media_position
        const elapsed = Math.max(0, (nowMs - updatedMs) / 1000);
        return media_pos + elapsed;
    }
    updated(changedProperties) {
        var _a, _b, _c;
        super.updated(changedProperties);
        if (!this.hass || !this.entity)
            return;
        const stateObj = (_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.states) === null || _b === void 0 ? void 0 : _b[this.entity];
        if (!stateObj)
            return;
        // Solo aggiorna se è cambiato hass o entity (evita loop)
        if (changedProperties.has("hass")) {
            // Aggiorna volume
            const newVolume = (_c = stateObj.attributes.volume_level) !== null && _c !== void 0 ? _c : 0;
            if (Math.abs(newVolume - this._volume) > 0.01) {
                this._volume = newVolume;
            }
            // Aggiorna progress
            const duration = Number(stateObj.attributes.media_duration) || 1;
            const serverPos = this._computeServerPosition(stateObj);
            this._lastDuration = Math.max(duration, 1);
            this._lastPosition = Math.min(serverPos, this._lastDuration);
            const newProgress = Math.round((this._lastPosition / this._lastDuration) * 1000) / 10;
            if (Math.abs(newProgress - this._progress) > 0.1) {
                this._progress = newProgress;
            }
            // Aggiorna stato riproduzione
            this.changePlyingState(stateObj);
            // Aggiorna stati connessione
            this._isConnected = ["playing", "paused", "idle"].includes(stateObj.state);
            this._isOff = stateObj.state === "off";
            this._lastFrameTime = Date.now();
        }
    }
    changePlyingState(stateObj) {
        const isPlaying = stateObj.state === "playing";
        const wasPlaying = this._isPlaying;
        if (isPlaying !== wasPlaying) {
            this._isPlaying = isPlaying;
            // Gestisci animazione
            if (this._isPlaying &&
                this._animationFrameId === null &&
                !this._isDragging) {
                this._animateProgress();
            }
            else if (!this._isPlaying && this._animationFrameId !== null) {
                cancelAnimationFrame(this._animationFrameId);
                this._animationFrameId = null;
            }
        }
    }
    // Animazione fluida basata sul riferimento temporale riallineato
    _animateProgress() {
        const step = () => {
            // se siamo in drag o non più in play interrompi l'animazione
            if (!this._isPlaying || this._isDragging) {
                this._animationFrameId = null;
                return;
            }
            const now = Date.now();
            const delta = (now - this._lastFrameTime) / 1000; // secondi
            this._lastFrameTime = now;
            this._lastPosition = Math.min(this._lastPosition + delta, this._lastDuration);
            this._progress =
                (this._lastPosition / Math.max(1, this._lastDuration)) * 100;
            // Forza aggiornamento dell'UI per la barra di progresso
            this.requestUpdate();
            this._animationFrameId = requestAnimationFrame(step);
        };
        if (this._animationFrameId === null) {
            this._lastFrameTime = Date.now();
            this._animationFrameId = requestAnimationFrame(step);
        }
    }
    // Modifica il seek per essere più stabile
    _startSeek(e) {
        e.preventDefault();
        const progressBar = this.renderRoot.querySelector(".progress-bar");
        if (!progressBar)
            return;
        this._isDragging = true;
        const getClientX = (ev) => ev.touches ? ev.touches[0].clientX : ev.clientX;
        const updateProgress = (ev) => {
            var _a, _b, _c;
            const rect = progressBar.getBoundingClientRect();
            const clientX = getClientX(ev);
            let p = (clientX - rect.left) / rect.width;
            p = Math.min(Math.max(p, 0), 1);
            // durata corrente (prendi da hass)
            const stateObj = (_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.states) === null || _b === void 0 ? void 0 : _b[this.entity];
            const duration = Number((_c = stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes) === null || _c === void 0 ? void 0 : _c.media_duration) || 1;
            // aggiorno le variabili locali (visuale live)
            this._dragPositionSeconds = p * duration;
            this._progress = p * 100;
            // aggiorna visivamente subito (no aspettare HA)
            const fill = progressBar.querySelector(".progress-fill");
            const thumb = progressBar.querySelector(".progress-thumb");
            if (fill)
                fill.style.width = `${this._progress}%`;
            if (thumb)
                thumb.style.left = `calc(${this._progress}% - 6px)`;
        };
        const moveHandler = (ev) => updateProgress(ev);
        const upHandler = (ev) => {
            var _a, _b, _c;
            // ultimo aggiornamento visivo
            updateProgress(ev);
            const stateObj = (_b = (_a = this.hass) === null || _a === void 0 ? void 0 : _a.states) === null || _b === void 0 ? void 0 : _b[this.entity];
            const duration = Number((_c = stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes) === null || _c === void 0 ? void 0 : _c.media_duration) || 1;
            // effettua il seek reale
            const targetSeconds = this._dragPositionSeconds;
            this._callService("media_seek", { seek_position: targetSeconds });
            // riallinea subito le variabili locali con il valore appena chiesto
            this._lastPosition = Math.min(targetSeconds, duration);
            this._lastDuration = Math.max(duration, 1);
            this._lastFrameTime = Date.now();
            this._progress = (this._lastPosition / this._lastDuration) * 100;
            this._isDragging = false;
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("mouseup", upHandler);
            window.removeEventListener("touchmove", moveHandler);
            window.removeEventListener("touchend", upHandler);
        };
        window.addEventListener("mousemove", moveHandler);
        window.addEventListener("mouseup", upHandler);
        window.addEventListener("touchmove", moveHandler, {
            passive: false,
        });
        window.addEventListener("touchend", upHandler);
        // iniziale
        updateProgress(e);
    }
    // Assicurati di cancellare la RAF quando il componente viene rimosso
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this._animationFrameId !== null) {
            cancelAnimationFrame(this._animationFrameId);
            this._animationFrameId = null;
        }
    }
    // Volume Bar - CORRETTA
    _startDrag(e) {
        try {
            e.preventDefault();
            e.stopPropagation(); // Previene la propagazione dell'evento
            const sliderContainer = this.renderRoot.querySelector(".volume-card");
            if (!sliderContainer)
                return;
            const updateVolume = (ev) => {
                const rect = sliderContainer.getBoundingClientRect();
                const clientX = ev instanceof TouchEvent ? ev.touches[0].clientX : ev.clientX;
                let volume = (clientX - rect.left) / rect.width;
                volume = Math.min(Math.max(volume, 0), 1);
                this._volume = volume;
                this._callService("volume_set", { volume_level: volume });
                // Forza l'update immediato della UI
                //const slider = sliderContainer.querySelector<HTMLDivElement>("#slider");
                //const volumeText =
                //  sliderContainer.querySelector<HTMLSpanElement>("#volumeText");
                //if (slider) {
                //  slider.style.width = `${volume * 100}%`;
                //}
                //if (volumeText) {
                //  volumeText.textContent = `${Math.round(volume * 100)}%`;
                //}
            };
            const moveHandler = (ev) => {
                ev.preventDefault();
                updateVolume(ev);
            };
            const upHandler = (ev) => {
                ev.preventDefault();
                window.removeEventListener("mousemove", moveHandler);
                window.removeEventListener("mouseup", upHandler);
                window.removeEventListener("touchmove", moveHandler);
                window.removeEventListener("touchend", upHandler);
            };
            window.addEventListener("mousemove", moveHandler, {
                passive: false,
            });
            window.addEventListener("mouseup", upHandler);
            window.addEventListener("touchmove", moveHandler, {
                passive: false,
            });
            window.addEventListener("touchend", upHandler);
            //updateVolume(e);
        }
        catch (error) {
            console.error("Error updating volume:", error);
        }
    }
    _onClick(event) {
        var _a;
        // Feedback tattile (se supportato)
        (_a = navigator.vibrate) === null || _a === void 0 ? void 0 : _a.call(navigator, 50);
        applyRippleEffect(event.currentTarget, event);
    }
    _onRemoteClick(e) {
        this._onClick(e);
        this._moreInfo();
    }
    _moreInfo() {
        var _a;
        if (!this.hass || !this.entity)
            return;
        this._close();
        const event = new CustomEvent("hass-more-info", {
            detail: { entityId: this.entity },
            bubbles: true,
            composed: true,
        });
        // forza dispatch sul root
        (_a = document.querySelector("home-assistant")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event);
    }
    async _turnOnDevice(e) {
        this._onClick(e);
        this._callService("turn_on");
    }
    _stopCast(e) {
        this._onClick(e);
        const stateObj = this.hass.states[this.entity];
        if (!stateObj)
            return;
        const supportsStop = stateObj.attributes.supported_features &&
            stateObj.attributes.supported_features & (1 << 13); // media_stop = bit 13
        if (supportsStop) {
            this._callService("media_stop"); // ferma la riproduzione/cast
        }
        else {
            this._callService("turn_off"); // fallback
        }
    }
    _togglePlay(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (!this.hass || !this.entity)
            return;
        const service = this._isPlaying ? "media_pause" : "media_play";
        // Aggiorna lo stato locale subito
        this._isPlaying = !this._isPlaying;
        this.requestUpdate();
        this.hass
            .callService("media_player", service, { entity_id: this.entity })
            .then(() => {
            if (this._isPlaying) {
                this._animateProgress();
            }
            else {
                cancelAnimationFrame(this._animationFrameId);
            }
        })
            .catch((error) => console.error(`Error calling ${service}:`, error));
    }
    _settings() {
        if (!this.hass || !this.entity)
            return;
        // trova l'entità nello stato
        const stateObj = this.hass.states[this.entity];
        if (!stateObj)
            return;
        // cerca il device_id associato all'entità
        const entity = this.hass.entities[this.entity];
        const deviceId = entity === null || entity === void 0 ? void 0 : entity.device_id;
        this._close();
        setTimeout(() => {
            if (deviceId) {
                const settingsUrl = `/config/devices/device/${deviceId}`;
                window.location.assign(settingsUrl);
            }
            else {
                this._moreInfo();
            }
        }, 200);
    }
    // Esempio di utilizzo
    openGoogleHome(e) {
        this._onClick(e);
        const url = getGoogleHomeURL();
        window.location.href = url;
    }
    openLinks(e, appName) {
        if (appName == "YouTube")
            this.openYouTube(e);
        if (appName == "Spotify")
            this.openSpotify(e);
    }
    openYouTube(e) {
        this._onClick(e);
        const url = getYouTubeURL();
        window.location.href = url;
    }
    openSpotify(e) {
        this._onClick(e);
        const url = getSpotifyURL();
        window.location.href = url;
    }
    render() {
        var _a, _b, _c;
        const stateObj = this.hass.states[this.entity];
        if (!stateObj)
            return x ``;
        const { attributes } = stateObj;
        const isPlaying = this._isPlaying;
        const volume = Math.round(this._volume * 100);
        const mediaTitle = (_a = attributes.media_title) !== null && _a !== void 0 ? _a : localize("google_media_overlay.media_card.no_content");
        const mediaArtist = (_b = attributes.media_artist) !== null && _b !== void 0 ? _b : "";
        const appName = (_c = attributes.app_name) !== null && _c !== void 0 ? _c : "";
        const cover = attributes.entity_picture_local;
        const videoCardStyle = cover
            ? `background-image: url(${cover}); 
     background-size: cover; 
     background-position: center; 
     filter: brightness(0.4);` // scurisce l'immagine
            : "";
        const isOff = this._isOff;
        return x `
      <div class="overlay ${this._closing ? "closing" : ""}">
        <div class="header">
          <div class="header-left">
            <ha-icon-button @click=${this._close} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <span class="friendly-name">${attributes.friendly_name}</span>
          </div>
          <div class="header-right">
            <ha-icon-button @click=${this._settings} class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>
            <ha-icon-button @click=${this._moreInfo} class="settings-btn">
              <ha-icon
                icon="mdi:dots-vertical"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Menu"
              ></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        <!-- Video Player Card -->
        <div class="video-card">
          <div class="video-card-bg" style="${videoCardStyle}"></div>
          <ha-icon
            icon="m3r:play-circle"
            style="${cover
            ? "color: #e3e3e5;"
            : "color: var(--md-sys-color-on-secondary-container)"}"
            title="Play"
          ></ha-icon>
          ${isOff
            ? x ``
            : x `<ha-icon
                class="pause-button"
                icon=${isPlaying ? "mdi:pause" : "mdi:play"}
                @click=${(e) => this._togglePlay(e)}
                title=${isPlaying ? "Pause" : "Play"}
              >
              </ha-icon>`}

          <div class="video-info">
            <div
              class="video-title ellipsis"
              style="${cover
            ? "color: #e3e3e5;"
            : "color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${mediaTitle}
            </div>
            <div
              class="video-channel"
              style="${cover
            ? "color: #e3e3e5;"
            : "color: var(--md-sys-color-on-secondary-container)"}"
            >
              ${mediaArtist}
            </div>
          </div>

          <!-- Video Controls -->
          <div class="video-controls">
            <ha-icon
              class="${isOff ? "disabled" : ""}"
              style="cursor: pointer; ${cover
            ? "color: #e3e3e5;"
            : "color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-previous"
              @click=${() => this._callService("media_previous_track")}
            ></ha-icon>
            <div
              class="progress-bar ${isOff ? "disabled" : ""}"
              @mousedown=${this._startSeek}
              @touchstart=${this._startSeek}
            >
              <div
                class="progress-fill"
                style="width: ${this._progress}%"
              ></div>
              <div
                class="progress-thumb"
                style="left: calc(${this._progress}% - 6px)"
              ></div>
            </div>
            <ha-icon
              class="${isOff ? "disabled" : ""}"
              style="cursor: pointer; ${cover
            ? "color: #e3e3e5;"
            : "color: var(--md-sys-color-on-secondary-container)"}"
              icon="m3r:skip-next"
              @click=${() => this._callService("media_next_track")}
            ></ha-icon>
          </div>
        </div>

        ${volume
            ? x `<div
              class="volume-card"
              @mousedown=${this._startDrag}
              @touchstart=${this._startDrag}
            >
              <div
                id="slider"
                class="animate"
                style="width: ${this._volume * 100}%"
              ></div>
              <ha-icon class="volume-icon" icon="m3rf:volume-up"></ha-icon>
              <span class="volume-text" id="volumeText">${volume}%</span>
            </div>`
            : x ``}

        <!-- Menu Cards -->
        <div class="menu-card remote" @click=${this._onRemoteClick}>
          <ha-icon icon="m3o:google-tv-remote"></ha-icon>
          <span class="menu-text"
            >${localize("google_media_overlay.remote")}</span
          >
        </div>

        ${isOff || !this._isConnected
            ? x `<div class="menu-card link" @click=${this._turnOnDevice}>
              <ha-icon icon="m3r:cast"></ha-icon>
              <span class="menu-text"
                >${localize("google_media_overlay.cast")}</span
              >
            </div>`
            : x `<div
              class="menu-card cast"
              style="color: var(--md-sys-color-on-secondary-container)"
              @click=${this._stopCast}
            >
              <ha-icon icon="m3rf:cast"></ha-icon>
              <span class="menu-text"
                >${localize("google_media_overlay.stop_cast")}</span
              >
            </div>`}
        ${appName == "YouTube" || appName == "Spotify"
            ? x `<div
              class="menu-card link"
              @click=${(e) => this.openLinks(e, appName)}
            >
              <ha-icon icon="m3rf:open-in-new"></ha-icon>
              <span class="menu-text"
                >${localize("google_media_overlay.open")} ${appName}</span
              >
            </div>`
            : x ``}
        <div class="menu-card link" @click=${this.openGoogleHome}>
          <ha-icon icon="m3of:home-app-logo"></ha-icon>
          <span class="menu-text"
            >${localize("google_media_overlay.open_google")}</span
          >
        </div>
      </div>
    `;
    }
};
GoogleMediaOverlay.styles = i$4 `
    .overlay {
      position: fixed;
      inset: 0;
      background: var(--card-background-color, #121212);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px; /* aggiornato */
      z-index: 9999;
      animation: fadeIn 0.3s ease;
      gap: 16px; /* spazio verticale tra blocchi */
    }

    .overlay.closing {
      animation: fadeOut 0.3s ease forwards;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 18px;
      font-weight: 500;
    }

    .header-right {
      display: flex;
      gap: 10px;
    }

    .close-btn,
    .setting-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0; /* opzionale, riduce eventuali margini interni */
      width: 40px; /* puoi regolare la dimensione */
      height: 40px; /* così l'icona è perfettamente centrata */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    /* Video Player Card */
    .video-card {
      background-color: var(--md-sys-color-surface-container);
      border-radius: 28px;
      padding: 18px;
      position: relative;
      height: 180px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .video-card-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.4);
      z-index: 0;
      border-radius: 28px;
    }

    .video-card-content {
      position: relative;
      z-index: 1;
    }

    .play-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 48px;
      height: 48px;
      background-color: rgba(29, 27, 32, 0.8);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      font-size: 20px;
    }

    .pause-button {
      position: absolute;
      top: calc(50% - 24px);
      right: 20px;
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 12px;
      padding: 12px 12px;
      font-size: 24px;
      color: var(--md-sys-color-on-secondary-container)
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .video-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
      margin-top: 30px;
      margin-right: 70px;
      z-index: 1;
    }

    .ellipsis {
      white-space: nowrap; /* forza il testo su una sola riga */
      overflow: hidden; /* nasconde l'eccesso */
      text-overflow: ellipsis; /* mostra i "..." alla fine */
    }

    .video-title {
      font-size: 20px;
      font-weight: 500;
      /*color: #1d1b20;*/
      margin-bottom: 4px;
      line-height: 1.2;
    }

    .video-channel {
      font-size: 14px;
      color: #49454f;
      font-weight: 400;
    }

    .video-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
    }

    .control-btn {
      font-size: 32px;
      color: #49454f;
      cursor: pointer;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress-bar {
      flex: 1;
      height: 6px;
      background-color: #ccc;
      border-radius: 50px;
      position: relative;
      cursor: pointer;
      margin: 0px 30px;
    }

    .progress-fill {
      height: 100%;
      background-color: #6750a4;
      width: 0%;
      transition: width 0s linear;
      border-radius: 50px 0px 0px 50px;
    }

    .progress-thumb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #fff;
      border: 2px solid #6750a4;
      pointer-events: none; /* il drag si gestisce sul parent */
    }

    /* Volume Card */
    .volume-card {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      max-width: 500px;
      width: -webkit-fill-available;
      position: relative;
      overflow: hidden; /* importante per contenere l'overlay */
      z-index: 1;
      cursor: pointer; /* Aggiunto per indicare interattività */
    }

    /* overlay che schiarisce solo lo sfondo */
    .volume-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--md-sys-color-secondary-container);
      filter: brightness(1.05); /* schiarisce solo il background */
      border-radius: inherit;
      z-index: 0; /* resta dietro */
    }

    /* contenuto sopra */
    .volume-card > * {
      position: relative;
      z-index: 1;
    }

    .volume-icon {
      color: var(--md-sys-color-on-secondary-container);
    }

    .volume-text {
      font-size: 16px;
      font-weight: 500;
      color: var(--md-sys-color-on-secondary-container);
    }

    #slider {
      height: 100%;
      position: absolute;
      background-color: var(--md-sys-color-secondary-container);
      z-index: 1; /* sopra lo sfondo schiarito */
      left: 0;
      top: 0;
      /*right: 50%;*/
      width: 0%;
      border-radius: 50px 0px 0px 50px;
    }

    #slider.animate {
      transition:
        width 0s ease,
        background-color 1s ease,
        filter 1s ease;
    }

    /* Menu Cards */
    .menu-card {
      /*margin-top: -20px;
      margin-bottom: -20px;
      margin: -20px 0px;*/
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .menu-card.remote {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.cast {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-text {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.2px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .disabled,
    div.disabled,
    button:disabled,
    input:disabled,
    select:disabled,
    textarea:disabled {
      color: #888888 !important;
      cursor: not-allowed !important;
      opacity: 0.6 !important;
    }
  `;
__decorate([
    n({ attribute: false })
], GoogleMediaOverlay.prototype, "hass", void 0);
__decorate([
    n()
], GoogleMediaOverlay.prototype, "entity", void 0);
__decorate([
    r$2()
], GoogleMediaOverlay.prototype, "_closing", void 0);
__decorate([
    r$2()
], GoogleMediaOverlay.prototype, "_volume", void 0);
__decorate([
    r$2()
], GoogleMediaOverlay.prototype, "_progress", void 0);
__decorate([
    r$2()
], GoogleMediaOverlay.prototype, "_isPlaying", void 0);
__decorate([
    r$2()
], GoogleMediaOverlay.prototype, "_isOff", void 0);
__decorate([
    r$2()
], GoogleMediaOverlay.prototype, "_isConnected", void 0);
__decorate([
    r$2()
], GoogleMediaOverlay.prototype, "_isDragging", void 0);
GoogleMediaOverlay = __decorate([
    t$1("google-media-overlay")
], GoogleMediaOverlay);

var _a;
/* eslint no-console: 0 */
console.info(`%c Google Component %c ${localize("common.version")} ${CARD_VERSION}    `, "color: orange; font-weight: bold; background: black", "color: white; font-weight: bold; background: dimgray");
/** Google Slider */
customElements.define("google-slider-card", GoogleSliderCard);
if (!customElements.get("google-slider-card-editor")) {
    customElements.define("google-slider-card-editor", GoogleSliderCardEditor);
}
/** Google Button */
if (!customElements.get("google-button-card")) {
    customElements.define("google-button-card", GoogleButtonCard);
}
if (!customElements.get("google-button-card-editor")) {
    customElements.define("google-button-card-editor", GoogleButtonCardEditor);
}
/** Google Dashboard */
if (!customElements.get("google-dashboard-card")) {
    customElements.define("google-dashboard-card", GoogleDashboardCard);
}
if (!customElements.get("google-dashboard-card-editor")) {
    customElements.define("google-dashboard-card-editor", GoogleDashboardCardEditor);
}
/** Google Climate */
if (!customElements.get("google-climate-card")) {
    customElements.define("google-climate-card", GoogleClimateCard);
}
if (!customElements.get("google-climate-card-editor")) {
    customElements.define("google-climate-card-editor", GoogleClimateCardEditor);
}
/** Google Control */
if (!customElements.get("google-control-card")) {
    customElements.define("google-control-card", GoogleControlCard);
}
if (!customElements.get("google-control-card-editor")) {
    customElements.define("google-control-cardeditor", GoogleControlCardEditor);
}
/** Google Lights */
if (!customElements.get("google-lights-card")) {
    customElements.define("google-lights-card", GoogleLightsCard);
}
if (!customElements.get("google-lights-card-editor")) {
    customElements.define("google-lights-cardeditor", GoogleLightsCardEditor);
}
if (!customElements.get("google-media-overlay")) {
    customElements.define("google-media-overlay", GoogleMediaOverlay);
}
window.customCards = (_a = window.customCards) !== null && _a !== void 0 ? _a : [];
window.customCards.push({
    type: "google-slider-card",
    name: "Google Slider Card",
    preview: true,
    description: "A custom slider card inspired by Google Home UI, offering smooth control and visual feedback for dimmers, lights, and other numeric entities. Designed with a clean and modern interface to blend into any dashboard.",
});
window.customCards.push({
    type: "google-button-card",
    name: "Google Button Card",
    preview: true,
    description: "A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready.",
});
window.customCards.push({
    type: "google-dashboard-card",
    name: "Google Dashboard Card",
    preview: true,
    description: "A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces.",
});
window.customCards.push({
    type: "google-climate-card",
    name: "Google Climate Card",
    preview: true,
    description: "A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices.",
});
window.customCards.push({
    type: "google-control-card",
    name: "Google Control Card",
    preview: true,
    description: "A control card inspired by Google's design, offering a sleek interface to interact with entities like switches, lights, and scenes in Home Assistant.",
});
window.customCards.push({
    type: "google-lights-card",
    name: "Google Lights Control",
    preview: true,
    description: "A control card inspired by Google's design, offering a sleek interface to interact with lights in Home Assistant.",
});
