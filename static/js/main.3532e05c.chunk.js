(this["webpackJsonpreact-jsmpeg-player-demo"]=this["webpackJsonpreact-jsmpeg-player-demo"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(1),s=n(3),r=n.n(s),a=(n(14),n(15),n(4)),c=n(5),p=n(8),u=n(7),l=n(6),h=n.n(l),d=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).els={videoWrapper:null},o}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{className:this.props.wrapperClassName,ref:function(t){return e.els.videoWrapper=t}})}},{key:"componentDidMount",value:function(){this.video=new h.a.VideoElement(this.els.videoWrapper,this.props.videoUrl,this.props.options,this.props.overlayOptions),this.props.onRef&&this.props.onRef(this)}},{key:"play",value:function(){this.video.play()}},{key:"pause",value:function(){this.video.pause()}},{key:"stop",value:function(){this.video.stop()}},{key:"destroy",value:function(){this.video.destroy()}}]),n}(i.Component),v={poster:"https://cycjimmy.github.io/staticFiles/images/screenshot/big_buck_bunny_640x360.jpg"},b={};var j=function(){var e=null;return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)(d,{wrapperClassName:"video-wrapper",videoUrl:"https://cycjimmy.github.io/staticFiles/media/big_buck_bunny_640x360.ts",options:v,overlayOptions:b,onRef:function(t){return e=t}}),Object(o.jsxs)("div",{className:"buttons-wrapper",children:[Object(o.jsx)("button",{onClick:function(){return e.play()},children:"Play"}),Object(o.jsx)("button",{onClick:function(){return e.pause()},children:"Pause"}),Object(o.jsx)("button",{onClick:function(){return e.stop()},children:"Stop"})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(o.jsx)(j,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.3532e05c.chunk.js.map