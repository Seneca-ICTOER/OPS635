"use strict";(self.webpackChunkOPS635=self.webpackChunkOPS635||[]).push([[353],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,g=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const i={id:"installation-nagios",title:"Installation Nagios",sidebar_position:5,description:"Installation Nagios"},l="Installation Nagios",o={unversionedId:"C-ExtraResources/installation-nagios",id:"C-ExtraResources/installation-nagios",title:"Installation Nagios",description:"Installation Nagios",source:"@site/docs/C-ExtraResources/nagios-install.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/installation-nagios",permalink:"/OPS635/C-ExtraResources/installation-nagios",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS635/tree/main/docs/C-ExtraResources/nagios-install.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"installation-nagios",title:"Installation Nagios",sidebar_position:5,description:"Installation Nagios"},sidebar:"courseNotesSidebar",previous:{title:"Installation Puppet",permalink:"/OPS635/C-ExtraResources/installation-puppet"},next:{title:"Installation Ansible",permalink:"/OPS635/C-ExtraResources/installation-ansible"}},s={},u=[{value:"Centos 8",id:"centos-8",level:2},{value:"Centos 7",id:"centos-7",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-nagios"},"Installation Nagios"),(0,r.kt)("h2",{id:"centos-8"},"Centos 8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you have the epel-release repo",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yum install epel-release"))),(0,r.kt)("li",{parentName:"ul"},"Install the main nagios package",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yum install nagios"))),(0,r.kt)("li",{parentName:"ul"},"Install plugins if necessary (for us it is)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yum install nagios-plugins nagios-plugins-* --skip-broken"),(0,r.kt)("li",{parentName:"ul"},"Note that several of the plugins covered by nagios-plugins-* require packages that do not seem to be easily available in Centos 8 yet. You could search for ways to install the dependencies manually, but we don't need those particular plugins so we can safely --skip-broken."))),(0,r.kt)("li",{parentName:"ul"},"Note that this also installs httpd for you, as the main user interface for this service is a web-page.")),(0,r.kt)("h2",{id:"centos-7"},"Centos 7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure you have the epel-release repo",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yum install epel-release"))),(0,r.kt)("li",{parentName:"ul"},"Install the main nagios package",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yum install nagios"))),(0,r.kt)("li",{parentName:"ul"},"Install plugins if necessary (for us it is)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yum install nagios-plugins nagios-plugins-*"))),(0,r.kt)("li",{parentName:"ul"},"Note that this also installs httpd for you, as the main user interface for this service is a web-page.")))}c.isMDXComponent=!0}}]);