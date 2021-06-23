(self.webpackChunk=self.webpackChunk||[]).push([[8830],{3905:(a,e,t)=>{"use strict";t.d(e,{Zo:()=>c,kt:()=>u});var n=t(67294);function o(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,o=function(a,e){if(null==a)return{};var t,n,o={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(o[t]=a[t]);return o}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(o[t]=a[t])}return o}var l=n.createContext({}),h=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},c=function(a){var e=h(a.components);return n.createElement(l.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,o=a.mdxType,i=a.originalType,l=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),d=h(t),u=o,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return t?n.createElement(m,r(r({ref:e},c),{},{components:t})):n.createElement(m,r({ref:e},c))}));function u(a,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=a,s.mdxType="string"==typeof a?a:o,r[1]=s;for(var h=2;h<i;h++)r[h]=t[h];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46001:(a,e,t)=>{"use strict";t.r(e),t.d(e,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>h,toc:()=>c,default:()=>d});var n=t(22122),o=t(19756),i=(t(67294),t(3905)),r=["components"],s={id:"mirror-learn-parachains",title:"Parachains",sidebar_label:"Parachains",description:"An introductory guide to Polkadot Parachains."},l=void 0,h={unversionedId:"mirror-learn-parachains",id:"mirror-learn-parachains",isDocsHomePage:!1,title:"Parachains",description:"An introductory guide to Polkadot Parachains.",source:"@site/../docs/mirror-learn-parachains.md",sourceDirName:".",slug:"/mirror-learn-parachains",permalink:"/docs/mirror-learn-parachains",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-parachains.md",version:"current",frontMatter:{id:"mirror-learn-parachains",title:"Parachains",sidebar_label:"Parachains",description:"An introductory guide to Polkadot Parachains."},sidebar:"docs",previous:{title:"Parachain Slots Auction",permalink:"/docs/mirror-learn-auction"},next:{title:"Parathreads",permalink:"/docs/mirror-learn-parathreads"}},c=[{value:"Parachain Economies",id:"parachain-economies",children:[]},{value:"Parachain Hubs",id:"parachain-hubs",children:[]},{value:"Parachain Slot Acquisition",id:"parachain-slot-acquisition",children:[{value:"Slot Expiration",id:"slot-expiration",children:[]}]},{value:"Common Good Parachains",id:"common-good-parachains",children:[]},{value:"Examples",id:"examples",children:[]},{value:"FAQ",id:"faq",children:[{value:"What is &quot;parachain consensus&quot;?",id:"what-is-parachain-consensus",children:[]},{value:"How will parachain slots be distributed?",id:"how-will-parachain-slots-be-distributed",children:[]},{value:"What happens to parachains when the number of validators drops below a certain threshold?",id:"what-happens-to-parachains-when-the-number-of-validators-drops-below-a-certain-threshold",children:[]},{value:"Parachain Development Kits (PDKs)",id:"parachain-development-kits-pdks",children:[]},{value:"Deploying parachains",id:"deploying-parachains",children:[]}]},{value:"Resources",id:"resources",children:[]}],p={toc:c};function d(a){var e=a.components,s=(0,o.Z)(a,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: For information on how to participate in the crowdloan and parachain auction testing on\nRococo, please see the "," >\n",(0,i.kt)("a",{parentName:"p",href:"mirror-build-parachains-rococo"},"Rococo page"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"One parachain",src:t(66729).Z})),(0,i.kt)("p",null,"A parachain is an application-specific data structure that is globally coherent and validatable by\nthe validators of the Relay Chain. Most commonly a parachain will take the form of a blockchain, but\nthere is no specific need for them to be actual blockchains. They take their name from the concept\nof parallelized chains that run parallel to the Relay Chain. Due to their parallel nature, they are\nable to parallelize transaction processing and achieve scalability of the\nKusama system. They\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-security"},"share in the security")," of the entire network\nand can communicate with other parachains through\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-crosschain"},"XCMP"),"."),(0,i.kt)("p",null,"Parachains are maintained by a network maintainer known as a\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-collator"},"collator"),". The role of the collator node is\nto maintain a full-node of the parachain, retain all necessary information of the parachain, and\nproduce new block candidates to pass to the Relay Chain validators for verification and inclusion in\nthe shared state of Polkadot. The incentivization of a collator node is an implementation detail of\nthe parachain. They are not required to be staked on the Relay Chain or own DOT tokens unless\nstipulated to do so by the parachain implementation."),(0,i.kt)("p",null,"The Polkadot Host (PH) requires that the state transitions performed on parachains to be specified\nas a Wasm executable. Proofs of new state transitions that occur on a parachain must be validated\nagainst the registered state transition function (STF) that is stored on the Relay Chain by the\nvalidators before  Kusama acknowledges a\nstate transition has occurred on a parachain. The key constraint regarding the logic of a parachain\nis that it must be verifiable by the Relay Chain validators. Verification most commonly takes the\nform of a bundled proof of a state transition known as a Proof-of-Verification (PoV) block, which is\nsubmitted to the validators from one or more of the parachain collators to be checked."),(0,i.kt)("h2",{id:"parachain-economies"},"Parachain Economies"),(0,i.kt)("p",null,"Parachains may have their own economies with their own native tokens. Schemes such as Proof-of-Stake\nare usually used to select the validator set in order to handle validation and finalization;\nparachains will not be required to do either of those things. However, since\nKusama is not overly particular about what\nthe parachain can implement, it may be the choice of the parachain to implement a staking token, but\nit's not generally necessary."),(0,i.kt)("p",null,"Collators may be incentivized through inflation of a native parachain token. There may be other ways\nto incentivize the collator nodes that do not involve inflating the native parachain token."),(0,i.kt)("p",null,"Transaction fees in a native parachain token can also be an implementation choice of parachains.\nKusama makes no hard and fast rules for how\nthe parachains decide on original validity of transactions. For example, a parachain may be\nimplemented so that transactions must pay a minimum fee to collators to be valid. The Relay Chain\nwill enforce this validity. Similarly, a parachain could not include that in their implementation\nand Polkadot would still enforce its validity."),(0,i.kt)("p",null,"Parachains are not required to have their own token. If they do, is up to the parachain to make the\neconomic case for their token, not  Kusama."),(0,i.kt)("h2",{id:"parachain-hubs"},"Parachain Hubs"),(0,i.kt)("p",null,"While Polkadot enables crosschain functionality amongst the parachains, it necessitates that there\nis some latency between the dispatch of a message from one parachain until the destination parachain\nreceives the message. In the optimistic scenario, the latency for this message should be at least 2\nblocks - one block for the message to be dispatched and one block for the receiving parachain to\nprocess and produce a block that acts upon the message. However, in some cases we may see that the\nlatency for messages is higher if there are many messages that are in queue to be processed, or if\nthere exist no nodes that are running both of the parachain networks that can quickly gossip the\nmessage across the networks."),(0,i.kt)("p",null,"Due to the neccesary latency involved in sending crosschain messages, some parachains are planning\nto become ",(0,i.kt)("em",{parentName:"p"},"hubs")," for an entire industry. For example, a parachain project\n",(0,i.kt)("a",{parentName:"p",href:"https://acala.network"},"Acala")," is planning to become a hub for decentralized finance (DeFi)\napplications. Many DeFi applications take advantage of a property known as ",(0,i.kt)("em",{parentName:"p"},"composability")," which\nmeans that functions of one application can be composed with others in a synergistic way to create\nnew applications. One example of this include flash loans, which borrow funds to execute some\non-chain logic as long as the loan is repaid at the end of the transaction."),(0,i.kt)("p",null,"An issue with crosschain latency means that the property of composability is weakened among\nparachains compared to a single blockchain. ",(0,i.kt)("strong",{parentName:"p"},"This implication is common to all sharded blockchain\ndesigns, including Polkadot, Eth2.0, and others.")," The solution to this is the introduction of\nparachain hubs which maintain the stronger property of single block composability."),(0,i.kt)("h2",{id:"parachain-slot-acquisition"},"Parachain Slot Acquisition"),(0,i.kt)("p",null," Kusama supports a limited number of\nparachains, currently estimated to be about 100. As the number of slots is limited, there are\nseveral ways to allocate them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Governance granted parachains, or "common good" parachains'),(0,i.kt)("li",{parentName:"ul"},"Auction granted parachains"),(0,i.kt)("li",{parentName:"ul"},"Parathreads")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#common-good-parachains"},'"Common Good" parachains')," are allocated by Polkadot's on-chain\n","\n",(0,i.kt)("a",{parentName:"p",href:"mirror-learn-governance"},"governance"),' system, and are deemed as a "common\ngood" for the network, such as bridges to other networks or chains. They are usually considered\nsystem level chains or public utility chains. These typically do not have an economic model of their\nown and help remove transactions from the Relay Chain, allowing for more efficient parachain\nprocessing.'),(0,i.kt)("p",null,"","\n",(0,i.kt)("a",{parentName:"p",href:"mirror-learn-auction"},"Auction granted parachains")," are granted in a\npermissionless auction. Parachain teams can either bid with their own DOT tokens, or source them\nfrom the community using the ","\n",(0,i.kt)("a",{parentName:"p",href:"mirror-learn-crowdloans"},"crowdloan functionality"),"."),(0,i.kt)("p",null,"","\n",(0,i.kt)("a",{parentName:"p",href:"mirror-learn-parathreads"},"Parathreads")," have the same API as parachains, but\nare scheduled for execution on a pay-as-you-go basis with an auction for each block."),(0,i.kt)("h3",{id:"slot-expiration"},"Slot Expiration"),(0,i.kt)("p",null,"When a parachain wins an auction, the tokens that it bid gets reserved until the end of the lease.\nReserved balances are non-transferrable and cannot be used for staking. At the end of the lease, the\ntokens are unreserved. Parachains that have not secured a new lease to extend their slot will\nautomatically become parathreads."),(0,i.kt)("h2",{id:"common-good-parachains"},"Common Good Parachains"),(0,i.kt)("p",null,'"Common Good" parachains are parachain slots reserved for functionality that benefits the the\necosystem as a whole. By allocating a subset of parachain slots to common good chains, the entire\nnetwork can realize the benefit of valuable parachains that would otherwise be underfunded due to\nthe free-rider problem. They are not allocated via the parachain auction process, but by the\non-chain ',"\n",(0,i.kt)("a",{parentName:"p",href:"mirror-learn-governance"},"governance")," system. Generally, a common good\nparachain's lease would not expire; it would only be removed via governance."),(0,i.kt)("p",null,"See the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"Polkadot blog article"),"\nand the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-common-goods"},"common good parachains")," page for more information."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Some examples of parachains:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Encrypted Consortium Chains"),": These are possibly private chains that do not leak any\ninformation to the public, but still can be interacted with trustlessly due to the nature of the\nXCMP protocol."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"High Frequency Chains"),": These are chains that can compute many transactions in a short amount\nof time by taking certain trade-offs or making optimizations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy Chains"),": These are chains that do not leak any information to the public through use of\nnovel cryptography."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Smart Contract Chains"),": These are chains that can have additional logic implemented on them\nthrough the deployment of code known as ",(0,i.kt)("em",{parentName:"li"},"smart contracts"),".")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"what-is-parachain-consensus"},'What is "parachain consensus"?'),(0,i.kt)("p",null,'"Parachain consensus" is special in that it will follow the Polkadot Relay Chain. Parachains cannot\nuse other consensus algorithms that provide their own finality. Only sovereign chains (that must\nbridge to the Relay Chain via a parachain) can control their own consensus. Parachains have control\nover how blocks are authored and by whom.'),(0,i.kt)("h3",{id:"how-will-parachain-slots-be-distributed"},"How will parachain slots be distributed?"),(0,i.kt)("p",null,"Parachain slots will be acquirable through auction, please see the\n","\n",(0,i.kt)("a",{parentName:"p",href:"mirror-learn-auction"},"parachain slots")," article. Additionally, some parachain\nslots will be set aside to run ","\n",(0,i.kt)("a",{parentName:"p",href:"mirror-learn-parathreads"},"parathreads")," ","\u2014"," chains that bid on a per-block\nbasis to be included in the Relay Chain."),(0,i.kt)("h3",{id:"what-happens-to-parachains-when-the-number-of-validators-drops-below-a-certain-threshold"},"What happens to parachains when the number of validators drops below a certain threshold?"),(0,i.kt)("p",null,"The minimal safe ratio of validators per parachain is 5:1. With a sufficiently large set of\nvalidators, the randomness of their distribution along with\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-availability"},"availability and validity")," will make sure\nsecurity is on-par. However, should there be a big outage of a popular cloud provider or another\nnetwork connectivity catastrophe, it is reasonable to expect that the number of validators per chain\nwill drop."),(0,i.kt)("p",null,"Depending on how many validators went offline, the outcome differs."),(0,i.kt)("p",null,"If a few validators went offline, the parachains whose validator groups will be too small to\nvalidate a block will skip those blocks. Their block production speed will slow down to any\nincrement of 6 seconds, until the situation is resolved and the optimal number of validators is in\nthat parachain's validator group again."),(0,i.kt)("p",null,"If anywhere from 30% to 50% of the validators go offline, availability will suffer because we need\ntwo thirds of the validator set to back the parachain candidates. In other words, all parachains\nwill stop until the situation is resolved. Finality will also stop, but low-value transactions on\nthe relay chain should be safe enough to execute, despite common forks. Once the required number of\nvalidators is in the validator set again, parachains will resume block production."),(0,i.kt)("p",null,"Given that collators are full nodes of the relay chain and the parachain they are running, they will\nbe able to recognize a disruption as soon as it occurs and should stop producing block candidates.\nLikewise, it should be easy for them to recongize when it's safe to restart block production -\nperhaps based on finality delay, validator set size, or some other factor that is yet to be decided\nwithin ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus"),"."),(0,i.kt)("h3",{id:"parachain-development-kits-pdks"},"Parachain Development Kits (PDKs)"),(0,i.kt)("p",null,"Parachain Development Kits are a set of tools that enable developers to create their own\napplications as parachains. For more info see ",(0,i.kt)("a",{parentName:"p",href:"build-pdk"},"here"),"."),(0,i.kt)("h3",{id:"deploying-parachains"},"Deploying parachains"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo"},"Cumulus repository")," README for\ninformation on compiling and deploying a parachain."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/polkadot-the-parachain-3808040a769a"},"Polkadot: The Parachain"),' -\nBlog post by Polkadot co-founder Rob Habermeier that introduced parachains in 2017 as "a simpler\nform of blockchain, which attaches to the security provided by a Relay Chain rather than providing\nits own. The Relay Chain provides security to attached parachains, but also provides a guarantee\nof secure message-passing between them."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.network/the-path-of-a-parachain-block/"},"The Path of a Parachain Block")," - A\ntechnical walkthrough of how parachains interact with the Relay Chain.")))}d.isMDXComponent=!0},66729:(a,e,t)=>{"use strict";t.d(e,{Z:()=>n});const n=t.p+"assets/images/one_parachain-5fe48b5bfbcf7680a91b0f5a940b39c7.png"}}]);