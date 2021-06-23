(self.webpackChunk=self.webpackChunk||[]).push([[4540],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),m=o,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||n;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},15624:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>h});var r=a(22122),o=a(19756),n=(a(67294),a(3905)),i=["components"],s={id:"research",title:"Research Pages",sidebar_label:"Research Pages"},l=void 0,c={unversionedId:"research",id:"research",isDocsHomePage:!1,title:"Research Pages",description:"The Polkadot research pages are edited directly by the",source:"@site/../docs/research.md",sourceDirName:".",slug:"/research",permalink:"/docs/research",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/research.md",version:"current",lastUpdatedBy:"Nam Hoang Le",lastUpdatedAt:1624446778,formattedLastUpdatedAt:"6/23/2021",frontMatter:{id:"research",title:"Research Pages",sidebar_label:"Research Pages"}},p=[{value:"Research Papers",id:"research-papers",children:[]},{value:"Research Blogs",id:"research-blogs",children:[]}],d={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Polkadot ",(0,n.kt)("a",{parentName:"p",href:"https://research.polkadot.network"},"research pages")," are edited directly by the\nresearchers at W3F and contain papers, articles and documents that are sources for the information\non the wiki."),(0,n.kt)("p",null,"The following papers and articles may be of special interest for those interested in investigating\nPolkadot from a research or academic perspective."),(0,n.kt)("h2",{id:"research-papers"},"Research Papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2005.13456.pdf"},"Overview of Polkadot and its Design Considerations")," - A\nbroad overview of the design of Polkadot. Authors: Jeff Burdges, Alfonso Cevallos, Peter Czaban,\nRob Habermeier, Syed Hosseini, Fabio Lama, Handan K\u0131l\u0131n\xe7 Alper, Ximin Luo, Fatemeh Shirazi,\nAlistair Stewart, Gavin Wood"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/NPoS/index.html"},"Intro to Nominated Proof of Stake")," -\nA description of the NPoS scheme which selects which validators are allowed to participate in the\nconsensus protocol of Polkadot. Author: Alfonso Cevallos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2007.01560"},"GRANDPA: A Byzantine Finality Gadget")," - GHOST-based Recursive\nAncestor Deriving Prefix Agreement, Polkadot's finality gadget. Authors: Alistair Stewart and\nLefteris Kokoris Kogias"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.12990"},"A Verifiably Secure and Proportional Committee Election Rule")," -\nValidator Election in Nominated Proof of Stake. Authors: Alfonso Cevallos and Alistair Stewart"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2007.01560"},"Network Time with a Consensus on Clock")," - Consensus on Clock in\nUniversally Composable Timing. Author: Handan K\u0131l\u0131n\xe7 Alper"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/638"},"Delay Encryption")," - Delay Encryption can roughly be described\nas \u201cidentity based encryption with slow derived private key issuance\u201d. Authors: Jeff Burdges and\nLuca de Feo")),(0,n.kt)("h2",{id:"research-blogs"},"Research Blogs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.network/an-updated-overview-of-polkadot/"},"An Updated Overview of Polkadot")," \u2013\nGives a summary of the paper \u201cOverview of Polkadot and its Design Considerations\u201d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.network/polkadot-research-update/"},"Polkadot Research Update")," \u2013 Gives a summary\nof the papers on Validator Election in Nominated Proof of Stake, Network Time with a Consensus on\nClock, and Byzantine Finality Gadgets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/polkadots-messaging-scheme-b1ec560908b7"},"Polkadot\u2019s Messaging Scheme"),"\n\u2013 Gives an outline of Cross-Chain Message Passing (XCMP). Authors: Fatemeh Shirazi, Logan Saether,\nAlistair Stewart, Rob Habermeier, Gavin Wood"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/how-nominated-proof-of-stake-will-work-in-polkadot-377d70c6bd43"},"How Nominated Proof of Stake Will Work in Polkadot"),"\n\u2013 Gives an outline of Nominated Proof of Stake in Polkadot. Author: Alfonzo Cevallos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/messaging-protocol-workshop-outcomes-7a827d02a81a"},"Messaging Protocol Workshop Outcomes"),"\n\u2013 An initiative to design and implement a privacy-preserving communication system for\ndecentralized applications.")))}h.isMDXComponent=!0}}]);