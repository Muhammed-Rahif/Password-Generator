(this["webpackJsonppassword-generator"]=this["webpackJsonppassword-generator"]||[]).push([[0],{114:function(e,t,n){e.exports={darkModeBtnWrapper:"DarkModeSwitch_darkModeBtnWrapper__1HdXc",darkModeBtn:"DarkModeSwitch_darkModeBtn__htIdO"}},119:function(e,t,n){},120:function(e,t,n){},13:function(e,t,n){e.exports={card:"PasswordGenCard_card__2OrwR",cardContent:"PasswordGenCard_cardContent__3pcJa",cardHeader:"PasswordGenCard_cardHeader__1yJ8i",cardTitle:"PasswordGenCard_cardTitle__10ajK",copyBtn:"PasswordGenCard_copyBtn__2ag6o",generateBtn:"PasswordGenCard_generateBtn__3nH7G",password:"PasswordGenCard_password__1Wjur"}},134:function(e,t){},136:function(e,t){},146:function(e,t){},148:function(e,t){},175:function(e,t){},176:function(e,t){},181:function(e,t){},183:function(e,t){},190:function(e,t){},209:function(e,t){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),s=(n(119),n(120),n(18)),d=n(13),i=n.n(d),u=n(7),l=n(112),h=n.n(l),j=n(3),b=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches,p=Object(a.createContext)(b);var g=function(e){var t=e.children,n=Object(a.useState)(b),r=Object(s.a)(n,2),c=r[0],o=r[1];return Object(j.jsx)(p.Provider,{value:{lightTheme:c,setLightTheme:o},children:t})},w=n(113),O=n.n(w);var m=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)("Enter a password or generate!"),d=Object(s.a)(o,2),l=d[0],b=d[1],g=Object(a.useState)(8),w=Object(s.a)(g,2),m=w[0],f=w[1],x=Object(a.useState)("Copy"),_=Object(s.a)(x,2),v=_[0],C=_[1],k=Object(a.useContext)(p).lightTheme,B=function(e){document.getElementById("password-input").value=e,c(e),b(function(e){switch(e){case 0:return"Too weak!";case 1:return"Weak!";case 2:return"Medium!";case 3:return"Good!";case 4:return"Strong!";default:return"Something wrong!"}}(h()(e).score))};return Object(j.jsxs)(u.b,{dark:!k,className:i.a.card,children:[Object(j.jsx)(u.d,{className:i.a.cardHeader,children:Object(j.jsxs)(u.e,{className:i.a.cardTitle,children:[Object(j.jsx)("small",{children:"Generate a super"}),Object(j.jsx)("br",{}),Object(j.jsx)("strong",{children:"strong password!"})]})}),Object(j.jsxs)(u.c,{className:i.a.cardContent,children:[Object(j.jsx)(u.h,{placeholder:"Click generate...",hint:l,counter:m,onChange:function(e){return B(e.value)},value:r,id:"password-input",uncontrolled:!0,className:i.a.password}),Object(j.jsx)(u.h,{onChange:function(e){var t=parseInt(e.value);if(!t)return f(0);f(t>64?64:t)},value:m.toString(),className:i.a.passLengthInput,width:50,uncontrolled:!0})]}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{className:i.a.copyBtn,title:"Password length",onClick:function(){C("Copied!"),navigator.clipboard.writeText(r),setTimeout((function(){C("Copy")}),2500)},bgColor:"var(--success)",children:v}),Object(j.jsx)(u.a,{className:i.a.generateBtn,title:"Password length",onClick:function(){f(m<12?12:m);var e=O.a.generate({length:m<12?12:m,numbers:!0,symbols:!0});B(e)},bgColor:"var(--info)",children:"Generate"})]})]})},f=n(114),x=n.n(f);var _=function(e){var t=Object(a.useContext)(p),n=t.lightTheme,r=t.setLightTheme;return Object(j.jsxs)("div",{className:x.a.darkModeBtnWrapper,children:[Object(j.jsx)(u.f,{dark:!n,children:"Dark Mode"}),Object(j.jsx)(u.g,{dark:!n,checked:!n,onClick:function(e){r(!e.target.checked)}})]})};var v=function(){var e=Object(a.useContext)(p).lightTheme;return Object(j.jsxs)(u.b,{dark:!e,className:"App",children:[Object(j.jsx)(m,{}),Object(j.jsx)(_,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(225);o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{children:Object(j.jsx)(v,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[226,1,2]]]);
//# sourceMappingURL=main.e0028b2f.chunk.js.map