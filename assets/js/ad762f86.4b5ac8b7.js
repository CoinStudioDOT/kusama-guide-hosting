(self.webpackChunk=self.webpackChunk||[]).push([[7940],{7940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(4165),o=a(5861),s=a(7294),r=a(3444),i=a(955),d=a(7425);function l(e,t,a){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var s,d,l,c,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,d=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==s){e.next=18;break}return e.abrupt("return");case 18:return l=new r.U(s),e.next=21,i.G.create({provider:l});case 21:c=e.sent,(p=a.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=p[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return d=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return d=(d=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return e.abrupt("return",d);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,a,n){switch(t){case"humanReadable":(0,d.HumanReadable)(e,a,n);break;case"blocksToDays":(0,d.BlocksToDays)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,a=e.path,r=e.defaultValue,i=e.filter,d=void 0===i?void 0:i,c=(0,s.useState)(""),u=c[0],h=c[1];return t=t.toLowerCase(),(0,s.useEffect)((function(){void 0!==d?p(r.toString(),d,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t,a,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==d?p(o,d,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(i){console.log(i)}}}),[]),u}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},9569:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),o=a(3366),s=(a(7294),a(3905)),r=(a(7940),["components"]),i={id:"learn-account-advanced",title:"Polkadot Accounts In-Depth",sidebar_label:"Accounts",description:"Advanced information about Polkadot accounts",keywords:["account","polkadot account","polkadotjs","indices","identity","reaping"],slug:"../learn-account-advanced"},d=void 0,l={unversionedId:"learn/learn-account-advanced",id:"learn/learn-account-advanced",title:"Polkadot Accounts In-Depth",description:"Advanced information about Polkadot accounts",source:"@site/../docs/learn/learn-account-advanced.md",sourceDirName:"learn",slug:"/learn-account-advanced",permalink:"/docs/learn-account-advanced",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1667659605,formattedLastUpdatedAt:"Nov 5, 2022",frontMatter:{id:"learn-account-advanced",title:"Polkadot Accounts In-Depth",sidebar_label:"Accounts",description:"Advanced information about Polkadot accounts",keywords:["account","polkadot account","polkadotjs","indices","identity","reaping"],slug:"../learn-account-advanced"}},c={},p=[{value:"Address Format",id:"address-format",level:2},{value:"Derivation Paths",id:"derivation-paths",level:2},{value:"Soft vs. Hard Derivation",id:"soft-vs-hard-derivation",level:3},{value:"For the Curious: How Prefixes Work",id:"for-the-curious-how-prefixes-work",level:2},{value:"Portability",id:"portability",level:2},{value:"Address Conversion Tools",id:"address-conversion-tools",level:2},{value:"How to Verify a Public Key&#39;s Associated Address",id:"how-to-verify-a-public-keys-associated-address",level:3},{value:"Using Subkey to Retrieve Public Key from SS58 Address",id:"using-subkey-to-retrieve-public-key-from-ss58-address",level:4},{value:"Address Verification",id:"address-verification",level:4},{value:"Consider the following example:",id:"consider-the-following-example",level:5},{value:"Indices",id:"indices",level:2}],u={toc:p};function h(e){var t=e.components,i=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"address-format"},"Address Format"),(0,s.kt)("p",null,"The address format used in Substrate-based chains is SS58. SS58 is a modification of Base-58-check\nfrom Bitcoin with some minor changes. Notably, the format contains an ",(0,s.kt)("em",{parentName:"p"},"address type")," prefix that\nidentifies an address as belonging to a specific network."),(0,s.kt)("p",null,"For example:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Polkadot addresses ",(0,s.kt)("strong",{parentName:"li"},"always start with")," the number ",(0,s.kt)("strong",{parentName:"li"},"1"),"."),(0,s.kt)("li",{parentName:"ul"},"Kusama addresses always start with a capital letter, such as ",(0,s.kt)("strong",{parentName:"li"},"C D, F, G, H, J"),"."),(0,s.kt)("li",{parentName:"ul"},"Generic Substrate addresses ",(0,s.kt)("strong",{parentName:"li"},"always start with")," the number ",(0,s.kt)("strong",{parentName:"li"},"5"),".")),(0,s.kt)("p",null,"These prefixes, including how to validate addresses, are embedded in the Substrate SS58 format.\nNever use regular expressions for address validation."),(0,s.kt)("p",null,"It's important to understand that different network formats are ",(0,s.kt)("strong",{parentName:"p"},"merely other representations of\nthe same public key in a private-public keypair")," generated by an address generation tool. As a\nresult, the addresses across Substrate-based chains are compatible as long as the format is\nconverted correctly."),(0,s.kt)("p",null,"As of Runtime 28, the default ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-accounts##address-format"},"address format")," is the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/primitives/runtime/src/multiaddress.rs"},(0,s.kt)("inlineCode",{parentName:"a"},"MultiAddress")),"\ntype."),(0,s.kt)("p",null,"This ",(0,s.kt)("inlineCode",{parentName:"p"},"enum")," is a multi-format address wrapper for on-chain accounts and allows us to describe\nPolkadot's default address format to represent many different address types. This includes ",(0,s.kt)("strong",{parentName:"p"},"20\nbyte"),", ",(0,s.kt)("strong",{parentName:"p"},"32 byte"),", and ",(0,s.kt)("strong",{parentName:"p"},"arbitrary raw byte")," variants. It also allows an enhancement to the\noriginal ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-accounts#indices"},(0,s.kt)("inlineCode",{parentName:"a"},"indices"))," lookup."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Many wallets allow you to convert between formats. Stand-alone tools exist as well; you can find\nthem in the ",(0,s.kt)("a",{parentName:"p",href:"#address-conversion-tools"},"address conversion tools")," section.")),(0,s.kt)("h2",{id:"derivation-paths"},"Derivation Paths"),(0,s.kt)("p",null,"If you would like to create and manage several accounts on the network using the same seed, you can\nuse derivation paths. We can think of the derived accounts as child accounts of the root account\ncreated using the original mnemonic seed phrase. Many Polkadot key generation tools support hard and\nsoft derivation. For instance, if you intend to create an account to be used on the Polkadot chain,\nyou can derive a ",(0,s.kt)("strong",{parentName:"p"},"hard key")," child account using ",(0,s.kt)("strong",{parentName:"p"},"//")," after the mnemonic phrase."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"'caution juice atom organ advance problem want pledge someone senior holiday very//0'\n")),(0,s.kt)("p",null,"and a ",(0,s.kt)("strong",{parentName:"p"},"soft key")," child account using ",(0,s.kt)("strong",{parentName:"p"},"/")," after the mnemonic phrase"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"'caution juice atom organ advance problem want pledge someone senior holiday very/0'\n")),(0,s.kt)("p",null,"If you would like to create another account for using the Polkadot chain using the same seed, you\ncan change the number at the end of the string above. For example, ",(0,s.kt)("inlineCode",{parentName:"p"},"/1"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"/2"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"/3")," will create\ndifferent derived accounts."),(0,s.kt)("p",null,"You can use any letters or numbers in the derivation path as long as they make sense to you; they do\nnot have to follow any specific pattern. You may combine multiple derivations in your path, as well.\nFor instance, ",(0,s.kt)("inlineCode",{parentName:"p"},"//bill//account//1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"//john/polkadot/initial")," are both valid. To recreate a\nderived account, you must know both the seed and the derivation path, so you should either use a\nwell-defined sequence (e.g. //0, //1, //2...) or be sure to write down any derivation paths you use."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"It is not possible to generate a derived account without also knowing the derivation path.")),(0,s.kt)("p",null,"There is an additional type of derivation called password derivation. On Polkadot you can derive a\n",(0,s.kt)("strong",{parentName:"p"},"password key")," account using ",(0,s.kt)("strong",{parentName:"p"},"///")," after the mnemonic phrase"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"'caution juice atom organ advance problem want pledge someone senior holiday very///0'\n")),(0,s.kt)("p",null,"In this type of derivation, if the mnemonic phrase would leak, accounts cannot be derived without\nthe initial password. In fact, for soft- and hard-derived accounts, if someone knows the mnemonic\nphrase and the derivation path, they will have access to your account. For password-derived\naccounts, the password is applied on the derivation path. You can know the mnemonic phrase and the\nderivation path, but without the password it is not possible to access the account. In mathematical\nterms, if we have a ",(0,s.kt)("inlineCode",{parentName:"p"},"written derivation path")," and a ",(0,s.kt)("inlineCode",{parentName:"p"},"password"),", we can calculate the\n",(0,s.kt)("inlineCode",{parentName:"p"},"real derivation path")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"f(written derivation path, password)"),"; where ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," is a function. We can\nthen calculate the ",(0,s.kt)("inlineCode",{parentName:"p"},"account key pair")," using ",(0,s.kt)("inlineCode",{parentName:"p"},"f(seed, real derivation path)"),". Note that unlike hard\nand soft derivations that can be mixed, only a single password should be specified per derivation."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Password-derived account are as secure as the chosen password.")),(0,s.kt)("h3",{id:"soft-vs-hard-derivation"},"Soft vs. Hard Derivation"),(0,s.kt)("p",null,"A soft derivation allows someone to potentially \"go backwards\" to figure out the initial account's\nprivate key if they know the derived account's private key. It is also possible to determine that\ndifferent accounts generated from the same seed are linked to that seed. A hard derivation path does\nnot allow either of these - even if you know a derived private key, it's not feasible to figure out\nthe private key of the root address, and it's impossible to prove that the first account is linked\nwith the second. These derivation methods have their use cases, given that the private keys for all\nthe derived accounts are fully secure. Unless you have a specific need for a soft derivation, it is\nrecommended to generate the account using a hard derivation path."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"Subkey documentation")," for\ndetails and examples of derivation path formats. The Polkadot-JS Apps and Extension and Parity\nSigner support custom derivation paths using the same syntax as Subkey."),(0,s.kt)("p",null,"Some wallets will automatically add derivation paths to the end of the generated mnemonic phrase.\nThis will generate separate seeds for separate paths, allowing separate signing keys with the same\nmnemonic, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"<mnemonic phrase>//polkadot")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"<mnemonic phrase>//kusama"),". Although you may\ncorrectly save the mnemonic phrase, using it in another wallet will not generate the same addresses\nunless both wallets use the same derivation paths."),(0,s.kt)("p",null,"Polkadot and Kusama both have paths registered in the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"BIP44 registry"),"."),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"You must have both the ",(0,s.kt)("em",{parentName:"p"},"parent")," private key and the derivation path to arrive at the key for an\naddress. Do not use custom derivation paths unless you are comfortable with your understanding of\nthis topic.")),(0,s.kt)("h2",{id:"for-the-curious-how-prefixes-work"},"For the Curious: How Prefixes Work"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)"},"SS58 document"),"\nstates that:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Polkadot has an address type of ",(0,s.kt)("inlineCode",{parentName:"li"},"00000000b"),", so ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," is in decimal."),(0,s.kt)("li",{parentName:"ul"},"Kusama (Polkadot Canary) has an address type of ",(0,s.kt)("inlineCode",{parentName:"li"},"00000010b"),", so ",(0,s.kt)("inlineCode",{parentName:"li"},"2")," is in decimal."),(0,s.kt)("li",{parentName:"ul"},"Generic Substrate has ",(0,s.kt)("inlineCode",{parentName:"li"},"00101010b")," as the address type, ",(0,s.kt)("inlineCode",{parentName:"li"},"42")," is in decimal.")),(0,s.kt)("p",null,"Because the ",(0,s.kt)("inlineCode",{parentName:"p"},"Base58-check")," alphabet has no number 0, the lowest value is indeed 1. So ",(0,s.kt)("inlineCode",{parentName:"p"},"00000000b")," is\n1 in Base58-check. If we try to\n",(0,s.kt)("a",{parentName:"p",href:"https://www.better-converter.com/Encoders-Decoders/Base58Check-to-Hexadecimal-Decoder"},"decode")," a\nPolkadot address like ",(0,s.kt)("inlineCode",{parentName:"p"},"1FRMM8PEiWXYax7rpS6X4XZX1aAAxSWx1CrKTyrVYhV24fg"),", the result is\n",(0,s.kt)("inlineCode",{parentName:"p"},"000aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b29d7"),". The first byte is ",(0,s.kt)("inlineCode",{parentName:"p"},"00"),",\nwhich is indeed ",(0,s.kt)("inlineCode",{parentName:"p"},"00000000")," in binary and ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," in decimal and thus matches the address type of\nPolkadot."),(0,s.kt)("p",null,"Let's take a look at Substrate addresses. If we decode\n",(0,s.kt)("inlineCode",{parentName:"p"},"5CK8D1sKNwF473wbuBP6NuhQfPaWUetNsWUNAAzVwTfxqjfr"),", we get\n",(0,s.kt)("inlineCode",{parentName:"p"},"2a0aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b77e5"),". The first byte is ",(0,s.kt)("inlineCode",{parentName:"p"},"2a"),"\nwhich when\n",(0,s.kt)("a",{parentName:"p",href:"https://www.rapidtables.com/convert/number/hex-to-decimal.html"},"converted from hex to decimal"),"\nis 42. 42 is ",(0,s.kt)("inlineCode",{parentName:"p"},"00101010")," in binary, just as the SS58 document states."),(0,s.kt)("p",null,"Finally, let's look at Kusama addresses. Decoding ",(0,s.kt)("inlineCode",{parentName:"p"},"CpjsLDC1JFyrhm3ftC9Gs4QoyrkHKhZKtK7YqGTRFtTafgp"),"\ngives us ",(0,s.kt)("inlineCode",{parentName:"p"},"020aff6865635ae11013a83835c019d44ec3f865145943f487ae82a8e7bed3a66b0985")," with the first\nbyte being ",(0,s.kt)("inlineCode",{parentName:"p"},"02"),", just as specified. If we try a Kusama address that starts with a completely\ndifferent letter, like ",(0,s.kt)("inlineCode",{parentName:"p"},"J4iggBtsWsb61RemU2TDWDXTNHqHNfBSAkGvVZBtn1AJV1a"),", we still get ",(0,s.kt)("inlineCode",{parentName:"p"},"02")," as the\nfirst byte: ",(0,s.kt)("inlineCode",{parentName:"p"},"02f2d606a67f58fa0b3ad2b556195a0ef905676efd4e3ec62f8fa1b8461355f1142509"),". It seems\ncounterintuitive that some addresses always have the same prefix and others like Kusama can vary\nwildly, but it's just a quirk of Base58-check encoding."),(0,s.kt)("h2",{id:"portability"},"Portability"),(0,s.kt)("p",null,"The above information brings us to portability: the ability to use a mnemonic phrase or seed across\nmultiple wallets. Portability depends on several factors:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Derivation path"),(0,s.kt)("li",{parentName:"ul"},"Mnemonic format"),(0,s.kt)("li",{parentName:"ul"},"Seed derivation"),(0,s.kt)("li",{parentName:"ul"},"Signature scheme")),(0,s.kt)("p",null,"If you want to use the exact mnemonic across multiple wallets, make sure that they follow compatible\nmethods for generating keys and signing messages. If you cannot find understandable documentation,\nreach out to the project maintainers."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"}),(0,s.kt)("th",{parentName:"tr",align:"center"},"Mnemonic Format"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Derivation Path"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Seed Derivation"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Signature Support"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Polkadot{.js} Extension"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Standard"),(0,s.kt)("td",{parentName:"tr",align:"center"},"User-Defined"),(0,s.kt)("td",{parentName:"tr",align:"center"},"BIP32"),(0,s.kt)("td",{parentName:"tr",align:"center"},"sr25519")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Polkadot-JS Apps"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Standard","*"),(0,s.kt)("td",{parentName:"tr",align:"center"},"User-Defined"),(0,s.kt)("td",{parentName:"tr",align:"center"},"BIP32"),(0,s.kt)("td",{parentName:"tr",align:"center"},"sr25519, ed25519, secp256k")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Ledger"),(0,s.kt)("td",{parentName:"tr",align:"center"},"BIP39"),(0,s.kt)("td",{parentName:"tr",align:"center"},"BIP44","\u2020"),(0,s.kt)("td",{parentName:"tr",align:"center"},"BIP32","\u2021"),(0,s.kt)("td",{parentName:"tr",align:"center"},"ed25519","\xa7")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Subkey"),(0,s.kt)("td",{parentName:"tr",align:"center"},"Standard","*"),(0,s.kt)("td",{parentName:"tr",align:"center"},"User-Defined"),(0,s.kt)("td",{parentName:"tr",align:"center"},"BIP32"),(0,s.kt)("td",{parentName:"tr",align:"center"},"sr25519, ed25519, secp256k1")))),(0,s.kt)("p",null,"*"," Ed25519 keys have ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-bip39"},"limited compatibility")," with\nBIP39."),(0,s.kt)("p",null,"\u2020"," ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"BIP44 Registry")),(0,s.kt)("p",null,"\u2021"," Ed25519 and BIP32 based on\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/LedgerHQ/orakolo/blob/master/papers/Ed25519_BIP%20Final.pdf"},"Khovratovich")),(0,s.kt)("p",null,"\xa7"," Sr25519 planned"),(0,s.kt)("h2",{id:"address-conversion-tools"},"Address Conversion Tools"),(0,s.kt)("p",null,"You can use the tools below to convert any SS58 address for any network for use on different\nnetworks"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://polkadot.subscan.io/tools/ss58_transform"},"handy subscan tool")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://polkadot-address-convertor.netlify.app/"},"simple address converter"))),(0,s.kt)("h3",{id:"how-to-verify-a-public-keys-associated-address"},"How to Verify a Public Key's Associated Address"),(0,s.kt)("p",null,"You can verify your public key's associated address through a series of inspection steps, where the\nkey is a base-16 (hexadecimal) address."),(0,s.kt)("h4",{id:"using-subkey-to-retrieve-public-key-from-ss58-address"},"Using Subkey to Retrieve Public Key from SS58 Address"),(0,s.kt)("p",null,"This is to showcase that the ",(0,s.kt)("strong",{parentName:"p"},'SS58 address is based on the public key (aka "Account ID")')),(0,s.kt)("p",null,"The Subkey Tool's The\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/command-line-tools/subkey/#inspecting-keys"},"Inspecting Keys"),"\nsection explains how to use the ",(0,s.kt)("inlineCode",{parentName:"p"},"inspect")," command to recalculate your key pair's public key and\naddress."),(0,s.kt)("p",null,"Start by inspecting your account's Polkadot address by running the inspect command against your\naccount's address:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ subkey inspect 1a1LcBX6hGPKg5aQ6DXZpAHCCzWjckhea4sz3P1PvL3oc4F\n\nPublic Key URI `1a1LcBX6hGPKg5aQ6DXZpAHCCzWjckhea4sz3P1PvL3oc4F` is account:\n  Network ID/version: polkadot\n  Public key (hex):   0x192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce\n  Account ID:         0x192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce\n  SS58 Address:       1a1LcBX6hGPKg5aQ6DXZpAHCCzWjckhea4sz3P1PvL3oc4F\n")),(0,s.kt)("p",null,'Take note of the hexadecimal string for "Public key (hex)". This is your account\'s public key.'),(0,s.kt)("p",null,"Running the ",(0,s.kt)("inlineCode",{parentName:"p"},"inspect")," command on your public key along with the ",(0,s.kt)("inlineCode",{parentName:"p"},"--public")," parameter the SS58\naddress for the default network (substrate) is returned."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ subkey inspect --public 0x192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce\n\nNetwork ID/version: substrate\n  Public key (hex):   0x192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce\n  Account ID:         0x192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce\n  Public key (SS58):  5CdiCGvTEuzut954STAXRfL8Lazs3KCZa5LPpkPeqqJXdTHp\n  SS58 Address:       5CdiCGvTEuzut954STAXRfL8Lazs3KCZa5LPpkPeqqJXdTHp\n")),(0,s.kt)("p",null,"Using the ",(0,s.kt)("inlineCode",{parentName:"p"},"--network")," flag, you can define the network that you would like to inspect, where the\nSS58 address will be based on that network. Now, running the ",(0,s.kt)("inlineCode",{parentName:"p"},"inspect")," command with\n",(0,s.kt)("inlineCode",{parentName:"p"},"--network polkadot")," return your original Polkadot address, thus verifying the public key."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ subkey inspect --network polkadot 5CdiCGvTEuzut954STAXRfL8Lazs3KCZa5LPpkPeqqJXdTHp\n\nPublic Key URI `5CdiCGvTEuzut954STAXRfL8Lazs3KCZa5LPpkPeqqJXdTHp` is account:\n  Network ID/version: polkadot\n  Public key (hex):   0x192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce\n  Account ID:         0x192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce\n  Public key (SS58):  1a1LcBX6hGPKg5aQ6DXZpAHCCzWjckhea4sz3P1PvL3oc4F\n  SS58 Address:       1a1LcBX6hGPKg5aQ6DXZpAHCCzWjckhea4sz3P1PvL3oc4F\n")),(0,s.kt)("p",null,"You will notice that the Subkey Tool recognizes the correct address network and returns the\nassociated public key. The public key is returned as a hexadecimal string (i.e. prefixed with\n",(0,s.kt)("strong",{parentName:"p"},'"0x"'),"). ",(0,s.kt)("strong",{parentName:"p"},"For both SS58 addresses, the same public key is returned.")),(0,s.kt)("h4",{id:"address-verification"},"Address Verification"),(0,s.kt)("h5",{id:"consider-the-following-example"},"Consider the following example:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"19",src:a(2080).Z,width:"739",height:"543"})),(0,s.kt)("p",null,"If you are comfortable enough to distinguish between each account parameter, you can prefix the\npublic-key string with ",(0,s.kt)("strong",{parentName:"p"},'"0x"')," on your own:"),(0,s.kt)("p",null,"From:\n",(0,s.kt)("inlineCode",{parentName:"p"},"Pay DOTs to the Polkadot account:192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce"),',\nwe prefix the address by "0x" ->\n',(0,s.kt)("inlineCode",{parentName:"p"},"0x192c3c7e5789b461fbf1c7f614ba5eed0b22efc507cda60a5e7fda8e046bcdce"),"."),(0,s.kt)("p",null,"Using the ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.subscan.io/tools/ss58_transform"},"handy subscan tool"),', you can verify\nboth address associations to your public key. Copy your public key into the "Input Account or Public\nKey" textbox and click "Transform" at the bottom. On the right-hand side, the addresses for Polkadot\nand Substrate that are returned based on your public key should match the ones you inspected.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"20",src:a(1779).Z,width:"1505",height:"759"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"You may have to scroll down to the bottom of the menu to find the Substrate address based on the\nmenu listings. You will notice that many networks that also use the same Substrate address.")),(0,s.kt)("p",null,"You can verify your public key verification by recalling that Polkadot addresses start with a '1',\nwhereas Substrate addresses generally start with a '5' (Kusama addresses start with a capital\nletter). See ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-accounts#address-format"},"Addresses")," for more details."),(0,s.kt)("p",null,"Furthermore, the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/w3f/utility-scripts"},"Utility Scripts")," can be referenced for how\nthe verification is performed:\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/w3f/utility-scripts/blob/master/src/misc/pubkeyToAddress.js"},"pubkeyToAddress.js"),"\ndemonstrates how a single public key interprets a Polkadot, Substrate, or Kusama address."),(0,s.kt)("h2",{id:"indices"},"Indices"),(0,s.kt)("p",null,"A Kusama or Polkadot address can have an index. An index is like a short and easy-to-remember\nversion of an address. Claiming an index requires a deposit that is released when the index is\ncleared. Any index can be claimed as long as it is not taken by someone else."),(0,s.kt)("p",null,"But what if an account gets reaped as explained above? In that case, the index is emptied. In other\nwords, the slot frees up again, making it available for anyone to claim it. It is possible to\n",(0,s.kt)("em",{parentName:"p"},"freeze")," an index and permanently assign it to an address. This action consumes a deposit but makes\nsure that the index can never be reclaimed unless released by the holding account."),(0,s.kt)("admonition",{title:"Lookup Account Index on-chain",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"When someone shares their account index, their actual account address on-chain can be looked up\nthrough Polkadot-JS Apps UI > Developer > Chain state > Storage and selecting state query on indices\npallet for the account corresponding to the index.")),(0,s.kt)("p",null,"Here is an example snapshot that shows how to lookup the corresponding account address of the\naccount index 1988 on\n",(0,s.kt)("a",{parentName:"p",href:"/docs/maintain-networks#westend-test-network"},"Westend network (Polkadot Test Network)"),",\nusing Polkadot-JS Apps UI. The output shows the account address, its deposit amount and a boolean\nflag which indicates whether this is claimed permanently."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"query account index",src:a(5610).Z,width:"2012",height:"998"})),(0,s.kt)("p",null,"To register an index, submit a ",(0,s.kt)("inlineCode",{parentName:"p"},"claim")," extrinsic to the ",(0,s.kt)("inlineCode",{parentName:"p"},"indices")," pallet, and follow up with a\n",(0,s.kt)("inlineCode",{parentName:"p"},"freeze")," extrinsic. The easiest way to do this is via PolkadotJS UI through the ",(0,s.kt)("em",{parentName:"p"},"Developer ->\nExtrinsics")," menu:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Indices extrinsics",src:a(8872).Z,width:"786",height:"386"})),(0,s.kt)("p",null,"To find available indices to claim on Polkadot or Kusama,\n",(0,s.kt)("a",{parentName:"p",href:"https://www.shawntabrizi.com/substrate-js-utilities/indices/"},"this helper tool may come in handy"),"."))}h.isMDXComponent=!0},8872:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/index-a2000a16d514f2136b303dd1d29a17f4.png"},2080:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/pubkey-1-6dc18c2b04022519cc6dd0fb3af36f94.png"},1779:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/pubkey-2-16f0cbc7db6ab6eb8248a05df94adc35.png"},5610:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/query-index-6db697cbe5e058388b830fee34bc4415.png"},3971:()=>{},6601:()=>{}}]);