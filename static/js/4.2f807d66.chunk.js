(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1XNcO",dialogsItems:"Dialogs_dialogsItems__EIVLB",active:"Dialogs_active__3dQeO",messages:"Dialogs_messages__3mVaD",message:"Dialogs_message__2LP5H",item:"Dialogs_item__2i2rk"}},300:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(126),r=t(295),c=t.n(r),l=t(12),m=function(e){var a="/dialogs/"+e.id;return s.a.createElement("div",{className:c.a.dialog+" "+c.a.active},s.a.createElement(l.b,{to:a},s.a.createElement("div",{className:c.a.item},s.a.createElement("img",{src:e.avatar}),e.name)))},o=function(e){return s.a.createElement("div",{className:c.a.message},e.message)},u=t(89),d=t(127),g=t(32),v=t(56),E=Object(v.a)(50),b=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(u.a,{component:g.b,validate:[v.b,E],name:"newMessageBody",placeholder:"Enter your message"})),s.a.createElement("div",null,s.a.createElement("button",null,"Send")))})),p=function(e){var a=e.dialogsPage,t=a.idName.map((function(e){return s.a.createElement(m,{name:e.name,key:e.id,id:e.id,avatar:e.avatar})})),n=a.messagesData.map((function(e){return s.a.createElement(o,{message:e.message,key:e.id})}));a.newMessageText;return s.a.createElement("div",{className:c.a.dialogs},s.a.createElement("div",{className:c.a.dialogsItems},t),s.a.createElement("div",{className:c.a.messages},s.a.createElement("div",null,n),s.a.createElement("div",null,s.a.createElement(b,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))))},f=t(15),_=t(34),h=t(35),O=t(38),j=t(37),y=t(10),D=t(8);a.default=Object(D.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.a)(a))}}})),(function(e){var a=function(a){Object(O.a)(n,a);var t=Object(j.a)(n);function n(){return Object(_.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(y.a,{to:"/login"})}}]),n}(s.a.Component);return Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}))(a)}))(p)}}]);
//# sourceMappingURL=4.2f807d66.chunk.js.map