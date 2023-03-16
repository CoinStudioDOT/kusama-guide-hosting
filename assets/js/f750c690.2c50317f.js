"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),o=["components"],r={id:"learn-nft-pallets",title:"NFT Pallets",sidebar_label:"NFT Pallets",description:"An overview of the functionalities of NFT Pallets in Polkadot Ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0","nfts","NFT pallets"],slug:"../learn-nft-pallets"},s=void 0,c={unversionedId:"learn/learn-nft-pallets",id:"learn/learn-nft-pallets",title:"NFT Pallets",description:"An overview of the functionalities of NFT Pallets in Polkadot Ecosystem.",source:"@site/../docs/learn/learn-nft-pallets.md",sourceDirName:"learn",slug:"/learn-nft-pallets",permalink:"/docs/learn-nft-pallets",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1678889196,formattedLastUpdatedAt:"Mar 15, 2023",frontMatter:{id:"learn-nft-pallets",title:"NFT Pallets",sidebar_label:"NFT Pallets",description:"An overview of the functionalities of NFT Pallets in Polkadot Ecosystem.",keywords:["NFT","non-fungible token","NFT 2.0","nfts","NFT pallets"],slug:"../learn-nft-pallets"}},p={},m=[{value:"NFTs Pallet",id:"nfts-pallet",level:2},{value:"Roles",id:"roles",level:3},{value:"Creating a Collection",id:"creating-a-collection",level:3},{value:"Minting an NFT",id:"minting-an-nft",level:3},{value:"Uploading Files and Metadata",id:"uploading-files-and-metadata",level:3},{value:"Other Actions",id:"other-actions",level:3},{value:"Work in Progress",id:"work-in-progress",level:3},{value:"Uniques Pallet",id:"uniques-pallet",level:2}],u={toc:m};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"NFT ",(0,l.kt)("a",{parentName:"p",href:"/docs/learn-extrinsics#pallets-and-extrinsics"},"pallets")," allow developers to easily implement\nNFT-related actions within their dApp."),(0,l.kt)("h2",{id:"nfts-pallet"},"NFTs Pallet"),(0,l.kt)("admonition",{title:"For Developers Only",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The information presented here below is for developers. A user-friendly portal for NFTs, DEX and\nAssets is under construction.")),(0,l.kt)("p",null,"NFTs is a ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/extrinsics#nfts"},"FRAME pallet")," currently deployed\non Westmint, which provides a multitude of functions to interact with NFTs."),(0,l.kt)("p",null,"The pallet comes with a new way to configure NFTs, as well as configure collections and items.\nPallet-level ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12367"},"feature flags")," allow disabling\nfunctionalities not needed in the runtime."),(0,l.kt)("h3",{id:"roles"},"Roles"),(0,l.kt)("p",null,"Setting up a collection implies different roles with different permissions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Owner:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"destroy collection (to destroy the collection, there should be 0 items left)."),(0,l.kt)("li",{parentName:"ul"},"redeposit: re-evaluate the deposit on some items."),(0,l.kt)("li",{parentName:"ul"},"set team: change the collection\u2019s Issuer, Admin, Freezer."),(0,l.kt)("li",{parentName:"ul"},"set collection max supply: set the maximum number of items for a collection."),(0,l.kt)("li",{parentName:"ul"},"lock collection: this can include making a collection\u2019s items non-transferable, fixing its max\nsupply, and locking collection metadata and attributes."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Admin:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"set attribute and metadata of a collection."),(0,l.kt)("li",{parentName:"ul"},"set attributes pre-signed: set attributes for an item by providing the pre-signed approval."),(0,l.kt)("li",{parentName:"ul"},"lock item properties: lock item metadata and attributes.")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Note that an Admin account cannot burn or transfer items it does not own.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Freezer:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"lock item transfer: lock all holders from the possibility of transferring an item."),(0,l.kt)("li",{parentName:"ul"},"unlock item transfer: lift a previous lock to transfer an item for all holders."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Issuer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"mint"),(0,l.kt)("li",{parentName:"ul"},"force mint (with custom item configuration): mint an item of a particular collection from a\nprivileged origin."),(0,l.kt)("li",{parentName:"ul"},"mint pre-signed: mint an item by providing the pre-signed approval."),(0,l.kt)("li",{parentName:"ul"},"update mint settings.")))),(0,l.kt)("p",null,"For simple collections, the same account has all the roles by default. Still, for complex\ncollections separate accounts can take each role with their responsibilities (e.g. items issuance).\nThe key can be rotated for those roles. The owner's account is used to setup the collection, and its\nprivate key is kept in cold storage."),(0,l.kt)("p",null,"Those roles can also be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," without the ability to change them back. This is useful when a\ncollection is created, and all the items are minted without the possibility of minting any more\nitems, or change the metadata, or disable some item's transfer."),(0,l.kt)("h3",{id:"creating-a-collection"},"Creating a Collection"),(0,l.kt)("p",null,"You can use the NFTs pallet to create NFT collections. In the Polkadot-JS UI, go to Developer >\nExtrinsic and select the ",(0,l.kt)("inlineCode",{parentName:"p"},"nfts.create")," extrinsic. When you create a collection, you must specify who\nthe admin is. Then, under ",(0,l.kt)("inlineCode",{parentName:"p"},"config: PalletNftsCollectionConfig"),", you can configure your collection by\nspecifying different settings:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"settings")," you can specify (in a bitflag-format) settings for your collection:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Transferrable items"),": When disabled, the items will be non-transferrable (good for soul-bound\nNFTs),"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Unlocked metadata"),": When disabled, the metadata will be locked,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Unlocked attributes"),": When disabled, the attributes in the ",(0,l.kt)("inlineCode",{parentName:"li"},"CollectionOwner")," namespace will be\nlocked,"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Unlocked max supply"),": allows to change the max supply until it gets locked (i.e. the\npossibility to change the supply for a limited amount of time),"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Deposit required"),": when disabled, no mint deposit will be taken for items. This option can be\nset by a super-user only.")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Note that currently, Polkadot-JS UI does not support bitflags. Leave the settings field as it is.\nEverything is unlocked by default (bitflag value ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),").")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"maxSupply")," (toggle option) allows you to specify the maximum number of items that can be minted."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mintSettings: PalletNftsMintSettings")," allows you to specify different settings for your\ncollection.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mintType")," gives you the possibility to specify who can mint in your collection:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\xccssuer"),": only you can mint in your collection."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Public"),": everyone can mint in your collection."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HoderOf"),": only holders of items in another collection can mint in your collection. This\nrequires knowledge about the ID of the other collection. This avoids looping through all\nexisting collections and spamming RPC nodes with requests to find available IDs."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"price")," (toggle option) allows you to specify the price of the items."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"startBlock"),"and ",(0,l.kt)("inlineCode",{parentName:"li"},"endBlock")," give you the possibility to specify a time frame during which the\ncollection's configuration is valid (i.e. all options within\n",(0,l.kt)("inlineCode",{parentName:"li"},"config: PalletNftsCollectionConfig"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/pull/12483"},"other mint settings")," include:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"wave minting, for example mint X number of items that go to collection owners and Y number of\nitems for the public"),(0,l.kt)("li",{parentName:"ul"},"force mint: minting bypassing mint settings")))))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"}," The user can decide to lock an item or collection\u2019s metadata, attributes, and settings. Also, a locking mechanism can prevent unauthorized and unprivileged transfers (unprivileged\nactions can be re-allowed anytime).")),(0,l.kt)("p",null,"With all these options, one can decide to modify the price of the collection's items and who can\nmint, receive or buy items in that collection. Time constraints are available with ",(0,l.kt)("inlineCode",{parentName:"p"},"startBlock")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"endBlock")," parameters. It is thus possible, for example, to create a schedule in which holders of\nitems in collection A (",(0,l.kt)("inlineCode",{parentName:"p"},"HolderOf")," parameter) will be able to claim for free a limited number of NFTs\nfrom Collection X (",(0,l.kt)("inlineCode",{parentName:"p"},"maxSupply")," parameter) only within a specific time frame. You can modify the\nparameters so anyone can buy more NFTs from Collection X."),(0,l.kt)("p",null,"This can be useful for events such as Hackathons where participants who bought a ticket receive the\nNFT ticket from Collection A. Then, all holders of at least one item in Collection A (i.e. all\nticket holders) will be given free avatar NFT from Collection X within the event schedule. After the\nevent, any additional remaining items in Collection X can be made available to the public through a\nmarketplace."),(0,l.kt)("p",null,"The requirement to get the free avatar is to hold at least one NFT in Collection A. One can only\nclaim the avatar specifying which NFT (i.e. the ID) they own in Collection A. The same NFT cannot be\nused twice. Holders of multiple NFTs in Collection A (for example, participants in multiple\nHackathons) can claim multiple avatars specific to each event."),(0,l.kt)("admonition",{title:"Time frame must be updated",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"Someone trying to mint an NFT outside the specified time frame will trigger a ",(0,l.kt)("inlineCode",{parentName:"p"},"NoConfig")," error, as\nthe collection\u2019s admin has specified no configuration after the time frame ends. The collection's\nadmin must call the ",(0,l.kt)("inlineCode",{parentName:"p"},"updateMintSettings")," extrinsic and add a new schedule or disable the block\nnumber option.")),(0,l.kt)("p",null,"After you minted an NFT, check which NFT IDs you own under which collection. In the Polkadot-JS UI\ngo to Developer > Chain State > Storage, select the ",(0,l.kt)("inlineCode",{parentName:"p"},"nfts.account")," extrinsic, and specify the\naccount owning the NFT and the collection ID. You can also see all your collections by selecting the\n",(0,l.kt)("inlineCode",{parentName:"p"},"collectionAccount")," extrinsic."),(0,l.kt)("p",null,"When a new collection is created, a new ID will be generated and assigned to it. When a collection\nis destroyed, and no one can pick up the collection ID again (including the owner)."),(0,l.kt)("h3",{id:"minting-an-nft"},"Minting an NFT"),(0,l.kt)("p",null,"You can mint an NFT using the ",(0,l.kt)("inlineCode",{parentName:"p"},"nfts.mint")," extrinsic. You must then specify the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"collection"),", the collection ID where you want to mint"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"item"),", the item ID"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mintTo"),", the account"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"witnessData")," (toggle option), you can specify if you own an NFT in another collection")),(0,l.kt)("p",null,"Creating an item usually involves setting some attributes specific to that item."),(0,l.kt)("h3",{id:"uploading-files-and-metadata"},"Uploading Files and Metadata"),(0,l.kt)("p",null,"When you have a collection ID and an item ID you need to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open an account on ",(0,l.kt)("a",{parentName:"li",href:"https://www.pinata.cloud/"},"Pinata"),"."),(0,l.kt)("li",{parentName:"ul"},"Follow\n",(0,l.kt)("a",{parentName:"li",href:"https://docs.pinata.cloud/what-can-i-learn-here/pinning-your-first-file-with-pinata"},"these steps"),"\nto upload the file you want to mint."),(0,l.kt)("li",{parentName:"ul"},"After uploading your file, get the\n",(0,l.kt)("a",{parentName:"li",href:"https://docs.ipfs.tech/concepts/content-addressing/#what-is-a-cid"},"Content Identifier (CID)"),".\nThis unique string of letters and numbers will act as a marker to link the data uploaded onto\n",(0,l.kt)("a",{parentName:"li",href:"https://ipfs.tech/#how"},"IPFS")," to the collection or item ID you own."),(0,l.kt)("li",{parentName:"ul"},"Prepare the metadata file and add your CID (see below):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'{\n    "name":"Your Collection Name",\n    "description":"Collection\'s Description",\n    "image":"Your Collection CID"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Upload the metadata file to Pinata and get the updated CID."),(0,l.kt)("li",{parentName:"ul"},"After minting your NFT on the Polkadot-JS UI, you can add the CID. Go to Developer > Extrinsics\nand select the ",(0,l.kt)("inlineCode",{parentName:"li"},"nfts.setCollectionMetadata")," (for collections) or ",(0,l.kt)("inlineCode",{parentName:"li"},"nfts.setMetadata")," (for single\nNFTs) extrinsic. Under the ",(0,l.kt)("inlineCode",{parentName:"li"},"data: Bytes")," field you can enter the CID or upload the metadata file.")),(0,l.kt)("p",null,"The collection can be created and its item minted before uploading the NFT file and related\nmetadata. The minting process on-chain will assign a collection and item ID to your account. Those\nIDs will later be populated with NFT files, metadata, and attributes. Once you upload the NFT files\nand related data, the above-mentioned extrinsics can be used to update a collection or item."),(0,l.kt)("admonition",{title:"NFT/DEX/Asset Portal",type:"info"},(0,l.kt)("p",{parentName:"admonition"},'With the new NFT/DEX/Asset portal, all the above steps will be executed "under the hood" and the\nuser will not have to worry about all technicalities.')),(0,l.kt)("h3",{id:"other-actions"},"Other Actions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Buying an item up for sale."),(0,l.kt)("li",{parentName:"ul"},"Burning (i.e., destroy) items or a single item (burning must be signed either by the admin of the\ncollection or the owner)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/pull/12702"},"Smart attributes")," allow an NFT owner to grant\npermission to other entities (another account, an application, an oracle, etc.) to update\nattributes of an NFT. An example could be that all Polkadot fellowship members have an NFT badge\nthat gets updated over time (sort of a rank) with a consequent upgrade in membership permissions."),(0,l.kt)("li",{parentName:"ul"},"A collection is managed by the\n",(0,l.kt)("a",{parentName:"li",href:"/docs/learn-assets#creation-and-management"},"Issuer, the Admin, and the Freezer"),". Those roles can\nbe changed anytime."),(0,l.kt)("li",{parentName:"ul"},"Setting metadata for an item or collection (metadata includes all essential information about the\nitem or the collection). Metadata could consist of any arbitrary data like the IPFS hash."),(0,l.kt)("li",{parentName:"ul"},"Setting or re-setting the price of an item."),(0,l.kt)("li",{parentName:"ul"},"Clearing attributes and metadata of a collection or an item."),(0,l.kt)("li",{parentName:"ul"},"Changing the owner of an item or a collection."),(0,l.kt)("li",{parentName:"ul"},"Transferring an item, as well as creating and canceling transfer approvals of a specific item, or\nan ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/pull/12285"},"atomic swap"),"."),(0,l.kt)("li",{parentName:"ul"},"Transferring ownership of an item."),(0,l.kt)("li",{parentName:"ul"},"Delegating accounts: Delegated accounts can approve changes to an item's attributes and transfer\nan item. The item owner always has control and can decide to cancel approvals from a delegated\naccount."),(0,l.kt)("li",{parentName:"ul"},"One can also execute pending atomic swaps created by a counterpart.")),(0,l.kt)("h3",{id:"work-in-progress"},"Work in Progress"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/12565"},"NFTs fractionalization")," will allow the user to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Take ownership of an NFT from the ",(0,l.kt)("a",{parentName:"li",href:"#nfts-pallet"},"pallet-nfts")),(0,l.kt)("li",{parentName:"ul"},"Create a new asset in ",(0,l.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/substrate/extrinsics#assets"},"pallet-assets")),(0,l.kt)("li",{parentName:"ul"},"Mint the input amount to the previous owner of the NFT as the beneficiary"),(0,l.kt)("li",{parentName:"ul"},"Mass minting: Minting multiple items in one single transaction. This will require the user to\nprovide a .csv file with two columns: NFT ID and CID of metadata.")),(0,l.kt)("h2",{id:"uniques-pallet"},"Uniques Pallet"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The Uniques Pallet is deprecated. Everything related to NFTs will be covered by the the\n",(0,l.kt)("a",{parentName:"p",href:"#nfts-pallet"},"NFTs Pallet"),".")),(0,l.kt)("p",null,"Uniques is a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/uniques"},"FRAME pallet"),"\ndeployed on the Statemint and Statemine system parachains. It implements the most basic kind of NFT\n-- a data record referencing some metadata. This metadata reference is mutable until frozen, so NFTs\nand their classes (entities derived from) are mutable unless specifically made immutable by the\nissuer."),(0,l.kt)("p",null,"Uniques takes a very bare-bones approach on purpose to keep the Statemine / Statemint chain a simple\nbalance-keeping chain for both fungible and non-fungibles."),(0,l.kt)("p",null,"These NFTs can be viewed and interacted with on ",(0,l.kt)("a",{parentName:"p",href:"https://singular.app"},"RMRK's Singular platform"),", by\nswitching the top right menu from Kusama to Statemine or Statemint."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"nft-statemine",src:n(74343).Z,width:"2110",height:"617"})),(0,l.kt)("p",null,"They can also be interacted with directly through the\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-statemine-rpc.paritytech.net#/extrinsics"},"extrinsics tab of Statemine"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"uniques.png",src:n(4721).Z,width:"997",height:"608"})))}d.isMDXComponent=!0},74343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/nft-statemine-48ec78c3fcc8199d7d9164959424d5e3.png"},4721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/uniques-cd3bd4a76bd57ef0e79de4a0b36aa237.png"}}]);