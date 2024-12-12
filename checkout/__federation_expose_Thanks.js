"use strict";(self.webpackChunkcheckout=self.webpackChunkcheckout||[]).push([["395"],{169:function(e,t,n){n.r(t);var r=n(417),o=n(226),a=n(368),c=n(979),i=n.n(c),u=n(307);n(15);function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r,o,a;r=e,o=t,a=n[t],o in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var p=window.getComponent("explore/Header"),m=window.getComponent("explore/Footer"),d={particleCount:3,scalar:1.5,colors:["#FFDE54","#FF5A54","#54FF90"],spread:70};t.default=(0,a.Z)({React:r,ReactDOMClient:o,rootComponent:function(){return r.useEffect(function(){var e=Date.now()+1e3;!function t(){i()(l(s({},d),{angle:60,origin:{x:0}})),i()(l(s({},d),{angle:120,origin:{x:1}})),Date.now()<e&&window.requestAnimationFrame(t)}()},[]),r.createElement("div",{"data-boundary-page":"checkout"},r.createElement(p,null),r.createElement("main",{className:"c_Thanks"},r.createElement("h2",{className:"c_Thanks__title"},"Thanks for your order!"),r.createElement("p",{className:"c_Thanks__text"},"We'll notify you, when its ready for pickup."),r.createElement(u.Z,{href:"/",variant:"secondary"},"Continue Shopping")),r.createElement(m,null))},errorBoundary:function(){return r.createElement("div",null,"Thanks failed!")}})},307:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(417);function o(e){var t=e.href,n=e.type,o=e.value,a=e.disabled,c=e.rounded,i=e.className,u=e.children,s=e.dataId,l=e.size,p=e.variant,m=e.title;return r.createElement(t?"a":"button",{disabled:a,href:t,type:n,value:o,title:m,"data-id":s||void 0,className:"c_Button c_Button--".concat(void 0===p?"secondary":p," ").concat(void 0===i?"":i," ").concat(c?"c_Button--rounded":""," c_Button--size-").concat(void 0===l?"normal":l)},r.createElement("div",{className:"c_Button__inner"},u))}},383:function(e,t,n){n.r(e.exports={})},176:function(e,t,n){n.r(e.exports={})},651:function(e,t,n){n.r(e.exports={})},705:function(e,t,n){n.r(e.exports={})},208:function(e,t,n){n.r(e.exports={})},309:function(e,t,n){n.r(e.exports={})},424:function(e,t,n){n.r(e.exports={})},810:function(e,t,n){n.r(e.exports={})},15:function(e,t,n){e.exports={}},368:function(e,t,n){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){(function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:function(){return l}});function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(c(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(c(e)));return e}}var u=null;try{u=require("react").createContext()}catch(e){}var s={React:null,ReactDOM:null,ReactDOMClient:null,rootComponent:null,loadRootComponent:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{},unmountResolves:{}};function l(e){if("object"!==a(e))throw Error("single-spa-react requires a configuration object");var t,n=o(o({},s),e);if(!n.React)throw Error("single-spa-react must be passed opts.React");if(!n.ReactDOM&&!n.ReactDOMClient)throw Error("single-spa-react must be passed opts.ReactDOM or opts.ReactDOMClient");if(n.renderType||(null!==(t=n.ReactDOMClient)&&void 0!==t&&t.createRoot?n.renderType="createRoot":n.renderType="render"),!n.rootComponent&&!n.loadRootComponent)throw Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(n.errorBoundary&&"function"!=typeof n.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!u&&n.React.createContext&&(u=n.React.createContext()),n.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(n);var r={bootstrap:p.bind(null,n),mount:m.bind(null,n),unmount:d.bind(null,n)};return n.parcelCanUpdate&&(r.update=f.bind(null,n)),r}function p(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then(function(t){e.rootComponent=t})}function m(e,t){return new Promise(function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||e.errorBoundaryClass||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=h(e,t,function(){n(this)}),a=i(e,t)(),c=function(e){var t=e.reactDom,n=e.renderType,r=e.elementToRender,o=e.domElement,a=t[n];if("function"!=typeof a)throw Error('renderType "'.concat(n,'" did not return a function.'));switch(n){case"createRoot":case"unstable_createRoot":case"createBlockingRoot":case"unstable_createBlockingRoot":var c=a(o);return c.render(r),c;case"hydrateRoot":return a(o,r);default:return a(r,o),null}}({elementToRender:o,domElement:a,reactDom:y(e),renderType:function(e){return"function"==typeof e.renderType?e.renderType():e.renderType}(e)});e.domElements[t.name]=a,e.renderResults[t.name]=c})}function d(e,t){return new Promise(function(n){e.unmountResolves[t.name]=n;var r=e.renderResults[t.name];r&&r.unmount?r.unmount():y(e).unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]})}function f(e,t){return new Promise(function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var r=h(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(r);else{var a=i(e,t)();y(e).render(r,a)}})}function y(e){return e.ReactDOMClient||e.ReactDOM}function h(e,t,n){var r=e.React.createElement(e.rootComponent,t),a=u?e.React.createElement(u.Provider,{value:t},r):r;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),a=e.React.createElement(e.SingleSpaRoot,o(o({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach(function(e){return e()}),delete e.updateResolves[t.name])},unmountFinished:function(){e.unmountResolves[t.name]&&(e.unmountResolves[t.name](),delete e.unmountResolves[t.name])}}),a)}}}]);
//# sourceMappingURL=__federation_expose_Thanks.js.map