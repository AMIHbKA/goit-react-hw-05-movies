"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[546],{1032:function(n,e,t){t.d(e,{K:function(){return s}});var r,a=t(168),s=(0,t(6444).iv)(r||(r=(0,a.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: #bf4352;\n  text-align: center;\n  margin-top: 1vh;\n"])))},2683:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,s=t(5861),i=t(9439),c=t(7757),o=t.n(c),l=t(2791),u=t(7689),p=t(851),d=t(168),h=t(4881),f=t(6444),v=(0,f.ZP)(h.W)(r||(r=(0,d.Z)(["\n  display: flex;\n\n  @media screen and (max-width: 480px) {\n    display: block;\n  }\n\n  .poster {\n    margin-right: 15px;\n    object-fit: cover;\n    border-radius: 10px;\n    width: 300px;\n    height: 450px;\n  }\n\n  .title {\n    font-weight: 900;\n    font-size: 2em;\n    color: #bf4352;\n  }\n\n  .scores {\n    margin-top: 10px;\n    font-weight: 500;\n    color: #fff;\n    vertical-align: middle;\n\n    span {\n      font-weight: 700;\n      font-size: 1.2em;\n      color: #bf4352;\n    }\n  }\n\n  .overview-title {\n    margin-top: 10%;\n    font-size: 1.2em;\n    font-weight: 700;\n    color: #bf4352;\n    border-bottom: 2px solid #bf4352;\n  }\n\n  .overview-text {\n    margin-top: 1%;\n    color: #fff;\n  }\n\n  .title-genres {\n    grid-area: title-genres;\n    color: #fff;\n  }\n\n  .genres {\n    margin-top: 1%;\n    color: #fff;\n\n    span {\n      font-weight: 700;\n      color: #bf4352;\n    }\n  }\n"]))),g=f.ZP.div(a||(a=(0,d.Z)(["\n  background: linear-gradient(\n      to right,\n      rgb(31.5 10.5 10.5 / 1),\n      rgb(31.5 10.5 10.5 / 0.84) 50%,\n      rgb(31.5 10.5 10.5 / 0.84) 100%\n    ),\n    no-repeat url(",");\n  background-size: cover;\n  background-position: center;\n"])),(function(n){return n.$backdrop})),x=t(6801),m=t(184),j=function(n){var e=n.movie,t=e.genres,r=e.title,a=e.vote_average,s=e.poster_path,i=e.overview,c=e.backdrop_path,o=s?"".concat(p.eG,"/w300").concat(s):x,l=s?"".concat(r," poster"):"No poster",u=c?"".concat(p.eG,"/w780").concat(c):"#fff";return(0,m.jsx)(g,{$backdrop:u,children:(0,m.jsxs)(v,{children:[(0,m.jsx)("img",{className:"poster",src:o,alt:l,width:"300",height:"450"}),(0,m.jsxs)("div",{className:"movie-info",children:[(0,m.jsx)("h2",{className:"title",children:r}),(0,m.jsxs)("p",{className:"scores",children:["User scores: ",(0,m.jsxs)("span",{children:[(10*a).toFixed(0),"%"]})]}),t.length&&(0,m.jsxs)("p",{className:"genres ",children:[(0,m.jsx)("span",{children:"Genres:"})," ",t.map((function(n){return n.name})).join(", ")]}),(0,m.jsx)("h3",{className:"overview-title",children:"Overview"}),(0,m.jsx)("p",{className:"overview-text",children:i})]})]})})},b=t(7746),w=t(1154),k=t(8290),Z=(t(5862),function(){return(0,m.jsx)(g,{children:(0,m.jsxs)(v,{children:[(0,m.jsx)("div",{className:"poster",children:(0,m.jsx)(k.Z,{width:300,height:450})}),(0,m.jsxs)("div",{className:"movie-info",children:[(0,m.jsx)("h2",{className:"title",children:(0,m.jsx)(k.Z,{width:500,height:45})}),(0,m.jsxs)("p",{className:"scores",children:["User scores:"," ",(0,m.jsx)("span",{children:(0,m.jsx)(k.Z,{width:30,height:15})})]}),(0,m.jsxs)("p",{className:"genres ",children:[(0,m.jsx)("span",{children:"Genres:"})," ",(0,m.jsx)(k.Z,{width:300,height:15})]}),(0,m.jsx)("h3",{className:"overview-title",children:"Overview"}),(0,m.jsx)("p",{className:"overview-text",children:(0,m.jsx)(k.Z,{width:500,height:15,count:3})})]})]})})}),y=function(){var n,e,t=(0,u.UO)().movieId,r=(0,u.TH)(),a=(0,l.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),c=(0,l.useState)({}),d=(0,i.Z)(c,2),f=d[0],v=d[1],g=(0,l.useState)(!1),x=(0,i.Z)(g,2),k=x[0],y=x[1];return console.log("movieId",t),(0,l.useEffect)((function(){console.log("useeffect movidetails");var n=function(){var n=(0,s.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y(!0),n.next=4,p.TP(t);case 4:e=n.sent,v(e),console.log("response MovieDetails",e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:return n.prev=12,y(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){p.jw.abort()}}),[t]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b.h,{to:a.current,children:"\u27f8 Back"}),k&&(0,m.jsx)(Z,{}),!k&&Object.keys(f).length>0&&(0,m.jsx)(j,{movie:f}),(0,m.jsx)(l.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsxs)(h.W,{children:[(0,m.jsx)(w.Dx,{children:"Additional information"}),(0,m.jsxs)(w.aV,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(b.F,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(b.F,{to:"reviews",children:"Reviews"})})]}),!k&&(0,m.jsx)(u.j3,{})]})})]})}},1154:function(n,e,t){t.d(e,{Dx:function(){return u},aV:function(){return l},qx:function(){return p}});var r,a,s,i=t(168),c=t(1032),o=t(6444),l=o.ZP.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  padding: 0;\n  border-bottom: 2px solid #bf4352;\n\n  li {\n    width: 70px;\n    text-align: center;\n    padding: 5px;\n  }\n"]))),u=o.ZP.h2(a||(a=(0,i.Z)(["\n  color: #bf4352;\n  font-size: 1.5em;\n  margin-block: 1vh;\n"]))),p=o.ZP.div(s||(s=(0,i.Z)(["\n  ","\n"])),c.K)},851:function(n,e,t){t.d(e,{Df:function(){return f},TP:function(){return g},eG:function(){return c},jw:function(){return u},tx:function(){return b},z1:function(){return d},zv:function(){return m}});var r=t(5861),a=t(7757),s=t.n(a),i=t(1243),c="https://image.tmdb.org/t/p/",o=new Map,l="en-US",u=new AbortController,p=i.Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTMxNDhmYjNlMjk2YmI3YmM0MGQyZjkzMDg2NWUyYSIsInN1YiI6IjYxMmJkOWRlNDJmMTlmMDA0MjllYzRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUcOqubdlFiw4Vo4XJp8VttB73h6Ocj7p2Hqc1K-jGE"}});function d(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(s().mark((function n(e){var t,r,a,i,c=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=c.length>1&&void 0!==c[1]?c[1]:1,r=c.length>2&&void 0!==c[2]?c[2]:l,n.prev=2,a="search-movies-".concat(e,"-").concat(t,"-").concat(r),!o.has(a)){n.next=6;break}return n.abrupt("return",o.get(a));case 6:return n.next=8,p.get("search/movie",{params:{query:e,include_adult:!0,page:t,language:r}});case 8:return i=n.sent,o.set(a,i.data),n.abrupt("return",i.data);case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])}))),h.apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(s().mark((function n(){var e,t,r,a,i,c=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=c.length>0&&void 0!==c[0]?c[0]:1,t=c.length>1&&void 0!==c[1]?c[1]:l,r=c.length>2&&void 0!==c[2]?c[2]:"day",n.prev=3,a="trending-movies-".concat(r,"-").concat(e,"-").concat(t),!o.has(a)){n.next=7;break}return n.abrupt("return",o.get(a));case 7:return n.next=9,p.get("trending/movie/".concat(r),{params:{include_adult:!0,page:e,language:t}});case 9:return i=n.sent,o.set(a,i.data),n.abrupt("return",i.data);case 14:n.prev=14,n.t0=n.catch(3),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[3,14]])}))),v.apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(s().mark((function n(e){var t,r,a,i=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=i.length>1&&void 0!==i[1]?i[1]:l,n.prev=1,r="movie-details-".concat(e,"-").concat(t),!o.has(r)){n.next=5;break}return n.abrupt("return",o.get(r));case 5:return n.next=7,p.get("movie/".concat(e),{params:{language:t}});case 7:return a=n.sent,o.set(r,a.data),n.abrupt("return",a.data);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),x.apply(this,arguments)}function m(n){return j.apply(this,arguments)}function j(){return j=(0,r.Z)(s().mark((function n(e){var t,r,a,i=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=i.length>1&&void 0!==i[1]?i[1]:l,n.prev=1,r="movie-credits-".concat(e,"-").concat(t),!o.has(r)){n.next=5;break}return n.abrupt("return",o.get(r));case 5:return n.next=7,p.get("movie/".concat(e,"/credits"),{params:{language:t}});case 7:return a=n.sent,o.set(r,a.data),n.abrupt("return",a.data);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),j.apply(this,arguments)}function b(n){return w.apply(this,arguments)}function w(){return w=(0,r.Z)(s().mark((function n(e){var t,r,a,i=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:1,r=i.length>2&&void 0!==i[2]?i[2]:l,n.prev=2,n.next=5,p.get("movie/".concat(e,"/reviews"),{params:{language:r,page:t}});case 5:return a=n.sent,n.abrupt("return",a.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])}))),w.apply(this,arguments)}},6801:function(n,e,t){n.exports=t.p+"static/media/poster-placeholder.105b59275185dba6d5db.jpg"}}]);
//# sourceMappingURL=546.44e434a0.chunk.js.map