(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),i=n(8),r=n(22),u=n(2),l=n(3),p=Object(a.createContext)(),d=n(19),j=n(20),h=new(function(){function e(t){var n=t.url,a=t.headers;Object(d.a)(this,e),this._url=n,this._headers=a}return Object(j.a)(e,[{key:"_getStatus",value:function(e){return e.ok?e.json():Promise.reject("Error! : ".concat(e.status))}},{key:"getServerData",value:function(){return Promise.all([this.getUserInfo(),this.getInitialCards()])}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getStatus)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._getStatus)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getStatus)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._getStatus)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getStatus)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getStatus)}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._getStatus)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-23",headers:{authorization:"59fccf9e-6799-435b-80d6-745d3115e9a3","Content-Type":"application/json"}}),b="https://auth.nomoreparties.co";var m=n(0);function _(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,o=Object(a.useContext)(p);var i=t.owner._id===o._id,r=t.likes.some((function(e){return e._id===o._id})),u="card__delete ".concat(i&&"show-block"),l="card__like ".concat(r&&"card__like_active");return Object(m.jsxs)("li",{className:"card",children:[Object(m.jsx)("button",{onClick:function(){s(t)},className:u,type:"button"}),Object(m.jsx)("img",{onClick:function(){n(t)},className:"card__img",alt:t.name,src:t.link}),Object(m.jsxs)("div",{className:"card__description",children:[Object(m.jsx)("h2",{className:"card__title",children:t.name}),Object(m.jsxs)("div",{className:"card__container",children:[Object(m.jsx)("button",{className:l,type:"button",onClick:function(){c(t)}}),Object(m.jsx)("span",{className:"card__like-count",children:t.likes.length})]})]})]})}function f(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onCardDelete,s=e.onAddPlace,o=e.cards,i=e.onCardClick,r=e.onCardLike,u=Object(a.useContext)(p);return Object(m.jsxs)("main",{className:"main",children:[Object(m.jsxs)("section",{className:"profile",children:[Object(m.jsxs)("div",{className:"profile__info",children:[Object(m.jsxs)("div",{className:"profile__container",children:[Object(m.jsx)("img",{src:u.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(m.jsx)("button",{onClick:t,className:"profile__avatar-btn"})]}),Object(m.jsxs)("div",{className:"profile__about",children:[Object(m.jsx)("h1",{className:"profile__name",children:u.name}),Object(m.jsx)("p",{className:"profile__description",children:u.about})]}),Object(m.jsx)("button",{onClick:n,className:"profile__edit",type:"button"})]}),Object(m.jsx)("button",{onClick:s,className:"profile__add",type:"button"})]}),Object(m.jsx)("section",{className:"gallery",children:Object(m.jsx)("ul",{className:"cards",children:o.map((function(e){return Object(m.jsx)(_,{card:e,onCardClick:i,onCardDelete:c,onCardLike:r},e._id)}))})})]})}function O(e){var t=e.email,n=e.onSignOut;return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("div",{className:"header__logo"}),Object(m.jsx)(l.b,{path:"/sign-up",children:Object(m.jsx)(i.b,{className:"header__auth_link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(m.jsx)(l.b,{path:"/sign-in",children:Object(m.jsx)(i.b,{className:"header__auth_link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(m.jsx)(l.b,{exact:!0,path:"/",children:Object(m.jsxs)("div",{className:"header__auth",children:[Object(m.jsx)("p",{className:"header__auth_email",children:t}),Object(m.jsx)("button",{className:"header__auth_btn",onClick:n,type:"button",children:"\u0412\u044b\u0439\u0442\u0438"})]})})]})}function g(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})}function x(e){var t=e.card,n=e.isClose;return Object(m.jsx)("section",{className:"popup popup_type_open-photo ".concat(t.link&&"popup_opened"),children:Object(m.jsxs)("div",{className:"popup__container popup__container_type_open-photo",children:[Object(m.jsx)("img",{className:"popup__img",src:"".concat(t.link),alt:t.name}),Object(m.jsx)("h2",{className:"popup__name",children:t.name}),Object(m.jsx)("button",{onClick:n,type:"button",className:"popup__close"})]})})}function v(e){var t=e.name,n=e.title,a=e.isOpen,c=e.onClose,s=e.children,o=e.onSubmit,i=e.buttonText;return Object(m.jsx)("section",{className:"popup popup_type_".concat(t," ").concat(a&&"popup_opened"),children:Object(m.jsxs)("div",{className:"popup__container",children:[Object(m.jsx)("h2",{className:"popup__title",children:n}),Object(m.jsxs)("form",{action:"#",method:"POST",className:"popup__form",onSubmit:o,name:t,children:[s,Object(m.jsx)("button",{type:"submit",defaultValue:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",className:"popup__save",name:"btn-add-profile",children:i})]}),Object(m.jsx)("button",{type:"button",className:"popup__close",onClick:c})]})})}function N(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=e.isLoading,o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1],p=Object(a.useState)(""),d=Object(u.a)(p,2),j=d[0],h=d[1];return Object(a.useEffect)((function(){l(""),h("")}),[t]),Object(m.jsxs)(v,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",buttonText:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"C\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r,link:j})},children:[Object(m.jsxs)("label",{htmlFor:"card-name-input",className:"popup__label",children:[Object(m.jsx)("input",{value:r,onChange:function(e){return l(e.target.value)},type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_string_card-name",name:"name",required:!0,minLength:"2",maxLength:"30",id:"card-name-input"}),Object(m.jsx)("span",{className:"popup__input-error card-name-input-error"})]}),Object(m.jsxs)("label",{htmlFor:"card-link-input",className:"popup__label",children:[Object(m.jsx)("input",{value:j,onChange:function(e){return h(e.target.value)},type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_string_card-link",name:"link",required:!0,id:"card-link-input"}),Object(m.jsx)("span",{className:"popup__input-error card-link-input-error"})]})]})}function C(e){var t=e.onUpdateAvatar,n=e.isOpen,c=e.onClose,s=e.isLoading,o=Object(a.useRef)("");return Object(a.useEffect)((function(){o.current.value=""}),[n]),Object(m.jsx)(v,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"update",buttonText:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),t({avatar:o.current.value})},isOpen:n,onClose:c,children:Object(m.jsxs)("label",{htmlFor:"card-link-input-avatar",className:"popup__label",children:[Object(m.jsx)("input",{ref:o,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_string_card-link",name:"avatar",required:!0,id:"card-link-input-avatar"}),Object(m.jsx)("span",{className:"popup__input-error card-link-input-avatar-error"})]})})}function k(e){var t=e.onUpdateProfile,n=e.isOpen,c=e.onClose,s=e.isLoading,o=Object(a.useContext)(p),i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],d=r[1],j=Object(a.useState)(""),h=Object(u.a)(j,2),b=h[0],_=h[1];return Object(a.useEffect)((function(){d(o.name),_(o.about)}),[o,n]),Object(m.jsxs)(v,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",buttonText:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:c,onSubmit:function(e){e.preventDefault(),t({name:l,about:b})},children:[Object(m.jsxs)("label",{htmlFor:"name-input",className:"popup__label",children:[Object(m.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_string_name",onChange:function(e){d(e.target.value)},value:l||"",name:"name",required:!0,minLength:"2",maxLength:"40",id:"name-input"}),Object(m.jsx)("span",{className:"popup__input-error name-input-error"})]}),Object(m.jsxs)("label",{htmlFor:"job-input",className:"popup__label",children:[Object(m.jsx)("input",{type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_string_job",onChange:function(e){_(e.target.value)},value:b||"",name:"about",required:!0,minLength:"2",maxLength:"200",id:"job-input"}),Object(m.jsx)("span",{className:"popup__input-error job-input-error"})]})]})}var S=n(23),y=n(24);function w(e){var t=e.component,n=Object(y.a)(e,["component"]);return Object(m.jsx)(l.b,{children:function(){return n.loggedIn?Object(m.jsx)(t,Object(S.a)({},n)):Object(m.jsx)(l.a,{to:"/sign-in"})}})}function E(e){var t=e.title,n=e.btnText,a=e.email,c=e.password,s=e.handleChangeEmail,o=e.handleChangePassword,i=e.handleSubmit,r=e.children;return Object(m.jsx)("section",{className:"auth",children:Object(m.jsxs)("form",{className:"auth__form",onSubmit:i,children:[Object(m.jsx)("h3",{className:"auth__title",children:t}),Object(m.jsxs)("fieldset",{className:"auth__field",children:[Object(m.jsx)("input",{name:"email",type:"email",pattern:"\\S+@\\S+\\.\\S+",className:"auth__input",value:a||"",onChange:s,placeholder:"Email",required:!0}),Object(m.jsx)("input",{name:"password",type:"password",className:"auth__input",value:c||"",onChange:o,required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"8"})]}),Object(m.jsx)("button",{className:"auth__btn",type:"submit",children:n}),r]})})}function P(e){var t=e.onRegister,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),l=Object(u.a)(r,2),p=l[0],d=l[1];return Object(m.jsx)(E,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",btnText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",email:s,password:p,handleChangeEmail:function(e){o(e.target.value)},handleChangePassword:function(e){d(e.target.value)},handleSubmit:function(e){e.preventDefault(),t(s,p)},children:Object(m.jsx)(i.b,{to:"/sign-in",className:"auth__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})})}function T(e){var t=e.onLogin,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],p=r[1];return Object(m.jsx)(E,{title:"\u0412\u0445\u043e\u0434",btnText:"\u0412\u043e\u0439\u0442\u0438",email:s,password:l,handleChangeEmail:function(e){o(e.target.value)},handleChangePassword:function(e){p(e.target.value)},handleSubmit:function(e){e.preventDefault(),s&&l&&t(s,l)}})}var L=n.p+"static/media/ok.1b6082f8.svg",D=n.p+"static/media/err.df8eddf6.svg";function A(e){var t=e.isOpen,n=e.onClose,a=e.isSuccess;return Object(m.jsx)("section",{className:"popup popup__tooltip ".concat(t&&"popup_opened"),children:Object(m.jsxs)("div",{className:"popup__container popup__container_type_tooltip",children:[Object(m.jsx)("button",{onClick:n,className:"popup__close popup__close_type_tooltip",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(m.jsx)("img",{className:"popup__res",src:a.res?L:D,alt:a.res?"\u0443\u0441\u043f\u0435\u0448\u043d\u043e":"\u043e\u0448\u0438\u0431\u043a\u0430"}),Object(m.jsx)("h3",{className:"popup__msg",children:a.msg})]})})}function I(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(u.a)(s,2),i=o[0],d=o[1],j=Object(a.useState)(!1),_=Object(u.a)(j,2),v=_[0],S=_[1],y=Object(a.useState)({name:"",link:""}),E=Object(u.a)(y,2),L=E[0],D=E[1],I=Object(a.useState)({}),U=Object(u.a)(I,2),q=U[0],J=U[1],F=Object(a.useState)([]),R=Object(u.a)(F,2),z=R[0],B=R[1],G=Object(a.useState)(!1),H=Object(u.a)(G,2),M=H[0],V=H[1],Y=Object(a.useState)(!1),K=Object(u.a)(Y,2),Q=K[0],W=K[1],X=Object(a.useState)({res:!1,msg:""}),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),ne=Object(u.a)(te,2),ae=ne[0],ce=ne[1],se=Object(l.g)(),oe=Object(a.useState)(!1),ie=Object(u.a)(oe,2),re=ie[0],ue=ie[1];function le(e,t){W(!0),ee({res:e,msg:t})}function pe(){c(!1),d(!1),S(!1),W(!1),D({name:"",link:""})}Object(a.useEffect)((function(){M&&h.getServerData().then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];J(n),B(a)})).catch((function(e){return console.log(e)}))}),[M]);var de=Object(a.useCallback)((function(){var e,t=localStorage.getItem("jwt");t&&((e=t,fetch("".concat(b,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){try{if(200===e.status)return e.json();if(400===e.status)throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");if(401===e.status)throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}catch(t){return console.log(t),t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))).then((function(e){e&&(V(!0),ce(e.data.email),se.push("/"))})).catch((function(e){console.log(e)})),se.push("/sign-in"))}),[se]);return Object(a.useEffect)((function(){de()}),[de]),Object(m.jsx)(p.Provider,{value:q,children:Object(m.jsxs)("div",{className:"page",children:[Object(m.jsx)(O,{email:ae,onSignOut:function(){localStorage.removeItem("jwt"),se.push("/"),ce(""),V(!1)}}),Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{path:"/sign-in",children:Object(m.jsx)(T,{onLogin:function(e,t){(function(e,t){return fetch("".concat(b,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){try{if(e.ok)return e.json();if(400===e.status)throw new Error("\u041d\u0435 \u0432\u0435\u0440\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new Error("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d ")}catch(t){return console.log(t),t}})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return Promise.reject(e.message)}))})(e,t).then((function(t){t.token&&(ce(e),V(!0),se.push("/"))})).catch((function(e){console.log(e.message)}))}})}),Object(m.jsx)(l.b,{path:"/sign-up",children:Object(m.jsx)(P,{onRegister:function(e,t){(function(e,t){return fetch("".concat(b,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){try{if(400!==e.status)return e.json()}catch(t){throw new Error("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")}})).then((function(e){return e})).catch((function(e){return console.log(e+{message:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"})}))})(e,t).then((function(e){e?(le(!0,"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),se.push("/sign-in")):le(!1,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")})).catch((function(e){console.log(e.message)}))}})}),Object(m.jsx)(w,{path:"/",loggedIn:M,component:f,onEditProfile:function(){c(!0)},onAddPlace:function(){d(!0)},onEditAvatar:function(){S(!0)},onCardClick:function(e){D(e)},cards:z,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===q._id}));h.likeCard(e._id,!t).then((function(t){B((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){h.deleteCard(e._id).then((function(){B((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))}}),Object(m.jsx)(l.b,{path:"/",children:M?Object(m.jsx)(l.a,{to:"/"}):Object(m.jsx)(l.a,{to:"/sign-in"})})]}),Object(m.jsx)(A,{isOpen:Q,onClose:pe,isSuccess:$}),Object(m.jsx)(k,{isOpen:n,onClose:pe,onUpdateProfile:function(e){ue(!0),h.setUserInfo(e).then((function(e){J(e),pe()})).catch((function(e){console.log(e)})).finally((function(){return ue(!1)}))},isLoading:re}),Object(m.jsx)(N,{isOpen:i,onClose:pe,onAddPlace:function(e){ue(!0),h.addCard(e).then((function(e){B([e].concat(Object(r.a)(z))),pe()})).catch((function(e){console.log(e)})).finally((function(){return ue(!1)}))},isLoading:re}),Object(m.jsx)(C,{isOpen:v,onClose:pe,onUpdateAvatar:function(e){ue(!0),h.updateAvatar(e).then((function(e){J(e),pe()})).catch((function(e){console.log(e)})).finally((function(){return ue(!1)}))},isLoading:re}),Object(m.jsx)(x,{card:L,isClose:pe}),Object(m.jsx)(g,{})]})})}n(35);o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(I,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.02186465.chunk.js.map