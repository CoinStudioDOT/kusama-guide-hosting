"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4800],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>k});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(o),k=r,h=d["".concat(i,".").concat(k)]||d[k]||u[k]||a;return o?n.createElement(h,s(s({ref:t},l),{},{components:o})):n.createElement(h,s({ref:t},l))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3392:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],c={id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Polkadot account.",keywords:["account","restore account","polkadot account","polkadotjs"],slug:"../learn-account-restore"},i=void 0,p={unversionedId:"learn/learn-account-restore",id:"learn/learn-account-restore",title:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Polkadot account.",source:"@site/../docs/learn/learn-account-restore.md",sourceDirName:"learn",slug:"/learn-account-restore",permalink:"/docs/learn-account-restore",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1668498311,formattedLastUpdatedAt:"Nov 15, 2022",frontMatter:{id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Polkadot account.",keywords:["account","restore account","polkadot account","polkadotjs"],slug:"../learn-account-restore"},sidebar:"docs",previous:{title:"Account Generation",permalink:"/docs/learn-account-generation"},next:{title:"Account Recovery",permalink:"/docs/kusama-social-recovery"}},l={},u=[{value:"Backing Up Accounts",id:"backing-up-accounts",level:2},{value:"Restore Account on the Polkadot-JS UI",id:"restore-account-on-the-polkadot-js-ui",level:2},{value:"Restore Account on the Polkadot-JS Browser Extension",id:"restore-account-on-the-polkadot-js-browser-extension",level:2},{value:"Restore Account on Parity Signer",id:"restore-account-on-parity-signer",level:2},{value:"Transferring Polkadot-JS Apps Accounts/Addresses From One Computer to Another",id:"transferring-polkadot-js-apps-accountsaddresses-from-one-computer-to-another",level:2}],d={toc:u};function k(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"backing-up-accounts"},"Backing Up Accounts"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/DNU0p5G0Gqc"},(0,a.kt)("strong",{parentName:"a"},"this video tutorial"))," and visit\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177677-how-to-export-your-json-backup-file"},(0,a.kt)("strong",{parentName:"a"},"this support page")),"\nto know how to backup your account.")),(0,a.kt)("p",null,"Depending on what software you are using to access your account, there are various ways to back up\nand restore your account. It is a good idea to back your information up and keep it in a secure\nplace. Note that in order to recover an account, you should create your account according to the\ninstructions ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"here"),". In general, as long as you know how you created\nyour account, and have the seed phrase (",(0,a.kt)("a",{parentName:"p",href:"learn-accounts#portability"},"mnemonic phrase"),") or JSON file\n(and password) stored securely, you will be able to restore your account."),(0,a.kt)("h2",{id:"restore-account-on-the-polkadot-js-ui"},"Restore Account on the Polkadot-JS UI"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/cBsZqFpBANY"},(0,a.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000180110-how-to-restore-your-account-in-polkadot-js-ui"},(0,a.kt)("strong",{parentName:"a"},"this support page")),"\nto learn how to restore your account on the Polkadot-JS UI.")),(0,a.kt)("h2",{id:"restore-account-on-the-polkadot-js-browser-extension"},"Restore Account on the Polkadot-JS Browser Extension"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/9ohp8k4Hz8c"},(0,a.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169952-how-to-restore-your-account-in-the-polkadot-extension"},(0,a.kt)("strong",{parentName:"a"},"this support page")),"\nto learn how to restore your account on the Polkadot-JS UI.")),(0,a.kt)("h2",{id:"restore-account-on-parity-signer"},"Restore Account on Parity Signer"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/hgv1R9mPEXw?t=407"},(0,a.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000167901-how-to-restore-an-account-in-parity-signer"},(0,a.kt)("strong",{parentName:"a"},"this support page")),"\nto learn how to restore your account on the Polkadot-JS UI.")),(0,a.kt)("h2",{id:"transferring-polkadot-js-apps-accountsaddresses-from-one-computer-to-another"},"Transferring Polkadot-JS Apps Accounts/Addresses From One Computer to Another"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This will overwrite any existing accounts with the same pubkey on your new computer. This generally\nshould not make a difference (since it can still access the same account), but might if you have\ne.g. an account which was stored externally in the extension on the old computer but was created\ndirectly in browser on the new one.")),(0,a.kt)("p",null,"This has been tested on Brave and Chrome, but not other browsers."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Polkadot-JS Apps"),(0,a.kt)("li",{parentName:"ol"},"Go to JavaScript console on the browser (Available in Developer Tools)"),(0,a.kt)("li",{parentName:"ol"},"Type in the command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JSON.stringify(localStorage)\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Copy and paste the returned string to a text editor and save the file."),(0,a.kt)("li",{parentName:"ol"},"Check that the string you pasted both begins and ends with a tick mark ('). If not, add one to\nthe beginning and end."),(0,a.kt)("li",{parentName:"ol"},"Save and send that file with the copied string to the new computer."),(0,a.kt)("li",{parentName:"ol"},"On new computer, go to Polkadot-JS Apps"),(0,a.kt)("li",{parentName:"ol"},"Open the Javascript console on the browser (Available in Developer Tools)"),(0,a.kt)("li",{parentName:"ol"},"Set a variable raw equal to the string from the text file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"raw = ... copy-pasted json from original computer ...\n")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Run the following code on the console:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"accounts = JSON.parse(raw);\nfor (var key in accounts) {\n    if (accounts.hasOwnProperty(key)) {\n        val = JSON.stringify(accounts[key]).replace(/\\\\/g,'').slice(1,-1);\n        console.log(key + \" -> \" + val);\n        localStorage.setItem(key, val);\n    }\n}\n")),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"Refresh Polkadot-JS App browser and check Accounts and Addresses pages. All of your accounts and\naddresses should now be available.")))}k.isMDXComponent=!0}}]);