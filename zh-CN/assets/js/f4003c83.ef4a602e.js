"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4476],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19084:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"learn-governance",title:"Governance",sidebar_label:"Governance",description:"Learn about Polkadot's thought-through governance model.",slug:"../learn-governance"},s=void 0,c={unversionedId:"learn/learn-governance",id:"learn/learn-governance",title:"Governance",description:"Learn about Polkadot's thought-through governance model.",source:"@site/../docs/learn/learn-governance.md",sourceDirName:"learn",slug:"/learn-governance",permalink:"/zh-CN/docs/learn-governance",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-governance.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1642181245,formattedLastUpdatedAt:"2022/1/14",frontMatter:{id:"learn-governance",title:"Governance",sidebar_label:"Governance",description:"Learn about Polkadot's thought-through governance model.",slug:"../learn-governance"},sidebar:"docs",previous:{title:"Validator Community Overview",permalink:"/zh-CN/docs/maintain-guides-validator-community"},next:{title:"Account Recovery",permalink:"/zh-CN/docs/kusama-social-recovery"}},p=[{value:"Mechanism",id:"mechanism",children:[],level:2},{value:"Referenda",id:"referenda",children:[{value:"Proposing a Referendum",id:"proposing-a-referendum",children:[{value:"Public Referenda",id:"public-referenda",children:[],level:4},{value:"Council Referenda",id:"council-referenda",children:[],level:4},{value:"Voting Timetable",id:"voting-timetable",children:[],level:4},{value:"Voting on a referendum",id:"voting-on-a-referendum",children:[],level:4},{value:"Tallying",id:"tallying",children:[{value:"Super-Majority Approve",id:"super-majority-approve",children:[],level:5},{value:"Super-Majority Against",id:"super-majority-against",children:[],level:5},{value:"Simple-Majority",id:"simple-majority",children:[],level:5}],level:4},{value:"Voluntary Locking",id:"voluntary-locking",children:[],level:4},{value:"Adaptive Quorum Biasing",id:"adaptive-quorum-biasing",children:[],level:4}],level:3}],level:2},{value:"Council",id:"council",children:[{value:"Canceling",id:"canceling",children:[],level:3},{value:"Blacklisting",id:"blacklisting",children:[],level:3},{value:"How to be a council member?",id:"how-to-be-a-council-member",children:[],level:3},{value:"Prime Members",id:"prime-members",children:[],level:3}],level:2},{value:"Technical Committee",id:"technical-committee",children:[],level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",children:[{value:"How can I appeal to the council to enact a change on my behalf?",id:"how-can-i-appeal-to-the-council-to-enact-a-change-on-my-behalf",children:[],level:3}],level:2},{value:"Resources",id:"resources",children:[],level:2}],m={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kusama uses a sophisticated governance\nmechanism that allows it to evolve gracefully overtime at the ultimate behest of its assembled stakeholders.\nThe stated goal is to ensure that the majority of the stake can always command the network."),(0,o.kt)("p",null,"To do this, the network brings together various novel mechanisms, including an amorphous state-transition\nfunction stored on-chain and defined in a platform-neutral intermediate language (i.e.\n",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-wasm"},"WebAssembly"),") and several on-chain voting mechanisms such as referenda with adaptive\nsuper-majority thresholds and batch approval voting. "),(0,o.kt)("p",null,"All changes to the protocol must be agreed upon by stake-weighted referenda."),(0,o.kt)("h2",{id:"mechanism"},"Mechanism"),(0,o.kt)("p",null,"To make any changes to the network, the idea is to compose active token holders and the council\ntogether to administrate a network upgrade decision. No matter whether the proposal is proposed by\nthe public (token holders) or the council, it finally will have to go through a referendum to let\nall holders, weighted by stake, make the decision."),(0,o.kt)("p",null,"To better understand how the council is formed, please read ",(0,o.kt)("a",{parentName:"p",href:"#council"},"this section"),"."),(0,o.kt)("h2",{id:"referenda"},"Referenda"),(0,o.kt)("p",null,"Referenda are simple, inclusive, stake-based voting schemes. Each referendum has a specific\n",(0,o.kt)("em",{parentName:"p"},"proposal")," associated with it that takes the form of a privileged function call in the runtime (that\nincludes the most powerful call: ",(0,o.kt)("inlineCode",{parentName:"p"},"set_code"),', which can switch out the entire code of the runtime,\nachieving what would otherwise require a "hard fork").'),(0,o.kt)("p",null,'Referenda are discrete events, have a fixed period where voting happens, and then are tallied and\nthe function call is made if the vote is approved. Referenda are always binary; your only options in\nvoting are "aye", "nay", or abstaining entirely.'),(0,o.kt)("p",null,"Referenda can be started in one of several ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Publicly submitted proposals;"),(0,o.kt)("li",{parentName:"ul"},"Proposals submitted by the council, either through a majority or unanimously;"),(0,o.kt)("li",{parentName:"ul"},"Proposals submitted as part of the enactment of a prior referendum;"),(0,o.kt)("li",{parentName:"ul"},"Emergency proposals submitted by the Technical Committee and approved by the Council.")),(0,o.kt)("p",null,"All referenda have an ",(0,o.kt)("em",{parentName:"p"},"enactment delay")," associated with them. This is the period between the\nreferendum ending and, assuming the proposal was approved, the changes being enacted. "),(0,o.kt)("p",null,"Referenda is considered ",(0,o.kt)("em",{parentName:"p"},"baked")," if it is closed and tallied. Again, assuming the proposal was\napproved, it would be scheduled for enactment. Referenda is considered ",(0,o.kt)("em",{parentName:"p"},"unbaked")," if is pending\nan outcome, i.e. being voted on."),(0,o.kt)("p",null,'For the first\ntwo ways that a referendum is launched, this is a fixed time of\n8 days. For the third type, it can be set as\ndesired. Emergency proposals deal with major problems with the network that need to be "fast-tracked".\nThese will have a shorter enactment time.'),(0,o.kt)("h3",{id:"proposing-a-referendum"},"Proposing a Referendum"),(0,o.kt)("h4",{id:"public-referenda"},"Public Referenda"),(0,o.kt)("p",null,"Anyone can propose a referendum by depositing the minimum amount of tokens for a certain period\n(number of blocks). If someone agrees with the proposal, they may deposit the same amount of tokens\nto support it - this action is called ",(0,o.kt)("em",{parentName:"p"},"seconding"),". The proposal with the highest amount of bonded\nsupport will be selected to be a referendum in the next voting cycle."),(0,o.kt)("p",null,'Note that this may be different from the absolute number of seconds; for instance, three accounts\nbonding 3 KSM each would "outweigh" six accounts bonding 0.5 KSM each }}. '),(0,o.kt)("p",null,"The bonded tokens will be released once the proposal is tabled (that is, brought to a vote)."),(0,o.kt)("p",null,"There can be a maximum of 100 public proposals in the proposal queue."),(0,o.kt)("h4",{id:"council-referenda"},"Council Referenda"),(0,o.kt)("p",null,'Unanimous Council - When all members of the council agree on a proposal, it can be moved to a\nreferendum. This referendum will have a negative turnout bias (that is, the smaller the amount of\nstake voting, the smaller the amount necessary for it to pass - see "Adaptive Quorum Biasing",\nbelow).'),(0,o.kt)("p",null,"Majority Council - When agreement from only a simple majority of council members occurs, the\nreferendum can also be voted upon, but it will be majority-carries (51% wins)."),(0,o.kt)("p",null,"There can only be one active referendum at any given time, except when there is also an emergency\nreferendum in progress."),(0,o.kt)("h4",{id:"voting-timetable"},"Voting Timetable"),(0,o.kt)("p",null,"Every 7 days, a new referendum will come up for\na vote, assuming there is at least one proposal in one of the queues. There is a queue for Council-approved\nproposals and a queue for publicly submitted proposals. The referendum to be voted upon alternates between\nthe top proposal in the two queues."),(0,o.kt)("p",null,'The "top" proposal is determined by the amount of stake bonded behind it. If the given queue whose\nturn it is to create a referendum that has no proposals (is empty), and proposals are waiting in the\nother queue, the top proposal in the other queue will become a referendum.'),(0,o.kt)("p",null,"Multiple referenda cannot be voted upon in the same period, excluding emergency referenda. An\nemergency referendum occurring at the same time as a regular referendum (either public- or\ncouncil-proposed) is the only time that multiple referenda will be able to be voted on at once."),(0,o.kt)("h4",{id:"voting-on-a-referendum"},"Voting on a referendum"),(0,o.kt)("p",null,"To vote, a voter generally must lock their tokens up for at least the enactment delay period beyond\nthe end of the referendum. This is in order to ensure that some minimal economic buy-in to the\nresult is needed and to dissuade vote selling."),(0,o.kt)("p",null,"It is possible to vote without locking at all, but your vote is worth a small fraction of a normal\nvote, given your stake. At the same time, holding only a small amount of tokens does not mean that\nthe holder cannot influence the referendum result, thanks to time-locking. You can read more about\nthis at ",(0,o.kt)("a",{parentName:"p",href:"#voluntary-locking"},"Voluntary Locking"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To learn more about voting on referenda, please check out our\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=BkbhhlsezGA&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=31&ab_channel=Polkadot"},"technical explainer video"),".")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"Peter: Votes ",(0,o.kt)("inlineCode",{parentName:"p"},"No")," with 1 KSM for\na 128 week lock period  => 1 x 6 = 6 Votes"),(0,o.kt)("p",null,"Logan: Votes ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," with 2 KSM for\na 4 week lock period => 2 x 1 = 2 Votes"),(0,o.kt)("p",null,"Kevin: Votes ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," with 1.5 KSM for\na 8 week lock period => 1.5 x 2 = 3 Votes"),(0,o.kt)("p",null,"Even though combined both Logan and Kevin vote with more\nKSM than Peter, the lock period for both\nof them is less than Peter, leading to their voting power counting as less."),(0,o.kt)("h4",{id:"tallying"},"Tallying"),(0,o.kt)("p",null,"Depending on which entity proposed the proposal and whether all council members voted yes, there are\nthree different scenarios. We can use the following table for reference."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Entity")),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Metric")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Public"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Positive Turnout Bias (Super-Majority Approve)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Council (Complete agreement)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Negative Turnout Bias (Super-Majority Against)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Council (Majority agreement)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Simple Majority")))),(0,o.kt)("p",null,"Also, we need the following information and apply one of the formulas listed below to calculate the\nvoting result. For example, let's use the public proposal as an example, so the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Super-Majority Approve")," formula will be applied. There is no strict quorum, but the super-majority\nrequired increases with lower turnout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"approve - the number of aye votes\n\nagainst - the number of nay votes\n\nturnout - the total number of voting tokens (does not include conviction)\n\nelectorate - the total number of tokens issued in the network\n")),(0,o.kt)("h5",{id:"super-majority-approve"},"Super-Majority Approve"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"positive turnout bias"),", whereby a heavy super-majority of aye votes is required to carry at low\nturnouts, but as turnout increases towards 100%, it becomes a simple majority-carries as below."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bagainst&space;%5Cover&space;%5Csqrt%7Bturnout%7D%7D&space;%3C&space;%7Bapprove&space;%5Cover&space;%5Csqrt%7Belectorate%7D%7D",alt:null})),(0,o.kt)("h5",{id:"super-majority-against"},"Super-Majority Against"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"negative turnout bias"),", whereby a heavy super-majority of nay votes is required to reject at low\nturnouts, but as turnout increases towards 100%, it becomes a simple majority-carries as below."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bagainst&space;%5Cover&space;%5Csqrt%7Belectorate%7D%7D&space;%3C&space;%7Bapprove&space;%5Cover&space;%5Csqrt%7Bturnout%7D%7D",alt:null})),(0,o.kt)("h5",{id:"simple-majority"},"Simple-Majority"),(0,o.kt)("p",null,"Majority-carries, a simple comparison of votes; if there are more aye votes than nay, then the\nproposal is carried, no matter how much stake votes on the proposal."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%7Bapprove%7D&space;%3E&space;%7Bagainst%7D",alt:null})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"To know more about where these above formulas come from, please read the\n",(0,o.kt)("a",{parentName:"em",href:"https://github.com/paritytech/substrate/blob/master/frame/democracy/src/vote_threshold.rs"},"democracy pallet")),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("p",null,"Assume we only have 1_50 tokens in total and\nthat this is a public proposal."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"John:  50 KSM"),(0,o.kt)("li",{parentName:"ul"},"Peter: 10 KSM"),(0,o.kt)("li",{parentName:"ul"},"Lilly: 15 KSM"),(0,o.kt)("li",{parentName:"ul"},"JJ:    15 KSM"),(0,o.kt)("li",{parentName:"ul"},"Ken:   60 KSM")),(0,o.kt)("p",null,"John: Votes ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," for a 4 week lock period  =>\n50 x 1 = 50 Votes"),(0,o.kt)("p",null,"Peter: Votes ",(0,o.kt)("inlineCode",{parentName:"p"},"Yes")," for a 4 week lock period =>\n10 x 1 = 10 Votes"),(0,o.kt)("p",null,"JJ: Votes ",(0,o.kt)("inlineCode",{parentName:"p"},"No")," for a 16 week lock period =>\n150 x 3 = 450 Votes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"approve = 60"),(0,o.kt)("li",{parentName:"ul"},"against = 45"),(0,o.kt)("li",{parentName:"ul"},"turnout = 75"),(0,o.kt)("li",{parentName:"ul"},"electorate = 150 ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%5Cfrac%7B450%7D%7B%5Csqrt%7B750%7D%7D&space;%3C&space;%5Cfrac%7B600%7D%7B%5Csqrt%7B1500%7D%7D",alt:"\\Large \\frac{450}{\\sqrt{750}}&space;<&space;\\frac{600}{\\sqrt{1500}}"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.latex?%5Clarge&space;%7B16.432%7D&space;%3C&space;%7B15.492%7D",alt:"\\Large {16.432}&space;<&space;{15.492}"})),(0,o.kt)("p",null,"Since the above example is a public referendum, ",(0,o.kt)("inlineCode",{parentName:"p"},"Super-Majority Approve")," would be used to calculate\nthe result. ",(0,o.kt)("inlineCode",{parentName:"p"},"Super-Majority Approve")," requires more ",(0,o.kt)("inlineCode",{parentName:"p"},"aye")," votes to pass the referendum when turnout\nis low, therefore, based on the above result, the referendum will be rejected. In addition, only the\nwinning voter's tokens are locked. If the voters on the losing side of the referendum believe that\nthe outcome will have negative effects, their tokens are transferrable so they will not be locked\ninto the decision. Moreover, winning proposals are autonomously enacted only after some enactment\nperiod."),(0,o.kt)("h4",{id:"voluntary-locking"},"Voluntary Locking"),(0,o.kt)("p",null,"Kusama utilizes an idea called ",(0,o.kt)("inlineCode",{parentName:"p"},"Voluntary Locking"),"\nthat allows token holders to increase their voting power by declaring how long they are willing to lock up\ntheir tokens, hence, the number of votes for each token holder will be calculated by the following formula:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"votes = tokens * conviction_multiplier\n")),(0,o.kt)("p",null,"The conviction multiplier increases the vote multiplier by one every time the number of lock periods\ndouble."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Lock Periods"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Vote Multiplier"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"8"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"16"),(0,o.kt)("td",{parentName:"tr",align:"center"},"5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"32"),(0,o.kt)("td",{parentName:"tr",align:"center"},"6")))),(0,o.kt)("p",null,'The maximum number of "doublings" of the lock period is set to 6 (and thus 32 lock periods in\ntotal), and one lock period equals 8 days.\nOnly doublings are allowed; you cannot lock for, say, 24 periods and increase your conviction\nby 5.5, for instance.'),(0,o.kt)("p",null,"While a token is locked, you can still use it for voting and staking; you are only prohibited from\ntransferring these tokens to another account."),(0,o.kt)("p",null,'Votes are still "counted" at the same time (at the end of the voting period), no matter for how long\nthe tokens are locked.'),(0,o.kt)("h4",{id:"adaptive-quorum-biasing"},"Adaptive Quorum Biasing"),(0,o.kt)("p",null,'Kusama introduces a concept,\n"Adaptive Quorum Biasing", which functions as a lever that the council can use to alter the effective\nsuper-majority required to make it easier or more difficult for a proposal to pass in the case that there\nis no clear majority of voting power backing it or against it.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(67284).Z})),(0,o.kt)("p",null,"Let's use the above image as an example."),(0,o.kt)("p",null,'If a publicly submitted referendum only has a 25% turnout, the tally of "aye" votes has to reach 66%\nfor it to pass since we applied ',(0,o.kt)("inlineCode",{parentName:"p"},"Positive Turnout Bias"),"."),(0,o.kt)("p",null,'In contrast, when it has a 75% turnout, the tally of "aye" votes has to reach 54%, which means that\nthe super-majority required decreases as the turnout increases.'),(0,o.kt)("p",null,'When the council proposes a new proposal through unanimous consent, the referendum would be put to a\nvote using "Negative Turnout Bias". In this case, it is easier to pass this proposal with low\nturnout and requires a super-majority to reject. As more token holders participate in voting, the\nbias approaches a plain majority carries.'),(0,o.kt)("p",null,'Referring to the above image, when a referendum only has 25% turnout, the tally of "aye" votes has\nto reach 34% for it to pass.'),(0,o.kt)("p",null,'In short, when the turnout rate is low, a super-majority is required to reject the proposal, which\nmeans a lower threshold of "aye" votes have to be reached, but as turnout increases towards 100%, it\nbecomes a simple majority.'),(0,o.kt)("p",null,"All three tallying mechanisms - majority carries, super-majority approve, and super-majority\nagainst - equate to a simple majority-carries system at 100% turnout."),(0,o.kt)("h2",{id:"council"},"Council"),(0,o.kt)("p",null,'To represent passive stakeholders, Kusama\nintroduces the idea of a "council". The council is an on-chain entity comprising several actors, each\nrepresented as an on-chain account. On Kusama,\nthe council currently consists of 19 members.'),(0,o.kt)("p",null,"Along with ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-treasury"},"controlling the treasury"),", the council is called upon primarily for\nthree tasks of governance: proposing sensible referenda, cancelling uncontroversially dangerous or\nmalicious referenda, and electing the technical committee."),(0,o.kt)("p",null,"For a referendum to be proposed by the council, a strict majority of members must be in favor, with\nno member exercising a veto. Vetoes may be exercised only once by a member for any single proposal;\nif, after a cool-down period, the proposal is resubmitted, they may not veto it a second time."),(0,o.kt)("p",null,"Council motions which pass with a 3/5 (60%) super-majority - but without reaching unanimous\nsupport - will move to a public referendum under a neutral, majority-carries voting scheme. In the\ncase that all members of the council vote in favor of a motion, the vote is considered unanimous and\nbecomes a referendum with negative adaptive quorum biasing."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=837Vv3gdRzI"},"video explainer on Council"))),(0,o.kt)("h3",{id:"canceling"},"Canceling"),(0,o.kt)("p",null,"A proposal can be canceled if the ",(0,o.kt)("a",{parentName:"p",href:"#technical-committee"},"technical committee")," unanimously agrees to\ndo so, or if Root origin (e.g. sudo) triggers this functionality. A canceled proposal's deposit is\nburned."),(0,o.kt)("p",null,"Additionally, a two-thirds majority of the council can cancel a referendum. This may function as a\nlast-resort if there is an issue found late in a referendum's proposal such as a bug in the code of\nthe runtime that the proposal would institute."),(0,o.kt)("p",null,"If the cancellation is controversial enough that the council cannot get a two-thirds majority, then\nit will be left to the stakeholders ",(0,o.kt)("em",{parentName:"p"},"en masse")," to determine the fate of the proposal."),(0,o.kt)("h3",{id:"blacklisting"},"Blacklisting"),(0,o.kt)("p",null,"A proposal can be blacklisted by Root origin (e.g. sudo). A blacklisted proposal and its related\nreferendum (if any) is immediately ",(0,o.kt)("a",{parentName:"p",href:"#canceling"},"canceled"),". Additionally, a blacklisted proposal's\nhash cannot re-appear in the proposal queue. Blacklisting is useful when removing erroneous\nproposals that could be submitted with the same hash, i.e.\n",(0,o.kt)("a",{parentName:"p",href:"https://polkascan.io/polkadot/democracy/proposal/2"},"proposal #2")," in which the submitter used plain\ntext to make a suggestion."),(0,o.kt)("p",null,"Upon seeing their proposal removed, a submitter who is not properly introduced to the democracy\nsystem of Kusama might be tempted to re-submit\nthe same proposal. That said, this is far from a fool-proof method of preventing invalid proposals from\nbeing submitted - a single changed character in a proposal's text will also change the hash of the proposal,\nrendering the per-hash blacklist invalid."),(0,o.kt)("h3",{id:"how-to-be-a-council-member"},"How to be a council member?"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(74662).Z})),(0,o.kt)("p",null,"All stakeholders are free to signal their approval of any of the registered candidates."),(0,o.kt)("p",null,"Council elections are handled by the same ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-phragmen"},"Phragm\xe9n election")," process that\nselects validators from the available pool based on nominations. However, token holders' votes for\ncouncillors are isolated from any of the nominations they may have on validators. Council terms last\nfor one day."),(0,o.kt)("p",null,"At the end of each term, ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-phragmen"},"Phragm\xe9n election algorithm")," runs and the result will\nchoose the new councillors based on the vote configurations of all voters. The election also chooses\na set number of runners up which is currently (12\nthat will remain in the queue with their votes intact."),(0,o.kt)("p",null,'As opposed to a "first-past-the-post" electoral system, where voters can only vote for a single\ncandidate from a list, a Phragm\xe9n election is a more expressive way to include each voters\' views.\nToken holders can treat it as a way to support as many candidates as they want. The election\nalgorithm will find a fair subset of the candidates that most closely matches the expressed\nindications of the electorate as a whole.'),(0,o.kt)("p",null,"Let's take a look at the example below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Round 1"),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Token Holders")),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Candidates")),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"A"),(0,o.kt)("td",{parentName:"tr",align:"center"},"B"),(0,o.kt)("td",{parentName:"tr",align:"center"},"C"),(0,o.kt)("td",{parentName:"tr",align:"center"},"D"),(0,o.kt)("td",{parentName:"tr",align:"center"},"E")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Peter"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Alice"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Bob"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Kelvin"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Total")),(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"3"),(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"2")))),(0,o.kt)("p",null,"The above example shows that candidate C wins the election in round 1, while candidates A, B, D & E\nkeep remaining on the candidates' list for the next round."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Round 2"),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}),(0,o.kt)("th",{parentName:"tr",align:"center"}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Token Holders")),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Candidates")),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"},"A"),(0,o.kt)("td",{parentName:"tr",align:"center"},"B"),(0,o.kt)("td",{parentName:"tr",align:"center"},"D"),(0,o.kt)("td",{parentName:"tr",align:"center"},"E")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Peter"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Alice"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Bob"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Kelvin"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"},"X"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"td"},"Total")),(0,o.kt)("td",{parentName:"tr",align:"center"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,o.kt)("p",null,"For the top-N (say 4 in this example) runners-up, they can remain and their votes persist until the\nnext election. After round 2, even though candidates A & B get the same number of votes in this\nround, candidate A gets elected because after adding the older unused approvals, it is higher than\nB."),(0,o.kt)("h3",{id:"prime-members"},"Prime Members"),(0,o.kt)("p",null,"The council, being an instantiation of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/collective"},"Substrate's Collective pallet"),",\nimplements what's called a ",(0,o.kt)("em",{parentName:"p"},"prime member")," whose vote acts as the default for other members that fail\nto vote before the timeout."),(0,o.kt)("p",null,"The prime member is chosen based on a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Borda_count"},"Borda count"),"."),(0,o.kt)("p",null,'The purpose of having a prime member of the council is to ensure a quorum, even when several members\nabstain from a vote. Council members might be tempted to vote a "soft rejection" or a "soft\napproval" by not voting and letting the others vote. With the existence of a prime member, it forces\ncouncillors to be explicit in their votes or have their vote counted for whatever is voted on by the\nprime.'),(0,o.kt)("h2",{id:"technical-committee"},"Technical Committee"),(0,o.kt)("p",null,"The Technical Committee was introduced in the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/kusama-rollout-and-governance/"},"Kusama rollout and governance post")," as one\nof the three chambers of Kusama governance (along with the Council and the Referendum chamber). The\nTechnical Committee is composed of the teams that have successfully implemented or specified either\na ",""),(0,o.kt)("p",null,"The Technical Committee can, along with the Council, produce emergency referenda, which are\nfast-tracked for voting and implementation. These are used for emergency bug fixes or rapid\nimplementation of new but battle-tested features into the runtime."),(0,o.kt)("p",null,"Fast-tracked referenda are the only type of referenda that can be active alongside another active\nreferendum. Thus, with fast-tracked referenda it is possible to have two active referendums at the\nsame time. Voting on one does not prevent a user from voting on the other."),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h3",{id:"how-can-i-appeal-to-the-council-to-enact-a-change-on-my-behalf"},"How can I appeal to the council to enact a change on my behalf?"),(0,o.kt)("p",null,"In some circumstances, you may want to appeal to the on-chain council to enact a change on your\nbehalf. One example of this circumstance is the case of lost or locked funds when the funds were\nlost due to a human interface error (such as inputting an address for another network). Another\nexample is if you participated in the 2017 Polkadot ICO with a multi-sig address which now does not\nlet you sign a message easily. When these circumstances can be proven beyond a reasonable doubt to\nbe an error, the council ",(0,o.kt)("em",{parentName:"p"},"may")," consider a governance motion to correct it."),(0,o.kt)("p",null,"The first step to appeal to the council is to get in contact with the councillors. There is no\nsingular place where you are guaranteed to grab every councillor's ear with your message. However,\nthere are a handful of good places to start where you can get the attention of some of them. The\n","",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#kusama:matrix.parity.io"},"Kusama Direction")," matrix\nroom is one such place. After creating an account and joining this room, you can post a\nwell-thought-through message here that lays down your case and provides justification for why you think\nthe council should consider enacting a change to the protocol on your behalf."),(0,o.kt)("p",null,"At some point you will likely need a place for a longer-form discussion. For this, making a post on\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/"},"Polkassembly")," is the recommended place to do so. When you write a post on Polkassembly make sure\nyou present all the evidence for your circumstances and state clearly what kind of change you would\nsuggest to the councillors to enact. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Remember, the councillors do not need to make the change, it is your responsibility to make a\nstrong case for why the change should be made.")),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/wiki/Governance"},"Initial Governance Description")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/tree/master/frame/democracy/src"},"Democracy Pallet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=VsZuDJMmVPY&feature=youtu.be&t=24734"},"Governance Demo")," - Dr.\nGavin Wood presents the initial governance structure for Polkadot. (Video)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/e/governance-on-polkadot--"},"Governance on Polkadot")," - A webinar\nexplaining how governance works in Polkadot and Kusama.")))}u.isMDXComponent=!0},67284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/adaptive-quorum-biasing-18c2e70b6b9d2c3abf563219b11974dc.png"},74662:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/approval-vote-d0622e1c0a9bc7c50ab9f23761488dbe.png"}}]);