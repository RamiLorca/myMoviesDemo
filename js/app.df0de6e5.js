(()=>{"use strict";var e={8945:(e,t,n)=>{n(6992),n(8674),n(9601),n(7727);var s=n(144),r=n(1096),a=n(3551),i=function(){var e=this,t=e._self._c;return t(r.Z,[t("nav-bar-2"),t(a.Z,[t("router-view")],1),t("Footer")],1)},o=[],c=n(1828),l=n(8322),u=n(5223),m=n(3584),v=n(5057),d=(n(3710),function(){var e=this,t=e._self._c;return t(m.Z,{attrs:{dark:"",padless:""}},[t(l.Z,{staticClass:"centered-content",attrs:{color:"#fe0d02",flat:"",title:"",width:"100%"}},[t(u.ZB,{staticClass:"icons"},e._l(e.icons,(function(n){return t(c.Z,{key:n,staticClass:"mx-4",attrs:{icon:""}},[t(v.Z,{attrs:{size:"24px"}},[e._v(" "+e._s(n)+" ")])],1)})),1),t(u.ZB,{staticClass:"centered-content"},[t("strong",[e._v("Ramiro Lorca "+e._s((new Date).getFullYear()))])])],1)],1)}),h=[];const f={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},g=f;var p=n(1001),_=(0,p.Z)(g,d,h,!1,null,"2901b891",null);const w=_.exports;var y=n(677),C=n(5234),b=function(){var e=this,t=e._self._c;return t("nav",[t(y.Z,{attrs:{app:"",color:"#fe0d02",dark:"",height:"100"}},[t("img",{attrs:{src:n(1049),id:"mainLogo"}}),t(c.Z,{staticClass:"ml-2",attrs:{text:"",to:"/"}},[e._v("Movies")]),t(c.Z,{staticClass:"ml-2",attrs:{text:"",to:"/genres"}},[e._v("Genres")]),t(c.Z,{staticClass:"ml-2",attrs:{text:"",to:"/watchlist"}},[e._v("WatchList")]),t(C.Z)],1)],1)},x=[];const k={},Z=k;var P=(0,p.Z)(Z,b,x,!1,null,"5ef8282e",null);const M=P.exports,S={components:{NavBar2:M,Footer:w},name:"App",mounted:function(){document.title="myMovies"},data:function(){return{}}},O=S;var T=(0,p.Z)(O,i,o,!1,null,null,null);const W=T.exports;n(5212),n(1539);var D=n(8345),E=(n(8862),n(629)),L=n(9669),U=n.n(L);s.ZP.use(E.ZP);var I=localStorage.getItem("token"),A=JSON.parse(localStorage.getItem("user"));null!=I&&(U().defaults.headers.common.Authorization="Bearer ".concat(I));const R=new E.ZP.Store({state:{token:I||"",user:A||{},movies:[],currentMovieIndex:Math.floor(20*Math.random())},mutations:{SET_AUTH_TOKEN:function(e,t){e.token=t,localStorage.setItem("token",t),U().defaults.headers.common.Authorization="Bearer ".concat(t)},SET_USER:function(e,t){e.user=t,localStorage.setItem("user",JSON.stringify(t))},LOGOUT:function(e){localStorage.removeItem("token"),localStorage.removeItem("user"),e.token="",e.user={},U().defaults.headers.common={}},SET_MOVIES:function(e,t){e.movies=t},SET_CURRENT_MOVIE_INDEX:function(e,t){e.currentMovieIndex=t}},actions:{getMoviesByGenre:function(e,t){var n=e.commit;return U().get("/genre/".concat(t)).then((function(e){n("SET_MOVIES",e.data)}))}}});var B=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"100%"}},[t("MovieCarousel2")],1)},j=[],F=n(2755),N=n(6714),z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-carousel-container"},[e.isLoading?e._e():t(F.Z,{ref:"customCarousel",staticClass:"custom-carousel",attrs:{"hide-delimiters":"","show-arrows":"",height:"auto"},on:{change:e.navigationHandler}},e._l(this.movies,(function(n,s){return t(N.Z,{key:s,staticClass:"custom-carousel-item",attrs:{cover:""}},[t("div",{staticClass:"movie-info"},[t("div",{staticClass:"img-box"},[t("img",{staticClass:"movie-poster",attrs:{src:n.img_url}})]),t("div",{staticClass:"title-and-summary"},[t("h1",{staticClass:"mt-5 grey--text text--darken-3",attrs:{id:"movie-title"}},[e._v(e._s(n.movie_title))]),t("p",{staticClass:"mt-5 grey--text text--darken-3 subheader"},[e._v(e._s(n.movie_overview))]),t(c.Z,{attrs:{variant:"tonal"},on:{click:e.wantToWatch}},[e._v("Add to Watchlist")])],1)])])})),1),e.isLoading?t("pulse-loader",{attrs:{loading:e.loading,color:e.color,margin:e.margin}}):e._e()],1)},q=[];const H={addMovie:function(e){return U().post("/movies/add",e)},deleteMovie:function(e){return U()["delete"]("movies/delete/".concat(e))},getMoviesByPreferences:function(){return U().get("/movies/preferences")},getMoviesById:function(e){return U().get("/movies/".concat(e))},getWatchedMovies:function(){return U().get("/movies/watched")},getWantToWatchMovies:function(){return U().get("/movies/want-to-watch")},getRatings:function(){return U().get("/movies/movie-rating")}};var $=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"v-spinner"},[t("div",{staticClass:"v-pulse v-pulse1",style:[e.spinnerStyle,e.spinnerDelay1]}),t("div",{staticClass:"v-pulse v-pulse2",style:[e.spinnerStyle,e.spinnerDelay2]}),t("div",{staticClass:"v-pulse v-pulse3",style:[e.spinnerStyle,e.spinnerDelay3]})])},G=[];const V={name:"PulseLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#EF5350"},size:{type:String,default:"15px"},margin:{type:String,default:"10px"},radius:{type:String,default:"100%"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,width:this.size,height:this.size,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-pulseStretchDelay",animationDuration:"0.75s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.12s"},spinnerDelay2:{animationDelay:"0.24s"},spinnerDelay3:{animationDelay:"0.36s"}}}},J=V;var Y=(0,p.Z)(J,$,G,!1,null,null,null);const K=Y.exports,X={components:{PulseLoader:K},data:function(){return{movies:[],isLoading:!0,current:0,show:!1}},computed:{currentMovie:function(){return this.movies[this.$store.state.currentMovieIndex]||null}},mounted:function(){var e=this;H.getMoviesByPreferences().then((function(t){t.data.length>0&&(e.movies=t.data),e.isLoading=!1}))},methods:{wantToWatch:function(){this.movies[this.current].want_to_watch=!0,H.addMovie(this.movies[this.current]).then((function(e){200==e.status&&console.log("Movie Added to WatchList")}))},navigationHandler:function(e){this.current=e}}},Q=X;var ee=(0,p.Z)(Q,z,q,!1,null,"4441acc8",null);const te=ee.exports,ne={name:"Home2",components:{MovieCarousel2:te}},se=ne;var re=(0,p.Z)(se,B,j,!1,null,null,null);const ae=re.exports;var ie=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"selector-box"},[t("preferences-selectors",{attrs:{"genre-preferences":e.genrePreferences},on:{"update:genrePreferences":function(t){e.genrePreferences=t},"update:genre-preferences":function(t){e.genrePreferences=t},checkboxToggled:e.onCheckBoxToggled}})],1)])},oe=[],ce=n(1907),le=n(5617);const ue={updatePreferences:function(e){return U().put("/preferences/update",e)},getUserPreferences:function(e){return U().get("/preferences/".concat(e))}};n(8309);var me=function(){var e=this,t=e._self._c;return t("div",{staticClass:"selectors"},e._l(e.genres,(function(n){return t("label",{key:n.name,staticClass:"checkbox-container",attrs:{for:n.name}},[t("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",name:n.name,id:n.name},domProps:{checked:e.isChecked(n.name)},on:{change:function(t){return e.onCheckboxChange(n.name)}}}),t("div",{staticClass:"checkbox-square",class:{"checked-image1":e.isChecked(n.name),"checked-image2":!e.isChecked(n.name)}},[t("div",{staticClass:"checkbox-image"},[e.isChecked(n.name)?t("img",{staticStyle:{"object-fit":"contain",width:"100%",height:"100%"},attrs:{src:n.imageChecked,alt:n.name}}):t("img",{staticStyle:{"object-fit":"contain",width:"100%",height:"100%"},attrs:{src:n.imageUnchecked,alt:n.name+"2"}})])]),t("label",{staticClass:"movie-label custom-text",attrs:{for:n.name}},[e._v(e._s(n.label))])])})),0)},ve=[],de=n(4503),he=n(6080);const fe={name:"preferences-selectors",props:{genrePreferences:Object},data:function(){return{genres:[{name:"wants_action",label:"Action",imageChecked:n(6523),imageUnchecked:n(4614)},{name:"wants_adventure",label:"Adventure",imageChecked:n(6321),imageUnchecked:n(3308)},{name:"wants_comedy",label:"Comedy",imageChecked:n(794),imageUnchecked:n(8460)},{name:"wants_drama",label:"Drama",imageChecked:n(5343),imageUnchecked:n(4211)},{name:"wants_family",label:"Family",imageChecked:n(6734),imageUnchecked:n(1921)},{name:"wants_horror",label:"Horror",imageChecked:n(801),imageUnchecked:n(8272)},{name:"wants_romance",label:"Romance",imageChecked:n(6186),imageUnchecked:n(3578)},{name:"wants_scifi",label:"Sci-Fi",imageChecked:n(5675),imageUnchecked:n(1484)},{name:"wants_thriller",label:"Thriller",imageChecked:n(7531),imageUnchecked:n(233)}]}},methods:{isChecked:function(e){return this.genrePreferences&&this.genrePreferences[e]},onCheckboxChange:function(e){this.$emit("update:genrePreferences",(0,he.Z)((0,he.Z)({},this.genrePreferences),{},(0,de.Z)({},e,!this.isChecked(e)))),this.$emit("checkboxToggled")}}},ge=fe;var pe=(0,p.Z)(ge,me,ve,!1,null,"a933a60a",null);const _e=pe.exports,we={name:"genres",components:{PreferencesSelectors:_e},data:function(){return{genrePreferences:{}}},created:function(){var e=this;return(0,le.Z)((0,ce.Z)().mark((function t(){var n;return(0,ce.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ue.getUserPreferences(1);case 3:n=t.sent,e.genrePreferences=n.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error("Error fetching genre preferences:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{onCheckBoxToggled:function(){this.savePreferences()},savePreferences:function(){var e=!this.genrePreferences.wants_action&&!this.genrePreferences.wants_adventure&&!this.genrePreferences.wants_comedy&&!this.genrePreferences.wants_drama&&!this.genrePreferences.wants_horror&&!this.genrePreferences.wants_romance&&!this.genrePreferences.wants_scifi&&!this.genrePreferences.wants_thriller&&!this.genrePreferences.wants_family;if(e){var t={user_id:1,wants_action:!0,wants_adventure:!0,wants_comedy:!0,wants_drama:!0,wants_horror:!0,wants_romance:!0,wants_scifi:!0,wants_thriller:!0,wants_family:!0};ue.updatePreferences(t).then((function(e){console.log(e.data)}))["catch"]((function(e){console.error("Error updating genre preferences:",e)}))}else{var n={user_id:1,wants_action:this.genrePreferences.wants_action||!1,wants_adventure:this.genrePreferences.wants_adventure||!1,wants_comedy:this.genrePreferences.wants_comedy||!1,wants_drama:this.genrePreferences.wants_drama||!1,wants_horror:this.genrePreferences.wants_horror||!1,wants_romance:this.genrePreferences.wants_romance||!1,wants_scifi:this.genrePreferences.wants_scifi||!1,wants_thriller:this.genrePreferences.wants_thriller||!1,wants_family:this.genrePreferences.wants_family||!1};ue.updatePreferences(n).then((function(e){console.log(e.data)}))["catch"]((function(e){console.error("Error updating genre preferences:",e)}))}}},watch:{genrePreferences:{handler:function(){this.savePreferences()},deep:!0}}},ye=we;var Ce=(0,p.Z)(ye,ie,oe,!1,null,"0972c4b0",null);const be=Ce.exports;var xe=function(){var e=this,t=e._self._c;return t("div",[t("saved-movies")],1)},ke=[],Ze=n(4437),Pe=n(6035),Me=n(7166),Se=n(3296),Oe=n(2469),Te=n(5294),We=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mx-3"},[t("h2",{staticClass:"mt-2 grey--text",staticStyle:{"margin-left":"10px"}},[e._v("Your Saved Movies")]),t(Pe.Z,{attrs:{fluid:""}},[t(Te.Z,e._l(e.wantToWatchMovies,(function(n){return t(Ze.Z,{key:n.movie_id,attrs:{cols:"12",sm:"3"}},[t(Se.Z,{attrs:{"open-delay":"100"},scopedSlots:e._u([{key:"default",fn:function(s){var r=s.hover;return[t(l.Z,{class:{"on-hover":r},attrs:{elevation:r?16:2},on:{click:function(t){return e.showMovieDetails(n)}}},[t(Oe.Z,{staticClass:"movie-image",attrs:{src:n.img_url,alt:""}}),t("div",{staticStyle:{"min-width":"0"}},[t(u.EB,{staticClass:"subtitle-2"},[t("div",{staticClass:"ellipsis-title"},[e._v(e._s(n.movie_title))])])],1)],1)]}}],null,!0)})],1)})),1)],1),t("transition",{attrs:{name:"fade"}},[t(Me.Z,{attrs:{persistent:"","max-width":"800"},model:{value:e.showOverlay,callback:function(t){e.showOverlay=t},expression:"showOverlay"}},[t(l.Z,{staticClass:"movie-card-overlay"},[e.selectedMovie?t("MovieCard",{attrs:{movie:e.selectedMovie},on:{close:e.closeOverlay,movieRemoved:e.onMovieRemoved}}):e._e(),t(u.h7,[t(c.Z,{attrs:{icon:""},on:{click:function(t){e.showOverlay=!1}}},[t(v.Z,[e._v("mdi-close")])],1)],1)],1)],1)],1)],1)},De=[],Ee=function(){var e=this,t=e._self._c;return t(l.Z,[t("div",{staticClass:"movie-info"},[t("div",{staticClass:"img-box"},[t("img",{staticClass:"movie-poster",attrs:{src:e.movie.img_url}})]),t("div",{staticClass:"title-and-summary"},[t("h1",{staticClass:"mt-5 grey--text text--darken-3",attrs:{id:"movie-title"}},[e._v(e._s(e.movie.movie_title))]),t("p",{staticClass:"mt-5 grey--text text--darken-3 subheader"},[e._v(e._s(e.movie.movie_overview))]),t("div",{staticClass:"removal-buttons"},[e.showConfirmation?t("div",{staticClass:"are-you-sure-prompt"},[t("p",[e._v("Are you sure?")]),t("div",{staticClass:"yes-or-no"},[t(c.Z,{staticClass:"red lighten-1 white--text",on:{click:e.removeFromList}},[e._v("Remove")]),t(c.Z,{staticClass:"blue--text",attrs:{text:"",small:""},on:{click:function(t){e.showConfirmation=!1}}},[e._v("Cancel")])],1)]):t("div",[t(c.Z,{attrs:{variant:"tonal"},on:{click:function(t){e.showConfirmation=!0}}},[e._v("Remove From Watchlist")])],1)])])])])},Le=[];const Ue={name:"MovieCard",props:{movie:Object},data:function(){return{showConfirmation:!1}},methods:{removeFromList:function(){var e=this;H.deleteMovie(this.movie.movie_id).then((function(t){200==t.status&&e.$emit("movieRemoved")}))}}},Ie=Ue;var Ae=(0,p.Z)(Ie,Ee,Le,!1,null,"f433912a",null);const Re=Ae.exports,Be={data:function(){return{wantToWatchMovies:[],showOverlay:!1,selectedMovie:null}},components:{MovieCard:Re},mounted:function(){this.fetchWantToWatchMovies()},methods:{fetchWantToWatchMovies:function(){var e=this;H.getWantToWatchMovies().then((function(t){200==t.status&&(e.wantToWatchMovies=t.data)}))},showMovieDetails:function(e){this.selectedMovie=e,this.showOverlay=!0},closeOverlay:function(){this.selectedMovie=null,this.showOverlay=!1},onMovieRemoved:function(){this.showOverlay=!1,this.fetchWantToWatchMovies()}}},je=Be;var Fe=(0,p.Z)(je,We,De,!1,null,"3b3c71fd",null);const Ne=Fe.exports,ze={name:"WatchList",components:{SavedMovies:Ne}},qe=ze;var He=(0,p.Z)(qe,xe,ke,!1,null,null,null);const $e=He.exports;s.ZP.use(D.ZP);var Ge=new D.ZP({mode:"history",base:"/myMoviesDemo/",routes:[{path:"/",name:"Home2",component:ae,meta:{requiresAuth:!1}},{path:"/genres",name:"Genres",component:be,meta:{requiresAuth:!1}},{path:"/watchlist",name:"WatchList",component:$e,meta:{requiresAuth:!1}},{path:"/watchlist/:movieId",name:"MovieDetails",component:Re,meta:{requiresAuth:!1}}]});Ge.beforeEach((function(e,t,n){var s=e.matched.some((function(e){return e.meta.requiresAuth}));s&&""===R.state.token?n("/login"):n()}));const Ve=Ge;var Je=n(6605),Ye=n(5685),Ke=n.n(Ye);s.ZP.use(Je.Z),s.ZP.use(Ke());const Xe=new Je.Z({icons:{iconfont:"md"}});s.ZP.config.productionTip=!1,U().defaults.baseURL="https://mymoviesbackend-production.up.railway.app/",new s.ZP({router:Ve,store:R,vuetify:Xe,render:function(e){return e(W)}}).$mount("#app")},4614:(e,t,n)=>{e.exports=n.p+"img/action-black.625220bf.svg"},6523:(e,t,n)=>{e.exports=n.p+"img/action-white.a775d6e2.svg"},3308:(e,t,n)=>{e.exports=n.p+"img/adventure-grey.0db4aa90.svg"},6321:(e,t,n)=>{e.exports=n.p+"img/adventure-white.4d48d1d5.svg"},8460:(e,t,n)=>{e.exports=n.p+"img/comedy-grey.8b0bb044.svg"},794:(e,t,n)=>{e.exports=n.p+"img/comedy-white.e18d18a6.svg"},4211:(e,t,n)=>{e.exports=n.p+"img/drama-grey.247c021b.svg"},5343:(e,t,n)=>{e.exports=n.p+"img/drama-white.69e8d32d.svg"},1921:(e,t,n)=>{e.exports=n.p+"img/family-grey.09cb1bf0.svg"},6734:(e,t,n)=>{e.exports=n.p+"img/family-white.3d61d3c7.svg"},8272:(e,t,n)=>{e.exports=n.p+"img/horror-grey.88cbc458.svg"},801:(e,t,n)=>{e.exports=n.p+"img/horror-white.be1d0aad.svg"},3578:(e,t,n)=>{e.exports=n.p+"img/romance-grey.7168f85d.svg"},6186:(e,t,n)=>{e.exports=n.p+"img/romance-white.9cc7ff2c.svg"},1484:(e,t,n)=>{e.exports=n.p+"img/scifi-grey.def61d37.svg"},5675:(e,t,n)=>{e.exports=n.p+"img/scifi-white.e84e501b.svg"},233:(e,t,n)=>{e.exports=n.p+"img/thriller-grey.36284c74.svg"},7531:(e,t,n)=>{e.exports=n.p+"img/thriller-white.44380e67.svg"},1049:(e,t,n)=>{e.exports=n.p+"img/myMoviesLogo.033e36cf.png"}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,s,r,a)=>{if(!s){var i=1/0;for(u=0;u<e.length;u++){for(var[s,r,a]=e[u],o=!0,c=0;c<s.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](s[c])))?s.splice(c--,1):(o=!1,a<i&&(i=a));if(o){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[s,r,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/myMoviesDemo/"})(),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var r,a,[i,o,c]=s,l=0;if(i.some((t=>0!==e[t]))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(c)var u=c(n)}for(t&&t(s);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},s=self["webpackChunkfinal_vue_capstone_seed"]=self["webpackChunkfinal_vue_capstone_seed"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var s=n.O(void 0,[998],(()=>n(8945)));s=n.O(s)})();
//# sourceMappingURL=app.df0de6e5.js.map