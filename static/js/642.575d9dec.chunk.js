"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{894:function(e,n,t){t.d(n,{z:function(){return s}});var i="Button_Button__Smq3v",r=t(184),s=function(e){var n=e.title,t=e.type,s=void 0===t?"button":t,o=e.onClick,a=void 0===o?null:o;return a?(0,r.jsx)("button",{type:s,className:i,onClick:a,children:n}):(0,r.jsx)("button",{type:s,className:i,children:n})}},642:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(739),r=t(885),s=t(791),o=t(340),a=t(894),c="MovieCard_MovieCard__DStH+",l="MovieCard_info__QTHMi",d=t(184),u=function(e){var n=e.item,t=n.backdrop_path,i=n.title,r=n.name,s=n.release_date,o=n.vote_average,a=n.overview,u=n.genres;return(0,d.jsxs)("div",{className:c,children:[(0,d.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500"+t:"https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg",alt:"poster"}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsxs)("h2",{children:[null!==i&&void 0!==i?i:r," (",s.split("-")[0],")"]}),(0,d.jsxs)("p",{children:["User score: ",Math.round(10*o),"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:a}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:u.map((function(e){return"".concat(e.name," ")}))})]})]})},v=t(497),h=t(731),m=function(e){var n=e.location;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h3",{children:"Additional Information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(h.rU,{state:n,to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(h.rU,{state:n,to:"reviews",children:"Reviews"})})]})]})},j=function(){var e=(0,i.s0)(),n=(0,i.TH)(),t=function(e){var n=(0,s.useState)(null),t=(0,r.Z)(n,2),i=t[0],a=t[1];return(0,s.useEffect)((function(){o.X.getMovieById(e).then(a).catch((function(e){return console.log("".concat(e.message," \xaf\\_(\u30c4)_/\xaf"))}))}),[e]),i}((0,i.UO)().movieId);return t?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(a.z,{title:"Go Back",onClick:function(){var t,i;return e(null!==(t=null===n||void 0===n||null===(i=n.state)||void 0===i?void 0:i.from)&&void 0!==t?t:"/")}}),(0,d.jsx)(u,{item:t})]}),(0,d.jsx)("div",{className:"container",children:(0,d.jsx)(m,{location:null===n||void 0===n?void 0:n.state})}),(0,d.jsx)("div",{className:"container",children:(0,d.jsx)(i.j3,{})})]}):(0,d.jsx)(v.P,{message:"Wrong movie"})}}}]);
//# sourceMappingURL=642.575d9dec.chunk.js.map