"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[442],{7930:function(n,e,t){t(2791);e.Z=t.p+"static/media/Blank_noGender.1a99857f3d1d09433764cc4e5630013e.svg"},64:function(n,e,t){t.r(e),t.d(e,{Cast:function(){return j}});var a=t(5861),r=t(9439),c=t(7757),s=t.n(c),i=t(7689),o=t(851),u=t(2791);var l=t.p+"static/media/Blank_woman.30d84535377d5e9ae8bcac79e1523592.svg";var p,d=t.p+"static/media/Blank_man.63b4d4745186dc5a4eece2de7189f67a.svg",h=t(7930),f=t(168),m=t(6444),v=t(1032),g=m.ZP.ul(p||(p=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-gap: 10px;\n  margin-top: 2vh;\n  list-style: none;\n  font-size: 0.8em;\n\n  .cast-item {\n    display: flex;\n    width: 250px;\n    align-items: center;\n  }\n\n  .avatar {\n    margin: 5px;\n\n    width: 66px;\n    height: 66px;\n    object-fit: cover;\n    border-radius: 5px;\n    flex-shrink: 0;\n  }\n\n  .actor-name,\n  .character-name {\n    font-weight: 700;\n    display: block;\n  }\n\n  .character-name {\n    color: #bf4352;\n  }\n\n  .no-cast {\n    ","\n  }\n"])),v.K),x=t(8290),b=(t(5862),t(184)),w=function(n){var e=n.cards;return Array(e).fill(0).map((function(n,e){return(0,b.jsxs)("div",{className:"cast-item",children:[(0,b.jsx)("div",{className:"avatar",children:(0,b.jsx)(x.Z,{width:66,height:66})}),(0,b.jsxs)("div",{className:"actor-card",children:[(0,b.jsx)("p",{className:"actor-name",children:(0,b.jsx)(x.Z,{width:75})}),(0,b.jsx)("p",{className:"character-name",children:(0,b.jsx)(x.Z,{width:75})})]})]},e)}))},j=function(){var n=(0,i.UO)().movieId,e=(0,u.useState)([]),t=(0,r.Z)(e,2),c=t[0],p=t[1],f=(0,u.useState)(!1),m=(0,r.Z)(f,2),v=m[0],x=m[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,o.zv(n);case 4:t=e.sent,p(t.cast),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){o.jw.abort()}}),[n]),(0,b.jsxs)(g,{children:[v&&(0,b.jsx)(w,{cards:4}),v||0!==c.length?c.map((function(n){var e=n.name,t=n.character,a=n.profile_path,r=n.id,c=n.gender,s=a?"".concat(o.eG,"w185/").concat(a):function(n){return 1===n?l:2===n?d:h.Z}(c),i=a?"".concat(e," profile"):"No image";return(0,b.jsxs)("li",{className:"cast-item",children:[(0,b.jsx)("img",{className:"avatar",src:s,alt:i}),(0,b.jsxs)("div",{className:"actor-card",children:[(0,b.jsx)("p",{className:"actor-name",children:e}),(0,b.jsx)("p",{className:"character-name",children:t})]})]},r)})):(0,b.jsxs)("p",{className:"no-cast",children:["We don't have information about casting for this movie"," "]})]})}},1032:function(n,e,t){t.d(e,{K:function(){return c}});var a,r=t(168),c=(0,t(6444).iv)(a||(a=(0,r.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: #bf4352;\n  text-align: center;\n  margin-top: 1vh;\n"])))},851:function(n,e,t){t.d(e,{Df:function(){return f},TP:function(){return v},eG:function(){return i},jw:function(){return l},tx:function(){return w},z1:function(){return d},zv:function(){return x}});var a=t(5861),r=t(7757),c=t.n(r),s=t(1243),i="https://image.tmdb.org/t/p/",o=new Map,u="en-US",l=new AbortController,p=s.Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTMxNDhmYjNlMjk2YmI3YmM0MGQyZjkzMDg2NWUyYSIsInN1YiI6IjYxMmJkOWRlNDJmMTlmMDA0MjllYzRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUcOqubdlFiw4Vo4XJp8VttB73h6Ocj7p2Hqc1K-jGE"}});function d(n){return h.apply(this,arguments)}function h(){return h=(0,a.Z)(c().mark((function n(e){var t,a,r,s,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=i.length>1&&void 0!==i[1]?i[1]:1,a=i.length>2&&void 0!==i[2]?i[2]:u,n.prev=2,r="search-movies-".concat(e,"-").concat(t,"-").concat(a),!o.has(r)){n.next=6;break}return n.abrupt("return",o.get(r));case 6:return n.next=8,p.get("search/movie",{params:{query:e,include_adult:!0,page:t,language:a}});case 8:return s=n.sent,o.set(r,s.data),n.abrupt("return",s.data);case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])}))),h.apply(this,arguments)}function f(){return m.apply(this,arguments)}function m(){return m=(0,a.Z)(c().mark((function n(){var e,t,a,r,s,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=i.length>0&&void 0!==i[0]?i[0]:1,t=i.length>1&&void 0!==i[1]?i[1]:u,a=i.length>2&&void 0!==i[2]?i[2]:"day",n.prev=3,r="trending-movies-".concat(a,"-").concat(e,"-").concat(t),!o.has(r)){n.next=7;break}return n.abrupt("return",o.get(r));case 7:return n.next=9,p.get("trending/movie/".concat(a),{params:{include_adult:!0,page:e,language:t}});case 9:return s=n.sent,o.set(r,s.data),n.abrupt("return",s.data);case 14:n.prev=14,n.t0=n.catch(3),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[3,14]])}))),m.apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return g=(0,a.Z)(c().mark((function n(e){var t,a,r,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=s.length>1&&void 0!==s[1]?s[1]:u,n.prev=1,a="movie-details-".concat(e,"-").concat(t),!o.has(a)){n.next=5;break}return n.abrupt("return",o.get(a));case 5:return n.next=7,p.get("movie/".concat(e),{params:{language:t}});case 7:return r=n.sent,o.set(a,r.data),n.abrupt("return",r.data);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),g.apply(this,arguments)}function x(n){return b.apply(this,arguments)}function b(){return b=(0,a.Z)(c().mark((function n(e){var t,a,r,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=s.length>1&&void 0!==s[1]?s[1]:u,n.prev=1,a="movie-credits-".concat(e,"-").concat(t),!o.has(a)){n.next=5;break}return n.abrupt("return",o.get(a));case 5:return n.next=7,p.get("movie/".concat(e,"/credits"),{params:{language:t}});case 7:return r=n.sent,o.set(a,r.data),n.abrupt("return",r.data);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),b.apply(this,arguments)}function w(n){return j.apply(this,arguments)}function j(){return j=(0,a.Z)(c().mark((function n(e){var t,a,r,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,a=s.length>2&&void 0!==s[2]?s[2]:u,n.prev=2,n.next=5,p.get("movie/".concat(e,"/reviews"),{params:{language:a,page:t}});case 5:return r=n.sent,n.abrupt("return",r.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])}))),j.apply(this,arguments)}}}]);
//# sourceMappingURL=442.29026b4b.chunk.js.map