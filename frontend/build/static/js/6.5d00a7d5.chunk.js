(this["webpackJsonpdopejob-v2"]=this["webpackJsonpdopejob-v2"]||[]).push([[6],{520:function(e,t,a){"use strict";var n=a(480),r=Object(n.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));t.a=r},521:function(e,t,a){"use strict";var n=a(65),r=a(3),o=a(0),i=a.n(o),c=a(399),s=a(105),l=["children"],m=Object(c.a)((function(e){var t;return{card:(t={maxWidth:"475px","& > *":{flexGrow:1,flexBasis:"50%"}},Object(r.a)(t,e.breakpoints.down("sm"),{margin:"20px"}),Object(r.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),t),content:Object(r.a)({padding:e.spacing(5)+" !important"},e.breakpoints.down("lg"),{padding:e.spacing(3)+" !important"})}}));t.a=function(e){var t=e.children,a=Object(n.a)(e,l),r=m();return i.a.createElement(s.a,Object.assign({className:r.card,contentClass:r.content},a),t)}},522:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(475),i=a(82),c=a(508);t.a=function(){var e=(new Date).getFullYear(),t={__html:"&copy; ".concat(e," dopejob")};return r.a.createElement(o.a,{direction:"row",justifyContent:"space-between"},r.a.createElement(i.a,{variant:"subtitle2",component:c.a,href:"dopejob.herokuapp.com",target:"_blank",underline:"hover"},"dopejob.herokuapp.com"),r.a.createElement(i.a,{variant:"subtitle2",component:c.a,href:"dopejob.herokuapp.com",target:"_blank",underline:"hover",dangerouslySetInnerHTML:t}))}},524:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},546:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),i=a(24),c=a(476),s=a(490),l=a(475),m=a(82),u=a(223),d=a(520),p=a(521),g=a(140),b=a.n(g),h=a(163),E=a(12),f=a(16),x=a(3),v=a(23),w=a(399),j=a(497),y=a(505),O=a(489),k=a(492),C=a(506),S=a(499),I=a(512),A=a(513),B=a(487),D=a(504),W=a(406),T=a(405),P=a(524),z=a(110),F=a(403),H=a.n(F),q=a(404),N=a.n(q),R=a(77),_=Object(w.a)((function(e){return{redButton:Object(x.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[700],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},loginIcon:Object(x.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),loginInput:Object(f.a)({},e.typography.customInput)}}));var M=Object(v.b)((function(e){return{loading:e.auth.loading,isAuthenticated:e.auth.isAuthenticated,isAuthenticating:e.auth.isAuthenticating,statusText:e.auth.statusText}}),(function(e){return{authLogin:function(t,a){return e(Object(R.b)(t,a))},reset:function(){return e(Object(R.f)())}}}))((function(e,t){var a=Object.assign({},t),n=_(),i=Object(P.a)(),c=r.a.useState(!0),d=Object(E.a)(c,2),p=d[0],g=d[1],f=Object(v.c)(),x=r.a.useState(!1),w=Object(E.a)(x,2),F=w[0],q=w[1],M=function(){q(!F)},G=function(e){e.preventDefault()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{container:!0,direction:"column",justifyContent:"center",spacing:2},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(j.a,{sx:{alignItems:"center",display:"flex"}},r.a.createElement(u.a,{className:n.signDivider,orientation:"horizontal"}))),r.a.createElement(s.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center"},r.a.createElement(j.a,{sx:{mb:2}},r.a.createElement(m.a,{variant:"subtitle1"},"Sign in with Email address")))),r.a.createElement(T.a,{initialValues:{username:"",password:"",submit:null},validationSchema:W.a().shape({username:W.c().email("Must be a valid email").max(255).required("Email is required"),password:W.c().max(255).required("Password is required")}),onSubmit:function(){var e=Object(h.a)(b.a.mark((function e(t,a){var n,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.setErrors,r=a.setStatus,o=a.setSubmitting;try{i.current&&(r({success:!0}),o(!1)),c=t.username,s=t.password,f(Object(R.b)(c,s))}catch(l){console.error(l),i.current&&(r({success:!1}),n({submit:l.message}),o(!1))}case 2:case"end":return e.stop()}var c,s}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(t){var i=t.errors,c=t.handleBlur,s=t.handleChange,u=t.handleSubmit,d=t.isSubmitting,b=t.touched,h=t.values;return r.a.createElement("form",Object.assign({noValidate:!0,onSubmit:u},a),r.a.createElement(y.a,{fullWidth:!0,error:Boolean(b.username&&i.username),className:n.loginInput},r.a.createElement(O.a,{htmlFor:"outlined-adornment-email-login"},"Email Address / Username"),r.a.createElement(k.a,{id:"outlined-adornment-email-login",type:"email",value:h.username,name:"username",onBlur:c,onChange:s,label:"Email Address / Username",inputProps:{classes:{notchedOutline:n.notchedOutline}}}),b.username&&i.username&&r.a.createElement(C.a,{error:!0,id:"standard-weight-helper-text-email-login"}," ",i.username," ")),r.a.createElement(y.a,{fullWidth:!0,error:Boolean(b.password&&i.password),className:n.loginInput},r.a.createElement(O.a,{htmlFor:"outlined-adornment-password-login"},"Password"),r.a.createElement(k.a,{id:"outlined-adornment-password-login",type:F?"text":"password",value:h.password,name:"password",onBlur:c,onChange:s,endAdornment:r.a.createElement(S.a,{position:"end"},r.a.createElement(I.a,{"aria-label":"toggle password visibility",onClick:M,onMouseDown:G,edge:"end"},F?r.a.createElement(H.a,null):r.a.createElement(N.a,null))),label:"Password",inputProps:{classes:{notchedOutline:n.notchedOutline}}}),b.password&&i.password&&r.a.createElement(C.a,{error:!0,id:"standard-weight-helper-text-password-login"}," ",i.password," ")),r.a.createElement(l.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1},r.a.createElement(A.a,{control:r.a.createElement(B.a,{checked:p,onChange:function(e){return g(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),r.a.createElement(m.a,{variant:"subtitle1",component:o.b,to:e.login?"/pages/forgot-password/forgot-password"+e.login:"#",color:"secondary",sx:{textDecoration:"none"}},"Forgot Password?")),i.submit&&r.a.createElement(j.a,{sx:{mt:3}},r.a.createElement(C.a,{error:!0},i.submit)),e.statusText&&r.a.createElement(j.a,{sx:{mt:3}},r.a.createElement(C.a,{error:!0},e.statusText)),r.a.createElement(j.a,{sx:{mt:2}},r.a.createElement(z.a,null,r.a.createElement(D.a,{disableElevation:!0,disabled:d||e.loading||e.isAuthenticated,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary"},"Sign in"))))})))})),G=a(162),J=a(522);t.default=function(){var e=Object(i.a)(),t=Object(c.a)(e.breakpoints.down("sm"));return r.a.createElement(d.a,null,r.a.createElement(s.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"}},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(s.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"}},r.a.createElement(s.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0}},r.a.createElement(p.a,null,r.a.createElement(s.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center"},r.a.createElement(s.a,{item:!0,sx:{mb:3}},r.a.createElement(o.b,{to:"#"},r.a.createElement(G.a,null))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(s.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center"},r.a.createElement(s.a,{item:!0},r.a.createElement(l.a,{alignItems:"center",justifyContent:"center",spacing:1},r.a.createElement(m.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2"},"Hi, Welcome Back"),r.a.createElement(m.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":""},"Enter your credentials to continue"))))),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(M,{login:3})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(u.a,null)),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(s.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12},r.a.createElement(m.a,{component:o.b,to:"/signup",variant:"subtitle1",sx:{textDecoration:"none"}},"Don't have an account?")))))))),r.a.createElement(s.a,{item:!0,xs:12,sx:{m:3,mt:1}},r.a.createElement(J.a,null))))}}}]);
//# sourceMappingURL=6.5d00a7d5.chunk.js.map