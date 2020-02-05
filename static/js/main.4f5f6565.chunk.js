(this.webpackJsonpsoftindex=this.webpackJsonpsoftindex||[]).push([[0],{105:function(e,a,t){e.exports=t(185)},110:function(e,a,t){},182:function(e,a,t){},185:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),o=(t(110),t(37)),i=t(23),s=t(48),d=t(49),u=t(55),m=t(56),h=t(12),p=t(222),g=t(225),b=t(242),f=t(235),E=t(221),v=t(29),O=t.n(v),y="This field is required";function C(e){var a={};return O.a.isEmpty(e.firstName)&&(a.firstName=y),O.a.isEmpty(e.lastName)&&(a.lastName=y),O.a.isMobilePhone(e.phone)||(a.phone="Please, write correct phone number"),O.a.isEmpty(e.phone)&&(a.phone=y),O.a.isInt(e.age)||(a.age="This should be integer number"),e.age<=0&&(a.age="This can`t be negative value"),O.a.isEmpty(e.age)&&(a.age=y),"string"===typeof e.gender&&O.a.isEmpty(e.gender)&&(a.gender=y),a}var j=t(220),N=t(216),k=t(241),w=function(e){var a=e.error,t=e.label,n=e.value,l=e.name,c=e.onChange,o=e.type,i=void 0===o?"text":o;return r.a.createElement(N.a,{error:Boolean(a)},r.a.createElement(k.a,{htmlFor:"component-error"},t),r.a.createElement(j.a,{value:n,onChange:c,name:l,type:i}),r.a.createElement(E.a,null,a||" "))};var S=t(40),P=t(86),x=t.n(P),D=t(5),R=t(223),_={firstName:"",lastName:"",phone:"",gender:"",age:"",errors:{}},A=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).handleChange=function(e){var a;t.setState((a={},Object(h.a)(a,e.target.name,e.target.value),Object(h.a)(a,"errors",Object(m.a)({},t.state.errors,Object(h.a)({},e.target.name,""))),a))},t.handleSubmit=function(){!function(e){for(var a in e)if(e.hasOwnProperty(a))return!1;return!0}(C(t.state))?t.setState({errors:C(t.state)}):(t.props.addRecord({id:x()(),firstName:t.state.firstName,lastName:t.state.lastName,phone:t.state.phone,gender:t.state.gender,age:t.state.age}),t.handleClear())},t.handleClear=function(){t.setState(Object(m.a)({},_))},t.state=Object(m.a)({},_),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.firstName,n=a.lastName,l=a.phone,c=a.gender,o=a.age,i=a.errors,s=this.props.classes;return r.a.createElement("form",{noValidate:!0,onSubmit:function(a){a.preventDefault(),e.handleSubmit()},autoComplete:"off"},r.a.createElement(p.a,{elevation:0,className:s.paperContainer},r.a.createElement(R.a,{variant:"h3"},"Add record"),r.a.createElement(w,{error:i.firstName,label:"First Name",value:t,name:"firstName",onChange:this.handleChange}),r.a.createElement(w,{error:i.lastName,label:"Last Name",value:n,name:"lastName",onChange:this.handleChange}),r.a.createElement(w,{error:i.phone,label:"Phone",value:l,name:"phone",onChange:this.handleChange}),r.a.createElement(N.a,{error:Boolean(i.gender)},r.a.createElement(k.a,null,"Gender"),r.a.createElement(f.a,{value:c,name:"gender",onChange:this.handleChange,className:s.selectEmpty},r.a.createElement(b.a,{value:"",disabled:!0},"Gender"),r.a.createElement(b.a,{value:!0},"Male"),r.a.createElement(b.a,{value:!1},"Female")),r.a.createElement(E.a,null,i.gender?i.gender:" ")),r.a.createElement(w,{error:i.age,label:"Age",value:o,name:"age",type:"number",onChange:this.handleChange}),r.a.createElement("div",{className:"buttons-container"},r.a.createElement(g.a,{variant:"outlined",color:"primary",onClick:this.handleClear},"Clear"),r.a.createElement(g.a,{variant:"contained",color:"primary",className:s.button,onClick:this.handleSubmit},"Add"))))}}]),a}(r.a.Component),T=Object(S.b)(null,{addRecord:function(e){return function(a){a({type:"ADD_RECORD",payload:e})}}})(Object(D.a)((function(e){return{paperContainer:Object(h.a)({width:"30vw",display:"flex",flexDirection:"column",margin:"0 auto",padding:"20px"},e.breakpoints.down("sm"),{width:"90vw"}),button:{marginLeft:"10px"},selectEmpty:{marginTop:"16px"}}}))(A)),B=t(20),L=t(226),F=t(233),I=t(234),M=t(231),q=t(232),G=t(237),W=t(230),H=t(236);function J(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var V=t(9),X=t(227),z=t(228),U=t(239),$=t(88),K=t.n($),Q=Object(L.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(V.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),Y=function(e){var a=Q(),t=e.numSelected,n=e.onDelete;return r.a.createElement(X.a,null,t?r.a.createElement(R.a,{className:a.title,color:"inherit",variant:"subtitle1"},t," selected"):"Records",Boolean(t)&&r.a.createElement(U.a,{title:"Delete"},r.a.createElement(z.a,{onClick:n,"aria-label":"delete"},r.a.createElement(K.a,null))))},Z=t(229),ee=t(240),ae=[{id:"firstName",numeric:!1,disablePadding:!0,label:"First Name"},{id:"lastName",numeric:!1,disablePadding:!1,label:"Last Name"},{id:"phone",numeric:!1,disablePadding:!1,label:"Phone"},{id:"gender",numeric:!1,disablePadding:!1,label:"Gender"},{id:"age",numeric:!0,disablePadding:!1,label:"Age"}],te=function(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,l=e.orderBy,c=e.numSelected,o=e.rowCount,i=e.onRequestSort;return r.a.createElement(Z.a,null,r.a.createElement(W.a,null,r.a.createElement(M.a,{padding:"checkbox"},r.a.createElement(H.a,{indeterminate:c>0&&c<o,checked:o>0&&c===o,onChange:t,inputProps:{"aria-label":"select all desserts"}})),ae.map((function(e){return r.a.createElement(M.a,{key:e.id,padding:e.disablePadding?"none":"default",sortDirection:l===e.id&&n},r.a.createElement(ee.a,{active:l===e.id,direction:l===e.id?n:"asc",onClick:(t=e.id,function(e){i(e,t)})},e.label,l===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))},ne=Object(L.a)((function(e){return{root:{width:"100%"},paper:{width:"90%",margin:"0 auto",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),re=Object(S.b)((function(e){return{records:e.records}}),{deleteRecords:function(e){return function(a){a({type:"DELETE_RECORDS",payload:e})}}})((function(e){var a=e.records,t=e.deleteRecords,l=ne(),c=Object(n.useState)("asc"),o=Object(B.a)(c,2),i=o[0],s=o[1],d=Object(n.useState)("calories"),u=Object(B.a)(d,2),m=u[0],h=u[1],g=Object(n.useState)([]),b=Object(B.a)(g,2),f=b[0],E=b[1],v=Object(n.useState)(0),O=Object(B.a)(v,2),y=O[0],C=O[1],j=Object(n.useState)(5),N=Object(B.a)(j,2),k=N[0],w=N[1],S=k-Math.min(k,a.length-y*k);return r.a.createElement("div",{className:l.root},r.a.createElement(p.a,{className:l.paper},r.a.createElement(Y,{numSelected:f.length,onDelete:function(){t(f),E([])}}),r.a.createElement(q.a,null,r.a.createElement(F.a,{className:l.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table"},r.a.createElement(te,{classes:l,numSelected:f.length,order:i,orderBy:m,onSelectAllClick:function(e){if(e.target.checked){var t=a.map((function(e){return e.id}));E(t)}else E([])},onRequestSort:function(e,a){s(m===a&&"asc"===i?"desc":"asc"),h(a)},rowCount:a.length}),r.a.createElement(I.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(a,function(e,a){return"desc"===e?function(e,t){return J(e,t,a)}:function(e,t){return-J(e,t,a)}}(i,m)).slice(y*k,y*k+k).map((function(e,a){var t,n=(t=e.id,-1!==f.indexOf(t)),l="enhanced-table-checkbox-".concat(a);return r.a.createElement(W.a,{hover:!0,onClick:function(a){return function(e,a){var t=f.indexOf(a),n=[];-1===t?n=n.concat(f,a):0===t?n=n.concat(f.slice(1)):t===f.length-1?n=n.concat(f.slice(0,-1)):t>0&&(n=n.concat(f.slice(0,t),f.slice(t+1))),E(n)}(0,e.id)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.id,selected:n},r.a.createElement(M.a,{padding:"checkbox"},r.a.createElement(H.a,{checked:n,inputProps:{"aria-labelledby":l}})),r.a.createElement(M.a,{component:"th",id:l,scope:"row",padding:"none"},e.firstName),r.a.createElement(M.a,null,e.lastName),r.a.createElement(M.a,null,e.phone),r.a.createElement(M.a,null,e.gender?"Male":"Female"),r.a.createElement(M.a,null,e.age))})),S>0&&r.a.createElement(W.a,{style:{height:53*S}},r.a.createElement(M.a,{colSpan:6}))))),r.a.createElement(G.a,{rowsPerPageOptions:[5,10,25],component:"div",count:a.length,rowsPerPage:k,page:y,onChangePage:function(e,a){C(a)},onChangeRowsPerPage:function(e){w(parseInt(e.target.value,10)),C(0)}})))})),le=(t(182),t(19)),ce=t(63),oe=t(21),ie=[],se=Object(le.c)({records:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_RECORD":return[].concat(Object(oe.a)(e),[a.payload]);case"DELETE_RECORDS":return Object(oe.a)(e.filter((function(e){return!a.payload.includes(e.id)})));default:return e}}}),de=t(89),ue=t.n(de),me=t(90),he={key:"root",storage:ue.a},pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,ge=Object(ce.a)(he,se),be=Object(le.e)(ge,{},pe(Object(le.a)(me.a))),fe={store:be,persistor:Object(ce.b)(be)},Ee=t(91),ve=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(S.a,{store:fe.store},r.a.createElement(Ee.a,{loading:null,persistor:fe.persistor},r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(re,null))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[105,1,2]]]);
//# sourceMappingURL=main.4f5f6565.chunk.js.map