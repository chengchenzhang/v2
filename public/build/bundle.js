var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let s,u;function i(t,n){return s||(s=document.createElement("a")),s.href=n,t===s.href}function a(t,n){t.appendChild(n)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $(t){u=t}const h=[],b=[],y=[],_=[],x=Promise.resolve();let k=!1;function w(t){y.push(t)}let T=!1;const E=new Set;function v(){if(!T){T=!0;do{for(let t=0;t<h.length;t+=1){const n=h[t];$(n),S(n.$$)}for($(null),h.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];E.has(n)||(E.add(n),n())}y.length=0}while(h.length);for(;_.length;)_.pop()();k=!1,T=!1,E.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const A=new Set;function N(t,n){-1===t.$$.dirty[0]&&(h.push(t),k||(k=!0,x.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(c,s,i,a,f,d,p,g=[-1]){const m=u;$(c);const h=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:e(),dirty:g,skip_bound:!1,root:s.target||m.$$.root};p&&p(h.root);let b=!1;if(h.ctx=i?i(c,s.props||{},((t,n,...e)=>{const o=e.length?e[0]:n;return h.ctx&&f(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),b&&N(c,t)),n})):[],h.update(),b=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);h.fragment&&h.fragment.l(t),t.forEach(l)}else h.fragment&&h.fragment.c();s.intro&&((y=c.$$.fragment)&&y.i&&(A.delete(y),y.i(_))),function(t,e,c,s){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(e,c),s||w((()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(w)}(c,s.target,s.anchor,s.customElement),v()}var y,_;$(m)}function C(n){let e,o,r,c,s,u,$,h,b;return{c(){e=f("main"),o=f("h1"),r=d(n[0]),c=p(),s=f("p"),u=d(n[1]),$=p(),h=f("img"),i(h.src,b=n[2])||g(h,"src",b),g(h,"alt","doggo")},m(t,n){!function(t,n,e){t.insertBefore(n,e||null)}(t,e,n),a(e,o),a(o,r),a(e,c),a(e,s),a(s,u),a(e,$),a(e,h)},p(t,[n]){1&n&&m(r,t[0]),2&n&&m(u,t[1]),4&n&&!i(h.src,b=t[2])&&g(h,"src",b)},i:t,o:t,d(t){t&&l(e)}}}function F(t,n,e){let{contents:o}=n,{title:r="Untitled"}=n;r=r.toUpperCase();let{src:c}=n;return t.$$set=t=>{"contents"in t&&e(1,o=t.contents),"title"in t&&e(0,r=t.title),"src"in t&&e(2,c=t.src)},[r,o,c]}class O extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),j(this,t,F,C,c,{contents:1,title:0,src:2})}}new O({target:document.body,props:{title:"TFT for you and me",contents:"but mostly me",src:"./images/colored_head.png"}});const H=new O({target:document.body,props:{title:"How to Not Suck at TFT",contents:"Step 1: Don't be bad",src:"./images/doggo.png"}});return new O({target:document.body,props:{title:"How to Suck at TFT",contents:"Step 1: Tilt Roll",src:"./images/tilt.png"}}),H}();
//# sourceMappingURL=bundle.js.map
