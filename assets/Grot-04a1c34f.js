import{q as n,a5 as l,m as o,w as a,a6 as C,u as T,O as I,aa as S,J as g,ab as G,a9 as d,t as m,I as p,a8 as R,v as f,ac as F,a7 as h}from"./index-5de8a41c.js";import{a4 as z,a3 as N,m as w,a5 as U}from"./VTextField-a6744798.js";import{p as j,Q as q,q as b,r as v,n as c,o as k,H as y}from"./VRow-a513640b.js";const A={key:0},B={key:1,class:"rounded ml-3 bg-grey-darken-3"},D={key:3,class:"rounded ml-3 bg-grey-darken-3"},E={class:"d-flex flex-row align-center"},L={class:"mb-4"},_=window.SpeechRecognition||window.webkitSpeechRecognition,i=_?new _:!1,M={mounted(){this.setVariablesFromHash()},created(){window.addEventListener("resize",this.setMobile()),this.setMobile()},beforeDestroy(){i.stop(),i.abort()},data:()=>({lang:"en_US",error:!1,speaking:!1,toggle:!1,micIcon:"mdi-microphone",mobile:!1,loading:!1,theme:"dark",grotApplicationId:"06a226e5-ecb6-4193-8996-aab4460a15e0",grotConversationId:null,grotShow:!0,chat:[],msg:""}),watch:{msg:function(t){if(t==null||t.trim().replace(/\.$/,"").trim()==""){this.msg="";return}else{if(this.loading)return;var e=t.toLowerCase().trim().replace(/\.$/,"").trim();e.endsWith("send")|e.endsWith("sent")&&(this.msg=this.msg.trim(),this.msg=this.msg.split(" ").slice(0,-1).join(" "),this.sendToGrot())}}},methods:{scrollDown(){},endSpeechRecognition(){this.toggle=!1,this.speaking=!1,this.micIcon="mdi-microphone",i.stop(),i.abort()},startSpeechRecognition(){this.toggle=!0,this.micIcon="mdi-microphone-off",i.lang=this.lang,i.continuous=!0,i.interimResults=!1,i.maxAlternatives=1,i.onend=t=>{this.toggle?this.startSpeechRecognition():(this.toggle=!1,this.speaking=!1,this.micIcon="mdi-microphone")},i.onresult=t=>{if(typeof t.results>"u"){i.stop();return}for(var e=t.resultIndex;e<t.results.length;++e)t.results[e].isFinal&t.results[e][0].transcript.trim()!=""&&(this.msg+=this.capitalizeFirstLetter(t.results[e][0].transcript).trim()+". ")};try{i.start()}catch(t){this.toggle=!1,console.log(t)}},capitalizeFirstLetter(t){return t=t.trim(),t.charAt(0).toUpperCase()+t.slice(1)},setVariablesFromHash(){var t=window.location.hash.substring(1),e={};t!=null&&t!=""&&(t.split("&").forEach(function(r){var s=r.split("="),u=s[0],V=s[1]&&decodeURIComponent(s[1]);(e[u]||(e[u]=[])).push(V)}),e.question!=null&&e.question[0]!=""&&(this.msg=e.question[0],this.sendToGrot()))},setMobile(){const t=window.screen.orientation.type;t==="portrait-primary"?this.mobile=!0:t==="landscape-primary"&&(screen.width<=760?this.mobile=!0:this.mobile=!1)},sendToGrot(){this.msg==null||this.msg.trim()==""||(this.loading=!0,this.askGrot(this.msg),this.msg="")},askGrot(t){var e="https://api.pal.ai/v1/conversations",r={applicationId:this.grotApplicationId,conversationId:this.grotConversationId,messageContent:t,isStreaming:!1};this.chat.push({from:"user",msg:r.messageContent}),this.chat.push({from:"grot",msg:"Moment, Grot is thinking..."}),C("askGrot",{source:"user"}),fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(s=>s.json()).then(s=>{this.grotConversationId=s.conversationId,this.chat.pop(),this.chat.push({from:"grot",msg:s.messages[s.messages.length-1].content}),this.loading=!1,this.scrollDown()}).catch(s=>{console.error("Error:",s),this.chat.pop(),this.chat.push({from:"grot",msg:"Error during communication with Grot: "+s}),this.loading=!1})},getCurrentTheme(){return T().global.current.value.dark?"dark":"light"}}},J=Object.assign(M,{__name:"Grot",setup(t){return(e,r)=>(n(),l("div",null,[o(j,{flat:""},{default:a(()=>[o(q,null,{default:a(()=>[e.grotShow?(n(),l("div",A,[o(z,null,{default:a(()=>[o(b,null,{default:a(()=>[o(v,null,{default:a(()=>[(n(!0),l(I,null,S(e.chat,(s,u)=>(n(),l("div",{key:u,class:f(["d-flex flex-row my-2"])},[s.from=="user"?(n(),m(y,{key:0,color:s.from=="user"?"transparent":"red",size:"36"},{default:a(()=>[o(c,{icon:"mdi-account-circle"})]),_:2},1032,["color"])):h("",!0),s.from=="user"?(n(),l("span",B,[o(d(w),{modelValue:s.msg,theme:e.getCurrentTheme(),language:"en-US",toolbars:["code","preview"],footers:[],previewTheme:"github",codeTheme:"github"},null,8,["modelValue","theme"])])):h("",!0),s.from!="user"?(n(),m(y,{key:2,color:s.from=="user"?"indigo":"transparent",image:U,size:"36"},null,8,["color"])):h("",!0),s.from!="user"?(n(),l("span",D,[o(d(w),{modelValue:s.msg,theme:e.getCurrentTheme(),language:"en-US",toolbars:["code","preview"],footers:[],previewTheme:"github",codeTheme:"github"},null,8,["modelValue","theme"])])):h("",!0)]))),128))]),_:1})]),_:1}),o(b,{"no-gutters":""},{default:a(()=>[o(v,null,{default:a(()=>[g("div",E,[o(N,{ref:"chat",modelValue:e.msg,"onUpdate:modelValue":r[0]||(r[0]=s=>e.msg=s),clearable:"",placeholder:"Discuss with Grot",onKeypress:r[1]||(r[1]=G(s=>e.sendToGrot(),["enter"]))},null,8,["modelValue"]),g("div",L,[d(i)?(n(),m(k,{key:0,class:f(["ml-2",{pulse:e.toggle}]),"d-flex":"",onClick:r[2]||(r[2]=F(s=>e.toggle?e.endSpeechRecognition():e.startSpeechRecognition(),["stop"])),icon:"",color:e.toggle?e.speaking?"red lighten-2":"red darken-4":"primary"},{default:a(()=>[o(c,null,{default:a(()=>[p(R(e.micIcon),1)]),_:1})]),_:1},8,["color","class"])):h("",!0),o(k,{icon:"",class:"ml-4",onClick:r[3]||(r[3]=s=>e.sendToGrot()),loading:e.loading,color:"primary"},{default:a(()=>[o(c,null,{default:a(()=>[p("mdi-send")]),_:1})]),_:1},8,["loading"])])])]),_:1})]),_:1})]),_:1})])):h("",!0)]),_:1})]),_:1})]))}});export{J as default};
