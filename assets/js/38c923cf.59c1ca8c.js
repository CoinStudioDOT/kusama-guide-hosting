(self.webpackChunk=self.webpackChunk||[]).push([[1103],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1465:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>u,default:()=>p});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i=["components"],l={id:"learn-validator",title:"Validator",sidebar_label:"Validator"},s=void 0,d={unversionedId:"learn-validator",id:"learn-validator",isDocsHomePage:!1,title:"Validator",description:"Validators secure the Relay Chain by staking DOT, validating proofs from",source:"@site/../docs/learn-validator.md",sourceDirName:".",slug:"/learn-validator",permalink:"/docs/learn-validator",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-validator.md",version:"current",lastUpdatedBy:"Jake Hemmerle",lastUpdatedAt:1626107511,formattedLastUpdatedAt:"7/12/2021",frontMatter:{id:"learn-validator",title:"Validator",sidebar_label:"Validator"}},u=[{value:"Guides",id:"guides",children:[]},{value:"Other References",id:"other-references",children:[]},{value:"Security / Key Management",id:"security--key-management",children:[]},{value:"Monitoring Tools",id:"monitoring-tools",children:[]},{value:"Validator Stats",id:"validator-stats",children:[]}],c={toc:u};function p(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Validators secure the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-architecture#relay-chain"},"Relay Chain")," by staking DOT, validating proofs from\ncollators and participating in consensus with other validators. "),(0,o.kt)("p",null,"These participants play a crucial role in adding new blocks to the Relay Chain and, by\nextension, to all parachains. This allows parties to complete cross-chain transactions via the Relay\nChain. Parachain validators participate in some form of off-chain consensus, and submit candidate receipts\nto the tx pool for a block producer to include on-chain. The Relay Chain validators guarantee that\neach parachain follows its unique rules and can pass messages between shards in a trust-free environment."),(0,o.kt)("p",null,"Validators perform two functions: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Verifying")," that the information contained in an assigned set of parachain blocks is valid\n(such as the identities of the transacting parties and the subject matter of the contract). "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Participating")," in the consensus mechanism to produce the Relay Chain blocks based on validity statements\nfrom other validators. Any instances of non-compliance with the consensus algorithms result in punishment\nby removal of some or all of the validator\u2019s staked DOT, thereby discouraging bad actors. Good performance, however, will be rewarded, with validators receiving block rewards (including transaction fees) in the form\nof DOT in exchange for their activities.")),(0,o.kt)("h2",{id:"guides"},"Guides"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-polkadot"},"How to Validate on Polkadot")," - Guide on how to set up a\nvalidator on the Polkadot live network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-validator-payout"},"Validator Payout Overview")," - A short overview on how the\nvalidator payout mechanism works."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-systemd"},"How to run your validator as a systemd process")," - Guide on\nrunning your validator as a ",(0,o.kt)("inlineCode",{parentName:"li"},"systemd")," process so that it will run in the background and start\nautomatically on reboots."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-upgrade"},"How to Upgrade your Validator")," - Guide for securely upgrading\nyour validator when you want to switch to a different machine or begin running the latest version\nof client code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-use-polkadot-validator"},"How to Use Validator Setup")," - Guide\non how to use Polkadot / Kusama validator setup.")),(0,o.kt)("h2",{id:"other-references"},"Other References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f"},"How to run a Polkadot node (Docker)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d"},"A Serverless Failover Solution for Web3.0 Validator Nodes")," -\nBlog that details how to create a robust failover solution for running validators."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-kusama#vps-list"},"VPS list")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation"},"Polkadot Validator Lounge")," -\nA place to chat about being a validator."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"learn-staking#slashing"},"Slashing Consequences")," - Learn more\nabout slashing consequences for running a validator node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0EmP0s6JOW4&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=2"},"Why You Should be A Validator on Polkadot and Kusama")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15"},"Roles and Responsibilities of a Validator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/validating-on-polkadot"},"Validating on Polkadot")," - An explanation of\nhow to validate on Polkadot, with Joe Petrowski and David Dorgan of Parity Technologies, along\nwith Tim Ogilvie from Staked.")),(0,o.kt)("h2",{id:"security--key-management"},"Security / Key Management"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/w3f/validator-security"},"Validator Security Overview"))),(0,o.kt)("h2",{id:"monitoring-tools"},"Monitoring Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"PANIC for Polkadot")," - A monitoring and alerting\nsolution for Polkadot / Kusama node"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/Kusama%20CC3"},"Polkadot Telemetry Service")," - Network\ninformation, including what nodes are running on a given chain, what software versions they are\nrunning, and sync status."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forum.web3.foundation/t/useful-links-for-validators/20"},"Other Useful Links"))),(0,o.kt)("h2",{id:"validator-stats"},"Validator Stats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkacube.hashquark.io/#/polkadot/strategy"},"HashQuark Staking Strategy")," - The HashQuark\nstaking strategy dashboard helps you choose the optimal set-up to maximize rewards, and provides\nother useful network monitoring tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkastats.io/"},"Polkastats")," - Polkastats is a cleanly designed dashboard for validator\nstatistics."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://yieldscan.app/"},"YieldScan")," - Staking yield maximization platform, designed to minimize\neffort."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusama.subscan.io/validator"},"Subscan Validators Page")," - Displays information on the\ncurrent validators - not as tailored for validators as the other sites.")))}p.isMDXComponent=!0}}]);