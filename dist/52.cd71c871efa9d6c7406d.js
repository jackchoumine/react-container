(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[52],{8052:(e,t,n)=>{"use strict";n.r(t);var a=n(7271),r=n.n(a),o=n(7650),i=n.n(o),l=n(3038),c=n.n(l),s=n(334),u=n(8577),p=n(2195),d=n(71),g=n(1120),m=n(7623),f=n(3875),S=(0,g.Z)((function(e){return(0,m.Z)({bar:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})}));const h=function(){var e=S();return r().createElement("div",{className:e.bar},r().createElement(f.Z,null))};var E=n(9713),b=n.n(E),w=n(8568),y=n(3530),v=n(8358),k=n(2318);function I(e){var t=e.isSignedIn,n=e.onSignOut,a=Z();return r().createElement(r().Fragment,null,r().createElement(w.Z,{position:"static",color:"default",elevation:0,className:a.appBar},r().createElement(v.Z,{className:a.toolbar},r().createElement(k.Z,{variant:"h6",color:"inherit",noWrap:!0,component:s.Link,to:"/"},"App"),r().createElement(y.Z,{color:"primary",variant:"outlined",className:a.link,component:s.Link,to:t?"/":"/auth/signin",onClick:function(){t&&n&&n()}},t?"Logout":"Login"))))}var Z=(0,g.Z)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"},a:{textDecoration:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap",justifyContent:"space-between"},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:b()({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}})),N=(0,a.lazy)((function(){return n.e(45).then(n.bind(n,8045))})),C=(0,a.lazy)((function(){return n.e(518).then(n.bind(n,518))})),x=(0,a.lazy)((function(){return n.e(647).then(n.bind(n,5647))})),B=(0,u.Z)({productionPrefix:"co"}),O=(0,d.lX)();const T=function(){var e=(0,a.useState)("true"===window.localStorage.getItem("isSignedIn")),t=c()(e,2),n=t[0],o=t[1],i=(0,a.useState)(JSON.parse(window.localStorage.getItem("user"))),l=c()(i,2),u=l[0],d=l[1];return(0,a.useEffect)((function(){n&&O.push("/dashboard")}),[n]),r().createElement(s.Router,{history:O},r().createElement(p.ZP,{generateClassName:B},r().createElement("div",null,r().createElement(I,{onSignOut:function(){return o(!1)},isSignedIn:n}),r().createElement(a.Suspense,{fallback:r().createElement(h,null)},r().createElement(s.Switch,null,r().createElement(s.Route,{path:"/auth"},r().createElement(C,{onSignIn:function(e){d(e),window.sessionStorage.setItem("user",JSON.stringify(e)),window.localStorage.setItem("user",JSON.stringify(e)),window.localStorage.setItem("isSignedIn",JSON.stringify(!0)),o(!0)}})),r().createElement(s.Route,{path:"/dashboard"},r().createElement(x,{user:u,isSignedIn:n})),r().createElement(s.Route,{path:"/",component:N}))))))};i().render(r().createElement(T,null),document.querySelector("#root"))}}]);