(this["webpackJsonptodo-1"]=this["webpackJsonptodo-1"]||[]).push([[0],{15:function(t,n,e){"use strict";e.r(n);var o=e(1),i=e(9),c=e.n(i),r=e(3),a=e(2),l=e(4),s=e(5),u=e(7),d=e(6),j=e(0),h=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"To Do List"})})},f=function(t){var n=t.id,e=t.label,o=t.attention,i=t.done,c=t.onDone,r=t.onDel,a=t.onAttention;return Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:function(){r(n)},children:" X "}),"\xa0",Object(j.jsx)("button",{onClick:function(){a(n)},disabled:i,children:" ! "}),"\xa0",Object(j.jsxs)("span",{onClick:function(){c(n)},children:[e,i?" __DONE__":null,!i&&o?" __attention!__":null]})]})},b=function(t){var n=t.list,e=t.onDel,o=t.onDone,i=t.onAttention,c=n.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)(f,{id:t.id,label:t.label,onDel:e,attention:t.attention,onAttention:i,done:t.done,onDone:o})},t.id)}));return Object(j.jsx)("ul",{children:c})},O=function(t){Object(u.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(l.a)(this,e);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=n.call.apply(n,[this].concat(i))).state={text:""},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this,n=this.props.onAdd;return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(t.state.text),t.setState({text:""})},children:[Object(j.jsx)("input",{type:"text",onChange:function(n){return t.setState((function(t){t.text;return{text:n.target.value}}))},value:this.state.text}),Object(j.jsx)("button",{children:"Add"})]})}}]),e}(o.Component),x=function(t){var n=t.onSearch,e=t.search;return Object(j.jsx)("div",{children:Object(j.jsxs)("h2",{children:["SearchPanel:",Object(j.jsx)("input",{type:"text",onChange:function(t){n(t.target.value)},value:e})]})})},p=function(t){var n=t.list,e=t.onFilter,o=t.filter,i=n.filter((function(t){return t.done})).length,c=n.filter((function(t){return t.attention})).length,r=n.length,a=" --",l="-- ";return Object(j.jsxs)("h2",{children:["Info:",Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{onClick:function(){return e("done")},children:["done"===o?a:null," Done: ",i," ","done"===o?l:null]})," |",Object(j.jsxs)("span",{onClick:function(){return e("attention")},children:["attention"===o?a:null," Attention: ",c," ","attention"===o?l:null]})," |",Object(j.jsxs)("span",{onClick:function(){return e("all")},children:["all"===o?a:null," All: ",r," ","all"===o?l:null]})]})]})},v=function(t){Object(u.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(l.a)(this,e);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=n.call.apply(n,[this].concat(i))).state={todoList:[{id:1,label:"learn React",attention:!1,done:!1},{id:2,label:"have a good time",attention:!1,done:!1}],search:"",filter:"all"},t.onAdd=function(n){t.setState((function(t){var e=t.todoList,o={id:Math.max.apply(Math,Object(a.a)(e.map((function(t){return t.id}))).concat([1]))+1,label:""===n?"Empty":n,attention:!1,done:!1};return{todoList:[].concat(Object(a.a)(e),[o])}}))},t.onDel=function(n){t.setState((function(t){var e=t.todoList,o=e.findIndex((function(t){return t.id===n}));return{todoList:[].concat(Object(a.a)(e.slice(0,o)),Object(a.a)(e.slice(o+1)))}}))},t.onAttention=function(n){t.setState((function(t){var e=t.todoList,o=e.findIndex((function(t){return t.id===n})),i=Object(r.a)(Object(r.a)({},e[o]),{},{attention:!e[o].attention});return{todoList:[].concat(Object(a.a)(e.slice(0,o)),[i],Object(a.a)(e.slice(o+1)))}}))},t.onDone=function(n){t.setState((function(t){var e=t.todoList,o=e.findIndex((function(t){return t.id===n})),i=Object(r.a)(Object(r.a)({},e[o]),{},{done:!e[o].done});return{todoList:[].concat(Object(a.a)(e.slice(0,o)),[i],Object(a.a)(e.slice(o+1)))}}))},t.search=function(t,n){return""===n?t:t.filter((function(t){return-1!==t.label.toLocaleLowerCase().indexOf(n)}))},t.onSearch=function(n){t.setState({search:n.toLocaleLowerCase()})},t.filter=function(t,n){switch(n){case"done":return t.filter((function(t){return t.done}));case"attention":return t.filter((function(t){return t.attention}));case"all":default:return t}},t.onFilter=function(n){t.setState({filter:n})},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this.search(this.filter(this.state.todoList,this.state.filter),this.state.search);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(x,{onSearch:this.onSearch,search:this.state.search}),Object(j.jsx)(p,{list:t,onFilter:this.onFilter,filter:this.state.filter}),Object(j.jsx)(b,{list:t,onDel:this.onDel,onAttention:this.onAttention,onDone:this.onDone}),Object(j.jsx)(O,{onAdd:this.onAdd})]})}}]),e}(o.Component);c.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b2da7b4f.chunk.js.map