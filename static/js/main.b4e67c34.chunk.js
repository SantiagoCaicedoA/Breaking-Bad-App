(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),s=c.n(r),a=c(14),i=c.n(a),j=(c(22),c(5)),d=c.n(j),b=c(15),o=c(3),l=c(16),u=c.n(l),O=(c(42),c.p+"static/media/logo.e6ecab44.png"),h=function(){return Object(n.jsx)("header",{className:"center",children:Object(n.jsx)("img",{src:O,alt:""})})},x=function(e){var t=e.item;return Object(n.jsx)("div",{className:"card",children:Object(n.jsxs)("div",{className:"card-inner",children:[Object(n.jsx)("div",{className:"card-front",children:Object(n.jsx)("img",{src:t.img,alt:""})}),Object(n.jsxs)("div",{className:"card-back",children:[Object(n.jsx)("h1",{children:t.name}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Actor Name:"})," ",t.portrayed]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Nickname:"})," ",t.nickname]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Birthday:"})," ",t.birthday]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("strong",{children:"Status:"})," ",t.status]})]})]})]})})},m=c.p+"static/media/spinner.11d9cde8.gif",p=function(){return Object(n.jsx)("img",{src:m,style:{width:"200px",margin:"auto",display:"block"},alt:"loading"})},f=function(e){var t=e.items;return e.isLoading?Object(n.jsx)(p,{}):Object(n.jsx)("section",{className:"cards",children:t.map((function(e){return Object(n.jsx)(x,{item:e},e.char_id)}))})},g=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)(!0),i=Object(o.a)(a,2),j=i[0],l=i[1],O=Object(r.useState)(""),x=Object(o.a)(O,2),m=x[0];x[1];return Object(r.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://www.breakingbadapi.com/api/characters?name=".concat(m));case 2:t=e.sent,s(t.data),l(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(h,{}),Object(n.jsx)(f,{isLoading:j,items:c})]})};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.b4e67c34.chunk.js.map