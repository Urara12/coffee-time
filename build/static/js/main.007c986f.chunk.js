(this["webpackJsonpcoffee-time"]=this["webpackJsonpcoffee-time"]||[]).push([[0],{33:function(e,t,n){},74:function(e,t,n){e.exports=n(85)},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),i=n.n(c),l=n(19),s=n(15),u=n(16),o=n(20),d=n(17),m=n(21),p=n(126),f=n(59),h=n(47),E=n(39),b=n(60);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O={currentView:"LIST",checkedUnRead:[],unReadUrlLists:[{index:0,url:"https://www.starbucks.co.jp/",name:"HOMEPAGE - STARBUCK JAPAN",date:1573550388676,checked:!0},{index:1,url:"https://stories.starbucks.com/",name:"HOMEPAGE - STARBUCK US",date:1573550405225,checked:!1},{index:2,url:"https://stories.starbucks.com/stories/2019/make-merry-at-starbucks-this-holiday/",name:"Make merry at Starbucks this holiday season",date:1573550405225,checked:!1}],readUrlLists:[{url:"https://martinfowler.com/bliki/ContinuousDelivery.html",name:"ContinuousDelivery",date:1573550388676,readDate:1573550405225},{url:"https://will.koffel.org/post/2014/12-factor-apps-in-plain-english/",name:"12 FACTOR APPS IN PLAIN ENGLISH",date:1573550388676,readDate:1573550405225},{url:"https://itnext.io/how-existing-redux-patterns-compare-to-the-new-redux-hooks-b56134c650d2",name:"How Redux Connect compares to the new Redux Hooks.",date:1573550388676,readDate:1573550405225}]},U=Object(E.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_VIEW":return Object.assign({},e,{currentView:t.newView});case"ADD_UNREAD_URL_LISTS":return 0===e.unReadUrlLists.length&&(e.unReadUrlLists=O.unReadUrlLists),Object.assign({},e,{unReadUrlLists:[].concat(Object(h.a)(e.unReadUrlLists),[{index:e.unReadUrlLists[e.unReadUrlLists.length-1].index+1,url:t.unReadList,name:t.name,date:t.date,checked:t.checked}])});case"DELETE_UNREAD_URL_LISTS":return Object.assign({},e,{unReadUrlLists:t.nonDeleteUnReadListArr});case"TOGGLE_UNREAD_CHECK_BOX":return Object.assign({},e,{unReadUrlLists:[].concat(Object(h.a)(e.unReadUrlLists.slice(0,t.index)),[L({},e.unReadUrlLists[t.index],{checked:!e.unReadUrlLists[t.index].checked})],Object(h.a)(e.unReadUrlLists.slice(t.index+1)))});case"ADD_READ_URL_LISTS":var n=e.readUrlLists.concat();return t.newReadList.forEach((function(e){n.push({url:e.url,name:e.name,date:e.date,readDate:t.readDate})})),Object.assign({},e,{readUrlLists:n});case"GET_UNREAD_URL_LISTS":case"GET_READ_URL_LISTS":default:return e}}),Object(E.a)(b.a)),j=n(118),g=n(122),y=n(40),D=n(135),k=n(123),w=(n(33),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).changeViewList=function(){n.props.setCurrentView("LIST")},n.changeViewRead=function(){n.props.setCurrentView("READ")},n.changeViewHistory=function(){n.props.setCurrentView("HISTORY")},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{position:"static"},r.a.createElement(g.a,null,r.a.createElement(y.a,{variant:"h6"},"Coffee Time"),r.a.createElement(D.a,null,r.a.createElement(k.a,{label:"LIST",onClick:this.changeViewList}),r.a.createElement(k.a,{label:"READ",onClick:this.changeViewRead}),r.a.createElement(k.a,{label:"HISTORY",onClick:this.changeViewHistory}))))}}]),t}(a.Component)),v=Object(l.b)(null,(function(e){return{setCurrentView:function(t){return e(function(e){return{type:"CURRENT_VIEW",newView:e}}(t))}}}))(w),A=n(125),C=n(136),_=n(124),S=n(127),T=n(132),x=n(131),N=n(128),V=n(129),I=n(130),P=n(134),H=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).addURL=function(){var e=document.getElementById("standard-basic").value;""!==e&&n.props.setUnReadUrlLists(e)},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"inputArea"},r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement("div",null,r.a.createElement(P.a,{id:"standard-basic",className:"inputArea",label:"Please input URL",margin:"normal"}),r.a.createElement(A.a,{variant:"contained",color:"primary",onClick:this.addURL},"ADD"))))}}]),t}(a.Component),B=Object(l.b)(null,(function(e){return{setUnReadUrlLists:function(t){return e({type:"ADD_UNREAD_URL_LISTS",unReadList:t,name:"DEFAULT NAME",date:Date.now(),checked:!1})}}}))(H),G=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).checkBtn=function(e){return function(t){var a;n.props.unReadUrlLists.forEach((function(t,n){t.index===e&&(a=n)})),n.props.changeUnReadUrlCheckBox(a)}},n.changeRead=function(){var e=n.props.unReadUrlLists,t=e.filter((function(e){return!e.checked}));t.length!==e.length&&n.props.deleteUnReadUrlLists(t);var a=e.filter((function(e){return e.checked}));n.props.addReadUrlLists(a)},n.changeData=function(e){return new Date(e).toLocaleDateString()},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.unReadUrlLists,n=function(e){return e.preventDefault()};return r.a.createElement(p.a,null,r.a.createElement(B,null),r.a.createElement(A.a,{variant:"contained",color:"primary",onClick:this.changeRead,className:"changeRead"},"CHANGE TO READ"),r.a.createElement(_.a,null,console.log("all list",t),t.map((function(t,a){return r.a.createElement(S.a,{key:a},r.a.createElement(N.a,null,r.a.createElement(V.a,{alt:"Avatar",src:"../images/image.png"})),r.a.createElement(I.a,{href:t.url,onClick:n},t.url),r.a.createElement(x.a,{className:"date",primary:e.changeData(t.date)}),r.a.createElement(T.a,null,r.a.createElement(C.a,{checked:t.checked,onChange:e.checkBtn(t.index),color:"primary"})))}))))}}]),t}(a.Component),M=Object(l.b)((function(e){return{unReadUrlLists:e.unReadUrlLists}}),(function(e){return{changeUnReadUrlCheckBox:function(t){return e(function(e){return{type:"TOGGLE_UNREAD_CHECK_BOX",index:e}}(t))},deleteUnReadUrlLists:function(t){return e({type:"DELETE_UNREAD_URL_LISTS",nonDeleteUnReadListArr:t})},addReadUrlLists:function(t){return e(function(e){return{type:"ADD_READ_URL_LISTS",newReadList:e,readDate:Date.now()}}(t))}}}))(G),K=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.readUrlLists,t=function(e){return e.preventDefault()};return r.a.createElement(p.a,null,r.a.createElement("h1",null,"Hello, it's coffee time!"),r.a.createElement("div",{className:"urllistArea"},console.log("all READ list",e),e.map((function(e,n){return r.a.createElement(S.a,{key:n},r.a.createElement(N.a,null,r.a.createElement(V.a,{alt:"Avatar",src:"../images/image.png"})),r.a.createElement(I.a,{href:e.url,onClick:t},e.url),r.a.createElement(x.a,{className:"date",primary:e.date}))}))))}}]),t}(a.Component),J=Object(l.b)((function(e){return{readUrlLists:e.readUrlLists}}))(K),F=(n(84),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"chartArea"}))}}]),t}(a.Component)),W=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={currentView:"List",urlLists:[]},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{id:"app"},r.a.createElement(v,null),"LIST"===e.props.currentView?r.a.createElement(M,null):"READ"===e.props.currentView?r.a.createElement(J,null):r.a.createElement(F,null))}}]),t}(a.Component),X=Object(l.b)((function(e){return{currentView:e.currentView}}))(W),Y=n(61),q=n(133),z=Object(Y.a)({palette:{primary:{light:"#757c338364e8",main:"#00653e",dark:"#00462b",contrastText:"#fff"},secondary:{light:"#ff7977625861",main:"#563b2f",dark:"#3c2920",contrastText:"#fff"}}});i.a.render(r.a.createElement(l.a,{store:U},r.a.createElement(q.a,{theme:z},r.a.createElement(X,null))),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.007c986f.chunk.js.map