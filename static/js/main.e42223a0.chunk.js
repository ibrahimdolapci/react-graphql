(this["webpackJsonpreact-graphql"]=this["webpackJsonpreact-graphql"]||[]).push([[0],{247:function(n,e,t){},248:function(n,e,t){},398:function(n,e,t){"use strict";t.r(e);var c=t(12),r=t(0),a=t.n(r),i=t(32),o=t.n(i),u=(t(247),t(248),t(58)),l=t(401),j=t(100),d=t(52);function s(){var n=Object(u.a)(["\n      query getCountry($code: ID!) {\n          country(code: $code){\n              code\n              name\n              native\n              phone\n              currency\n              capital\n              languages{\n                code\n                name\n              }\n              continent{\n                code\n                name\n              }\n              states{\n                code\n                name\n              }\n          }\n      }\n"]);return s=function(){return n},n}function b(){var n=Object(u.a)(["\n      query getCountries($continent: String) {\n          countries(filter: { continent: { eq: $continent }}){\n              code\n              name\n              native\n              phone\n              currency\n              capital\n              languages{\n                code\n                name\n              }\n          }\n      }\n    "]);return b=function(){return n},n}function O(){var n=Object(u.a)(["\n      query getContinents {\n          continents{\n            code\n            name\n          }\n        }\n    "]);return O=function(){return n},n}var h=Object(d.gql)(O()),x=Object(d.gql)(b()),g=Object(d.gql)(s()),v=t(102);function m(){var n=Object(d.useQuery)(h).data,e=(void 0===n?{continents:[]}:n).continents;return Object(c.jsxs)(l.a.Header,{style:{position:"fixed",zIndex:1,width:"100%"},children:[Object(c.jsx)("div",{className:"logo"}),Object(c.jsx)(j.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:e.map((function(n){return Object(c.jsx)(j.a.Item,{children:Object(c.jsx)(v.b,{to:"/continent/"+n.code,children:n.name})},n.code)}))})]})}var f=t(43),p=t(173),y=t(156),I=t(410),C=t(67),q=t(402),k=t(405),w=t(406),S=t(409),F=t(404),P=t(80),A=t(408),L=t(407),$=t(403),D=t(78);function N(){var n=Object(u.a)(["\n    width: 100%;\n    text-align: center;\n    min-width: 0;\n"]);return N=function(){return n},n}var Q=Object(D.a)(S.a)(N());function T(n){var e=n.name,t=n.code,r=["geekblue","green","volcano","magenta","purple"],a=e.length%r.length;return Object(c.jsx)("div",{children:Object(c.jsx)(Q,{color:r[a],children:e},t)})}function z(){var n=Object(u.a)(["\n    width: 100%;\n    text-align: center;\n    \n    span {\n        width: 100%;\n    }\n"]);return z=function(){return n},n}var B=Object(D.a)(S.a)(z());function E(n){var e=n.code,t=void 0===e?"":e,r=Object(d.useQuery)(g,{variables:{code:t}}),a=r.loading,i=r.data;if(a)return Object(c.jsx)(F.a,{active:!0});if(!i||!i.country)return Object(c.jsx)(P.a,{});var o=i.country;return Object(c.jsxs)(A.a,{title:"".concat(o.name," Details"),column:1,bordered:!0,children:[Object(c.jsx)(A.a.Item,{label:"Name",children:null===o||void 0===o?void 0:o.name}),Object(c.jsx)(A.a.Item,{label:"Capital",children:null===o||void 0===o?void 0:o.capital}),Object(c.jsx)(A.a.Item,{label:"Currency",children:null===o||void 0===o?void 0:o.currency}),Object(c.jsx)(A.a.Item,{label:"Phone",children:null===o||void 0===o?void 0:o.phone}),Object(c.jsx)(A.a.Item,{label:"Languages",children:Object(c.jsx)(L.b,{grid:{gutter:8,column:2},dataSource:null===o||void 0===o?void 0:o.languages,renderItem:function(n){return Object(c.jsx)(L.b.Item,{children:Object(c.jsx)(T,Object(y.a)({},n))})}})}),Object(c.jsx)(A.a.Item,{label:"States",children:Object(c.jsx)(L.b,{grid:{gutter:8,column:2},dataSource:null===o||void 0===o?void 0:o.states,renderItem:function(n){return Object(c.jsx)(L.b.Item,{children:Object(c.jsx)(B,{children:Object(c.jsx)($.a.Text,{ellipsis:!0,children:n.name})})})}})})]})}function J(){var n=[{title:"Name",dataIndex:"name",key:"name"},{title:"Capital",dataIndex:"capital",key:"capital"},{title:"Currency",dataIndex:"currency",key:"currency"},{title:"Languages",dataIndex:"languages",key:"languages",render:function(n){return Object(c.jsx)(I.b,{children:n.map((function(n){return Object(c.jsx)(T,Object(y.a)({},n),n.code)}))})}},{title:"Action",key:"action",render:function(n,e){return Object(c.jsx)(C.a,{icon:Object(c.jsx)(w.a,{}),onClick:function(){s(e.code),g(!0)},children:"Preview"})}}],e=Object(f.g)().continent,t=Object(d.useQuery)(x,{variables:{continent:e}}),a=t.loading,i=t.data,o=void 0===i?{countries:[]}:i,u=Object(r.useState)(""),l=Object(p.a)(u,2),j=l[0],s=l[1],b=Object(r.useState)(!1),O=Object(p.a)(b,2),h=O[0],g=O[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(q.a,{columns:n,dataSource:o.countries,loading:a}),Object(c.jsx)(k.a,{title:"Country Info",visible:h,footer:null,onCancel:function(){return g(!1)},children:Object(c.jsx)(E,{code:j})})]})}function M(){var n=Object(u.a)(["\n    text-align: center;\n"]);return M=function(){return n},n}function G(){var n=Object(u.a)(["\n    padding: 24px;\n    min-height: 380px;\n"]);return G=function(){return n},n}function H(){var n=Object(u.a)(["\n    padding: 0 50px;\n    margin-top: 64px;\n    height: 100%;\n"]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n    min-height: 100vh;\n"]);return K=function(){return n},n}var R=l.a.Content,U=l.a.Footer,V=Object(D.a)(l.a)(K()),W=Object(D.a)(R)(H()),X=D.a.div(G()),Y=Object(D.a)(U)(M());function Z(){return Object(c.jsx)(v.a,{basename:"/react-graphql",children:Object(c.jsxs)(V,{children:[Object(c.jsx)(m,{}),Object(c.jsx)(W,{children:Object(c.jsx)(X,{children:Object(c.jsxs)(f.d,{children:[Object(c.jsx)(f.b,{path:"/continent/:continent",children:Object(c.jsx)(J,{})}),Object(c.jsx)(f.b,{path:"/",children:Object(c.jsx)(f.a,{to:"/continent/AF"})})]})})}),Object(c.jsx)(Y,{children:"React + Graphql Example"})]})})}var _=function(){return Object(c.jsx)(Z,{})},nn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,411)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),a(n),i(n)}))},en=new d.ApolloClient({uri:"https://countries.trevorblades.com/",cache:new d.InMemoryCache});t(396);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d.ApolloProvider,{client:en,children:Object(c.jsx)(_,{})})}),document.getElementById("root")),nn()}},[[398,1,2]]]);
//# sourceMappingURL=main.e42223a0.chunk.js.map