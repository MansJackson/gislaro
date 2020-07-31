(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),l=a(10),o=a(157),m=a(113),u=a(158),s=a(155),f=(a(85),a(160)),b=a(152),d=a(153),h=a(161),E=a(154),g=a(162),p=a(151),j=a(60),y=a.n(j);function O(){return c.a.createElement(y.a,{type:"ThreeDots",color:"#3f51b5",height:300,width:300,timeout:8e3})}var v=a(26),S=a(145),k=a(147),N=a(148),_=a(114),C=a(156),x=a(164),w=a(33),T=a(143),z=Object(T.a)((function(e){return{form_control:{display:"flex",justifyContent:"center"},form_element:{margin:".5rem"},switch:{display:"flex",justifyContent:"center"},app:{backgroundColor:"whitesmoke",minHeight:"100vh"},notification:{position:"fixed",padding:"1rem",bottom:"1rem",right:"1rem",backgroundColor:"blanchedalmond",borderRadius:".2rem",zIndex:"1"},card:Object(w.a)({display:"flex",alignItems:"center",textAlign:"center",margin:".5rem",flexDirection:"column",padding:0},e.breakpoints.up("sm"),{padding:"1rem"}),card__image:{width:330,height:330}}}));function P(e){var t=e.album,a=e.callback,r=Object(n.useState)(t.genre[0]),i=Object(l.a)(r,2),o=i[0],m=i[1],u=z(),s=t.title,b=t.genre,d=t.cover_image,h=t.year,E=s.split(" - ")[0],g=s.split(" - ")[1];return c.a.createElement(S.a,{className:u.card},c.a.createElement(k.a,{className:u.card__image,image:d}),c.a.createElement(N.a,null,c.a.createElement(_.a,{gutterBottom:!0,variant:"h5",component:"h5"},g," ","-",h),c.a.createElement(_.a,{variant:"body2",component:"p"},E),c.a.createElement(C.a,{variant:"outlined",id:"demo-simple-select-filled",value:o,onChange:function(e){return m(e.target.value)},style:{marginTop:"1rem"}},b.map((function(e){return c.a.createElement(x.a,{value:e,key:Object(f.a)()},e)})))),c.a.createElement(p.a,{size:"medium",color:"primary",onClick:function(){return a(Object(v.a)(Object(v.a)({},t),{},{genre:o}))}},"Add"))}var A=a(159),D=Object(T.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(2)}}}}));function B(e){var t=e.count,a=e.page,n=e.setPage,r=D();return c.a.createElement("div",{className:r.root},c.a.createElement(A.a,{count:t,page:a,onChange:function(e,t){n(t)},size:"small"}))}function J(e){var t=e.notify,a=Object(n.useState)(""),r=Object(l.a)(a,2),i=r[0],o=r[1],m=Object(n.useState)(),u=Object(l.a)(m,2),s=u[0],j=u[1],y=Object(n.useState)(!1),v=Object(l.a)(y,2),S=v[0],k=v[1],N=Object(n.useState)(!1),_=Object(l.a)(N,2),C=_[0],x=_[1],w=Object(n.useState)(!1),T=Object(l.a)(w,2),A=T[0],D=T[1],J=Object(n.useState)(1),L=Object(l.a)(J,2),M=L[0],R=L[1],I=Object(n.useState)(),q=Object(l.a)(I,2),F=q[0],G=q[1],H=z();function W(e){var a=e.id,n=e.genre,c={id:a,title:e.title,genre:n,cover_image:e.cover_image,year:e.year,master_url:e.master_url};fetch("/api/albums",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){t(e)})).catch((function(e){t(e.message)}))}function $(e){if(e&&e.preventDefault(),""!==i){var a="/search?page=".concat(M);C&&(a+="&barcode=true"),A&&(a+="&masters=true"),k(!0),j(null),G(null),fetch(a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({query:i})}).then((function(e){return e.json()})).then((function(e){k(!1),j(e.results),G(e.pagination.pages)}))}else t("Search field can not be empty")}return Object(n.useEffect)((function(){F&&$()}),[M]),c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{container:!0,justify:"center"},c.a.createElement("form",{onSubmit:$},c.a.createElement(d.a,null,c.a.createElement(h.a,{className:H.form_element,onChange:function(e){return o(e.target.value)},label:"Search",variant:"outlined"}),c.a.createElement(E.a,{className:H.switch,control:c.a.createElement(g.a,{checked:C,onChange:function(){return x(!C)},name:"barcode",color:"primary"}),label:"Barcode"}),c.a.createElement(E.a,{className:H.switch,control:c.a.createElement(g.a,{checked:A,onChange:function(){return D(!A)},name:"barcode",color:"primary"}),label:"Master"}),c.a.createElement(p.a,{className:H.form_element,onClick:$,variant:"contained",color:"primary"},"Search")))),c.a.createElement(b.a,{container:!0,justify:"space-evenly"},s?s.map((function(e){return c.a.createElement(b.a,{key:Object(f.a)(),item:!0,xs:12,sm:6,md:4},c.a.createElement(P,{album:e,callback:W}))})):"",S&&c.a.createElement(O,null)),c.a.createElement(b.a,{container:!0,justify:"center"},F?c.a.createElement(B,{count:F,page:M,setPage:R}):null))}var L=a(64),M=a.n(L);function R(e){var t=e.data,a=t.maxSize,n=t.records,r=t.name,i=t.genre,l=t.id,o=e.callback;return c.a.createElement(m.a,{style:{padding:"1rem",margin:"1rem",textAlign:"center",position:"relative"}},c.a.createElement(_.a,{variant:"h3"},r),c.a.createElement(_.a,{variant:"body1"},n.length,"/",a),c.a.createElement(_.a,{variant:"body2"},i),c.a.createElement(M.a,{style:{position:"absolute",top:".5rem",right:".5rem",cursor:"pointer"},color:"secondary",fontSize:"large",onClick:function(){return o(l)}}))}function I(e){var t=e.notify,a=Object(n.useState)(),r=Object(l.a)(a,2),i=r[0],o=r[1],m=Object(n.useState)(),u=Object(l.a)(m,2),s=u[0],E=u[1],g=Object(n.useState)([""]),j=Object(l.a)(g,2),y=j[0],O=j[1],S=Object(n.useState)(y[0]),k=Object(l.a)(S,2),N=k[0],T=k[1],P=z();function A(){fetch("/api/folders").then((function(e){return e.json()})).then((function(e){o(e)})).catch((function(e){t(e.message)}))}function D(e){"genre"===e.target.name&&T(e.target.value),E(Object(v.a)(Object(v.a)({},s),{},Object(w.a)({},e.target.name,e.target.value)))}function B(e){fetch("/api/folders/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){t(e),A()})).catch((function(e){t(e.message)}))}return Object(n.useEffect)((function(){A(),fetch("/api/genres").then((function(e){return e.json()})).then((function(e){O(Object.keys(e)),T(Object.keys(e)[0]),E(Object(v.a)(Object(v.a)({},s),{},{genre:Object.keys(e)[0]}))}))}),[]),c.a.createElement(b.a,{container:!0,justify:"center"},c.a.createElement(b.a,{container:!0,justify:"center"},c.a.createElement(_.a,{variant:"h5",component:"h5"},"Folders")),c.a.createElement(d.a,null,c.a.createElement(b.a,{container:!0,direction:"row",justify:"center"},c.a.createElement(h.a,{className:P.form_element,name:"name",onChange:D,label:"Name",variant:"outlined"}),c.a.createElement(h.a,{className:P.form_element,name:"maxSize",onChange:D,label:"Maximum Size",variant:"outlined"}),c.a.createElement(C.a,{variant:"outlined",className:P.form_element,value:N,onChange:D,name:"genre"},y.map((function(e){return c.a.createElement(x.a,{value:e,key:Object(f.a)()},e)})))),c.a.createElement(b.a,{container:!0,direction:"row",justify:"center"},c.a.createElement(p.a,{className:P.form_element,onClick:function(e){e.preventDefault(),fetch("/api/folders",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){t(e),A()})).catch((function(e){t(e.message)}))},variant:"contained",color:"primary"},"Add"),c.a.createElement(p.a,{className:P.form_element,onClick:function(){fetch("/api/albums/sort").then((function(e){return e.json()})).then((function(e){t(e),A()})).catch((function(e){t(e.message)}))},variant:"contained",color:"primary"},"Sort Records"))),c.a.createElement(b.a,{container:!0,justify:"center"},i?i.map((function(e){return c.a.createElement(b.a,{key:Object(f.a)(),item:!0,xs:12,sm:6,md:4},c.a.createElement(R,{data:e,callback:B}))})):""))}var q=a(54),F=a.n(q),G=a(65);function H(e){var t=e.album,a=e.callback,n=t.title,r=t.genre,i=t.cover_image,l=t.year,o=t.folder,m=t.position,u=n.split(" - ")[0],s=n.split(" - ")[1],f=z();return c.a.createElement(S.a,{className:f.card},c.a.createElement(k.a,{className:f.card__image,image:i}),c.a.createElement(N.a,null,c.a.createElement(_.a,{gutterBottom:!0,variant:"h5",component:"h5"},s," ","-"," ",l),c.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},u," ","-"," ",r),o?c.a.createElement(_.a,{variant:"h5",component:"h4"},o,"number"===typeof m&&"/".concat(m)):c.a.createElement("p",null,"Not yet sorted"),c.a.createElement(p.a,{size:"medium",color:"primary",onClick:function(){return a(t)}},"Remove")))}var W=a(66),$=a(165);function K(e){var t=e.selected,a=e.setSelected,r=e.genres,i=e.setGenres;function l(e){return t.includes(e)}function o(e){var n=e.target.classList.contains("genre_filter")?e.target.getAttribute("name"):e.target.parentNode.getAttribute("name");l(n)?a(t.filter((function(e){return e!==n}))):a([].concat(Object(W.a)(t),[n]))}return Object(n.useEffect)((function(){fetch("/api/genres").then((function(e){return e.json()})).then((function(e){i(Object.keys(e))}))}),[]),c.a.createElement("div",{className:"filters"},r?r.map((function(e){return l(e)?c.a.createElement($.a,{className:"genre_filter",key:Object(f.a)(),label:e,clickable:!0,onClick:o,name:e}):c.a.createElement($.a,{className:"genre_filter",color:"primary",key:Object(f.a)(),label:e,clickable:!0,onClick:o,name:e})})):null)}function Q(e){var t=e.notify,a=Object(n.useState)(),r=Object(l.a)(a,2),i=r[0],o=r[1],m=Object(n.useState)(),u=Object(l.a)(m,2),s=u[0],E=u[1],g=Object(n.useState)(),p=Object(l.a)(g,2),j=p[0],y=p[1],v=Object(n.useState)([]),S=Object(l.a)(v,2),k=S[0],N=S[1],C=Object(n.useState)(null),x=Object(l.a)(C,2),w=x[0],T=x[1],P=Object(n.useState)(""),A=Object(l.a)(P,2),D=A[0],J=A[1],L=Object(n.useState)(1),M=Object(l.a)(L,2),R=M[0],I=M[1],q=Object(n.useState)(),W=Object(l.a)(q,2),$=W[0],Q=W[1],U=z();function V(e){return X.apply(this,arguments)}function X(){return(X=Object(G.a)(F.a.mark((function e(a){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/albums/".concat(a.id),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){t(e),E(s.filter((function(e){return e.id!==a.id}))),y(s.slice(10*(R-1),10*(R-1)+10))})).catch((function(e){return t(e.message)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){fetch("/api/albums").then((function(e){return e.json()})).then((function(e){o(e),E(e),y(e.slice(10*(R-1),10*(R-1)+10))})).catch((function(e){t(e.message)}))}),[]),Object(n.useEffect)((function(){!function(){if(i){var e=new RegExp(D,"i"),t=i.filter((function(t){return e.test(t.title)}));k.forEach((function(e){t=t.filter((function(t){return t.genre!==e}))})),E(t),y(t.slice(10*(R-1),10*(R-1)+10))}}()}),[k,D,R]),Object(n.useEffect)((function(){s&&Q(Math.ceil(s.length/10))}),[s]),Object(n.useEffect)((function(){$&&$<R&&I(1)}),[$]),c.a.createElement("main",null,c.a.createElement(b.a,{container:!0,justify:"center"},c.a.createElement(d.a,{className:U.form_control},c.a.createElement(h.a,{className:U.form_element,onChange:function(e){return J(e.target.value)},label:"Search",variant:"outlined"}))),c.a.createElement(b.a,{container:!0,justify:"center"},c.a.createElement(K,{selected:k,setSelected:N,genres:w,setGenres:T})),s?c.a.createElement(b.a,{container:!0,justify:"center"},c.a.createElement(_.a,{component:"h6",variant:"subtitle1"},s.length,s.length>1?" hits":" hit")):null,c.a.createElement(b.a,{container:!0,justify:"space-evenly"},j?j.map((function(e){return c.a.createElement(b.a,{key:Object(f.a)(),item:!0,xs:12,sm:6,md:4},c.a.createElement(H,{album:e,callback:V}))})):c.a.createElement(O,null)),c.a.createElement(b.a,{container:!0,justify:"center"},$&&s&&0!==s.length?c.a.createElement(B,{count:$,page:R,setPage:I}):null))}function U(e){var t=e.children,a=e.value,n=e.index;return c.a.createElement("div",{role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},a===n&&c.a.createElement(o.a,{p:3},t))}K.defaultProps={selected:[],genres:null};var V=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),f=o[0],b=o[1],d=z(),h=function(e){b(e),setTimeout((function(){b("")}),3e3)};return c.a.createElement("div",{className:d.app},""!==f?c.a.createElement("div",{className:d.notification},f):"",c.a.createElement("nav",{className:"nav"},c.a.createElement(m.a,{square:!0},c.a.createElement(u.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){r(t)},centered:!0},c.a.createElement(s.a,{label:"Home"}),c.a.createElement(s.a,{label:"Library"}),c.a.createElement(s.a,{label:"Settings"})))),c.a.createElement("main",null,c.a.createElement(U,{value:a,index:0},c.a.createElement(J,{notify:h})),c.a.createElement(U,{value:a,index:1},c.a.createElement(Q,{notify:h})),c.a.createElement(U,{value:a,index:2},c.a.createElement(I,{notify:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(111)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.cb409e45.chunk.js.map