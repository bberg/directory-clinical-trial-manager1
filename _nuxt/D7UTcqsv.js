import{d as c,r as m,o as u,c as n,e as o,I as f,f as s,i as p,h as _,E as y}from"./CXEGvJ3Z.js";import{u as g}from"./D4q_ily7.js";const h={key:0,class:"flex gap-3 justify-center items-center"},b=["data-tally-src"],v=c({__name:"TallyForm",props:["embed"],setup(l){const e=m(!0),{onLoaded:r}=g({src:"https://tally.so/widgets/embed.js",async:!0});function a(){e.value=!1,Tally.loadEmbeds()}return r(d=>{a()}),u(()=>{typeof Tally<"u"&&a()}),(d,t)=>{const i=y;return n(),o("div",null,[f(e)?(n(),o("div",h,[t[0]||(t[0]=s("span",null,"Please wait we are loading the form",-1)),p(i,{name:"svg-spinners:90-ring-with-bg"})])):_("",!0),s("iframe",{"data-tally-src":l.embed,loading:"lazy",width:"100%",height:"589",frameborder:"0",marginheight:"0",marginwidth:"0"},null,8,b)])}}});export{v as default};