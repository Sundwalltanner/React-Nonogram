(this["webpackJsonpReact-Nonogram"]=this["webpackJsonpReact-Nonogram"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),a=n(8),i=n.n(a),r=(n(14),n(1)),c=n(2),u=n(5),l=n(4),m=n(6),h=n(3),d=(s.a.Component,n(15),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleClick=function(e){0===e.button?"mousedown"===e.type?n.setState({message:"Left Mouse Down"}):"mouseup"===e.type&&n.setState({message:"Left Mouse Up"}):2===e.button&&("mousedown"===e.type?n.setState({message:"Right Mouse Down"}):"mouseup"===e.type&&n.setState({message:"Right Mouse Up"}))},n.state={message:"Mouse Event",seconds:0,timer:"00:00:00"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"tick",value:function(){var e=this;this.setState((function(t){return{seconds:t.seconds+1,timer:new Date(1e3*e.state.seconds).toISOString().substr(11,8)}}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"render",value:function(){return s.a.createElement("div",{onContextMenu:function(e){return e.preventDefault()}},s.a.createElement("div",{className:"App-header",onMouseDown:this.handleClick,onMouseUp:this.handleClick},this.state.message,s.a.createElement("div",null,this.state.timer)))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f22dbcff.chunk.js.map