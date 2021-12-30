"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56794:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>d});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"learn-nft",title:"NFTs",sidebar_label:"NFTs",slug:"../learn-nft"},l=void 0,p={unversionedId:"learn/learn-nft",id:"learn/learn-nft",title:"NFTs",description:"This page is a high-level overview of NFTs and the various approaches to NFTs within",source:"@site/../docs/learn/learn-nft.md",sourceDirName:"learn",slug:"/learn-nft",permalink:"/docs/learn-nft",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-nft.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1640852809,formattedLastUpdatedAt:"12/30/2021",frontMatter:{id:"learn-nft",title:"NFTs",sidebar_label:"NFTs",slug:"../learn-nft"}},c=[{value:"Fungibility",id:"fungibility",children:[],level:2},{value:"NFT Standards",id:"nft-standards",children:[{value:"A typical NFT on Ethereum",id:"a-typical-nft-on-ethereum",children:[],level:4}],level:2},{value:"NFTs 2.0: NFTs in Polkadot &amp; Kusama",id:"nfts-20-nfts-in-polkadot--kusama",children:[{value:"Unique network",id:"unique-network",children:[{value:"NFT from Unqnft.io 2",id:"nft-from-unqnftio-2",children:[],level:4}],level:3},{value:"RMRK",id:"rmrk",children:[{value:"NFT Legos",id:"nft-legos",children:[],level:4},{value:"NFT from Kanaria",id:"nft-from-kanaria",children:[],level:4}],level:3},{value:"Efinity",id:"efinity",children:[],level:3},{value:"Moonbeam",id:"moonbeam",children:[],level:3},{value:"Uniques",id:"uniques",children:[],level:3}],level:2},{value:"Bridging",id:"bridging",children:[{value:"References",id:"references",children:[],level:3}],level:2}],h={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page is a high-level overview of NFTs and the various approaches to NFTs within\nthe Polkadot network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Expect Chaos.")),(0,r.kt)("h2",{id:"fungibility"},"Fungibility"),(0,r.kt)("p",null,"NFT stands for ",(0,r.kt)("em",{parentName:"p"},"non-fungible token"),". Fungibility means interchangeability inside\nof a group. In theory, a $20 bill is always worth $20 in a store and identical\nin value to any other $20 bill. It is not, however, fungible with a $1 or $100\ndollar bill (outside its group)."),(0,r.kt)("p",null,"A Pokemon\u2122 trading card of a Charizard is non-fungible with a card of Squirtle,\nwhereas editions of Charizard are fungible with each other."),(0,r.kt)("p",null,"Fungibility is a spectrum - what is fungible to some might not be fungible to\nothers. In reality, Pokemon\u2122 cards, the canonical example of non-fungible\nassets are more fungible than US dollar bills, each of which has a unique serial\nnumber that may be important to a government agency. The cards have no\nserial numbers ","[1]","."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.investopedia.com/thmb/Nr-RLORu5CX_lIWZfLmV5X0eIrc=/613x345/smart/filters:no_upscale()/Clipboard01-d20f6eb9351e4f36a46e11fd87b53b2d.jpg",alt:null})),(0,r.kt)("p",null,'Additionally, a digital item like a "purple magic sword" in a game may be\nfungible with another visually identical sword if all the player cares about is\nthe looks of their character. But if the other sword has a different function,\nand that function influences the outcome of an adventure the player is about to\nembark on, then visually identical swords are absolutely non-fungible.'),(0,r.kt)("p",null,"Bearing that in mind, the simplest explanation of NFTs is that ",(0,r.kt)("strong",{parentName:"p"},'NFTs are rows\nof arbitrary, project-specific, and non-interchangeable data that can be\ncryptographically proven to "belong" to someone'),". This data can be anything -\nconcert tickets, attendance badges, simple words, avatars, plots of land in a\nmetaverse, audio clips, house deeds, mortgages, and more."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"nft-standards"},"NFT Standards"),(0,r.kt)("p",null,'A general-purpose blockchain is not built to natively understand the concept of\nNFTs. It is only natively aware and optimized for its own native tokens, but\nimplementations built on such a chain are essentially "hacks".'),(0,r.kt)("p",null,'For example, Ethereum is a general-purpose blockchain that does not have the\nconcept of "tokens" (fungible or not) built-in. Tokens in Ethereum are\nessentially spreadsheets of information to be interpreted and read in a\ncertain way by various user interfaces. This ',(0,r.kt)("em",{parentName:"p"},"way")," in which they should read\nthem is called a ",(0,r.kt)("em",{parentName:"p"},"standard"),"."),(0,r.kt)("p",null,"The most widespread fungible token standard you may have heard of is ERC20,\nwhile the most widespread NFT standard is ERC721, followed closely by ERC1155.\nThe downside of having to define these standards is that they are always\ninstructions for how to read a spreadsheet pretending to serve information in a\ncertain way, which by definition cannot be optimized. For this reason, even on a\ngood day of extremely low network congestion, interactions with NFTs on any EVM\nchain will cost a few dollars but were on average around $100 per interaction\n(transfer, mint, sale) in 2021 on Ethereum."),(0,r.kt)("p",null,"This prevents use cases that go beyond the current craze of ",(0,r.kt)("em",{parentName:"p"},"digital dust\ngathering NFTs"),' on Ethereum - profile pictures, generative "look once and then\nput away" art, ',(0,r.kt)("a",{parentName:"p",href:"ens"},"ENS")," addresses, and ",(0,r.kt)("a",{parentName:"p",href:"https://poap.xyz/"},"proof of attendance badges"),"."),(0,r.kt)("h4",{id:"a-typical-nft-on-ethereum"},"A typical ",(0,r.kt)("a",{parentName:"h4",href:"https://opensea.io/assets/0x2127fe7ffce4380459cced92f2d4793f3af094a4/12598"},"NFT on Ethereum")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1970).Z})),(0,r.kt)("p",null,"For the sake of comparison, we can refer to these as NFTs 1.0: static NFTs that\nare almost exclusively image-based collectibles of varying rarity."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"nfts-20-nfts-in-polkadot--kusama"},"NFTs 2.0: NFTs in Polkadot & Kusama"),(0,r.kt)("p",null,"This is where Polkadot's technology shines and where NFTs 2.0 come into play."),(0,r.kt)("p",null,"By allowing ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"heterogeneous application-specific shards")," to\nexist, builders can natively optimize for complex NFT use cases without\ntradeoffs that would make interacting with the system prohibitively inefficient\nand expensive in other environments."),(0,r.kt)("p",null,"The following NFT solutions exist and are under development in the Polkadot\necosystem:"),(0,r.kt)("h3",{id:"unique-network"},"Unique network"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://unique.network/"},"Unique network"),", an NFT-specific blockchain offering\ninnovations such as sponsored transactions, bundling fungible tokens with\nnon-fungibles, and splitting NFTs into fungible tokens for partial ownership."),(0,r.kt)("p",null,"Unique Network have launched two NFT projects to date: Substrapunks as part of\n",(0,r.kt)("a",{parentName:"p",href:"https://hackusama.devpost.com/"},"Hackusama"),", and Chelobricks as a recent\npromotion during ",(0,r.kt)("a",{parentName:"p",href:"https://decoded.polkadot.network/"},"Polkadot Decoded"),". They are\ncurrently running a betanet which is bridged to Kusama, and on which these NFTs\nare already tradable."),(0,r.kt)("h4",{id:"nft-from-unqnftio-2"},"NFT from ",(0,r.kt)("a",{parentName:"h4",href:"https://unqnft.io"},"Unqnft.io")," ","[2]"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://unique.network/local/templates/unique/static/images/content/chel-400.jpg",alt:null})),(0,r.kt)("p",null,"Users can send KSM into their Unique Network escrow account, trade with it\nthere, and then send any earned or leftover KSM back."),(0,r.kt)("p",null,"Unique Network aims to make their marketplace technology open-source and\nwhitelabel-friendly. In theory, it should be trivial to set up a new marketplace\nfor your project using Unique's technology. Unique network aims to be a\nparachain on Polkadot, and Quartz is their Kusama counterpart."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Unique Network works closely with RMRK (see below).")),(0,r.kt)("h3",{id:"rmrk"},"RMRK"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://rmrk.app"},"RMRK"),' is a "hack", a forced standard directly on top of the\nKusama relay chain. Since Kusama is meant to be lightweight to process\nthe various parachains connected to it, it does not have any other\ncomplex chain logic like native NFTs or smart contracts to enable them. However,\nbecause of market demand and Kusama\'s "chaotic" nature, the RMRK team decided to\ntake the ',(0,r.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Colored_Coins"},'"colored coins"')," approach\nfrom Bitcoin and implement NFTs as graffiti on the Kusama chain."),(0,r.kt)("p",null,'The RMRK standard is a set of rules and specifications for how to interpret\nspecial graffiti on Kusama called "remarks", accessible via the core ',(0,r.kt)("inlineCode",{parentName:"p"},"system"),"\npallet in any Substrate chain."),(0,r.kt)("p",null,'The RMRK team has just launched the 2.0 version of the protocol, a set of "NFT\nlegos", primitives that, when put together, allow a builder to compose an NFT\nsystem of arbitrary complexity without smart contracts. '),(0,r.kt)("h4",{id:"nft-legos"},"NFT Legos"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"NFTs can own other NFTs, NFTs can equip other NFTs for visual change"),(0,r.kt)("li",{parentName:"ol"},"NFTs can have multiple resources (different outputs based on context and\nresource priority)"),(0,r.kt)("li",{parentName:"ol"},"NFTs can have on-chain emotes (reactions) for price discovery and social\nmechanics"),(0,r.kt)("li",{parentName:"ol"},"NFTs have conditional rendering (e.g. show Mona Lisa as blushing if she got\n50 kissy \ud83d\ude18 emoji)"),(0,r.kt)("li",{parentName:"ol"},"NFTs can be governed by the community via fungible shareholder-tokens\n(fractionalization of NFTs)")),(0,r.kt)("p",null,"The upcoming version 3.0 (Q1 2022) will be pallet and smart contract (EVM)\nversions of all RMRK 2.0 logic, and integration into partner chains for cheap\nand easy teleportation of non-fungibles across dozens of chains."),(0,r.kt)("h4",{id:"nft-from-kanaria"},"NFT from ",(0,r.kt)("a",{parentName:"h4",href:"https://kanaria.rmrk.app"},"Kanaria")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8997).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'A multi-resource NFT (gif of statue, and SVG-composable dynamic NFT in one) that can\nalso equip other NFTs from within its "inventory".')),(0,r.kt)("p",null,"The RMRK team is collaborating closely with Unique network. RMRK's logic and\ntechnology will be deployed on Unique Network in the form of runtime upgrades\n(FRAME pallets)."),(0,r.kt)("p",null,"Two marketplaces for RMRK-based NFTs exist with hundreds of projects already\nlaunched:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://singular.rmrk.app"},"Singular"),", the official marketplace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kodadot.xyz"},"Kodadot"),", a third party marketplace")),(0,r.kt)("p",null,"Additionally, RMRK 2.0 functionality featuring composable, nested,\nmulti-resource NFTs can be accessed and tested on the\n",(0,r.kt)("a",{parentName:"p",href:"https://kanaria.rmrk.app"},"Kanaria")," platform."),(0,r.kt)("p",null,"For a complete introduction into RMRK, see\n",(0,r.kt)("a",{parentName:"p",href:"https://url.rmrk.app/rmrkcc"},"the video explainer of RMRK"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://url.rmrk.app/kanariacc"},"the video explainer of Kanaria (RMRK 2)"),", and\nread ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rmrk.app"},"the docs"),"."),(0,r.kt)("h3",{id:"efinity"},"Efinity"),(0,r.kt)("p",null,"Spearheaded by ",(0,r.kt)("a",{parentName:"p",href:"https://enjin.io"},"Enjin"),", the authors of Ethereum's ERC1155\nstandard and makers of the Enjin wallet and Unity plugin, which allows easy\nimplementation of NFTs into 3D games, Efinity is an NFT bridging chain coming to\nKusama and Polkadot in 2022."),(0,r.kt)("p",null,"They plan to build a ",(0,r.kt)("em",{parentName:"p"},"paratoken")," which would be a standard for token\nmigration across different parachains in the Polkadot ecosystem, but also into\nand out of Ethereum and other EVM systems."),(0,r.kt)("h3",{id:"moonbeam"},"Moonbeam"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moonbeam.network"},"Moonbeam")," and its Kusama counterpart Moonriver are\nfull EVM deployments with Ethereum RPC endpoints."),(0,r.kt)("p",null,"This means that the entire toolkit offered to other EVM chains (stacks like\nHardhat, Remix, Truffle, Metamask, etc.) are available to Moonriver / Moonbeam users\nand developers, giving it a noticeable head start in attracting existing\nuserbases."),(0,r.kt)("p",null,"Several dozen high profile teams are launching their products (or\nre-launching) on Moonriver / Moonbeam, however, it is essential to note that\nMoonbeam is an EVM chain and will therefore suffer from the same limitations as\nany other EVM chain in regards to customization and feature-richness of NFTs."),(0,r.kt)("p",null,"A notable advantage, however, is that Moonriver / Moonbeam is still a Substrate\nchain, meaning integration of custom pallets into the runtime is still possible,\nmaking NFT specific optimizations at the chain runtime level a reliable way to\nkeep EVM compatibility of tools while at the same time optimizing storage and\ninteractions for rich NFTs."),(0,r.kt)("h3",{id:"uniques"},"Uniques"),(0,r.kt)("p",null,"Uniques is a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/uniques"},"FRAME pallet"),"\ndeployed on the Statemint common good parachain. It implements the\nmost basic kind of NFT - a data record referencing some metadata. This metadata\nreference is mutable until frozen, so NFTs and their classes (entities\nderived from) are mutable unless specifically made immutable by the issuer."),(0,r.kt)("p",null,"Uniques takes a very bare-bones approach on purpose, to keep the Statemint chain\na simple balance-keeping chain for both fungible and non-fungibles."),(0,r.kt)("p",null,"Uniques NFTs can be viewed and interacted with on\n",(0,r.kt)("a",{parentName:"p",href:"https://singular.rmrk.app"},"RMRK's Singular platform"),", by switching the top\nright menu from Kusama to Statemine."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(80109).Z})),(0,r.kt)("p",null,"The can also be interacted with directly through the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-statemine-rpc.paritytech.net#/extrinsics"},"extrinsics tab of Statemine"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(93891).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"More UIs are already being developed"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"bridging"},"Bridging"),(0,r.kt)("p",null,"Bridging to and from Substrate chains and EVM chains takes much effort but\nis a highly desired feature in the NFT industry. Merging the collector and\ncustomer base has significant implications, so multiple projects focus on making\nthis possible."),(0,r.kt)("p",null,"Apart from RMRK (Substrate-to-Substrate seamless teleportation natively with\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"XCMP"),") and Efinity (Paratoken), the following efforts are\nunderway:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MyNFT"),": an EVM to EVM bridging effort."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RMRK <-> EVM")," Simplification bridge: a bridge developed during the\n",(0,r.kt)("a",{parentName:"li",href:"https://rmrk.devpost.com"},"RMRK hackathon")," for porting RMRK NFTs into\nsimplified IOUs on EVM chains, primary deployment pending November 2022 on\nMoonriver"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RMRK <-> EVM")," Full bridge: EVM version of RMRK 2.0 should be ready in December\n2021, meaning a full migration of RMRK 2.0 NFTs from RMRK (Kusama) to\nMoonriver (and other EVMs) will become possible")),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[1]",": ",(0,r.kt)("a",{parentName:"li",href:"https://www.investopedia.com/terms/l/liars-poker.asp"},"Investopedia")),(0,r.kt)("li",{parentName:"ul"},"[2]",": ",(0,r.kt)("a",{parentName:"li",href:"https://unique.network/blog/chelobricks-making-waves-with-10-000-substrate-based-nfts/"},"Unique Network's Chelobrick"))))}d.isMDXComponent=!0},8997:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kanaria-55b0060679c6303db0fc91f5c402ba02.png"},80109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft-statemine-48ec78c3fcc8199d7d9164959424d5e3.png"},1970:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/samurai-830479330323f7feeae0b981479ad9cc.png"},93891:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uniques-cd3bd4a76bd57ef0e79de4a0b36aa237.png"}}]);