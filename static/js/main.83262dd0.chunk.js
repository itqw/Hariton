(this.webpackJsonpcsgoacademy=this.webpackJsonpcsgoacademy||[]).push([[0],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return ge}));var a=n(2),c=(n(155),n(180),n(0)),o=n.n(c),i=n(43),r=n.n(i),s=n(18),l=n(86),d=n(21),u=n(4),p=n(37),j="SET_PAGE",h="SET_STORY",O="GO_BACK",b="OPEN_POPOUT",v="CLOSE_POPOUT",y="OPEN_MODAL",f="CLOSE_MODAL",m=n(26),g=n.n(m),x="SET_COLOR_SCHEME",w="SET_ACCESS_TOKEN",_="SET_ACTIVE_TAB",S="SET_SCROLL_POSITION",k="SET_SCROLL_POSITION_BY_ID",H=function(e){return{type:w,payload:e}},A=function(){return function(e){return g.a.subscribe((function t(n){var a;"VKWebAppUpdateConfig"===n.detail.type&&(g.a.unsubscribe(t),e((a=n.detail.data.scheme,{type:x,payload:a})))})),g.a.send("VKWebAppInit",{}).then((function(e){return e})).catch((function(e){return e}))}},T=function(){return g.a.send("VKWebAppClose",{status:"success"}).then((function(e){return e})).catch((function(e){return e}))},P=function(){return g.a.send("VKWebAppEnableSwipeBack",{}).then((function(e){return e})).catch((function(e){return e}))},V=function(){return g.a.send("VKWebAppDisableSwipeBack",{}).then((function(e){return e})).catch((function(e){return e}))},C=function(e,t){return t.access_token=ge.getState().vkui.accessToken,t.v=void 0===t.v?"5.92":t.v,g.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then((function(e){return e.response})).catch((function(e){return e}))},E=function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))},M=function(e){var t=ge.getState().router.activePanel,n=ge.getState().router.panelsHistory;return"undefined"!==typeof n[e]&&(t=n[e][n[e].length-1]),t},I={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},B={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},G="SAVE_FORM_DATA",L={forms:[]},D=Object(s.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)({},e),{},{colorScheme:t.payload});case w:return Object(u.a)(Object(u.a)({},e),{},{accessToken:t.payload});case _:return Object(u.a)(Object(u.a)({},e),{},{activeTab:Object(u.a)(Object(u.a)({},e.activeTab),{},{[t.payload.component]:t.payload.tab})});case S:return Object(u.a)(Object(u.a)({},e),{},{componentScroll:Object(u.a)(Object(u.a)({},e.componentScroll),{},{[t.payload.component]:{x:t.payload.x,y:t.payload.y}})});case k:var n=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],a=n.scrollLeft,c=n.scrollTop;return Object(u.a)(Object(u.a)({},e),{},{componentScroll:Object(u.a)(Object(u.a)({},e.componentScroll),{},{[t.payload.component]:{x:a,y:c}})});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=t.payload.view,a=t.payload.panel;window.history.pushState(null,null);var c=e.panelsHistory[n]||[],o=e.viewsHistory[e.activeStory]||[],i=o.indexOf(n);return-1!==i&&o.splice(i,1),-1===c.indexOf(a)&&(c=[].concat(Object(p.a)(c),[a])),c.length>1&&P(),Object(u.a)(Object(u.a)({},e),{},{activeView:n,activePanel:a,panelsHistory:Object(u.a)(Object(u.a)({},e.panelsHistory),{},{[n]:c}),viewsHistory:Object(u.a)(Object(u.a)({},e.viewsHistory),{},{[e.activeStory]:[].concat(Object(p.a)(o),[n])}),scrollPosition:Object(u.a)(Object(u.a)({},e.scrollPosition),{},{[e.activeStory+"_"+e.activeView+"_"+e.activePanel]:window.pageYOffset})});case h:window.history.pushState(null,null);var r=e.viewsHistory[t.payload.story]||[t.payload.story],s=e.storiesHistory,l=r[r.length-1],d=e.panelsHistory[l]||[t.payload.initial_panel],m=d[d.length-1];if(t.payload.story===e.activeStory)if(d.length>1){var g=d.shift();m=(d=[g])[d.length-1]}else if(r.length>1){var x=r.shift();l=(r=[x])[r.length-1],m=(d=e.panelsHistory[l])[d.length-1]}t.payload.story===e.activeStory&&1===d.length&&window.pageYOffset>0&&(window.scrollTo(0,30),E());var w=s.indexOf(t.payload.story);return(-1===w||s[0]===t.payload.story&&s[s.length-1]!==t.payload.story)&&(s=[].concat(Object(p.a)(s),[t.payload.story])),Object(u.a)(Object(u.a)({},e),{},{activeStory:t.payload.story,activeView:l,activePanel:m,storiesHistory:s,viewsHistory:Object(u.a)(Object(u.a)({},e.viewsHistory),{},{[l]:r}),panelsHistory:Object(u.a)(Object(u.a)({},e.panelsHistory),{},{[l]:d}),scrollPosition:Object(u.a)(Object(u.a)({},e.scrollPosition),{},{[e.activeStory+"_"+e.activeView+"_"+e.activePanel]:window.pageYOffset})});case O:var _=e.activeView,S=e.activePanel,k=e.activeStory,H=e.popouts;if(H[_])return H[_]=null,Object(u.a)(Object(u.a)({},e),{},{popouts:Object(u.a)(Object(u.a)({},e.popouts),{},{popoutsData:H})});var A=e.modalHistory[_];if(void 0!==A&&0!==A.length){var C=A[A.length-2]||null;return null===C?A=[]:-1!==A.indexOf(C)?A=A.splice(0,A.indexOf(C)+1):A.push(C),Object(u.a)(Object(u.a)({},e),{},{activeModals:Object(u.a)(Object(u.a)({},e.activeModals),{},{[_]:C}),modalHistory:Object(u.a)(Object(u.a)({},e.modalHistory),{},{[_]:A})})}var M=e.panelsHistory[_]||[],B=e.viewsHistory[e.activeStory]||[],G=e.storiesHistory;if(M.length>1)M.pop(),S=M[M.length-1];else if(B.length>1){B.pop(),_=B[B.length-1];var L=e.panelsHistory[_];S=L[L.length-1]}else if(G.length>1){G.pop(),k=G[G.length-1],_=e.viewsHistory[k][e.viewsHistory[k].length-1];var D=e.panelsHistory[_];S=D.length>1?D[D.length-1]:D[0]}else T();return 1===M.length&&V(),Object(u.a)(Object(u.a)({},e),{},{activeView:_,activePanel:S,activeStory:k,viewsHistory:Object(u.a)(Object(u.a)({},e.viewsHistory),{},{[e.activeView]:B}),panelsHistory:Object(u.a)(Object(u.a)({},e.panelsHistory),{},{[e.activeView]:M})});case b:return window.history.pushState(null,null),Object(u.a)(Object(u.a)({},e),{},{popouts:Object(u.a)(Object(u.a)({},e.popouts),{},{[e.activeView]:t.payload.popout})});case v:return Object(u.a)(Object(u.a)({},e),{},{popouts:Object(u.a)(Object(u.a)({},e.popouts),{},{[e.activeView]:null})});case y:window.history.pushState(null,null);var z=t.payload.id||null,N=e.modalHistory[e.activeView]?Object(p.a)(e.modalHistory[e.activeView]):[];return null===z?N=[]:-1!==N.indexOf(z)?N=N.splice(0,N.indexOf(z)+1):N.push(z),Object(u.a)(Object(u.a)({},e),{},{activeModals:Object(u.a)(Object(u.a)({},e.activeModals),{},{[e.activeView]:z}),modalHistory:Object(u.a)(Object(u.a)({},e.modalHistory),{},{[e.activeView]:N})});case f:var W=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,K=e.modalHistory[e.activeView]?Object(p.a)(e.modalHistory[e.activeView]):[];return null===W?K=[]:-1!==K.indexOf(W)?K=K.splice(0,K.indexOf(W)+1):K.push(W),Object(u.a)(Object(u.a)({},e),{},{activeModals:Object(u.a)(Object(u.a)({},e.activeModals),{},{[e.activeView]:W}),modalHistory:Object(u.a)(Object(u.a)({},e.modalHistory),{},{[e.activeView]:K})});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(u.a)(Object(u.a)({},e),{},{forms:Object(u.a)(Object(u.a)({},e.forms),{},{[t.payload.form]:t.payload.data})});default:return e}}}),z=n(88),N=function(){return{type:O}},W=function(e){return{type:b,payload:{popout:e}}},K=function(){return{type:v}},R=function(e){return{type:y,payload:{id:e}}},F=function(){return{type:f}},J=(n(189),n(83),n(19)),U=n(20),Y=n(23),q=n(22),Q=n(5),X=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(J.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={showImg:!1},e.showImg=function(){e.setState({showImg:!0})},e}return Object(U.a)(n,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(Object(a.jsxs)(Q.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()},children:[Object(a.jsx)("h2",{children:"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442"}),Object(a.jsx)("p",{children:"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?"})]}))}},{key:"render",value:function(){var e=this.props,t=e.id;e.setPage,e.withoutEpic;return Object(a.jsxs)(Q.q,{id:t,children:[Object(a.jsx)(Q.r,{children:"\u0410\u043a\u0430\u0434\u0435\u043c\u0438\u044f CS:GO"}),Object(a.jsx)(Q.i,{children:Object(a.jsx)(Q.h,{children:Object(a.jsxs)(Q.e,{children:[Object(a.jsx)(Q.d,{id:"card_mechanics",size:"m",mode:"shadow",children:Object(a.jsx)("div",{id:"card_mechanics_parent",style:{height:96},children:Object(a.jsx)("div",{id:"card_mechanics_text",children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438 \u0438\u0433\u0440\u044b"})})}),Object(a.jsx)(Q.d,{id:"card_skins",size:"m",mode:"shadow",children:Object(a.jsx)("div",{id:"card_skins_parent",style:{height:96},children:Object(a.jsx)("div",{id:"card_skins_text",children:"\u0421\u043a\u0438\u043d\u044b"})})}),Object(a.jsx)(Q.d,{id:"card_info",size:"l",mode:"shadow",children:Object(a.jsx)("div",{id:"card_info_parent",style:{height:96},children:Object(a.jsx)("div",{id:"card_info_text",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0438 \u0434\u0440\u0443\u0433\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e\u0431 \u0438\u0433\u0440\u0435"})})}),Object(a.jsx)(Q.d,{id:"card_ranks",size:"l",mode:"shadow",children:Object(a.jsx)("div",{id:"card_ranks_parent",style:{height:96},children:Object(a.jsx)("div",{id:"card_ranks_text",children:"\u0412\u0441\u0451 \u043e \u0437\u0432\u0430\u043d\u0438\u044f\u0445 \u0438 \u0441\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435"})})}),Object(a.jsx)(Q.d,{id:"card_modes",size:"s",mode:"shadow",children:Object(a.jsx)("div",{id:"card_modes_parent",style:{height:96},children:Object(a.jsx)("div",{id:"card_modes_text",children:"\u0420\u0435\u0436\u0438\u043c\u044b"})})}),Object(a.jsx)(Q.d,{id:"card_test",size:"s",mode:"shadow",children:Object(a.jsx)("div",{id:"card_test_parent",style:{height:96},children:Object(a.jsx)("div",{id:"card_test_text",children:"\u0422\u0435\u0441\u0442\u044b"})})}),Object(a.jsx)(Q.d,{id:"card_tactic",size:"s",mode:"shadow",children:Object(a.jsx)("div",{id:"card_tactic_parent",style:{height:96},children:Object(a.jsx)("div",{id:"card_tactic_text",children:"\u0422\u0430\u043a\u0442\u0438\u043a\u0438"})})})]})})})]})}}]),n}(o.a.Component),Z={setPage:function(e,t){return{type:j,payload:{view:e,panel:t}}},goBack:N,openPopout:W,closePopout:K,openModal:R},$=Object(d.b)(null,Z)(X),ee=n(60),te=n.n(ee),ne=n(99),ae=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props,t=e.description,n=e.photo,c=e.name,o=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return Object(a.jsx)(Q.f,{description:o,before:Object(a.jsx)(Q.b,{size:40,src:n}),children:c})}}]),n}(c.PureComponent),ce=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map((function(e){return Object(a.jsx)(ae,{description:e.description,photo:e.photo_100,name:e.name},e.id)}))),t},oe=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(J.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},e}return Object(U.a)(n,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){g.a.send("VKWebAppGetAuthToken",{app_id:6984089,scope:e.join(",")}).then((function(e){t(H(e.access_token))})).catch((function(){t(H(null))}))}))}},{key:"componentDidUpdate",value:function(e,t,n){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e=Object(ne.a)(te.a.mark((function e(){var t,n,a;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){e.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),e.abrupt("return");case 3:return e.next=5,C("groups.get",{extended:"1",fields:"description",count:"100"});case 5:t=e.sent,n=t.items.filter((function(e){return 1===e.is_admin})),a=t.items.filter((function(e){return 0===e.is_admin})),localStorage.setItem("userGroupsAdmined",JSON.stringify(n)),localStorage.setItem("userGroupsOther",JSON.stringify(a)),this.setState({groups:{admined:n,other:a},loading:!1});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,n=t.id,c=t.goBack,o=ce(this.state.groups.admined),i=ce(this.state.groups.other);return Object(a.jsxs)(Q.q,{id:n,children:[Object(a.jsx)(Q.r,{left:Object(a.jsx)(Q.s,{onClick:function(){return c()}}),children:"\u0413\u0440\u0443\u043f\u043f\u044b"}),this.state.loading&&Object(a.jsx)(Q.u,{}),!this.state.loading&&this.state.errorGetAuthToken&&Object(a.jsxs)(Q.i,{children:[Object(a.jsx)(Q.h,{children:"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."}),Object(a.jsx)(Q.h,{children:Object(a.jsx)(Q.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()},children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"})})]}),!this.state.loading&&!this.state.errorGetAuthToken&&o&&Object(a.jsx)(Q.i,{header:Object(a.jsx)(Q.j,{mode:"secondary",children:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435"}),children:Object(a.jsx)(Q.m,{children:o})}),!this.state.loading&&!this.state.errorGetAuthToken&&i&&Object(a.jsx)(Q.i,{header:Object(a.jsx)(Q.j,{mode:"secondary",children:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"}),children:Object(a.jsx)(Q.m,{children:i})})]})}}]),n}(o.a.Component);var ie=Object(d.b)((function(e){return{accessToken:e.vkui.accessToken}}),(function(e){return Object(u.a)({dispatch:e},Object(s.bindActionCreators)({goBack:N,openPopout:W,closePopout:K,openModal:R},e))}))(oe),re=n(45),se=n.n(re),le=n(35),de=n.n(le),ue=n(44),pe=n.n(ue),je=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Realm of War",avatar:"https://sun9-72.userapi.com/c853520/v853520591/1f167d/avj_z9yFtQA.jpg?ava=1",desc:"\u041d\u0435\u043d\u0430\u0432\u0438\u0436\u0443 \u0441\u043f\u043e\u0439\u043b\u0435\u0440\u044b."}],he=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.onClose,c=e.openModal,o=e.platform;return Object(a.jsx)(Q.n,{id:t,header:Object(a.jsx)(Q.o,{left:o!==Q.k&&Object(a.jsx)(Q.t,{onClick:n,children:Object(a.jsx)(de.a,{})}),right:o===Q.k&&Object(a.jsx)(Q.t,{onClick:n,children:Object(a.jsx)(se.a,{})}),children:"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"}),onClose:n,settlingHeight:80,children:Object(a.jsx)(Q.m,{children:je.map((function(e,t){return Object(a.jsx)(Q.f,{description:e.desc,before:Object(a.jsx)(Q.b,{size:40,src:e.avatar}),onClick:function(){return c("MODAL_PAGE_BOT_INFO")},asideContent:Object(a.jsx)(pe.a,{fill:"#528bcc"}),children:e.name},t)}))})})}}]),n}(o.a.Component),Oe={openModal:R},be=Object(Q.x)(Object(d.b)(null,Oe)(he)),ve=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.onClose,c=e.platform;return Object(a.jsxs)(Q.n,{id:t,header:Object(a.jsx)(Q.o,{left:c!==Q.k&&Object(a.jsx)(Q.t,{onClick:n,children:Object(a.jsx)(de.a,{})}),right:c===Q.k&&Object(a.jsx)(Q.t,{onClick:n,children:Object(a.jsx)(se.a,{})}),children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"}),onClose:n,settlingHeight:80,children:[Object(a.jsx)(Q.f,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:Object(a.jsx)(Q.b,{size:40,src:"https://vk.com/images/community_100.png?ava=1"}),children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(a.jsxs)(Q.m,{children:[Object(a.jsx)(Q.f,{children:Object(a.jsx)(Q.l,{header:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432",children:"8800"})}),Object(a.jsx)(Q.f,{children:Object(a.jsx)(Q.l,{header:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439",children:"555"})}),Object(a.jsx)(Q.f,{children:Object(a.jsx)(Q.l,{header:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433",children:"3535"})})]})]})}}]),n}(o.a.Component),ye=Object(Q.x)(Object(d.b)()(ve)),fe=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(e){var a;return Object(J.a)(this,n),(a=t.call(this,e)).lastAndroidBackAction=0,a}return Object(U.a)(n,[{key:"componentWillMount",value:function(){var e=this,t=this.props,n=t.goBack;(0,t.dispatch)(A()),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,n()):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,n){var a=this.props,c=a.activeView,o=a.activeStory,i=a.activePanel,r=a.scrollPosition;if(e.activeView!==c||e.activePanel!==i||e.activeStory!==o){var s=r[o+"_"+c+"_"+i]||0;window.scroll(0,s)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,n=e.closeModal,c=e.popouts,o=e.activeView,i=e.activeModals,r=e.panelsHistory,s=e.colorScheme,l=void 0===r[o]?[o]:r[o],d=void 0===c[o]?null:c[o],u=void 0===i[o]?null:i[o],p=Object(a.jsxs)(Q.p,{activeModal:u,children:[Object(a.jsx)(be,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),Object(a.jsx)(ye,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}})]});return Object(a.jsx)(Q.g,{isWebView:!0,scheme:s,children:Object(a.jsxs)(Q.v,{activeView:o,popout:d,children:[Object(a.jsxs)(Q.w,{id:"home",modal:p,activePanel:M("home"),history:l,onSwipeBack:function(){return t()},children:[Object(a.jsx)($,{id:"base",withoutEpic:!0}),Object(a.jsx)(ie,{id:"groups"})]}),Object(a.jsx)(Q.w,{id:"modal",modal:p,activePanel:M("modal"),history:l,onSwipeBack:function(){return t()}})]})})}}]),n}(o.a.Component);var me=Object(d.b)((function(e){return{activeView:e.router.activeView,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}}),(function(e){return Object(u.a)({dispatch:e},Object(s.bindActionCreators)({goBack:N,closeModal:F},e))}))(fe),ge=Object(s.createStore)(D,Object(z.composeWithDevTools)(Object(s.applyMiddleware)(l.a)));ge.dispatch({type:h,payload:{story:"home",initial_panel:"base"}}),r.a.render(Object(a.jsx)(d.a,{store:ge,children:Object(a.jsx)(me,{})}),document.getElementById("root"))},83:function(e,t,n){}},[[200,1,2]]]);
//# sourceMappingURL=main.83262dd0.chunk.js.map