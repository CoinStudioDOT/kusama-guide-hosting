"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4428],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),h=d(a),m=o,u=h["".concat(l,".").concat(m)]||h[m]||c[m]||i;return a?n.createElement(u,s(s({ref:e},p),{},{components:a})):n.createElement(u,s({ref:e},p))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:o,s[1]=r;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},35265:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),s=["components"],r={id:"maintain-guides-how-to-nominate-polkadot",title:"Become a Nominator on Polkadot",sidebar_label:"Nominate",description:"Steps on how to nominate on Polkadot.",keywords:["nominate","how to nominate","nominator","stake"],slug:"../maintain-guides-how-to-nominate-polkadot"},l=void 0,d={unversionedId:"maintain/maintain-guides-how-to-nominate-polkadot",id:"maintain/maintain-guides-how-to-nominate-polkadot",title:"Become a Nominator on Polkadot",description:"Steps on how to nominate on Polkadot.",source:"@site/../docs/maintain/maintain-guides-how-to-nominate-polkadot.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-nominate-polkadot",permalink:"/zh-CN/docs/maintain-guides-how-to-nominate-polkadot",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-nominate-polkadot.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1651663842,formattedLastUpdatedAt:"2022/5/4",frontMatter:{id:"maintain-guides-how-to-nominate-polkadot",title:"Become a Nominator on Polkadot",sidebar_label:"Nominate",description:"Steps on how to nominate on Polkadot.",keywords:["nominate","how to nominate","nominator","stake"],slug:"../maintain-guides-how-to-nominate-polkadot"}},p={},c=[{value:"Setting up Stash and Controller keys",id:"setting-up-stash-and-controller-keys",level:2},{value:"Using Polkadot-JS UI",id:"using-polkadot-js-ui",level:2},{value:"Step 1: Bond your tokens",id:"step-1-bond-your-tokens",level:3},{value:"Step 2: Nominate a validator",id:"step-2-nominate-a-validator",level:3},{value:"Step 3: Monitoring Bags list",id:"step-3-monitoring-bags-list",level:3},{value:"Step 4: Stop nominating",id:"step-4-stop-nominating",level:3},{value:"Using Command-Line Interface (CLI)",id:"using-command-line-interface-cli",level:2},{value:"Step 1: Install @polkadot/api-cli",id:"step-1-install-polkadotapi-cli",level:3},{value:"Step 2. Bond your DOT",id:"step-2-bond-your-dot",level:3},{value:"Step 3. Nominate a validator",id:"step-3-nominate-a-validator",level:3}],h={toc:c};function m(t){var e=t.components,r=(0,o.Z)(t,s);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following information applies to the Polkadot network. If you want to nominate on Kusama, check\nout the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-nominate-kusama"},"Kusama guide")," instead."))),(0,i.kt)("p",null,"Nominators are one type of participant in the staking subsystem of Polkadot. They are responsible\nfor appointing their stake to the validators who are the second type of participant. By appointing\ntheir stake, they are able to elect the active set of validators and share in the rewards that are\npaid out."),(0,i.kt)("p",null,"While the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-validate-polkadot"},"validators")," are active participants in the network that engage in the block production\nand finality mechanisms, nominators take a slightly more passive role. Being a nominator does not\nrequire running a node of your own or worrying about online uptime. However, a good nominator\nperforms due diligence on the validators that they elect. When looking for validators to nominate, a\nnominator should pay attention to their own reward percentage for nominating a specific validator -\nas well as the risk that they bear of being slashed if the validator gets slashed."),(0,i.kt)("p",null,"If you are a beginner, please watch the video below for detailed instructions"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/FCXC0CDhyS4"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/FCXC0CDhyS4/0.jpg",alt:"Stake on Polkadot/Kusama"}))),(0,i.kt)("h2",{id:"setting-up-stash-and-controller-keys"},"Setting up Stash and Controller keys"),(0,i.kt)("p",null,"Nominators are recommended to set up separate stash and controller accounts. Explanation and\nreasoning for generating distinct accounts for this purpose is elaborated in the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-keys###%22controller%22-and-%22stash%22-keys"},"keys")," section of\nthe Wiki."),(0,i.kt)("p",null,"You can generate your stash and controller account via any of the recommended methods that are\ndetailed on the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-account-generation"},"account generation")," page."),(0,i.kt)("p",null,"Starting with runtime version v23 natively included in client version\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases/tag/v0.8.23"},"0.8.23"),", payouts can go to any custom\naddress. If you'd like to redirect payments to an account that is neither the controller nor the\nstash account, set one up. Note that it is extremely unsafe to set an exchange address as the\nrecipient of the staking rewards."),(0,i.kt)("h2",{id:"using-polkadot-js-ui"},"Using Polkadot-JS UI"),(0,i.kt)("h3",{id:"step-1-bond-your-tokens"},"Step 1: Bond your tokens"),(0,i.kt)("p",null,"On the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS UI"),' navigate to the "Staking" tab (within the\n"Network" menu).'),(0,i.kt)("p",null,'The "Staking Overview" subsection will show you all the active validators and their information -\ntheir identities, the amount of DOT that are staking for them, amount that is their own provided\nstake, how much they charge in commission, the era points they\'ve earned in the current era, and the\nlast block number that they produced. If you click on the chart button it will take you to the\n"Validator Stats" page for that validator that shows you more detailed and historical information\nabout the validator\'s stake, rewards and slashes.'),(0,i.kt)("p",null,'The "Account actions" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"link"),") allows you\nto stake and nominate."),(0,i.kt)("p",null,'The "Payouts" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payouts"},"link"),") allows you to\nclaim rewards from staking."),(0,i.kt)("p",null,'The "Targets" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"link"),") will help you\nestimate your earnings and this is where it's good to start picking favorites."),(0,i.kt)("p",null,'The "Waiting" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/waiting"},"link"),") lists all pending\nvalidators that are awaiting more nominations to enter the active validator set. Validators will\nstay in the waiting queue until they have enough DOT backing them (as allocated through the\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-phragmen"},"Phragm\xe9n election mechanism"),"). It is possible validator can remain in\nthe queue for a very long time if they never get enough backing."),(0,i.kt)("p",null,'The "Validator Stats" subsection (',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/query"},"link"),") allows you\nto query a validator's stash address and see historical charts on era points, elected stake,\nrewards, and slashes."),(0,i.kt)("p",null,'Pick "Account actions", then click the "+ Nominator" button.'),(0,i.kt)("p",null,"You will see a modal window that looks like the below:\n",(0,i.kt)("img",{alt:"nominator-update-1",src:a(77413).Z,width:"2194",height:"1010"})),(0,i.kt)("p",null,'Select a "value bonded" that is ',(0,i.kt)("strong",{parentName:"p"},"less")," than the total amount of DOT you have, so you have some\nleft over to pay transaction fees. Transaction fees are currently around 0.01 DOT, but they are\ndynamic based on a variety of factors including the load of recent blocks."),(0,i.kt)("p",null,"Also be mindful of the reaping threshold - the amount that must remain in an account lest it be\nburned. That amount is 1 DOT on Polkadot, so it's recommended to keep at least 1.5 DOT in your\naccount to be on the safe side."),(0,i.kt)("p",null,"Choose whatever payment destination that makes sense to you. If you're unsure, you can choose \"Stash\naccount (increase amount at stake)\" to simply accrue the rewards into the amount you're staking and\nearn compound interest."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Payout account selection dropdown with the custom account option highlighted",src:a(42394).Z,width:"742",height:"245"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"These concepts have been further explained in Polkadot's\n",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/FCXC0CDhyS4?t=219"},"UI Walkthrough Video")))),(0,i.kt)("h3",{id:"step-2-nominate-a-validator"},"Step 2: Nominate a validator"),(0,i.kt)("p",null,"You are now bonded. Being bonded means your tokens are locked and could be\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-staking#slashing"},"slashed")," if the validators you nominate misbehave. All bonded\nfunds can now be distributed to up to 16 validators. Be careful about\nthe validators you choose since you will be slashed if your validator commits an offence."),(0,i.kt)("p",null,'Click on "Nominate" on an account you\'ve bonded and you will be presented with another popup asking\nyou to select up to 16 validators. Although you may choose up to 16 validators, due to the\n',(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-phragmen"},"Phragm\xe9n")," election algorithm your stake may be dispersed in different\nproportions to any subset or all of the validators your choose."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominating validators",src:a(23578).Z,width:"2180",height:"964"})),(0,i.kt)("p",null,"Select them, confirm the transaction, and you're done - you are now nominating. Your nominations\nwill become active in the next era. Eras last twenty-four hours on Polkadot - depending on when you\ndo this, your nominations may become active almost immediately, or you may have to wait almost the\nentire twenty-four hours before your nominations are active. You can check how far along Polkadot is\nin the current era on the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking"},"Staking page"),"."),(0,i.kt)("p",null,"Assuming at least one of your nominations ends up in the active validator set, you will start to get\nrewards allocated to you. In order to claim them (i.e., add them to your account), you must manually\nclaim them. See the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-staking#claiming-rewards"},"Claiming Rewards")," section of the\nStaking wiki page for more details."),(0,i.kt)("h3",{id:"step-3-monitoring-bags-list"},"Step 3: Monitoring Bags list"),(0,i.kt)("p",null,"This step is highly relevant if the staked DOT is close to the dynamic minimum active nomination\nthreshold on the network, which can be viewed on\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/targets"},"Polkadot JS Apps > Network > Staking > Targets page"),".\nFor instance, , the minimum active nomination receiving staking rewards is 124.575 DOT in the\nsnapshot below. See the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-nominator#bags-list"},"Bags List")," section of the Nominator\nwiki page for more details."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Minimum Active Nomination",src:a(95670).Z,width:"1436",height:"166"})),(0,i.kt)("p",null,"The nominations within a bag are sorted based on the insertion order and not based on the stake. If\nyour stake is close to this dynamic threshold, it is advised that you monitor your bag across the\nstaking eras on\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/bags"},"Polkadot JS Apps > Network > Staking > Bags "),". If any\naction is required, the respective buttons (Move up/rebag) will appear beside your stash account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PutInFrontOf Extrinsic",src:a(46233).Z,width:"1418",height:"134"})),(0,i.kt)("h3",{id:"step-4-stop-nominating"},"Step 4: Stop nominating"),(0,i.kt)("p",null,"At some point, you might decide to stop nominating one or more validators. You can always change who\nyou're nominating, but you cannot withdraw your tokens unless you unbond them. Detailed instructions\nare available ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-unbond"},"here"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Explainer videos on staking")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The following videos related to staking are also available for your reference:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://youtu.be/7VlTncHCGPc"},"Staking with a Ledger and PolkadotJS Apps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=jL-N_IWiYVA"},"Staking with a Ledger and Ledger Live"))))),(0,i.kt)("h2",{id:"using-command-line-interface-cli"},"Using Command-Line Interface (CLI)"),(0,i.kt)("p",null,"Apart from using Polkadot-JS Apps to participate in staking, you can do all these things in CLI\ninstead. The CLI approach allows you to interact with the Polkadot network without going to the\nPolkadot-JS Apps dashboard."),(0,i.kt)("h3",{id:"step-1-install-polkadotapi-cli"},"Step 1: Install @polkadot/api-cli"),(0,i.kt)("p",null,"We assume you have installed ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS with npm"),". Run the following command to\ninstall the ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api-cli")," globally:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @polkadot/api-cli\n")),(0,i.kt)("h3",{id:"step-2-bond-your-dot"},"Step 2. Bond your DOT"),(0,i.kt)("p",null,"Executing the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.bond CONTROLLER_ADDRESS NUMBER_OF_TOKENS REWARD_DESTINATION --ws WEBSOCKET_ENDPOINT\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CONTROLLER_ADDRESS"),": An address you would like to bond to the stash account. Stash and Controller\ncan be the same address but it is not recommended since it defeats the security of the two-account\nstaking model."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"NUMBER_OF_TOKENS"),": The number of DOT you would like to stake to the network."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Decimal places")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DOT has ten decimal places and is always represented as an integer with zeroes at the end. So 1 DOT\n= 10_000_000_000 Plancks."))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"REWARD_DESTINATION"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Staked")," - Pay into the stash account, increasing the amount at stake accordingly."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Stash")," - Pay into the stash account, not increasing the amount at stake."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Account")," - Pay into a custom account, like so:\n",(0,i.kt)("inlineCode",{parentName:"li"},"Account DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Controller")," - Pay into the controller account.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.bond DMTHrNcmA8QbqRS4rBq8LXn8ipyczFoNMb1X4cY2WD9tdBX 1000000000000 Staked --ws wss://rpc.polkadot.io\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'...\n...\n    "status": {\n      "InBlock": "0x0ed1ec0ba69564e8f98958d69f826adef895b5617366a32a3aa384290e98514e"\n    }\n')),(0,i.kt)("p",null,"You can check the transaction status by using the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"InBlock")," in\n",(0,i.kt)("a",{parentName:"p",href:"https://polkascan.io/polkadot-cc1"},"Polkascan"),". Also, you can verify the bonding state under the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/actions"},"Staking")," page on the Polkadot-JS Apps Dashboard."),(0,i.kt)("h3",{id:"step-3-nominate-a-validator"},"Step 3. Nominate a validator"),(0,i.kt)("p",null,"To nominate a validator, you can execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "MNEMONIC_PHRASE" tx.staking.nominate \'["VALIDATOR_ADDRESS"]\' --ws WS_ENDPOINT\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'polkadot-js-api --seed "xxxx xxxxx xxxx xxxxx" tx.staking.nominate \'["CmD9vaMYoiKe7HiFnfkftwvhKbxN9bhyjcDrfFRGbifJEG8","E457XaKbj2yTB2URy8N4UuzmyuFRkcdxYs67UvSgVr7HyFb"]\' --ws wss://rpc.polkadot.io\n')),(0,i.kt)("p",null,"After a few seconds, you should see the hash of the transaction and if you would like to verify the\nnomination status, you can check that on the Polkadot-JS UI as well."))}m.isMDXComponent=!0},42394:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/01-cc60f0cb7494041501c0ed80e5dca352.png"},77413:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_nominate_button-e1ed061df8ad060f6691bd2ff18a22cf.png"},23578:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_setup_nominator2-20c7f5518b08c72789da3fd2cc07346b.png"},95670:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/min-active-nomination-bfbe67c2714eb5027c6a4f45608c9bc2.png"},46233:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/put-infront-of-ef633575f4bc13c41982e10fba17d520.png"}}]);