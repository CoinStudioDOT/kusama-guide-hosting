(self.webpackChunk=self.webpackChunk||[]).push([[3119],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,h=d["".concat(i,".").concat(p)]||d[p]||m[p]||u;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,o=new Array(u);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<u;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20841:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>d});var n=r(22122),a=r(19756),u=(r(67294),r(3905)),o=["components"],l={id:"build-cumulus",title:"Cumulus",sidebar_label:"Cumulus"},i=void 0,s={unversionedId:"build-cumulus",id:"build-cumulus",isDocsHomePage:!1,title:"Cumulus",description:'"Cumulus clouds are shaped sort of like dots; together they form a system that is intricate,',source:"@site/../docs/build-cumulus.md",sourceDirName:".",slug:"/build-cumulus",permalink:"/zh-CN/docs/build-cumulus",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-cumulus.md",version:"current",lastUpdatedBy:"Malte Kliemann",lastUpdatedAt:1625416952,formattedLastUpdatedAt:"2021/7/4",frontMatter:{id:"build-cumulus",title:"Cumulus",sidebar_label:"Cumulus"}},c=[{value:"Components",id:"components",children:[{value:"Cumulus Consensus",id:"cumulus-consensus",children:[]},{value:"Cumulus Runtime",id:"cumulus-runtime",children:[]},{value:"Cumulus Collator",id:"cumulus-collator",children:[]}]},{value:"Rococo",id:"rococo",children:[]},{value:"Resources",id:"resources",children:[]}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,u.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},'"Cumulus clouds are shaped sort of like dots; together they form a system that is intricate,\nbeautiful and functional."')),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus")," is an extension to Substrate that makes it easy to\nmake any Substrate built runtime into a Polkadot-compatible parachain. See the\n",(0,u.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/blob/master/docs/overview.md"},"Overview")," for a more technical\nbut still high-level description of Cumulus."),(0,u.kt)("h2",{id:"components"},"Components"),(0,u.kt)("h3",{id:"cumulus-consensus"},"Cumulus Consensus"),(0,u.kt)("p",null,"Cumulus Consensus is a consensus engine for Substrate that follows a Polkadot Relay Chain (i.e.,\nparachains). This will run a Polkadot node internally, and dictate to the client and synchronization\nalgorithms which chain to follow, finalize, and treat as correct."),(0,u.kt)("h3",{id:"cumulus-runtime"},"Cumulus Runtime"),(0,u.kt)("p",null,"A wrapper around Substrate runtimes to allow them to be validated by Polkadot validators and provide\nwitness generating routines. It adds a ",(0,u.kt)("inlineCode",{parentName:"p"},"validate_block")," API to the Substrate external interface,\nwhich will be called by validators."),(0,u.kt)("p",null,"Integrating it into your substrate runtime will be as easy as importing the crate and adding this\none line macro to your code."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-rust"},"runtime::register_validate_block!(Block, BlockExecutor);\n")),(0,u.kt)("h3",{id:"cumulus-collator"},"Cumulus Collator"),(0,u.kt)("p",null,"A Polkadot collator for a parachain is implemented in the Cumulus repository\n",(0,u.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/tree/master/client/collator"},"here"),"."),(0,u.kt)("h2",{id:"rococo"},"Rococo"),(0,u.kt)("p",null,"The Rococo testnet (available via Polkadot-JS) is the testnet set aside specifically for parachains."),(0,u.kt)("h2",{id:"resources"},"Resources"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=thgtXq5YMOo"},"Rob's talk from EthCC introducing Cumulus")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=thgtXq5YMOo"},"Cumulus: Entering the Substratosphere")," - Talk from\nPolkadot co-founder Robert Habermeier at EthCC in March 2019 detailing the latest on building\nparachains with Cumulus.")))}d.isMDXComponent=!0}}]);