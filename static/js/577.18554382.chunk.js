"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[577],{2049:function(n,t,e){e.d(t,{e:function(){return l}});var r,a=e(7689),c=e(1087),i=e(168),o=e(6444).ZP.ul(r||(r=(0,i.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 10px;\n  padding: 0;\n  justify-items: center;\n\n  img {\n    width: 200px;\n    height: 300px;\n    border-radius: 5px;\n    object-fit: cover;\n  }\n\n  li {\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid red;\n    border-radius: 5px;\n    width: 200px;\n\n    :hover {\n      transform: scale(1.03);\n      box-shadow: 0 0 10px rgb(0 0 0 / 0.2);\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: #000;\n    font-weight: 500;\n  }\n\n  .movie-name {\n    padding: 5px;\n  }\n"]))),s=e(851),u=e(6801),p=e(184),l=function(n){var t=n.movies,e=(0,a.TH)();return(0,p.jsx)(o,{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path,i=a?"".concat(s.eG,"w185/").concat(a):u,o=a?"".concat(r," poster"):"No poster";return(0,p.jsx)("li",{children:(0,p.jsxs)(c.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,p.jsx)("img",{src:i,alt:o}),(0,p.jsx)("p",{className:"movie-name",children:r})]})},t)}))})}},389:function(n,t,e){e.d(t,{p:function(){return c}});var r,a=e(168),c=e(6444).ZP.div(r||(r=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 10px;\n  padding: 0;\n  justify-items: center;\n\n  .poster {\n    margin-bottom: 5px;\n  }\n"])))},4921:function(n,t,e){e.d(t,{A:function(){return c}});var r=e(8290),a=(e(5862),e(184)),c=function(n){var t=n.cards;return Array(t).fill(0).map((function(n,t){return(0,a.jsxs)("div",{className:"card-skeleton",children:[(0,a.jsx)("div",{className:"poster",children:(0,a.jsx)(r.Z,{width:200,height:300})}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(r.Z,{width:200,height:25})})]},t)}))}},1266:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(7757),i=e.n(c),o=e(2049),s=e(389),u=e(4921),p=e(4881),l=e(2791),d=e(851),h=e(184);t.default=function(){var n=(0,l.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],f=(0,l.useState)(!1),v=(0,a.Z)(f,2),m=v[0],g=v[1];(0,l.useEffect)((function(){var n=function(){var n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,d.Df();case 4:t=n.sent,c(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){d.jw.abort()}}),[]);var x=e.length>0;return m?(0,h.jsx)(p.W,{children:(0,h.jsx)(s.p,{children:(0,h.jsx)(u.A,{cards:20})})}):(0,h.jsx)(p.W,{children:x&&(0,h.jsx)(o.e,{movies:e})})}},851:function(n,t,e){e.d(t,{Df:function(){return f},TP:function(){return m},eG:function(){return o},jw:function(){return p},tx:function(){return j},z1:function(){return d},zv:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),o="https://image.tmdb.org/t/p/",s=new Map,u="en-US",p=new AbortController,l=i.Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTMxNDhmYjNlMjk2YmI3YmM0MGQyZjkzMDg2NWUyYSIsInN1YiI6IjYxMmJkOWRlNDJmMTlmMDA0MjllYzRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUcOqubdlFiw4Vo4XJp8VttB73h6Ocj7p2Hqc1K-jGE"}});function d(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(c().mark((function n(t){var e,r,a,i,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2&&void 0!==o[2]?o[2]:u,n.prev=2,a="search-movies-".concat(t,"-").concat(e,"-").concat(r),!s.has(a)){n.next=6;break}return n.abrupt("return",s.get(a));case 6:return n.next=8,l.get("search/movie",{params:{query:t,include_adult:!0,page:e,language:r}});case 8:return i=n.sent,s.set(a,i.data),n.abrupt("return",i.data);case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])}))),h.apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(c().mark((function n(){var t,e,r,a,i,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:1,e=o.length>1&&void 0!==o[1]?o[1]:u,r=o.length>2&&void 0!==o[2]?o[2]:"day",n.prev=3,a="trending-movies-".concat(r,"-").concat(t,"-").concat(e),!s.has(a)){n.next=7;break}return n.abrupt("return",s.get(a));case 7:return n.next=9,l.get("trending/movie/".concat(r),{params:{include_adult:!0,page:t,language:e}});case 9:return i=n.sent,s.set(a,i.data),n.abrupt("return",i.data);case 14:n.prev=14,n.t0=n.catch(3),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[3,14]])}))),v.apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(c().mark((function n(t){var e,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=i.length>1&&void 0!==i[1]?i[1]:u,n.prev=1,r="movie-details-".concat(t,"-").concat(e),!s.has(r)){n.next=5;break}return n.abrupt("return",s.get(r));case 5:return n.next=7,l.get("movie/".concat(t),{params:{language:e}});case 7:return a=n.sent,s.set(r,a.data),n.abrupt("return",a.data);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),g.apply(this,arguments)}function x(n){return b.apply(this,arguments)}function b(){return b=(0,r.Z)(c().mark((function n(t){var e,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=i.length>1&&void 0!==i[1]?i[1]:u,n.prev=1,r="movie-credits-".concat(t,"-").concat(e),!s.has(r)){n.next=5;break}return n.abrupt("return",s.get(r));case 5:return n.next=7,l.get("movie/".concat(t,"/credits"),{params:{language:e}});case 7:return a=n.sent,s.set(r,a.data),n.abrupt("return",a.data);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),b.apply(this,arguments)}function j(n){return w.apply(this,arguments)}function w(){return w=(0,r.Z)(c().mark((function n(t){var e,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:1,r=i.length>2&&void 0!==i[2]?i[2]:u,n.prev=2,n.next=5,l.get("movie/".concat(t,"/reviews"),{params:{language:r,page:e}});case 5:return a=n.sent,n.abrupt("return",a.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])}))),w.apply(this,arguments)}},6801:function(n,t,e){n.exports=e.p+"static/media/poster-placeholder.105b59275185dba6d5db.jpg"}}]);
//# sourceMappingURL=577.18554382.chunk.js.map