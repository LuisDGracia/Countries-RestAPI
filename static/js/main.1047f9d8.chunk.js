(this["webpackJsonpcountries-rest-api"]=this["webpackJsonpcountries-rest-api"]||[]).push([[0],{47:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),o=t.n(c),i=t(36),a=t.n(i),u=(t(47),t(11)),l=t(37),s=t.n(l).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/Countries-RestAPI",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COUNTRIES||"https://restcountries.eu/rest/v2/"}),d=t(3),h=t(2);function b(){var n=Object(d.a)(["\n  width: 80px;\n  margin-top: 10px;\n  margin-left: 5px;\n  padding: 5px;\n  background-color: ",";\n  text-align: center;\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);\n  display: inline-block;\n  cursor: pointer;\n\n  grid-colum: 1 / -1;\n  grid-row: 5 / 6\n\n  ","{\n    font-size: 14px;\n  }\n"]);return b=function(){return n},n}function f(){var n=Object(d.a)(["\n  font-weight: 400;\n"]);return f=function(){return n},n}function j(){var n=Object(d.a)(["\n  margin: 0;\n  color: ",";\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: capitalize;\n"]);return j=function(){return n},n}var x=h.b.p(j(),(function(n){return n.theme.colors.Text})),p=h.b.span(f()),m=h.b.span(b(),(function(n){return n.theme.colors.Elements}),p);var g=function(n){for(var e=n.info,t=n.array,o=[],i=[],a=[],l=[],d=0,h=Object.entries(e);d<h.length;d++){var b=Object(u.a)(h[d],2),f=b[0],j=b[1],g=j;"number"===typeof g&&(g=(g=j.toLocaleString()).replaceAll(".",",")),o.push(Object(r.jsxs)(x,{children:[f,": ",Object(r.jsx)(p,{children:g},g)]},f))}if(t)for(var O=function(){var n=Object(u.a)(w[v],2),e=n[0];n[1].map((function(n){switch(e){case"Top Level Domain":i.push(Object(r.jsx)(p,{style:{textTransform:"none"},children:n},n));break;case"Currencies":a.push(Object(r.jsx)(p,{children:"".concat(n.name," ")},n.name));break;case"Borders":l.push(Object(r.jsx)(m,{onClick:function(){return function(n){var e="";s.get("/alpha/".concat(n)).then((function(n){e=n.data.name,window.location.pathname="/".concat(e)}))}(n)},children:Object(r.jsx)(p,{children:n},n)},n))}return!1}))},v=0,w=Object.entries(t);v<w.length;v++)O();return Object(r.jsxs)(c.Fragment,{children:[o,void 0===t?Object(r.jsx)(r.Fragment,{}):Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)(x,{children:["Top Level Domain: ",i," "]}),Object(r.jsxs)(x,{children:["Currencies: ",a," "]}),Object(r.jsxs)(x,{style:{gridColumn:"1/-1"},children:["Borders Countries: ",l," "]})]})]})},O="375px",v="426px",w="768px",T="1024px",y="1440px",k="2560px",C={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(O,")"),mobileL:"(max-width: ".concat(v,")"),tablet:"(max-width: ".concat(w,")"),laptop:"(max-width: ".concat(T,")"),laptopL:"(max-width: ".concat(y,")"),desktop:"(max-width: ".concat(k,")"),desktopL:"(max-width: ".concat(k,")")};function E(){var n=Object(d.a)(["\n  width: 100%;\n  height: 50%;\n"]);return E=function(){return n},n}function S(){var n=Object(d.a)(["\n  height: 50%;\n  padding-left: 20px;\n"]);return S=function(){return n},n}function L(){var n=Object(d.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: ","\n"]);return L=function(){return n},n}function B(){var n=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px 5px 0 0;\n"]);return B=function(){return n},n}function D(){var n=Object(d.a)(["\n  width: 21%;\n  height: 300px;\n  max-height: 300px;\n  margin-bottom: 40px;\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);\n  border-radius: 5px;\n  background-color: ",";\n\n  &:hover{\n    cursor: pointer;\n  }\n\n  @media","{\n    width: 45%;\n  }\n  \n  @media","{\n    width: 100%;\n  }\n"]);return D=function(){return n},n}var F=h.b.div(D(),(function(n){return n.theme.colors.Elements}),C.tablet,C.mobileL),A=h.b.img(B()),_=h.b.p(L(),(function(n){return n.theme.colors.Text})),P=h.b.div(S()),R=h.b.div(E());var z=function(n){var e=n.flag,t=n.name,c=n.info,o=n.clicked;return Object(r.jsxs)(F,{onClick:o,children:[Object(r.jsx)(R,{children:Object(r.jsx)(A,{src:e,loading:"lazy",alt:"".concat(t," flag")})}),Object(r.jsxs)(P,{children:[Object(r.jsx)(_,{children:t}),Object(r.jsx)(g,{info:c})]})]})};function I(){var n=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n"]);return I=function(){return n},n}var M=h.b.div(I());var N=function(n){var e=n.countries;return Object(r.jsx)(M,{children:e.map((function(n){return Object(r.jsx)(z,{flag:n.flag,name:n.name,info:{population:n.population,region:n.region,capital:n.capital},clicked:function(){return e=n.name,void(window.location.pathname="/".concat(e));var e}},n.name)}))})};function U(){var n=Object(d.a)(["\n  padding: 0 40px;\n  background-color: ",";\n"]);return U=function(){return n},n}var W=h.b.div(U(),(function(n){return n.theme.colors.Background}));var H=function(n){var e=n.countries;return Object(r.jsx)(W,{children:0===e.length?Object(r.jsx)("p",{children:"Loading..."}):Object(r.jsx)(N,{countries:e})})},K=t(12);function J(){var n=Object(d.a)(["\n  cursor: pointer;\n  padding-right: 10px;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);\n"]);return J=function(){return n},n}function V(){var n=Object(d.a)(["\n  background-color: ",";\n"]);return V=function(){return n},n}function q(){var n=Object(d.a)(["\n  padding: 15px;\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n  cursor: pointer;\n  \n  border-radius: 5px;\n\n  // Arrow\n  appearance: none;\n\n  &:focus{\n    outline: none;\n  }\n\n  &:hover{\n    outline: none;\n  }\n\n  @media","{\n    align-self: start;\n  }\n"]);return q=function(){return n},n}function G(){var n=Object(d.a)(["\n  width: 90%;\n  background: none;\n  border: none;\n  margin: 5px 0px;\n  padding: 0 20px;\n\n  &:focus{\n    outline:none;\n    color: ",";\n  }\n\n  &::placeholder{\n    color: ",";\n  }\n\n  @media","{\n    \n  }\n\n"]);return G=function(){return n},n}function Q(){var n=Object(d.a)(["\n  width: 35%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);\n\n  @media","{\n    width: 100%;\n    padding: 20px;\n    margin-bottom: 30px;\n  }\n"]);return Q=function(){return n},n}function X(){var n=Object(d.a)(["\n  padding: 40px;\n  background-color: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n\n"]);return X=function(){return n},n}var Y=h.b.div(X(),(function(n){return n.theme.colors.Background})),Z=h.b.div(Q(),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Text}),C.tablet),$=h.b.input.attrs((function(){return{type:"text",placeholder:"Search for a country..."}}))(G(),(function(n){return n.theme.colors.Text}),(function(n){return n.theme.colors.Text}),C.tablet),nn=h.b.select(q(),(function(n){return n.theme.colors.Text}),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Elements}),C.tablet),en=h.b.option(V(),(function(n){return n.theme.colors.Background})),tn=h.b.div(J(),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Text}));var rn=function(n){var e=n.data,t=n.setData,c=e.original;return Object(r.jsxs)(Y,{children:[Object(r.jsxs)(Z,{children:[Object(r.jsx)(K.a,{icon:"search"}),Object(r.jsx)($,{onChange:function(){return function(){var n=document.getElementById("country").value.toLowerCase(),e=[];""!==n?(e.push(c.filter((function(e){return!!e.name.toLowerCase().includes(n)&&e}))),t.filter.apply(t,e)):""===n&&t.filter(c)}()},id:"country"})]}),Object(r.jsxs)(tn,{children:[Object(r.jsxs)(nn,{onChange:function(){return function(){var n=document.getElementById("mySelect").value;"all"!==n?s.get("/region/".concat(n)).then((function(n){var e=n.data;t.filter(e)})).catch((function(n){return n})):s.get("/".concat(n)).then((function(n){var e=n.data;t.filter(e)})).catch((function(n){return n}))}()},id:"mySelect",children:[Object(r.jsx)(en,{disabled:!0,children:"Filter By Continent"}),Object(r.jsx)(en,{value:"all",children:"All"}),Object(r.jsx)(en,{value:"africa",children:"Africa"}),Object(r.jsx)(en,{value:"americas",children:"Americas"}),Object(r.jsx)(en,{value:"asia",children:"Asia"}),Object(r.jsx)(en,{value:"europe",children:"Europe"}),Object(r.jsx)(en,{value:"oceania",children:"Oceania"})]}),Object(r.jsx)(K.a,{icon:"chevron-down"})]})]})};function cn(){var n=Object(d.a)(["\n  visibility: hidden;\n"]);return cn=function(){return n},n}function on(){var n=Object(d.a)([""]);return on=function(){return n},n}function an(){var n=Object(d.a)(["\n  color: ",";\n\n  svg{\n    margin-right: 10px;\n  }\n\n  &:hover{\n    cursor: pointer;\n  }\n"]);return an=function(){return n},n}function un(){var n=Object(d.a)(["\n  position:relative;\n  z-index:10;\n  height: 70px;\n  padding: 0 40px;\n  background-color: ",";\n  box-shadow: 0 0px 10px hsla(0, 0%, 0%, 0.2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  h1{\n    color: ",";\n\n    @media","{\n      font-size: 16px;\n    }\n  }\n"]);return un=function(){return n},n}var ln=h.b.header(un(),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Text}),C.tablet),sn=h.b.label(an(),(function(n){return n.theme.colors.Text})),dn=h.b.div(on()),hn=h.b.input.attrs((function(){return{type:"checkbox"}}))(cn()),bn={lightTheme:{colors:{Text:"hsl(200, 15%, 8%)",Elements:"hsl(0, 0%, 100%)",Background:"hsl(0, 0%, 98%)",Input:"hsl(0, 0%, 52%)"},mode:" Mode Dark",icon:"moon",transition:"0.5s"},darkTheme:{colors:{Text:"hsl(0, 0%, 100%)",Elements:"hsl(209, 23%, 22%)",Background:"hsl(207, 26%, 17%)"},icon:"sun",mode:"Light Mode",transition:"0.5s"}},fn=Object(c.createContext)(),jn=function(n){var e=n.children,t=Object(c.useState)("lightTheme"),o=Object(u.a)(t,2),i=o[0],a=o[1],l={themeMode:i,toggleTheme:function(){a((function(n){return"lightTheme"===n?"darkTheme":"lightTheme"}))}},s=bn[i];return Object(r.jsx)(fn.Provider,{value:l,children:Object(r.jsx)(h.a,{theme:s,children:e})})};var xn=function(){var n=Object(c.useContext)(fn),e=n.toggleTheme,t=n.themeMode;return Object(r.jsxs)(ln,{children:[Object(r.jsx)("h1",{children:"Where in the world?"}),Object(r.jsxs)(dn,{children:[Object(r.jsx)(hn,{id:"Theme",onChange:e}),Object(r.jsxs)(sn,{htmlFor:"Theme",children:[Object(r.jsx)(K.a,{icon:bn[t].icon}),bn[t].mode]})]})]})},pn=t(5),mn=t(41),gn=t(17);function On(){var n=Object(d.a)(["\n  color: ",";\n  grid-column: 1/-1;\n"]);return On=function(){return n},n}function vn(){var n=Object(d.a)(["\n  width:50%;\n  min-height: 100%;\n  padding-left: 40px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-tempplate-rows: auto;\n  grid-gap: 10px;\n\n  p{\n    font-size: 14px;\n  }\n\n  @media","{\n    width: 100%;\n    padding-left: 0;\n    display: flex;\n    flex-direction: column;\n\n    p{\n      font-size: 18px;\n    }\n  }\n"]);return vn=function(){return n},n}function wn(){var n=Object(d.a)(["\n  width: 100px;\n  padding: 10px 0;\n  background-color: ",";\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);\n  border-radius: 10px;\n\n  color: ",";\n\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n  cursor: pointer;\n\n  a{\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:visited{\n    color: ",";\n  }\n"]);return wn=function(){return n},n}function Tn(){var n=Object(d.a)([""]);return Tn=function(){return n},n}function yn(){var n=Object(d.a)(["\n  color: ",";\n"]);return yn=function(){return n},n}function kn(){var n=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n"]);return kn=function(){return n},n}function Cn(){var n=Object(d.a)(["\n  width: 50%;\n  height: 100%;\n\n  @media","{\n    width: 100%;\n  }\n"]);return Cn=function(){return n},n}function En(){var n=Object(d.a)(["\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  \n  @media","{\n    margin-top: 40px;\n    flex-flow: column wrap;\n  }\n"]);return En=function(){return n},n}function Sn(){var n=Object(d.a)(["\n  width: 100%;\n  min-height: calc(100vh - 70px);\n  padding: 40px;\n  background-color: ",";\n  display: flex;\n  flex-flow: column wrap;\n"]);return Sn=function(){return n},n}var Ln=h.b.div(Sn(),(function(n){return n.theme.colors.Background})),Bn=h.b.div(En(),C.tablet),Dn=h.b.div(Cn(),C.tablet),Fn=h.b.img(kn()),An=(h.b.p(yn(),(function(n){return n.theme.colors.Text})),h.b.div(Tn()),h.b.div(wn(),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Text}),(function(n){return n.theme.colors.Text}),(function(n){return n.theme.colors.Text}))),_n=h.b.div(vn(),C.tablet),Pn=h.b.h2(On(),(function(n){return n.theme.colors.Text}));var Rn=function(){var n=Object(pn.e)(),e=Object(c.useState)({}),t=Object(u.a)(e,2),o=t[0],i=t[1];return Object(c.useEffect)((function(){return s.get("/name/".concat(n.country,"?fullText=true")).then((function(n){i.apply(void 0,Object(mn.a)(n.data))})).catch((function(n){return console.log(n)})),function(){i({})}}),[n.country]),Object(r.jsxs)(Ln,{children:[Object(r.jsxs)(An,{onClick:function(){window.location.pathname="/"},children:[Object(r.jsx)(K.a,{icon:"arrow-left"}),Object(r.jsx)(gn.b,{to:"/",children:" Back "})]}),0===Object.entries(o).length?Object(r.jsx)("p",{children:"Loading..."}):Object(r.jsxs)(Bn,{children:[Object(r.jsx)(Dn,{children:Object(r.jsx)(Fn,{src:o.flag})}),Object(r.jsxs)(_n,{children:[Object(r.jsx)(Pn,{children:o.name}),Object(r.jsx)(g,{info:{"Native Name":o.nativeName,Population:o.population,Region:o.region,"Sub Region":o.subregion,Capital:o.capital},array:{"Top Level Domain":o.topLevelDomain,Currencies:o.currencies,Borders:o.borders}})]})]})]})};var zn=function(){var n=Object(c.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),l=a[0],d=a[1];return Object(c.useEffect)((function(){s.get("/all").then((function(n){o(n.data),d(n.data)})).catch((function(n){return n}))}),[]),Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)(pn.a,{path:"/",exact:!0,children:[Object(r.jsx)(xn,{}),Object(r.jsx)(rn,{data:{original:t,filter:l},setData:{countries:o,filter:d}}),Object(r.jsx)(H,{countries:l})]}),Object(r.jsxs)(pn.a,{path:"/:country",children:[Object(r.jsx)(xn,{}),Object(r.jsx)(Rn,{})]})]})},In=t(13),Mn=t(15);var Nn=function(){return In.b.add(Mn.e,Mn.c,Mn.d,Mn.b,Mn.a),Object(r.jsx)(gn.a,{children:Object(r.jsx)(zn,{})})},Un=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),o(n),i(n)}))};t(71);a.a.render(Object(r.jsx)(jn,{children:Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Nn,{})})}),document.getElementById("root")),Un()}},[[72,1,2]]]);
//# sourceMappingURL=main.1047f9d8.chunk.js.map