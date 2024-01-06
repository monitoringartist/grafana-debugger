import{q as i,a5 as l,m as o,w as n,a6 as C,u as V,O as S,aa as T,J as h,ab as I,a9 as u,t as m,I as c,a8 as G,v as p,ac as R,a7 as d}from"./index-a9b6b119.js";import{a4 as z,a3 as N,m as f,a5 as j}from"./VTextField-4e4f5fa2.js";import{p as A,Q as B,q as w,r as y,n as g,o as b,H as v}from"./VRow-09cc80b8.js";const F={key:0},L={key:0,class:"rounded mr-3 bg-grey-darken-3"},U={key:3,class:"rounded ml-3 bg-grey-darken-3"},$={class:"d-flex flex-row align-center"},D={class:"mb-4"},_=window.SpeechRecognition||window.webkitSpeechRecognition,r=_?new _:!1,E={created(){window.addEventListener("resize",this.setMobile()),this.setMobile()},beforeDestroy(){r.stop(),r.abort()},data:()=>({lang:"en_US",error:!1,speaking:!1,toggle:!1,micIcon:"mdi-microphone",mobile:!1,loading:!1,theme:"dark",grotApplicationId:"06a226e5-ecb6-4193-8996-aab4460a15e0",grotConversationId:null,grotShow:!0,chat:[],msg:""}),watch:{msg:function(t){if(t==null||t.trim().replace(/\.$/,"").trim()==""){this.msg="";return}else{if(this.loading)return;var e=t.toLowerCase().trim().replace(/\.$/,"").trim();e.endsWith("send")|e.endsWith("sent")&&(this.msg=this.msg.trim(),this.msg=this.msg.split(" ").slice(0,-1).join(" "),this.sendToGrot())}}},methods:{scrollDown(){},endSpeechRecognition(){this.toggle=!1,this.speaking=!1,this.micIcon="mdi-microphone",r.stop(),r.abort()},startSpeechRecognition(){this.toggle=!0,this.micIcon="mdi-microphone-off",r.lang=this.lang,r.continuous=!0,r.interimResults=!1,r.maxAlternatives=1,r.onend=t=>{this.toggle?this.startSpeechRecognition():(this.toggle=!1,this.speaking=!1,this.micIcon="mdi-microphone")},r.onresult=t=>{if(typeof t.results>"u"){r.stop();return}for(var e=t.resultIndex;e<t.results.length;++e)t.results[e].isFinal&t.results[e][0].transcript.trim()!=""&&(this.msg+=this.capitalizeFirstLetter(t.results[e][0].transcript).trim()+". ")};try{r.start()}catch(t){this.toggle=!1,console.log(t)}},capitalizeFirstLetter(t){return t=t.trim(),t.charAt(0).toUpperCase()+t.slice(1)},setMobile(){const t=window.screen.orientation.type;t==="portrait-primary"?this.mobile=!0:t==="landscape-primary"&&(screen.width<=760?this.mobile=!0:this.mobile=!1)},sendToGrot(){this.msg==null||this.msg.trim()==""||(this.loading=!0,this.askGrot(this.msg),this.msg="")},askGrot(t){var e="https://api.pal.ai/v1/conversations",a={applicationId:this.grotApplicationId,conversationId:this.grotConversationId,messageContent:t,isStreaming:!1};this.chat.push({from:"user",msg:a.messageContent}),C("askGrot",{source:"user"}),fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(s=>s.json()).then(s=>{this.grotConversationId=s.conversationId,this.chat.push({from:"grot",msg:s.messages[s.messages.length-1].content}),this.loading=!1,this.scrollDown()}).catch(s=>{console.error("Error:",s),this.chat.push({from:"grot",msg:"Error during communication with Grot: "+s}),this.loading=!1})},getCurrentTheme(){return V().global.current.value.dark?"dark":"light"}}},J=Object.assign(E,{__name:"Grot",setup(t){return(e,a)=>(i(),l("div",null,[o(A,{flat:""},{default:n(()=>[o(B,null,{default:n(()=>[e.grotShow?(i(),l("div",F,[o(z,null,{default:n(()=>[o(w,null,{default:n(()=>[o(y,null,{default:n(()=>[(i(!0),l(S,null,T(e.chat,(s,k)=>(i(),l("div",{key:k,class:p(["d-flex flex-row align-center my-2",s.from=="user"?"justify-end":null])},[s.from=="user"?(i(),l("span",L,[o(u(f),{modelValue:s.msg,theme:e.getCurrentTheme(),language:"en-US",toolbars:["code","preview"],footers:[],previewTheme:"github",codeTheme:"github"},null,8,["modelValue","theme"])])):d("",!0),s.from=="user"?(i(),m(v,{key:1,color:s.from=="user"?"transparent":"red",size:"36"},{default:n(()=>[o(g,{icon:"mdi-account-circle"})]),_:2},1032,["color"])):d("",!0),s.from!="user"?(i(),m(v,{key:2,color:s.from=="user"?"indigo":"transparent",image:j,size:"36"},null,8,["color"])):d("",!0),s.from!="user"?(i(),l("span",U,[o(u(f),{modelValue:s.msg,theme:e.getCurrentTheme(),language:"en-US",toolbars:["code","preview"],footers:[],previewTheme:"github",codeTheme:"github"},null,8,["modelValue","theme"])])):d("",!0)],2))),128))]),_:1})]),_:1}),o(w,{"no-gutters":""},{default:n(()=>[o(y,null,{default:n(()=>[h("div",$,[o(N,{ref:"chat",modelValue:e.msg,"onUpdate:modelValue":a[0]||(a[0]=s=>e.msg=s),clearable:"",placeholder:"Respond to Grot",onKeypress:a[1]||(a[1]=I(s=>e.sendToGrot(),["enter"]))},null,8,["modelValue"]),h("div",D,[u(r)?(i(),m(b,{key:0,class:p(["ml-2",{pulse:e.toggle}]),"d-flex":"",onClick:a[2]||(a[2]=R(s=>e.toggle?e.endSpeechRecognition():e.startSpeechRecognition(),["stop"])),icon:"",color:e.toggle?e.speaking?"red lighten-2":"red darken-4":"primary"},{default:n(()=>[o(g,null,{default:n(()=>[c(G(e.micIcon),1)]),_:1})]),_:1},8,["color","class"])):d("",!0),o(b,{icon:"",class:"ml-4",onClick:a[3]||(a[3]=s=>e.sendToGrot()),loading:e.loading},{default:n(()=>[o(g,null,{default:n(()=>[c("mdi-send")]),_:1})]),_:1},8,["loading"])])])]),_:1})]),_:1})]),_:1})])):d("",!0)]),_:1})]),_:1})]))}});export{J as default};
