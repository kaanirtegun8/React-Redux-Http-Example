"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[165],{82:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var s=n(880),c=n(523),o=n(152),r=n(791),d=n(853),a=n(995),m="Comments_comments__9cxIN",i="NewCommentForm_form__C3cQf",u="NewCommentForm_control__iR6jS",l="NewCommentForm_actions__NC323",x=n(556),h=n(184),j=function(e){var t=(0,s.UO)(),n=(0,r.useRef)(),c=(0,a.Z)(d.Ir),o=c.sendRequest,m=c.status,j=c.error,f=e.onAddedComment;(0,r.useEffect)((function(){"completed"!==m||j||f()}),[m,j,f]);var _=function(e){e.preventDefault(),o({commentData:{text:n.current.value},quoteId:t.id})};return(0,h.jsxs)("form",{className:i,onSubmit:_,children:["pending"===m&&(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})}),(0,h.jsxs)("div",{className:u,onSubmit:_,children:[(0,h.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,h.jsx)("textarea",{id:"comment",rows:"5",ref:n})]}),(0,h.jsx)("div",{className:l,children:(0,h.jsx)("button",{className:"btn",children:"Add Comment"})})]})},f="CommentItem_item__+vwzS",_=function(e){return(0,h.jsx)("li",{className:f,children:(0,h.jsx)("p",{children:e.text})})},N="CommentsList_comments__UVWAR",p=function(e){return(0,h.jsx)("ul",{className:N,children:e.comments.map((function(e){return(0,h.jsx)(_,{text:e.text},e.id)}))})},C=function(){var e=(0,s.UO)(),t=(0,r.useState)(!1),n=(0,o.Z)(t,2),c=n[0],i=n[1],u=(0,a.Z)(d.h_),l=u.sendRequest,f=u.status,_=u.data;console.log(_),(0,r.useEffect)((function(){l(e.id)}),[l,e]);var N,C=(0,r.useCallback)((function(){l(e.id)}),[l,e]);return"pending"===f&&(N=(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})})),"completed"===f&&_&&_.length>0&&(N=(0,h.jsx)(p,{comments:_})),"completed"!==f||_&&0!==_.length||(N=(0,h.jsx)("p",{children:"No comments were added yet"})),(0,h.jsxs)("section",{className:m,children:[(0,h.jsx)("h2",{children:"User Comments"}),!c&&(0,h.jsx)("button",{className:"btn",onClick:function(){i(!0)},children:"Add a Comment"}),c&&(0,h.jsx)(j,{onAddedComment:C}),N]})},v="HighlightedQuote_quote__dE8qA",b=function(e){var t=e.quote;return(0,h.jsxs)("figure",{className:v,children:[(0,h.jsx)("p",{children:t.text}),(0,h.jsx)("figcaption",{children:t.author})]})},g=n(497),q=function(){var e=(0,s.UO)(),t=(0,s.$B)(),n=e,o=(0,a.Z)(d.jR,!0),m=o.sendRequest,i=o.status,u=o.data,l=o.error;return(0,r.useEffect)((function(){m(n.id)}),[m,n]),"pending"===i?(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(x.Z,{})}):l?(0,h.jsxs)("p",{className:"centered focus",children:[" ",l," "]}):"completed"!==i||u?(0,h.jsxs)("section",{children:[(0,h.jsx)(b,{quote:u}),(0,h.jsx)(s.AW,{path:t.path,exact:!0,children:(0,h.jsx)("div",{className:"centered",children:(0,h.jsx)(c.rU,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),(0,h.jsx)(s.AW,{path:"".concat(t.path,"/comments"),children:(0,h.jsx)(C,{})})]}):(0,h.jsx)(g.Z,{})}},497:function(e,t,n){n.d(t,{Z:function(){return r}});var s=n(523),c="NoQuotesFound_noquotes__EUQsM",o=n(184),r=function(){return(0,o.jsxs)("div",{className:c,children:[(0,o.jsx)("p",{children:"No quotes found!"}),(0,o.jsx)(s.rU,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})}}}]);
//# sourceMappingURL=165.3d7c021c.chunk.js.map