(this["webpackJsonpcountries-rest-api"]=this["webpackJsonpcountries-rest-api"]||[]).push([[0],{48:function(n,e,t){},73:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),o=t.n(c),i=t(36),a=t.n(i),u=(t(48),t(7)),l=t(37),s=t.n(l).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/Countries-RestAPI",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COUNTRIES||"https://restcountries.eu/rest/v2/"}),d=t(12),h=t(3),b=t(2);function j(){var n=Object(h.a)(["\n  width: 80px;\n  margin-top: 10px;\n  margin-left: 5px;\n  padding: 5px;\n  background-color: ",";\n  text-align: center;\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);\n  display: inline-block;\n  cursor: pointer;\n\n  grid-colum: 1 / -1;\n  grid-row: 5 / 6\n\n  ","{\n    font-size: 14px;\n  }\n"]);return j=function(){return n},n}function f(){var n=Object(h.a)(["\n  font-weight: 400;\n"]);return f=function(){return n},n}function x(){var n=Object(h.a)(["\n  margin: 0;\n  color: ",";\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: capitalize;\n"]);return x=function(){return n},n}var p=b.b.p(x(),(function(n){return n.theme.colors.Text})),m=b.b.span(f()),O=b.b.span(j(),(function(n){return n.theme.colors.Elements}),m),g=t(5);var v=function(n){for(var e=n.info,t=n.array,o=Object(g.e)(),i=[],a=[],l=[],d=[],h=0,b=Object.entries(e);h<b.length;h++){var j=Object(u.a)(b[h],2),f=j[0],x=j[1],v=x;"number"===typeof v&&(v=(v=x.toLocaleString()).replaceAll(".",",")),i.push(Object(r.jsxs)(p,{children:[f,": ",Object(r.jsx)(m,{children:v},v)]},f))}if(t)for(var w=function(){var n=Object(u.a)(y[T],2),e=n[0];n[1].map((function(n){switch(e){case"Top Level Domain":a.push(Object(r.jsx)(m,{style:{textTransform:"none"},children:n},n));break;case"Currencies":l.push(Object(r.jsx)(m,{children:"".concat(n.name," ")},n.name));break;case"Borders":d.push(Object(r.jsx)(O,{onClick:function(){return function(n){var e="";s.get("/alpha/".concat(n)).then((function(n){e=n.data.name,o.push("/".concat(e))}))}(n)},children:Object(r.jsx)(m,{children:n},n)},n))}return!1}))},T=0,y=Object.entries(t);T<y.length;T++)w();return Object(r.jsxs)(c.Fragment,{children:[i,void 0===t?Object(r.jsx)(r.Fragment,{}):Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)(p,{children:["Top Level Domain: ",a," "]}),Object(r.jsxs)(p,{children:["Currencies: ",l," "]}),Object(r.jsxs)(p,{style:{gridColumn:"1/-1"},children:["Borders Countries: ",d," "]})]})]})},w="375px",T="426px",y="768px",k="1024px",C="1440px",E="2560px",S={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(w,")"),mobileL:"(max-width: ".concat(T,")"),tablet:"(max-width: ".concat(y,")"),laptop:"(max-width: ".concat(k,")"),laptopL:"(max-width: ".concat(C,")"),desktop:"(max-width: ".concat(E,")"),desktopL:"(max-width: ".concat(E,")")};function L(){var n=Object(h.a)(["\n  width: 100%;\n  height: 50%;\n"]);return L=function(){return n},n}function B(){var n=Object(h.a)(["\n  height: 50%;\n  padding-left: 20px;\n"]);return B=function(){return n},n}function D(){var n=Object(h.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: ","\n"]);return D=function(){return n},n}function F(){var n=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px 5px 0 0;\n"]);return F=function(){return n},n}function A(){var n=Object(h.a)(["\n  width: 100%;\n  height: 300px;\n  max-height: 300px;\n  margin-bottom: 40px;\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);\n  border-radius: 5px;\n  background-color: ",";\n\n  &:hover{\n    cursor: pointer;\n  }\n"]);return A=function(){return n},n}var _=b.b.div(A(),(function(n){return n.theme.colors.Elements})),P=b.b.img(F()),R=b.b.p(D(),(function(n){return n.theme.colors.Text})),z=b.b.div(B()),I=b.b.div(L());var M=function(n){var e=n.flag,t=n.name,c=n.info,o=n.clicked;return Object(r.jsxs)(_,{onClick:o,children:[Object(r.jsx)(I,{children:Object(r.jsx)(P,{src:e,loading:"lazy",alt:"".concat(t," flag")})}),Object(r.jsxs)(z,{children:[Object(r.jsx)(R,{children:t}),Object(r.jsx)(v,{info:c})]})]})};function N(){var n=Object(h.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row wrap;\n\n  a{\n    width: 21%;\n    text-decoration: none;\n\n    \n    @media","{\n      width: 45%;\n    }\n    \n    @media","{\n      width: 100%;\n    }\n  }\n"]);return N=function(){return n},n}var U=b.b.div(N(),S.tablet,S.mobileL),W=t(41);var H=function(n){var e=n.countries,t=Object(c.useState)({prev:0,next:16}),o=Object(u.a)(t,2),i=o[0],a=o[1],l=Object(c.useState)(!0),s=Object(u.a)(l,2),h=s[0],b=s[1],j=Object(c.useState)(e.slice(i.prev,i.next)),f=Object(u.a)(j,2),x=f[0],p=f[1];return Object(r.jsx)(U,{children:Object(r.jsx)(W.a,{dataLength:x.length,next:function(){x.length!==e.length?(setTimeout((function(){p(x.concat(e.slice(i.prev+10,i.next+10)))}),2e3),a((function(n){return{prev:n.prev+10,next:n.next+10}}))):b(!1)},hasMore:h,loader:Object(r.jsx)("h2",{style:{width:"100%",textAlign:"center"},children:"Loading..."}),style:{display:"flex",justifyContent:"space-between",flexFlow:"row wrap"},children:x.map((function(n){return Object(r.jsx)(d.b,{to:"/".concat(n.name),children:Object(r.jsx)(M,{flag:n.flag,name:n.name,info:{population:n.population,region:n.region,capital:n.capital}},n.name)},n.name)}))})})};function K(){var n=Object(h.a)(["\n  padding: 0 40px;\n  background-color: ",";\n"]);return K=function(){return n},n}var J=b.b.div(K(),(function(n){return n.theme.colors.Background}));var V=function(n){var e=n.countries;return Object(r.jsx)(J,{children:0===e.length?Object(r.jsx)("p",{children:"Loading..."}):Object(r.jsx)(H,{countries:e})})},q=t(13);function G(){var n=Object(h.a)(["\n  cursor: pointer;\n  padding-right: 10px;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);\n"]);return G=function(){return n},n}function Q(){var n=Object(h.a)(["\n  background-color: ",";\n"]);return Q=function(){return n},n}function X(){var n=Object(h.a)(["\n  padding: 15px;\n  color: ",";\n  background-color: ",";\n  border-color: ",";\n  cursor: pointer;\n  \n  border-radius: 5px;\n\n  // Arrow\n  appearance: none;\n\n  &:focus{\n    outline: none;\n  }\n\n  &:hover{\n    outline: none;\n  }\n\n  @media","{\n    align-self: start;\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(h.a)(["\n  width: 90%;\n  background: none;\n  border: none;\n  margin: 5px 0px;\n  padding: 0 20px;\n\n  &:focus{\n    outline:none;\n    color: ",";\n  }\n\n  &::placeholder{\n    color: ",";\n  }\n\n  @media","{\n    \n  }\n\n"]);return Y=function(){return n},n}function Z(){var n=Object(h.a)(["\n  width: 35%;\n  padding: 10px 20px;\n  border-radius: 5px;\n  background-color: ",";\n  color: ",";\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);\n\n  @media","{\n    width: 100%;\n    padding: 20px;\n    margin-bottom: 30px;\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(h.a)(["\n  padding: 40px;\n  background-color: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n\n"]);return $=function(){return n},n}var nn=b.b.div($(),(function(n){return n.theme.colors.Background})),en=b.b.div(Z(),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Text}),S.tablet),tn=b.b.input.attrs((function(){return{type:"text",placeholder:"Search for a country..."}}))(Y(),(function(n){return n.theme.colors.Text}),(function(n){return n.theme.colors.Text}),S.tablet),rn=b.b.select(X(),(function(n){return n.theme.colors.Text}),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Elements}),S.tablet),cn=b.b.option(Q(),(function(n){return n.theme.colors.Background})),on=b.b.div(G(),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Text}));var an=function(n){var e=n.data,t=n.setData,c=e.original;return Object(r.jsxs)(nn,{children:[Object(r.jsxs)(en,{children:[Object(r.jsx)(q.a,{icon:"search"}),Object(r.jsx)(tn,{onChange:function(){return function(){var n=document.getElementById("country").value.toLowerCase(),e=[];""!==n?(e.push(c.filter((function(e){return!!e.name.toLowerCase().includes(n)&&e}))),t.filter.apply(t,e)):""===n&&t.filter(c)}()},id:"country"})]}),Object(r.jsxs)(on,{children:[Object(r.jsxs)(rn,{onChange:function(){return function(){var n=document.getElementById("mySelect").value;"all"!==n?s.get("/region/".concat(n)).then((function(n){var e=n.data;t.filter(e)})).catch((function(n){return n})):s.get("/".concat(n)).then((function(n){var e=n.data;t.filter(e)})).catch((function(n){return n}))}()},id:"mySelect",children:[Object(r.jsx)(cn,{disabled:!0,children:"Filter By Continent"}),Object(r.jsx)(cn,{value:"all",children:"All"}),Object(r.jsx)(cn,{value:"africa",children:"Africa"}),Object(r.jsx)(cn,{value:"americas",children:"Americas"}),Object(r.jsx)(cn,{value:"asia",children:"Asia"}),Object(r.jsx)(cn,{value:"europe",children:"Europe"}),Object(r.jsx)(cn,{value:"oceania",children:"Oceania"})]}),Object(r.jsx)(q.a,{icon:"chevron-down"})]})]})};function un(){var n=Object(h.a)(["\n  visibility: hidden;\n"]);return un=function(){return n},n}function ln(){var n=Object(h.a)([""]);return ln=function(){return n},n}function sn(){var n=Object(h.a)(["\n  color: ",";\n\n  svg{\n    margin-right: 10px;\n  }\n\n  &:hover{\n    cursor: pointer;\n  }\n"]);return sn=function(){return n},n}function dn(){var n=Object(h.a)(["\n  position:relative;\n  z-index:10;\n  height: 70px;\n  padding: 0 40px;\n  background-color: ",";\n  box-shadow: 0 0px 10px hsla(0, 0%, 0%, 0.2);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  h1{\n    color: ",";\n\n    @media","{\n      font-size: 16px;\n    }\n  }\n"]);return dn=function(){return n},n}var hn=b.b.header(dn(),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Text}),S.tablet),bn=b.b.label(sn(),(function(n){return n.theme.colors.Text})),jn=b.b.div(ln()),fn=b.b.input.attrs((function(){return{type:"checkbox"}}))(un()),xn={lightTheme:{colors:{Text:"hsl(200, 15%, 8%)",Elements:"hsl(0, 0%, 100%)",Background:"hsl(0, 0%, 98%)",Input:"hsl(0, 0%, 52%)"},mode:" Mode Dark",icon:"moon",transition:"0.5s"},darkTheme:{colors:{Text:"hsl(0, 0%, 100%)",Elements:"hsl(209, 23%, 22%)",Background:"hsl(207, 26%, 17%)"},icon:"sun",mode:"Light Mode",transition:"0.5s"}},pn=Object(c.createContext)(),mn=function(n){var e=n.children,t=Object(c.useState)("lightTheme"),o=Object(u.a)(t,2),i=o[0],a=o[1],l={themeMode:i,toggleTheme:function(){a((function(n){return"lightTheme"===n?"darkTheme":"lightTheme"}))}},s=xn[i];return Object(r.jsx)(pn.Provider,{value:l,children:Object(r.jsx)(b.a,{theme:s,children:e})})};var On=function(){var n=Object(c.useContext)(pn),e=n.toggleTheme,t=n.themeMode;return Object(r.jsxs)(hn,{children:[Object(r.jsx)("h1",{children:"Where in the world?"}),Object(r.jsxs)(jn,{children:[Object(r.jsx)(fn,{id:"Theme",onChange:e}),Object(r.jsxs)(bn,{htmlFor:"Theme",children:[Object(r.jsx)(q.a,{icon:xn[t].icon}),xn[t].mode]})]})]})},gn=t(42);function vn(){var n=Object(h.a)(["\n  color: ",";\n  grid-column: 1/-1;\n"]);return vn=function(){return n},n}function wn(){var n=Object(h.a)(["\n  width:50%;\n  min-height: 100%;\n  padding-left: 40px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-tempplate-rows: auto;\n  grid-gap: 10px;\n\n  p{\n    font-size: 14px;\n  }\n\n  @media","{\n    width: 100%;\n    padding-left: 0;\n    display: flex;\n    flex-direction: column;\n\n    p{\n      font-size: 18px;\n    }\n  }\n"]);return wn=function(){return n},n}function Tn(){var n=Object(h.a)(["\n  width: 100%;\n  padding: 10px 0;\n  background-color: ",";\n  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);\n  border-radius: 10px;\n\n  color: ",";\n\n  display: flex;\n  justify-content: space-evenly;\n  align-content: center;\n  cursor: pointer;\n\n  a{\n    color: ",";\n    text-decoration: none;\n  }\n\n  a:visited{\n    color: ",";\n  }\n"]);return Tn=function(){return n},n}function yn(){var n=Object(h.a)([""]);return yn=function(){return n},n}function kn(){var n=Object(h.a)(["\n  color: ",";\n"]);return kn=function(){return n},n}function Cn(){var n=Object(h.a)(["\n  width: 100%;\n  height: 100%;\n"]);return Cn=function(){return n},n}function En(){var n=Object(h.a)(["\n  width: 50%;\n  height: 100%;\n\n  @media","{\n    width: 100%;\n  }\n"]);return En=function(){return n},n}function Sn(){var n=Object(h.a)(["\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n  display: flex;\n  flex-flow: row wrap;\n  \n  @media","{\n    margin-top: 40px;\n    flex-flow: column wrap;\n  }\n"]);return Sn=function(){return n},n}function Ln(){var n=Object(h.a)(["\n  width: 100%;\n  min-height: calc(100vh - 70px);\n  padding: 40px;\n  background-color: ",";\n  display: flex;\n  flex-flow: column wrap;\n"]);return Ln=function(){return n},n}var Bn=b.b.div(Ln(),(function(n){return n.theme.colors.Background})),Dn=b.b.div(Sn(),S.tablet),Fn=b.b.div(En(),S.tablet),An=b.b.img(Cn()),_n=(b.b.p(kn(),(function(n){return n.theme.colors.Text})),b.b.div(yn()),b.b.div(Tn(),(function(n){return n.theme.colors.Elements}),(function(n){return n.theme.colors.Text}),(function(n){return n.theme.colors.Text}),(function(n){return n.theme.colors.Text}))),Pn=b.b.div(wn(),S.tablet),Rn=b.b.h2(vn(),(function(n){return n.theme.colors.Text}));var zn=function(){var n=Object(g.f)(),e=Object(c.useState)({}),t=Object(u.a)(e,2),o=t[0],i=t[1];return Object(c.useEffect)((function(){return s.get("/name/".concat(n.country,"?fullText=true")).then((function(n){i.apply(void 0,Object(gn.a)(n.data))})).catch((function(n){return console.log(n)})),function(){i({})}}),[n.country]),Object(r.jsxs)(Bn,{children:[Object(r.jsx)(d.b,{to:"/",style:{textDecoration:"none",width:"100px"},children:Object(r.jsxs)(_n,{children:[Object(r.jsx)(q.a,{icon:"arrow-left"}),"Back"]})}),0===Object.entries(o).length?Object(r.jsx)("p",{children:"Loading..."}):Object(r.jsxs)(Dn,{children:[Object(r.jsx)(Fn,{children:Object(r.jsx)(An,{src:o.flag})}),Object(r.jsxs)(Pn,{children:[Object(r.jsx)(Rn,{children:o.name}),Object(r.jsx)(v,{info:{"Native Name":o.nativeName,Population:o.population,Region:o.region,"Sub Region":o.subregion,Capital:o.capital},array:{"Top Level Domain":o.topLevelDomain,Currencies:o.currencies,Borders:o.borders}})]})]})]})};var In=function(){var n=Object(c.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1],i=Object(c.useState)([]),a=Object(u.a)(i,2),l=a[0],d=a[1];return Object(c.useEffect)((function(){s.get("/all").then((function(n){o(n.data),d(n.data)})).catch((function(n){return n}))}),[]),Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)(g.a,{path:"/",exact:!0,children:[Object(r.jsx)(On,{}),Object(r.jsx)(an,{data:{original:t,filter:l},setData:{countries:o,filter:d}}),Object(r.jsx)(V,{countries:l})]}),Object(r.jsxs)(g.a,{path:"/:country",children:[Object(r.jsx)(On,{}),Object(r.jsx)(zn,{})]})]})},Mn=t(15),Nn=t(16);var Un=function(){return Mn.b.add(Nn.e,Nn.c,Nn.d,Nn.b,Nn.a),Object(r.jsx)(d.a,{children:Object(r.jsx)(In,{})})},Wn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;t(n),r(n),c(n),o(n),i(n)}))};t(72);a.a.render(Object(r.jsx)(mn,{children:Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Un,{})})}),document.getElementById("root")),Wn()}},[[73,1,2]]]);
//# sourceMappingURL=main.a1cda133.chunk.js.map