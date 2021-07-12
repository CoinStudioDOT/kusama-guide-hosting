(self.webpackChunk=self.webpackChunk||[]).push([[5637],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64495:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>h});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],s={id:"learn-teleport",title:"Teleporting Assets To Other Parachains",sidebar_label:"Teleporting Assets"},l=void 0,p={unversionedId:"learn-teleport",id:"learn-teleport",isDocsHomePage:!1,title:"Teleporting Assets To Other Parachains",description:"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralied",source:"@site/../docs/learn-teleport.md",sourceDirName:".",slug:"/learn-teleport",permalink:"/docs/learn-teleport",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-teleport.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1626107511,formattedLastUpdatedAt:"7/12/2021",frontMatter:{id:"learn-teleport",title:"Teleporting Assets To Other Parachains",sidebar_label:"Teleporting Assets"}},c=[{value:"How to Teleport",id:"how-to-teleport",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],u={toc:c};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralied\nblockchain interoperability. This interoperability allows for asset teleportation: the process of\nmoving assets, such as coins, tokens, or NTFs, between chains (parachains) to use them as you would\nany other asset native to that chain. Interoperability is possible through ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"XCMP")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE\nmodules"),", which together ensure that assets are not lost or duplicated across multiple chain."),(0,a.kt)("h2",{id:"how-to-teleport"},"How to Teleport"),(0,a.kt)("p",null,"Teleportation can be done through the ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," interface or through the\n",(0,a.kt)("inlineCode",{parentName:"p"},"xcmPallet.teleportAssets()")," extrinsic. In the following example, we will be using the PolkadotJS\ninterface."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," and connect to the chain with the tokens you want to teleport."),(0,a.kt)("li",{parentName:"ol"},"Navigate to \"Accounts > Teleport\". This opens the 'teleport assets' interface:\n",(0,a.kt)("img",{alt:"transfer",src:n(2574).Z})),(0,a.kt)("li",{parentName:"ol"},"Fill out the transaction:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},'"send from account" - Select the account with the source tokens.'),(0,a.kt)("li",{parentName:"ol"},'"destination chain" - Select the parachain you want to send the assets to.'),(0,a.kt)("li",{parentName:"ol"},'"send to address" - Select the account you want to be in control of the coins on the\ndestination chain.'),(0,a.kt)("li",{parentName:"ol"},'"amount" - Insert the number of tokens you want to teleport'))),(0,a.kt)("li",{parentName:"ol"},'After revewing the transaction information and fees, click the "Teleport" button.'),(0,a.kt)("li",{parentName:"ol"},'Click "Sign and Submit".'),(0,a.kt)("li",{parentName:"ol"},'Enter your password, and click "Sign the transaction".')),(0,a.kt)("p",null,"The transaction will be signed and broadcasted, and the tokens will appear on the destination chain\nshortly."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,'If you do not see "Accounts > Teleport" in ',(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps"),", the source chain that you have\nselected does not support teleportation yet. As of June 2021, unsupported chains include Polkadot\nmainnet, Rococo testnet, and their respective parachains."))}h.isMDXComponent=!0},2574:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n.p+"assets/images/teleport_interface-b604e528f038cc2b80c4f23e8036a025.png"}}]);