(this.webpackJsonpcardbuilder=this.webpackJsonpcardbuilder||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(11),r=n.n(o),i=n(6),s=n(7),u=n(4),l=(n(25),n(5)),b=n(10),d=n(21),j=n(2),g=function(e){var t=e.shapeProps,n=e.isSelected,c=e.onSelect,o=(e.onMove,e.onChange),r=e.useTool,i=a.a.useRef(),s=a.a.useRef();return a.a.useEffect((function(){n&&(s.current.nodes([i.current]),s.current.getLayer().batchDraw())}),[n]),Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(l.e,Object(u.a)(Object(u.a)({onDblClick:c,onDblTap:c,ref:i},t),{},{draggable:!r&&n,onDragEnd:function(e){o(Object(u.a)(Object(u.a)({},t),{},{x:e.target.x(),y:e.target.y()}))},onTransformEnd:function(e){var n=i.current,c=n.scaleX(),a=n.scaleY();n.scaleX(1),n.scaleY(1),o(Object(u.a)(Object(u.a)({},t),{},{x:n.x(),y:n.y(),width:Math.max(5,n.width()*c),height:Math.max(n.height()*a)}))}})),n&&Object(j.jsx)(l.h,{ref:s,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}})]})},h=function(e){var t=e.shapeProps,n=e.isSelected,c=e.onSelect,o=(e.onMove,e.onChange),r=e.useTool,i=a.a.useRef(),s=a.a.useRef();return a.a.useEffect((function(){n&&(s.current.nodes([i.current]),s.current.getLayer().batchDraw())}),[n]),Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(l.a,Object(u.a)(Object(u.a)({onDblClick:c,onDblTap:c,ref:i},t),{},{draggable:!r&&n,onDragEnd:function(e){o(Object(u.a)(Object(u.a)({},t),{},{x:e.target.x(),y:e.target.y()}))},onTransformEnd:function(e){var n=i.current,c=n.scaleX(),a=n.scaleY();n.scaleX(1),n.scaleY(1),o(Object(u.a)(Object(u.a)({},t),{},{x:n.x(),y:n.y(),radius:Math.max(n.radius()*c,n.radius()*a)}))}})),n&&Object(j.jsx)(l.h,{ref:s,boundBoxFunc:function(e,t){return t.radius<5?e:t}})]})},f=function(e){var t=e.shapeProps,n=e.isSelected,c=e.onSelect,o=(e.onMove,e.onChange),r=e.useTool,i=a.a.useRef(),s=a.a.useRef();return a.a.useEffect((function(){n&&(s.current.nodes([i.current]),s.current.getLayer().batchDraw())}),[n]),Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(l.g,Object(u.a)(Object(u.a)({onDblClick:c,onDblTap:c,ref:i},t),{},{draggable:!r&&n,onDragEnd:function(e){o(Object(u.a)(Object(u.a)({},t),{},{x:e.target.x(),y:e.target.y()}))},onTransformEnd:function(e){var n=i.current,c=n.scaleX(),a=n.scaleY();n.scaleX(1),n.scaleY(1),o(Object(u.a)(Object(u.a)({},t),{},{x:n.x(),y:n.y(),width:Math.max(5,n.width()*c),height:Math.max(n.height()*a)}))}})),n&&Object(j.jsx)(l.h,{ref:s,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}})]})},O=function(e){var t=e.shapeProps,n=e.isSelected,c=e.onSelect,o=(e.onMove,e.onChange),r=e.points,i=e.tool,s=e.useTool,b=a.a.useRef(),d=a.a.useRef();return a.a.useEffect((function(){n&&(d.current.nodes([b.current]),d.current.getLayer().batchDraw())}),[n]),Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(l.d,Object(u.a)(Object(u.a)({onDblClick:c,onDblTap:c,ref:b},t),{},{points:r,stroke:"#df4b26",strokeWidth:5,tension:.5,lineCap:"round",draggable:!s&&n,globalCompositeOperation:"eraser"===i?"destination-out":"source-over",onDragEnd:function(e){o(Object(u.a)(Object(u.a)({},t),{},{x:e.target.x(),y:e.target.y()}))},onTransformEnd:function(e){var n=b.current,c=n.scaleX(),a=n.scaleY();n.scaleX(1),n.scaleY(1);for(var r=[],i=0;i<t.points.length;i+=2)r=r.concat([t.points[i]*c,t.points[i+1]*a]);o(Object(u.a)(Object(u.a)({},t),{},{points:r}))}})),n&&Object(j.jsx)(l.h,{ref:d,boundBoxFunc:function(e,t){return t.width<5||t.height<5?e:t}})]})},x=[{shapes:[],lines:[]}],p=0;function v(){for(var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=(t[0],t[1],Object(c.useState)([])),o=Object(s.a)(n,2),r=(o[0],o[1],Object(c.useState)([])),v=Object(s.a)(r,2),y=v[0],S=v[1],w=Object(c.useState)(null),m=Object(s.a)(w,2),k=m[0],T=m[1],C=Object(c.useState)(!1),D=Object(s.a)(C,2),E=D[0],M=D[1],P=Object(c.useState)(null),R=Object(s.a)(P,2),F=R[0],X=R[1],Y=a.a.useState(""),W=Object(s.a)(Y,2),B=W[0],H=W[1],J=a.a.useState([]),L=Object(s.a)(J,2),z=L[0],I=L[1],N=a.a.useRef(!1),q=Object(c.useState)(!1),U=Object(s.a)(q,2),V=U[0],A=U[1],G=Object(c.useState)(!1),K=Object(s.a)(G,2),Q=K[0],Z=K[1],$=window.innerWidth/10,_=window.innerHeight/5,ee=[],te=[],ne=0;ne<window.innerHeight;ne+=_)ee.push(Object(j.jsx)(l.d,{strokeWidth:.5,stroke:"gray",points:[0,ne,window.innerWidth,ne]}));for(var ce=0;ce<window.innerWidth;ce+=$)te.push(Object(j.jsx)(l.d,{strokeWidth:.5,stroke:"gray",points:[ce,0,ce,window.innerHeight]}));var ae=function(e){if(V){N.current=!0;var t=e.target.getStage().getPointerPosition();I([].concat(Object(i.a)(z),[{tool:B,points:[t.x,t.y],name:"line",x:0,y:0,id:Object(b.v4)()}])),S([].concat(Object(i.a)(y),[{tool:B,points:[t.x,t.y],name:"line",index:z.length,x:e.target.x(),y:e.target.y(),id:Object(b.v4)()}])),Z(!0)}ie(e)},oe=function(e){if(V&&Q){if(!N.current)return;var t=e.target.getStage().getPointerPosition(),n=z[z.length-1];n.points=n.points.concat([t.x,t.y]),z.splice(z.length-1,1,n),I(z.concat())}},re=function(){V&&(N.current=!1,Z(!1),x=(x=x.slice(0,p+1)).concat([{shapes:y,lines:z}]),p+=1)},ie=function(e){e.target===e.target.getStage()&&T(null),M(!1)},se=Object(c.useRef)(null),ue=function(e){S((function(t){return t.filter((function(t,n){return t.id!==e.id}))})),S((function(t){return[].concat(Object(i.a)(t),[e])})),x=(x=x.slice(0,p+1)).concat([{shapes:[].concat(Object(i.a)(y),[e]),lines:z}]),p+=1};return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("data"));e&&(I(e[1]),S(e[0]),x=[{shapes:e[0],lines:e[1]}])}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(l.f,{width:window.innerWidth,height:window.innerHeight,ref:se,onTouchStart:function(e){ie(e),ae(e)},onMouseDown:ae,onTouchEnd:re,onMousemove:oe,onTouchMove:oe,onMouseup:re,children:Object(j.jsxs)(l.c,{children:[ee,te,y.map((function(e,t){return"rectangle"==e.name?Object(j.jsx)(g,{shapeProps:e,isSelected:e.id===k,onSelect:function(){A(!1),ue(e),T(e.id)},onMove:function(){return ue(e)},onChange:function(e){var n=y.slice();n[t]=e,S(n),x=(x=x.slice(0,p+1)).concat([{shapes:n,lines:z}]),p+=1},useTool:V},t):"circle"==e.name?Object(j.jsx)(h,{shapeProps:e,isSelected:e.id===k,onSelect:function(){A(!1),ue(e),T(e.id)},onMove:function(){return ue(e)},onChange:function(e){var n=y.slice();n[t]=e,S(n),x=(x=x.slice(0,p+1)).concat([{shapes:n,lines:z}]),p+=1},useTool:V},t):"text"==e.name?Object(j.jsx)(f,{shapeProps:e,isSelected:e.id===k,onSelect:function(){A(!1),ue(e),T(e.id),X(e),M(!E)},onMove:function(){return ue(e)},onChange:function(e){var n=y.slice();n[t]=e,S(n),x=(x=x.slice(0,p+1)).concat([{shapes:n,lines:z}]),p+=1},useTool:V},t):"line"==e.name?Object(j.jsx)(O,{points:z[e.index].points,tool:z[e.index].tool,shapeProps:z[e.index],isSelected:z[e.index].id===k,onSelect:function(){A(!1),ue(e),T(z[e.index].id)},onMove:function(){return ue(e)},onChange:function(t){var n=z.slice();n[e.index]=t,I(n),x=(x=x.slice(0,p+1)).concat([{shapes:y,lines:n}]),p+=1},useTool:V},t):void 0})),Object(j.jsx)(l.a,{name:"draggableCircle1",x:50,y:70,radius:25,stroke:"black",id:"circle1"}),Object(j.jsx)(l.a,{name:"draggableCircle",x:50,y:70,radius:25,stroke:"black",draggable:!V,id:"circle2",onDragEnd:function(e){var t={x:e.target.x(),y:e.target.y(),radius:25,stroke:"black",id:Object(b.v4)(),fill:"red",name:"circle"};S((function(e){return[].concat(Object(i.a)(e),[t])})),console.log(y),se.current.findOne(".draggableCircle").position({x:50,y:70}),x=(x=x.slice(0,p+1)).concat([{shapes:[].concat(Object(i.a)(y),[t]),lines:z}]),p+=1}}),Object(j.jsx)(l.e,{x:25,y:100,width:50,height:50,stroke:"black",id:"rect1"}),Object(j.jsx)(l.e,{name:"draggableRect",x:25,y:100,width:50,height:50,stroke:"black",id:"rect1",draggable:!V,onDragEnd:function(e){var t={x:e.target.x(),y:e.target.y(),stroke:"black",width:50,height:50,id:Object(b.v4)(),fill:"green",name:"rectangle"};S((function(e){return[].concat(Object(i.a)(e),[t])})),se.current.findOne(".draggableRect").position({x:25,y:100}),x=(x=x.slice(0,p+1)).concat([{shapes:[].concat(Object(i.a)(y),[t]),lines:z}]),p+=1}}),Object(j.jsx)(l.g,{fontSize:50,text:"T",width:40,height:100,x:35,y:160}),Object(j.jsx)(l.g,{name:"draggableText",x:35,y:160,text:"T",fontSize:50,width:40,height:100,draggable:!V,onDragEnd:function(e){var t={x:e.target.x(),y:e.target.y(),id:Object(b.v4)(),text:"T",width:40,textEditVisible:!0,height:100,fontSize:50,name:"text"};S((function(e){return[].concat(Object(i.a)(e),[t])})),se.current.findOne(".draggableText").position({x:35,y:160}),x=(x=x.slice(0,p+1)).concat([{shapes:[].concat(Object(i.a)(y),[t]),lines:z}]),p+=1}}),Object(j.jsxs)(d.a,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"button",value:"Undo",onClick:function(){if(console.log("undo"),0!==p){var e=x[p-=1];I(e.lines),S(e.shapes)}}}),Object(j.jsx)("input",{type:"button",value:"Redo",onClick:function(){if(console.log("redo"),p!==x.length-1){var e=x[p+=1];I(e.lines),S(e.shapes)}}}),Object(j.jsx)("input",{type:"button",value:"Save",onClick:function(){var e=JSON.stringify([y,z]);localStorage.setItem("data",e)}}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"button",value:"Pencil",style:"pen"==B&&V?{backgroundColor:"aqua"}:null,onClick:function(){H("pen"),A(!V)}})]}),E?Object(j.jsx)("textarea",{value:F.text,onChange:function(e){var t={};X((function(t){return Object(u.a)(Object(u.a)({},t),{},{text:e.target.value})})),S(y.map((function(n){return n.id==k?t=Object(u.a)(Object(u.a)({},n),{},{text:e.target.value}):n}))),x=(x=x.slice(0,p+1)).concat([{shapes:[].concat(Object(i.a)(y),[t]),lines:z}]),p+=1}}):null]})]})})})}r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4ea6fc8e.chunk.js.map