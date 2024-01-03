import{p as B,i as Q,c as i,r as ee,a as F,g as ue,s as T,o as re,b as ce,d as Me,e as Ne,f as Ee,h as de,j as C,k as Oe,l as H,m as n,u as ve,n as De,q as me,t as fe,w as z,v as Fe,x as te,y as ae,z as ge,A as U,B as je,C as Ue,D as G,E as qe,F as Ge,G as he,H as Ke,I as N,J as A}from"./index-2bf8f5ee.js";import{u as ye,m as q,a as Z,b as be,c as M,d as pe,e as _e,f as Se,g as xe,h as Ve,i as ke,j as Ie,V as Ze,k as W,l as Xe,n as j,o as Ye,p as Je}from"./VCard-c4070b50.js";const K=Symbol.for("vuetify:layout"),Te=Symbol.for("vuetify:layout-item"),se=1e3,We=B({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),we=B({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Qe(){const e=Q(K);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ce(e){const o=Q(K);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${Me()}`,s=ue("useLayoutItem");ce(Te,{id:t});const l=T(!1);Ne(()=>l.value=!0),Ee(()=>l.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:u}=o.register(s,{...e,active:i(()=>l.value?!1:e.active.value),id:t});return de(()=>o.unregister(t)),{layoutItemStyles:a,layoutRect:o.layoutRect,layoutItemScrimStyles:u}}const et=(e,o,t,s)=>{let l={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...l}}];for(const u of e){const c=o.get(u),g=t.get(u),h=s.get(u);if(!c||!g||!h)continue;const d={...l,[c.value]:parseInt(l[c.value],10)+(h.value?parseInt(g.value,10):0)};a.push({id:u,layer:d}),l=d}return a};function tt(e){const o=Q(K,null),t=i(()=>o?o.rootZIndex.value-100:se),s=ee([]),l=F(new Map),a=F(new Map),u=F(new Map),c=F(new Map),g=F(new Map),{resizeRef:h,contentRect:d}=ye(),S=i(()=>{const f=new Map,x=e.overlaps??[];for(const r of x.filter(p=>p.includes(":"))){const[p,b]=r.split(":");if(!s.value.includes(p)||!s.value.includes(b))continue;const w=l.get(p),L=l.get(b),E=a.get(p),O=a.get(b);!w||!L||!E||!O||(f.set(b,{position:w.value,amount:parseInt(E.value,10)}),f.set(p,{position:L.value,amount:-parseInt(O.value,10)}))}return f}),y=i(()=>{const f=[...new Set([...u.values()].map(r=>r.value))].sort((r,p)=>r-p),x=[];for(const r of f){const p=s.value.filter(b=>{var w;return((w=u.get(b))==null?void 0:w.value)===r});x.push(...p)}return et(x,l,a,c)}),v=i(()=>!Array.from(g.values()).some(f=>f.value)),_=i(()=>y.value[y.value.length-1].layer),$=i(()=>({"--v-layout-left":C(_.value.left),"--v-layout-right":C(_.value.right),"--v-layout-top":C(_.value.top),"--v-layout-bottom":C(_.value.bottom),...v.value?void 0:{transition:"none"}})),k=i(()=>y.value.slice(1).map((f,x)=>{let{id:r}=f;const{layer:p}=y.value[x],b=a.get(r),w=l.get(r);return{id:r,...p,size:Number(b.value),position:w.value}})),m=f=>k.value.find(x=>x.id===f),V=ue("createLayout"),P=T(!1);re(()=>{P.value=!0}),ce(K,{register:(f,x)=>{let{id:r,order:p,position:b,layoutSize:w,elementSize:L,active:E,disableTransitions:O,absolute:Ae}=x;u.set(r,p),l.set(r,b),a.set(r,w),c.set(r,E),O&&g.set(r,O);const le=Oe(Te,V==null?void 0:V.vnode).indexOf(f);le>-1?s.value.splice(le,0,r):s.value.push(r);const oe=i(()=>k.value.findIndex(D=>D.id===r)),X=i(()=>t.value+y.value.length*2-oe.value*2),Re=i(()=>{const D=b.value==="left"||b.value==="right",Y=b.value==="right",He=b.value==="bottom",ne={[b.value]:0,zIndex:X.value,transform:`translate${D?"X":"Y"}(${(E.value?0:-110)*(Y||He?-1:1)}%)`,position:Ae.value||t.value!==se?"absolute":"fixed",...v.value?void 0:{transition:"none"}};if(!P.value)return ne;const I=k.value[oe.value];if(!I)throw new Error(`[Vuetify] Could not find layout item "${r}"`);const J=S.value.get(r);return J&&(I[J.position]+=J.amount),{...ne,height:D?`calc(100% - ${I.top}px - ${I.bottom}px)`:L.value?`${L.value}px`:void 0,left:Y?void 0:`${I.left}px`,right:Y?`${I.right}px`:void 0,top:b.value!=="bottom"?`${I.top}px`:void 0,bottom:b.value!=="top"?`${I.bottom}px`:void 0,width:D?L.value?`${L.value}px`:void 0:`calc(100% - ${I.left}px - ${I.right}px)`}}),Le=i(()=>({zIndex:X.value-1}));return{layoutItemStyles:Re,layoutItemScrimStyles:Le,zIndex:X}},unregister:f=>{u.delete(f),l.delete(f),a.delete(f),c.delete(f),g.delete(f),s.value=s.value.filter(x=>x!==f)},mainRect:_,mainStyles:$,getLayoutItem:m,items:k,layoutRect:d,rootZIndex:t});const R=i(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ze=i(()=>({zIndex:o?t.value:void 0,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:R,layoutStyles:ze,getLayoutItem:m,items:k,layoutRect:d,layoutRef:h}}const at=B({scrollable:Boolean,...q(),...Z({tag:"main"})},"VMain"),lt=H()({name:"VMain",props:at(),setup(e,o){let{slots:t}=o;const{mainStyles:s}=Qe(),{ssrBootStyles:l}=be();return M(()=>n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,l.value,e.style]},{default:()=>{var a,u;return[e.scrollable?n("div",{class:"v-main__scroller"},[(a=t.default)==null?void 0:a.call(t)]):(u=t.default)==null?void 0:u.call(t)]}})),{}}}),ot={__name:"View",setup(e){const o=ve();function t(){return o.global.current.value.dark?"bg-grey-darken-4":"bg-white"}return(s,l)=>{const a=De("router-view");return me(),fe(lt,{class:Fe(t())},{default:z(()=>[n(a)]),_:1},8,["class"])}}};const nt=B({...q(),...We({fullHeight:!0}),...te()},"VApp"),st=H()({name:"VApp",props:nt(),setup(e,o){let{slots:t}=o;const s=ae(e),{layoutClasses:l,getLayoutItem:a,items:u,layoutRef:c}=tt(e),{rtlClasses:g}=ge();return M(()=>{var h;return n("div",{ref:c,class:["v-application",s.themeClasses.value,l.value,g.value,e.class],style:[e.style]},[n("div",{class:"v-application__wrap"},[(h=t.default)==null?void 0:h.call(t)])])}),{getLayoutItem:a,items:u,theme:s}}});const Be=B({text:String,...q(),...Z()},"VToolbarTitle"),$e=H()({name:"VToolbarTitle",props:Be(),setup(e,o){let{slots:t}=o;return M(()=>{const s=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),it=[null,"prominent","default","comfortable","compact"],Pe=B({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>it.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...pe(),...q(),..._e(),...Se(),...Z({tag:"header"}),...te()},"VToolbar"),ie=H()({name:"VToolbar",props:Pe(),setup(e,o){var v;let{slots:t}=o;const{backgroundColorClasses:s,backgroundColorStyles:l}=xe(U(e,"color")),{borderClasses:a}=Ve(e),{elevationClasses:u}=ke(e),{roundedClasses:c}=Ie(e),{themeClasses:g}=ae(e),{rtlClasses:h}=ge(),d=T(!!(e.extended||(v=t.extension)!=null&&v.call(t))),S=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=i(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return je({VBtn:{variant:"text"}}),M(()=>{var m;const _=!!(e.title||t.title),$=!!(t.image||e.image),k=(m=t.extension)==null?void 0:m.call(t);return d.value=!!(e.extended||k),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,a.value,u.value,c.value,g.value,h.value,e.class],style:[l.value,e.style]},{default:()=>[$&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(Ze,{key:"image-img",cover:!0,src:e.image},null)]),n(W,{defaults:{VTabs:{height:C(S.value)}}},{default:()=>{var V,P,R;return[n("div",{class:"v-toolbar__content",style:{height:C(S.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(V=t.prepend)==null?void 0:V.call(t)]),_&&n($e,{key:"title",text:e.title},{text:t.title}),(P=t.default)==null?void 0:P.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(R=t.append)==null?void 0:R.call(t)])])]}}),n(W,{defaults:{VTabs:{height:C(y.value)}}},{default:()=>[n(Xe,null,{default:()=>[d.value&&n("div",{class:"v-toolbar__extension",style:{height:C(y.value)}},[k])]})]})]})}),{contentHeight:S,extensionHeight:y}}}),ut=B({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function rt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let s=0;const l=ee(null),a=T(0),u=T(0),c=T(0),g=T(!1),h=T(!1),d=i(()=>Number(e.scrollThreshold)),S=i(()=>Ue((d.value-a.value)/d.value||0)),y=()=>{const v=l.value;!v||t&&!t.value||(s=a.value,a.value="window"in v?v.pageYOffset:v.scrollTop,h.value=a.value<s,c.value=Math.abs(a.value-d.value))};return G(h,()=>{u.value=u.value||a.value}),G(g,()=>{u.value=0}),re(()=>{G(()=>e.scrollTarget,v=>{var $;const _=v?document.querySelector(v):window;_&&_!==l.value&&(($=l.value)==null||$.removeEventListener("scroll",y),l.value=_,l.value.addEventListener("scroll",y,{passive:!0}))},{immediate:!0})}),de(()=>{var v;(v=l.value)==null||v.removeEventListener("scroll",y)}),t&&G(t,y,{immediate:!0}),{scrollThreshold:d,currentScroll:a,currentThreshold:c,isScrollActive:g,scrollRatio:S,isScrollingUp:h,savedScroll:u}}const ct=B({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Pe(),...we(),...ut(),height:{type:[Number,String],default:64}},"VAppBar"),dt=H()({name:"VAppBar",props:ct(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const s=ee(),l=qe(e,"modelValue"),a=i(()=>{var V;const m=new Set(((V=e.scrollBehavior)==null?void 0:V.split(" "))??[]);return{hide:m.has("hide"),inverted:m.has("inverted"),collapse:m.has("collapse"),elevate:m.has("elevate"),fadeImage:m.has("fade-image")}}),u=i(()=>{const m=a.value;return m.hide||m.inverted||m.collapse||m.elevate||m.fadeImage||!l.value}),{currentScroll:c,scrollThreshold:g,isScrollingUp:h,scrollRatio:d}=rt(e,{canScroll:u}),S=i(()=>e.collapse||a.value.collapse&&(a.value.inverted?d.value>0:d.value===0)),y=i(()=>e.flat||a.value.elevate&&(a.value.inverted?c.value>0:c.value===0)),v=i(()=>a.value.fadeImage?a.value.inverted?1-d.value:d.value:void 0),_=i(()=>{var P,R;if(a.value.hide&&a.value.inverted)return 0;const m=((P=s.value)==null?void 0:P.contentHeight)??0,V=((R=s.value)==null?void 0:R.extensionHeight)??0;return m+V});Ge(i(()=>!!e.scrollBehavior),()=>{Ke(()=>{a.value.hide?a.value.inverted?l.value=c.value>g.value:l.value=h.value||c.value<g.value:l.value=!0})});const{ssrBootStyles:$}=be(),{layoutItemStyles:k}=Ce({id:e.name,order:i(()=>parseInt(e.order,10)),position:U(e,"location"),layoutSize:_,elementSize:T(void 0),active:l,absolute:U(e,"absolute")});return M(()=>{const m=ie.filterProps(e);return n(ie,he({ref:s,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...k.value,"--v-toolbar-image-opacity":v.value,height:void 0,...$.value},e.style]},m,{collapse:S.value,flat:y.value}),t)}),{}}}),vt=H()({name:"VAppBarTitle",props:Be(),setup(e,o){let{slots:t}=o;return M(()=>n($e,he(e,{class:"v-app-bar-title"}),t)),{}}});const mt=B({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...pe(),...q(),..._e(),...we(),...Se(),...Z({tag:"footer"}),...te()},"VFooter"),ft=H()({name:"VFooter",props:mt(),setup(e,o){let{slots:t}=o;const{themeClasses:s}=ae(e),{backgroundColorClasses:l,backgroundColorStyles:a}=xe(U(e,"color")),{borderClasses:u}=Ve(e),{elevationClasses:c}=ke(e),{roundedClasses:g}=Ie(e),h=T(32),{resizeRef:d}=ye(v=>{v.length&&(h.value=v[0].target.clientHeight)}),S=i(()=>e.height==="auto"?h.value:parseInt(e.height,10)),{layoutItemStyles:y}=Ce({id:e.name,order:i(()=>parseInt(e.order,10)),position:i(()=>"bottom"),layoutSize:S,elementSize:i(()=>e.height==="auto"?void 0:S.value),active:i(()=>e.app),absolute:U(e,"absolute")});return M(()=>n(e.tag,{ref:d,class:["v-footer",s.value,l.value,u.value,c.value,g.value,e.class],style:[a.value,e.app?y.value:{height:C(e.height)},e.style]},t)),{}}}),gt={class:"text-no-wrap ml-2 float-left"},ht=A("a",{class:"text-decoration-none",href:"https://monitoringartist.com",_target:"_blank"},"Monitoring Artist",-1),yt=A("div",{class:"ml-2 float-left"}," | ",-1),bt={class:"text-no-wrap ml-2 float-left"},pt=A("a",{class:"text-decoration-none",target:"_blank",href:"https://github.com/monitoringartist/grafana-debugger"},"GitHub repository",-1),_t=A("div",{class:"ml-2 float-left"}," | ",-1),St={class:"text-no-wrap ml-2 float-left"},xt=A("a",{class:"text-decoration-none",target:"_blank",href:"todo"},"Legal",-1),Vt={mounted(){const e=localStorage.getItem("theme");e?this.$vuetify.theme.dark=e==="dark":this.$vuetify.theme.dark=window.matchMedia("(prefers-color-scheme: dark)").matches},methods:{toggle_dark_mode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("theme",this.$vuetify.theme.dark.toString())}}},wt=Object.assign(Vt,{__name:"Default",setup(e){const o=ve();function t(){o.global.name.value=o.global.current.value.dark?"light":"dark",localStorage.setItem("theme",o.global.name.value)}return(s,l)=>(me(),fe(st,null,{default:z(()=>[n(dt,{flat:""},{default:z(()=>[n(vt,null,{default:z(()=>[n(j,{icon:"mdi-bug",size:"x-large"}),N(" Grafana Debugger ")]),_:1}),n(Ye,{onClick:t},{default:z(()=>[n(j,null,{default:z(()=>[N("mdi-theme-light-dark")]),_:1})]),_:1})]),_:1}),n(ot),n(ft,{class:"text-center"},{default:z(()=>[n(Je,{tile:"",flat:"",width:"100%",class:"d-flex align-center justify-center",style:{"font-size":"0.75rem"}},{default:z(()=>[A("div",gt,[N(" Crafted with "),n(j,{icon:"mdi-cards-heart",color:"red"}),N(" by: "),ht]),yt,A("div",bt,[n(j,{icon:"mdi-github"}),N(" "),pt]),_t,A("div",St,[n(j,{icon:"mdi-scale-balance"}),N(" "),xt])]),_:1})]),_:1})]),_:1}))}});export{wt as default};
