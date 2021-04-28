(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{148:function(t,e,n){"use strict";n.r(e);var a,c,i=n(0),r=n(10),s=n.n(r),o=n(56),l=n(57);!function(t){t.PENDING="pending",t.REJECTED="rejected",t.FULFILLED="fulfilled"}(a||(a={})),function(t){t.CELSIUS="C",t.FAHRENHEIT="F"}(c||(c={}));var u={city:"",activeCard:null,weatherByDays:[],status:a.PENDING,activeUnit:c.FAHRENHEIT},d=n(34),j=n.n(d),h=n(66),m=n(53),b=n(54),x=n.n(b),p=function(t){return x()(t).format("DD")},v=function(t){return function(t,e){return t.map((function(t){return null===e||void 0===e?void 0:e.filter((function(e){return p(e.dt_txt)===t}))}))}(function(t){return Object(m.uniq)(null===t||void 0===t?void 0:t.map((function(t){return p(t.dt_txt)})))}(t),t)},f=function(t,e){return t===c.CELSIUS?function(t){return Math.round(t-273.15)}(e):function(t){return Math.round(9*(t-273.15)/5+32)}(e)},O=function(t,e,n){var a;return null===(a=e.filter((function(t){return t.includes(n)}))[0])||void 0===a?void 0:a.map((function(e){return{temp:f(t,e.main.temp),time:x.a.unix(e.dt).format("h a")}}))},y=function(t){var e=t||"Munich";return"".concat("https://api.openweathermap.org/data/2.5/forecast","?q=").concat(e,",de&APPID=").concat("75f972b80e26f14fe6c920aa6a85ad57","&cnt=40")},w=function(){var t=Object(h.a)(j.a.mark((function t(e){var n,a,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=y(e),t.next=4,fetch(n);case 4:if(!(a=t.sent).ok){t.next=10;break}return t.next=8,a.json();case 8:return c=t.sent,t.abrupt("return",c);case 10:throw new Error("Something went wrong");case 13:throw t.prev=13,t.t0=t.catch(0),new Error(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),g=Object(l.b)("weather/fetchWeather",function(){var t=Object(h.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),C=Object(l.c)({name:"weather",initialState:u,reducers:{setActiveCard:function(t,e){t.activeCard=e.payload},setActiveUnit:function(t,e){t.activeUnit=e.payload},setCity:function(t,e){t.city=e.payload}},extraReducers:function(t){t.addCase(g.pending,(function(t){t.status=a.PENDING})),t.addCase(g.fulfilled,(function(t,e){var n,c,i,r=v(null===(n=e.payload)||void 0===n?void 0:n.list);t.activeCard=null===(c=e.payload)||void 0===c?void 0:c.list[0],t.city=null===(i=e.payload)||void 0===i?void 0:i.city.name,t.weatherByDays=r,t.status=a.FULFILLED})),t.addCase(g.rejected,(function(t){t.city="",t.weatherByDays=[],t.status=a.REJECTED}))}}),N=C.actions,E=N.setActiveCard,D=N.setActiveUnit,I=N.setCity,U=C.reducer,F=Object(l.a)({reducer:{weather:U}}),P=n(206),A=n(208),S=n(192),k=n(5),B=function(){return Object(k.jsx)(A.a,{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",children:Object(k.jsx)(S.a,{"data-testid":"loader"})})},L=n(73),W=function(t){var e=t.value;return Object(k.jsx)("span",{children:"".concat(e,"\xb0")})},H=n(196),R=o.c,T=function(){var t,e=Object(o.b)(),n=R((function(t){return t.weather}));return{city:n.city,status:n.status,activeUnit:n.activeUnit,activeCard:n.activeCard,getWeather:function(){return e(g())},weatherItemsPerSlide:(t=n.weatherByDays,Object(m.chunk)(t,3).map((function(t){return t.map((function(t){return t[0]}))}))),setActiveCard:function(t){return e(E(t))},setCity:function(t){e(I(t)),e(g(t))},barChartData:O(n.activeUnit,n.weatherByDays,n.activeCard),setActiveUnit:function(t){return e(D(t))}}},M=n(194),G=n(198),J=n(197),Y=n(199),_=n(193),q=n(195),V=n(48),z=n.n(V),K="(min-width:769px)",Q=n(97),X=Object(Q.a)({card:{width:"30%"},mobile:{width:"100%",marginBottom:"1rem"},text:{marginBottom:12},media:{maxWidth:"100px",height:"auto",marginTop:"-20px"}}),Z=function(t){var e=t.value,n=X();return Object(k.jsx)(_.a,{item:!0,xs:12,children:Object(k.jsx)(M.a,{className:n.text,color:"textSecondary",component:"span",children:e})})},$=function(t){var e,n,a,c=t.data,i=t.className,r=X(),s=Object(q.a)(K),o=T(),l=o.setActiveCard,u=o.activeCard,d=o.activeUnit,j=c.main,h=c.weather,b=c.dt,p=c.wind,v=c.rain,O=Object(m.isEqual)(u,c);return Object(k.jsx)(H.a,{className:z()(r.card,i,Object(L.a)({},r.mobile,!s)),raised:O,children:Object(k.jsx)(J.a,{onClick:function(){return l(c)},children:Object(k.jsx)(G.a,{children:Object(k.jsxs)(_.a,{container:!0,children:[Object(k.jsx)(_.a,{item:!0,xs:6,children:Object(k.jsx)(M.a,{variant:s?"h3":"h2",component:"span",children:Object(k.jsx)(W,{value:f(d,null===j||void 0===j?void 0:j.temp)})})}),Object(k.jsx)(_.a,{item:!0,xs:6,children:Object(k.jsx)(Y.a,{className:r.media,component:"img",alt:"Weather icon",image:"".concat("https://openweathermap.org/img/wn/").concat(null===(e=h[0])||void 0===e?void 0:e.icon,"@2x.png"),title:"Weather icon"})}),Object(k.jsxs)(_.a,{item:!0,xs:12,children:[Object(k.jsx)(M.a,{className:r.text,color:"textPrimary",component:"span",children:x.a.unix(b).format("D\tMMM YYYY")}),Object(k.jsx)(M.a,{noWrap:!0,className:r.text,color:"textSecondary",children:"".concat(null===(n=h[0])||void 0===n?void 0:n.main,", ").concat(null===(a=h[0])||void 0===a?void 0:a.description)})]}),s&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Z,{value:"L: ".concat(f(d,null===j||void 0===j?void 0:j.temp_min)," H: ").concat(f(d,null===j||void 0===j?void 0:j.temp_max))}),Object(k.jsx)(Z,{value:"Humidity: ".concat(null===j||void 0===j?void 0:j.humidity,"%")}),Object(k.jsx)(Z,{value:"Wind: ".concat(p.speed," km/h")}),Object(k.jsx)(Z,{value:"Precipitation: ".concat(v?v["3h"]:"-")})]})]})})})})},tt=Object(Q.a)({centeredCard:{margin:"1rem"}}),et=function(t){var e=t.slide,n=t.shouldCenterContent,a=tt(),c=Object(q.a)(K);return Object(k.jsx)(A.a,{"data-testid":"slide",display:"flex",height:"100%",flexDirection:c?"row":"column",alignItems:"center",justifyContent:n?"center":"space-between",children:e.map((function(t){return Object(k.jsx)($,{className:n?a.centeredCard:"",data:t},t.dt)}))})},nt=n(106),at=n.n(nt),ct=Object(Q.a)({carousel:{padding:"1rem 3.5rem"}}),it=function(t){var e=t.className,n=ct(),a=T().weatherItemsPerSlide;return Object(k.jsx)(at.a,{className:z()(e,n.carousel),autoPlay:!1,animation:"slide",indicators:!1,cycleNavigation:!1,navButtonsAlwaysVisible:!0,navButtonsWrapperProps:{className:"buttons-wrapper",style:{margin:"auto -10px"}},children:a.map((function(t){return Object(k.jsx)(et,{slide:t,shouldCenterContent:t.length<3},t[0].dt)}))})},rt=n(109),st=n(13),ot=n(50),lt=function(){var t=T().barChartData,e=(null===t||void 0===t?void 0:t.length)<=3?.2:1;return Object(k.jsx)(rt.a,{children:Object(k.jsxs)(ot.c,{data:t,children:[Object(k.jsx)(ot.a,{}),Object(k.jsx)(ot.e,{}),Object(k.jsx)(ot.b,{valueField:"temp",argumentField:"time",barWidth:e}),Object(k.jsx)(ot.d,{text:"Rest of the day"}),Object(k.jsx)(st.a,{})]})})},ut=n(210),dt=n(202),jt=n(207),ht=["Berlin","Munich","Frankfurt","Hamburg"],mt=function(t){var e=t.className,n=T(),a=n.city,c=n.setCity;return Object(k.jsxs)(dt.a,{variant:"outlined",className:e,children:[Object(k.jsx)(ut.a,{htmlFor:"city-select",children:"City"}),Object(k.jsx)(jt.a,{native:!0,value:a,label:"City",onChange:function(t){c(t.target.value)},inputProps:{name:"city",id:"city-select"},children:ht.map((function(t){return Object(k.jsx)("option",{"data-testid":"select-option",value:t,children:t},t)}))})]})},bt=Object(Q.a)({weatherPage:{padding:"2rem 0"},mobile:{textAlign:"center"},cityPicker:{width:"100%",display:"flex",marginBottom:"0.5rem",justifyContent:"center"},slideShow:{marginBottom:"1.5rem"}}),xt=function(){var t=bt(),e=Object(q.a)(K);return Object(k.jsxs)("section",{className:z()(t.weatherPage,Object(L.a)({},t.mobile,!e)),"data-testid":"weather",children:[Object(k.jsx)("div",{className:t.cityPicker,children:Object(k.jsx)(mt,{})}),Object(k.jsx)(it,{className:t.slideShow}),Object(k.jsx)(lt,{})]})},pt=function(){return Object(k.jsx)(A.a,{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center",children:Object(k.jsx)(M.a,{variant:"h4",component:"h2",children:"Ups... Something went wrong."})})},vt=n(203),ft=n(204),Ot=n(209),yt=Object(Q.a)({root:{flexGrow:1},title:{flexGrow:1},mobile:{display:"flex",position:"fixed"}}),wt=function(){var t=yt(),e=T(),n=e.setActiveUnit,a=e.activeUnit,i=Object(q.a)(K),r=c.CELSIUS,s=c.FAHRENHEIT,o=a===r;return Object(k.jsx)("div",{className:t.root,"data-testid":o?"f-active":"c-active",children:Object(k.jsx)(vt.a,{position:"static",className:i?"":t.mobile,children:Object(k.jsxs)(ft.a,{children:[Object(k.jsx)(M.a,{className:t.title,variant:"h6",noWrap:!0,children:"Weather App"}),Object(k.jsx)(M.a,{component:"div",children:Object(k.jsxs)(_.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(k.jsx)(_.a,{item:!0,children:Object(k.jsx)(W,{value:r})}),Object(k.jsx)(_.a,{item:!0,children:Object(k.jsx)(Ot.a,{"data-testid":"switch",color:"default",checked:!o,onChange:function(){n(o?s:r)}})}),Object(k.jsx)(_.a,{item:!0,children:Object(k.jsx)(W,{value:s})})]})})]})})})},gt=n(205),Ct=function(){var t=T(),e=t.status,n=t.getWeather,c=Object(q.a)("(min-width:769px)");Object(i.useEffect)((function(){n()}),[]);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(wt,{}),Object(k.jsx)(gt.a,{className:"App",fixed:!0,style:{paddingTop:c?0:50},children:function(){var t=a.PENDING,n=a.FULFILLED,c=a.REJECTED;return e===t?Object(k.jsx)(B,{}):e===n?Object(k.jsx)(xt,{}):e===c?Object(k.jsx)(pt,{}):Object(k.jsx)(k.Fragment,{})}()})]})};s.a.render(Object(k.jsxs)(o.a,{store:F,children:[Object(k.jsx)(P.a,{}),Object(k.jsx)(Ct,{})]}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.3d1fcda1.chunk.js.map