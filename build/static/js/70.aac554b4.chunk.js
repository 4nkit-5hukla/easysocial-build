(this.webpackJsonpeasysocial=this.webpackJsonpeasysocial||[]).push([[70],{1634:function(e,t,n){"use strict";var a=n(9),i=n(0),l=n.n(i),c=n(772),r=n(2);t.a=function(e){var t=Object(i.useState)(null),n=Object(a.a)(t,2),o=n[0],s=n[1];return Object(i.useEffect)((function(){e.img&&!o&&function(){var t=new window.Image;t.src=e.img,t.crossOrigin="anonymous",t.addEventListener("load",(function(){s(t)}))}()}),[e.img,o]),Object(r.jsx)(l.a.Fragment,{children:Object(r.jsx)(c.Image,{id:e.id,name:e.name,image:o,x:e.x,y:e.y,width:e.width,height:e.height,onDragMove:function(t){return e.updateProperty(t)},onTransformEnd:function(t){return e.updateProperty(t)},draggable:!0,scaleX:e.scaleX,scaleY:e.scaleY})})}},1635:function(e,t,n){"use strict";n(0);var a=n(772),i=n(2);t.a=function(e){return Object(i.jsx)(a.Text,{width:e.width,height:e.height,lineHeight:e.lineHeight,scaleX:parseInt(e.scaleX),id:e.id,x:parseInt(e.x),y:parseInt(e.y),text:e.text,textDecoration:e.underline?"underline":"",fontFamily:e.font,fontSize:parseInt(e.fontSize),fill:e.color,fontStyle:e.bold&&e.italic?"bold italic":e.italic?"italic":e.bold?"bold":"normal",name:e.name,align:e.textAlignment,draggable:!0,onTransform:function(t){var n=t.target,a=n.scaleX(),i=n.scaleY(),l=n.width(),c=(i-1)/1*100/2;return n.setAttrs({width:l*a,scaleX:1}),function(){var t=null;return["top-right","top-left","bottom-right","bottom-left"].map((function(n){if(e.transformer.getActiveAnchor()===n)return t=n})),t}()&&n.setAttrs({fontSize:e.fontSize+c}),e.getFontSize(n.fontSize())},onTransformEnd:function(t){return e.updateProperty(t)},onDragMove:function(t){return e.updateProperty(t)},rotation:parseInt(e.rotation),letterSpacing:Number(e.letterSpacing)})}},1636:function(e,t,n){e.exports={Header:"Header_Header__3uB-d",Header_Text:"Header_Header_Text__2N2EW",Title:"Header_Title__rICwm",Sub:"Header_Sub__3t57o",Next:"Header_Next__2dwcE",LeftArrow:"Header_LeftArrow__2zENS",IndexBtn:"Header_IndexBtn__2YUep",IndexDown:"Header_IndexDown__2vbL0"}},1637:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(25),i=n(21),l=n(44),c=n(45),r=n(0),o=n.n(r),s=n(772),d=n(2),u=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.checkNode()}},{key:"componentDidUpdate",value:function(){this.checkNode()}},{key:"checkNode",value:function(){var e=this.transformer.getStage(),t=this.props.selectedShapeName,n=e.findOne((function(e){return e.id()===t}));n!==this.transformer.node()&&(n?(this.transformer.nodes([n]),"Text"===n.className?(this.transformer.enabledAnchors(["top-left","top-right","middle-right","middle-left","bottom-left","bottom-right"]),this.props.anchorName(this.transformer)):"Image"===n.className?this.transformer.enabledAnchors(["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]):this.transformer.enabledAnchors(["top-left","top-center","top-right","middle-right","middle-left","bottom-left","bottom-center","bottom-right"])):this.transformer.detach(),this.transformer.getLayer().batchDraw())}},{key:"render",value:function(){var e=this;return Object(d.jsx)(s.Transformer,{ref:function(t){e.transformer=t}})}}]),n}(o.a.Component)},1638:function(e,t,n){"use strict";n(0);var a=n(1639),i=n.n(a),l=n(2);t.a=function(e){return Object(l.jsxs)("div",{className:i.a.Button_Container,children:[e.undo&&Object(l.jsx)("div",{className:i.a.Undo_Button,onClick:function(){return e.handleCropStart()},children:Object(l.jsx)("button",{children:Object(l.jsxs)("svg",{width:"437",height:"437",viewBox:"0 0 437 437",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("g",{"clip-path":"url(#clip0)",children:Object(l.jsx)("path",{d:"M224 143.573C167.573 143.573 116.16 164.586 76.8 199.04L0 122.24V314.24H192L114.88 237.12C144.427 212.267 182.293 196.907 224 196.907C299.627 196.907 363.627 246.08 386.027 314.24L436.48 297.6C407.147 208.213 323.2 143.573 224 143.573Z",fill:"black"})}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"436.48",height:"436.48",fill:"white"})})})]})})}),e.redo&&Object(l.jsx)("div",{className:i.a.Redo_Button,children:Object(l.jsx)("button",{children:Object(l.jsxs)("svg",{width:"437",height:"437",viewBox:"0 0 437 437",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("g",{"clip-path":"url(#clip0)",children:Object(l.jsx)("path",{d:"M359.573 199.04C320.32 164.587 268.906 143.573 212.48 143.573C113.28 143.573 29.333 208.213 0 297.6L50.453 314.24C72.853 246.08 136.853 196.907 212.48 196.907C254.187 196.907 292.053 212.267 321.6 237.12L244.48 314.24H436.48V122.24L359.573 199.04Z",fill:"black"})}),Object(l.jsx)("defs",{children:Object(l.jsx)("clipPath",{id:"clip0",children:Object(l.jsx)("rect",{width:"436.48",height:"436.48",fill:"white"})})})]})})}),e.copy&&Object(l.jsx)("div",{className:i.a.Copy_Button,onClick:function(){return e.handleCopyElement()},children:Object(l.jsx)("button",{children:Object(l.jsx)("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M311 512H120C75.8867 512 40 476.113 40 432V161C40 116.887 75.8867 81 120 81H311C355.113 81 391 116.887 391 161V432C391 476.113 355.113 512 311 512ZM120 121C97.9453 121 80 138.945 80 161V432C80 454.055 97.9453 472 120 472H311C333.055 472 351 454.055 351 432V161C351 138.945 333.055 121 311 121H120ZM471 382V80C471 35.8867 435.113 0 391 0H169C157.953 0 149 8.95312 149 20C149 31.0469 157.953 40 169 40H391C413.055 40 431 57.9453 431 80V382C431 393.047 439.953 402 451 402C462.047 402 471 393.047 471 382Z",fill:"black"})})})}),Object(l.jsx)("div",{className:i.a.Delete_Button,onClick:function(){return e.handleDeleteElement()},children:Object(l.jsx)("button",{children:Object(l.jsxs)("svg",{width:"300",height:"384",viewBox:"0 0 300 384",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M22 341.333C22 364.907 41.093 384 64.667 384H235.334C258.907 384 278 364.907 278 341.333V85.333H22V341.333Z",fill:"black"}),Object(l.jsx)("path",{d:"M224.667 21.333L203.333 0H96.667L75.333 21.333H0.666992V64H299.333V21.333H224.667Z",fill:"black"})]})})})]})}},1639:function(e,t,n){e.exports={Button_Container:"Button_Button_Container__2l7go"}},1640:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(772),c=n(2);t.a=function(e){return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsx)(l.Rect,{id:e.id,fill:e.fill,stroke:e.stroke,strokeWidth:e.strokeWidth,x:Number(e.x)?Number(e.x):0,y:Number(e.y)?Number(e.y):0,width:Number(e.width),height:Number(e.height),scaleX:Number(e.scaleX),scaleY:Number(e.scaleY),rotation:Number(e.rotation),onDragMove:function(t){return e.updateProperty(t)},onTransformEnd:function(t){return e.updateProperty(t)},draggable:!0})})}},1641:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(772),c=n(2);t.a=function(e){return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsx)(l.Path,{id:e.id,fill:e.fill,x:Number(e.x),y:Number(e.y),scaleX:Number(e.scaleX),scaleY:Number(e.scaleY),rotation:Number(e.rotation),draggable:!0,data:e.d,name:e.name,onDragMove:function(t){e.updateProperty(t)},onTransformEnd:function(t){return e.updateProperty(t)}})})}},1642:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(772),c=n(2);t.a=function(e){return Object(c.jsx)(i.a.Fragment,{children:Object(c.jsx)(l.Circle,{id:e.id,fill:e.fill?e.fill:null,x:Number(e.x),y:Number(e.y),scaleX:Number(e.scaleX),scaleY:Number(e.scaleY),rotation:Number(e.rotation),draggable:!0,strokeWidth:e.strokeWidth,stroke:e.stroke||"black",radius:Number(e.radius),name:e.name,onDragMove:function(t){return e.updateProperty(t)},onTransformEnd:function(t){return e.updateProperty(t)}})})}},1657:function(e,t,n){"use strict";n(0);var a=n(1636),i=n.n(a),l=n.p+"static/media/up-arrow.212a7457.svg",c=n(2);t.a=function(e){return Object(c.jsxs)("header",{className:i.a.Header,onClick:e.deselect,children:[Object(c.jsx)("div",{className:i.a.LeftArrow,children:Object(c.jsx)("svg",{onClick:function(){return e.goBack()},width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M8 1L1.8858 6.24074C1.42019 6.63984 1.42019 7.36016 1.8858 7.75926L8 13",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"bevel"})})}),Object(c.jsxs)("div",{className:i.a.Header_Text,children:[Object(c.jsx)("div",{className:i.a.Title,children:Object(c.jsx)("h1",{children:"Edit Post"})}),Object(c.jsx)("div",{className:i.a.Sub,children:Object(c.jsx)("p",{children:"Edit Post"})})]}),Object(c.jsxs)("div",{className:i.a.IndexBtn,children:[Object(c.jsx)("div",{className:i.a.IndexUp,onClick:e.moveUp,children:Object(c.jsx)("img",{src:l,alt:"moveUp"})}),Object(c.jsx)("div",{className:i.a.IndexDown,onClick:e.moveDown,children:Object(c.jsx)("img",{src:l,alt:"moveDown"})})]}),Object(c.jsx)("div",{className:i.a.Next,children:Object(c.jsxs)("a",{href:"#next",onClick:e.saveToDataBase,children:["Next",Object(c.jsx)("svg",{width:"9",height:"11",viewBox:"0 0 9 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{d:"M8 1L1.8858 6.24074C1.42019 6.63984 1.42019 7.36016 1.8858 7.75926L8 13",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"bevel"})})]})})]})}},2263:function(e,t,n){e.exports={FontPanel:"FontPanel_FontPanel__2N5tf",Font_Family:"FontPanel_Font_Family__sUEhT",DropDown:"FontPanel_DropDown__2hS9A",DropDown_Content:"FontPanel_DropDown_Content__1km51",Font:"FontPanel_Font__1Q69v",Font_Size:"FontPanel_Font_Size__7ng_z",Size:"FontPanel_Size__2Ww2j",Font_Style:"FontPanel_Font_Style__3w6aU",Saperator:"FontPanel_Saperator__3t2vV",Font_Align:"FontPanel_Font_Align__2K2IJ",line1:"FontPanel_line1__30cM0",line2:"FontPanel_line2__2rLli",Font_Color:"FontPanel_Font_Color__Ek9-2",Color:"FontPanel_Color__17TVY"}},2264:function(e,t,n){e.exports={BackDrop:"EditText_BackDrop__2QZK6",EditText:"EditText_EditText__N2l6F",TextPopup:"EditText_TextPopup__2iYo6",Btn:"EditText_Btn__1PNjC",ApplyBtn:"EditText_ApplyBtn__1amS4",CancelBtn:"EditText_CancelBtn__2Y2LL"}},2265:function(e,t,n){e.exports={Container:"RectPanel_Container__oIqb6",RectPanel:"RectPanel_RectPanel__jK9fL",Color:"RectPanel_Color__1o1IM",Fill:"RectPanel_Fill__I3bJv",Stroke:"RectPanel_Stroke__2uSx3",Spacing:"RectPanel_Spacing__1uDiu",Parent:"RectPanel_Parent__2rIQ9",Line:"RectPanel_Line__2yezL",Rect:"RectPanel_Rect__xaBZB",StrokeWidth:"RectPanel_StrokeWidth__18Mzo",DropDown_Content:"RectPanel_DropDown_Content__sCMh9"}},2544:function(e,t,n){"use strict";n.r(t);var a=n(16),i=n(5),l=n(9),c=n(0),r=n.n(c),o=n(40),s=n(43),d=n(772),u=n(18),j=n(1634),f=n(1635),h=n(1657),b=n(2263),m=n.n(b),x=n(2264),p=n.n(x),O=n(2),g=function(e){var t=r.a.useRef(),n=r.a.useState(!1),a=Object(l.a)(n,2),i=a[0],c=a[1];return Object(O.jsxs)(r.a.Fragment,{children:[i&&Object(O.jsx)("div",{className:p.a.BackDrop}),Object(O.jsx)("div",{className:p.a.EditText,style:{marginBottom:e.fontStyle?"60px":"20px"},onClick:function(){return c(!i)},children:Object(O.jsx)("h1",{children:"Edit"})}),i&&Object(O.jsxs)("div",{className:p.a.TextPopup,children:[Object(O.jsx)("textarea",{defaultValue:e.displayValue,ref:t,className:p.a.Textarea,name:"Edit",cols:"30",rows:"30"}),Object(O.jsxs)("div",{className:p.a.Btn,children:[Object(O.jsx)("button",{className:p.a.ApplyBtn,onClick:function(){e.handleText(t.current.value),c(!i)},children:Object(O.jsx)("p",{children:"Save"})}),Object(O.jsx)("button",{className:p.a.CancelBtn,onClick:function(){e.handleText(t.current.value),c(!i)},children:Object(O.jsx)("p",{children:"Cancel"})})]})]})]})},_=Object(s.b)((function(e){return{fonts:e.font.fonts}}),null)((function(e){var t=r.a.useState(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],o=r.a.useState(!1),s=Object(l.a)(o,2),d=s[0],u=s[1],j=r.a.useState(!1),f=Object(l.a)(j,2),h=f[0],b=f[1],x=Object(c.useState)([]),p=Object(l.a)(x,2),_=p[0],v=p[1],y=e.fontFamily;return Object(c.useEffect)((function(){var t=[];e.fonts&&(e.fonts.map((function(e,n){Object.values(e).map((function(e){t.push({name:e.name,color:null})}))})),v(t))}),[e.fonts]),_.filter((function(t){t.name===e.fontFamily?(t.color="#12B0EE",y=t.name):t.color=null})),Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(g,{displayValue:e.displayValue,handleText:e.handleText,fontStyle:h}),Object(O.jsxs)("div",{className:m.a.FontPanel,children:[Object(O.jsxs)("div",{className:m.a.Font_Family,children:[a&&Object(O.jsx)("div",{className:m.a.DropDown_Content,children:e.fonts&&_.map((function(t,n){return Object(O.jsx)("div",{className:m.a.Font,onClick:function(){return e.getFont(t.name)},children:Object(O.jsx)("h1",{style:{fontFamily:t.name,color:t.color},children:t.name})},n)}))}),Object(O.jsx)("div",{onClick:function(){i(!a),u(!1),b(!1)},style:{backgroundColor:a?"#e7ebf2":"white"},className:m.a.DropDown,children:Object(O.jsx)("h3",{children:y.length>7?y.slice(0,7)+"...":y})})]}),Object(O.jsxs)("div",{className:m.a.Font_Size,children:[d&&Object(O.jsx)("div",{className:m.a.DropDown_Content,children:[8,9,10,11,12,14,18,24,30,36,48,60,72,96].map((function(t){return Object(O.jsx)("p",{style:{color:e.fontSize===t?"#12B0EE":"black"},onClick:function(){return e.getFontSize(t)},className:m.a.Size,children:t},t)}))}),Object(O.jsx)("input",{style:{backgroundColor:d?"#e7ebf2":"white"},value:e.fontSize,type:"text",className:m.a.Dropdown,onClick:function(){i(!1),u(!d),b(!1)},onChange:function(t){return e.getFontSize(t.target.value)}})]}),Object(O.jsxs)("div",{className:m.a.Font_Style,children:[h&&Object(O.jsxs)("div",{className:m.a.DropDown_Content,children:[Object(O.jsx)("h1",{style:{backgroundColor:e.isBold?"#12B0EE":null},onClick:function(){e.handleBold(!e.isBold)},children:Object(O.jsx)("b",{children:"B"})}),Object(O.jsx)("h1",{style:{backgroundColor:e.isItalic?"#12B0EE":null},onClick:function(){e.handleItalic(!e.isItalic)},children:Object(O.jsx)("i",{children:"i"})}),Object(O.jsx)("h1",{style:{backgroundColor:e.isUnderline?"#12B0EE":null},onClick:function(){return e.handleUnderline(!e.isUnderline)},children:Object(O.jsx)("u",{children:"U"})}),Object(O.jsx)("div",{className:m.a.Saperator}),Object(O.jsx)("h1",{style:{backgroundColor:"normal"===e.fontVariant?"#12B0EE":null},onClick:e.handleNormalize,children:"-"}),Object(O.jsx)("h1",{style:{backgroundColor:"capitalize"===e.fontVariant?"#12B0EE":null},onClick:e.handleCapitalize,children:"Aa"}),Object(O.jsx)("h1",{style:{backgroundColor:"uppercase"===e.fontVariant?"#12B0EE":null},onClick:e.handleUppercase,children:"AA"}),Object(O.jsx)("h1",{style:{backgroundColor:"smallcase"===e.fontVariant?"#12B0EE":null},onClick:e.handleSmallcase,children:"aa"})]}),Object(O.jsx)("div",{style:{backgroundColor:h?"#e7ebf2":"white"},className:m.a.DropDown,children:Object(O.jsxs)("h3",{onClick:function(){i(!1),u(!1),b(!h)},children:["A",Object(O.jsx)("span",{children:"A"})]})})]}),Object(O.jsxs)("div",{className:m.a.Font_Align,onClick:e.handleAlignment,children:[Object(O.jsx)("div",{className:m.a.line1}),Object(O.jsx)("div",{className:m.a.line2,style:"center"===e.alignment?{margin:"auto"}:"right"===e.alignment?{marginLeft:"auto"}:null}),Object(O.jsx)("div",{className:m.a.line3,style:"center"===e.alignment?{width:"16px"}:{width:"10px !important"}})]}),Object(O.jsx)("div",{className:m.a.Font_Spacing,children:Object(O.jsxs)("div",{className:m.a.Parent,children:[Object(O.jsx)("div",{className:m.a.Line}),Object(O.jsx)("div",{className:m.a.Rect})]})}),Object(O.jsx)("div",{className:m.a.Font_Color,children:Object(O.jsx)("div",{className:m.a.Color,style:{backgroundColor:e.fontColor},children:Object(O.jsx)("input",{type:"color",onInput:function(t){return e.getFontColor(t.target.value)}})})})]})]})})),v=n(1637),y=n(627),C=n(1638),k=n(1640),w=n(2265),N=n.n(w),S=function(e){for(var t=[],n=1;n<=16;n++)t.push({size:n});var a=Object(c.useState)(!1),i=Object(l.a)(a,2),r=i[0],o=i[1];return Object(O.jsx)("div",{className:N.a.Container,children:Object(O.jsxs)("div",{className:N.a.RectPanel,children:[Object(O.jsx)("div",{className:N.a.Fill,children:Object(O.jsx)("div",{className:N.a.Color,style:{backgroundColor:e.fill},children:Object(O.jsx)("input",{type:"color",onChange:function(t){return e.handleFill(t.target.value)}})})}),Object(O.jsxs)("div",{className:N.a.StrokeWidth,style:r?{backgroundColor:"rgb(231, 235, 242)"}:null,children:[r&&Object(O.jsx)("div",{className:N.a.DropDown_Content,children:t.map((function(t){return Object(O.jsx)("p",{style:{color:e.strokeWidth===t.size?"#12B0EE":"black"},onClick:function(){return e.handleStrokeWidth(t.size)},children:t.size},t.size)}))}),Object(O.jsxs)("div",{className:N.a.Parent,onClick:function(){return o(!r)},children:[Object(O.jsx)("div",{className:N.a.Line1}),Object(O.jsx)("div",{className:N.a.Line2}),Object(O.jsx)("div",{className:N.a.Line3})]})]}),Object(O.jsx)("div",{className:N.a.Stroke,children:Object(O.jsx)("div",{className:N.a.Color,style:{backgroundColor:e.stroke},children:Object(O.jsx)("input",{type:"color",onChange:function(t){return e.handleStroke(t.target.value)}})})})]})})},F=n(1641),P=n(1642);t.default=Object(s.b)((function(e){return{canvas:e.canvas.data,fonts:e.font.fonts,photo:e.imageHandler.photo}}),(function(e){return{fetchData:function(t){return e(u.C(t))},fetchFonts:function(){return e(u.q())},getPhotos:function(t){return e(u.z(t))},addPhoto:function(t){return e(u.c(t))},deletePhoto:function(t){return e(u.m(t))}}}))(Object(o.withRouter)((function(e){var t=Object(c.useRef)(),n=Object(c.useState)({canvasWidth:null,canvasHeight:null,canvasScaleX:null,canvasScaleY:null}),o=Object(l.a)(n,2),s=o[0],u=o[1],b=s.canvasWidth,m=s.canvasHeight,x=Object(c.useState)(null),p=Object(l.a)(x,2),g=p[0],w=p[1],N=Object(c.useState)(null),D=Object(l.a)(N,2),V=D[0],E=D[1],B=Object(c.useState)(null),z=Object(l.a)(B,2),T=z[0],H=z[1],L=Object(c.useState)(null),Y=Object(l.a)(L,2),X=Y[0],I=Y[1],W=Object(c.useState)(null),R=Object(l.a)(W,2),A=R[0],M=R[1],U=Object(c.useState)(0),Z=Object(l.a)(U,2),J=Z[0],K=Z[1],Q=Object(c.useState)(null),q=Object(l.a)(Q,2),G=q[0],$=q[1],ee=Object(c.useState)(" "),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ie=function(e){if(e.target!==e.target.getStage()){if(!("Transformer"===e.target.getParent().className)){var t=e.target.id();ae(t||" ")}}else ae(" ")},le=Object(c.useState)({displayValue:null,textFont:"Arial",fontSize:30,fontColor:"white",fontVariant:"normal",bold:!1,italic:!1,underline:!1,alignment:"left",rotation:0}),ce=Object(l.a)(le,2),re=ce[0],oe=ce[1],se=re.textFont,de=re.fontSize,ue=re.fontColor,je=re.displayValue,fe=re.fontVariant,he=re.bold,be=re.italic,me=re.underline,xe=re.alignment,pe=Object(c.useState)({fill:null,stroke:null,strokeWidth:null}),Oe=Object(l.a)(pe,2),ge=Oe[0],_e=Oe[1],ve=ge.fill,ye=ge.stroke,Ce=ge.strokeWidth,ke=Object(c.useState)({cropScaleX:null,cropScaleY:null,cropX:null,cropY:null,cropStart:!1}),we=Object(l.a)(ke,2),Ne=we[0],Se=we[1],Fe=Ne.cropStart,Pe=function(e){V.filter((function(t){return t.id===ne&&(t.fontSize=e,oe(Object(i.a)(Object(i.a)({},re),{},{fontSize:t.fontSize}))),t}))},De=["left","center","right"],Ve=Object(c.useState)(null),Ee=Object(l.a)(Ve,2),Be=Ee[0],ze=Ee[1];Object(c.useEffect)((function(){if(3===J)return K(0);V&&V.filter((function(e){e.id===ne&&(e.alignment=De[J],oe(Object(i.a)(Object(i.a)({},re),{},{alignment:e.alignment})))}))}),[J]),Object(c.useEffect)((function(){e.fetchData(e.match.params.templateId),e.fetchFonts()}),[]),Object(c.useEffect)((function(){var t=[],n=[],a=[],l=[],c=[];e.canvas&&(u(Object(i.a)(Object(i.a)({},s),{},{canvasWidth:e.canvas.property.canvasWidth,canvasHeight:e.canvas.property.canvasHeight})),e.canvas.elements.filter((function(e,i){"Text"===e.type&&n.push(e),"Path"===e.type&&l.push(e),"Image"===e.type&&t.push(e),"Rect"===e.type&&a.push(e),"Circle"===e.type&&c.push(e)}))),w(t),E(n),H(a),I(l),M(c)}),[e.canvas]);var Te=Object(c.useRef)(),He=null;return Te.current&&(He=Te.current.offsetWidth/b),Object(O.jsxs)(r.a.Fragment,{children:[Object(O.jsx)(y.Helmet,{children:Object(O.jsx)("title",{children:"Edit Post"})}),Object(O.jsx)(h.a,{}),Object(O.jsxs)("div",{ref:Te,children:[Object(O.jsx)(d.Stage,{ref:t,width:b*He,height:m*He,style:{backgroundColor:"white"},scaleX:He,scaleY:He,onTap:function(e){$(e.target.className),console.log(e.target),function(e){"Text"===e.target.className&&V.filter((function(t){return t.id===e.target.id()?oe(Object(i.a)(Object(i.a)({},re),{},{displayValue:e.target.text(),textFont:e.target.fontFamily(),fontSize:e.target.fontSize(),fontColor:e.target.fill(),bold:t.bold,italic:t.italic,underline:t.underline,fontVariant:t.fontVariant,alignment:t.alignment})):t}))}(e),function(e){"Rect"===e.target.className&&T.filter((function(t){return t.id===e.target.id()?_e(Object(i.a)(Object(i.a)({},ge),{},{fill:e.target.fill(),stroke:e.target.stroke(),strokeWidth:e.target.strokeWidth()})):t}))}(e)},onClick:function(e){$(e.target.className)},onMouseDown:function(e){return ie(e)},onTouchStart:function(e){return ie(e)},children:Object(O.jsxs)(d.Layer,{children:[T&&T.map((function(e){return Object(O.jsx)(k.a,{id:e.id,x:e.x,y:e.y,width:e.width,height:e.height,fill:"none"!==e.fill?e.fill:"transparent",stroke:e.stroke,strokeWidth:e.strokeWidth,scaleX:e.scaleX,rotation:e.rotation,scaleY:e.scaleY},e.id)})),g&&g.map((function(e){return Object(O.jsx)(j.a,{x:e.x,y:e.y,width:e.width,height:e.height,img:e.src,id:e.id,name:e.name,scaleX:e.scaleX,scaleY:e.scaleY,rotation:e.rotation},e.id)})),A&&A.map((function(e){return Object(O.jsx)(P.a,{x:e.cx,y:e.cy,radius:e.r,scaleX:e.scaleX,scaleY:e.scaleY,id:e.id,name:e.name,rotation:e.rotation,transformer:Be,fill:e.fill})})),X&&X.map((function(e){return Object(O.jsx)(F.a,{x:e.x,y:e.y,fill:e.fill,scaleX:e.scaleX,scaleY:e.scaleY,d:e.d,id:e.id,name:e.name,rotation:e.rotation,transformer:Be})})),V&&V.map((function(e){return Object(O.jsx)(f.a,{x:e.x,y:e.y,width:e.width,scaleX:e.scaleX,scaleY:e.scaleY,text:e.displayValue,id:e.id,font:e.font,fontSize:e.fontSize,color:e.color,alignment:e.alignment,bold:e.bold,italic:e.italic,underline:e.underline,rotation:e.rotation,name:e.name,textAlignment:e.alignment,getFontSize:Pe,transformer:Be},e.id)})),Object(O.jsx)(v.a,{selectedShapeName:ne,anchorName:function(e){return ze(e)}})]})}),Object(O.jsx)(C.a,{handleCopyElement:function(){var n=t.current.findOne((function(e){return e.id()===ne}));"Text"===n.className?E((function(e){return[].concat(Object(a.a)(e),[{alignment:xe,bold:he,color:n.fill(),displayValue:n.text(),font:n.fontFamily(),fontSize:n.fontSize(),fontVariant:fe,id:Date.now(),italic:be,name:"element".concat(Date.now()),rotation:n.rotation(),scaleX:n.scaleX(),scaleY:n.scaleY(),type:"Text",underline:me,value:n.text(),width:n.width(),x:n.x(),y:n.y()}])})):"Image"===n.className?(w((function(e){return[].concat(Object(a.a)(e),[{height:n.height(),id:Date.now(),name:"element".concat(Date.now()),scaleX:n.scaleX(),scaleY:n.scaleY(),src:n.attrs.image.src,type:"Image",width:n.width(),x:n.x(),y:n.y(),rotation:n.rotation()}])})),e.addPhoto({height:n.height(),id:Date.now(),name:"element".concat(Date.now()),scaleX:n.scaleX(),scaleY:n.scaleY(),src:n.attrs.image.src,type:"Image",width:n.width(),x:n.x(),y:n.y(),rotation:n.rotation()})):"Rect"===n.className&&H((function(e){return[].concat(Object(a.a)(e),[{height:n.height(),width:n.width(),fill:n.fill(),stroke:n.stroke(),strokeWidth:n.strokeWidth(),x:n.x(),y:n.y(),scaleX:n.scaleX(),scaleY:n.scaleY(),id:Date.now(),type:"Rect",rotation:n.rotation()}])}))},handleDeleteElement:function(){var n=t.current.findOne((function(e){return e.id()===ne}));if("Image"===n.className){var a=g.filter((function(e){return e.id!==ne}));w(a),e.deletePhoto(ne)}if("Text"===n.className){var i=V.filter((function(e){return e.id!==ne}));E(i)}if("Rect"===n.className){var l=T.filter((function(e){return e.id!==ne}));H(l)}},handleCropStart:function(){return Se(Object(i.a)(Object(i.a)({},Ne),{},{cropStart:!Fe}))}}),"Text"===G&&Object(O.jsx)(_,{getFont:function(e){V.filter((function(t){return t.id===ne&&(t.font=e,oe(Object(i.a)(Object(i.a)({},re),{},{textFont:t.font}))),t}))},fontFamily:se,getFontSize:Pe,fontSize:de,getFontColor:function(e){V.filter((function(t){return t.id===ne&&(t.color=e,oe(Object(i.a)(Object(i.a)({},re),{},{fontColor:t.color}))),t}))},fontColor:ue,handleUppercase:function(){V.filter((function(e){return e.id===ne&&(e.displayValue=e.displayValue.toUpperCase(),oe(Object(i.a)(Object(i.a)({},re),{},{displayValue:e.displayValue,fontVariant:"uppercase"}))),e}))},handleSmallcase:function(){V.filter((function(e){return e.id===ne&&(e.displayValue=e.displayValue.toLowerCase(),oe(Object(i.a)(Object(i.a)({},re),{},{displayValue:e.displayValue,fontVariant:"smallcase"}))),e}))},handleCapitalize:function(){V.filter((function(e){return e.id===ne&&(e.displayValue=e.displayValue.replace(/(?:^|\s|["'([{])+\S/g,(function(e){return e.toUpperCase()})),oe(Object(i.a)(Object(i.a)({},re),{},{displayValue:e.displayValue,fontVariant:"capitalize"}))),e}))},handleNormalize:function(){V.filter((function(e){return e.id===ne&&(e.displayValue=e.value,oe(Object(i.a)(Object(i.a)({},re),{},{displayValue:e.displayValue,fontVariant:"normal"}))),e}))},fontVariant:fe,handleItalic:function(e){V.filter((function(t){return t.id===ne?(t.italic=e,oe(Object(i.a)(Object(i.a)({},re),{},{italic:t.italic}))):t}))},handleBold:function(e){V.filter((function(t){return t.id===ne?(t.bold=e,oe(Object(i.a)(Object(i.a)({},re),{},{bold:t.bold}))):t}))},handleUnderline:function(e){V.filter((function(t){return t.id===ne?(t.underline=e,oe(Object(i.a)(Object(i.a)({},re),{},{underline:t.underline}))):t}))},isBold:he,isItalic:be,isUnderline:me,handleAlignment:function(){return K(J+1)},alignment:xe,handleText:function(e){V.filter((function(t){return t.id===ne?(t.displayValue=e,t.value=e,oe(Object(i.a)(Object(i.a)({},re),{},{displayValue:e}))):t}))},displayValue:je}),"Rect"===G&&Object(O.jsx)(S,{fill:ve,stroke:ye,strokeWidth:Ce,handleFill:function(e){T.filter((function(t){if(t.id===ne)return t.fill=e,_e(Object(i.a)(Object(i.a)({},ge),{},{fill:t.fill}))}))},handleStroke:function(e){T.filter((function(t){if(t.id===ne)return t.stroke=e,_e(Object(i.a)(Object(i.a)({},ge),{},{stroke:t.stroke}))}))},handleStrokeWidth:function(e){T.filter((function(t){if(t.id===ne)return t.strokeWidth=e,_e(Object(i.a)(Object(i.a)({},ge),{},{strokeWidth:t.strokeWidth}))}))}})]})]})})))}}]);
//# sourceMappingURL=70.aac554b4.chunk.js.map