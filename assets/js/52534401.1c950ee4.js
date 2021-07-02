(self.webpackChunk=self.webpackChunk||[]).push([[562],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=l(a),m=r,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(d,i(i({ref:e},p),{},{components:a})):n.createElement(d,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4998:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>u});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i=["components"],s={id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts"},c=void 0,l={unversionedId:"build-smart-contracts",id:"build-smart-contracts",isDocsHomePage:!1,title:"Smart Contracts",description:"The Polkadot Relay Chain will not natively support smart contracts. However, parachains on Polkadot",source:"@site/../docs/build-smart-contracts.md",sourceDirName:".",slug:"/build-smart-contracts",permalink:"/docs/build-smart-contracts",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-smart-contracts.md",version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1625262900,formattedLastUpdatedAt:"7/2/2021",frontMatter:{id:"build-smart-contracts",title:"Smart Contracts",sidebar_label:"Smart Contracts"}},p=[{value:"Resources",id:"resources",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Storage Rent",id:"storage-rent",children:[]},{value:"What is the difference between developing a smart contract versus a parachain?",id:"what-is-the-difference-between-developing-a-smart-contract-versus-a-parachain",children:[{value:"Layer of Abstraction",id:"layer-of-abstraction",children:[]},{value:"Gas Fees",id:"gas-fees",children:[]}]},{value:"Resources",id:"resources-1",children:[]}],h={toc:p};function u(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Polkadot Relay Chain will not natively support smart contracts. However, parachains on Polkadot\nwill support smart contracts. There are already announced projects such as\n",(0,o.kt)("a",{parentName:"p",href:"https://edgewa.re"},"Edgeware"),", and thanks to the Substrate built-in\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_contracts/index.html"},"contract pallet"),", it is likely\nthat more parachains will support WebAssembly smart contracts."),(0,o.kt)("p",null,"Additionally, there is the ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/smart-contracts/evm-pallet"},"EVM Pallet"),",\nwhich allows a parachain to implement the Ethereum Virtual Machine, thereby supporting almost direct ports of\nEthereum contracts. Some of the projects using this approach are ",(0,o.kt)("a",{parentName:"p",href:"https://edgewa.re"},"Edgeware"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/frontier"},"Frontier"),"."),(0,o.kt)("p",null,"A video version of the recap of the smart contract situation on Polkadot and Kusama is available\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fKHkFBXaUxQ"},"here"),"."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("p",null,"Here is the list of current resources available to developers who want to get started writing smart\ncontracts to deploy on parachains based on Substrate."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://contracts.edgewa.re"},"Edgeware Contracts")," - Edgeware's documentation on Smart Contracts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink"},"ink!")," - Parity's ink to write smart contracts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/substrate-contracts-workshop/#/"},"Substrate Contracts Workshop")," - a walkthrough\nof the basics of writing and deploying an ERC20 token using ",(0,o.kt)("inlineCode",{parentName:"li"},"ink!"),".")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Collected below are some community examples of smart contracts in ",(0,o.kt)("inlineCode",{parentName:"p"},"ink!"),".\n",(0,o.kt)("strong",{parentName:"p"},"Are you working on a smart contract example? Ask us to add it to this page!")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/JesseAbram/foRust/"},"Ownable")," - Port of the OpenZeppelin ",(0,o.kt)("inlineCode",{parentName:"li"},"Ownable")," contract.")),(0,o.kt)("h2",{id:"storage-rent"},"Storage Rent"),(0,o.kt)("p",null,"Storage rent limits the footprint that a contract can have on the blockchain's storage."),(0,o.kt)("p",null,"A contract deployed to the chain produces a code hash from which new instances of the chain can be\ncreated, but there is currently no rent applied to the code hash itself. The rent applies only to\ninstances of this contract which have their own ",(0,o.kt)("em",{parentName:"p"},"contract accounts"),". Deploying a code hash currently\nhas a one-time byte-fee applied to the transaction, but no recurring cost."),(0,o.kt)("p",null,"An account of a contract instance is charged proportionally to the amount of storage its account\nuses. When a contract's balance goes below a defined limit, the contract's account is turned into a\n",(0,o.kt)("em",{parentName:"p"},"tombstone")," (a hash of the contract's current state) and its storage is cleaned up. A tombstone\ncontract can be restored by providing the data that was cleaned up when it became a tombstone as\nwell as any additional funds needed to keep the contract alive. This fee will retroactively apply to\nmissed rent periods."),(0,o.kt)("p",null,'Block producers or regular users of the chain can "poke" a smart contract if they think it ran out\nof funds for rent. This will initiate the clean-up process and the ',(0,o.kt)("em",{parentName:"p"},"poker")," will get a finder's fee."),(0,o.kt)("h2",{id:"what-is-the-difference-between-developing-a-smart-contract-versus-a-parachain"},"What is the difference between developing a smart contract versus a parachain?"),(0,o.kt)("h3",{id:"layer-of-abstraction"},"Layer of Abstraction"),(0,o.kt)("p",null,"When you write a smart contract you are creating the instructions that will be deployed and\nassociated to a specific chain address."),(0,o.kt)("p",null,"In comparison, a runtime module is the entire logic of a chain's state transitions (what's called a\nstate transition function)."),(0,o.kt)("p",null,"Smart contracts must consciously implement upgradeability while parachains will have the ability to\nswap out their code entirely through a root command or via the governance pallet."),(0,o.kt)("p",null,"When you build a smart contract, it will eventually be deployed to a target chain with its own\nenvironment. Parachains allow the developer to declare the environment of their own chain, even\nallowing others to write smart contracts for it."),(0,o.kt)("h3",{id:"gas-fees"},"Gas Fees"),(0,o.kt)("p",null,"Smart contracts must find a way to limit their own execution, or else full nodes are vulnerable to\nDOS attacks. An infinite loop in a smart contract, for example, could consume the computational\nresources of an entire chain, preventing others from using it. The\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Halting_problem"},"halting problem"),' shows that with a powerful enough\nlanguage, it is impossible to know ahead of time whether or not a program will ever cease execution.\nSome platforms, such as Bitcoin, get around this constraint by providing a very restricted scripting\nlanguage. Others, such as Ethereum, "charge" the smart contract "gas" for the rights to execute\ntheir code. If a smart contract does get into a state where execution will never halt, it eventually\nruns out of gas, ceases execution, and any state transition that would have been made by the smart\ncontract is rolled back. Polkadot uses a ',(0,o.kt)("em",{parentName:"p"},"weight-fee model")," and not a  ",(0,o.kt)("em",{parentName:"p"},"gas-metering model"),"."),(0,o.kt)("p",null,"Parachains can implement arbitrarily powerful programming languages and also contain no notion of\ngas for their own native logic. This means that some functionality is easier to implement for the\ndeveloper, but it also means there are some constructs, such as a loop without a terminating\ncondition, which should ",(0,o.kt)("em",{parentName:"p"},"never")," be implemented. Leaving certain logic, such as complex loops that\ncould possibly run indefinitely, to a non-smart contract layer, or even trying to eliminate it\nentirely, will often be a wiser choice. Parachains try to be proactive, while smart contract platforms\nare event-driven."),(0,o.kt)("h2",{id:"resources-1"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/56041305"},"When should I build a Substrate runtime versus a Substrate smart contract")," -\nA technical standpoint that answers the question of when a developer might choose to develop a\nruntime versus a smart contract.")))}u.isMDXComponent=!0}}]);