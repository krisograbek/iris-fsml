(this["webpackJsonpreact-flask-template"]=this["webpackJsonpreact-flask-template"]||[]).push([[0],{13:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(14),r=c.n(a),s=(c(33),c(34),c(18)),o=c(54),l=c(56),d=c(57),j=(c(13),c.p+"static/media/boundaries.6c084dff.png"),b=c(2),h=420,x=210,u=Object(o.a)((function(e){return{root:{color:"#ccc"},markLabel:{color:"#ccc"},vertical:{height:x},horizontal:{width:h},img:{height:x,width:h},padding20:{padding:"20px 0 0 0"},divImg:{height:x,width:h,backgroundImage:"url(".concat(j,")"),backgroundSize:"".concat(h,"px ").concat(x,"px")},centerDiv:{textAlign:"center",verticalAlign:"middle"},rotate:{writingMode:"vertical-rl"}}}));var m=function(e){var t=e.length,c=e.width,n=e.updateLength,i=e.updateWidth,a=u(),r=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Array(Math.ceil((t-e)/c)).fill(e).map((function(e,t){var n=e+t*c;return{value:n,label:"".concat(n)}}))};return Object(b.jsxs)(l.a,{container:!0,className:a.root,direction:"column",children:[Object(b.jsx)(l.a,{item:!0,className:a.vertical,children:Object(b.jsxs)(l.a,{container:!0,children:[Object(b.jsx)(l.a,{item:!0,xs:2,children:Object(b.jsxs)(l.a,{container:!0,justifyContent:"flex-end",alignItems:"center",children:[Object(b.jsx)(l.a,{item:!0,children:Object(b.jsx)("div",{className:"".concat(a.rotate," smallFont"),children:"Petal Width"})}),Object(b.jsx)(l.a,{item:!0,className:a.vertical,children:Object(b.jsx)(d.a,{classes:{markLabel:a.markLabel},orientation:"vertical",valueLabelDisplay:"on",min:0,max:3.5,step:.1,value:c,marks:r(0,3.51,1),onChange:function(e,t){return i(t)},"aria-labelledby":"discrete-slider"})})]})}),Object(b.jsx)(l.a,{item:!0,children:Object(b.jsxs)("div",{className:a.divImg,children:[Object(b.jsx)("div",{style:{position:"absolute",borderLeft:"1px solid black",height:"".concat(x,"px"),marginLeft:"".concat(60*t,"px")}}),Object(b.jsx)("div",{style:{position:"absolute",borderTop:"1px solid black",width:"".concat(h,"px"),marginTop:"".concat(x-60*c,"px")}})]})})]})}),Object(b.jsx)(l.a,{item:!0,children:Object(b.jsxs)(l.a,{container:!0,children:[Object(b.jsx)(l.a,{item:!0,xs:2,children:Object(b.jsx)("div",{})}),Object(b.jsx)(l.a,{item:!0,style:{width:"420px",paddingTop:"20px"},children:Object(b.jsx)(d.a,{classes:{markLabel:a.markLabel},min:0,max:7,step:.1,value:t,marks:r(0,7.01,1),onChange:function(e,t){return n(t)},"aria-labelledby":"discrete-slider",valueLabelDisplay:"on"})})]})}),Object(b.jsx)(l.a,{item:!0,children:Object(b.jsxs)(l.a,{container:!0,children:[Object(b.jsx)(l.a,{item:!0,xs:2,children:Object(b.jsx)("div",{})}),Object(b.jsx)(l.a,{item:!0,className:a.horizontal,children:Object(b.jsx)("div",{className:"".concat(a.centerDiv," smallFont"),children:"Petal Length [cm]"})})]})})]})};var p={0:"Iris Setosa",1:"Iris Versicolour",2:"Iris Virginica"},O={0:"Setosa",1:"Versicolour",2:"Virginica"},f={0:"#fafab0",1:"#9898ff",2:"#a0faa0"},g=Object(o.a)((function(e){return{smallFont:{fontSize:"calc(6px + 2vmin)"},mediumFont:{fontSize:"calc(8px + 2vmin)"}}}));var v=function(e){var t=e.probas;return g(),Object(b.jsx)(l.a,{container:!0,spacing:2,justifyContent:"flex-start",children:t.map((function(e,t){return Object(b.jsx)(l.a,{item:!0,xs:2,children:Object(b.jsxs)(l.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[Object(b.jsx)(l.a,{item:!0,children:Object(b.jsxs)("div",{className:"mediumFont",children:[e.toFixed(1),"%"]})}),Object(b.jsx)(l.a,{item:!0,children:Object(b.jsxs)(l.a,{container:!0,spacing:0,direction:"column",alignItems:"center",children:[Object(b.jsx)("div",{style:{borderLeft:"20px solid grey",height:100-e+"px"}}),Object(b.jsx)("div",{style:{borderLeft:"20px solid",borderColor:f[t],height:e+"px"}})]})}),Object(b.jsx)(l.a,{item:!0,children:Object(b.jsx)("div",{className:"mediumFont",children:O[t]})})]})},t)}))})},y=Object(o.a)((function(e){return{root:{padding:"30px"},vertical:{height:100},horizontal:{width:300,padding:"12px"}}}));var L=function(){var e=y(),t=Object(n.useState)({dot:[],probas:[]}),c=Object(s.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)(2.1),o=Object(s.a)(r,2),d=o[0],j=o[1],h=Object(n.useState)(1.1),x=Object(s.a)(h,2),u=x[0],O=x[1];Object(n.useEffect)((function(){fetch("/api/predict/".concat(d,"/").concat(u)).then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);var g=function(){fetch("/api/predict/".concat(d,"/").concat(u)).then((function(e){return e.json()})).then((function(e){a(e)}))};return Object(b.jsxs)(l.a,{container:!0,direction:"column",justifyContent:"flex-start",alignItems:"stretch",spacing:3,className:e.root,children:[Object(b.jsx)(l.a,{item:!0,children:Object(b.jsx)(v,{probas:i.probas})}),Object(b.jsx)(l.a,{item:!0,children:Object(b.jsxs)("h2",{children:["Prediction: ",Object(b.jsx)("span",{style:{color:"".concat(f[i.prediction])},children:p[i.prediction]})]})}),Object(b.jsx)(l.a,{item:!0,children:Object(b.jsx)(m,{length:d,width:u,updateLength:function(e){j(e),g()},updateWidth:function(e){O(e),g()}})})]})};var k=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(L,{})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.4540a548.chunk.js.map