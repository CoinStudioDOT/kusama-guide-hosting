"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"ledger",title:"Using the Polkadot Ledger Application",sidebar_label:"Ledger Application",description:"How to use the Polkadot application on Ledger.",keywords:["ledger","staking","polkadot app"],slug:"../learn-ledger"},s=void 0,p={unversionedId:"general/ledger",id:"general/ledger",title:"Using the Polkadot Ledger Application",description:"How to use the Polkadot application on Ledger.",source:"@site/../docs/general/ledger.md",sourceDirName:"general",slug:"/learn-ledger",permalink:"/docs/learn-ledger",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1676883125,formattedLastUpdatedAt:"Feb 20, 2023",frontMatter:{id:"ledger",title:"Using the Polkadot Ledger Application",sidebar_label:"Ledger Application",description:"How to use the Polkadot application on Ledger.",keywords:["ledger","staking","polkadot app"],slug:"../learn-ledger"}},d={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Using Ledger Live",id:"using-ledger-live",level:2},{value:"Using on Polkadot-JS Apps",id:"using-on-polkadot-js-apps",level:2},{value:"Loading Your Account",id:"loading-your-account",level:3},{value:"Derivation paths",id:"derivation-paths",level:4},{value:"Connecting your ledger device",id:"connecting-your-ledger-device",level:4},{value:"Confirming the Address on your Device",id:"confirming-the-address-on-your-device",level:3},{value:"Checking the Balance of Your Account",id:"checking-the-balance-of-your-account",level:3},{value:"Sending a Transfer",id:"sending-a-transfer",level:3},{value:"Receiving a Transfer",id:"receiving-a-transfer",level:3},{value:"Staking",id:"staking",level:3},{value:"Removing Expired Democracy Locks",id:"removing-expired-democracy-locks",level:3},{value:"Ledger Developer Release",id:"ledger-developer-release",level:2},{value:"Why you might need the Developer Release",id:"why-you-might-need-the-developer-release",level:3},{value:"Install the Developer Release",id:"install-the-developer-release",level:3}],u={toc:c};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Because of required WebUSB support, Ledger wallets currently only work on Chromium-based browsers\nlike Brave and Chrome.")),(0,r.kt)("admonition",{title:"Ledger does not currently support batch transactions",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Ledger does not currently support batch calls; As a consequence, if you stake using the\n",(0,r.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},"staking dashboard"),", you must use a hot wallet.\nAlternatively, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI")," that allows\nfor single calls (i.e., bonding and nominating).")),(0,r.kt)("p",null,"The Polkadot ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger")," application is compatible with the Ledger Nano S and\nthe Ledger Nano X devices. Ledger devices are hardware wallets that keep your secret key secured on\na physical device that does not expose it to your computer or the internet. Even if you connect your\nnano via USB to your computer, the private keys will not be leaked. Ledger devices are also\nhierarchical deterministic wallets (HD wallets), that is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Deterministic")," means that only one seed phrase generates all the accounts for different\nblockchain networks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Hierarchical")," means that the accounts are generated in a tree-like structure for different\npurposes.")),(0,r.kt)("p",null,"Ledger devices can be equipped with applications that are blockchain-specific. Such applications are\nusually developed by third parties, and they enable the user to transact securely on the blockchain\nnetwork. The Polkadot Ledger application allows you to manage Polkadot's native token, DOT. It\nsupports most of the transaction types of the network, including batch transactions from the Utility\npallet."),(0,r.kt)("admonition",{title:"Ledger apps may not support all the transactions",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"Ledger Polkadot App")," specification for the list of\ntransactions supported. Some transactions are supported only on a specific version of the app, and\nothers are not supported at all by any version. For instance, the staking ",(0,r.kt)("inlineCode",{parentName:"p"},"rebag")," extrinsic is\nsupported on the XL version but not on the light version. Support for the XL version is limited to\nsingle calls (not batch calls), meaning you can rebag one account at a time. Also, joining a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," is only possible with the XL version.")),(0,r.kt)("p",null,"If you have trouble using Ledger or following the directions below, you can try searching for your\nissue on the ",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot support pages"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"Here is a list of what you will need before using Polkadot with Ledger:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Ledger Nano X or Nano S plus (recommended for Polkadot Ledger App space requirements). The\nLedger Nano S has limited memory and is no longer produced."),(0,r.kt)("li",{parentName:"ul"},'The latest firmware of the Polkadot Ledger App installed (always check for updates in Ledger Live\nunder the "Manager" tab, you will need to allow access with your nano).'),(0,r.kt)("li",{parentName:"ul"},"Ledger Live is installed and at version 2.1 or newer (see settings -> about to find out if you're\nup to date)."),(0,r.kt)("li",{parentName:"ul"},"A Chromium-based web browser is installed that you can use to access the\n",(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/"},"Polkadot-JS UI"),".")),(0,r.kt)("h2",{id:"using-ledger-live"},"Using Ledger Live"),(0,r.kt)("p",null,"Check\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175822-how-to-use-polkadot-and-stake-with-ledger-live"},"this support article"),"\nto learn how to use Polkadot with ledger live."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ledger Live will only show the main account with BIP44 path 44'/354'/0'/0'/0'. This means that if\nyou create a ",(0,r.kt)("a",{parentName:"p",href:"#using-on-polkadot-js-apps"},"derived account using Polkadot JS")," with a derivation path\n44'/354'/0'/0'/1', it will not be displayed on the Ledger Live App. Consequently, it is not possible\nto transact with derived accounts using the Ledger Live App, but it is possible to do so using\nPolkadot JS. For more information about derived accounts and derivation paths, check\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts"},"the accounts page"),".")),(0,r.kt)("h2",{id:"using-on-polkadot-js-apps"},"Using on Polkadot-JS Apps"),(0,r.kt)("h3",{id:"loading-your-account"},"Loading Your Account"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ledger Live should be off while using Ledger with Polkadot-JS UI as it can interfere with normal\noperation.")),(0,r.kt)("p",null,"You can import your Ledger account to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Polkadot Extension")," or to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),". For instructions on how to import\nLedger accounts to the Polkadot Extension read through\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175387-how-to-add-your-ledger-through-the-polkadot-extension"},"this support article"),",\nwhile if you want to import Ledger accounts to the Polkadot JS UI you can consult\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170812-how-to-add-ledger-account-through-the-polkadot-js-ui"},"this other article"),"."),(0,r.kt)("h4",{id:"derivation-paths"},"Derivation paths"),(0,r.kt)("p",null,"When adding a Ledger account using the extension or the UI, you will be asked to select an\n",(0,r.kt)("inlineCode",{parentName:"p"},"account type")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"account index"),". The first lets you select an account, while the second lets\nyou pick a derivation path from that account - think of it like a formula from which child accounts\nare generated. When you are creating a Polkadot ledger account for the first time on Ledger Live\nwith name ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 1"),", this can be added to Polkadot JS using the 0/0 derivation path (i.e. account\ntype = 0 and account index = 0). If you add a second account called ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 2"),", this will\ncorrespond to the 1/0 derivation path, and so on. We thus have multiple parent accounts that can be\nviewed and used in both Ledger Live and Polkadot JS. Additionally, we can use Polkadot-JS UI to\ncreated multiple children accounts from each parent account. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Polkadot 1")," with 0/0\nderivation path can have child 0/1, 0/2, etc. that can be used within the UI. However, such children\naccounts cannot be used in Ledger Live, as it only scans through the parent accounts. So, keep in\nmind that the balances on the children accounts cannot be viewed, and you will not be able to\ntransact with those accounts on Ledger Live."),(0,r.kt)("h4",{id:"connecting-your-ledger-device"},"Connecting your ledger device"),(0,r.kt)("p",null,"While using a ledger device to sign transactions, depending on your browser and its security\nsettings, you might need to confirm the USB connection through a popup like the one below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Display the device connection popup",src:n(30536).Z,width:"468",height:"461"})),(0,r.kt)("p",null,'If you are adding your Ledger Nano for the first time, click on the "Unknown device" line and the\n"Connect" button will become available.'),(0,r.kt)("admonition",{title:"Signature error message",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have already connected your device, but an error message appears before signing a\ntransaction, make sure you have opened the Polkadot application on your Ledger Nano device. Visit\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support page")," for\nmore information about signing transactions using your ledger.")),(0,r.kt)("h3",{id:"confirming-the-address-on-your-device"},"Confirming the Address on your Device"),(0,r.kt)("p",null,"To display your Polkadot ledger account address on your Ledger Nano you can follow the guidelines on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181854-how-to-confirm-your-account-address-on-your-ledger-device"},"this support article"),".\nHere you can scroll through and make sure the address matches what is displayed on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,r.kt)("h3",{id:"checking-the-balance-of-your-account"},"Checking the Balance of Your Account"),(0,r.kt)("p",null,"There are a few methods to check the balance of your account. Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169332-where-can-i-see-the-balance-of-my-account-"},"this support article"),"\nfor information."),(0,r.kt)("h3",{id:"sending-a-transfer"},"Sending a Transfer"),(0,r.kt)("p",null,"General instructions to send a transfer can be found on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"this support page"),".\nTo sign transactions with your Ledger nano check\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181994"},"this support article"),"."),(0,r.kt)("h3",{id:"receiving-a-transfer"},"Receiving a Transfer"),(0,r.kt)("p",null,"To receive a transfer on the accounts stored on your Ledger device, you will need to provide the\nsender (i.e. the payer) with your address. To do so, follow the instructions on\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181866-how-to-receive-dot-to-my-account-on-polkadot-js-ui"},"this support page"),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Before giving anyone your address, make sure it matches what's on the Ledger by\n",(0,r.kt)("a",{parentName:"p",href:"#confirming-the-address-on-your-device"},"confirming the address on your device"),". Some malware will\nintercept clicks and clipboard requests and can change your copied value in-flight, so being extra\nvigilant around copy-paste operations makes sense.")),(0,r.kt)("h3",{id:"staking"},"Staking"),(0,r.kt)("p",null,'For staking using Ledger devices, check the section "How to stake using your Ledger" on\n',(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168057-how-do-i-stake-nominate-on-polkadot-"},"this support article"),"."),(0,r.kt)("h3",{id:"removing-expired-democracy-locks"},"Removing Expired Democracy Locks"),(0,r.kt)("p",null,"Check out\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181870-how-to-remove-expired-democracy-locks"},"this support page"),"\nthe learn how to remove democracy locks after the end of a Governance referendum."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please be advised"),": Despite the Polkadot ledger application being compatible with both the Ledger\nNano S and the Ledger Nano X, none of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Democracy"),"\nextrinsics are available in the light version. The following\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot"},"repository by Zondax")," lists the currently supported\nDemocracy extrinsics on the full ledger."),(0,r.kt)("h2",{id:"ledger-developer-release"},"Ledger Developer Release"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This section is for developers only. It is recommended to install the application from Ledger Live\nunless you ",(0,r.kt)("em",{parentName:"p"},"know exactly what you're doing"),".")),(0,r.kt)("h3",{id:"why-you-might-need-the-developer-release"},"Why you might need the Developer Release"),(0,r.kt)("p",null,"Ledger apps for the Polkadot and Kusama ecosystems are developed by ",(0,r.kt)("a",{parentName:"p",href:"https://zondax.ch/"},"Zondax"),".\nWhen new functionalities are added to the Ledger apps, they are made available on a developer\nrelease for testing purposes. After a successful audit and review, the apps would be available for\ndownload and installation using ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live"),'. As it takes some\ntime for Ledger to audit and review the release, the app upgrade option may not be available on\nLedger Live when the new runtime is deployed on the network. If this happens, users cannot use\nLedger devices with the Polkadot-JS UI, and while signing for a transaction, will most likely incur\nthe error message "txn version not supported". Please do not panic if this happens, as there are\nsolutions to this problem. Suppose you cannot wait a couple of days until the app passes the Ledger\naudit. In that case, you can install the developer release from the shell using the latest version\npublished on ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot/releases"},"the Zondax GitHub repository"),"."),(0,r.kt)("h3",{id:"install-the-developer-release"},"Install the Developer Release"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/4SyVQrlXZ_Q"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to install the developer\nrelease of your ledger app."),(0,r.kt)("p",{parentName:"admonition"},"Currently, the developer release can be installed only on the Nano S and S plus devices and can't be\ninstalled on the Nano X.")),(0,r.kt)("p",null,"To install the developer version make sure you have the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," version and follow the steps\nbelow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("em",{parentName:"li"},"ledgerblue")," running the command ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 -m pip install ledgerblue"),"."),(0,r.kt)("li",{parentName:"ul"},"Download the developer release from the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Zondax/ledger-polkadot/releases"},"Zondax GitHub repository"),". The file will be\nnamed ",(0,r.kt)("inlineCode",{parentName:"li"},"installer_nanos_plus.sh")," or something similar, depending on your ledger device."),(0,r.kt)("li",{parentName:"ul"},"Locate the downloaded shell script and make it executable in your shell by typing the command\n",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x installer_nanos_plus.sh"),"."),(0,r.kt)("li",{parentName:"ul"},"You can now use the ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh --help")," command to visualize the available options\n(see below)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dev Ledger Help Menu",src:n(95932).Z,width:"525",height:"54"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Next, attach your Ledger Nano (in this case Nano S Plus) to your computer, enter the PIN code, and\nrun the command ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh load"),'. Scroll with the right button until you see\n"Allow unsafe manager", left and right press to confirm. You will be asked to confirm the action\nof uninstalling the app and subsequently installing the newer version. After confirming both\nactions, the shell script will install the version on your device. You will need to insert the PIN\ncode to use the device after the installation.'),(0,r.kt)("li",{parentName:"ul"},"If you wish to revert the version to the stable release, go to Ledger Live. The app will\nautomatically detect the developer release and give the option to install the previous stable\nrelease.")))}h.isMDXComponent=!0},95932:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ledger-help-menu-3af6592c7bc1830644f7ca9d55005cf4.png"},30536:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/query-device-d7d9e7e7d28a34a343c59094db864a1a.png"}}]);