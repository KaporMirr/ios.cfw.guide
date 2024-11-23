import{_ as D,i as x,p as L,g as w,r as S,o as a,c as l,a as s,t as d,F as u,k as m,l as h,d as k,w as v,s as g,q as b,b as f}from"./app.8306cdf9.js";String.prototype.fdn=function(){return this.replace(/ /g,"-").replace(/\//g,"%2F").replace(/ü/g,"u").replace(/²/g,"2").replace(/³/g,"3")};String.prototype.format=function(n){let r=this;for(let c in n)r=r.replace("${"+c+"}",n[c]);return r};const F={data(){return{iPhoneNote:'Note that all "Plus", "Max" and "mini" models of iPhones are functionally identical to the regular models.',fm:x(),isDarkMode:L(),themeLocaleData:w().value.chart.deviceChart.deviceSelection}},computed:{localePathPrefix(){const n=this.fm.lang;return n=="en_US"?"":`/${n}`},deviceArr(){return this.fm.group},released(){let n={};for(const r of this.deviceArr){let c=r.released;c.join()!=""&&(n[r.name]=c.map(p=>{const t=p.split("-"),o=[this.themeLocaleData.dateStyles.yearOnly,this.themeLocaleData.dateStyles.yearAndMonth,this.themeLocaleData.dateStyles.yearMonthAndDay];return new Intl.DateTimeFormat(this.fm.lang.replace(/_/g,"-"),o[t.length-1]).format(new Date(p))}))}return n},infoObj(){let n={soc:this.themeLocaleData.info.soc,arch:this.themeLocaleData.info.arch,latestJailbreakFirmware:this.themeLocaleData.info.latestJailbreakFirmware,latestFw:this.themeLocaleData.info.latestFw},r={};for(const c of this.deviceArr){let p=["soc","arch","latestJailbreakFirmware","latestFw"].map(t=>({type:t,value:c[t]}));r[c.name]=[];for(const t of p)if(t.value&&t.value!=""){let o=n[t.type].format({[t.type]:t.value.slice(0,3).join(", ")});t.value.length>3&&(o+=", ..."),r[c.name].push(o)}}return r}}},P={key:0,class:"custom-container tip"},I={class:"flexWrapper"},M={class:"devHead"},A=["src"],j=["src"],J={class:"flexWrapper flexColumn devInfo"},N={key:0,class:"devInfo infoList",style:{position:"absolute"}},C=["href"],O={key:1,class:"devInfo infoList",style:{position:"absolute"}},T=["href"],V={key:0},q=["href"];function B(n,r,c,p,t,o){const y=S("router-link");return a(),l(u,null,[s("h2",null,d(t.themeLocaleData.requiredReading.title),1),(a(!0),l(u,null,m(t.themeLocaleData.requiredReading.content,e=>(a(),l("p",{key:e},d(e.format({deviceType:t.fm.group[0].type,osStr:t.fm.group[0].latestOsStr})),1))),128)),t.fm.type=="iPhone"?(a(),l("div",P,[s("p",null,d(t.themeLocaleData.iPhoneNotice),1)])):h("",!0),(a(!0),l(u,null,m(o.deviceArr,e=>(a(),l(u,{key:e},[e.hasJailbreaks?(a(!0),l(u,{key:0},m([`${o.localePathPrefix}/get-started/${e.name.fdn()}.html`],_=>(a(),l(u,{key:_},[s("div",I,[s("div",M,[k(y,{to:e.hasJailbreaks?_:"",style:b({color:"inherit",cursor:e.hasJailbreaks?"pointer":"default"})},{default:v(()=>[s("h3",null,d(e.name),1),s("div",{class:g(["flexWrapper","flexImg",e.expanded?"expanded":"small"]),style:{"user-select":"none"}},[s("div",null,[e.img.count>0?(a(!0),l(u,{key:0},m(Math.min(e.img.count,3),i=>(a(),l("img",{key:i,class:g(["devImage",`devImage${i}`,e.expanded?"expanded":"small"]),src:`https://img.appledb.dev/device@preview/${e.img.key}/${i-1}${t.isDarkMode&&e.img.dark?"_dark":""}.webp`},null,10,A))),128)):(a(),l("img",{key:1,class:g(["devImage","devImage0",e.expanded?"expanded":"small"]),src:`/assets/images/logo${t.isDarkMode?"_dark":""}.webp`},null,10,j))])],2)]),_:2},1032,["to","style"])]),s("div",J,[e.expanded?(a(),l("ul",N,[(a(!0),l(u,null,m(o.infoObj[e.name].slice(0,3),i=>(a(),l("li",{key:i},[f(d(i.replace("...",""))+" ",1),i.includes("...")?(a(),l("a",{key:0,href:`https://appledb.dev/device/${e.name.fdn()}`,target:"_blank"},"...",8,C)):h("",!0)]))),128)),s("li",null,[k(y,{to:_},{default:v(()=>[f(d(t.themeLocaleData.info.showMore),1)]),_:2},1032,["to"])])])):(a(),l("ul",O,[(a(!0),l(u,null,m(o.infoObj[e.name].slice(0,1),i=>(a(),l("li",{key:i},[f(d(i.replace("...",""))+" ",1),i.includes("...")?(a(),l("a",{key:0,href:`https://appledb.dev/device/${e.name.fdn()}`,target:"_blank"},"...",8,T)):h("",!0)]))),128)),s("li",null,d(t.themeLocaleData.info.noJailbreaks),1)])),s("ul",{class:"devReleased infoList",style:b({position:"relative",top:e.expanded?"9em":"5.5em"})},[o.released[e.name]?(a(),l("li",V,[f(d(t.themeLocaleData.info.released.format({released:o.released[e.name].slice(0,1).join(", ")})),1),e.released.length>1?(a(),l(u,{key:0},[r[0]||(r[0]=f(", ")),s("a",{href:`https://appledb.dev/device/${e.name.fdn()}`,target:"_blank"},"...",8,q)],64)):h("",!0)])):h("",!0)],4)])]),r[1]||(r[1]=s("span",{class:"variablePadding"},null,-1)),r[2]||(r[2]=s("hr",null,null,-1))],64))),128)):h("",!0)],64))),128))],64)}var R=D(F,[["render",B],["__file","deviceGroup.vue"]]);export{R as default};
