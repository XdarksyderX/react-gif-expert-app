(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(7),c=n.n(i),r=(n(14),n(2)),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),i=Object(r.a)(n,2),c=i[0],o=i[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){var t=e.target;o(t.value)}})})},j=n(6),d=n.n(j),l=n(8),f=function(){var e=Object(l.a)(d.a.mark((function e(t){var n,a,i,c,r,s,u=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:5,a="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=").concat(n,"&api_key=viy2ehIQQAC13oaWvB3YN0GjHOS45JUD"),e.next=4,fetch(a);case 4:return i=e.sent,e.next=7,i.json();case 7:return c=e.sent,r=c.data,s=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.img;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn animate__delay-1s",children:[Object(u.jsx)("img",{src:t.url,alt:t.title}),Object(u.jsxs)("p",{children:[" ",t.title," "]})]})},m=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),i}(t),i=n.data,c=n.loading;return Object(u.jsxs)("div",{className:"gif-grid animate__animated animate__bounceInDown",children:[Object(u.jsx)("h3",{children:t}),c&&Object(u.jsx)("p",{className:"animate__animated animate__fadeIn animate__infinite",children:"Loading..."}),Object(u.jsx)("ul",{className:"gifs-container",children:i.map((function(e){return Object(u.jsx)(p,{img:e},e.id)}))})]})},b=function(){var e=Object(a.useState)(["One Punch"]),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:i}),Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)(m,{category:e},e)}))}),Object(u.jsx)("hr",{})]})};c.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e35af2c8.chunk.js.map