"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[290],{2049:function(n,t,e){e.d(t,{e:function(){return l}});var r,a=e(7689),i=e(1087),o=e(168),c=e(6444).ZP.ul(r||(r=(0,o.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 10px;\n  padding: 0;\n  justify-items: center;\n\n  img {\n    width: 200px;\n    height: 300px;\n    border-radius: 5px;\n    object-fit: cover;\n  }\n\n  li {\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid red;\n    border-radius: 5px;\n    width: 200px;\n\n    :hover {\n      transform: scale(1.03);\n      box-shadow: 0 0 10px rgb(0 0 0 / 0.2);\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: #000;\n    font-weight: 500;\n  }\n\n  .movie-name {\n    padding: 5px;\n  }\n\n  ul {\n  }\n"]))),s=e(851),u=e(6801),p=e(184),l=function(n){var t=n.movies,e=(0,a.TH)();return(0,p.jsx)(c,{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,r=n.title,a=n.poster_path,o=a?"".concat(s.eG,"w185/").concat(a):u,c=a?"".concat(r," poster"):"No poster";return(0,p.jsx)("li",{children:(0,p.jsxs)(i.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,p.jsx)("img",{src:o,alt:c}),(0,p.jsx)("p",{className:"movie-name",children:r})]})},t)}))})}},389:function(n,t,e){e.d(t,{p:function(){return i}});var r,a=e(168),i=e(6444).ZP.div(r||(r=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-gap: 10px;\n  padding: 0;\n  justify-items: center;\n\n  .poster {\n    margin-bottom: 5px;\n  }\n"])))},4921:function(n,t,e){e.d(t,{A:function(){return i}});var r=e(8290),a=(e(5862),e(184)),i=function(n){var t=n.cards;return Array(t).fill(0).map((function(n,t){return(0,a.jsxs)("div",{className:"card-skeleton",children:[(0,a.jsx)("div",{className:"poster",children:(0,a.jsx)(r.Z,{width:200,height:300})}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(r.Z,{width:200,height:25})})]},t)}))}},1032:function(n,t,e){e.d(t,{K:function(){return i}});var r,a=e(168),i=(0,e(6444).iv)(r||(r=(0,a.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: #bf4352;\n  text-align: center;\n  margin-top: 1vh;\n"])))},1154:function(n,t,e){e.d(t,{Dx:function(){return p},aV:function(){return u},qx:function(){return l}});var r,a,i,o=e(168),c=e(1032),s=e(6444),u=s.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  padding: 0;\n  border-bottom: 2px solid #bf4352;\n\n  li {\n    width: 70px;\n    text-align: center;\n    padding: 5px;\n  }\n"]))),p=s.ZP.h2(a||(a=(0,o.Z)(["\n  color: #bf4352;\n  font-size: 1.5em;\n  margin-block: 1vh;\n"]))),l=s.ZP.div(i||(i=(0,o.Z)(["\n  ","\n"])),c.K)},943:function(n,t,e){e.r(t),e.d(t,{default:function(){return J}});var r,a,i,o=e(5861),c=e(9439),s=e(7757),u=e.n(s),p=e(2049),l=e(168),d=e(6444),h=d.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  margin-inline: auto;\n  margin-bottom: 25px;\n  width: 100%;\n  max-width: 300px;\n  background-color: #fff;\n  overflow: hidden;\n"]))),f=d.ZP.input(a||(a=(0,l.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 32px;\n  font: inherit;\n  font-size: 20px;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  border: 1px solid #bf4352;\n  border-left: none;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=d.ZP.button(i||(i=(0,l.Z)(["\n  display: inline-block;\n  width: 32px;\n  height: 32px;\n  border: 1px solid #bf4352;\n  border-right: none;\n  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n\n  &:hover {\n    opacity: 1;\n\n    svg {\n      stroke: #bf4352;\n    }\n  }\n"]))),x=e(8683),m=e(4925),v=e(184),b=["width","height"],w=function(n){var t=n.width,e=n.height,r=(0,m.Z)(n,b);return(0,v.jsx)("svg",(0,x.Z)((0,x.Z)({xmlns:"http://www.w3.org/2000/svg",width:t,height:e,viewBox:"0 0 24 24"},r),{},{children:(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",viewBox:"0 0 24 24",children:[(0,v.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,v.jsx)("path",{d:"m21 21-4.35-4.35"})]})}))},j=function(n){var t=n.onSubmit;return(0,v.jsxs)(h,{onSubmit:function(n){n.preventDefault();var e=n.target,r=new FormData(e),a=Object.fromEntries(r.entries());t(a)},children:[(0,v.jsx)(g,{type:"submit",name:"search",children:(0,v.jsx)(w,{})}),(0,v.jsx)(f,{type:"search",name:"searchMovie",required:!0})]})},y=e(389),Z=e(4921),k=e(4881),z=e(2791),N=e(1087),M=e(851),I=e(1154),J=function(){var n=(0,z.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,N.lr)(),i=(0,c.Z)(a,2),s=i[0],l=i[1],d=(0,z.useState)(!1),h=(0,c.Z)(d,2),f=h[0],g=h[1];(0,z.useEffect)((function(){var n,t=null!==(n=s.get("query"))&&void 0!==n?n:"";if(t){var e=function(){var n=(0,o.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,M.z1(t);case 4:e=n.sent,r(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:return n.prev=11,g(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return e(),function(){M.jw.abort()}}}),[s]);var x=function(n){var t=n.searchMovie;if(""===t)return l({});l({query:t})},m=e.length>0,b=s.get("query");return f?(0,v.jsxs)(k.W,{children:[(0,v.jsx)(j,{onSubmit:x}),(0,v.jsx)(y.p,{children:(0,v.jsx)(Z.A,{cards:5})})]}):m||null===b?(0,v.jsxs)(k.W,{children:[(0,v.jsx)(j,{onSubmit:x}),(0,v.jsx)(p.e,{movies:e})]}):(0,v.jsxs)(k.W,{children:[(0,v.jsx)(j,{onSubmit:x}),(0,v.jsxs)(I.qx,{className:"no-cast",children:['No results from the search "',b,'"']})]})}},851:function(n,t,e){e.d(t,{Df:function(){return f},TP:function(){return x},eG:function(){return c},jw:function(){return p},tx:function(){return w},z1:function(){return d},zv:function(){return v}});var r=e(5861),a=e(7757),i=e.n(a),o=e(1243),c="https://image.tmdb.org/t/p/",s=new Map,u="en-US",p=new AbortController,l=o.Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTMxNDhmYjNlMjk2YmI3YmM0MGQyZjkzMDg2NWUyYSIsInN1YiI6IjYxMmJkOWRlNDJmMTlmMDA0MjllYzRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qUcOqubdlFiw4Vo4XJp8VttB73h6Ocj7p2Hqc1K-jGE"}});function d(n){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(i().mark((function n(t){var e,r,a,o,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=c.length>1&&void 0!==c[1]?c[1]:1,r=c.length>2&&void 0!==c[2]?c[2]:u,n.prev=2,a="search-movies-".concat(t,"-").concat(e,"-").concat(r),!s.has(a)){n.next=6;break}return n.abrupt("return",s.get(a));case 6:return n.next=8,l.get("search/movie",{params:{query:t,include_adult:!0,page:e,language:r}});case 8:return o=n.sent,s.set(a,o.data),n.abrupt("return",o.data);case 13:n.prev=13,n.t0=n.catch(2),console.log(n.t0);case 16:case"end":return n.stop()}}),n,null,[[2,13]])}))),h.apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(i().mark((function n(){var t,e,r,a,o,c=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:1,e=c.length>1&&void 0!==c[1]?c[1]:u,r=c.length>2&&void 0!==c[2]?c[2]:"day",n.prev=3,a="trending-movies-".concat(r,"-").concat(t,"-").concat(e),!s.has(a)){n.next=7;break}return n.abrupt("return",s.get(a));case 7:return n.next=9,l.get("trending/movie/".concat(r),{params:{include_adult:!0,page:t,language:e}});case 9:return o=n.sent,s.set(a,o.data),n.abrupt("return",o.data);case 14:n.prev=14,n.t0=n.catch(3),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[3,14]])}))),g.apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(i().mark((function n(t){var e,r,a,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=o.length>1&&void 0!==o[1]?o[1]:u,n.prev=1,r="movie-details-".concat(t,"-").concat(e),!s.has(r)){n.next=5;break}return n.abrupt("return",s.get(r));case 5:return n.next=7,l.get("movie/".concat(t),{params:{language:e}});case 7:return a=n.sent,s.set(r,a.data),n.abrupt("return",a.data);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),m.apply(this,arguments)}function v(n){return b.apply(this,arguments)}function b(){return b=(0,r.Z)(i().mark((function n(t){var e,r,a,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=o.length>1&&void 0!==o[1]?o[1]:u,n.prev=1,r="movie-credits-".concat(t,"-").concat(e),!s.has(r)){n.next=5;break}return n.abrupt("return",s.get(r));case 5:return n.next=7,l.get("movie/".concat(t,"/credits"),{params:{language:e}});case 7:return a=n.sent,s.set(r,a.data),n.abrupt("return",a.data);case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),b.apply(this,arguments)}function w(n){return j.apply(this,arguments)}function j(){return j=(0,r.Z)(i().mark((function n(t){var e,r,a,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:1,r=o.length>2&&void 0!==o[2]?o[2]:u,n.prev=2,n.next=5,l.get("movie/".concat(t,"/reviews"),{params:{language:r,page:e}});case 5:return a=n.sent,n.abrupt("return",a.data);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[2,9]])}))),j.apply(this,arguments)}},6801:function(n,t,e){n.exports=e.p+"static/media/poster-placeholder.105b59275185dba6d5db.jpg"}}]);
//# sourceMappingURL=290.9e583715.chunk.js.map