(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){e.exports=a(52)},24:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(11),o=a.n(s),c=(a(24),a(3)),r=a(2),i=a(12),m=a(13),d=a(17),u=a(14),p=a(18),b=a(15),g=a.n(b),h=a(16),E=a.n(h),v=(a(46),a(48),function(e){var t=null;return e.employee&&(t=l.a.createElement("div",{className:"check"})),l.a.createElement("div",{className:"person",id:e.id},l.a.createElement("div",{className:"cell name-job"},l.a.createElement("div",{className:"name"},e.name),l.a.createElement("div",{className:"job"},e.job)),l.a.createElement("div",{className:"cell age"},e.age),l.a.createElement("div",{className:"cell nickname"},e.nick),l.a.createElement("div",{className:"cell employee"},l.a.createElement("div",{className:"checkbox",onClick:e.toggleEmployee},t)),l.a.createElement("div",{className:"cell delete",onClick:e.delete},"Delete"))}),f=(a(50),function(e){var t=null,a="btn ok";return e.submitDisabled&&(a+=" disabled"),e.employee&&(t=l.a.createElement("div",{className:"check"})),l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"input name"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Name (At least 3 characters)",onChange:e.changed})),l.a.createElement("div",{className:"input job-title"},l.a.createElement("label",null,"Job title"),l.a.createElement("input",{type:"text",name:"job",placeholder:"Job",onChange:e.changed})),l.a.createElement("div",{className:"input age"},l.a.createElement("label",null,"Age"),l.a.createElement("input",{type:"text",name:"age",placeholder:"Age",onChange:e.changed})),l.a.createElement("div",{className:"input nickname"},l.a.createElement("label",null,"Nickname"),l.a.createElement("input",{type:"text",name:"nick",placeholder:"Nickname",onChange:e.changed})),l.a.createElement("div",{className:"input employee"},l.a.createElement("label",null,"Employee"),l.a.createElement("div",{className:"checkbox",onClick:e.check},t)),l.a.createElement("div",{className:"divider"}),l.a.createElement("div",{className:"button-bar"},l.a.createElement("button",{className:a,onClick:e.submit},"OK"),l.a.createElement("button",{className:"btn cancel",onClick:e.close},"Cancel"))))}),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={timeout:null,updated:null,displayModal:!1,dataDump:"",modalInputs:{name:"",job:"",age:"",nick:"",employee:!1},persons:[],order:"ascending",initialized:!1,submitDisabled:!0,arrow:String.fromCharCode(8593)},a.toggleEmployeeHandler=function(e){var t=Object(r.a)(a.state.persons);t[e].employee=!t[e].employee,a.setState({persons:t},function(){a.dataDumpHandler()})},a.deletePersonHandler=function(e){var t=Object(r.a)(a.state.persons);t.splice(e,1),a.setState({persons:t},function(){a.dataDumpHandler()})},a.toggleModalHandler=function(){var e=a.state.displayModal;a.setState({displayModal:!e,submitDisabled:!0})},a.inputChangeHandler=function(e){var t=Object(c.a)({},a.state.modalInputs);t[e.target.name]=e.target.value,a.setState({modalInputs:t},function(){a.state.modalInputs.name.length>=3?a.setState({submitDisabled:!1}):a.setState({submitDisabled:!0})})},a.toggleModalEmployeeHandler=function(){var e=Object(c.a)({},a.state.modalInputs);e.employee=!e.employee,a.setState({modalInputs:e})},a.submitPerson=function(){if(!a.state.submitDisabled){var e=Object(c.a)({},a.state.modalInputs),t=Object(r.a)(a.state.persons);t.push(e),a.setState({modalInputs:{name:"",job:"",age:"",nick:"",employee:!1},persons:t,submitDisabled:!0},function(){a.toggleModalHandler(),a.sortByName()})}},a.dataDumpHandler=function(){var e="";a.state.persons.forEach(function(t,n){e+='{\n  "name": "'.concat(t.name,'",\n  "job": "').concat(t.job,'",\n  "age": "').concat(t.age,'",\n  "nick": "').concat(t.nick,'",\n  "employee": ').concat(t.employee,"\n}").concat(n===a.state.persons.length-1?"":",","\n")}),a.setState({dataDump:e}),a.updated()},a.updated=function(){a.setState({updated:"updated"}),a.state.timeout&&(clearTimeout(a.state.timeout),a.setState({timeout:null})),a.setState({timeout:setTimeout(function(){a.setState({updated:null})},100)})},a.sort=function(){"ascending"===a.state.order?a.setState({order:"descending"},function(){a.sortByName(),a.setState({arrow:String.fromCharCode(8595)})}):a.setState({order:"ascending"},function(){a.sortByName(),a.setState({arrow:String.fromCharCode(8593)})})},a.sortByName=function(){var e;"ascending"===a.state.order?e=a.bubbleSort(a.state.persons,"name"):"descending"===a.state.order&&(e=a.bubbleSort(a.state.persons,"name").reverse()),a.setState({persons:e}),a.state.initialized&&a.dataDumpHandler()},a.bubbleSort=function(e,t){if(e.length<2)throw new Error("Array is too short for sorting!");for(var n=e.length-2;n>=0;){for(var l=0;l<=n;l++)if(a.isSwapNecessary(e[l][t],e[l+1][t])){var s=[e[l+1],e[l]];e[l]=s[0],e[l+1]=s[1]}n--}return e},a.isSwapNecessary=function(e,t){for(var a=e.toLowerCase(),n=t.toLowerCase(),l=Math.min(a.length,n.length),s=0;s<l;s++){if(a[s]<n[s])return!1;if(a[s]!==n[s])return!0;if(s===l-1&&a.length>n.length)return!0}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("persons.json").then(function(t){e.setState({persons:t.data},function(){e.sortByName(),e.setState({initialized:!0})})})}},{key:"render",value:function(){var e=this,t=null;return this.state.displayModal&&(t=l.a.createElement(f,{employee:this.state.modalInputs.employee,check:this.toggleModalEmployeeHandler,changed:function(t){return e.inputChangeHandler(t)},close:this.toggleModalHandler,submit:this.submitPerson,submitDisabled:this.state.submitDisabled})),l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("img",{src:E.a,className:"logo",alt:"logo"}),l.a.createElement("span",null,"React")),l.a.createElement("main",null,l.a.createElement("div",{className:"wrapper"},l.a.createElement("button",{className:"btn-add",onClick:this.toggleModalHandler},"Add"),l.a.createElement("div",{className:"list-header"},l.a.createElement("div",{className:"cell name-job",onClick:this.sort},"Name / Job",l.a.createElement("div",{className:"arrow"},this.state.arrow)),l.a.createElement("div",{className:"cell age"},"Age"),l.a.createElement("div",{className:"cell nickname"},"Nickname"),l.a.createElement("div",{className:"cell employee"},"Employee"),l.a.createElement("div",{className:"cell delete"})),l.a.createElement("div",{className:"persons-list"},this.state.persons.map(function(t,a){return l.a.createElement(v,{id:a,name:t.name,job:t.job,age:t.age,nick:t.nick,employee:t.employee,toggleEmployee:e.toggleEmployeeHandler.bind(e,a,t),delete:e.deletePersonHandler.bind(e,a,t),key:Math.random().toFixed(4)+t.name})})),l.a.createElement("p",{className:"data-dump"},"Data dump:"),l.a.createElement("textarea",{className:this.state.updated,value:this.state.dataDump,onChange:function(){}})),t))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.7418d6da.chunk.js.map