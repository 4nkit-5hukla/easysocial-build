(this.webpackJsonpeasysocial=this.webpackJsonpeasysocial||[]).push([[120],{2211:function(e,n,t){e.exports={Plans:"Plans_Plans__3-9KL",Logo_Section:"Plans_Logo_Section__3hpy9",Form_Header:"Plans_Form_Header__3seno",Back_Btn:"Plans_Back_Btn__3iHXx",Header_Text:"Plans_Header_Text__3Uiog",Plan_Section:"Plans_Plan_Section__3nZvr",Table_Head:"Plans_Table_Head__3vwZX",Table_Content:"Plans_Table_Content__8Lzbh",Table_Price:"Plans_Table_Price__uTO2a",button:"Plans_button__2G1cM"}},2467:function(e,n,t){"use strict";t.r(n);var a=t(25),s=t(21),c=t(44),o=t(45),r=t(0),l=t(2211),i=t.n(l),u=t(219),d=t(43),_=t(18),h=t(38),p=t(108),j=t(201),b=t(2),f=function(e){Object(c.a)(t,e);var n=Object(o.a)(t);function t(e){var s;return Object(a.a)(this,t),(s=n.call(this,e)).getPlans=function(){s.props.startLoading();var e=h.a.collection("plans"),n=[];e.get().then((function(e){e.forEach((function(e){n.push(e.data())})),s.setState({plan:n}),s.props.cancelLoading()})).catch((function(e){s.props.error(e)}))},s.setPlanIdToLocalStorage=function(e){s.props.startLoading(),localStorage.getItem("planId"),localStorage.setItem("planId",e),s.props.cancelLoading()},s.state={plan:null,detail:null},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.authSteps(3),this.getPlans()}},{key:"componentWillUnmount",value:function(){this.setState=function(e,n){}}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("section",{className:i.a.Plans,children:[Object(b.jsx)(u.a,{}),Object(b.jsxs)("main",{children:[Object(b.jsxs)("div",{className:i.a.Form_Header,children:[Object(b.jsx)(p.a,{}),Object(b.jsx)("div",{className:i.a.Header_Text,children:Object(b.jsx)("h1",{children:"Choose a Plan"})})]}),Object(b.jsxs)("div",{className:i.a.Plan_Section,children:[Object(b.jsxs)("div",{className:i.a.Table_Head,children:[Object(b.jsx)("div",{}),this.state.plan&&this.state.plan.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:e.name})},e.name)}))]}),Object(b.jsxs)("div",{className:i.a.Table_Content,children:[Object(b.jsx)("div",{}),this.state.plan&&this.state.plan.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:0===e.amount?"free":e.amount})},e.amount)}))]}),Object(b.jsxs)("div",{className:i.a.Table_Price,children:[Object(b.jsx)("div",{}),this.state.plan&&this.state.plan.map((function(n){return Object(b.jsx)(j.a,{className:i.a.button,onClick:function(t){e.props.checkForAddress(),e.setPlanIdToLocalStorage(n.planId)},children:"Buy Now"},n.planId)}))]})]})]})]})}}]),t}(r.PureComponent);n.default=Object(d.b)((function(e){return{authStep:e.auth.currentCount,userId:e.auth.userId}}),(function(e){return{authSteps:function(n){return e(_.d(n))},checkForAddress:function(n){return e(_.f(n))},startLoading:function(){return e(_.T())},cancelLoading:function(){return e(_.e())},error:function(n){return e(_.n(n))}}}))(f)}}]);
//# sourceMappingURL=120.2745940d.chunk.js.map