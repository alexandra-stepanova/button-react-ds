import{r as c}from"./index-8db94870.js";var s={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=c,f=Symbol.for("react.element"),y=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,v=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(r,e,o){var t,a={},n=null,l=null;o!==void 0&&(n=""+o),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(l=e.ref);for(t in e)_.call(e,t)&&!h.hasOwnProperty(t)&&(a[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps,e)a[t]===void 0&&(a[t]=e[t]);return{$$typeof:f,type:r,key:n,ref:l,props:a,_owner:v.current}}i.Fragment=y;i.jsx=d;i.jsxs=d;s.exports=i;var g=s.exports;const u=({id:r,primary:e=!1,size:o="medium",backgroundColor:t,label:a,ariaLabel:n,type:l,...p})=>{const m=e?"storybook-button--primary":"storybook-button--secondary";return g.jsx("button",{id:r,type:l,"aria-label":n,className:["storybook-button",`storybook-button--${o}`,m].join(" "),style:{backgroundColor:t},...p,children:a})};try{u.displayName="Button",u.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{id:{defaultValue:null,description:"The unique ID of an element(optional).",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"Type of the button.",name:"type",required:!1,type:{name:"enum",value:[{value:'"submit"'},{value:'"reset"'},{value:'"button"'}]}},primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Aria-label text for button.\n`aria-label` attribute that is used to define a string that labels the current element.\nuse it in cases where a text label is not visible on the screen.\nif there is visible text labeling the element, use `aria-labelledby` instead.",name:"ariaLabel",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}export{u as B,g as j};
//# sourceMappingURL=Button-cf79844f.js.map
