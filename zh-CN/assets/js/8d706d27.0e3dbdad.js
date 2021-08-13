(self.webpackChunk=self.webpackChunk||[]).push([[3659],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},66456:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>p});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],s={id:"learn-spree",title:"SPREE",sidebar_label:"SPREE"},l=void 0,c={unversionedId:"learn-spree",id:"learn-spree",isDocsHomePage:!1,title:"SPREE",description:'Shared Protected Runtime Execution Enclaves (SPREE) sometimes referred to as "trust wormholes," are',source:"@site/../docs/learn-spree.md",sourceDirName:".",slug:"/learn-spree",permalink:"/zh-CN/docs/learn-spree",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-spree.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1628868954,formattedLastUpdatedAt:"2021/8/13",frontMatter:{id:"learn-spree",title:"SPREE",sidebar_label:"SPREE"}},h=[{value:"Origin",id:"origin",children:[]},{value:"What is a SPREE module?",id:"what-is-a-spree-module",children:[]},{value:"Why?",id:"why",children:[]},{value:"Example",id:"example",children:[]}],d={toc:h};function p(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Shared Protected Runtime Execution Enclaves (SPREE) sometimes referred to as "trust wormholes," are\nfragments of logic comparable to runtime modules in Substrate, but live on the Polkadot Relay Chain\nand may be opted into by parachains.'),(0,r.kt)("p",null,"SPREE in brief was described with the following properties and functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Parachains can opt-in to special runtime logic fragments (like smart contracts)."),(0,r.kt)("li",{parentName:"ul"},"These fragments have their own storage and own ",(0,r.kt)("a",{parentName:"li",href:"/zh-CN/docs/learn-crosschain"},"XCMP")," endpoint."),(0,r.kt)("li",{parentName:"ul"},"All instances across parachains have identical logic."),(0,r.kt)("li",{parentName:"ul"},"It executes alongside parachain logic."),(0,r.kt)("li",{parentName:"ul"},"Protected: storage can not be altered by parachain logic; messages can not be faked from them by\nparachains.")),(0,r.kt)("h2",{id:"origin"},"Origin"),(0,r.kt)("p",null,"On 28 March, 2019 u/Tawaren, a member of the Polkadot community, made a post on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/dot/"},"r/dot"),' called "SmartProtocols Idea" and laid out a proposal for ',(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/dot/comments/b6kljn/smartprotocols_idea/"},"Smart\nProtocols"),". The core insight of the post was that XCMP had a\ncomplication in that it was difficult to verify and prove code was executed on a parachain without\ntrust. A solution was to install the SmartProtocols in the Relay Chain that would be isolated blobs\nof code with their own storage per instance that could only be changed through an interface with\neach parachain. SmartProtocols are the precursor to SPREE."),(0,r.kt)("h2",{id:"what-is-a-spree-module"},"What is a SPREE module?"),(0,r.kt)("p",null,"SPREE modules are fragments of logic (in concrete terms they are blobs of\n",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-wasm"},"WebAssembly")," code) that are uploaded onto Polkadot through a governance mechanism or\nby parachains. Once the blob is uploaded to Polkadot, all other parachains can decide to opt-in to\nthe logic. The SPREE module would retain its own storage independent of the parachain, but would be\ncallable through an interface with the parachain. Parachains will send messages to the SPREE module\nsynchronously."),(0,r.kt)("p",null,"SPREE modules are important to the overall XCMP architecture because they give a guarantee to the\ncode that will be executed on destination parachains. While XCMP guarantees the delivery of a\nmessage, it does not guarantee what code will be executed, i.e. how the receiving parachain will\ninterpret the message. While XCMP accomplishes trustless message passing, SPREE is the trustless\ninterpenetration of the message and a key part of the usefulness of XCMP."),(0,r.kt)("p",null,"SPREE modules are like recipes in cookbooks. For example, if we give an order to a cook to make a\nsouffl\xe9, and we\u2019re decently confident in the ability of the cook, we have a vague idea of what will\nbe made but no actual surety of how it will be made. However, let\u2019s say that a cook has the \u201cSouffl\xe9\nMaker\u2019s Manual\u201d on their bookshelf and has committed themselves to only make souffles from this\nbook. Now we can also consult the same book that the cook has, and we have a precise understanding\nof what will happen when we tell the cook to make a souffl\xe9. In this example, \u201cmake a souffl\xe9\u201d was\nthe message in XCMP and the cookbook was the SPREE module."),(0,r.kt)("p",null,"In concrete terms, SPREE modules could be useful for various functionality on Polkadot. One\nsuggested use case of SPREE modules is for a trustless decentralized exchange that is offered as\nfunctionality to any parachain without any extra effort from parachain developers. One can imagine\nthis working by having a SPREE module that exposes the interface for the incrementing and\ndecrementing of balances of various assets based on a unique identifier."),(0,r.kt)("h2",{id:"why"},"Why?"),(0,r.kt)("p",null,"Sending messages across parachains in XCMP only ensures that the message will be delivered but does\nnot specify the code that will be executed, or how the message will be interpreted by the receiving\nparachain. There would be ways around this such as requesting a verifiable receipt of the execution\nfrom the receiving parachain, but in the naked case, the other parachain would have to be trusted.\nHaving shared code that exists in appendices that the parachain can opt-in to resolves the need for\ntrust and makes the execution of the appendices completely trustless."),(0,r.kt)("p",null,"SPREE would be helpful to ensure that the same logic is shared between parachains in the SPREE\nmodules. An especially relevant use case would revolve around the use of token transfers across\nparachains in which it is important that the sending and receiving parachains agree about how to\nchange the total supply of tokens and a basic interface."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"spree example",src:a(27446).Z})),(0,r.kt)("p",null,"The diagram above is a simplification of the Polkadot system."),(0,r.kt)("p",null,'In this diagram, we see that the Wasm code for SPREE module "X" has been uploaded to the Polkadot\nRelay Chain. The two cylinders "A" and "B" represent two distinct parachains that have both opted-in\nto this SPREE module creating two distinct instances of it with their own XCMP endpoints "A.X" and\n"B.X".'),(0,r.kt)("p",null,'In the example, we assume that this SPREE module "X" contains the functionality for incrementing of\ndecrementing the balance of a particular asset that is unique to this module.'),(0,r.kt)("p",null,"By initiating a transaction at A.X to decrease a particular balance by 1, a message over XCMP can be\ntrustlessly sent to B.X to increase a balance by 1."),(0,r.kt)("p",null,"Collators, represented as the green triangle are responsible for relaying this message from\nparachain A to parachain B, as well as maintaining the storage for each particular instance of A.X\nand B.X for their respective parachains. They provide proofs of valid state transitions to the Relay\nChain validators represented as blue diamonds."),(0,r.kt)("p",null,"Validators can validate the correct state transitions of SPREE modules A.X and B.X by being provided\nwith the previous state root of the SPREE module instances, the data of the XCMP message between the\ninstances, and the next state root of the instance. They do this validation by checking it against\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," function as provided by the SPREE module API. Collators are expected to be able to\nprovide this information to progress their parachains."))}p.isMDXComponent=!0},27446:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/spree_module-a8eefaaf0abf97f465af31069d8856ff.png"}}]);