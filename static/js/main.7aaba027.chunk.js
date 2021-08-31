(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{25:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(19),i=c.n(s),a=c(9),o=(c(25),c(0));function d(){return Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h1",{className:"title__h1",children:"ONLINE SHOPPING EXPERIENCE"})})}var l=c(2),j=c(17),u=c(18),b=c(4),h=n.a.createContext();function O(e){var t=Object(r.useState)([]),c=Object(b.a)(t,2),n=c[0],s=c[1],i=Object(r.useState)([]),a=Object(b.a)(i,2),d=a[0],l=a[1],O=Object(r.useState)(!1),m=Object(b.a)(O,2),x=m[0],f=m[1],v=Object(r.useState)([]),_=Object(b.a)(v,2),p=_[0],g=_[1],N=Object(r.useState)(!1),y=Object(b.a)(N,2),w=y[0],C=y[1];function S(e){localStorage.setItem("cart",JSON.stringify(e))}function I(e){var t=p.filter((function(t){return t.id!==e.id}));g(t),S(t)}return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("products")),t=JSON.parse(localStorage.getItem("cart")),c=JSON.parse(localStorage.getItem("orders"));t&&g(t),c&&l(c),e?s(e):fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return e.favorited=!1,20===e.id?e.isFeautured=!0:e.isFeautured=!1,e}));s(t),localStorage.setItem("products",JSON.stringify(t))}))}),[]),Object(o.jsx)(h.Provider,{value:{productsData:n,setFavorite:function(e){var t=n.map((function(t){return t.id===e?Object(u.a)(Object(u.a)({},t),{},{favorited:!t.favorited}):t}));localStorage.setItem("products",JSON.stringify(t)),s(t)},addItemToCart:function(e){e.quantity=1;var t=[].concat(Object(j.a)(p),[e]);g(t),S(t)},cartItems:p,removeItemFromCart:I,convertToCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})},handleQuantityChange:function(e,t){if(!(t<0))if(0!==t){var c=p.map((function(c){return c.id===e.id&&(c.quantity=t),c}));g(c),S(c)}else I(e)},ordering:w,placeOrder:function(){C(!0);var e=new Date;setTimeout((function(){var t=[].concat(Object(j.a)(d),[{id:e.getTime(),products:p,status:"pending",created:e.toLocaleDateString()}]);l(t),localStorage.setItem("orders",JSON.stringify(t)),g([]),localStorage.removeItem("cart"),C(!1),f(!0)}),3e3)},orders:d,setRedirect:f,redirect:x},children:e.children})}function m(){var e=Object(r.useContext)(h),t=e.cartItems,c=e.redirect,n=t.length;return Object(o.jsxs)("nav",{children:[Object(o.jsxs)("div",{className:"nav__wrapper",children:[Object(o.jsxs)("ul",{className:"nav__list",children:[Object(o.jsx)(a.b,{to:"/",className:"nav__link",children:"Products"}),Object(o.jsx)(a.b,{to:"/orders",className:"nav__link",children:"My-Orders"})]}),Object(o.jsxs)(a.b,{to:"/cart",className:"nav__cart",children:[Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"30",height:"30",fill:"#fff",children:[Object(o.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(o.jsx)("path",{d:"M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})]}),n>0&&Object(o.jsx)("p",{className:"nav__number",children:n})]})]}),c?Object(o.jsx)(l.a,{push:!0,to:"/orders"}):null]})}function x(e){var t=e.hovered,c=e.product,n=Object(r.useContext)(h),s=n.setFavorite,i=n.cartItems,a=n.addItemToCart,d=n.removeItemFromCart,l=i.some((function(e){return e.id===c.id}));return Object(o.jsxs)("div",{className:"listing__icons",children:[Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"2em",height:"2em",className:"listing__icon",onClick:function(){return s(c.id)},style:t||c.favorited?{display:"block"}:{display:"none"},children:[Object(o.jsx)("path",{fill:"none",d:"M0 0H24V24H0z"}),Object(o.jsx)("path",{d:"M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z",fill:c.favorited?"red":"#fff",stroke:"#000"})]}),Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"2em",height:"2em",className:"listing__icon listing__icon--basket",style:t&&!l?{display:"block"}:{display:"none"},onClick:function(){return a(c)},children:[Object(o.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(o.jsx)("path",{d:"M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"})]}),Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"2em",height:"2em",className:"listing__icon listing__icon--basket",style:l?{display:"block"}:{display:"none"},fill:"blue",onClick:function(){return d(c)},children:[Object(o.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(o.jsx)("path",{d:"M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"})]})]})}var f=function(){var e=Object(r.useState)(window.innerWidth),t=Object(b.a)(e,2),c=t[0],n=t[1],s=c<=768,i=Object(r.useState)(s),a=Object(b.a)(i,2),o=a[0],d=a[1],l=Object(r.useRef)(null);function j(){var e=window.innerWidth;d(e<=768),n(e)}function u(){d(!0)}function h(){d(c<=768)}return Object(r.useEffect)((function(){return l.current.addEventListener("mouseenter",u),l.current.addEventListener("mouseleave",h),window.addEventListener("resize",j),function(){window.removeEventListener("resize",j)}}),[c]),[o,l]};var v=function(e){var t=e.product,c=f(),n=Object(b.a)(c,2),s=n[0],i=n[1],a=Object(r.useContext)(h).convertToCurrency;return Object(o.jsxs)("div",{className:"listing__product",ref:i,children:[Object(o.jsx)(x,{hovered:s,product:t}),Object(o.jsx)("img",{src:t.image,className:"listing__img",alt:t.title}),Object(o.jsx)("p",{className:"listing__price",style:s?{display:"block"}:{display:"none"},children:a(t.price)})]})};function _(e){var t=e.featuredProduct,c=Object(r.useContext)(h).convertToCurrency,n=f(),s=Object(b.a)(n,2),i=s[0],a=s[1];return Object(o.jsxs)("div",{className:"featured section-width",ref:a,children:[Object(o.jsx)("div",{className:"featured__img",children:Object(o.jsx)("img",{src:t.image,alt:"interactive"})}),Object(o.jsxs)("div",{className:"featured__content",children:[Object(o.jsx)(x,{hovered:i,product:t}),Object(o.jsxs)("div",{className:"featured__header",children:[Object(o.jsx)("h2",{className:"featured__title",children:"BEST SELLER"}),Object(o.jsx)("p",{className:"featured__price",children:c(t.price)})]}),Object(o.jsx)("p",{className:"featured__p",children:t.title})]})]})}function p(){var e=Object(r.useContext)(h).productsData,t=e.find((function(e){return e.isFeautured})),c=t?Object(o.jsx)(_,{featuredProduct:t}):"";return Object(o.jsxs)("section",{children:[c,Object(o.jsxs)("div",{className:"listing section-width",children:[Object(o.jsx)("h2",{className:"listing__title",children:"OUR PRODUCTS"}),Object(o.jsx)("div",{className:"listing__products",children:e?e.map((function(e){return Object(o.jsx)(v,{product:e},e.id)})):"loading..."})]})]})}function g(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("p",{className:"footer__info section-width",children:["The theme created by"," ",Object(o.jsx)("a",{href:"mailto:emirsagit@gmail.com",className:"footer__link",children:"Emir Sagit."})]})})}function N(){return Object(o.jsxs)("main",{children:[Object(o.jsxs)("header",{className:"header__products",children:[Object(o.jsx)(m,{}),Object(o.jsx)(d,{})]}),Object(o.jsx)(p,{}),Object(o.jsx)(g,{})]})}function y(e){var t=e.product,c=Object(r.useContext)(h),n=c.removeItemFromCart,s=c.convertToCurrency,i=c.handleQuantityChange;return Object(o.jsxs)("div",{className:"cart__grid section-width",children:[Object(o.jsx)("img",{className:"cart-product__img",src:t.image,alt:t.title}),Object(o.jsxs)("div",{className:"form__container",children:[Object(o.jsx)("input",{type:"number",min:"1",className:"form__number",value:t.quantity,onChange:function(e){return i(t,e.target.value)}}),Object(o.jsxs)("div",{className:"form__nav",children:[Object(o.jsx)("div",{className:"form__quantity form__quantity--up",onClick:function(){return i(t,t.quantity+1)},children:"+"}),Object(o.jsx)("div",{className:"form__quantity form__quantity--down",onClick:function(){return i(t,t.quantity-1)},children:"-"})]})]}),Object(o.jsx)("p",{className:"cart-product__price",children:s(t.price)}),Object(o.jsx)("button",{className:"cart-product__remove form__button form__button--remove",onClick:function(){return n(t)},children:"X"})]})}function w(e){var t=e.totalPrice,c=Object(r.useContext)(h),n=c.convertToCurrency,s=c.placeOrder,i=c.ordering;return Object(o.jsxs)("div",{className:"cart__order cart__grid section-width",children:[Object(o.jsxs)("p",{className:"cart__total",children:["Total: ",n(t)]}),Object(o.jsx)("div",{className:"cart__button",children:Object(o.jsx)("button",{className:"form__button",onClick:s,disabled:i,children:i?"Ordering...":"Place Order"})})]})}function C(){var e=Object(r.useContext)(h).cartItems,t=0,c="",n="";return e.length?(c=e.map((function(e){return t+=e.price*e.quantity,Object(o.jsx)(y,{product:e},e.id)})),n=Object(o.jsx)(w,{totalPrice:t})):c=Object(o.jsx)("p",{className:"cart-product__empty",children:"There aren't any items in your cart"}),Object(o.jsxs)("main",{children:[Object(o.jsx)("header",{children:Object(o.jsx)(m,{})}),Object(o.jsx)("h1",{className:"cart__title",children:"Check out "}),c,n,Object(o.jsx)(g,{})]})}function S(e){var t=e.order;return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{children:[" ",t.id]}),Object(o.jsx)("td",{children:t.created}),Object(o.jsx)("td",{children:t.status})]})}function I(e){var t=e.orders.map((function(e){return Object(o.jsx)(S,{order:e},e.id)}));return Object(o.jsxs)("table",{className:"order__table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Order Number"}),Object(o.jsx)("th",{children:"Date"}),Object(o.jsx)("th",{children:"Status"})]})}),Object(o.jsx)("tbody",{children:t})]})}function k(){var e=Object(r.useContext)(h),t=e.orders,c=e.setRedirect;return Object(r.useEffect)((function(){c(!1)}),[]),Object(o.jsxs)("main",{children:[Object(o.jsx)("header",{children:Object(o.jsx)(m,{})}),Object(o.jsx)("h1",{className:"cart__title",children:"My Orders"}),Object(o.jsx)("div",{className:"section-width",children:t.length?Object(o.jsx)(I,{orders:t}):Object(o.jsx)("p",{className:"cart-product__empty",children:"You haven't got any orders yet."})}),Object(o.jsx)(g,{})]})}var z=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{exact:!0,path:"/",children:Object(o.jsx)(N,{})}),Object(o.jsx)(l.b,{path:"/orders",children:Object(o.jsx)(k,{})}),Object(o.jsx)(l.b,{path:"/cart",children:Object(o.jsx)(C,{})})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),r(e),n(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(O,{children:Object(o.jsx)(a.a,{children:Object(o.jsx)(z,{})})})}),document.getElementById("root")),E()}},[[35,1,2]]]);
//# sourceMappingURL=main.7aaba027.chunk.js.map