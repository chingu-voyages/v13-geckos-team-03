(this["webpackJsonpv13-geckos-team-03"]=this["webpackJsonpv13-geckos-team-03"]||[]).push([[0],{41:function(e,n,t){e.exports=t(53)},53:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(31),o=t.n(c),u=t(3),i=t.n(u),s=t(4),l=t(11),p=t(6),f=t(2),m=t(14),d=t(15),b=t(1),v=t(36),h=t(37),g="4c2694a90a597f3a2cf08d1ddcf2973e",O="https://v13-geckos-team-03.herokuapp.com/",x=function(){var e=Object(s.a)(i.a.mark((function e(n,t,r){var a,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:n,headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(r)},e.next=4,fetch("".concat(O+"/api"+t),a);case 4:return c=e.sent,e.next=7,c.json();case 7:return o=e.sent,e.abrupt("return",o);case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",{errors:["fetch error!"]});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,t,r){return e.apply(this,arguments)}}(),j=function(e,n){return x("GET",e,n)},w=function(e,n){return x("POST",e,n)},E=function(e,n){return x("DELETE",e,n)},y=function(){var e=Object(s.a)(i.a.mark((function e(n,t){var r,a,c,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.replace(/ /,"+"),e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&api_key=").concat(g,"&language=en-US&page=").concat(t,"&include_adult=false"));case 4:return a=e.sent,e.next=7,a.json();case 7:return c=e.sent,o=c.total_pages,u=c.results,e.abrupt("return",{total_pages:o,results:u});case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(n,t){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(i.a.mark((function e(n){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("/signup",n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(i.a.mark((function e(n){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("/login",n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/logout");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/user");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/user-film-meta");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(i.a.mark((function e(n){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("/user-film-meta",{filmId:n});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(i.a.mark((function e(n){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("/user-film-meta",{docId:n});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function _(){var e=Object(f.a)(["\n  width: 20px;\n  height: 20px;\n\n  &:hover {\n    color: #ccc;\n  }\n"]);return _=function(){return e},e}function z(){var e=Object(f.a)([" \n  margin-left: 10px;\n  cursor: pointer;\n  display: none;\n  transition: 0.4s;\n  @media screen and (max-width:995px) {\n    position: absolute;\n    top: 30px;\n    right: 40px;\n    display: block;\n  }\n"]);return z=function(){return e},e}function I(){var e=Object(f.a)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  font-size: 1rem;\n  @media screen and (max-width:995px) {\n    position: fixed;\n    width: 50%;\n    height: 100vh;\n    background: #3b3272;\n    right: -100%;\n    top: 0;\n    z-index: 100;\n    transition: 0.3s;\n  }\n"]);return I=function(){return e},e}function T(){var e=Object(f.a)(["\n  width: 20px;\n  height: 20px;\n  &:hover {\n    color: #ccc;\n  }\n"]);return T=function(){return e},e}function R(){var e=Object(f.a)(["\n  color: white;\n  margin-left: 10px;\n  cursor: pointer;\n  display: none;\n  transition: 0.4s;\n  order: 1;\n  position: absolute;\n  top: 30px;\n  right: 40px;\n  @media screen and (max-width:995px) {\n    display: block;\n  }\n"]);return R=function(){return e},e}function B(){var e=Object(f.a)(["\n  display: none;\n  &:checked ~ .container {\n    right: 0 !important;\n  }\n"]);return B=function(){return e},e}function A(){var e=Object(f.a)(["\n  color: rgb(255, 255, 255, 0.64);\n  font-weight: 300;\n  margin: 0 2rem;\n  text-decoration: none;\n  transition: all 0.2s linear;\n\n  &:hover {\n    color: #ccc;\n  }\n\n  &.active {\n    color: #ffff;\n    border-bottom: 1px solid rgb(255, 255, 255, 0.64);\n  }\n  @media screen and (max-width:995px) {\n  margin: 0 0.8rem;\n  }\n  @media screen and (device-aspect-ratio: 40/71) {\n    font-size: 0.8rem;\n    margin: 0 0.6rem;\n  }\n"]);return A=function(){return e},e}function L(){var e=Object(f.a)(["\n  li {\n    display: inline-block;\n    list-style: none;\n    @media screen and (max-width:995px) {\n      display: block;\n      padding: 20px;\n    }\n  }\n"]);return L=function(){return e},e}function N(){var e=Object(f.a)(["\n  margin-left: 50px;\n  color: #ffff;\n  font-size: 1.8rem;\n  font-weight: 300;\n  letter-spacing: 3px;\n  text-decoration: none;\n  margin-right: auto;\n  @media (max-width: 768px) {\n    font-size: 1.3rem;\n  }\n"]);return N=function(){return e},e}function q(){var e=Object(f.a)(["\n  width: 100%;\n  height: 80px;\n  top: 0;\n  z-index: 10;\n  background: #3b3272;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return q=function(){return e},e}var G=b.c.nav(q()),M=Object(b.c)(m.b)(N()),J=b.c.ul(L()),Y=Object(b.c)(m.c)(A()),H=b.c.input.attrs({type:"checkbox"})(B()),V=b.c.label(R()),K=Object(b.c)(v.a)(T()),Q=b.c.nav(I()),W=b.c.label(z()),X=Object(b.c)(h.a)(_()),Z=function(e){var n=e.user,t=e.logUserOut,r=Object(d.e)(),c=function(){var e=Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:if(!(n=e.sent).errors){e.next=7;break}return console.error(n.errors),e.abrupt("return");case 7:t(),r.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(G,null,a.a.createElement(M,{to:"/"},"The Film DB"," ",a.a.createElement("span",{role:"img","aria-label":"popcorn emoji"},"\ud83c\udf7f")),a.a.createElement(H,{id:"check"}),a.a.createElement(V,{htmlFor:"check"},a.a.createElement(K,null)),a.a.createElement(Q,{className:"container"},a.a.createElement(J,null,a.a.createElement("li",null,a.a.createElement(Y,{exact:!0,to:"/search",activeClassName:"active"},"search")),n.user?a.a.createElement("li",null,a.a.createElement(Y,{exact:!0,to:"/myfilms",activeClassName:"active"},"my films")):null,!n.user&&a.a.createElement(a.a.Fragment,null,a.a.createElement("li",null,a.a.createElement(Y,{exact:!0,to:"/signup",activeClassName:"active"},"signup")),a.a.createElement("li",null,a.a.createElement(Y,{exact:!0,to:"/login",activeClassName:"active"},"login"))),n.user&&a.a.createElement("li",null,a.a.createElement(Y,{exact:!0,to:"/logout",onClick:c,activeClassName:"active"},"logout"))),a.a.createElement(W,{htmlFor:"check"},a.a.createElement(X,null))))},$=t(19),ee=t(20),ne=t(22),te=t(21),re=t(24);function ae(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;  \n  bottom: 0;\n  width: 100%;\n  height: 85px;\n  background: #F6F6F6;\n  font-size: 0.7rem;\n  color: #3B3272;\n  & a:visited {\n    color: #3B3272;\n  }\n  "]);return ae=function(){return e},e}var ce=b.c.nav(ae()),oe=function(e){function n(){return Object($.a)(this,n),Object(ne.a)(this,Object(te.a)(n).apply(this,arguments))}return Object(re.a)(n,e),Object(ee.a)(n,[{key:"render",value:function(){return a.a.createElement(ce,null,a.a.createElement("p",null,"Coded by ",a.a.createElement("a",{href:"https://github.com/chingu-voyages/v13-geckos-team-03"}," Geckos Team 3")," | Voyage 13, Chingu | 2019"))}}]),n}(r.Component),ue=t(12);function ie(){var e=Object(f.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 12px 0px;\n  border-radius: 40px;\n  background-color: #fff;\n  input {\n    width: calc(100% - 200px);\n    margin-left:40px;\n    padding: 5px 10px;\n    border: none;\n    border-bottom: 2px solid lightgrey;\n  }\n  button {\n    margin-left: 20px;\n    padding: 7px 20px;\n    border: none;\n    border-radius: 3px;\n    background-color: #3b3272;\n    color: #eeeeee;\n    &:hover {\n      cursor: pointer;\n    }\n"]);return ie=function(){return e},e}function se(){var e=Object(f.a)(["\n  max-width: 940px;\n  margin: auto;\n  padding: 0 10px;\n  }\n"]);return se=function(){return e},e}function le(){var e=Object(f.a)(["\n  padding: 15px 0;\n  background-color: #eeeeee;\n"]);return le=function(){return e},e}var pe=b.c.section(le()),fe=b.c.form(se()),me=b.c.div(ie()),de=function(e){var n=e.updateResults,t=Object(r.useState)(""),c=Object(p.a)(t,2),o=c[0],u=c[1],l=Object(r.useState)(1),f=Object(p.a)(l,2),m=f[0],d=f[1],b=Object(r.useState)(1),v=Object(p.a)(b,2),h=v[0],g=v[1],O=function(){var e=Object(s.a)(i.a.mark((function e(t){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(o.length<1)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,y(o,1);case 5:r=e.sent,a=r.total_pages,c=r.results,n(Object(ue.a)(c)),d(a),g(1);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){return window.addEventListener("scroll",x),function(){return window.removeEventListener("scroll",x)}}));var x=function(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&h<m&&g((function(e){return e+1}))};function j(){return(j=Object(s.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(o,h);case 2:t=e.sent,r=t.results,n((function(e){return[].concat(Object(ue.a)(e),Object(ue.a)(r))}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){1!==h&&function(){j.apply(this,arguments)}()}),[h]),a.a.createElement(pe,null,a.a.createElement(fe,{onSubmit:O},a.a.createElement(me,null,a.a.createElement("input",{type:"text",value:o,onChange:function(e){u(e.target.value)}}),a.a.createElement("button",{type:"submit",value:"search"},"Search"))))};function be(){var e=Object(f.a)(["\n  height: 10px;\n  border-radius: 10px;\n"]);return be=function(){return e},e}function ve(){var e=Object(f.a)(["\n  width: 200px;\n  height: 10px;\n  border-radius: 10px;\n  background-color: #ddd;\n  margin-right: 15px;\n  margin-top: 10px;\n"]);return ve=function(){return e},e}var he=b.c.div(ve()),ge=b.c.div(be());var Oe=function(e){var n,t=(n=e.voteAverage)>=6.6?"MediumSeaGreen":n>=3.3?"Gold":"Red";return a.a.createElement(he,null,a.a.createElement(ge,{style:{width:"".concat(20*e.voteAverage,"px"),backgroundColor:"".concat(t)}}))},xe=t(55),je=t(56),we=t(38);function Ee(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ye(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ee(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ke(){var e=Object(f.a)([""]);return ke=function(){return e},e}function Pe(){var e=Object(f.a)(["\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 6px;\n"]);return Pe=function(){return e},e}function Se(){var e=Object(f.a)(["\n  margin-top: 10px;\n"]);return Se=function(){return e},e}function Fe(){var e=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: center;\n  margin-bottom: 20px;\n  @media (min-width: 500px) {\n    grid-column-gap: 15px;\n    grid-template-columns: 200px auto;\n  }\n"]);return Fe=function(){return e},e}function Ue(){var e=Object(f.a)(["\n  margin-left: 10px;\n"]);return Ue=function(){return e},e}function Ce(){var e=Object(f.a)(["\n  color: red;\n  cursor: pointer;\n"]);return Ce=function(){return e},e}function De(){var e=Object(f.a)(["\n  cursor: pointer;\n"]);return De=function(){return e},e}function _e(){var e=Object(f.a)(["\n  padding: 0;\n  margin-left: 20px;\n  background: none;\n  border: none;\n  outline: none;\n"]);return _e=function(){return e},e}function ze(){var e=Object(f.a)(["\n  font-size: 34px;\n"]);return ze=function(){return e},e}function Ie(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 20px;\n  @media (min-width: 650px) {\n    margin-top: 0;\n  }\n"]);return Ie=function(){return e},e}function Te(){var e=Object(f.a)(["\n  padding: 10px 10px 10px 0;\n  overflow: hidden;\n"]);return Te=function(){return e},e}function Re(){var e=Object(f.a)(["\n  display: flex;\n  background: LightGray;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 100%;\n  }\n"]);return Re=function(){return e},e}function Be(){var e=Object(f.a)(["\n  margin-top: 60px;\n  margin-bottom: 60px;\n  padding: 0 15px;\n  display: grid;\n  grid-template-columns: 1fr;\n  @media (min-width: 650px) {\n    grid-template-columns: 185px auto;\n    grid-column-gap: 20px;\n  }\n  @media (min-width: 850px) {\n    grid-template-columns: 250px auto;\n  }\n"]);return Be=function(){return e},e}var Ae=b.c.div(Be()),Le=b.c.div(Re()),Ne=b.c.div(Te()),qe=b.c.div(Ie()),Ge=b.c.h2(ze()),Me=b.c.button(_e()),Je=Object(b.c)(xe.a)(De()),Ye=Object(b.c)(we.a)(Ce()),He=b.c.div(Ue()),Ve=b.c.div(Fe()),Ke=b.c.div(Se()),Qe=b.c.a(Pe()),We=b.c.div(ke());var Xe=function(e){var n=e.updateUser,t=function(){var t=Object(s.a)(i.a.mark((function t(){var r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isFavourite){t.next=7;break}return t.next=3,D(e._id);case 3:(r=t.sent).errors?console.log(r.errors):n((function(e){return delete e.films[r.doc.filmId],ye({},e)})),t.next=11;break;case 7:return t.next=9,C(e.id);case 9:(a=t.sent).errors?console.log(a.errors):n((function(e){return e.films[a.filmId]=a,ye({},e)}));case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a.a.createElement(Ae,null,a.a.createElement(Le,null,"null"===e.poster.slice(-4)?a.a.createElement(je.a,{size:"60",color:"gray"}):a.a.createElement("img",{src:"".concat(e.poster),alt:"Movie Poster"})),a.a.createElement(Ne,null,a.a.createElement(qe,null,a.a.createElement(Ge,null,e.title),e.user.user?e.isFavourite?a.a.createElement(Me,{onClick:t},a.a.createElement(Ye,{size:"25"})):a.a.createElement(Me,{onClick:t},a.a.createElement(Je,{size:"24"})):null),a.a.createElement(He,null,void 0===e.releaseDate?"Unknown Release Year":e.releaseDate.slice(0,4)),a.a.createElement(Ve,null,a.a.createElement(Oe,{voteAverage:e.voteAverage}),a.a.createElement(Ke,null,a.a.createElement(Qe,null,e.voteAverage),"/10",a.a.createElement(Qe,null,"- ",e.voteCount)," ",1===e.voteCount?"vote":"votes")),a.a.createElement(We,null,e.overview)))};function Ze(){var e=Object(f.a)(["\n  margin: 0 auto;\n  max-width: 940px;\n"]);return Ze=function(){return e},e}var $e=b.c.div(Ze());var en=function(e){var n=e.user.films;return a.a.createElement($e,null,e.searchResults.map((function(t){return a.a.createElement(Xe,{key:t.id,id:t.id,poster:"https://image.tmdb.org/t/p/w185".concat(t.poster_path),title:t.title,isFavourite:!!n&&!!n[t.id],_id:!!n&&(!!n[t.id]&&(!!n[t.id]._id&&n[t.id]._id)),releaseDate:t.release_date,voteAverage:t.vote_average,voteCount:t.vote_count,overview:t.overview,user:e.user,updateUser:e.updateUser})})))},nn=t(39);function tn(){var e=Object(f.a)(["\n  position: fixed;\n  cursor: pointer;\n  bottom: 90px;\n  right: 0;\n  color: grey;\n  width: 90px;\n  height: 30px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  &:hover {\n    color: #3b3272;\n\n  }\n"]);return tn=function(){return e},e}var rn=Object(b.c)(nn.a)(tn()),an=function(e){function n(){var e,t;Object($.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=Object(ne.a)(this,(e=Object(te.a)(n)).call.apply(e,[this].concat(c)))).state={hasScrolled:!1},t.onScroll=function(){window.scrollY>100?t.setState({hasScrolled:!0}):t.setState({hasScrolled:!1})},t.scrollToTop=function(){window.scrollTo(0,0)},t.goUp=function(){if(t.state.hasScrolled)return a.a.createElement(rn,{onClick:t.scrollToTop})},t}return Object(re.a)(n,e),Object(ee.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("scroll",this.onScroll)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.goUp())}}]),n}(r.Component),cn=function(e){var n=Object(r.useState)([]),t=Object(p.a)(n,2),c=t[0],o=t[1],u=e.user,i=e.updateUser;return a.a.createElement("div",null,a.a.createElement(de,{updateResults:o}),c&&a.a.createElement(en,{searchResults:c,user:u,updateUser:i}),a.a.createElement(an,null))};function on(){var e=Object(f.a)([" \n  text-align: center;\n  margin: 30px;\n  font-size: 2.5rem;\n"]);return on=function(){return e},e}var un=b.c.h1(on()),sn=function(e){var n=Object(r.useState)([]),t=Object(p.a)(n,2),c=t[0],o=t[1],u=Object(r.useState)([]),l=Object(p.a)(u,2),f=l[0],m=l[1];return Object(r.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/api/user-film-meta"),{method:"GET",credentials:"include"});case 2:return n=e.sent,e.next=5,n.json();case 5:t=e.sent,o(t.docs);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){0!==c.length&&function(){var e=Object(s.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=i.a.mark((function e(n){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(c[n].filmId,"?api_key=").concat(g));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,m((function(e){return[].concat(Object(ue.a)(e),[r])}));case 7:case"end":return e.stop()}}),e)})),t=0;case 2:if(!(t<c.length)){e.next=7;break}return e.delegateYield(n(t),"t0",4);case 4:t++,e.next=2;break;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[c]),a.a.createElement("div",null,a.a.createElement(un,null,"My Films"),f&&a.a.createElement(en,{searchResults:f,user:e.user,updateUser:e.updateUser}),a.a.createElement(an,null))};function ln(){var e=Object(f.a)(["\n  display: block;\n  margin: 30px auto;\n  font-size: 34px;\n  border: none;\n  border-bottom: #3b3272 solid;\n  color: #3b3272;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n  }\n  & > option {\n    font-size: 26px;\n  }\n"]);return ln=function(){return e},e}var pn=b.c.select(ln()),fn=function(e){var n=Object(r.useState)([]),t=Object(p.a)(n,2),c=t[0],o=t[1],u=Object(r.useState)(["popular"]),l=Object(p.a)(u,2),f=l[0],m=l[1];Object(r.useEffect)((function(){d(f)}),[f]);var d=function(){var e=Object(s.a)(i.a.mark((function e(n){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(g,"&language=en-US&page=1"));case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,o(r.results);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement(pn,{value:f,name:"popOrTop",onChange:function(e){m(e.target.value)}},a.a.createElement("option",{value:"popular"},"Popular"),a.a.createElement("option",{value:"top_rated"},"Top Rated")),0===c.length?null:a.a.createElement(en,{searchResults:c,user:e.user,updateUser:e.updateUser}),a.a.createElement(an,null))};function mn(){var e=Object(f.a)(["\n  color: #404040;\n  margin-left: 20px;\n"]);return mn=function(){return e},e}function dn(){var e=Object(f.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);return dn=function(){return e},e}function bn(){var e=Object(f.a)(["\n  min-height: 60px;\n  figure {\n    margin: 10px 0;\n    color: red;\n    font-size: 0.9rem;\n  }\n"]);return bn=function(){return e},e}function vn(){var e=Object(f.a)(["\n  border: none;\n  background-color: #3b3272;\n  color: white;\n  padding: 10px 15px;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 6px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return vn=function(){return e},e}function hn(){var e=Object(f.a)(["\n  width: 250px;\n  padding: 12px 15px;\n  font-size: 1rem;\n  border: none;\n  border-radius: 4px;\n"]);return hn=function(){return e},e}function gn(){var e=Object(f.a)(["\n        transform: translate(17px, 11px);\n      "]);return gn=function(){return e},e}function On(){var e=Object(f.a)(["\n        transform: translate(10px, -26px) scale(0.8);\n        opacity: 0.8;\n      "]);return On=function(){return e},e}function xn(){var e=Object(f.a)(["\n  transition: transform 0.1s ease, opacity 0.1s ease;\n  position: absolute;\n  top: 0;\n  left: 0;\n  ","\n"]);return xn=function(){return e},e}function jn(){var e=Object(f.a)(["\n  display: inline-block;\n  width: auto;\n  padding: 30px;\n  background-color: #eee;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  h3 {\n    margin: 0 0 60px 0;\n  }\n  label {\n    position: absolute;\n  }\n  > div {\n    position: relative;\n    margin-top: 40px;\n    &:last-of-type {\n      margin-bottom: 40px;\n    }\n  }\n"]);return jn=function(){return e},e}var wn=b.c.form(jn()),En=b.c.label(xn(),(function(e){var n=e.hasFocus,t=e.hasInput;return n||t?Object(b.b)(On()):Object(b.b)(gn())})),yn=b.c.input(hn()),kn=b.c.button(vn()),Pn=b.c.section(bn()),Sn=b.c.section(dn()),Fn=Object(b.c)(m.c)(mn());function Un(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Cn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Un(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Un(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Dn(){var e=Object(f.a)(["\n  padding: 30px 15px;\n  display: flex;\n  justify-content: center;\n"]);return Dn=function(){return e},e}var _n=b.c.div(Dn()),zn=function(e){var n=e.logUserIn,t=Object(r.useState)({email:"",password:"",confirmPassword:"",hasFocus:"",errors:[]}),c=Object(p.a)(t,2),o=c[0],u=c[1],f=Object(d.e)(),m=function(e){u((function(n){return Cn({},n,{hasFocus:e})}))},b=function(){u((function(e){return Cn({},e,{hasFocus:""})}))},v=function(e){var n=e.target,t=n.value,r=n.id;u((function(e){return Cn({},e,Object(l.a)({},r,t))}))},h=function(){var e=Object(s.a)(i.a.mark((function e(t){var r,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=o.email,a=o.password,c=o.confirmPassword,a===c){e.next=5;break}return u((function(e){return Cn({},e,{errors:["passwords don't match"]})})),e.abrupt("return");case 5:return e.next=7,k({email:r,password:a});case 7:(s=e.sent).errors?u((function(e){return Cn({},e,{errors:Object(ue.a)(s.errors)})})):(n({email:s.email,_id:s._id}),f.push("/myfilms"));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=o.email,O=o.password,x=o.confirmPassword,j=o.hasFocus,w=o.errors;return a.a.createElement(_n,null,a.a.createElement(wn,{onSubmit:h},a.a.createElement("h3",null,"Sign Up"),a.a.createElement("div",null,a.a.createElement(En,{htmlFor:"email",hasFocus:"email"===j,hasInput:!!g.length},"email"),a.a.createElement(yn,{id:"email",type:"email",value:g,onChange:v,onBlur:b,onFocus:function(){return m("email")},required:!0})),a.a.createElement("div",null,a.a.createElement(En,{htmlFor:"password",hasFocus:"password"===j,hasInput:!!O.length},"password"),a.a.createElement(yn,{id:"password",type:"password",value:O,onChange:v,onBlur:b,onFocus:function(){return m("password")},required:!0})),a.a.createElement("div",null,a.a.createElement(En,{htmlFor:"confirmPassword",hasFocus:"confirmPassword"===j,hasInput:!!x.length},"confirm password"),a.a.createElement(yn,{id:"confirmPassword",type:"password",value:x,onChange:v,onBlur:b,onFocus:function(){return m("confirmPassword")},required:!0})),a.a.createElement(Pn,null,w.map((function(e,n){return a.a.createElement("figure",{key:"".concat(e,"_").concat(n)},e)}))),a.a.createElement(Sn,null,a.a.createElement(kn,{type:"submit"},"Sign Up"),a.a.createElement(Fn,{to:"/login"},"login here"))))};function In(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Tn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?In(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):In(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Rn(){var e=Object(f.a)(["\n  padding: 30px 15px;\n  display: flex;\n  justify-content: center;\n"]);return Rn=function(){return e},e}var Bn=b.c.div(Rn()),An=function(e){var n=e.logUserIn,t=Object(r.useState)({email:"",password:"",confirmPassword:"",hasFocus:"",errors:[]}),c=Object(p.a)(t,2),o=c[0],u=c[1],f=Object(d.e)(),m=function(e){u((function(n){return Tn({},n,{hasFocus:e})}))},b=function(){u((function(e){return Tn({},e,{hasFocus:""})}))},v=function(e){var n=e.target,t=n.value,r=n.id;u((function(e){return Tn({},e,Object(l.a)({},r,t))}))},h=function(){var e=Object(s.a)(i.a.mark((function e(t){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=o.email,a=o.password,e.next=4,P({email:r,password:a});case 4:(c=e.sent).errors?u((function(e){return Tn({},e,{errors:Object(ue.a)(c.errors)})})):(n({email:c.email,_id:c._id}),f.push("/myfilms"));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=o.email,O=o.password,x=o.hasFocus,j=o.errors;return a.a.createElement(Bn,null,a.a.createElement(wn,{onSubmit:h},a.a.createElement("h3",null,"Login"),a.a.createElement("div",null,a.a.createElement(En,{htmlFor:"email",hasFocus:"email"===x,hasInput:!!g.length},"email"),a.a.createElement(yn,{id:"email",type:"email",value:g,onChange:v,onBlur:b,onFocus:function(){return m("email")},required:!0})),a.a.createElement("div",null,a.a.createElement(En,{htmlFor:"password",hasFocus:"password"===x,hasInput:!!O.length},"password"),a.a.createElement(yn,{id:"password",type:"password",value:O,onChange:v,onBlur:b,onFocus:function(){return m("password")},required:!0})),a.a.createElement(Pn,null,j.map((function(e){return a.a.createElement("figure",null,e)}))),a.a.createElement(Sn,null,a.a.createElement(kn,{type:"submit"},"Login"),a.a.createElement(Fn,{to:"/signup"},"signup here"))))};function Ln(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Nn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Ln(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ln(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function qn(){var e=Object(f.a)(['\n  body {\n    font-family: "Roboto", sans-serif;\n    position: relative;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    line-height: 1.6;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    line-height: 1.2;\n    margin: 0;\n  }\n']);return qn=function(){return e},e}var Gn=Object(b.a)(qn());var Mn=function(){var e=Object(r.useState)({user:!1}),n=Object(p.a)(e,2),t=n[0],c=n[1],o=function(e){c((function(n){return Nn({},n,{user:!0,email:e.email,_id:e._id,films:{}})})),u()},u=function(){var e=Object(s.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:(n=e.sent).errors&&console.log(n.errors),n.docs.length&&(t=n.docs.reduce((function(e,n){return e[n.filmId]=n,e}),{}),c((function(e){return Nn({},e,{films:t})})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:(n=e.sent).errors&&console.log(n.errors),n.user&&o({user:!0,email:n.user.email,_id:n.user._id});case 5:case"end":return e.stop()}}),e)})))()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Gn,null),a.a.createElement(m.a,{basename:"/v13-geckos-team-03"},a.a.createElement(Z,{user:t,logUserOut:function(){c((function(){return{user:!1}}))}}),a.a.createElement(d.a,{exact:!0,path:"/"},a.a.createElement(fn,{user:t,updateUser:c})),a.a.createElement(d.a,{exact:!0,path:"/search"},a.a.createElement(cn,{user:t,updateUser:c})),a.a.createElement(d.a,{path:"/myfilms"},a.a.createElement(sn,{user:t,updateUser:c})),a.a.createElement(d.a,{path:"/signup",render:function(){return a.a.createElement(zn,{logUserIn:o})}}),a.a.createElement(d.a,{path:"/login",render:function(){return a.a.createElement(An,{logUserIn:o})},logUserIn:o}),a.a.createElement(oe,null)))};o.a.render(a.a.createElement(Mn,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e12fc56b.chunk.js.map