(self.webpackChunk=self.webpackChunk||[]).push([[9136],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>h,kt:()=>u});var i=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=i.createContext({}),c=function(e){var a=i.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},h=function(e){var a=c(e.components);return i.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=n,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return t?i.createElement(f,o(o({ref:a},h),{},{components:t})):i.createElement(f,o({ref:a},h))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},29680:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>h,default:()=>p});var i=t(22122),n=t(19756),r=(t(67294),t(3905)),o=["components"],l={id:"learn-availability",title:"Availability and Validity",sidebar_label:"Availability and Validity"},s=void 0,c={unversionedId:"learn-availability",id:"learn-availability",isDocsHomePage:!1,title:"Availability and Validity",description:"The Availability and Validity (AnV) protocol of Polkadot is what allows for the network to be",source:"@site/../docs/learn-availability.md",sourceDirName:".",slug:"/learn-availability",permalink:"/docs/learn-availability",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-availability.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1628597410,formattedLastUpdatedAt:"8/10/2021",frontMatter:{id:"learn-availability",title:"Availability and Validity",sidebar_label:"Availability and Validity"}},h=[{value:"Phases of the AnV protocol",id:"phases-of-the-anv-protocol",children:[{value:"Parachain phase",id:"parachain-phase",children:[]},{value:"Relay chain submission phase",id:"relay-chain-submission-phase",children:[]},{value:"Availability and unavailability subprotocols",id:"availability-and-unavailability-subprotocols",children:[]}]},{value:"Erasure Codes",id:"erasure-codes",children:[]},{value:"Fishermen: Deprecated",id:"fishermen-deprecated",children:[]},{value:"Further Resources",id:"further-resources",children:[]}],d={toc:h};function p(e){var a=e.components,t=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Availability and Validity (AnV) protocol of Polkadot is what allows for the network to be\nefficiently sharded among parachains while maintaining strong security guarantees."),(0,r.kt)("h2",{id:"phases-of-the-anv-protocol"},"Phases of the AnV protocol"),(0,r.kt)("p",null,"There are five phases of the Availability and the Validity protocol."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Parachain phase."),(0,r.kt)("li",{parentName:"ol"},"Relay chain submission phase."),(0,r.kt)("li",{parentName:"ol"},"Availability and unavailability subprotocols."),(0,r.kt)("li",{parentName:"ol"},"Secondary GRANDPA approval validity checks."),(0,r.kt)("li",{parentName:"ol"},"Invocation of a Byzantine fault tolerant ",(0,r.kt)("em",{parentName:"li"},"finality gadget")," to cement the chain.")),(0,r.kt)("h3",{id:"parachain-phase"},"Parachain phase"),(0,r.kt)("p",null,"The parachain phase of AnV is when the ",(0,r.kt)("em",{parentName:"p"},"collator")," of a parachain proposes a ",(0,r.kt)("em",{parentName:"p"},"candidate block")," to the\nvalidators that are currently assigned to the parachain."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A ",(0,r.kt)("strong",{parentName:"p"},"candidate block")," is a new block from a parachain collator that may or may not be valid and\nmust go through validity checks before being included into the Relay Chain.")),(0,r.kt)("h3",{id:"relay-chain-submission-phase"},"Relay chain submission phase"),(0,r.kt)("p",null,"The validators then check the candidate block against the verification function exposed by that\nparachain's registered code. If the verification succeeds, then the validators will pass the\ncandidate block to the other validators in the gossip network. However, if the verification fails,\nthe validators immediately reject the candidate block as invalid."),(0,r.kt)("p",null,"When more than half of the parachain validators agree that a particular parachain block candidate is\na valid state transition, they prepare a ",(0,r.kt)("em",{parentName:"p"},"candidate receipt"),". The candidate receipt is what will\neventually be included into the Relay Chain state. It includes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The parachain ID."),(0,r.kt)("li",{parentName:"ul"},"The collator's ID and signature."),(0,r.kt)("li",{parentName:"ul"},"A hash of the parent block's candidate receipt."),(0,r.kt)("li",{parentName:"ul"},"A Merkle root of the block's erasure-coded pieces."),(0,r.kt)("li",{parentName:"ul"},"A Merkle root of any outgoing messages."),(0,r.kt)("li",{parentName:"ul"},"A hash of the block."),(0,r.kt)("li",{parentName:"ul"},"The state root of the parachain before block execution."),(0,r.kt)("li",{parentName:"ul"},"The state root of the parachain after block execution.")),(0,r.kt)("p",null,"This information is ",(0,r.kt)("strong",{parentName:"p"},"constant size")," while the actual PoV block of the parachain can be variable\nlength. It is enough information for anyone that obtains the full PoV block to verify the state\ntransition contained inside of it."),(0,r.kt)("h3",{id:"availability-and-unavailability-subprotocols"},"Availability and unavailability subprotocols"),(0,r.kt)("p",null,"During the availability and unavailability phases, the validators gossip the\n",(0,r.kt)("a",{parentName:"p",href:"#erasure-codes"},"erasure coded")," pieces among the network. At least 1/3 + 1 validators must report\nthat they possess their piece of the code word. Once this threshold of validators has been reached,\nthe network can consider the PoV block of the parachain ",(0,r.kt)("em",{parentName:"p"},"available"),"."),(0,r.kt)("h2",{id:"erasure-codes"},"Erasure Codes"),(0,r.kt)("p",null,"Erasure coding transforms a message into a longer ",(0,r.kt)("em",{parentName:"p"},"code")," that allows for the original message to be\nrecovered from a subset of the code and in absence of some portion of the code. A code is the\noriginal message padded with some extra data that enables the reconstruction of the code in the case\nof erasures."),(0,r.kt)("p",null,"The type of erasure codes used by Polkadot's availability scheme are ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction"},"Reed-Solomon"),"\ncodes, which already enjoys a battle-tested application in technology outside the blockchain\nindustry. One example is found in the compact disk industry. CDs use Reed-Solomon codes to correct\nany missing data due to inconsistencies on the disk face such as dust particles or scratches."),(0,r.kt)("p",null,"In Polkadot, the erasure codes are used to keep parachain state available to the system without\nrequiring all validators to keep tabs on all the parachains. Instead, validators share smaller\npieces of the data and can later reconstruct the entire data under the assumption that 1/3+1 of the\nvalidators can provide their pieces of the data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The 1/3+1 threshold of validators that must be responsive in order to construct the full\nparachain state data corresponds to Polkadot's security assumption in regard to Byzantine nodes."),(0,r.kt)("h2",{id:"fishermen-deprecated"},"Fishermen: Deprecated"),(0,r.kt)("p",null,"The idea of Fishermen is that they are full nodes of parachains, like collators, but perform a different role in relation to the Polkadot network. Instead of packaging the state transitions and producing the next parachain blocks as collators do, fishermen will watch this process and ensure no invalid state transitions are included. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fishermen are not available on Kusama or Polkadot and are not planned for formal implementation, depsite previous proposals in the ",(0,r.kt)("a",{parentName:"strong",href:"https://w3f-research.readthedocs.io/en/latest/polkadot/Availability_and_Validity.html"},"AnV protocol"),".")),(0,r.kt)("h2",{id:"further-resources"},"Further Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/the-path-of-a-parachain-block/"},"Path of a Parachain Block")," - Article by Parity analyst Joe Petrowski expounding on the\nvalidity checks that a parachain block must pass in order to progress the parachain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/research/tree/85cd4adfccb7d435f21cd9fd249cd1b7f5167537/docs/papers/AnV"},"Availability and Validity")," - Paper by the W3F Research Team that specifies the\navailability and validity protocol in detail.")))}p.isMDXComponent=!0}}]);