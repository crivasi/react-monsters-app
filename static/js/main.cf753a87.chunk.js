(window["webpackJsonpmonsters-app"]=window["webpackJsonpmonsters-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(14),n(3)),l=n(4),i=n(6),u=n(5),m=n(7),h=(n(15),function(e){var t=e.monster,n=t.name,a=t.id,o=t.email;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(a,"?set=set2&size=180x180")}),r.a.createElement("h2",null," ",n," "),r.a.createElement("p",null," ",o," "))}),d=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{type:"search",placeholder:t,className:"search-box",onChange:n})}),p=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleSearch=function(t){var n=t.target.value,a=e.state.monsters.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));e.setState({monstersFiltered:a})},e.state={monsters:[],monstersFiltered:[],searchFieldValue:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t,monstersFiltered:t})}))}},{key:"render",value:function(){var e=this.state.monstersFiltered;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{placeholder:"Search monsters...",handleChange:this.handleSearch}),r.a.createElement("div",{className:"card-list"},e.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})}))))}}]),t}(a.Component));var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters"),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.cf753a87.chunk.js.map