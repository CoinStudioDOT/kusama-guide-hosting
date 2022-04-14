"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6005:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>m});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"build-node-management",title:"Node Management",sidebar_label:"Node Management",description:"Steps on how to manage your Polkadot node.",keywords:["node","management","deployment","operations","monitor"],slug:"../build-node-management"},s=void 0,p={unversionedId:"build/build-node-management",id:"build/build-node-management",title:"Node Management",description:"Steps on how to manage your Polkadot node.",source:"@site/../docs/build/build-node-management.md",sourceDirName:"build",slug:"/build-node-management",permalink:"/zh-CN/docs/build-node-management",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-node-management.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649960488,formattedLastUpdatedAt:"2022/4/14",frontMatter:{id:"build-node-management",title:"Node Management",sidebar_label:"Node Management",description:"Steps on how to manage your Polkadot node.",keywords:["node","management","deployment","operations","monitor"],slug:"../build-node-management"}},d=[{value:"Basic Node Operations",id:"basic-node-operations",children:[],level:2},{value:"File Structure",id:"file-structure",children:[],level:2},{value:"Deployment Tools",id:"deployment-tools",children:[],level:2},{value:"Monitoring and Telemetry",id:"monitoring-and-telemetry",children:[],level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page contains basic information about running a Parity Polkadot client. There are a lot of ways\nto obtain/run a client, e.g. compiling from source, running in Docker, or downloading a binary. This\nguide will always refer to the executable as ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Always refer to the client's help ",(0,i.kt)("inlineCode",{parentName:"strong"},"polkadot --help")," for the most up-to-date information.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Other client implementation teams: Feel free to make a PR to this page with instructions (or a\nlink to instructions) for your client."))),(0,i.kt)("p",null,"If you are trying to run a validator, refer to this tutorial\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-validate-polkadot"},"here"),"."),(0,i.kt)("h2",{id:"basic-node-operations"},"Basic Node Operations"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Selecting a chain")),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--chain <chainspec>")," option to select the chain. Can be ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kusama"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"westend"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"rococo"),", or a custom chain spec. By default, the client will start Polkadot. Watch\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=i9vNCHz6wO4"},"How a single codebase can power four different blockchains"),"\nto learn more about how the chain selection works internally."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Archive node")),(0,i.kt)("p",null,"An archive node does not prune any block or state data. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--pruning archive")," flag. Certain\ntypes of nodes like validators must run in archive mode. Likewise, all\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/build-protocol-info/#events"},"events")," are cleared from state in each block, so if you want to\nstore events then you will need an archive node."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Explainer video on upgrading a node")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To upgrade a node, please refer to this\n",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5LtcdBR9F40&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=5"},"video")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exporting blocks")),(0,i.kt)("p",null,"To export blocks to a file, use ",(0,i.kt)("inlineCode",{parentName:"p"},"export-blocks"),". Export in JSON (default) or binary\n(",(0,i.kt)("inlineCode",{parentName:"p"},"--binary true"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot export-blocks --from 0 <output_file>\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"RPC ports")),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--rpc-external")," flag to expose RPC ports and ",(0,i.kt)("inlineCode",{parentName:"p"},"--ws-external")," to expose websockets. Not all\nRPC calls are safe to allow and you should use an RPC proxy to filter unsafe calls. Select ports\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"--rpc-port")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--ws-port")," options. To limit the hosts who can access, use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--rpc-cors")," option."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Execution")),(0,i.kt)("p",null,"The Parity Polkadot client implements a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-polkadot-host"},"Polkadot Host")," and a native\nruntime. The runtime must compile to WebAssembly and is stored on-chain. If the client's runtime is\nthe same spec as the runtime that is stored on-chain, then the client will execute blocks using the\nclient binary. Otherwise, the client will execute the Wasm runtime from the chain."),(0,i.kt)("p",null,"Therefore, when syncing the chain, the client will execute blocks from past runtimes using their\nassociated Wasm binary. This feature also allows forkless upgrades: the client can execute a new\nruntime without updating the client."),(0,i.kt)("p",null,"Parity's Polkadot client has two Wasm execution methods, interpreted (default) and compiled. Set the\npreferred method to use when executing Wasm with ",(0,i.kt)("inlineCode",{parentName:"p"},"--wasm-execution <Interpreted|Compiled>"),". Compiled\nexecution will run much faster, especially when syncing the chain, but is experimental and may use\nmore memory/CPU. A reasonable tradeoff would be to sync the chain with compiled execution and then\nrestart the node with interpreted execution."),(0,i.kt)("h2",{id:"file-structure"},"File Structure"),(0,i.kt)("p",null,"The node stores a number of files in: ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/$USER/.local/share/polkadot/chains/<chain name>/"),". You\ncan set a custom path with ",(0,i.kt)("inlineCode",{parentName:"p"},"--base-path <path>"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"keystore"))),(0,i.kt)("p",null,"The keystore stores session keys, which are important for validator operations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/learn-keys/#session-keys"},"Polkadot documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.substrate.io/v3/concepts/session-keys/"},"Substrate documentation"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"db"))),(0,i.kt)("p",null,"The database stores blocks and the state trie. If you are running a validator node, it also stores\nGRANDPA pre-votes and pre-commits and the offchain-worker DB. Use caution when\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-upgrade"},"migrating validator nodes")," to avoid equivocation. If you want to\nstart a new machine without resyncing, you can stop your node, back up the DB, and move it to a new\nmachine."),(0,i.kt)("p",null,"To delete your DB and re-sync from genesis, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"polkadot purge-chain\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Validators should sync using the RocksDb backend")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is implicit by default, but can be explicit by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--database RocksDb")," flag.\nIn the future, it is recommended to switch to using the faster and more efficient ParityDb\noption. Switching between database backends will require a resync."),(0,i.kt)("p",{parentName:"div"},"If you want to test out ParityDB you can add the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--database paritydb"),"."))),(0,i.kt)("h2",{id:"deployment-tools"},"Deployment Tools"),(0,i.kt)("p",null,"Web3 Foundation maintains ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-deployer"},"Polkadot Deployer"),", which\nallows you to create local or remote cloud deployments of Polkadot nodes. See the README for\ninstructions."),(0,i.kt)("p",null,"Validators, see the ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-use-polkadot-validator-setup"},"validator setup guide"),"\nfor information specific to deploying validator nodes."),(0,i.kt)("h2",{id:"monitoring-and-telemetry"},"Monitoring and Telemetry"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Node status")),(0,i.kt)("p",null,"You can check the node's health via RPC with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" --data \'{ "jsonrpc":"2.0", "method":"system_health", "params":[],"id":1 }\' localhost:9933\xa0\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Logs")),(0,i.kt)("p",null,"The Polkadot client has a number of log targets. The most interesting to users may be:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"afg")," (Al's Finality Gadget - GRANDPA consensus)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"babe")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"telemetry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"txpool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"usage"))),(0,i.kt)("p",null,"Other targets include:\n",(0,i.kt)("inlineCode",{parentName:"p"},"db, gossip, peerset, state-db, state-trace, sub-libp2p, trie, wasm-executor, wasm-heap"),"."),(0,i.kt)("p",null,"The log levels, from least to most verbose, are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"warn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trace"))),(0,i.kt)("p",null,"All targets are set to ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," logging by default. You can adjust individual log levels using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--log (-l short)")," option, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"-l afg=trace,sync=debug")," or globally with ",(0,i.kt)("inlineCode",{parentName:"p"},"-ldebug"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Telemetry & Metrics")),(0,i.kt)("p",null,"The Parity Polkadot client connects to telemetry by default. You can disable it with\n",(0,i.kt)("inlineCode",{parentName:"p"},"--no-telemetry"),", or connect only to specified telemetry servers with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--telemetry-url")," option\n(see the help options for instructions). Connecting to public telemetry may expose information that\nputs your node at higher risk of attack. You can run your own, private\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-telemetry"},"telemetry server")," or deploy a\n",(0,i.kt)("inlineCode",{parentName:"p"},"substrate-telemetry")," instance to a Kubernetes cluster using\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/substrate-telemetry-chart"},"this Helm chart"),"."),(0,i.kt)("p",null,"The node also exposes a Prometheus endpoint by default (disable with ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-prometheus"),"). Substrate\nhas a\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/v3/node-metrics/"},"vizualizing node metrics tutorial"),"\nwhich uses this endpoint."))}m.isMDXComponent=!0}}]);