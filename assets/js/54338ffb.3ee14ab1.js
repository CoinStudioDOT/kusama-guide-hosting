(self.webpackChunk=self.webpackChunk||[]).push([[4634],{7940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var n=a(4165),o=a(5861),i=a(7294),s=a(3444),l=a(5270),r=a(7425);function c(e,t,a){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var i,r,c,u,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,r=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return c=new s.U(i),e.next=21,l.G.create({provider:c});case 21:u=e.sent,(d=a.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return r=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return r=(r=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return e.abrupt("return",r);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,a,n){switch(t){case"humanReadable":(0,r.HumanReadable)(e,a,n);break;case"blocksToDays":(0,r.BlocksToDays)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,a=e.path,s=e.defaultValue,l=e.filter,r=void 0===l?void 0:l,u=(0,i.useState)(""),p=u[0],m=u[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==r?d(s.toString(),r,t,m):m(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,m);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==r?d(o,r,t,m):m(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(l){console.log(l)}}}),[]),p}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},7765:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>u,toc:()=>p});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),s=a(7940),l=["components"],r={id:"learn-account-multisig",title:"Multi-Signature Accounts",sidebar_label:"Multi-Signature Accounts",description:"Multisigs accounts on Polkadot.",keywords:["account","multisig","polkadot account","polkadotjs"],slug:"../learn-account-multisig"},c=void 0,u={unversionedId:"learn/learn-account-multisig",id:"learn/learn-account-multisig",title:"Multi-Signature Accounts",description:"Multisigs accounts on Polkadot.",source:"@site/../docs/learn/learn-account-multisig.md",sourceDirName:"learn",slug:"/learn-account-multisig",permalink:"/docs/learn-account-multisig",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1664459942,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{id:"learn-account-multisig",title:"Multi-Signature Accounts",sidebar_label:"Multi-Signature Accounts",description:"Multisigs accounts on Polkadot.",keywords:["account","multisig","polkadot account","polkadotjs"],slug:"../learn-account-multisig"}},d={},p=[{value:"Multi-signature Accounts",id:"multi-signature-accounts",level:2},{value:"Generating Addresses of Multi-signature Accounts",id:"generating-addresses-of-multi-signature-accounts",level:3},{value:"Making Transactions with a Multi-signature Account",id:"making-transactions-with-a-multi-signature-account",level:3},{value:"Example with Polkadot JS",id:"example-with-polkadot-js",level:3},{value:"Decoding Call Data",id:"decoding-call-data",level:2}],m={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"multi-signature-accounts"},"Multi-signature Accounts"),(0,i.kt)("p",null,"It is possible to create a multi-signature account in Substrate-based chains. A multi-signature\naccount is composed of one or more addresses and a threshold. The threshold defines how many\nsignatories (participating addresses) need to agree on submitting an extrinsic for the call to be\nsuccessful."),(0,i.kt)("p",null,"For example, Alice, Bob, and Charlie set up a multi-sig with a threshold of 2. This means Alice and\nBob can execute any call even if Charlie disagrees with it. Likewise, Charlie and Bob can execute\nany call without Alice. A threshold is typically a number smaller than the total number of members\nbut can also be equal to it, which means they all have to agree."),(0,i.kt)("admonition",{title:"Explainer on multisig accounts",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Learn more about multisig accounts from our\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ZJLqszvhMyM&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=25&ab_channel=Polkadot"},"technical explainer video"),".")),(0,i.kt)("p",null,"Multi-signature accounts have several uses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"securing your own stash: use additional signatories as a 2FA mechanism to secure your funds. One\nsigner can be on one computer, and another can be on another or in cold storage. This slows down\nyour interactions with the chain but is orders of magnitude more secure."),(0,i.kt)("li",{parentName:"ul"},"board decisions: legal entities such as businesses and foundations use multi-sigs to govern over\nthe entity's treasury collectively."),(0,i.kt)("li",{parentName:"ul"},"group participation in governance: a multi-sig account can do everything a regular account can. A\nmulti-sig account could be a council member in Kusama's governance, where a set of community\nmembers could vote as one entity.")),(0,i.kt)("p",null,"Multi-signature accounts ",(0,i.kt)("strong",{parentName:"p"},"cannot be modified after being created"),". Changing the set of members or\naltering the threshold is not possible and instead requires the dissolution of the current multi-sig\nand creation of a new one. As such, multi-sig account addresses are ",(0,i.kt)("strong",{parentName:"p"},"deterministic"),", i.e. you can\nalways calculate the address of a multi-sig by knowing the members and the threshold, without the\naccount existing yet. This means one can send tokens to an address that does not exist yet, and if\nthe entities designated as the recipients come together in a new multi-sig under a matching\nthreshold, they will immediately have access to these tokens."),(0,i.kt)("h3",{id:"generating-addresses-of-multi-signature-accounts"},"Generating Addresses of Multi-signature Accounts"),(0,i.kt)("admonition",{title:"Addresses that are provided to the multi-sig wallets must be sorted",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The below methods for generating sort the accounts for you, but if you are implementing your own\nsorting, then be aware that the public keys are compared byte-for-byte and sorted ascending before\nbeing inserted in the payload that is hashed.")),(0,i.kt)("p",null,"Addresses are deterministically generated from the signers and threshold of the multisig wallet. For\na code example (in TypeScript) of generating you can view the internals of ",(0,i.kt)("inlineCode",{parentName:"p"},"@w3f/msig-util"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lsaether/msig-util/blob/master/src/actions/deriveAddress.ts"},"here"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@w3f/msig-util")," is a small CLI tool that can determine the multi-signature address based on\nyour inputs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},"$ npx @w3f/msig-util@1.0.7 derive --addresses 15o5762QE4UPrUaYcM83HERK7Wzbmgcsxa93NJjkHGH1unvr,1TMxLj56NtRg3scE7rRo8H9GZJMFXdsJk1GyxCuTRAxTTzU --threshold 1\nnpx: installed 79 in 7.764s\n--------------------------------\nAddresses: 15o5762QE4UPrUaYcM83HERK7Wzbmgcsxa93NJjkHGH1unvr 1TMxLj56NtRg3scE7rRo8H9GZJMFXdsJk1GyxCuTRAxTTzU\nThreshold: 1\nMultisig Address (SS58: 0): 15FKUKXC6kwaXxJ1tXNywmFy4ZY6FoDFCnU3fMbibFdeqwGw\n--------------------------------\n")),(0,i.kt)("p",null,"The Polkadot-JS Apps UI also supports multi-sig accounts, as documented in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-account-generation#multi-signature-accounts"},"Account Generation page"),". This is easier than\ngenerating them manually."),(0,i.kt)("h3",{id:"making-transactions-with-a-multi-signature-account"},"Making Transactions with a Multi-signature Account"),(0,i.kt)("p",null,"There are three types of actions you can take with a multi-sig account:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Executing a call ",(0,i.kt)("inlineCode",{parentName:"li"},"as_multi"),"."),(0,i.kt)("li",{parentName:"ul"},"Approving a call ",(0,i.kt)("inlineCode",{parentName:"li"},"approve_as_multi"),"."),(0,i.kt)("li",{parentName:"ul"},"Cancelling a call ",(0,i.kt)("inlineCode",{parentName:"li"},"cancel_as_multi"),".")),(0,i.kt)("p",null,"In scenarios where only a single approval is needed, a convenience method ",(0,i.kt)("inlineCode",{parentName:"p"},"as_multi_threshold_1"),"\nshould be used. This function takes only the other signatories and the raw call as its arguments."),(0,i.kt)("p",null,"However, in anything but the simple one approval case, you will likely need more than one of the\nsignatories to approve the call before finally executing it. When you create a new call or approve a\ncall as a multi-sig, you will need to place a small deposit. The deposit stays locked in the pallet\nuntil the call is executed. The deposit is to establish an economic cost on the storage space that\nthe multi-sig call takes up on the chain and discourage users from creating dangling multi-sig\noperations that never get executed. The deposit will be reserved in the caller's accounts, so\nparticipants in multi-signature wallets should have spare funds available."),(0,i.kt)("p",null,"The deposit is dependent on the ",(0,i.kt)("inlineCode",{parentName:"p"},"threshold")," parameter and is calculated as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Deposit = DepositBase + threshold * DepositFactor\n")),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"DepositBase")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DepositFactor")," are chain constants set in the runtime code."),(0,i.kt)("p",null,"Currently, the ",(0,i.kt)("strong",{parentName:"p"},"DepositBase")," equals ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit(1, 88)")," (key size is 32; value is size 4+4+16+32 = 56\nbytes) and the ",(0,i.kt)("strong",{parentName:"p"},"DepositFactor")," equals ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit(0, 32)")," (additional address of 32 bytes)."),(0,i.kt)("p",null,"The deposit function in JavaScript is defined below, cribbed from the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/constants/src/lib.rs"},"Rust source"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Polkadot\nconst DOLLARS = 10000000000; // planck\nconst MILLICENTS = 100000; // planck\n\n// Kusama\n// const DOLLARS = 166666666666.67;\n// const MILLICENTS = 1666666.66;\n\nconst deposit = (items, bytes) => {\n  return items * 20 * DOLLARS + bytes * 100 * MILLICENTS;\n};\n\nconsole.log("DepositBase", deposit(1, 88));\nconsole.log("DepositFactor", deposit(0, 32));\n')),(0,i.kt)("p",null,"Thus the deposit values can be calculated as shown in the table below. They are also shown\nin ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-DOT#polkadot"},"plancks")," for convenience."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Deposit Base"),(0,i.kt)("th",{parentName:"tr",align:null},"Deposit Factor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Polkadot"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(s.Z,{network:"polkadot",path:"consts.multisig.depositBase",defaultValue:20088e7,filter:"humanReadable",mdxType:"RPC"})," (",(0,i.kt)(s.Z,{network:"polkadot",path:"consts.multisig.depositBase",defaultValue:20088e7,mdxType:"RPC"})," Planck)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(s.Z,{network:"polkadot",path:"consts.multisig.depositFactor",defaultValue:32e7,filter:"humanReadable",mdxType:"RPC"})," (",(0,i.kt)(s.Z,{network:"polkadot",path:"consts.multisig.depositFactor",defaultValue:32e7,mdxType:"RPC"})," Planck)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(s.Z,{network:"kusama",path:"consts.multisig.depositBase",defaultValue:66959996400,filter:"humanReadable",mdxType:"RPC"})," (",(0,i.kt)(s.Z,{network:"kusama",path:"consts.multisig.depositBase",defaultValue:66959996400,mdxType:"RPC"})," Planck)"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)(s.Z,{network:"kusama",path:"consts.multisig.depositFactor",defaultValue:106665600,filter:"humanReadable",mdxType:"RPC"})," (",(0,i.kt)(s.Z,{network:"kusama",path:"consts.multisig.depositFactor",defaultValue:106665600,mdxType:"RPC"})," Planck)")))),(0,i.kt)("p",null,"Let's consider an example of a multi-sig on Polkadot with a threshold of 2 and 3 signers: Alice,\nBob, and Charlie. First, Alice will create the call on-chain by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"as_multi")," with the raw\ncall. When doing this Alice will have to deposit ",(0,i.kt)("inlineCode",{parentName:"p"},"DepositBase + (2 * DepositFactor) = 20.152 DOT"),"\nwhile she waits for either Bob or Charlie also to approve the call using the ",(0,i.kt)("inlineCode",{parentName:"p"},"approve_as_multi"),"\nextrinsic. When Bob comes to approve the call and execute the transaction, he will not need to place\nthe deposit, and Alice will receive her deposit back. Similarly, after Alice sends the initial\ntransaction, say Bob or Charlie choose to cancel the transaction due to an error on Alice's part,\nthey can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cancel_as_multi")," extrinsic. The cancellation will release the deposit back to\nAlice."),(0,i.kt)("h3",{id:"example-with-polkadot-js"},"Example with Polkadot JS"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Check the "How to create a multisig account" section on\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181826-how-to-create-and-use-a-multisig-account"},"this support page"),".\nWe recommend trying out the tutorial on\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-networks#westend-test-network"},"Westend network")," - Polkadot's testnet.")),(0,i.kt)("h2",{id:"decoding-call-data"},"Decoding Call Data"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Check the "How to use a multisig account" section on\n',(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181826-how-to-create-and-use-a-multisig-account"},"this support page"),".")))}h.isMDXComponent=!0},3971:()=>{},6601:()=>{}}]);