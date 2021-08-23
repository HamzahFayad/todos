(function(t){function e(e){for(var o,s,l=e[0],a=e[1],d=e[2],u=0,p=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var a=n[l];0!==i[a]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a4c":function(t,e,n){},4820:function(t,e,n){"use strict";n("2a4c")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[t._m(0),n("div",{staticClass:"todo"},[n("TodoList")],1)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[n("div",{staticClass:"xdx"},[n("h1",[t._v("Todo")])])])}],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"todolist"}},[n("div",{staticClass:"todo-add"},[n("div",{staticClass:"add-input"},[n("span"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{type:"text",placeholder:"Create a new todo..."},domProps:{value:t.inputText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo()},input:function(e){e.target.composing||(t.inputText=e.target.value)}}})])]),n("div",{staticClass:"todos"},[n("draggable",{attrs:{group:"todos"},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.todolist,callback:function(e){t.todolist=e},expression:"todolist"}},t._l(t.todolist,(function(e){return n("div",{key:e.id+"-"+e.name,staticClass:"list"},[n("input",{staticClass:"checkComplete",attrs:{type:"checkbox"},domProps:{checked:e.done},on:{change:function(t){e.done=!e.done}}}),n("p",{class:{completed:e.done}},[t._v(" "+t._s(e.name)+" ")]),n("div",{staticClass:"delete"},[n("DeleteTodo",{attrs:{todoItem:e},on:{delete:t.onDelete}})],1)])})),0),n("div",{staticClass:"subInfos"},[n("p",{staticStyle:{"padding-right":"25px"}},[t._v(" "+t._s(t.todosLeft)+" item"),n("span",{directives:[{name:"show",rawName:"v-show",value:1!==t.todosLeft,expression:"todosLeft !== 1"}]},[t._v("s")]),t._v(" left ")]),n("p",{staticStyle:{"padding-left":"25px",cursor:"pointer"},on:{click:function(e){return t.clearCompleted()}}},[t._v(" Clear completed ")])])],1),n("p",{staticClass:"info"},[t._v("Drag and drop to reorder list")])])},d=[],c=(n("4de4"),n("a434"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deleteIcon"},[n("div",{staticClass:"delete-icon",on:{click:t.deleteTodo}})])}),u=[],p={data:function(){return{}},props:["todoItem"],methods:{deleteTodo:function(){this.$emit("delete",this.todoItem)}}},f=p,v=(n("f775"),n("2877")),h=Object(v["a"])(f,c,u,!1,null,null,null),m=h.exports,b=n("b76a"),g=n.n(b),x={data:function(){return{inputText:"",todolist:[{id:1,name:"Homework",done:!1},{id:2,name:"Training",done:!0}]}},components:{DeleteTodo:m,draggable:g.a},computed:{todosLeft:function(){return this.todolist.filter((function(t){return!1===t.done})).length}},methods:{addTodo:function(){this.todolist.push({id:this.todolist.length+1,name:this.inputText,done:!1}),this.inputText=""},onDelete:function(t){this.todolist.splice(this.todolist.indexOf(t),1)},clearCompleted:function(){var t=this,e=this.todolist.filter((function(t){return!0===t.done}));e.forEach((function(e){var n=t.todolist.indexOf(e);t.todolist.splice(n,1)}))},stillActive:function(){var t=this.todolist.filter((function(t){return!1===t.done}));this.todolist=t},completed:function(){var t=this.todolist.filter((function(t){return!0===t.done}));this.todolist=t},all:function(){this.todolist=this.todolist}}},_=x,y=(n("71e8"),Object(v["a"])(_,a,d,!1,null,null,null)),T=y.exports,C={name:"Header",components:{TodoList:T}},O=C,w=(n("4820"),Object(v["a"])(O,s,l,!1,null,"464cc078",null)),k=w.exports,j={name:"App",components:{Header:k}},P=j,E=(n("5c0b"),Object(v["a"])(P,i,r,!1,null,null,null)),S=E.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"71e8":function(t,e,n){"use strict";n("bb91")},"9c0c":function(t,e,n){},bb91:function(t,e,n){},d8e3:function(t,e,n){},f775:function(t,e,n){"use strict";n("d8e3")}});
//# sourceMappingURL=app.e46316a1.js.map