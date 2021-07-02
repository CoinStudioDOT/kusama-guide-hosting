(self.webpackChunk=self.webpackChunk||[]).push([[5737],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97084:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>s,toc:()=>d,default:()=>u});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i=["components"],l={id:"build-oracle",title:"Oracles",sidebar_label:"Oracles"},c=void 0,s={unversionedId:"build-oracle",id:"build-oracle",isDocsHomePage:!1,title:"Oracles",description:"In the blockchain context, an oracle is a way to bring real-world data onto the blockchain so that",source:"@site/../docs/build-oracle.md",sourceDirName:".",slug:"/build-oracle",permalink:"/docs/build-oracle",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-oracle.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1625236136,formattedLastUpdatedAt:"7/2/2021",frontMatter:{id:"build-oracle",title:"Oracles",sidebar_label:"Oracles"}},d=[],p={toc:d};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the blockchain context, an ",(0,o.kt)("em",{parentName:"p"},"oracle")," is a way to bring real-world data onto the blockchain so that\nit can be used by a decentralized application."),(0,o.kt)("p",null,"Oracles serve many purposes for application builders. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Most stablecoin designs use an oracle to bring in data of the exchange rate of assets, in order to\npeg their value to a real world currency."),(0,o.kt)("li",{parentName:"ul"},"Synthetic assets use oracles as price feeds in order to determine if the underlying cryptocurrency\nsufficiently collateralizes the debt position."),(0,o.kt)("li",{parentName:"ul"},"Prediction markets use oracles to decide the outcome of real world events and determine the payout\nof the prediction shares."),(0,o.kt)("li",{parentName:"ul"},"Decentralized insurance markets use oracles to bring in information about whether a claim is valid\nor not.")),(0,o.kt)("p",null,"Oracle solutions range from centralized and trusted to decentralized and game-theory based. On the\ncentralized end of the spectrum, an oracle could be a single account that has the authority to\ndictate the real-world data on-chain. On the decentralized end, a ",(0,o.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2014/03/28/schellingcoin-a-minimal-trust-universal-data-feed/"},'complex game of\n"chicken"')," can be played among various staked actors who risk getting slashed if they\ndon't submit the same data as everyone else. Solutions such as ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/chainlink-reaches-milestone-with-polkadot/"},"ChainLink")," fit somewhere\nin the middle, where the amount of trust you put into the reporting oracles can be adjusted based on\nyour preferences. A Chainlink ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/smartcontractkit/chainlink-polkadot/blob/master/pallet-chainlink-feed/README.md"},"Feed Pallet")," was recently released to allow smart contract\napplications across Polkadot to access price reference data, made available as a Substrate oracle pallet."),(0,o.kt)("p",null,"When using an oracle in your application you should be aware of the benefits and risks that are\nbaked into its specific model. As the Polkadot ecosystem develops and oracle parachains begin to\nappear, this article will be updated with a comparison of the different solutions and the benefits\nand drawbacks that each provide."))}u.isMDXComponent=!0}}]);