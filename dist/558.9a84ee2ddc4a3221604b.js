(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[558],{558:(e,t,n)=>{"use strict";n.r(t);var a=n(7271),r=n.n(a),o=n(7650),i=n.n(o),l=n(3038),c=n.n(l),s=n(334),u=n(8577),p=n(2195),d=n(71),g=n(9713),m=n.n(g),f=n(8568),S=n(3530),w=n(8358),h=n(2318),E=n(1120);function b(e){var t=e.isSignedIn,n=e.onSignOut,a=y();return r().createElement(r().Fragment,null,r().createElement(f.Z,{position:"static",color:"default",elevation:0,className:a.appBar},r().createElement(w.Z,{className:a.toolbar},r().createElement(h.Z,{variant:"h6",color:"inherit",noWrap:!0,component:s.Link,to:"/"},"App"),r().createElement(S.Z,{color:"primary",variant:"outlined",className:a.link,component:s.Link,to:t?"/":"/auth/signin",onClick:function(){t&&n&&n()}},t?"Logout":"Login"))))}var y=(0,E.Z)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"},a:{textDecoration:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap",justifyContent:"space-between"},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:m()({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}})),I=n(7623),v=n(3875),k=(0,E.Z)((function(e){return(0,I.Z)({bar:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}})})),Z=function(){var e=k();return r().createElement("div",{className:e.bar},r().createElement(v.Z,null))},N=(0,a.lazy)((function(){return n.e(775).then(n.bind(n,8775))})),C=(0,a.lazy)((function(){return n.e(437).then(n.bind(n,6437))})),x=(0,a.lazy)((function(){return n.e(767).then(n.bind(n,767))})),B=(0,u.Z)({productionPrefix:"co"}),O=(0,d.lX)();const T=function(){var e=(0,a.useState)("true"===window.localStorage.getItem("isSignedIn")),t=c()(e,2),n=t[0],o=t[1],i=(0,a.useState)(JSON.parse(window.localStorage.getItem("user"))),l=c()(i,2),u=l[0],d=l[1];return(0,a.useEffect)((function(){n&&O.push("/dashboard")}),[n]),r().createElement(s.Router,{history:O},r().createElement(p.ZP,{generateClassName:B},r().createElement("div",null,r().createElement(b,{onSignOut:function(){window.localStorage.removeItem("isSignedIn"),window.localStorage.removeItem("user"),window.sessionStorage.removeItem("user"),o(!1)},isSignedIn:n}),r().createElement(a.Suspense,{fallback:r().createElement(Z,null)},r().createElement(s.Switch,null,r().createElement(s.Route,{path:"/auth"},r().createElement(C,{onSignIn:function(e){d(e),window.sessionStorage.setItem("user",JSON.stringify(e)),window.localStorage.setItem("user",JSON.stringify(e)),window.localStorage.setItem("isSignedIn",JSON.stringify(!0)),o(!0)}})),r().createElement(s.Route,{path:"/dashboard"},r().createElement(x,{user:u,isSignedIn:n})),r().createElement(s.Route,{path:"/",component:N}))))))};i().render(r().createElement(T,null),document.querySelector("#root"))}}]);