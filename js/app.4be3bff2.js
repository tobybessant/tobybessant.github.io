(function(e){function t(t){for(var a,o,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},s={app:0},i=[];function r(e){return l.p+"js/"+({projects:"projects"}[e]||e)+"."+{"chunk-202f26bf":"50718142","chunk-6185d0ba":"348ec234","chunk-b2c18eb0":"09c5ed94","chunk-b9a4085e":"ddafc346",projects:"f16aab60"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-202f26bf":1,"chunk-6185d0ba":1,"chunk-b2c18eb0":1,"chunk-b9a4085e":1,projects:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({projects:"projects"}[e]||e)+"."+{"chunk-202f26bf":"ab82000d","chunk-6185d0ba":"a6f88bf6","chunk-b2c18eb0":"072f5a53","chunk-b9a4085e":"20159528",projects:"c2057965"}[e]+".css",s=l.p+a,i=document.getElementsByTagName("link"),r=0;r<i.length;r++){var c=i[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===a||u===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){o[e]=0})));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}s[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"046a":function(e,t,n){},"06c8":function(e,t,n){"use strict";var a=n("046a"),o=n.n(a);o.a},"07c5":function(e,t,n){},"0cf8":function(e,t,n){},1960:function(e,t,n){"use strict";var a=n("ec0a"),o=n.n(a);o.a},"30e6":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));n("b0c0");var a="lastRoute";function o(e){var t=e.from,n=e.next;return sessionStorage.setItem(a,t.name),n()}},"32ba":function(e,t,n){"use strict";var a=n("e85c"),o=n.n(a);o.a},5398:function(e,t,n){},"553e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"svg"},[n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap",rel:"stylesheet"}}),n("router-view")],1)])},s=[],i={name:"app"},r=i,l=(n("5c0b"),n("2877")),c=Object(l["a"])(r,o,s,!1,null,null,null),u=c.exports,d=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("e6cf"),n("159b"),n("ade3")),p=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PageNav"),n("AppHeader"),n("HomeNav"),n("div",{staticClass:"page-content page-style-defaults"},[n("div",{staticClass:"showcase"},[n("h2",[e._v("Showcase")]),n("div",{staticClass:"showcase-projects"},e._l(e.favouriteProjects,(function(e,t){return n("ProjectItem",{key:t,attrs:{project:e}})})),1)]),n("SocialLinkSet")],1)],1)},m=[],g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-heading"},[n("h1",{attrs:{id:"app-title"}},[e._v("TOBY BESSANT")]),n("div",{attrs:{id:"subheading"}},[n("p",[e._v(" A motivated final year student studying Computing & Games Development at Plymouth University, graduating in June 2020. ")])])])}],b={name:"AppTitle"},v=b,y=(n("c9c2"),Object(l["a"])(v,g,f,!1,null,"1b91db0d",null)),w=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-nav"},[n("HomeNavButtonPrimary",{attrs:{location:"https://github.com/tobybessant",label:"GitHub"}}),n("HomeNavButtonSecondary",{attrs:{location:"https://tobybessant.github.io/CV/Toby%20Bessant%20CV.pdf",label:"My CV"}})],1)},j=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{target:"_target",href:this.location}},[n("div",{staticClass:"home-nav-button"},[n("span",{staticClass:"button-label"},[e._v(e._s(e.label))])])])},T=[],C={name:"HomeNavButton",props:{label:String,location:String},methods:{clicked:function(){this.$router.push(this.location)}}},P=C,_=(n("32ba"),Object(l["a"])(P,S,T,!1,null,"2adf0916",null)),O=_.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{target:"_target",href:this.location}},[n("div",{staticClass:"home-nav-button"},[n("span",{staticClass:"button-label"},[e._v(e._s(e.label))])])])},I=[],D={name:"HomeNavButton",props:{label:String,location:String},methods:{clicked:function(){this.$router.push(this.location)}}},A=D,N=(n("06c8"),Object(l["a"])(A,x,I,!1,null,"5c12a4f0",null)),G=N.exports,J={name:"HomeNav",components:{HomeNavButtonPrimary:O,HomeNavButtonSecondary:G}},E=J,H=(n("8c5d"),Object(l["a"])(E,k,j,!1,null,"89b04fee",null)),B=H.exports,L=n("ce2f"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"link-icons"},[n("a",{attrs:{href:"https://github.com/tobybessant",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","github-square"]}})],1),n("a",{attrs:{href:"https://uk.linkedin.com/in/tobybessant",target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)])},M=[],V={name:"SocialLinkSet"},$=V,F=(n("1960"),Object(l["a"])($,U,M,!1,null,null,null)),W=F.exports,q=n("624f"),R=n("b21d"),K="lastRoute",X={name:"home",components:{PageNav:L["a"],AppHeader:w,HomeNav:B,ProjectItem:q["a"],SocialLinkSet:W},data:function(){return{favouriteProjects:[]}},mounted:function(){this.favouriteProjects=R.projectsData.filter((function(e){return e.favourite})),window.sessionStorage.setItem(K,null)}},Y=X,z=(n("9143"),Object(l["a"])(Y,h,m,!1,null,"7a2b6380",null)),Q=z.exports,Z=n("30e6");function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){Object(d["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}a["a"].use(p["a"]);var ne=[{path:"/",name:"home",component:Q,meta:{middleware:Z["b"]}},{path:"/projects",name:"projects",props:!0,meta:{middleware:Z["b"]},component:function(){return n.e("projects").then(n.bind(null,"acca"))}},{path:"/blog",name:"blog",component:function(){return n.e("chunk-b2c18eb0").then(n.bind(null,"8cf7"))}},{path:"/contact",name:"contact",component:function(){return n.e("chunk-b9a4085e").then(n.bind(null,"b8fa"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-6185d0ba").then(n.bind(null,"f820"))}},{path:"/projects/:projectSlug",name:"project-details",meta:{middleware:Z["b"]},component:function(){return n.e("chunk-202f26bf").then(n.bind(null,"7746"))}}],ae=new p["a"]({mode:"history",routes:ne});function oe(e,t,n){var a=t[n];return a?function(){e.next.apply(e,arguments);var o=oe(e,t,n+1);a(te({},e,{next:o}))}:e.next}ae.beforeEach((function(e,t,n){if(e.meta.middleware){var a=Array.isArray(e.meta.middleware)?e.meta.middleware:[e.meta.middleware],o={from:t,next:n,router:ae,to:e},s=oe(o,a,1);return a[0](te({},o,{next:s}))}return n()}));var se=ae,ie=n("ecee"),re=n("f2d1"),le=n("ad3d"),ce=n("f174"),ue=n.n(ce);ie["c"].add(re["a"]),ie["c"].add(re["b"]),a["a"].component("font-awesome-icon",le["a"]),a["a"].use(ue.a),a["a"].config.productionTip=!1,new a["a"]({router:se,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},"624f":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card",on:{click:e.gotoProject}},[n("div",{staticClass:"card-header"},[this.project.img?n("img",{staticClass:"card-img",attrs:{src:this.project.img[0]}}):n("img",{staticClass:"card-img",attrs:{src:"https://picsum.photos/1920/1080"}})]),n("div",{staticClass:"container"},[n("h3",[e._v(e._s(e.project.name))]),n("p",{staticClass:"last-updated"},[e._v(e._s(e.project.last_updated))]),n("div",{staticClass:"tags"},e._l(e.project.tags,(function(t,a){return n("div",{key:a,staticClass:"tag"},[n("p",[e._v(e._s(t))])])})),0)])])},o=[],s={name:"ProjectItem",props:{project:null},methods:{gotoProject:function(){this.$router.push("projects/"+this.project.slug)}}},i=s,r=(n("e9bb"),n("2877")),l=Object(r["a"])(i,a,o,!1,null,"aa19ce1c",null);t["a"]=l.exports},8513:function(e,t,n){"use strict";var a=n("0cf8"),o=n.n(a);o.a},"8c5d":function(e,t,n){"use strict";var a=n("5398"),o=n.n(a);o.a},9143:function(e,t,n){"use strict";var a=n("d959"),o=n.n(a);o.a},"946f":function(e,t,n){"use strict";var a=n("553e"),o=n.n(a);o.a},"9c0c":function(e,t,n){},b21d:function(e){e.exports=JSON.parse('{"availableTags":["JavaScript","NodeJS","VueJS","Angular8","C++","OpenGL","Java","OOP","C#","Unity3D"],"projectsData":[{"name":"Typist","desc":"Typist is a web-based racing game, where participants race against each other to finish typing a randomly-generated paragraph of text.","favourite":true,"tags":["JavaScript","NodeJS","VueJS"],"last_updated":"10th Jan 2020","img":["/assets/Typist/image3.png","/assets/Typist/image6.png","/assets/Typist/image9.png"],"tools":[{"label":"Git","icon":"/assets/Tools/git.png"},{"label":"VueJS","icon":"/assets/Tools/vue.png"},{"label":"NodeJS","icon":"/assets/Tools/node.svg"},{"label":"socket.io","icon":"/assets/Tools/socketio.svg"},{"label":"Express","icon":"/assets/Tools/express.png"},{"label":"MongoDB","icon":"/assets/Tools/mongodb.png"},{"label":"Mocha","icon":"/assets/Tools/mocha.png"}],"links":[{"label":"GitHub","url":"https://github.com/tobybessant/Typist"},{"label":"Typist - Play Now!","url":"https://typist-app.herokuapp.com"}],"bodyPath":"posts/typist.md","bodyContent":"<h4 id=\\"skillsdeveloped\\">Skills Developed</h4>\\n<ul>\\n<li>Full-stack web application development.</li>\\n<li>Use of websockets to enable real-time status updates.</li>\\n<li>Use of TDD, and a CI pipeline to ensure high-qualtiy, functional code.</li>\\n<li>Developed an express API to interact with MongoDB for high-score persistence.</li>\\n<li>JS Workers to ensure immediate UI feedback.</li>\\n</ul>\\n<h4 id=\\"improvementsevaluation\\">Improvements / Evaluation</h4>\\n<p>Whilst I am really pleased with the application, there are a few things I would re-consider / do differently next time:</p>\\n<ul>\\n<li>I would ideally improve the system design around the websocket implementation. My knowledge on how socket.io would work within the system was weak, which hindered my foresight around this implementation.</li>\\n<li>I will consider using ‘Vuex’, a state-management library for Vue that may have assisted with managing the player state on the client side, and triggering relevant events.</li>\\n</ul>\\n<h4 id=\\"additionalcomments\\">Additional Comments</h4>\\n<p>This project is probably my favourite so far. I enjoyed working with NodeJS to drive an application to completion - using modern frameworks and libraries to create a web-based game. I am particularly proud of the simplistic UI design and websocket implementation to send live player position updates to the rest of the lobby (screenshot 2). To ensure the UI was fast I implemented JavaScript web workers to assess the user input in another process.</p>\\n<p>Using TDD forced me to spend time upfront, thinking about how the application would look from a system design perspective. I now have over 100 unit tests, which are all set up to run using an Azure Pipeline - giving me a good perspective on the status of the application\'s functionality.</p>","slug":"Typist"},{"name":"Habitat","desc":"Habitat is a mobile application aimed at providing a communication platform for landlords and tenants to use during a tenancy. This includes managing property maintenance issues, miscellaneous house information, and contacts.","favourite":true,"tags":["Angular8","JavaScript","NodeJS"],"last_updated":"2nd Jan 2020","img":["/assets/Habitat/image1.png"],"tools":[{"label":"Git","icon":"/assets/Tools/git.png"},{"label":"NodeJS","icon":"/assets/Tools/node.svg"},{"label":"TypeScript","icon":"/assets/Tools/ts.png"},{"label":"Angular8","icon":"/assets/Tools/angular.png"},{"label":"Ionic","icon":"/assets/Tools/ionic.png"},{"label":"Cordova","icon":"/assets/Tools/cordova.png"},{"label":"VSCode","icon":"/assets/Tools/vscode.png"},{"label":"AdobeXD","icon":"/assets/Tools/xd.png"}],"links":[{"label":"GitHub","url":"https://github.com/ebrisoft/frontend"},{"label":"Release Website","url":"https://habitat.ebrisoft.com"}],"bodyPath":"posts/habitat.md","bodyContent":"<h4 id=\\"skillsdeveloped\\">Skills Developed</h4>\\n<ul>\\n<li>Working with web technologies to produce a native mobile application.</li>\\n<li>Designing and developing an abstract API layer to produce maintainable code.</li>\\n<li>Building early AdobeXD prototypes for the idea.</li>\\n<li>Front-end development through implementing API service classes, components, and views.</li>\\n<li>Working in a small team, using agile and scrum to set, prioritise, and assign weekly tasks.</li>\\n</ul>\\n<h4 id=\\"additionalcomments\\">Additional Comments</h4>\\n<p>This project was a great opportunity to collaboratively try out some new technology that my colleagues and I were raring to get our teeth into. The backend was built by my colleague using ASP.NET Core, Entity Framework, and SQLServer. We built the front end using Angular8 &amp; TypeScript, Ionic, and Cordova, to enable easy cross-platform deployment of the application. I thoroughly enjoyed working on this application, because it allowed me to utilise my web-development knowledge in a different context for a different platform. It was also my first experience using TypeScript, and using a more complex build pipeline to support multiple platforms.</p>\\n<p>One of the interesting challenges I faced as the design lead was to produce a UI/UX that easily allowed the landlords to view their houses and not get lost in views or menus of their various houses. One main focus of the design was to ensure content and buttons did not move or change functionality. I was keen to use tab-based navigation as the crux of the application because this is a familiar design pattern and is instantly recognisable by users. However, I did not want the functionality of these tabs to change if say, a landlord clicked on a specific house. The solution to this was to take a filtering approach, so that landlords have a set of main tabs that display data across all of their properties (currently \'issues\' and \'tenants\'). By default they are unfiltered, showing data across all of their houses. At the top of the application view there is then a menu where the landlord can select a specific house, which will filter the tab data by said house.</p>\\n<p><img src=\\"/assets/Habitat/landlord-issue-feed.png\\" alt=\\"Habitat landlord homescreen\\" width=\\"230\\" height=\\"400\\" /></p>\\n<p>Unfortunately the team and I decided to discontinue developing this application due to time constraints amongst other universities, however we designed and developed it to be maintainable - so we can later pick it back up should we decide to.</p>","slug":"Habitat"},{"name":"Terrain Generation","tags":["C++","OpenGL"],"favourite":true,"last_updated":"5th Jan 2020","img":["/assets/TerrainGeneration/image1.png","/assets/TerrainGeneration/image2.png","/assets/TerrainGeneration/image3.png","/assets/TerrainGeneration/image4.png"],"tools":[{"label":"Git","icon":"/assets/Tools/git.png"},{"label":"VisualStudio","icon":"/assets/Tools/vs.png"},{"label":"C++","icon":"/assets/Tools/cplusplus.png"},{"label":"OpenGL","icon":"/assets/Tools/opengl.jpg"},{"label":"GLM","icon":"/assets/Tools/glm.png"}],"links":[{"label":"GitHub","url":"https://github.com/tobybessant/TerrainGeneration"},{"label":"YouTube Demo","url":"https://youtu.be/qH41VISRSoA?t=10"}],"bodyPath":"posts/terraingeneration.md","bodyContent":"<p>A lightweight terrain generator developed to explore the use of noise functions to generate height maps for terrain vertexes.</p>\\n<h3 id=\\"skillsdeveloped\\">Skills Developed</h3>\\n<ul>\\n<li>Use of an unmanaged language, C++.</li>\\n<li>Used OpenGL and associated libraries to produce realistic terrains.</li>\\n<li>Use of noise functions to seed pseudo-random value generation for a terrain height-map.</li>\\n<li>User input handling to allow users to interact with the application output.</li>\\n<li>Integration of <a href=\\"https://github.com/FastNoise\\">FastNoise</a> to apply height-map values to a grid of vertexes.</li>\\n<li>Applied my algorithms knowledge to generate fast and efficient vertex-updating functions to live-update the terrain on keypress events.</li>\\n</ul>\\n<h4 id=\\"additionalcomments\\">Additional Comments</h4>\\n<p>I thoroughly enjoyed producing this project, as it was my first application based aroud PCG - a topic I have been interested in exploring for some time. I am proud of how well it renders terrains, and that the user can alter any of the parameters used in the terrain generation process. The user can press certain keys to alter the terrain perameters during runtime, and see the terrain update immediately. One of the challenges with this was managing the system memory, as each time I regenerated the positional data it would use an increasing amount of memory. I overcame this by editing the existing vertex heights and simply re-loading it into the GPU buffer. This project taught me how I can be conscious of a system\'s memory &amp; how it can affect performance.</p>","slug":"TerrainGeneration"},{"name":"Portfolio Site","tags":["JavaScript","NodeJS","VueJS"],"last_updated":"22nd Feb 2020","img":["/assets/PortfolioSite/homepage.png"],"tools":[{"label":"Git","icon":"/assets/Tools/git.png"},{"label":"VueJS","icon":"/assets/Tools/vue.png"}],"links":[{"label":"GitHub","url":"https://github.com/tobybessant/tobybessant.github.io"}],"bodyPath":"posts/portfoliosite.md","bodyContent":"<h3 id=\\"skillsdeveloped\\">Skills Developed</h3>\\n<ul>\\n<li>Front end development, using VueJS to produce a client-side application.</li>\\n<li>SASS css to style reusable components.</li>\\n<li>Custom compile scripts to load project details content into html for rendering.</li>\\n</ul>\\n<h3 id=\\"additionalcomments\\">Additional Comments</h3>\\n<p>This project was developed as an update to my old portfolio site. My initial portfolio site was a static HTML/CSS/JS site, which prevented it from being easily extensible. Since then I have learned how to use modern JS frameworks such as VueJS &amp; Angular, which I knew would allow my website to be more maintainable. I chose to use VueJS for this site due to the fact that it is lightweight and fast to get up and running.</p>","slug":"PortfolioSite"},{"name":"Model Loader","tags":["C++","OpenGL"],"last_updated":"29th Nov 2019","img":["/assets/ModelLoader/image2.png","/assets/ModelLoader/image1.png"],"tools":[{"label":"Git","icon":"/assets/Tools/git.png"},{"label":"VisualStudio","icon":"/assets/Tools/vs.png"},{"label":"C++","icon":"/assets/Tools/cplusplus.png"},{"label":"OpenGL","icon":"/assets/Tools/opengl.jpg"},{"label":"GLM","icon":"/assets/Tools/glm.png"}],"links":[{"label":"GitHub","url":"https://github.com/tobybessant/ModelLoader"}],"bodyPath":"posts/modelloader.md","bodyContent":"<p>A console-driven model loader for rendering and viewing 3D models. Supports \'.obj\' and \'.dae\' files.</p>\\n<h3 id=\\"skillsdeveloped\\">Skills Developed</h3>\\n<ul>\\n<li>Use of an unmanaged language, C++.</li>\\n<li>Use of OpenGL and associated graphics libraries to render models from a file.</li>\\n<li>Algorithms, to enable fast file parsing to quickly load large sets of data.</li>\\n<li>Design patterns through the creation of an abstract loader interface for easy addition of new file types.</li>\\n</ul>\\n<h3 id=\\"additionalcomments\\">Additional Comments</h3>\\n<p>This project was my first C++ application, which came with its challenges. Working with an unmanaged language added complexities around memory manangement,\\nwhich became more challenging as the application grew. This became particularly important if the user loads larger files intno the application.</p>","slug":"ModelLoader"},{"name":"Keycard System","tags":["Java","OOP"],"last_updated":"4th Dec 2018","img":["/assets/UniversityRoomSystem/university-room-system-img1.png"],"tools":[{"label":"Git","icon":"/assets/Tools/git.png"},{"label":"Java","icon":"/assets/Tools/java.png"},{"label":"Netbeans","icon":"/assets/Tools/netbeans.png"}],"links":[{"label":"GitHub","url":"https://github.com/tobybessant/University-Room-System"}],"bodyPath":"posts/keycardsystem.md","bodyContent":"<p>An application developed to manage room access on a virtual university campus. Supports different roles that need to access rooms at different times, in addition to an \'Emergency\' mode that changes the room access states.</p>\\n<h3 id=\\"skillsdeveloped\\">Skills Developed</h3>\\n<ul>\\n<li>Object Oriented Programming</li>\\n<li>Design Patterns</li>\\n<li>Test Driven Development</li>\\n<li>Planning &amp; Design of Software</li>\\n</ul>\\n<h3 id=\\"additionalcomments\\">Additional Comments</h3>\\n<p>I am proud to say that I recieved 86% for this project. This project allowed me to understand the value of object orientated programming principles such as SOLID, and design patterns such as the observer pattern to communicate state updates, and the strategy pattern to change implementation at run time. I wrote unit tests for this project, however in the last year I can look back and say that my unit testing knowledge and process has improved greatly since this project.</p>","slug":"KeycardSystem"},{"name":"The Birthday","tags":["C#","Unity3D"],"last_updated":"15th Jan 2018","img":["/assets/TheBirthday/image.png"],"tools":[{"label":"Git","icon":"/assets/Tools/git.png"},{"label":"Unity","icon":"/assets/Tools/unity.jpg"},{"label":"3DSMax","icon":"/assets/Tools/3dsmax.png"}],"links":[{"label":"GitHub","url":"https://github.com/tobybessant/The-Birthday"}],"bodyPath":"posts/thebirthday.md","bodyContent":"<p>A narrative walking-simulator where you play as a detective\'s assistant in 1930\'s London. This was my most recent experience-based Unity project, focused around the environment modelling.</p>\\n<h3 id=\\"skillsdeveloped\\">Skills Developed</h3>\\n<ul>\\n<li>3D modelling using 3DSMax.</li>\\n<li>C# programming.</li>\\n<li>Development using the Unity3D game engine.</li>\\n</ul>","slug":"TheBirthday"}]}')},c9c2:function(e,t,n){"use strict";var a=n("07c5"),o=n.n(a);o.a},ce2f:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-nav"},[n("div",{staticClass:"nav-buttons"},[n("PageNavButton",{attrs:{location:"home",label:"Intro",exact:!0}}),n("PageNavButton",{attrs:{location:"projects",label:"Projects"}}),n("PageNavButton",{attrs:{location:"contact",label:"Contact"}}),n("PageNavButton",{attrs:{location:"about",label:"About"}})],1)])},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{attrs:{to:{name:e.location},exact:this.exact}},[e._v(" "+e._s(e.label)+" ")])},i=[],r={name:"PageNavButton",props:{label:String,location:String,exact:Boolean}},l=r,c=(n("946f"),n("2877")),u=Object(c["a"])(l,s,i,!1,null,"6ec484fc",null),d=u.exports,p={name:"PageNav",components:{PageNavButton:d}},h=p,m=(n("8513"),Object(c["a"])(h,a,o,!1,null,"2339c860",null));t["a"]=m.exports},d0fa:function(e,t,n){},d959:function(e,t,n){},e85c:function(e,t,n){},e9bb:function(e,t,n){"use strict";var a=n("d0fa"),o=n.n(a);o.a},ec0a:function(e,t,n){}});
//# sourceMappingURL=app.4be3bff2.js.map