(self.webpackChunk=self.webpackChunk||[]).push([[5529],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>m});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=h(a),m=n,u=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return a?o.createElement(u,r(r({ref:t},d),{},{components:a})):o.createElement(u,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var h=2;h<i;h++)r[h]=a[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5392:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>h,toc:()=>d,default:()=>p});var o=a(22122),n=a(19756),i=(a(67294),a(3905)),r=["components"],s={id:"faq",title:"Frequently Asked Questions (FAQs)",sidebar_label:"Frequently Asked Questions (FAQs)"},l=void 0,h={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions (FAQs)",description:"_This FAQ focuses on technical questions for users interested in developing applications for",source:"@site/../docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/faq.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1626103572,formattedLastUpdatedAt:"7/12/2021",frontMatter:{id:"faq",title:"Frequently Asked Questions (FAQs)",sidebar_label:"Frequently Asked Questions (FAQs)"}},d=[{value:"Polkadot Launch",id:"polkadot-launch",children:[]},{value:"Polkadot Roadmap",id:"polkadot-roadmap",children:[]},{value:"Validators",id:"validators",children:[{value:"How do I apply to be a validator?",id:"how-do-i-apply-to-be-a-validator",children:[]},{value:"How are validators rewarded?",id:"how-are-validators-rewarded",children:[]},{value:"What is the minimum stake necessary to be elected as an active validator?",id:"what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator",children:[]},{value:"Why will Polkadot have only 1000 validators while other projects have hundreds of thousands?",id:"why-will-polkadot-have-only-1000-validators-while-other-projects-have-hundreds-of-thousands",children:[]}]},{value:"Relay Chain",id:"relay-chain",children:[{value:"What is the block time of the Relay Chain?",id:"what-is-the-block-time-of-the-relay-chain",children:[]},{value:"Does Polkadot have smart contracts?",id:"does-polkadot-have-smart-contracts",children:[]},{value:"How will the Polkadot Relay Chain connect to external chains in the ecosystem?",id:"how-will-the-polkadot-relay-chain-connect-to-external-chains-in-the-ecosystem",children:[]}]},{value:"DOT",id:"dot",children:[{value:"What is the difference between DOT (old) and new DOT?",id:"what-is-the-difference-between-dot-old-and-new-dot",children:[]},{value:"What is the inflation rate of the DOT?",id:"what-is-the-inflation-rate-of-the-dot",children:[]}]},{value:"Governance",id:"governance",children:[{value:"What prevents Polkadot governance from failing?",id:"what-prevents-polkadot-governance-from-failing",children:[]},{value:"What prevents Polkadot governance from becoming plutocratic?",id:"what-prevents-polkadot-governance-from-becoming-plutocratic",children:[]}]},{value:"Parachains",id:"parachains",children:[{value:"How do parachain economics work?",id:"how-do-parachain-economics-work",children:[]},{value:"Are parachains ephemeral? What happens when a parachain loses the next auction?",id:"are-parachains-ephemeral-what-happens-when-a-parachain-loses-the-next-auction",children:[]}]},{value:"Networking",id:"networking",children:[{value:"What is libp2p?",id:"what-is-libp2p",children:[]},{value:"Does Polkadot use libp2p?",id:"does-polkadot-use-libp2p",children:[]},{value:"How does libp2p differ from IPFS?",id:"how-does-libp2p-differ-from-ipfs",children:[]}]},{value:"Kusama",id:"kusama",children:[{value:"What is the minimum amount of KSM / DOT I can have in my account?",id:"what-is-the-minimum-amount-of-ksm--dot-i-can-have-in-my-account",children:[]},{value:"What are the transfer fees for Kusama?",id:"what-are-the-transfer-fees-for-kusama",children:[]}]},{value:"Answered by Gav series",id:"answered-by-gav-series",children:[]}],c={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This FAQ focuses on technical questions for users interested in developing applications for\nPolkadot. If you have a more general question, you may wish to search for the answer on our support\n",(0,i.kt)("a",{parentName:"em",href:"https://support.polkadot.network/support/home"},"Knowledge Base")," or the main\n",(0,i.kt)("a",{parentName:"em",href:"https://polkadot.network/faq"},"Polkadot Network FAQ"),". If you have a question that is not answered,\nplease feel free to ask on the Polkadot Watercooler\n",(0,i.kt)("a",{parentName:"em",href:"https://app.element.io/#/room/#polkadot-watercooler:web3.foundation"},"Element channel")," or email\n",(0,i.kt)("a",{parentName:"em",href:"mailto:support@polkadot.network"},"support"),".")),(0,i.kt)("h2",{id:"polkadot-launch"},"Polkadot Launch"),(0,i.kt)("p",null,"The Genesis block of the Polkadot network was launched on May 26, 2020, as a Proof of Authority\n(PoA) network, with governance controlled by the single Sudo (super-user) account. During this time,\nvalidators started joining the network and signaling their intention to participate in consensus."),(0,i.kt)("p",null,"The network evolved to become a Proof of Stake (PoS) network on June 18, 2020. With the chain\nsecured by the decentralized community of validators, the Sudo module was removed on July 20, 2020,\ntransitioning the governance of the chain into the hands of the token (DOT) holders. This is the\npoint where Polkadot became decentralized."),(0,i.kt)("p",null,"The final step of the transition to full-functioning Polkadot was the enabling of transfer\nfunctionality, which occurred on Polkadot at block number 1_205_128 on August 18, 2020, at 16:39\nUTC."),(0,i.kt)("p",null,"On August 21, 2020, Redenomination of DOT occurred. From this date, one DOT (old) equals 100 new\nDOT."),(0,i.kt)("h2",{id:"polkadot-roadmap"},"Polkadot Roadmap"),(0,i.kt)("p",null,"For more information on the Polkadot roadmap please visit the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/technology/#roadmap"},"official Polkadot website"),"."),(0,i.kt)("h2",{id:"validators"},"Validators"),(0,i.kt)("h3",{id:"how-do-i-apply-to-be-a-validator"},"How do I apply to be a validator?"),(0,i.kt)("p",null,"There is no central authority that decides on validators, so there is not per se an ",(0,i.kt)("em",{parentName:"p"},"application"),"\nthat you can fill out. Registering as a validator is permissionless; in order to become one you must\nonly set up a validator node and mark your intention to validate on chain. For detailed instruction\non how to do this you can consult the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-kusama"},"Kusama validator guide")," on validating for Kusama or the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"Polkadot validator guide")," for validating on Polkadot."),(0,i.kt)("p",null,"However, once you've set up a validator and have registered your intention it does not mean that you\nwill be included in the ",(0,i.kt)("em",{parentName:"p"},"active set")," right away. The validators are elected to the active set based\non the results of an election algorithm known as ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),". Phragm\xe9n's\nmethod tries to accomplish two goals: 1) select ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," members from a larger set based on\nstake-weighted votes and 2) equalize the stake backing each validator as much as possible."),(0,i.kt)("p",null,"You will likely want to campaign your validator to the community in order to get more backing. You\nare looking for ",(0,i.kt)("em",{parentName:"p"},"nominators")," that will put up their tokens to increase the stake for your validator.\nFor validators who cannot acquire the minimum stake from the community, Parity and Web3 Foundation\nalso run a joint program called ",(0,i.kt)("a",{parentName:"p",href:"/docs/thousand-validators"},"Thousand Validators")," that will nominate\nvalidators if they apply and fit the requirements."),(0,i.kt)("h3",{id:"how-are-validators-rewarded"},"How are validators rewarded?"),(0,i.kt)("p",null,"Validators are rewarded from the inflation of the Relay Chain, transaction fees, and tips. However,\nthey only take a percentage of the former two. More details can be read on the page for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-validator-payout"},"validator payouts"),"."),(0,i.kt)("h3",{id:"what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator"},"What is the minimum stake necessary to be elected as an active validator?"),(0,i.kt)("p",null,"The minimum stake that is necessary to be elected as an active validator is dynamic and can change\nover time. It depends not only on how much stake is being put behind each validator, but also the\nsize of the active set and how many validators are waiting in the pool."),(0,i.kt)("p",null,"There are a few ways to estimate the minimum stake."),(0,i.kt)("p",null,"One way can be to navigate to the\n",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/ipns/polkadot.dotapps.io/#/staking/targets"},"Polkadot Apps Targets tab"),'. The value\nat the top of the screen saying "Lowest" is the least staked validator. You need at least this\nmuch + 1 to enter the set.'),(0,i.kt)("p",null,"You can also use some tools some to perform estimations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-debug-kit/tree/master/offline-election"},"Offline Election"),"\ncan provide exact results of running an election on the current set of validators using the same\nRust code that is ran in Polkadot.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/ansonla3/kusama-validator-stats"},"Validator stats script")," can give you an\nestimate that is based on the currently elected set, as well as some statistics about Kusama\nvalidators."))),(0,i.kt)("h3",{id:"why-will-polkadot-have-only-1000-validators-while-other-projects-have-hundreds-of-thousands"},"Why will Polkadot have only 1000 validators while other projects have hundreds of thousands?"),(0,i.kt)("p",null,"Polkadot's goal to have 1000 validators is set to be something that is practically achievable in the\nshort term with high confidence of good performance in a live environment. Furthermore, validators\nin Polkadot are not the only stakers, and if we consider the number of stakers that can be possible\non Polkadot the number can scale up to hundreds of thousands. Since validators are performing\ncritical consensus work to maintain the security of the chain including all of its shards, a more\nmodest number of validators is estimated to start. Upon later improvements, such as implementing\nsignature aggregation for finalization messages, the number of validators could reasonably scale up.\nHowever, increasing validators above one thousand remains a goal for later iterations of Polkadot."),(0,i.kt)("p",null,"It is also worth mentioning that one thousand validators is more than the number of validators of\nsimilar PoS chains with comparable levels of economic security as Polkadot. The closest contenders\nare operating with around 150 validators, while Polkadot is already securely running with\n900."),(0,i.kt)("p",null,"Additionally, other projects sometimes have a different definition of ",(0,i.kt)("em",{parentName:"p"},"validator"),' that approximates\nmore closely to remote signing keys without the full operation of a validating node. On Polkadot,\neach validator is running their own validating node and performing full verification of the Relay\nChain, voting on finality, producing blocks in their decided slots, and verifying parachain state\ntransitions. Other projects may consider validators and "validating nodes" as separate entities.'),(0,i.kt)("p",null,"Finally, individuals may participate in the block production process indirectly by\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"nominating")," validators. In this way,\nindividuals who are not running a node can still share in staking rewards."),(0,i.kt)("h2",{id:"relay-chain"},"Relay Chain"),(0,i.kt)("h3",{id:"what-is-the-block-time-of-the-relay-chain"},"What is the block time of the Relay Chain?"),(0,i.kt)("p",null,"Both the Kusama and Polkadot networks are currently operating at a rate of one block every six\nseconds."),(0,i.kt)("p",null,"This may be changed in the future. It may go as low as two to three seconds after optimizations, or\npotentially increase in order to handle the capacity of the parachain networking in a live\nenvironment."),(0,i.kt)("h3",{id:"does-polkadot-have-smart-contracts"},"Does Polkadot have smart contracts?"),(0,i.kt)("p",null,"No - and yes. The Polkadot Relay Chain does not implement smart contracts natively. The reason for\nnot having smart contracts on the Relay Chain is part of the design philosophy for Polkadot that\ndictates that the Relay Chain should be the minimal logic required to accomplish its job."),(0,i.kt)("p",null,"However, Polkadot will be a platform for other chains that ",(0,i.kt)("em",{parentName:"p"},"do")," implement smart contracts. It's\npossible for parachains to enable smart contract functionality and then benefit from the security\nand interoperability features of Polkadot. Additionally, existing smart contract chains can connect\nto Polkadot as a parachain, or via a bridge."),(0,i.kt)("p",null,"While the Polkadot Relay Chain does not implement smart contracts directly, undoubtedly there will\nbe parachains that do. So it's better to say that the Polkadot ",(0,i.kt)("em",{parentName:"p"},"ecosystem"),' has smart contracts\nversus "Polkadot has smart contracts."'),(0,i.kt)("h3",{id:"how-will-the-polkadot-relay-chain-connect-to-external-chains-in-the-ecosystem"},"How will the Polkadot Relay Chain connect to external chains in the ecosystem?"),(0,i.kt)("p",null,"One of the cornerstone interoperability technologies being researched and developed for deployment\non Polkadot is cross-chain bridges. Bridges come in a variety of flavors with varying levels of\ntrust associated with them. Polkadot is predominantly researching the trust-minimized flavor that\nimposes economic costs on the operators of the bridge, and therefore makes it economically secure.\nBridge efforts are being worked on in concert with other projects in the ecosystem. Eventually,\nthere will be bridges between Polkadot and most of the other major chains."),(0,i.kt)("h2",{id:"dot"},"DOT"),(0,i.kt)("h3",{id:"what-is-the-difference-between-dot-old-and-new-dot"},"What is the difference between DOT (old) and new DOT?"),(0,i.kt)("p",null,"The DOT (old) unit on Polkadot was at twelve decimal places, otherwise known as 1e12 Plancks. On 21\nAugust, 2020, Denomination Day, the DOT (old) value was redenominated to 1e10 (10_000_000_000, or\nten billion) Plancks, meaning that the new DOT was valued at ten decimal places. Following the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/redenomination"},"redenomination"),", the new DOT is called DOT."),(0,i.kt)("h3",{id:"what-is-the-inflation-rate-of-the-dot"},"What is the inflation rate of the DOT?"),(0,i.kt)("p",null,"The inflation rate is approximately 10% per year."),(0,i.kt)("p",null,"A portion of the inflation is rewarded to validators for performing their duties, while another\nportion may go directly to the treasury. The exact percentage that goes into both varies and is\nbased on the amount of DOT that are staked. Please see the article on\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking/#inflation"},"inflation")," for more information."),(0,i.kt)("h2",{id:"governance"},"Governance"),(0,i.kt)("h3",{id:"what-prevents-polkadot-governance-from-failing"},"What prevents Polkadot governance from failing?"),(0,i.kt)("p",null,"Polkadot's governance has already been shown to work. Examples can be found in the runtime upgrades\nthat have successfully taken place through on the testnets as well as in a real economic environment\non ",(0,i.kt)("a",{parentName:"p",href:"https://guide.kusama.network"},"Kusama")," and Polkadot itself."),(0,i.kt)("p",null,"It is fair to say that the field of on-chain blockchain governance is still new, and no one can\nclaim to know exactly what the optimal version of on-chain governance is yet. However, Polkadot\ntakes a brave step forward in pioneering thought-through mechanisms for evolving a blockchain."),(0,i.kt)("p",null,"Blockchains need a method to adapt and evolve. Therefore, an on-chain governance system was\nnecessary for the long-term success of Polkadot. Ultimately, it is the token holders that are\nresponsible for preventing Polkadot's governance from failing by using their economic value and\nconviction to sway the progression of the protocol."),(0,i.kt)("h3",{id:"what-prevents-polkadot-governance-from-becoming-plutocratic"},"What prevents Polkadot governance from becoming plutocratic?"),(0,i.kt)("p",null,"A savvy reader might have noticed that the answer to the previous question endowed the token holder\nwith the ultimate responsibility to ensure that Polkadot's governance does not fail. By following\nthe train of this assertion, one might assume that Polkadot's governance is susceptible to becoming\nruled by a few large token holders (called ",(0,i.kt)("em",{parentName:"p"},"whales")," in trading parlance) and therefore become a mere\nplutocracy (rule of the rich)."),(0,i.kt)("p",null,"There are several other mechanisms that are built-in to the governance system to resist this\nplutocratic tendency. One of these mechanisms is called conviction voting, and imbues greater voting\npower to token holders who are willing to lock their tokens on the protocol for longer lengths of\ntime. Longer lock-ups display ",(0,i.kt)("em",{parentName:"p"},"conviction")," in a vote. Conviction voting could allow a highly\ndetermined minority to overrule the vote of an apathetic majority in certain situations. Another\nmechanism is known as Adaptive Quorum Biasing. This makes proposals have a varying threshold for\napproval or rejection based on what part of the governance protocol the proposal originated in. For\ndetails on the subtleties of Polkadot's governance system, please see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance page"),"."),(0,i.kt)("h2",{id:"parachains"},"Parachains"),(0,i.kt)("h3",{id:"how-do-parachain-economics-work"},"How do parachain economics work?"),(0,i.kt)("p",null,"Parachains have the flexibility to implement their own monetary system or incentive structure for\ncollators. However, this is not strictly necessary. Since the collator's job is to continue to give\nrecent state transitions to the validators on the Relay Chain who validate each transition, the\nsecurity of the parachain and the Polkadot network is completely separate from parachain economics.\nParachains need collators to continue to progress, so it wouldn't be unreasonable to see them\nincentivize collator nodes in some way, but the specific mechanism is completely up to parachain\nimplementers."),(0,i.kt)("h3",{id:"are-parachains-ephemeral-what-happens-when-a-parachain-loses-the-next-auction"},"Are parachains ephemeral? What happens when a parachain loses the next auction?"),(0,i.kt)("p",null,"Parachains are not ephemeral. As long as someone is keeping the data for a parachain, the parachain\ncan move between being a parachain, a parathread, or a separate sovereign chain at different points\nof its lifetime. Especially with parathreads, parachains can be decommissioned to only produce\nblocks when their usage and throughput makes it necessary."),(0,i.kt)("p",null,"When a parachain loses an auction for renewal, that parachain has a few options. In most cases,\nbecoming a parathread instead would be a suitable choice. Parathreads are still secured by the Relay\nChain, but don't need to hold a parachain slot and can produce a block when its economically\nfeasible for them. For more on parachains please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains page")," and for\nmore on parathreads see ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"the parathreads page"),"."),(0,i.kt)("h2",{id:"networking"},"Networking"),(0,i.kt)("h3",{id:"what-is-libp2p"},"What is libp2p?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://libp2p.io"},"Libp2p")," is a modular and extensible networking stack that is used by IPFS,\nSubstrate, and many other projects. It is a collection of peer-to-peer protocols for finding peers\nand connecting to them. Its modules have logic for content routing, peer routing, peer discovery,\ndifferent transports, and NAT traversals. It is intended to be used by applications for building\nlarge scale peer-to-peer networks by only selecting the parts of the protocol suite that are needed."),(0,i.kt)("p",null,"The Rust implementation of the specification was built and primarily maintained by a team of\ncontributors at Parity Technologies. The Go and JavaScript versions are maintained by Protocol Labs\nas well as community contributors. A ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/status-im/nim-libp2p"},"Nim")," version of the\nlibrary also exists. Libp2p as a whole is an open source project that is actively developed and\nexpanded on various code repositories hosted on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libp2p"},"their GitHub"),"."),(0,i.kt)("h3",{id:"does-polkadot-use-libp2p"},"Does Polkadot use libp2p?"),(0,i.kt)("p",null,"Yes, since Polkadot is built with Substrate. Substrate uses a networking protocol that is based on\nlibp2p (specifically the Rust libp2p library). However, Substrate uses a mix of standard libp2p\nprotocols and protocols that are homegrown and not official libp2p standards. Of the standards\nprotocols, those which are shared with other implementations of libp2p such as IPFS, are\nconnection-checking (ping), asking for information on a peer (identity), and Kademlia random walks\n(kad)."),(0,i.kt)("p",null,"Of the protocols that are custom to Substrate, there are the legacy Substrate stream, a\nrequest-response for getting information on blocks (sync), a light client protocol, a notification\nprotocol for transactions, and block announcement. For detailed information on how Substrate uses\nlibp2p and the standard and custom protocols, please see the\n",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/sc_network/index.html"},"networking documentation"),"."),(0,i.kt)("h3",{id:"how-does-libp2p-differ-from-ipfs"},"How does libp2p differ from IPFS?"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"Interplanetary Filesystem"),' (IPFS) is a peer-to-peer hypermedia protocol used\nprimarily for storage of files. It allows one to upload a file onto the network and share it with\nits content addressable URI. IPFS, like Substrate, is an application of libp2p and exists higher on\nthe technology stack. Although both IPFS and Substrate use libp2p, it cannot be said that Substrate\n"uses" IPFS since besides sharing the underlying library for networking there is no native\nintegration between the two applications.'),(0,i.kt)("h2",{id:"kusama"},"Kusama"),(0,i.kt)("h3",{id:"what-is-the-minimum-amount-of-ksm--dot-i-can-have-in-my-account"},"What is the minimum amount of KSM / DOT I can have in my account?"),(0,i.kt)("p",null,"Please see information about ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-protocol-info/#existential-deposit"},"Existential Deposits"),"."),(0,i.kt)("h3",{id:"what-are-the-transfer-fees-for-kusama"},"What are the transfer fees for Kusama?"),(0,i.kt)("p",null,"It is important to note that the cost of transferring KSM is dynamic. Currently, the minimum cost of\ntransferring KSM is 0.01 KSM (the base fee), although this can be changed via governance. However,\nactual transaction fees will vary based on a variety of factors. Specifically, fee calculation\nfollows the following formula:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"base_fee + (tx_length * length_fee) + WeightToFee(weight)\n")),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/runtime/fees"},"fee calculation")," page in\nthe Substrate documentation for more detailed information."),(0,i.kt)("h2",{id:"answered-by-gav-series"},"Answered by Gav series"),(0,i.kt)("p",null,'The "Answered by Gav" series is a collection of posts uploaded to Reddit of questions that have been\nasked in the Polkadot Watercooler Riot channel and answered by Polkadot founder Gavin Wood.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87d96/answered_by_gav_reason_for_using_asynchronous/"},"Reason for using asynchronous rather than synchronous communication? Difference in terms of TPS?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87awr/answered_by_gav_how_exactly_do_validators_in_an/"},"How exactly do validators in an ETH parachain keep moving around and how is communication between zones trustless?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87bua/answered_by_gav_what_are_the_main_issues_with/"},"What are the main issues with Bitcoin integration and will it ever be possible? Same problem with other POW chains? Is Polkadot only going to work with POS chains? How is it trust-less in comparison to Cosmos though?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87cjz/answered_by_gav_what_are_the_current_thoughts/"},"What are the current thoughts around governance especially since projects have to be voted in to receive the parachains security?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87ds8/answered_by_gav_also_is_there_any_detailed/"},"Also is there any detailed overview of how exactly a token transfer from ETH could be exchanged with another chain's currency?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/bcqrx9/answered_by_gav_can_i_run_multiple_validators/"},"Can I run multiple Validators with the same Session Key?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/bcqwit/answered_by_gav_how_to_tackle_the_concentration/"},"How to tackle the concentration risk of Validators in data centers?"))))}p.isMDXComponent=!0}}]);