"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[17],{17:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var s=n(152),r=n(791),u=n(880),o="Card_card__9h8Dh",c=n(184),a=function(e){return(0,c.jsx)("div",{className:o,children:e.children})},i=n(556),l="QuoteForm_form__ogBoi",d="QuoteForm_loading__gyIuQ",h="QuoteForm_control__8SqBM",f="QuoteForm_actions__I8AC6",x=function(e){var t=(0,r.useState)(!1),n=(0,s.Z)(t,2),o=n[0],x=n[1],m=(0,r.useRef)(),_=(0,r.useRef)();return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(u.NL,{when:o,message:function(){return"Are you sure you want to leave? All your entered will be lost"}}),(0,c.jsx)(a,{children:(0,c.jsxs)("form",{onFocus:function(){x(!0)},className:l,onSubmit:function(t){t.preventDefault();var n=m.current.value,s=_.current.value;e.onAddQuote({author:n,text:s})},children:[e.isLoading&&(0,c.jsx)("div",{className:d,children:(0,c.jsx)(i.Z,{})}),(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)("label",{htmlFor:"author",children:"Author"}),(0,c.jsx)("input",{type:"text",id:"author",ref:m})]}),(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)("label",{htmlFor:"text",children:"Text"}),(0,c.jsx)("textarea",{id:"text",rows:"5",ref:_})]}),(0,c.jsx)("div",{className:f,children:(0,c.jsx)("button",{onClick:function(){x(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=n(995),_=n(853),j=function(e){var t=(0,m.Z)(_.KP),n=t.sendRequest,s=t.status,o=(0,u.k6)();(0,r.useEffect)((function(){"completed"===s&&o.push("/quotes")}),[s,o]);return(0,c.jsx)(x,{isLoadind:"pending"===s,onAddQuote:function(e){n(e),o.push("/quotes")}})}}}]);
//# sourceMappingURL=17.6974e70d.chunk.js.map