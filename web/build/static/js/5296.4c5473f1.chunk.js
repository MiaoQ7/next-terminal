"use strict";(self.webpackChunknext_terminal=self.webpackChunknext_terminal||[]).push([[5296],{55296:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var r=n(9950),a=n(79378),i=n(9583),o=n(15325),l=n(71560),c=n(93766),s=n(34999),u=n(2883),d=n(17537),f=n(34317),v=n(78061),m=n(55928),p=n(23511),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const A=(0,r.forwardRef)((function(e,t){var n=e.chartRef,a=e.style,i=void 0===a?{height:"inherit"}:a,o=e.className,l=e.loading,c=e.loadingTemplate,s=e.errorTemplate,u=h(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),A=(0,f.A)(d.Fq,u),g=A.chart,y=A.container;return(0,r.useEffect)((function(){(0,v.x)(n,g.current)}),[g.current]),(0,r.useImperativeHandle)(t,(function(){return{getChart:function(){return g.current}}})),r.createElement(m.A,{errorTemplate:s},l&&r.createElement(p.A,{loadingTemplate:c,theme:e.theme}),r.createElement("div",{className:o,style:i,ref:y}))}));var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const y=(0,r.forwardRef)((function(e,t){var n=e.chartRef,a=e.style,i=void 0===a?{height:"inherit"}:a,o=e.className,l=e.loading,c=e.loadingTemplate,s=e.errorTemplate,u=g(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),h=(0,f.A)(d.N1,u),A=h.chart,y=h.container;return(0,r.useEffect)((function(){(0,v.x)(n,A.current)}),[A.current]),(0,r.useImperativeHandle)(t,(function(){return{getChart:function(){return A.current}}})),r.createElement(m.A,{errorTemplate:s},l&&r.createElement(p.A,{loadingTemplate:c,theme:e.theme}),r.createElement("div",{className:o,style:i,ref:y}))}));var b=n(64467),x=n(58168),w=n(82284),C=n(48738),j=n.n(C),E=n(5544),N=n(53986),S=n(89379);function O(e){var t=r.useRef();t.current=e;var n=r.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[]);return n}var R="undefined"!==typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,k=function(e,t){var n=r.useRef(!0);R((function(){return e(n.current)}),t),R((function(){return n.current=!1,function(){n.current=!0}}),[])},T=function(e,t){k((function(t){if(!t)return e()}),t)};const P=k;function M(e){var t=r.useRef(!1),n=r.useState(e),a=(0,E.A)(n,2),i=a[0],o=a[1];return r.useEffect((function(){return t.current=!1,function(){t.current=!0}}),[]),[i,function(e,n){n&&t.current||o(e)}]}function D(e){return void 0!==e}n(26429);function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.filter((function(e){return e}));return r.length<=1?r[0]:function(e){t.forEach((function(t){!function(e,t){"function"===typeof e?e(t):"object"===(0,w.A)(e)&&e&&"current"in e&&(e.current=t)}(t,e)}))}}var I=n(52435),V=function(e){return e?{left:e.offsetLeft,right:e.parentElement.clientWidth-e.clientWidth-e.offsetLeft,width:e.clientWidth}:null},z=function(e){return void 0!==e?"".concat(e,"px"):void 0};function L(e){var t=e.prefixCls,n=e.containerRef,a=e.value,i=e.getValueIndex,o=e.motionName,l=e.onMotionStart,c=e.onMotionEnd,s=e.direction,u=r.useRef(null),d=r.useState(a),f=(0,E.A)(d,2),v=f[0],m=f[1],p=function(e){var r,a=i(e),o=null===(r=n.current)||void 0===r?void 0:r.querySelectorAll(".".concat(t,"-item"))[a];return(null===o||void 0===o?void 0:o.offsetParent)&&o},h=r.useState(null),A=(0,E.A)(h,2),g=A[0],y=A[1],b=r.useState(null),x=(0,E.A)(b,2),w=x[0],C=x[1];P((function(){if(v!==a){var e=p(v),t=p(a),n=V(e),r=V(t);m(a),y(n),C(r),e&&t?l():c()}}),[a]);var N=r.useMemo((function(){return z("rtl"===s?-(null===g||void 0===g?void 0:g.right):null===g||void 0===g?void 0:g.left)}),[s,g]),O=r.useMemo((function(){return z("rtl"===s?-(null===w||void 0===w?void 0:w.right):null===w||void 0===w?void 0:w.left)}),[s,w]);return g&&w?r.createElement(I.Ay,{visible:!0,motionName:o,motionAppear:!0,onAppearStart:function(){return{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"}},onAppearActive:function(){return{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"}},onAppearEnd:function(){y(null),C(null),c()}},(function(e,n){var a=e.className,i=e.style,o=(0,S.A)((0,S.A)({},i),{},{"--thumb-start-left":N,"--thumb-start-width":z(null===g||void 0===g?void 0:g.width),"--thumb-active-left":O,"--thumb-active-width":z(null===w||void 0===w?void 0:w.width)}),l={ref:F(u,n),style:o,className:j()("".concat(t,"-thumb"),a)};return r.createElement("div",l)})):null}var U=["prefixCls","direction","options","disabled","defaultValue","value","onChange","className","motionName"];function W(e){return e.map((function(e){if("object"===(0,w.A)(e)&&null!==e){var t=function(e){return"undefined"!==typeof e.title?e.title:"object"!==(0,w.A)(e.label)?null===(t=e.label)||void 0===t?void 0:t.toString():void 0;var t}(e);return(0,S.A)((0,S.A)({},e),{},{title:t})}return{label:null===e||void 0===e?void 0:e.toString(),title:null===e||void 0===e?void 0:e.toString(),value:e}}))}var H=function(e){var t=e.prefixCls,n=e.className,a=e.disabled,i=e.checked,o=e.label,l=e.title,c=e.value,s=e.onChange;return r.createElement("label",{className:j()(n,(0,b.A)({},"".concat(t,"-item-disabled"),a))},r.createElement("input",{className:"".concat(t,"-item-input"),type:"radio",disabled:a,checked:i,onChange:function(e){a||s(e,c)}}),r.createElement("div",{className:"".concat(t,"-item-label"),title:l},o))},q=r.forwardRef((function(e,t){var n,a,i=e.prefixCls,o=void 0===i?"rc-segmented":i,l=e.direction,c=e.options,s=e.disabled,u=e.defaultValue,d=e.value,f=e.onChange,v=e.className,m=void 0===v?"":v,p=e.motionName,h=void 0===p?"thumb-motion":p,A=(0,N.A)(e,U),g=r.useRef(null),y=r.useMemo((function(){return F(g,t)}),[g,t]),w=r.useMemo((function(){return W(c)}),[c]),C=function(e,t){var n=t||{},r=n.defaultValue,a=n.value,i=n.onChange,o=n.postState,l=M((function(){return D(a)?a:D(r)?"function"===typeof r?r():r:"function"===typeof e?e():e})),c=(0,E.A)(l,2),s=c[0],u=c[1],d=void 0!==a?a:s,f=o?o(d):d,v=O(i),m=M([d]),p=(0,E.A)(m,2),h=p[0],A=p[1];return T((function(){var e=h[0];s!==e&&v(s,e)}),[h]),T((function(){D(a)||u(a)}),[a]),[f,O((function(e,t){u(e,t),A([d],t)}))]}(null===(n=w[0])||void 0===n?void 0:n.value,{value:d,defaultValue:u}),R=(0,E.A)(C,2),k=R[0],P=R[1],I=r.useState(!1),V=(0,E.A)(I,2),z=V[0],q=V[1],X=function(e,t){s||(P(t),null===f||void 0===f||f(t))},_=function(e,t){var n=(0,S.A)({},e);return Array.isArray(t)&&t.forEach((function(e){delete n[e]})),n}(A,["children"]);return r.createElement("div",(0,x.A)({},_,{className:j()(o,(a={},(0,b.A)(a,"".concat(o,"-rtl"),"rtl"===l),(0,b.A)(a,"".concat(o,"-disabled"),s),a),m),ref:y}),r.createElement("div",{className:"".concat(o,"-group")},r.createElement(L,{prefixCls:o,value:k,containerRef:g,motionName:"".concat(o,"-").concat(h),direction:l,getValueIndex:function(e){return w.findIndex((function(t){return t.value===e}))},onMotionStart:function(){q(!0)},onMotionEnd:function(){q(!1)}}),w.map((function(e){return r.createElement(H,(0,x.A)({key:e.value,prefixCls:o,className:j()(e.className,"".concat(o,"-item"),(0,b.A)({},"".concat(o,"-item-selected"),e.value===k&&!z)),checked:e.value===k,onChange:X},e,{disabled:!!s||!!e.disabled}))}))))}));q.displayName="Segmented",q.defaultProps={options:[]};const X=q;var _=n(5741),B=n(87126),K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const Q=r.forwardRef((function(e,t){var n,a=e.prefixCls,i=e.className,o=e.block,l=e.options,c=void 0===l?[]:l,s=e.size,u=void 0===s?"middle":s,d=K(e,["prefixCls","className","block","options","size"]),f=r.useContext(_.QO),v=f.getPrefixCls,m=f.direction,p=v("segmented",a),h=r.useContext(B.A),A=u||h,g=r.useMemo((function(){return c.map((function(e){if(function(e){return"object"===(0,w.A)(e)&&!!(null===e||void 0===e?void 0:e.icon)}(e)){var t=e.icon,n=e.label,a=K(e,["icon","label"]);return(0,x.A)((0,x.A)({},a),{label:r.createElement(r.Fragment,null,r.createElement("span",{className:"".concat(p,"-item-icon")},t),n&&r.createElement("span",null,n))})}return e}))}),[c,p]);return r.createElement(X,(0,x.A)({},d,{className:j()(i,(n={},(0,b.A)(n,"".concat(p,"-block"),o),(0,b.A)(n,"".concat(p,"-sm"),"small"===A),(0,b.A)(n,"".concat(p,"-lg"),"large"===A),n)),options:g,ref:t,prefixCls:p,direction:m}))}));var G=n(44414);class J extends r.Component{constructor(){super(...arguments),this.state={counter:{onlineUser:0,totalUser:0,activeAsset:0,totalAsset:0,failLoginCount:0,offlineSession:0},asset:{ssh:0,rdp:0,vnc:0,telnet:0,kubernetes:0},dateCounter:[]},this.getCounter=async()=>{let e=await c.A.get("/overview/counter");1===e.code&&this.setState({counter:e.data})},this.getDateCounter=async e=>{let t=await c.A.get("/overview/date-counter?d="+e);1===t.code&&this.setState({dateCounter:t.data})},this.getAsset=async()=>{let e=await c.A.get("/overview/asset");1===e.code&&this.setState({asset:e.data})},this.handleChangeDateCounter=e=>{"\u6309\u5468"===e?this.getDateCounter("week"):this.getDateCounter("month")}}componentDidMount(){this.getCounter(),this.getAsset(),this.getDateCounter("week")}componentWillUnmount(){}render(){const e={width:200,height:200,appendPadding:10,data:[{type:"RDP",value:this.state.asset.rdp},{type:"SSH",value:this.state.asset.ssh},{type:"TELNET",value:this.state.asset.telnet},{type:"VNC",value:this.state.asset.vnc},{type:"Kubernetes",value:this.state.asset.kubernetes}],angleField:"value",colorField:"type",radius:1,innerRadius:.6,label:{type:"inner",offset:"-50%",content:"{value}",style:{textAlign:"center",fontSize:14}},interactions:[{type:"element-selected"},{type:"element-active"}],statistic:{title:!1,content:{formatter:()=>"\u8d44\u4ea7\u7c7b\u578b",style:{fontSize:18}}}},t={height:270,data:this.state.dateCounter,xField:"date",yField:"value",seriesField:"type",legend:{position:"top"},smooth:!0,animation:{appear:{animation:"path-in",duration:5e3}}};return(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)("div",{style:{margin:16},children:[(0,G.jsx)(s.A,{title:"\u6570\u636e\u6982\u89c8",split:"horizontal",headerBordered:!0,bordered:!0,children:(0,G.jsxs)(s.A,{split:"vertical",children:[(0,G.jsxs)(s.A,{split:"horizontal",children:[(0,G.jsxs)(s.A,{split:"vertical",children:[(0,G.jsx)(u.A,{statistic:{title:"\u5728\u7ebf\u7528\u6237",value:this.state.counter.onlineUser+"/"+this.state.counter.totalUser,prefix:(0,G.jsx)(a.A,{})}}),(0,G.jsx)(u.A,{statistic:{title:"\u8fd0\u884c\u4e2d\u8d44\u4ea7",value:this.state.counter.activeAsset+"/"+this.state.counter.totalAsset,prefix:(0,G.jsx)(i.A,{})}})]}),(0,G.jsxs)(s.A,{split:"vertical",children:[(0,G.jsx)(u.A,{statistic:{title:"\u767b\u5f55\u5931\u8d25\u6b21\u6570",value:this.state.counter.failLoginCount,prefix:(0,G.jsx)(o.A,{})}}),(0,G.jsx)(u.A,{statistic:{title:"\u5386\u53f2\u4f1a\u8bdd\u603b\u6570",value:this.state.counter.offlineSession,prefix:(0,G.jsx)(l.A,{})}})]})]}),(0,G.jsx)(s.A,{className:"pie-card",children:(0,G.jsx)(s.A,{children:(0,G.jsx)(A,{...e})})})]})}),(0,G.jsx)(s.A,{title:"\u4f1a\u8bdd\u7edf\u8ba1",style:{marginTop:16},extra:(0,G.jsx)(Q,{options:["\u6309\u5468","\u6309\u6708"],onChange:this.handleChangeDateCounter}),children:(0,G.jsx)(y,{...t})})]})})}}const Y=J}}]);