(this.webpackJsonpMyFront=this.webpackJsonpMyFront||[]).push([[0],{162:function(e,t,n){},189:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),s=n(55),i=n.n(s),o=(n(162),n(19)),l=n(258),j=n(252),u=n(240),d=n(260),b=n(261),x=n(259),O=n(196),h=n(262),m=n(245),p=n(241),f=n(134),g=n.n(f),v=n(133),w=n.n(v),y=n(0),S=n.n(y),k=n(5),I=n(135),A=n(249),C=n(82),D=n(254),N=n(246),M=n(253),U=n(263),E=n(129),L=n(51),P=Object(E.a)({apiKey:"AIzaSyBuDfeDW7JOmM9-hjVvqAYzmNBVEkGhQ78",authDomain:"area-342718.firebaseapp.com",projectId:"area-342718",storageBucket:"area-342718.appspot.com",messagingSenderId:"427354900946",appId:"1:427354900946:web:efc41094ab3612375d200b"}),W=Object(L.b)(P),z=n(37),F=(n(70),n(2)),B=Object(I.a)(),T=Object(z.c)();function V(e){var t=function(){var t=Object(k.a)(S.a.mark((function t(n){var c,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=Object(z.a)(T,"Users",n),t.next=4,Object(z.b)(c);case 4:(r=t.sent).exists()&&(a=r.data(),e.setArea(a.area)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),n=function(){var n=Object(k.a)(S.a.mark((function n(a){var c,r;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),c=new FormData(a.currentTarget),n.prev=2,n.next=5,Object(L.c)(W,c.get("email"),c.get("password"));case 5:r=n.sent,console.log(r),alert("Logged in successfully welcome ".concat(c.get("email")," \ud83d\ude0d.")),e.setSigns("connected"),e.setInfo({email:c.get("email"),uid:r.user.uid,name:"",imageUrl:""}),t(r.user.uid),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),alert("Failed to login. \ud83d\ude22");case 16:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(e){return n.apply(this,arguments)}}(),c=function(){var n=Object(k.a)(S.a.mark((function n(c){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return alert("Logged in successfully welcome ".concat(c.profileObj.name," \ud83d\ude0d.")),console.log(c.profileObj),e.setSigns("connected"),e.setInfo({email:c.profileObj.email,uid:c.profileObj.googleId,name:c.profileObj.name,imageUrl:c.profileObj.imageUrl}),n.prev=4,t(c.profileObj.googleId),n.next=8,Object(z.d)(Object(z.a)(T,"Users",c.profileObj.googleId),{area:a.area});case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(4);case 13:case"end":return n.stop()}}),n,null,[[4,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(F.jsx)(A.a,{theme:B,children:Object(F.jsx)(U.a,{component:"main",maxWidth:"xs",children:Object(F.jsxs)(l.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(F.jsx)(O.a,{component:"h1",variant:"h4",children:"Sign In"}),Object(F.jsxs)(l.a,{component:"form",noValidate:!0,onSubmit:n,sx:{mt:3,mb:1},children:[Object(F.jsxs)(M.a,{container:!0,spacing:2,children:[Object(F.jsx)(M.a,{item:!0,xs:12,children:Object(F.jsx)(N.a,{required:!0,fullWidth:!0,id:"email",label:"Email",name:"email"})}),Object(F.jsx)(M.a,{item:!0,xs:12,children:Object(F.jsx)(N.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password"})})]}),Object(F.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3},children:"Sign In"})]}),Object(F.jsxs)("p",{children:["Vous n\u2019avez pas de compte ? ",Object(F.jsx)("a",{href:"/#",className:"link",onClick:function(){e.setSigns("up")},style:{cursor:"pointer"},children:"Inscrivez-vous"})]}),Object(F.jsx)("br",{}),Object(F.jsx)(C.GoogleLogin,{clientId:"427354900946-g2rrmevo58lr0l6p94jh2srr8s14dut4.apps.googleusercontent.com",buttonText:"Login",onSuccess:c,onFailure:function(e){alert("Failed to login. \ud83d\ude22")},cookiePolicy:"single_host_origin",style:{marginTop:"100px"}})]})})})}var q=Object(z.c)(),J=Object(I.a)();function G(e){var t=function(){var t=Object(k.a)(S.a.mark((function t(n){var a,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=new FormData(n.currentTarget),t.prev=2,t.next=5,Object(L.a)(W,a.get("email"),a.get("password"));case 5:return c=t.sent,console.log(c),alert("Account succesfully created !"),e.setSigns("connected"),e.setInfo({email:a.get("email"),uid:c.user.uid,imageUrl:""}),t.next=12,Object(z.d)(Object(z.a)(q,"Users",c.user.uid),{area:[]});case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),alert("Failed to signUp: ".concat(t.t0.code));case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(e){return t.apply(this,arguments)}}();return Object(F.jsx)(A.a,{theme:J,children:Object(F.jsx)(U.a,{component:"main",maxWidth:"xs",children:Object(F.jsxs)(l.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(F.jsx)(O.a,{component:"h1",variant:"h4",children:"Sign Up"}),Object(F.jsxs)(l.a,{component:"form",noValidate:!0,onSubmit:t,sx:{mt:3,mb:1},children:[Object(F.jsxs)(M.a,{container:!0,spacing:2,children:[Object(F.jsx)(M.a,{item:!0,xs:12,children:Object(F.jsx)(N.a,{required:!0,fullWidth:!0,id:"email",label:"Email",name:"email"})}),Object(F.jsx)(M.a,{item:!0,xs:12,children:Object(F.jsx)(N.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password"})})]}),Object(F.jsx)(D.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3},children:"Sign Up"})]}),Object(F.jsxs)("p",{children:["Vous avez un compte ? ",Object(F.jsx)("a",{href:"/#",className:"link",onClick:function(){e.setSigns("in")},style:{cursor:"pointer"},children:"Connectez-vous"})]})]})})})}var R=n(255),K=n(91),Y=n.n(K),_=Object(L.b)();function H(e){var t=function(){var t=Object(k.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:alert("Logout successfully"),e.setArea([]),e.setSigns("in"),e.setInfo({});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Y.a.get("/Email/"+e.info.email).then((function(e){})).catch((function(e){console.log(e)})),Object(F.jsxs)("div",{children:[Object(F.jsxs)("div",{className:"detailsProfile",children:[Object(F.jsx)("h4",{className:"yProfile",children:"YOUR PROFILE"}),Object(F.jsx)("h5",{children:"My Details"})]}),Object(F.jsxs)("div",{className:"profile",children:[Object(F.jsx)(R.a,{src:e.info.imageUrl,sx:{width:100,height:100}}),Object(F.jsxs)("div",{children:[Object(F.jsx)("p",{children:e.info.name}),Object(F.jsx)("p",{children:e.info.email})]})]}),Object(F.jsx)("div",{className:"profile"}),""===e.info.imageUrl?Object(F.jsx)(D.a,{variant:"contained",sx:{mt:3},onClick:function(){Object(L.d)(_).then((function(){alert("Logout successfully"),e.setArea([]),e.setSigns("in"),e.setInfo({})}))},children:"Logout"}):Object(F.jsx)(C.GoogleLogout,{clientId:"427354900946-g2rrmevo58lr0l6p94jh2srr8s14dut4.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:t})]})}var Q=n(22),X=n(266),Z=n(268),$=n(267),ee=n(239),te=n(265),ne=n(110),ae=n.n(ne),ce=n(256),re=n(250),se=n(251),ie=n(271),oe=n(242),le={PaperProps:{style:{maxHeight:224,width:50}}};function je(e){return Object(F.jsxs)(ie.a,{sx:{width:225,m:1},children:[Object(F.jsx)(re.a,{id:e.value,children:e.value}),Object(F.jsx)(oe.a,{labelId:e.value,id:"list",onChange:e.handleChange,input:Object(F.jsx)(ce.a,{label:e.value}),defaultValue:"",MenuProps:le,children:e.list.map((function(e){return Object(F.jsx)(se.a,{value:e,children:e},e)}))})]})}var ue=["Timer - 30s","Meteo - Paris","Btc - USD","Eth - USD","Nasa - Img of the day","Covid - Nbr of cases"],de=["Btc - Sms","Eth - Sms","Joke - Sms","Memes - Mail","Nasa - Mail","Meteo - Mail","Btc - Mail","Eth - Mail","Joke - Mail"];function be(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),j=i[0],u=i[1],d=Object(c.useState)(""),b=Object(o.a)(d,2),x=b[0],O=b[1];return"connected"===e.sign?Object(F.jsxs)(l.a,{children:[Object(F.jsx)(te.a,{size:"small",color:"primary","aria-label":"add",onClick:function(){r(!0)},children:Object(F.jsx)(ae.a,{})}),Object(F.jsxs)(X.a,{disableEscapeKeyDown:!0,open:a,onClose:function(){r(!1)},children:[Object(F.jsx)(ee.a,{children:"Add an AREA"}),Object(F.jsx)($.a,{children:Object(F.jsxs)(l.a,{component:"div",sx:{display:"flex"},children:[Object(F.jsx)(je,{value:"Action",list:ue,handleChange:function(e){u(e.target.value)}}),Object(F.jsx)(je,{value:"Reaction",list:de,handleChange:function(e){O(e.target.value)}})]})}),Object(F.jsxs)(Z.a,{children:[Object(F.jsx)(D.a,{onClick:function(){r(!1)},children:"Cancel"}),Object(F.jsx)(D.a,{onClick:function(){e.setArea([].concat(Object(Q.a)(e.area),[{action:j,reaction:x,isActive:!1}])),r(!1)},children:"Ok"})]})]})]}):Object(F.jsx)(l.a,{children:Object(F.jsx)(te.a,{size:"small",color:"primary","aria-label":"add",onClick:function(){r(!0)},disabled:!0,children:Object(F.jsx)(ae.a,{})})})}var xe=n(132),Oe=n.n(xe),he=n(247);function me(e){return Object(F.jsxs)("div",{className:"widget",children:[Object(F.jsx)(Oe.a,{sx:{color:"#bdb2ff"}}),Object(F.jsx)("div",{className:"switch",children:Object(F.jsx)(he.a,{color:"success",size:"small",onChange:function(t){var n=Object(Q.a)(e.area);e.item.isActive=t.target.checked,e.setArea(n)}})}),Object(F.jsx)("div",{className:"iconSearch",children:Object(F.jsxs)("p",{children:[e.item.action," / ",e.item.reaction]})})]})}var pe=Object(z.c)();function fe(e){var t=function(){e.area.map((function(e){return!0===e.isActive&&Y.a.get("/"+e.action+"/"+e.reaction).catch((function(e){console.log(e)})),""}))},n=function(){var n=Object(k.a)(S.a.mark((function n(){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return setInterval(t,3e4),n.prev=1,n.next=4,Object(z.d)(Object(z.a)(pe,"Users",e.info.uid),{area:e.area});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(){return n.apply(this,arguments)}}();return Object(c.useEffect)((function(){e.area!==[]&&n()}),[e.area]),Object(F.jsxs)("div",{className:"home",children:[Object(F.jsx)("div",{className:"addButton",children:Object(F.jsx)(be,{area:e.area,setArea:e.setArea,sign:e.sign})}),Object(F.jsx)("div",{className:"area",children:e.area.map((function(t,n){return Object(F.jsx)(me,{area:e.area,item:t,setArea:e.setArea},n)}))})]})}function ge(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("home"),s=Object(o.a)(r,2),i=s[0],f=s[1],v=Object(c.useState)("in"),y=Object(o.a)(v,2),S=y[0],k=y[1],I=Object(c.useState)({}),A=Object(o.a)(I,2),C=A[0],D=A[1];return Object(F.jsxs)(l.a,{sx:{display:"flex"},children:[Object(F.jsx)(u.a,{}),Object(F.jsx)(d.a,{position:"fixed",sx:{width:"100%",backgroundColor:"#1D2D51"},children:Object(F.jsx)(b.a,{children:Object(F.jsx)(O.a,{variant:"h6",noWrap:!0,component:"div",children:"Area"})})}),Object(F.jsx)(j.a,{sx:{flexShrink:0,backgroundColor:"#1D2D51","& .MuiDrawer-paper":{width:57,mt:8}},variant:"permanent",children:Object(F.jsx)(x.a,{children:["a","b"].map((function(e){return Object(F.jsx)(m.a,{children:Object(F.jsxs)(p.a,{children:["a"===e?Object(F.jsx)(h.a,{sx:{right:"8px"},onClick:function(){f("home")},children:Object(F.jsx)(w.a,{})}):"","b"===e?Object(F.jsx)(h.a,{sx:{right:"8px"},onClick:function(){f("sign")},children:Object(F.jsx)(g.a,{})}):""]})},e)}))})}),Object(F.jsxs)(l.a,{component:"main",sx:{flexGrow:1,p:3},children:[Object(F.jsx)(b.a,{}),Object(F.jsx)("div",{className:"menu",children:function(){if("sign"===i){if("in"===S)return Object(F.jsx)(V,{setSigns:k,setInfo:D,setArea:a});if("up"===S)return Object(F.jsx)(G,{setSigns:k,setInfo:D});if("connected"===S)return Object(F.jsx)("center",{children:Object(F.jsx)(H,{setSigns:k,info:C,setInfo:D,setArea:a})})}else if("home"===i)return Object(F.jsx)(fe,{sign:S,info:C,area:n,setArea:a})}()})]})]})}var ve=function(){return Object(F.jsx)("div",{children:Object(F.jsx)(ge,{})})};i.a.render(Object(F.jsx)(r.a.StrictMode,{children:Object(F.jsx)(ve,{})}),document.getElementById("root"))},70:function(e,t,n){}},[[189,1,2]]]);
//# sourceMappingURL=main.4acb44a0.chunk.js.map