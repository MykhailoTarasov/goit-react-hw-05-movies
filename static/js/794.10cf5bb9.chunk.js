"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[794],{1687:function(n,e,t){t.d(e,{CG:function(){return l},EG:function(){return v},JU:function(){return h},Of:function(){return p},zt:function(){return u}});var r=t(5861),i=t(7757),a=t.n(i),s=t(5294),c="ea0b04790d5245d0350b210d2ab5fbd3";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(a().mark((function n(e){var t,r,i,u=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:1,r=new URLSearchParams({api_key:c,query:e,page:t}),n.next=4,s.Z.get("/search/movie?".concat(r));case 4:return i=n.sent,n.abrupt("return",i.data);case 6:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"},8866:function(n,e,t){var r=t(2598),i=t(184);e.Z=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(r.t3,{visible:!0,height:"80",width:"80",ariaLabel:"hourglass-loading",wrapperStyle:{},wrapperClass:"",colors:["#b6ddd8","#b6ddd8"]})})}},4794:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r,i,a,s,c,u,o,p,d,l=t(5861),f=t(9439),h=t(7757),x=t.n(h),v=t(1687),Z=t(8866),g=t(7689),m=t(168),j=t(5867),w=t(1087),b=j.ZP.div(r||(r=(0,m.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-begin;\n"]))),y=j.ZP.button(i||(i=(0,m.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 27px;\nheight: 27px;\nmargin: 0;\npadding: 0;\n\ncursor: pointer;\n\nborder: none;\nborder-radius: 4px;\nbackground-color: #eff8f8;\n"]))),k=(0,j.ZP)(w.OL)(a||(a=(0,m.Z)(["\nmargin: 10px 0px 10px 20px;\n"]))),P=j.ZP.div(s||(s=(0,m.Z)(["\ndisplay: flex;\nmargin-left: 20px;\n"]))),_=j.ZP.div(c||(c=(0,m.Z)(["\npadding: 15px;\n"]))),C=j.ZP.div(u||(u=(0,m.Z)(["\nmargin-left: 20px;\n"]))),L=(0,j.ZP)(w.OL)(o||(o=(0,m.Z)(["\ntext-decoration: none;\ncolor: #f8edeb;\n\nfont-size: 16px;\nline-height: 1.5;\nfont-weight: 500;\n"]))),O=j.ZP.ul(p||(p=(0,m.Z)(["\npadding: 0;\n"]))),S=j.ZP.ul(d||(d=(0,m.Z)(["\npadding-left: 20px;\n"]))),U=t(203),z=t(184),G=function(n){var e,t,r=n.data,i=(0,g.TH)(),a=r.title,s=r.overview,c=r.vote_average,u=r.poster_path,o=r.release_date,p=r.genres,d=o?o.slice(0,4):null,l=Math.ceil(10*c);return(0,z.jsxs)(b,{children:[(0,z.jsx)(k,{to:null!==(e=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/quizzes",children:(0,z.jsx)(y,{children:(0,z.jsx)(U.Ain,{})})}),(0,z.jsxs)(P,{children:[(0,z.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(u),width:250,alt:"poster"}),(0,z.jsxs)(_,{children:[(0,z.jsxs)("h2",{children:[a," ",d&&"(".concat(d,")")]}),(0,z.jsxs)("span",{children:["User score: ",l,"%"]}),(0,z.jsx)("h3",{children:"Overview"}),(0,z.jsx)("p",{children:s}),(0,z.jsx)("h3",{children:"Genres"}),(0,z.jsx)(O,{children:p&&p.map((function(n){return(0,z.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,z.jsxs)(C,{children:[(0,z.jsx)("h3",{children:"Additional informacion"}),(0,z.jsxs)(S,{children:[(0,z.jsx)("li",{children:(0,z.jsx)(L,{to:"cast",children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(L,{to:"reviews",children:"Reviews"})})]})]})]})},E=t(2791),R=t(5218),q=function(){var n=(0,E.useState)([]),e=(0,f.Z)(n,2),t=e[0],r=e[1],i=(0,E.useState)(!1),a=(0,f.Z)(i,2),s=a[0],c=a[1],u=(0,E.useState)(!1),o=(0,f.Z)(u,2),p=o[0],d=o[1],h=(0,g.UO)().movieId;return(0,E.useEffect)((function(){function n(){return(n=(0,l.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),d(!1),n.next=5,(0,v.CG)(h);case 5:e=n.sent,R.ZP.success("Movies found successfully!"),r(e),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),d(!0);case 13:return n.prev=13,c(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}h&&function(){n.apply(this,arguments)}()}),[h]),(0,z.jsxs)("div",{children:[(0,z.jsx)(G,{data:t}),(0,z.jsx)(g.j3,{}),p&&(0,z.jsx)("span",{children:"Error! Please, reload this page!"}),s&&(0,z.jsx)(Z.Z,{}),(0,z.jsx)(R.x7,{position:"top-right"})]})}}}]);
//# sourceMappingURL=794.10cf5bb9.chunk.js.map