(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{338:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(346)),o={title:"1.24.0 'Aquadonkey'",sidebar_label:"1.24.0 'Aquadonkey'"},c={unversionedId:"release-notes/1.24.0",id:"release-notes/1.24.0",isDocsHomePage:!1,title:"1.24.0 'Aquadonkey'",description:"Upgrade Instructions",source:"@site/../docs/release-notes/1.24.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.0",permalink:"/documentation/release-notes/1.24.0",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.0.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1620824150,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"1.24.0 'Aquadonkey'",frontMatter:{title:"1.24.0 'Aquadonkey'",sidebar_label:"1.24.0 'Aquadonkey'"}},l=[{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]}],s={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(i.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Adding missing indices which were only available as functional oracle indices. For oracle databases installed with the ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/blob/master/etc/sql/oracle/schema.sql"},"schema.sql")," definition, these should already exist (Please verify). (Alembic revision ",Object(i.b)("inlineCode",{parentName:"li"},"8ea9122275b1"),")")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"SUBSCRIPTIONS_STATE_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"subscriptions")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"CONTENTS_RULE_EVAL_FB_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"contents")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"REPLICAS_STATE_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"replicas")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"BAD_REPLICAS_ACCOUNT_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"bad_replicas")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"REQUESTS_DEST_RSE_ID_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," table")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Update of ",Object(i.b)("inlineCode",{parentName:"li"},"REQUESTS_STATE_CHK")," constraint in ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," table in preparation for Conveyor Preparer (Alembic revision ",Object(i.b)("inlineCode",{parentName:"li"},"d23453595260"),")")),Object(i.b)("h2",{id:"important-changes"},"Important changes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"This Rucio release line drops support for Python 2.7 on the Server/Daemon Side. Only Python 3.6 and 3.7 are supported from now on. Rucio clients are still Python 2.7 compatible for the foreseen future (EOL will be announced). If your environment is requiring to run Rucio under Python 2.7 we recommend the Rucio 1.23 LTS release line, which will be supported until 2022.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Due to a fix (",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/issues/3994"},"#3994"),") in the salting-algorithm used for Python 3 all hashes for stored passwords in Rucio need to be re-collected. This only affects password authentication. X509, Kerberos or OIDC authentication is unaffected."))),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add check that alembic version of DB works with rucio release ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1157"},"#1157")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Some function based indexes missing in models.py ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2714"},"#2714")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Policy packages should support multi-VO Rucio installations ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3542"},"#3542")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Provide a bulk method for setting metadata ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3847"},"#3847")),Object(i.b)("li",{parentName:"ul"},"Database: Upgrade SQLAlchemy version ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4055"},"#4055")),Object(i.b)("li",{parentName:"ul"},"Replicas: Allow declaring bad replicas via RSE/DID pair and REST API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4099"},"#4099")),Object(i.b)("li",{parentName:"ul"},"Transfers: Re-Write of Conveyor-Throttler and the throtteling system ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4056"},"#4056"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Make tool execution-dir independent ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4113"},"#4113")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Hardcoded atlas-adc-ddm-support eMail address for rule approval ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4164"},"#4164")),Object(i.b)("li",{parentName:"ul"},"Deletion: all_rses option redundant for light and dark reaper ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3933"},"#3933")),Object(i.b)("li",{parentName:"ul"},"Release management: Upgrade information in setup.py (1.24.0) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4120"},"#4120")),Object(i.b)("li",{parentName:"ul"},"Release management: 1.24 Dependency upgrade ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4157"},"#4157")),Object(i.b)("li",{parentName:"ul"},"Release management: Python memcached package ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4169"},"#4169")),Object(i.b)("li",{parentName:"ul"},"Replicas: Set geoip as default sorting algorithm in list_replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4017"},"#4017"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Userpass authentication not backwards compatible nor unicode capable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3994"},"#3994")),Object(i.b)("li",{parentName:"ul"},"Clients: list_replicas returns a generator with an empty string when there are no replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2517"},"#2517")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Clean URLs coming from AWS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4159"},"#4159")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: S3 endpoints in TPC must use s3s:// instead of s3:// ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4173"},"#4173")),Object(i.b)("li",{parentName:"ul"},"DIRAC: Bug in Belle II permission for dirac ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4174"},"#4174")),Object(i.b)("li",{parentName:"ul"},"Release management: Security upgrade for oic dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4181"},"#4181"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Python3 client subparser failure ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4202"},"#4202"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Suspicious replicas page is hidden ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4185"},"#4185")),Object(i.b)("li",{parentName:"ul"},"WebUI: RSE usage page uses obsolete SRM counter ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4195"},"#4195"))))}u.isMDXComponent=!0},346:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(a),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);