(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(10),l=t.n(s),c=t(11),i=(t(30),t(3)),o=t(9),m=t(17),u={SAVE_RESTAURANTS:"SAVE_RESTAURANTS"};function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,d=[m.a],g={restaurantsListData:null};var h=Object(o.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u.SAVE_RESTAURANTS:return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(t,!0).forEach(function(a){Object(i.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e,{restaurantsListData:a.payload});default:return e}},f(o.a.apply(void 0,d))),_=t(4),v=t(5),E=t(7),N=t(6),b=t(8),k=(t(31),function(e){var a=e.imageUrl,t=e.title,n=e.categories,s=e.etaRange;return r.a.createElement("div",{className:"restaurant-card"},r.a.createElement("img",{src:a,alt:t,className:"restaurant-card__img"}),r.a.createElement("h2",{className:"restaurant-card__title"},t),r.a.createElement("div",{className:"restaurant-card__categories"},n.join(" \u2022 ")),r.a.createElement("div",{className:"restaurant-card__eta"},s))});k.defaultProps={categories:[],etaRange:""};t(32);var O=function(e){function a(){return Object(_.a)(this,a),Object(E.a)(this,Object(N.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadRestaurants)()}},{key:"render",value:function(){var e=this.props.restaurantsData;return r.a.createElement("div",{className:"restaurants-list"},e.map(function(e){var a=e.uuid,t=e.title,n=e.heroImageUrl,s=e.categories,l=e.etaRange;return r.a.createElement(k,{key:a,uuid:a,title:t,imageUrl:n,categories:s,etaRange:l?l.text:"25 - 35 min"})}))}}]),a}(n.Component);O.defaultProps={restaurantsData:[]};var y=t(18),j=Object(y.a)(function(e){return e},function(e){var a=e.restaurantsListData;if(!a)return[];var t=a.feedItems,n=a.storesMap;return t.map(function(e){var a=e.uuid;return n[a]})});var R={loadRestaurants:function(){return function(e){fetch("https://mate-uber-eats-api.herokuapp.com/api/v1/restaurants").then(function(e){return e.json()}).then(function(a){var t=a.data;e(function(e){return{type:u.SAVE_RESTAURANTS,payload:e}}(t))})}}},S=Object(c.b)(function(e){return{restaurantsData:j(e)}},R)(O),w=(t(33),t(1)),U=t.n(w),A=t(19),P=t.n(A),C=(t(34),function(e){function a(){var e,t;Object(_.a)(this,a);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(t=Object(E.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(s)))).state={isFocused:!1},t.inputRef=Object(n.createRef)(),t.handleFocus=function(){return t.setState({isFocused:!0})},t.handleBlur=function(){return t.setState({isFocused:!1})},t.focus=function(){return t.inputRef.current.focus()},t}return Object(b.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.props,a=e.iconUrl,t=e.value,n=e.onChange,s=e.type,l=e.placeholder,c=e.name,o=e.className,m=this.state.isFocused,u=P()("control",Object(i.a)({"control--focused":m},o,!!o));return r.a.createElement("div",{className:u,onClick:this.focus,role:"presentation"},!!a&&r.a.createElement("img",{src:a,alt:l,className:"control__icon"}),r.a.createElement("input",{ref:this.inputRef,type:s,value:t,onChange:n,onFocus:this.handleFocus,onBlur:this.handleBlur,name:c,placeholder:l,className:"control__input"}))}}]),a}(n.PureComponent));C.prototypes={value:U.a.string.isRequired,onChange:U.a.func.isRequired,name:U.a.string.isRequired,type:U.a.string,placeholder:U.a.string,iconUrl:U.a.string,className:U.a.string},C.defaultProps={type:"text",placeholder:"",iconUrl:"",className:""};var T=function(e){function a(){var e,t;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(E.a)(this,(e=Object(N.a)(a)).call.apply(e,[this].concat(r)))).state={address:"",time:"",search:""},t.handleChange=function(e){var a=e.target;t.setState(Object(i.a)({},a.name,a.value))},t}return Object(b.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this.state,a=e.address,t=e.time,n=e.search;return console.log(this.state),r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{src:"./images/logo.svg",alt:"Uber Eats"}),r.a.createElement("div",{className:"header__delivery-info"},r.a.createElement(C,{name:"address",value:a,onChange:this.handleChange,placeholder:"Address",iconUrl:"./images/place.svg"}),r.a.createElement(C,{name:"time",value:t,onChange:this.handleChange,placeholder:"Time",type:"time"})),r.a.createElement(C,{name:"search",value:n,onChange:this.handleChange,placeholder:"Search",iconUrl:"./images/search.svg",className:"header__search"}),r.a.createElement("a",{className:"header__link",href:"/sing-in"},"Sign In"))))}}]),a}(n.Component),D=(t(35),t(36),function(e){var a=e.name,t=e.value,n=e.onSelect,s=e.options,l=e.iconUrl;return r.a.createElement("div",{className:"select"},r.a.createElement("select",{name:a,value:t,onChange:n,className:"select__input"},s.map(function(e){var a=e.value,n=e.label;return r.a.createElement("option",{value:a,selected:t===a},n)})),!!l&&r.a.createElement("img",{className:"select__icon",src:l,alt:"select icon"}),r.a.createElement("img",{className:"select__arrow",src:"./images/arrow-down.svg",alt:"arrow down"}))});D.prototypes={name:U.a.string.isRequired,value:U.a.string.isRequired,onSelect:U.a.func,options:U.a.arrayOf(U.a.shape({value:U.a.string,label:U.a.string})).isRequired,iconUrl:U.a.string},D.defaultProps={onSelect:function(){},options:[],iconUrl:""};var F=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__top-part"},r.a.createElement("div",{className:"footer__main"},r.a.createElement("div",{className:"footer__logo-container"},r.a.createElement("img",{className:"footer__logo",src:"./images/logo-white.svg",alt:"Uber Eats"}),r.a.createElement(D,{name:"language",options:[{value:"en",label:"English"},{value:"uk",label:"Ukrainian"}],value:"en",iconUrl:"./images/globe.svg"})),r.a.createElement("div",{className:"footer__mobile-apps"},r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/app-store.png",alt:"App Store",className:"footer__mobile-app"})),r.a.createElement("a",{href:"#",className:"footer__mobile-app"},r.a.createElement("img",{src:"./images/google-play.png",alt:"Google Play",className:"footer__mobile-app"})))),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"#",className:"links__link links__link--intended"},"About UberEats"),r.a.createElement("a",{href:"#",className:"links__link"},"Read our blog"),r.a.createElement("a",{href:"#",className:"links__link"},"Sign up to deliver"),r.a.createElement("a",{href:"#",className:"links__link"},"Add your restaurant")),r.a.createElement("div",{className:"footer__top-links links"},r.a.createElement("a",{href:"#",className:"links__link links__link--intended"},"Get help"),r.a.createElement("a",{href:"#",className:"links__link"},"Read FAQs"),r.a.createElement("a",{href:"#",className:"links__link"},"View all cities"))),r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Uber Technologies Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"#",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"#",className:"links__link"},"Terms of  use"),r.a.createElement("a",{href:"#",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/facebook.svg",alt:"Facebook"})),r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/twitter.svg",alt:"Twitter"})),r.a.createElement("a",{href:"#",className:"social__link"},r.a.createElement("img",{src:"./images/instagram.svg",alt:"Instagram"})))))))};t(37);l.a.render(r.a.createElement(function(){return r.a.createElement(c.a,{store:h},r.a.createElement(T,null),r.a.createElement("div",{className:"page"},r.a.createElement("main",{className:"content"},r.a.createElement(S,null))),r.a.createElement(F,null))},null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.f767cefc.chunk.js.map