(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{1842:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(6265),c=n(7294),s=n(9149),a=n(9008),o=(n(1664),n(5675)),l=n(7120),u=n(9669),d=n.n(u),f=n(1163);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=(0,c.useState)({name:"User"}),t=e[0],n=e[1],r=(0,f.useRouter)();return(0,c.useEffect)((function(){d().get("/middleware/").then((function(e){"Cookie verified"==e.data.message?n(p(p({},t),{},{name:e.data.name})):r.push("/signin")})).catch((function(e){console.log(e)}))}),[]),(0,i.jsxs)("div",{className:"select-none",children:[(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:"Profile"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no"})]}),(0,i.jsx)(s.Z,{}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsxs)("div",{className:"flex flex-wrap justify-between w-auto my-16",children:[(0,i.jsx)("div",{className:"w-12 h-12 m-5",children:(0,i.jsx)(o.default,{width:"1000000",height:"1000000",src:"/profile-user.png",layout:"intrinsic",quality:"100",alt:"profile image",unoptimized:!0})}),(0,i.jsx)("div",{className:"mx-5 my-auto",children:(0,i.jsx)("div",{className:"my-2 text-xl font-bold md:text-3xl",children:t.name})})]})}),(0,i.jsx)("div",{className:"flex justify-center mt-2 mb-5",children:(0,i.jsx)("div",{className:"px-4 py-4 m-2 font-medium text-white bg-blue-500 rounded cursor-pointer text-md",onClick:function(){d().post("/middleware/remove").then((function(e){alert(e.data)})).catch((function(e){return console.log(e)}))},children:"Log out"})}),(0,i.jsx)(l.Z,{})]})}},3962:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(1842)}])}},function(e){e.O(0,[30,669,491,774,888,179],(function(){return t=3962,e(e.s=t);var t}));var t=e.O();_N_E=t}]);