/*! For license information please see 5486.48301214.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[5486],{36742:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(19756),o=r(67294),i=r(73727),a=r(52263),u=r(13919),c=r(10412),s=(0,o.createContext)({collectLink:function(){}}),l=r(44996),f=r(18780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const d=function(e){var t,r,d=e.isNavLink,p=e.to,g=e.href,h=e.activeClassName,m=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,P=(0,n.Z)(e,v),_=(0,a.Z)().siteConfig.trailingSlash,D=(0,l.C)().withBaseUrl,A=(0,o.useContext)(s),O=p||g,V=(0,u.Z)(O),E=null==O?void 0:O.replace("pathname://",""),j=void 0!==E?(r=E,w&&function(e){return e.startsWith("/")}(r)?D(r):r):void 0;j&&V&&(j=(0,f.applyTrailingSlash)(j,_));var S,x=(0,o.useRef)(!1),k=d?i.OL:i.rU,L=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!L&&V&&null!=j&&window.docusaurus.prefetch(j),function(){L&&S&&S.disconnect()}}),[j,L,V]);var C=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,I=!j||!V||C;return j&&V&&!C&&!y&&A.collectLink(j),I?o.createElement("a",Object.assign({href:j},O&&!V&&{target:"_blank",rel:"noopener noreferrer"},P)):o.createElement(k,Object.assign({},P,{onMouseEnter:function(){x.current||null==j||(window.docusaurus.preload(j),x.current=!0)},innerRef:function(e){var t,r;L&&e&&V&&(t=e,r=function(){null!=j&&window.docusaurus.prefetch(j)},(S=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(S.unobserve(t),S.disconnect(),r())}))}))).observe(t))},to:j||""},d&&{isActive:m,activeClassName:h}))}},24973:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f,I:()=>l});var n=r(67294),o=/{\w+}/g,i="{}";function a(e,t){var r=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var u=n.isValidElement(a)?a:String(a);return r.push(u),i}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,t,n){var o;return e.concat(t).concat(null!==(o=r[n])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,t,o){return[].concat(e,[n.createElement(n.Fragment,{key:o},t,r[o])])}),[])}function u(e){return a(e.children,e.values)}var c=r(65804);function s(e){var t,r=e.id,n=e.message;return null!==(t=c[null!=r?r:n])&&void 0!==t?t:n}function l(e,t){var r,n=e.message;return a(null!==(r=s({message:n,id:e.id}))&&void 0!==r?r:n,t)}function f(e){var t,r=e.children,o=e.id,i=e.values,a=null!==(t=s({message:r,id:o}))&&void 0!==t?t:r;return n.createElement(u,{values:i},a)}},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>o})},28143:(e,t,r)=>{"use strict";r.r(t),r.d(t,{BrowserRouter:()=>n.VK,HashRouter:()=>n.UT,Link:()=>n.rU,MemoryRouter:()=>n.VA,NavLink:()=>n.OL,Prompt:()=>n.NL,Redirect:()=>n.l_,Route:()=>n.AW,Router:()=>n.F0,StaticRouter:()=>n.gx,Switch:()=>n.rs,generatePath:()=>n.Gn,matchPath:()=>n.LX,useHistory:()=>n.k6,useLocation:()=>n.TH,useParams:()=>n.UO,useRouteMatch:()=>n.$B,withRouter:()=>n.EN});var n=r(73727)},44996:(e,t,r)=>{"use strict";r.d(t,{C:()=>i,Z:()=>a});var n=r(52263),o=r(13919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,s=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},28084:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,useAllPluginInstancesData:()=>i,usePluginData:()=>a});var n=r(52263);function o(){var e=(0,n.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function a(e,t){void 0===t&&(t="default");var r=i(e)[t];if(!r)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return r}},48408:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var n=r(28143);t.getActivePlugin=function(e,t,r){void 0===r&&(r={});var o=Object.entries(e).find((function(e){e[0];var r=e[1];return!!n.matchPath(t,{path:r.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&r.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return i};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,r){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!n.matchPath(r,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,r){var o,i,a=t.getActiveVersion(e,r),u=null==a?void 0:a.docs.find((function(e){return!!n.matchPath(r,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:u,alternateDocVersions:u?(o=u.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}};t.getDocVersionSuggestions=function(e,r){var n=t.getLatestVersion(e),o=t.getActiveDocContext(e,r),i=o.activeVersion!==n;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[n.name]:void 0,latestVersionSuggestion:i?n:void 0}}},96730:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var n=r(70655),o=r(28143),i=n.__importStar(r(28084)),a=r(48408);t.useAllDocsData=function(){var e;return null!==(e=i.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:{}};t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var r=t.useAllDocsData(),n=o.useLocation().pathname;return a.getActivePlugin(r,n,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var r=t.useActivePlugin(e),n=o.useLocation().pathname;if(r)return{activePlugin:r,activeVersion:a.getActiveVersion(r.pluginData,n)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var r=t.useDocsData(e);return a.getLatestVersion(r)};t.useActiveVersion=function(e){var r=t.useDocsData(e),n=o.useLocation().pathname;return a.getActiveVersion(r,n)};t.useActiveDocContext=function(e){var r=t.useDocsData(e),n=o.useLocation().pathname;return a.getActiveDocContext(r,n)};t.useDocVersionSuggestions=function(e){var r=t.useDocsData(e),n=o.useLocation().pathname;return a.getDocVersionSuggestions(r,n)}},41217:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67294),o=r(99105),i=r(59732),a=r(44996);function u(e){var t=e.title,r=e.description,u=e.keywords,c=e.image,s=(0,i.LU)().image,l=(0,i.pe)(t),f=(0,a.Z)(c||s,{absolute:!0});return n.createElement(o.Z,null,t&&n.createElement("title",null,l),t&&n.createElement("meta",{property:"og:title",content:l}),r&&n.createElement("meta",{name:"description",content:r}),r&&n.createElement("meta",{property:"og:description",content:r}),u&&n.createElement("meta",{name:"keywords",content:Array.isArray(u)?u.join(","):u}),f&&n.createElement("meta",{property:"og:image",content:f}),f&&n.createElement("meta",{name:"twitter:image",content:f}))}},80907:(e,t,r)=>{"use strict";r.d(t,{Iw:()=>n.useActiveDocContext,gA:()=>n.useActivePlugin,WS:()=>n.useActivePluginAndVersion,zu:()=>n.useActiveVersion,_r:()=>n.useAllDocsData,Jo:()=>n.useDocVersionSuggestions,zh:()=>n.useDocsData,yW:()=>n.useLatestVersion,gB:()=>n.useVersions});var n=r(96730)},59732:(e,t,r)=>{"use strict";r.d(t,{HX:()=>g,L5:()=>C,kM:()=>Z,WA:()=>s,os:()=>h,Mg:()=>b,_f:()=>l,bc:()=>p,l5:()=>v,ru:()=>E,J:()=>T,Oh:()=>M,c2:()=>V,LU:()=>o,pe:()=>w});var n=r(52263);function o(){return(0,n.Z)().siteConfig.themeConfig}var i="localStorage";function a(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(r){return t=r,u||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),u=!0),null}var t}var u=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);var r=a(null==t?void 0:t.persistence);return null===r?c:{get:function(){return r.getItem(e)},set:function(t){return r.setItem(e,t)},del:function(){return r.removeItem(e)}}};function l(e){void 0===e&&(e=i);var t=a(e);if(!t)return[];for(var r=[],n=0;n<t.length;n+=1){var o=t.key(n);null!==o&&r.push(o)}return r}var f=r(5977);function v(){var e=(0,n.Z)(),t=e.siteConfig,r=t.baseUrl,o=t.url,i=e.i18n,a=i.defaultLocale,u=i.currentLocale,c=(0,f.TH)().pathname,s=u===a?r:r.replace("/"+u+"/","/"),l=c.replace(r,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===a?""+s:""+s+e+"/"}(t)+l}}}var d=/title=(["'])(.*?)\1/;function p(e){var t,r;return null!==(r=null===(t=null==e?void 0:e.match(d))||void 0===t?void 0:t[2])&&void 0!==r?r:""}var g="default";function h(e,t){return"docs-"+e+"-"+t}var m=r(80907),y=!!m._r,b=function(e,t){var r=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return r(e)===r(t)},w=function(e){var t=(0,n.Z)().siteConfig,r=void 0===t?{}:t,o=r.title,i=r.titleDelimiter,a=void 0===i?"|":i;return e&&e.trim().length?e.trim()+" "+a+" "+o:o},P=r(67294),_=["zero","one","two","few","many","other"];function D(e){return _.filter((function(t){return e.includes(t)}))}var A={locale:"en",pluralForms:D(["one","other"]),select:function(e){return 1===e?"one":"other"}};function O(){var e=(0,n.Z)().i18n.currentLocale;return(0,P.useMemo)((function(){if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),A;try{return t=e,r=new Intl.PluralRules(t),{locale:t,pluralForms:D(r.resolvedOptions().pluralCategories),select:function(e){return r.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n'),A}var t,r}),[e])}function V(){var e=O();return{selectMessage:function(t,r){return function(e,t,r){var n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error("For locale="+r.locale+", a maximum of "+r.pluralForms.length+" plural forms are expected ("+r.pluralForms+"), but the message contains "+n.length+" plural forms: "+e+" ");var o=r.select(t),i=r.pluralForms.indexOf(o);return n[Math.min(i,n.length-1)]}(r,t,e)}}}function E(e){var t=(0,f.TH)().pathname,r=(0,P.useRef)(t);(0,P.useEffect)((function(){t!==r.current&&(r.current=t,e())}),[t,r,e])}var j=function(e){return"docs-preferred-version-"+e};const S={save:function(e,t,r){s(j(e),{persistence:t}).set(r)},read:function(e,t){return s(j(e),{persistence:t}).get()},clear:function(e,t){s(j(e),{persistence:t}).del()}};function x(e){var t=e.pluginIds,r=e.versionPersistence,n=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=S.read(e,r);return n[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(S.clear(e,r),{preferredVersionName:null})}(e)})),o}function k(){var e=(0,m._r)(),t=o().docs.versionPersistence,r=(0,P.useMemo)((function(){return Object.keys(e)}),[e]),n=(0,P.useState)((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(r)})),i=n[0],a=n[1];return(0,P.useEffect)((function(){a(x({allDocsData:e,versionPersistence:t,pluginIds:r}))}),[e,t,r]),[i,(0,P.useMemo)((function(){return{savePreferredVersion:function(e,r){S.save(e,t,r),a((function(t){var n;return Object.assign({},t,((n={})[e]={preferredVersionName:r},n))}))}}}),[a])]}var L=(0,P.createContext)(null);function C(e){var t=e.children;return y?P.createElement(I,null,t):P.createElement(P.Fragment,null,t)}function I(e){var t=e.children,r=k();return P.createElement(L.Provider,{value:r},t)}function R(){var e=(0,P.useContext)(L);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}function T(e){void 0===e&&(e="default");var t=(0,m.zh)(e),r=R(),n=r[0],o=r[1],i=n[e].preferredVersionName;return{preferredVersion:i?t.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:(0,P.useCallback)((function(t){o.savePreferredVersion(e,t)}),[o])}}function M(){var e=(0,m._r)(),t=R()[0];var r=Object.keys(e),n={};return r.forEach((function(r){n[r]=function(r){var n=e[r],o=t[r].preferredVersionName;return o?n.versions.find((function(e){return e.name===o})):null}(r)})),n}var Z={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(e.startsWith("#"))return e;if(void 0===t)return e;var r,n=e.split(/[#?]/)[0],o="/"===n?"/":t?(r=n).endsWith("/")?r:r+"/":function(e){return e.endsWith("/")?e.slice(0,-1):e}(n);return e.replace(n,o)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(o).default}});var i=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(i).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},86010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o})},70655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{__extends:()=>o,__assign:()=>i,__rest:()=>a,__decorate:()=>u,__param:()=>c,__metadata:()=>s,__awaiter:()=>l,__generator:()=>f,__createBinding:()=>v,__exportStar:()=>d,__values:()=>p,__read:()=>g,__spread:()=>h,__spreadArrays:()=>m,__spreadArray:()=>y,__await:()=>b,__asyncGenerator:()=>w,__asyncDelegator:()=>P,__asyncValues:()=>_,__makeTemplateObject:()=>D,__importStar:()=>O,__importDefault:()=>V,__classPrivateFieldGet:()=>E,__classPrivateFieldSet:()=>j});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function u(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(t){i(t)}}function u(e){try{c(n.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var v=Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]};function d(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||v(t,e,r)}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function g(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(g(arguments[t]));return e}function m(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}function y(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||t)}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),i=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){i.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=o[e](t)).value instanceof b?Promise.resolve(r.value.v).then(c,s):l(i[0][2],r)}catch(n){l(i[0][3],n)}var r}function c(e){u("next",e)}function s(e){u("throw",e)}function l(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function P(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:b(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function _(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=p(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function D(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var A=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&v(t,e,r);return A(t,e),t}function V(e){return e&&e.__esModule?e:{default:e}}function E(e,t,r,n){if("a"===r&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)}function j(e,t,r,n,o){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?o.call(e,r):o?o.value=r:t.set(e,r),r}}}]);