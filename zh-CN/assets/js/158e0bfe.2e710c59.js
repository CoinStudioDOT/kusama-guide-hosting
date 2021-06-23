(self.webpackChunk=self.webpackChunk||[]).push([[464],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15058:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>c});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),l=["components"],r={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node"},s=void 0,p={unversionedId:"maintain-sync",id:"maintain-sync",isDocsHomePage:!1,title:"Set up a Full Node",description:"If you're building dapps or products on a Substrate-based chain like Polkadot, Kusama or a custom",source:"@site/../docs/maintain-sync.md",sourceDirName:".",slug:"/maintain-sync",permalink:"/zh-CN/docs/maintain-sync",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-sync.md",version:"current",lastUpdatedBy:"Nam Hoang Le",lastUpdatedAt:1624459733,formattedLastUpdatedAt:"2021/6/23",frontMatter:{id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node"}},u=[{value:"Types of Nodes",id:"types-of-nodes",children:[]},{value:"Fast Install Instructions (Mac)",id:"fast-install-instructions-mac",children:[]},{value:"Fast Install Instructions (Windows)",id:"fast-install-instructions-windows",children:[]},{value:"Fast Install Instructions (Linux)",id:"fast-install-instructions-linux",children:[]},{value:"Get Substrate",id:"get-substrate",children:[]},{value:"Clone and Build",id:"clone-and-build",children:[]},{value:"Run",id:"run",children:[]},{value:"Running an Archive Node",id:"running-an-archive-node",children:[]},{value:"Using Docker",id:"using-docker",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you're building dapps or products on a Substrate-based chain like Polkadot, Kusama or a custom\nSubstrate implementation, you probably want the ability to run a node-as-a-back-end. After all, it's\nalways better to rely on your own infrastructure than on a third-party-hosted one in this brave new\ndecentralized world."),(0,i.kt)("p",null,"This guide will show you how to connect to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network"),", but the same\nprocess applies to any other ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/"},"Substrate"),"-based chain. First, let's\nclarify the term ",(0,i.kt)("em",{parentName:"p"},"full node"),"."),(0,i.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,i.kt)("p",null,"A blockchain's growth comes from a ",(0,i.kt)("em",{parentName:"p"},"genesis block"),", ",(0,i.kt)("em",{parentName:"p"},"extrinsics"),", and ",(0,i.kt)("em",{parentName:"p"},"events"),"."),(0,i.kt)("p",null,"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it, and emits the events that are the result of these changes. Later, the\nstate of the chain at block 1 is used in the same way to build the state of the chain at block 2,\nand so on. Once two thirds of the validators agree on a specific block being valid, it is finalized."),(0,i.kt)("p",null,"An ",(0,i.kt)("strong",{parentName:"p"},"archive node")," keeps all the past blocks. An archive node makes it convenient to query the past\nstate of the chain at any point in time. Finding out what an account's balance at a certain block\nwas, or which extrinsics resulted in a certain state change are fast operations when using an\narchive node. However, an archive node takes up a lot of disk space - around Kusama's 1.6 millionth\nblock this was around 15 to 20GB."),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"full node")," is ",(0,i.kt)("em",{parentName:"p"},"pruned"),", meaning it discards all information older than 256 blocks, but keeps\nthe extrinsics for all past blocks, and the genesis block. A node that is pruned this way requires\nmuch less space than an archive node. In order to query past state through a full node, a user would\nhave to wait for the node to rebuild the chain up until that block. A full node ",(0,i.kt)("em",{parentName:"p"},"can")," rebuild the\nentire chain with no additional input from other nodes and become an archive node. One caveat is\nthat if finality stalled for some reason and the last finalized block is more than 256 blocks\nbehind, a pruned full node will not be able to sync to the network."),(0,i.kt)("p",null,"Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,i.kt)("a",{parentName:"p",href:"https://polkassembly.io"},"Polkassembly"),", and others. They need\nto be able to look at past on-chain data. Full nodes are used by everyone else - they allow you to\nread the current state of the chain and to submit transactions directly to the chain without relying\non a centralized infrastructure provider."),(0,i.kt)("p",null,"Another type of node is a ",(0,i.kt)("strong",{parentName:"p"},"light node"),". A light node has only the runtime and the current state,\nbut does not store past extrinsics and so cannot restore the full chain from genesis. Light nodes\nare useful for resource restricted devices. An interesting use-case of light nodes is a Chrome\nextension, which is a node in its own right, running the runtime in WASM format:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-light-ui"},"https://github.com/paritytech/substrate-light-ui")),(0,i.kt)("h3",{id:"fast-install-instructions-mac"},"Fast Install Instructions (Mac)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Not recommended if you're a validator. Please see\n",(0,i.kt)("a",{parentName:"p",href:"maintain-guides-secure-validator"},"secure validator setup"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type terminal in the ios searchbar/searchlight to open the 'terminal' application"),(0,i.kt)("li",{parentName:"ul"},"Install Homebrew within the terminal by running:\n",(0,i.kt)("inlineCode",{parentName:"li"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"')),(0,i.kt)("li",{parentName:"ul"},"Then run: ",(0,i.kt)("inlineCode",{parentName:"li"},"brew install openssl cmake llvm")),(0,i.kt)("li",{parentName:"ul"},"Install Rust in your terminal by running:\n",(0,i.kt)("inlineCode",{parentName:"li"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh")),(0,i.kt)("li",{parentName:"ul"},"Once Rust is installed, run the following command to clone and build the polkadot code:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n"))),(0,i.kt)("li",{parentName:"ul"},"Run the following command to start your node: ",(0,i.kt)("inlineCode",{parentName:"li"},'./target/release/polkadot --name "My node\'s name"')),(0,i.kt)("li",{parentName:"ul"},"Find your node at ",(0,i.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/Polkadot"},"https://telemetry.polkadot.io/#list/Polkadot"))),(0,i.kt)("h3",{id:"fast-install-instructions-windows"},"Fast Install Instructions (Windows)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This works only on Windows Pro with virtualization enabled.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Not recommended if you're a validator. Please see\n",(0,i.kt)("a",{parentName:"p",href:"maintain-guides-secure-validator"},"secure validator setup"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install WSL: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"https://docs.microsoft.com/en-us/windows/wsl/install-win10")),(0,i.kt)("li",{parentName:"ul"},"Install Ubuntu (same webpage): ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"https://docs.microsoft.com/en-us/windows/wsl/install-win10")),(0,i.kt)("li",{parentName:"ul"},"Determine the latest version of the Polkadot binary (you can see the latest releases here:\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/releases"},"https://github.com/paritytech/polkadot/releases"),")"),(0,i.kt)("li",{parentName:"ul"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,i.kt)("inlineCode",{parentName:"li"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.8.22"),"):\n",(0,i.kt)("inlineCode",{parentName:"li"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot")),(0,i.kt)("li",{parentName:"ul"},"Run the following: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo chmod +x polkadot")),(0,i.kt)("li",{parentName:"ul"},"Run the following: ",(0,i.kt)("inlineCode",{parentName:"li"},'./polkadot --name "Your Node Name Here"')),(0,i.kt)("li",{parentName:"ul"},"Find your node at ",(0,i.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/Polkadot"},"https://telemetry.polkadot.io/#list/Polkadot"))),(0,i.kt)("h3",{id:"fast-install-instructions-linux"},"Fast Install Instructions (Linux)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Not recommended if you're a validator. Please see\n",(0,i.kt)("a",{parentName:"p",href:"maintain-guides-secure-validator"},"secure validator setup"))),(0,i.kt)("p",null,"For the most recent binary please see the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases/"},"release page")," on the polkadot repository. The URL\nin the code snippet below may become slightly out-of-date."),(0,i.kt)("p",null,"Also please note that the nature of pre-built binaries means that they may not work on your\nparticular architecture or Linux distribution. If you see an error like\n",(0,i.kt)("inlineCode",{parentName:"p"},"cannot execute binary file: Exec format error")," it likely means the binary is not compatible with\nyour system. You will either need to compile the ",(0,i.kt)("a",{parentName:"p",href:"#clone-and-build"},"source code yourself")," or use\n",(0,i.kt)("a",{parentName:"p",href:"#using-docker"},"docker"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Determine the latest version of the Polkadot binary (you can see the latest releases here:\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/releases"},"https://github.com/paritytech/polkadot/releases"),")"),(0,i.kt)("li",{parentName:"ul"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,i.kt)("inlineCode",{parentName:"li"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.8.22"),"):\n",(0,i.kt)("inlineCode",{parentName:"li"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot")),(0,i.kt)("li",{parentName:"ul"},"Run the following: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo chmod +x polkadot")),(0,i.kt)("li",{parentName:"ul"},"Run the following: ",(0,i.kt)("inlineCode",{parentName:"li"},'./polkadot --name "Your Node Name Here"')),(0,i.kt)("li",{parentName:"ul"},"Find your node at ",(0,i.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/Polkadot"},"https://telemetry.polkadot.io/#list/Polkadot"))),(0,i.kt)("h2",{id:"get-substrate"},"Get Substrate"),(0,i.kt)("p",null,"Follow instructions as outlined\n",(0,i.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/getting-started"},"here")," - note that Windows users will\nhave their work cut out for them. It's better to use a virtual machine instead."),(0,i.kt)("p",null,"Test if the installation was successful by running ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo --version"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n")),(0,i.kt)("h2",{id:"clone-and-build"},"Clone and Build"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"paritytech/polkadot")," repo's master branch contains the\nlatest Polkadot code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n")),(0,i.kt)("p",null,"Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,i.kt)("inlineCode",{parentName:"p"},"v0.8.3")," in\nthe example below):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\ngit checkout tags/v0.8.3\n./scripts/init.sh\ncargo build --release\n")),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("p",null,"The built binary will be in the ",(0,i.kt)("inlineCode",{parentName:"p"},"target/release")," folder, called ",(0,i.kt)("inlineCode",{parentName:"p"},"polkadot"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name"\n')),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag to find out which flags you can use when running the node. For example, if\n",(0,i.kt)("a",{parentName:"p",href:"maintain-wss"},"connecting to your node remotely"),", you'll probably want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"--ws-external")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"--rpc-cors all"),"."),(0,i.kt)("p",null,"The syncing process will take a while depending on your bandwidth, processing power, disk speed and\nRAM. On a \\$10 DigitalOcean droplet, the process can complete in some 36 hours."),(0,i.kt)("p",null,"Congratulations, you're now syncing with Polkadot. Keep in mind that the process is identical when\nusing any other Substrate chain."),(0,i.kt)("h2",{id:"running-an-archive-node"},"Running an Archive Node"),(0,i.kt)("p",null,"When running as a simple sync node (above), only the state of the past 256 blocks will be kept. When\nvalidating, it defaults to ",(0,i.kt)("a",{parentName:"p",href:"#types-of-nodes"},"archive mode"),". To keep the full state use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--pruning")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name" --pruning archive\n')),(0,i.kt)("p",null,"It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,i.kt)("inlineCode",{parentName:"p"},"--wasm-execution Compiled"),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node is in sync."),(0,i.kt)("h2",{id:"using-docker"},"Using Docker"),(0,i.kt)("p",null,"Finally, you can use Docker to run your node in a container. Doing this is a bit more advanced so\nit's best left up to those that either already have familiarity with docker, or have completed the\nother set-up instructions in this guide. If you would like to connect to your node's WebSockets\nensure that you run you node with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--rpc-external")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--ws-external")," commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},'docker run -p 9944:9944 parity/polkadot:v0.8.24 --name "calling_home_from_a_docker_container" --rpc-external --ws-external\n')))}c.isMDXComponent=!0}}]);