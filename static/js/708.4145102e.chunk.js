"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{2708:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(9439),a=n(4942),c=n(5671),o=n(3144),s=n(136),i=n(3668),u=n(2791),l=n(3329),d=function(e){(0,s.Z)(n,e);var t=(0,i.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.handleChange=function(t){var n=t.target,r=n.value,c=n.name;e.setState((0,a.Z)({},c,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProduct(e.state)},e}return(0,o.Z)(n,[{key:"render",value:function(){return(0,l.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Title"}),(0,l.jsx)("input",{name:"title",type:"text",className:"form-control",id:"exampleInputEmail1",value:this.state.title,onChange:this.handleChange})]}),(0,l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create"})]})}}]),n}(u.Component),h=d,m=n(1087),f=function(){var e=(0,u.useState)(""),t=(0,r.Z)(e,2),n=t[0],a=t[1],c=(0,m.lr)(),o=(0,r.Z)(c,2),s=o[0],i=o[1];return(0,u.useEffect)((function(){!n&&a(s.get("search"))}),[s,n]),(0,l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i({search:n})},children:[(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)("label",{htmlFor:"exampleInputSearch",className:"form-label",children:"Title"}),(0,l.jsx)("input",{name:"search",type:"text",className:"form-control",id:"exampleInputSearch",value:n||"",onChange:function(e){var t=e.target.value;a(t)}})]}),(0,l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Search"})]})},p=n(7689),x=function(e){var t=e.product,n=(0,p.TH)();return(0,l.jsx)(m.rU,{to:"".concat(t.id),state:n,children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"card p-2",children:[(0,l.jsx)("p",{children:t.title}),(0,l.jsxs)("p",{children:[t.price," $"]})]})})})},v=function(e){var t=e.products,n=e.handleLoadMore,r=e.isShowBtn;return console.log(t),(0,l.jsxs)(l.Fragment,{children:[t.map((function(e){return(0,l.jsx)(x,{product:e},e.id)})),r&&(0,l.jsx)("button",{className:"btn btn-secondary mt-5 mx-5",onClick:n,children:"load more"})]})},j=n(4420),b=n(3553),g=function(e){var t;return null===(t=e.products.products)||void 0===t?void 0:t.toSorted((function(e,t){return e.price-t.price}))},S=function(e){return e.products.isLoading},C=function(e){return e.products.error},N=function(e){return e.products.singleProduct},y=((0,b.P1)((function(e){return e.products.filter}),g,(function(e,t){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),n(6613)),k=function(){var e=(0,j.v9)(g),t=(0,j.v9)(S),n=(0,j.v9)(C),a=(0,j.v9)(N),c=(0,j.I0)(),o=(0,u.useState)(0),s=(0,r.Z)(o,2),i=s[0],d=s[1];(0,u.useEffect)((function(){c((0,y.S)())}),[c]),console.log("singleProduct",a);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:function(){return d((function(e){return e+1}))},children:i}),t&&(0,l.jsx)("h1",{children:"loading..."}),n&&(0,l.jsx)("h1",{children:n}),(0,l.jsx)(h,{createProduct:function(e){c((0,y.H)(e))}}),(0,l.jsx)(f,{}),e&&(0,l.jsx)(v,{handleLoadMore:function(){},products:e})]})}}}]);
//# sourceMappingURL=708.4145102e.chunk.js.map