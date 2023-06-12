"use strict";(self.webpackChunkOPS635=self.webpackChunkOPS635||[]).push([[340],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8246:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return p}});var a=n(3117),i=(n(7294),n(3905));const r={id:"lab1",title:"Lab 1",sidebar_position:2,description:"Lab 1 For Students to Complete and Submit"},o="OPS635 Lab 1: System Configuration Management using Puppet",l={unversionedId:"A-Labs/lab1",id:"A-Labs/lab1",title:"Lab 1",description:"Lab 1 For Students to Complete and Submit",source:"@site/docs/A-Labs/lab1.md",sourceDirName:"A-Labs",slug:"/A-Labs/lab1",permalink:"/OPS635/A-Labs/lab1",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS635/tree/main/docs/A-Labs/lab1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"lab1",title:"Lab 1",sidebar_position:2,description:"Lab 1 For Students to Complete and Submit"},sidebar:"courseNotesSidebar",previous:{title:"Prelab 0 - Host installation and virtual network setup",permalink:"/OPS635/A-Labs/prelab"},next:{title:"Lab 2",permalink:"/OPS635/A-Labs/lab2"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Investigation 1: Basic Puppet Installation",id:"investigation-1-basic-puppet-installation",level:2},{value:"Investigation 2: Using a Puppet Manifest",id:"investigation-2-using-a-puppet-manifest",level:2},{value:"Investigation 3: Using a Puppet Module",id:"investigation-3-using-a-puppet-module",level:2},{value:"Investigation 4: Using a Puppet Template",id:"investigation-4-using-a-puppet-template",level:2},{value:"Submission",id:"submission",level:2},{value:"Completing the Lab",id:"completing-the-lab",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ops635-lab-1-system-configuration-management-using-puppet"},"OPS635 Lab 1: System Configuration Management using Puppet"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,'In an enterprise environment, the existence of different hardware and Operating Systems running on production servers is very common. You may find the same software running on different OS and even different hardware platforms. To manage the software configuration on different platforms by using a script, your script must aware and account for their differences. Your scripts must be written in way that it knows how to query the operating environment and execute the appropriate installation and configuration actions based on the operating environment it is running on. There are commercial and open source configuration management systems which aware and know how to handle such difference in operating platforms. "Puppet" is one of those CMS that we are going to study for this lab. In this lab, we will start by trying to port the script that you have written for configuring Nagios on Centos7 to Debain/Ubuntu (or any other Linux distributions of you choice except RHEL and Fedora). Secondly, we will convert your originally Nagios installation and configuration script into a Puppet manifest, test it in your testing environment and then deploy it to your production environment (i.e. your Seneca VM).'),(0,i.kt)("h2",{id:"investigation-1-basic-puppet-installation"},"Investigation 1: Basic Puppet Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clone your Centos blank Vm to create three new Vms (puppet-master, puppet-client1, and puppet-client2)."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set the hostnames of each, provide them with static addresses, and add them to your DNS service.\\"),(0,i.kt)("li",{parentName:"ul"},"Use current installation instructions (<- ADD LINK HERE) to configure your puppet-master as the puppet master, and configure puppet-client1 and puppet-client2 as puppet agents.\\"),(0,i.kt)("li",{parentName:"ul"},"Write a puppet manifest on puppet-master to make a simple change (e.g. installing bind-utils) on both clients. Ensure it works before continuing."),(0,i.kt)("li",{parentName:"ul"},"Manually undo the simple change (e.g. remove the package), and ensure that puppet re-applies the change.")))),(0,i.kt)("h2",{id:"investigation-2-using-a-puppet-manifest"},"Investigation 2: Using a Puppet Manifest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a puppet manifest that will configure both puppet agents as web-servers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Your manifest should ensure that both machines meet the following conditions:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The httpd package must be installed"),(0,i.kt)("li",{parentName:"ul"},"The httpd service must be enabled and running"),(0,i.kt)("li",{parentName:"ul"},"A simple webpage of your creation must be the DocumentRoot on both machines."),(0,i.kt)("li",{parentName:"ul"},"The firewall must be allowing traffic to your webservers."),(0,i.kt)("li",{parentName:"ul"},"Do not worry about providing the configuration file yet."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ensure that even if you manually break your machines (e.g. remove a required package, alter the webpage), they will automatically be fixed by the puppet-master.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add metaparameters to your manifest (if you didn't already have them) to ensure the resources are checked in a sensible order (e.g. the package is installed before puppet tries to start the service)."))),(0,i.kt)("h2",{id:"investigation-3-using-a-puppet-module"},"Investigation 3: Using a Puppet Module"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new directory in your modulepath called webserver.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add a manifest file to your module and place your resources from investigation 2 inside it in a class called webserver.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the apache configuration file to the files subdirectory of your module and make a minor change to it (e.g the ServerAdmin parameter)."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add the configuration file to your class manifest, making sure you include appropriate metaparameters to restart apache if the configuration changes."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modify your main manifest to make both machines implement your webserver class instead of listing every resource in both machines.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ensure that even if you manually break your machines (e.g. remove a required package, alter the webpage), they will automatically be fixed by the puppet-master."))),(0,i.kt)("h2",{id:"investigation-4-using-a-puppet-template"},"Investigation 4: Using a Puppet Template"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Convert your apache configuration file to a template:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Move it from the files subdirectory to the templates subdirectory"),(0,i.kt)("li",{parentName:"ul"},"Modify it to allow whoever implements your class to provide it with their desired values for two parameters (e.g. Listen and ServerAdmin)"),(0,i.kt)("li",{parentName:"ul"},"Modify your class's manifest file to provide default values for the parameters you chose, and to pass them to the configuration file using epp"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ensure that even if you manually break your machines (e.g. remove a required package, alter the webpage), they will automatically be fixed by the puppet-master.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modify your main manifest file to provide a different value for at least one of your chosen parameters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ensure that even if you manually break your machines (e.g. remove a required package, alter the webpage), they will automatically be fixed by the puppet-master."))),(0,i.kt)("h2",{id:"submission"},"Submission"),(0,i.kt)("p",null,"Upload the main manifest and your module to Blackboard."),(0,i.kt)("h2",{id:"completing-the-lab"},"Completing the Lab"),(0,i.kt)("p",null,"In completing this lab you have learned how to use common elements of puppet to provision services on machines under your control. With puppet in place you can automatically configure and repair services under your control, making configuration and maintenance of your machines much more efficient."))}m.isMDXComponent=!0}}]);