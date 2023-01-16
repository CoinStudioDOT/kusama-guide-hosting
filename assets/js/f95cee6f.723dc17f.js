"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=i,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4195:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"maintain-guides-avoid-slashing",title:"Validator Best Practices",sidebar_label:"Validator Best Practices",description:"Best practices to avoid slashing.",keywords:["validator","rewards","slashing"],slug:"../maintain-guides-avoid-slashing"},l=void 0,d={unversionedId:"maintain/maintain-guides-avoid-slashing",id:"maintain/maintain-guides-avoid-slashing",title:"Validator Best Practices",description:"Best practices to avoid slashing.",source:"@site/../docs/maintain/maintain-guides-best-practices-to-avoid-slashes.md",sourceDirName:"maintain",slug:"/maintain-guides-avoid-slashing",permalink:"/docs/maintain-guides-avoid-slashing",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1673864860,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{id:"maintain-guides-avoid-slashing",title:"Validator Best Practices",sidebar_label:"Validator Best Practices",description:"Best practices to avoid slashing.",keywords:["validator","rewards","slashing"],slug:"../maintain-guides-avoid-slashing"}},c={},u=[{value:"Best practices to prevent slashing",id:"best-practices-to-prevent-slashing",level:2},{value:"Unresponsiveness",id:"unresponsiveness",level:2},{value:"Equivocation",id:"equivocation",level:2},{value:"Application Related",id:"application-related",level:2},{value:"Examples",id:"examples",level:2}],p={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"best-practices-to-prevent-slashing"},"Best practices to prevent slashing"),(0,r.kt)("p",null,"Slashing is implemented as a deterrent for validators to misbehave. Slashes are applied to a\nvalidator\u2019s total stake (own + nominated) and can range from as little as 0.01% or rise to 100%. In\nall instances, slashes are accompanied by a loss of nominators."),(0,r.kt)("p",null,"A slash may occur under four circumstances:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unresponsiveness \u2013 Slashing starts when 10% of the active validators set are offline and\nincreases in a linear manner until 44% of the validator set is offline; at this point, the slash\nis held at 7%"),(0,r.kt)("li",{parentName:"ol"},"Equivocation \u2013 A slash of 0.01% is applied with as little as a single evocation. The slashed\namount increases to 100% incrementally as more validators also equivocate."),(0,r.kt)("li",{parentName:"ol"},"Malicious action \u2013 This may result from a validator trying to represent the contents of a block\nfalsely. Slashing penalties of 100% may apply."),(0,r.kt)("li",{parentName:"ol"},"Application related (bug or otherwise) \u2013 The amount is unknown and may manifest as scenarios 1,\n2, and 3 above.")),(0,r.kt)("p",null,"This article provides some best practices to prevent slashing based on lessons learned from previous\nslashes. It provides comments and guidance for all circumstances except for malicious action by the\nnode operator."),(0,r.kt)("h2",{id:"unresponsiveness"},"Unresponsiveness"),(0,r.kt)("p",null,"An offline event occurs when a validator does not produce a BLOCK or IMONLINE message within an\nEPOCH. Isolated offline events do not result in a slash; however, the validator would not earn any\nera points while offline. A slash for unresponsiveness occurs when 10% or more of the active\nvalidators are offline at the same time. Check the Wiki section on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced#unresponsiveness"},"slashing due to unresponsiveness")," to learn\nmore about its specifics."),(0,r.kt)("p",null,"The following are recommendations to validators to avoid slashing under liveliness for servers that\nhave historically functioned:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Utilize systems to host your validator instance. Systemd should be configured to auto reboot the\nservice with a minimum 60-second delay. This configuration should aid with re-establishing the\ninstance under isolated failures with the binary."),(0,r.kt)("li",{parentName:"ol"},"A validator instance can demonstrate un-lively behaviour if it cannot sync new blocks. This may\nresult from insufficient disk space or a corrupt database."),(0,r.kt)("li",{parentName:"ol"},"Monitoring should be implemented that allows node operators to monitor connectivity network\nconnectivity to the peer-to-peer port of the validator instance. Monitoring should also be\nimplemented to ensure that there is <50 Block \u2018drift\u2019 between the target and best blocks. If\neither event produces a failure, the node operator should be notified. The following are\nrecommendations to validators to avoid liveliness for new servers / migrated servers:"),(0,r.kt)("li",{parentName:"ol"},"Ensure that the ",(0,r.kt)("inlineCode",{parentName:"li"},"--validator")," flag is used when starting the validator instance"),(0,r.kt)("li",{parentName:"ol"},"If switching keys, ensure that the correct session keys are applied"),(0,r.kt)("li",{parentName:"ol"},"If migrating using a two-server approach, ensure that you don\u2019t switch off the original server\ntoo soon."),(0,r.kt)("li",{parentName:"ol"},"Ensure that the database on the new server is fully synchronized."),(0,r.kt)("li",{parentName:"ol"},"It is highly recommended to avoid hosting on providers that other validators may also utilize.\nIf the provider fails, there is a probability that one or more other validators would also fail\ndue to liveliness building to a slash.",(0,r.kt)("br",{parentName:"li"}),"There is a precedent that a slash may be forgiven if a single validator faces an offline event\nwhen a larger operator also faces multiple offline events, resulting in a slash.")),(0,r.kt)("h2",{id:"equivocation"},"Equivocation"),(0,r.kt)("p",null,"Equivocation events can occur when a validator produces two or more of the same block; under this\ncondition, it is referred to as a BABE equivocation. Equivocation may also happen when a validator\nsigns two or more of the same consensus vote; under this condition, it is referred to as a GRANDPA\nEquivocation. Equivocations usually occur when duplicate signing keys reside on the validator host.\nIf keys are never duplicated, the probability of an equivocation slash decreases to near 0. Check\nthe Wiki section on ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced#equivocation"},"Equivocation")," to learn more\nabout its specifics."),(0,r.kt)("p",null,"The following are scenarios that build towards slashes under equivocation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cloning a server, i.e., copying all contents when migrating to new hardware. This action should\nbe avoided. If an image is desired, it should be taken before keys are generated."),(0,r.kt)("li",{parentName:"ol"},"High Availability (HA) Systems \u2013 Equivocation can occur if there are any concurrent operations,\neither when a failed server restarts or if false positive event results in both servers being\nonline simultaneously. HA systems are to be treated with extreme caution and are not advised."),(0,r.kt)("li",{parentName:"ol"},"The keystore folder is copied when attempting to copy a database from one instance to another.",(0,r.kt)("br",{parentName:"li"}),"It is important to note that equivocation slashes occur with a single incident. This can happen\nif duplicated keystores are used for only a few seconds. A slash can result in losing\nnominators, and funds, removal from the Thousand Validator Programme, and reputational damage.\nAn offline event results in losing some funds but the retention of nominators and a fault under\nthe Thousand Validator Programme.")),(0,r.kt)("h2",{id:"application-related"},"Application Related"),(0,r.kt)("p",null,"In the past, there have been releases with bugs that lead to slashes; these issues are not as\nprevalent in current releases. The following are advised to node operators to ensure that they\nobtain pristine binaries or source code and to ensure the security of their node:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Always download either source files or binaries from the official Parity repository"),(0,r.kt)("li",{parentName:"ol"},"Verify the hash of downloaded files."),(0,r.kt)("li",{parentName:"ol"},"Use the W3F secure validator setup or adhere to its principles"),(0,r.kt)("li",{parentName:"ol"},"Ensure essential security items are checked, use a firewall, manage user access, use SSH\ncertificates"),(0,r.kt)("li",{parentName:"ol"},"Avoid using your server as a general-purpose system. Hosting a validator on your workstation or\none that hosts other services increases the risk of maleficence.")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Era"),(0,r.kt)("th",{parentName:"tr",align:null},"Event Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"),(0,r.kt)("th",{parentName:"tr",align:null},"Action Taken"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"774"),(0,r.kt)("td",{parentName:"tr",align:null},"Small Equivocation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io/$165562246360408hKCfC:matrix.org?via=matrix.parity.io&via=corepaper.org&via=matrix.org"},"The validator")," migrated servers and cloned the keystore folder. The on-chain event can be viewed ",(0,r.kt)("a",{parentName:"td",href:"https://polkadot.subscan.io/extrinsic/11190109-0?event=11190109-5"},"here"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"The validator did not submit a request for the slash to be canceled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,r.kt)("td",{parentName:"tr",align:null},"3329"),(0,r.kt)("td",{parentName:"tr",align:null},"Small Equivocation"),(0,r.kt)("td",{parentName:"tr",align:null},"The validator operated a test machine with cloned keys; the test machine was online at the same time as the primary, which resulted in a slash. Details can be found ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/post/1343"},"here"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"The validator requested a cancellation of the slash, but the council declined.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,r.kt)("td",{parentName:"tr",align:null},"3995"),(0,r.kt)("td",{parentName:"tr",align:null},"Small Equivocation"),(0,r.kt)("td",{parentName:"tr",align:null},"The validator noticed several errors, after which the client crashed, and a slash was applied. The validator recorded all events and opened GitHub issues to allow for technical opinions to be shared. Details can be found ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/post/1733"},"here"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"The validator requested to cancel the slash. The council approved the request as they believed the error was not operator related.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,r.kt)("td",{parentName:"tr",align:null},"4543"),(0,r.kt)("td",{parentName:"tr",align:null},"Medium Unresponsiveness"),(0,r.kt)("td",{parentName:"tr",align:null},"A large amount of disputes flooded the network resulting in an application fault. The fault caused the client software to hang and as a result ~197 unique validators become unresponsive. Further details can be found ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/referenda/16"},"here"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"The pending slash was cancelled and with runtime ",(0,r.kt)("a",{parentName:"td",href:"https://kusama.polkassembly.io/referenda/24"},"9350")," all lost nominations were restored. The application bug was addressed with client version ",(0,r.kt)("a",{parentName:"td",href:"https://forum.polkadot.network/t/polkadot-release-analysis-v0-9-36/1529"},"0.9.36"))))))}h.isMDXComponent=!0}}]);