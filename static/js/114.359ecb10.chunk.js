"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{1687:function(n,e,t){t.d(e,{CG:function(){return d},EG:function(){return g},JU:function(){return h},Of:function(){return p},zt:function(){return u}});var r=t(5861),a=t(7757),i=t.n(a),s=t(5294),c="ea0b04790d5245d0350b210d2ab5fbd3";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(i().mark((function n(e){var t,r,a,u=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=new URLSearchParams({api_key:c,query:e,page:t}),n.next=4,s.Z.get("/search/movie?".concat(r));case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)}))),l.apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"},8866:function(n,e,t){var r=t(2598),a=t(184);e.Z=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.t3,{visible:!0,height:"80",width:"80",ariaLabel:"hourglass-loading",wrapperStyle:{},wrapperClass:"",colors:["#b6ddd8","#b6ddd8"]})})}},5194:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,i,s=t(7689),c=t(168),u=t(1087),o=t(5867),p=o.ZP.ul(r||(r=(0,c.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\nflex-direction: column;\nlist-style: none;\njustify-content: center;\nalign-items: flex-begin;\ngap: 10px;\n\nmargin: 0;\npadding-left: 20px;\n\n"]))),l=o.ZP.li(a||(a=(0,c.Z)(["\ndisplay: flex;\n"]))),d=(0,o.ZP)(u.OL)(i||(i=(0,c.Z)(["\ndisplay: flex;\nalign-items: center;\nmax-height: 30px;\ntext-decoration: none;\ncolor: #c5b0a3;\n"]))),f=t(184),h=function(n){var e=n.movies,t=(0,s.TH)();return(0,f.jsx)(p,{children:e.map((function(n){return(0,f.jsx)(l,{children:(0,f.jsx)(d,{to:"/movies/".concat(n.id),state:{from:t},children:(0,f.jsx)("h4",{children:n.title})})},n.id)}))})}},5114:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,i,s,c,u,o=t(5861),p=t(9439),l=t(7757),d=t.n(l),f=t(1687),h=t(8866),x=t(5194),g=t(1087),v=t(168),m=t(5867),Z=t(71),b=m.ZP.div(r||(r=(0,v.Z)(["\ndisplay: flex;\nalign-items: center;\ngap: 15px;\npadding-left: 20px;\nheight: 60px;\n"]))),y=m.ZP.form(a||(a=(0,v.Z)(["\nheight: 27px;\n"]))),w=m.ZP.input(i||(i=(0,v.Z)(["\n  display: inline-block;\n  max-width: 300px;\n  height: 25px;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 30px;\n\n  border-radius: 4px;\n  color: #5b5b5b;\n  background-color: #d3f0ed;\n"]))),j=m.ZP.button(s||(s=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 27px;\n  height: 27px;\n  margin: 0;\n  padding: 0;\n\n  cursor: pointer;\n  position: absolute;\n  border: none;\n  border-radius: 4px;\n  background-color: #eff8f8;\n"]))),k=m.ZP.button(c||(c=(0,v.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 27px;\nheight: 27px;\nmargin: 0;\npadding: 0;\n\ncursor: pointer;\n\nborder: none;\nborder-radius: 4px;\nbackground-color: #eff8f8;\n"]))),P=(0,m.ZP)(Z.iZd)(u||(u=(0,v.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),S=t(203),_=t(184),U=function(n){var e=n.onSubmit;return(0,_.jsxs)(b,{children:[(0,_.jsx)(g.rU,{to:"/",children:(0,_.jsx)(k,{children:(0,_.jsx)(S.Ain,{})})}),(0,_.jsxs)(y,{onSubmit:function(n){n.preventDefault(),e(n.target.elements.searchQuery.value),n.target.reset()},children:[(0,_.jsx)(j,{type:"submit",children:(0,_.jsx)(P,{})}),(0,_.jsx)(w,{name:"searchQuery",type:"text",placeholder:"Search movies"})]})]})},C=t(2791),L=t(5218),O=function(){var n=(0,C.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1],a=(0,g.lr)(),i=(0,p.Z)(a,2),s=i[0],c=i[1],u=(0,C.useState)(!1),l=(0,p.Z)(u,2),v=l[0],m=l[1],Z=(0,C.useState)(!1),b=(0,p.Z)(Z,2),y=b[0],w=b[1],j=s.get("query")||"";(0,C.useEffect)((function(){function n(){return(n=(0,o.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),w(!1),n.next=5,(0,f.Of)(j);case 5:(e=n.sent).results.length>0?(L.ZP.success("Movies found successfully!"),r(e.results)):(L.ZP.error("Ooops...Nothing found. Update the search value, please!"),r([])),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),w(!0);case 12:return n.prev=12,m(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}""!==j&&function(){n.apply(this,arguments)}()}),[j]);return(0,_.jsxs)("div",{children:[(0,_.jsx)(U,{onSubmit:function(n){c(""!==n?{query:n}:{})}}),t.length>0&&(0,_.jsx)(x.Z,{movies:t}),y&&(0,_.jsx)("span",{children:"Error! Please, reload this page!"}),v&&(0,_.jsx)(h.Z,{}),(0,_.jsx)(L.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=114.359ecb10.chunk.js.map