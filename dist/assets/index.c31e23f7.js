var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,l=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(i)for(var a of i(t))n.call(t,a)&&o(e,a,t[a]);return e},d=(e,i)=>t(e,a(i));import{r,w as c,d as p,o as v,c as u,a as m,i as g,p as _,b as h,e as f,f as y,g as x,h as I,t as T,F as k,j as M,k as b,l as S,m as C,n as w,q as O,s as P,u as D,T as E,v as L,x as N,y as V,z as R,A as j,B as G}from"./vendor.3a3ae64a.js";const A=e=>{e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};var F=p({name:"TogglerButton",props:{dataTestId:{type:String,required:!1,default:"checkbox"},defaultValue:{type:Boolean,default:!1}},emits:["onChange"],setup:(e,{emit:t})=>({onChange:e=>{const{checked:a}=e.target;t("onChange",a)}})});const q=m("span",{class:"toggler-button__slider"},null,-1);F.render=function(e,t){return v(),u("label",{for:e.dataTestId,class:"toggler-button"},[m("input",{id:e.dataTestId,type:"checkbox","data-test-id":e.dataTestId,checked:e.defaultValue,onInput:t[1]||(t[1]=t=>e.onChange(t))},null,40,["id","data-test-id","checked"]),q],8,["for"])};var B=p({name:"Header",components:{TogglerButton:F},setup:()=>({toggleDarkMode:g("setDarkMode")||(()=>{}),isDarkMode:g("isDarkMode")})});const W=y();_("data-v-0c885f4d");const Z={class:"header","data-test-id":"header"};h();const H=W(((e,t,a,i,s,n)=>{const o=f("toggler-button");return v(),u("div",Z,[m(o,{"default-value":e.isDarkMode,onOnChange:e.toggleDarkMode},null,8,["default-value","onOnChange"])])}));B.render=H,B.__scopeId="data-v-0c885f4d";const K=[{id:3,title:"Comedy"},{id:8,title:"Western"},{id:2,title:"Drama"},{id:6,title:"Romance"},{id:10,title:"Crime"},{id:11,title:"Action"},{id:12,title:"Adventure"},{id:13,title:"Sci-Fi"}],U=[{id:0,title:"Movie"},{id:1,title:"Series"}];var z,J;(J=z||(z={}))[J.MOVIE=0]="MOVIE",J[J.SERIES=1]="SERIES";var $=p({name:"MoviesItem",props:{movie:{type:Object,required:!0},selectedGenre:{type:Object,default:()=>({})},selectedShowType:{type:Object,default:()=>({})}},setup:e=>({year:x((()=>I(e.movie.release_date).getFullYear())),isTypeSelected:x((()=>{const t=e.movie.is_series?z.SERIES:z.MOVIE;return e.selectedShowType[t]}))})});const Q=y();_("data-v-7aeff50d");const Y={class:"movie","data-test-id":"movie"},X={class:"movie__item"},ee={class:"movie__item__title","data-test-id":"movie-title"},te={class:"movie__item__year","data-test-id":"movie-year"},ae={class:"movie__item__actors","data-test-id":"movie-cast"},ie=b(", "),se={class:"movie__item__genre","data-test-id":"movie-genre"};h();const ne=Q(((e,t,a,i,s,n)=>(v(),u("div",Y,[m("div",X,[m("h2",ee,T(e.movie.title),1),m("div",null,[m("div",{class:["movie__item__type",{"movie__item__type--active ":e.isTypeSelected}],"data-test-id":"movie-type"},T(e.movie.is_series?"Series":"Movie"),3),m("div",te,T(e.year),1)]),m("p",ae,[(v(!0),u(k,null,M(e.movie.actors,((t,a)=>(v(),u("span",{key:t.id},[b(T(t.name)+" ",1),a!==e.movie.actors.length-1?(v(),u(k,{key:0},[ie],64)):S("",!0)])))),128))]),m("div",se,[(v(!0),u(k,null,M(e.movie.genre,(t=>(v(),u("div",{key:t.id,class:["movie__item__genre__item",{"movie__item__genre__item--active":e.selectedGenre[t.id]}]},T(t.title),3)))),128))])])]))));$.render=ne,$.__scopeId="data-v-7aeff50d";var oe=p({name:"MovieList",components:{MovieItem:$},props:{movies:{type:Array,default:()=>[]},selectedGenreMap:{type:Object,default:()=>({})},selectedShowTypeMap:{type:Object,default:()=>({})}}});const le=y();_("data-v-6207c0c4");const de={class:"movie-list","data-test-id":"movie-list"};h();const re=le(((e,t,a,i,s,n)=>{const o=f("MovieItem");return v(),u("div",de,[(v(!0),u(k,null,M(e.movies,(t=>(v(),u("div",{key:t.id,class:"movie-list__item"},[m(o,{movie:t,"selected-genre":e.selectedGenreMap,"selected-show-type":e.selectedShowTypeMap},null,8,["movie","selected-genre","selected-show-type"])])))),128))])}));oe.render=re,oe.__scopeId="data-v-6207c0c4";var ce=p({name:"Pagination",components:{ChevronLeftIcon:C,ChevronRightIcon:w},props:{pageIndex:{type:Number,default:()=>0},hasNext:{type:Boolean,required:!0}},emits:["onNext","onPrev"],setup:(e,{emit:t})=>({handlePrev:()=>{e.pageIndex>0&&t("onPrev")},handleNext:()=>{e.hasNext&&t("onNext")}})});const pe=y();_("data-v-7ab7fd23");const ve={class:"pagination"},ue={class:"pagination__number","data-test-id":"pagination-number"};h();const me=pe(((e,t,a,i,s,n)=>{const o=f("ChevronLeftIcon"),l=f("ChevronRightIcon");return v(),u("div",ve,[m("button",{class:["pagination__prev",{"pagination__prev--disabled":0===e.pageIndex}],"data-test-id":"pagination-prev",onClick:t[1]||(t[1]=(...t)=>e.handlePrev&&e.handlePrev(...t))},[m(o,{class:"h-8 w-8 dark:text-gray-100"})],2),m("div",ue,T(e.pageIndex+1),1),m("button",{class:["pagination__next",{"pagination__next--disabled":!e.hasNext}],"data-test-id":"pagination-next",onClick:t[2]||(t[2]=(...t)=>e.handleNext&&e.handleNext(...t))},[m(l,{class:"h-8 w-8 dark:text-gray-100"})],2)])}));ce.render=me,ce.__scopeId="data-v-7ab7fd23";var ge=p({name:"Input",props:{dataTestId:{type:String,required:!1,default:"input"}}});ge.render=function(e,t,a,i,s,n){return v(),u("input",{class:"input","data-test-id":e.dataTestId},null,8,["data-test-id"])};const _e=O.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});var he=async e=>await _e.post("/movies",e);const fe=e=>e.reduce(((e,t)=>d(l({},e),{[t]:!0})),{});var ye=p({name:"Toggle",props:{dataTestId:{type:String,required:!1,default:"toggle"},shouldCloseOnListClick:{type:Boolean,required:!1,default:!1}},setup(e){const t=r(null),a=r(!1),i=r({left:"0px",top:"0px"});return{isOpen:a,overlayClicked:()=>{a.value=!1},toggle:()=>{a.value||(i.value=(e=>{var t,a;const{x:i,y:s,height:n}=null!=(a=null==(t=e.value)?void 0:t.getBoundingClientRect())?a:{x:0,y:0,height:0};return{left:String(i)+"px",top:String(s+n)+"px"}})(t)),a.value=!a.value},toggler:t,position:i,listClicked:t=>{e.shouldCloseOnListClick||t.stopPropagation()}}}});const xe=y();_("data-v-aa4bff7a");const Ie={ref:"toggler"},Te={key:0};h();const ke=xe(((e,t,a,i,s,n)=>(v(),u("div",{"data-test-id":e.dataTestId,onClick:t[3]||(t[3]=(...t)=>e.toggle&&e.toggle(...t))},[m("div",Ie,[D(e.$slots,"toggler",{active:e.isOpen},void 0,!0)],512),e.isOpen?(v(),u("div",Te,[(v(),u(E,{to:"body"},[m("div",{class:"overlay","data-test-id":"overlay",onClick:t[2]||(t[2]=(...t)=>e.overlayClicked&&e.overlayClicked(...t))},[m("div",{class:"absolute",style:e.position,onClick:t[1]||(t[1]=(...t)=>e.listClicked&&e.listClicked(...t))},[D(e.$slots,"list",{},void 0,!0)],4)])]))])):S("",!0)],8,["data-test-id"]))));ye.render=ke,ye.__scopeId="data-v-aa4bff7a";var Me=p({name:"FilterSelect",components:{Toggle:ye,ChevronDownIcon:L},props:{dataTestId:{type:String,required:!1,default:"filter"},title:{type:String,required:!0},options:{type:Array,required:!0},modelValue:{type:Array,default:()=>[]},selectedMap:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup:(e,{emit:t})=>({handleOptionClick:a=>{const i=e.modelValue.indexOf(a.id);t("update:modelValue",-1!==i?[...e.modelValue.slice(0,i),...e.modelValue.slice(i+1)]:[...e.modelValue,a.id])}})});const be=y(),Se=be(((e,t,a,i,s,n)=>{const o=f("ChevronDownIcon"),l=f("Toggle");return v(),u(l,null,{toggler:be((({active:t})=>[m("button",{class:["filter-button",{"filter-button--active":t}],"data-test-id":e.dataTestId},[b(T(e.title)+" ",1),m(o,{class:["h-5 w-5",{"transform rotate-180":t}]},null,8,["class"])],10,["data-test-id"])])),list:be((()=>[m("div",{class:"filter-list","data-test-id":e.dataTestId+"-list"},[(v(!0),u(k,null,M(e.options,(t=>(v(),u("div",{key:t.id,class:[{"filter-list__item--active":e.selectedMap[t.id]},"filter-list__item"],"data-test-id":e.dataTestId+"-list-item",onClick:a=>e.handleOptionClick(t)},T(t.title),11,["data-test-id","onClick"])))),128))],8,["data-test-id"])])),_:1})}));Me.render=Se,Me.__scopeId="data-v-36b01989";var Ce=p({name:"MoviesPage",components:{Input:ge,MovieList:oe,FilterSelect:Me,Pagination:ce},setup:()=>{const{movies:e,hasNext:t,isLoading:a,fetchMovies:i}=function(e){const t=r(!0),a=r([]),i=r(!1),s=async s=>{t.value=!0,console.log("[NETWORK:GET_MOVIES:REQUEST]:",s);const{data:n}=await he(d(l({},s),{perPage:e}));console.log("[NETWORK:GET_MOVIES:RESPONSE]:",n),a.value=n.list,i.value=n.hasNext,t.value=!1};return P((async()=>{await s({pageIndex:0,perPage:e})})),{movies:a,isLoading:t,hasNext:i,fetchMovies:s}}(6),s=r([]),n=r([]),o=x((()=>fe(s.value))),p=x((()=>fe(n.value))),v=r(""),u=N(v,1e3),m=r(0);return c([s,n,u],(()=>{0===m.value?i({filters:{genre:s.value,showType:n.value},search:u.value,pageIndex:0}):m.value=0})),c([m],(()=>{i({filters:{genre:s.value,showType:n.value},search:u.value,pageIndex:m.value})})),{isLoading:a,movies:e,hasNext:t,handleInputSearch:e=>{v.value=e.target.value||""},selectedGenre:s,genreOptions:K,selectedType:n,selectedGenreMap:o,showTypeOptions:U,selectedShowTypeMap:p,pageIndex:m}}});const we=y();_("data-v-045e5720");const Oe={class:"movies-page","data-test-id":"movies-page"},Pe={class:"movies-page__search"},De={class:"movies-page__filters"},Ee={class:"movies-page__movie-list"},Le={key:0,"data-test-id":"movie-list-loading",class:"movies-page__movie-list__info-text"},Ne={key:1,"data-test-id":"movie-list-not-found",class:"movies-page__movie-list__info-text"};h();const Ve=we(((e,t)=>{const a=f("Input"),i=f("FilterSelect"),s=f("MovieList"),n=f("Pagination");return v(),u("div",Oe,[m("div",Pe,[m(a,{type:"text",placeholder:"Search",onInput:e.handleInputSearch},null,8,["onInput"])]),m("div",De,[m(i,{modelValue:e.selectedGenre,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedGenre=t),options:e.genreOptions,title:"Genre","selected-map":e.selectedGenreMap,"data-test-id":"genre-filter"},null,8,["modelValue","options","selected-map"]),m(i,{modelValue:e.selectedType,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedType=t),options:e.showTypeOptions,title:"Type","selected-map":e.selectedShowTypeMap,"data-test-id":"type-filter"},null,8,["modelValue","options","selected-map"])]),m("div",Ee,[e.isLoading?(v(),u("div",Le," Loading Please Wait ")):S("",!0),e.isLoading||0!==e.movies.length?S("",!0):(v(),u("div",Ne," No Results Found ")),!e.isLoading&&e.movies.length>0?(v(),u(s,{key:2,movies:e.movies,"selected-genre-map":e.selectedGenreMap,"selected-show-type-map":e.selectedShowTypeMap},null,8,["movies","selected-genre-map","selected-show-type-map"])):S("",!0)]),m(n,{"page-index":e.pageIndex,"has-next":e.hasNext,onOnNext:t[3]||(t[3]=t=>e.pageIndex=e.pageIndex+1),onOnPrev:t[4]||(t[4]=t=>e.pageIndex=e.pageIndex-1)},null,8,["page-index","has-next"])])}));Ce.render=Ve,Ce.__scopeId="data-v-045e5720";var Re=p({name:"MainPage",components:{Header:B,MoviesPage:Ce},setup:()=>{const{isDarkMode:e,toggleDarkMode:t}=function(){let e;const t=window.matchMedia("(prefers-color-scheme: dark)").matches,a=localStorage.getItem("isDarkMode");e=a?"true"===a:!!t;const i=r(e);return A(i.value),c(i,(e=>{A(e)})),{toggleDarkMode:()=>{localStorage.setItem("isDarkMode",String(!i.value)),i.value=!i.value},isDarkMode:i}}();V("isDarkMode",e.value),V("setDarkMode",t)}});const je={class:"flex flex-col min-h-screen","data-test-id":"main-page"};Re.render=function(e,t,a,i,s,n){const o=f("Header"),l=f("MoviesPage");return v(),u("div",je,[m(o),m(l)])};var Ge=p({name:"App",components:{MainPage:Re}});Ge.render=function(e,t,a,i,s,n){const o=f("MainPage");return v(),u(o)};var Ae=[{id:0x246924b00021a00,title:"An American Tail: Fievel Goes West",genre:[{id:3,title:"Comedy"},{id:8,title:"Western"}],actors:[{id:0x246919300021200,name:"Fievel Mousekewitz"},{id:0x24691b600021400,name:"Tanya MouseKewitz"}],is_series:!0,release_date:"1991-11-17T00:00:00.000000Z"},{id:0x24694df00021c00,title:"The Notebook",genre:[{id:2,title:"Drama"},{id:6,title:"Romance"}],actors:[{id:0x24694ed00021e00,name:"Ryan Gosling"},{id:0x24694f100022000,name:"Rachel McAdams"}],is_series:!1,release_date:"2004-06-25T00:00:00.000000Z"},{id:0x24694df000218e0,title:"The Shawshank Redemption",genre:[{id:2,title:"Drama"}],actors:[{id:0x24694f100022060,name:"Morgan Freeman"},{id:0x24694f100021f80,name:"Tim Robbins"}],is_series:!1,release_date:"1994-06-25T00:00:00.000000Z"},{id:0x24694df000218e0,title:"Forrest Gump",genre:[{id:2,title:"Drama"},{id:6,title:"Romance"}],actors:[{id:0x24694f100022060,name:"Tom Hanks"}],is_series:!1,release_date:"1994-06-25T00:00:00.000000Z"},{id:0x24694df000218e0,title:"Fight Club",genre:[{id:2,title:"Drama"}],actors:[{id:0x24694f100022060,name:"Brat Pitt"},{id:0x24694f100022060,name:"Edward Norton"}],is_series:!1,release_date:"1999-06-25T00:00:00.000000Z"},{id:0x24694df000218e0,title:"Pulp Fiction",genre:[{id:2,title:"Drama"},{id:10,title:"Crime"}],actors:[{id:0x24694f100022060,name:"John Travolta"},{id:0x24694f100022060,name:"Bruce Willis"},{id:0x24694f100022060,name:"Samuel L. Jackson"}],is_series:!1,release_date:"1994-06-25T00:00:00.000000Z"},{id:0x24694df00021900,title:"Inception",genre:[{id:11,title:"Action"},{id:12,title:"Adventure"},{id:13,title:"Sci-Fi"}],actors:[{id:0x24694f100022060,name:"Leonardo DiCaprio"},{id:0x24694f100022060,name:"Tom Hardy"}],is_series:!1,release_date:"2010-06-25T00:00:00.000000Z"},{id:0x24694df00021900,title:"The Dark Knight",genre:[{id:11,title:"Action"},{id:10,title:"Crime"},{id:2,title:"Drama"}],actors:[{id:0x24694f100022060,name:"Christian Bale"},{id:0x24694f100022060,name:"Heath Ledger"}],is_series:!1,release_date:"2008-06-25T00:00:00.000000Z"},{id:0x24694df00021900,title:"Interstellar",genre:[{id:12,title:"Adventure"},{id:13,title:"Sci-Fi"},{id:2,title:"Drama"}],actors:[{id:0x24694f100022060,name:"Matthew McConaughey"},{id:0x24694f100022060,name:"Anne Hathaway"}],is_series:!1,release_date:"2014-06-25T00:00:00.000000Z"}];const Fe=j(...[R.post("**/api/movies",((e,t,a)=>{var i,s,n,o;const{filters:l,search:d,perPage:r=1,pageIndex:c=0}=e.body;let p=Ae;if(null!=l?l:d){const e=null!=(s=null==(i=null==l?void 0:l.showType)?void 0:i.includes(z.SERIES))&&s,t=null!=(o=null==(n=null==l?void 0:l.showType)?void 0:n.includes(z.MOVIE))&&o;p=Ae.filter((a=>{var i;let s=!0,n=!0;return!(d&&!a.title.toLocaleLowerCase().includes(d.toLocaleLowerCase()))&&(t&&e&&!t&&!e||(t?n=!a.is_series:e&&(n=a.is_series)),(null!=(i=null==l?void 0:l.genre)?i:[]).length>0&&(s=!!a.genre.find((e=>{var t;return null==(t=null==l?void 0:l.genre)?void 0:t.includes(e.id)}))),s&&n)}))}const v=c+1<Math.ceil(p.length/r);return t(a.delay(800),a.json({hasNext:v,list:p.slice(r*c,r*c+r)}))}))]);(async()=>{await Fe.start({serviceWorker:{url:"/vue-movies/mockServiceWorker.js"}})})().then((()=>{G(Ge).mount("#app")})).catch(console.log);
