(function(){const Q=document.createElement("link").relList;if(Q&&Q.supports&&Q.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function y(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=y(o);fetch(o.href,t)}})();var te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oe(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}var ee={exports:{}};(function(h,Q){(function(y,s){h.exports=s()})(te,function(){return function(y){function s(t){if(o[t])return o[t].exports;var c=o[t]={exports:{},id:t,loaded:!1};return y[t].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}var o={};return s.m=y,s.c=o,s.p="dist/",s(0)}([function(y,s,o){function t(i){return i&&i.__esModule?i:{default:i}}var c=Object.assign||function(i){for(var j=1;j<arguments.length;j++){var z=arguments[j];for(var H in z)Object.prototype.hasOwnProperty.call(z,H)&&(i[H]=z[H])}return i},b=o(1),w=(t(b),o(6)),a=t(w),p=o(7),r=t(p),d=o(8),l=t(d),m=o(9),O=t(m),M=o(10),K=t(M),B=o(11),G=t(B),R=o(14),V=t(R),E=[],Y=!1,v={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},L=function(){var i=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(i&&(Y=!0),Y)return E=(0,G.default)(E,v),(0,K.default)(E,v.once),E},P=function(){E=(0,V.default)(),L()},n=function(){E.forEach(function(i,j){i.node.removeAttribute("data-aos"),i.node.removeAttribute("data-aos-easing"),i.node.removeAttribute("data-aos-duration"),i.node.removeAttribute("data-aos-delay")})},e=function(i){return i===!0||i==="mobile"&&O.default.mobile()||i==="phone"&&O.default.phone()||i==="tablet"&&O.default.tablet()||typeof i=="function"&&i()===!0},u=function(i){v=c(v,i),E=(0,V.default)();var j=document.all&&!window.atob;return e(v.disable)||j?n():(v.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),v.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",v.easing),document.querySelector("body").setAttribute("data-aos-duration",v.duration),document.querySelector("body").setAttribute("data-aos-delay",v.delay),v.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?L(!0):v.startEvent==="load"?window.addEventListener(v.startEvent,function(){L(!0)}):document.addEventListener(v.startEvent,function(){L(!0)}),window.addEventListener("resize",(0,r.default)(L,v.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(L,v.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,K.default)(E,v.once)},v.throttleDelay)),v.disableMutationObserver||l.default.ready("[data-aos]",P),E)};y.exports={init:u,refresh:L,refreshHard:P}},function(y,s){},,,,,function(y,s){(function(o){function t(e,u,i){function j(f){var S=_,W=A;return _=A=void 0,D=f,k=e.apply(W,S)}function z(f){return D=f,x=setTimeout(F,u),C?j(f):k}function H(f){var S=f-T,W=f-D,Z=u-S;return $?P(Z,N-W):Z}function I(f){var S=f-T,W=f-D;return T===void 0||S>=u||S<0||$&&W>=N}function F(){var f=n();return I(f)?U(f):void(x=setTimeout(F,H(f)))}function U(f){return x=void 0,g&&_?j(f):(_=A=void 0,k)}function X(){x!==void 0&&clearTimeout(x),D=0,_=T=A=x=void 0}function J(){return x===void 0?k:U(n())}function q(){var f=n(),S=I(f);if(_=arguments,A=this,T=f,S){if(x===void 0)return z(T);if($)return x=setTimeout(F,u),j(T)}return x===void 0&&(x=setTimeout(F,u)),k}var _,A,N,k,x,T,D=0,C=!1,$=!1,g=!0;if(typeof e!="function")throw new TypeError(d);return u=p(u)||0,b(i)&&(C=!!i.leading,$="maxWait"in i,N=$?L(p(i.maxWait)||0,u):N,g="trailing"in i?!!i.trailing:g),q.cancel=X,q.flush=J,q}function c(e,u,i){var j=!0,z=!0;if(typeof e!="function")throw new TypeError(d);return b(i)&&(j="leading"in i?!!i.leading:j,z="trailing"in i?!!i.trailing:z),t(e,u,{leading:j,maxWait:u,trailing:z})}function b(e){var u=typeof e>"u"?"undefined":r(e);return!!e&&(u=="object"||u=="function")}function w(e){return!!e&&(typeof e>"u"?"undefined":r(e))=="object"}function a(e){return(typeof e>"u"?"undefined":r(e))=="symbol"||w(e)&&v.call(e)==m}function p(e){if(typeof e=="number")return e;if(a(e))return l;if(b(e)){var u=typeof e.valueOf=="function"?e.valueOf():e;e=b(u)?u+"":u}if(typeof e!="string")return e===0?e:+e;e=e.replace(O,"");var i=K.test(e);return i||B.test(e)?G(e.slice(2),i?2:8):M.test(e)?l:+e}var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",l=NaN,m="[object Symbol]",O=/^\s+|\s+$/g,M=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,B=/^0o[0-7]+$/i,G=parseInt,R=(typeof o>"u"?"undefined":r(o))=="object"&&o&&o.Object===Object&&o,V=(typeof self>"u"?"undefined":r(self))=="object"&&self&&self.Object===Object&&self,E=R||V||Function("return this")(),Y=Object.prototype,v=Y.toString,L=Math.max,P=Math.min,n=function(){return E.Date.now()};y.exports=c}).call(s,function(){return this}())},function(y,s){(function(o){function t(n,e,u){function i(g){var f=q,S=_;return q=_=void 0,T=g,N=n.apply(S,f)}function j(g){return T=g,k=setTimeout(I,e),D?i(g):N}function z(g){var f=g-x,S=g-T,W=e-f;return C?L(W,A-S):W}function H(g){var f=g-x,S=g-T;return x===void 0||f>=e||f<0||C&&S>=A}function I(){var g=P();return H(g)?F(g):void(k=setTimeout(I,z(g)))}function F(g){return k=void 0,$&&q?i(g):(q=_=void 0,N)}function U(){k!==void 0&&clearTimeout(k),T=0,q=x=_=k=void 0}function X(){return k===void 0?N:F(P())}function J(){var g=P(),f=H(g);if(q=arguments,_=this,x=g,f){if(k===void 0)return j(x);if(C)return k=setTimeout(I,e),i(x)}return k===void 0&&(k=setTimeout(I,e)),N}var q,_,A,N,k,x,T=0,D=!1,C=!1,$=!0;if(typeof n!="function")throw new TypeError(r);return e=a(e)||0,c(u)&&(D=!!u.leading,C="maxWait"in u,A=C?v(a(u.maxWait)||0,e):A,$="trailing"in u?!!u.trailing:$),J.cancel=U,J.flush=X,J}function c(n){var e=typeof n>"u"?"undefined":p(n);return!!n&&(e=="object"||e=="function")}function b(n){return!!n&&(typeof n>"u"?"undefined":p(n))=="object"}function w(n){return(typeof n>"u"?"undefined":p(n))=="symbol"||b(n)&&Y.call(n)==l}function a(n){if(typeof n=="number")return n;if(w(n))return d;if(c(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=c(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(m,"");var u=M.test(n);return u||K.test(n)?B(n.slice(2),u?2:8):O.test(n)?d:+n}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r="Expected a function",d=NaN,l="[object Symbol]",m=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,M=/^0b[01]+$/i,K=/^0o[0-7]+$/i,B=parseInt,G=(typeof o>"u"?"undefined":p(o))=="object"&&o&&o.Object===Object&&o,R=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,V=G||R||Function("return this")(),E=Object.prototype,Y=E.toString,v=Math.max,L=Math.min,P=function(){return V.Date.now()};y.exports=t}).call(s,function(){return this}())},function(y,s){function o(p){var r=void 0,d=void 0;for(r=0;r<p.length;r+=1)if(d=p[r],d.dataset&&d.dataset.aos||d.children&&o(d.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!t()}function b(p,r){var d=window.document,l=t(),m=new l(w);a=r,m.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(p){p&&p.forEach(function(r){var d=Array.prototype.slice.call(r.addedNodes),l=Array.prototype.slice.call(r.removedNodes),m=d.concat(l);if(o(m))return a()})}Object.defineProperty(s,"__esModule",{value:!0});var a=function(){};s.default={isSupported:c,ready:b}},function(y,s){function o(d,l){if(!(d instanceof l))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var c=function(){function d(l,m){for(var O=0;O<m.length;O++){var M=m[O];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(l,M.key,M)}}return function(l,m,O){return m&&d(l.prototype,m),O&&d(l,O),l}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=function(){function d(){o(this,d)}return c(d,[{key:"phone",value:function(){var l=t();return!(!b.test(l)&&!w.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=t();return!(!a.test(l)&&!p.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();s.default=new r},function(y,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(c,b,w){var a=c.node.getAttribute("data-aos-once");b>c.position?c.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!w&&a!=="true")&&c.node.classList.remove("aos-animate")},t=function(c,b){var w=window.pageYOffset,a=window.innerHeight;c.forEach(function(p,r){o(p,a+w,b)})};s.default=t},function(y,s,o){function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(s,"__esModule",{value:!0});var c=o(12),b=t(c),w=function(a,p){return a.forEach(function(r,d){r.node.classList.add("aos-init"),r.position=(0,b.default)(r.node,p.offset)}),a};s.default=w},function(y,s,o){function t(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(s,"__esModule",{value:!0});var c=o(13),b=t(c),w=function(a,p){var r=0,d=0,l=window.innerHeight,m={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(d=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(a=document.querySelectorAll(m.anchor)[0]),r=(0,b.default)(a).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":r+=a.offsetHeight/2;break;case"bottom-bottom":r+=a.offsetHeight;break;case"top-center":r+=l/2;break;case"bottom-center":r+=l/2+a.offsetHeight;break;case"center-center":r+=l/2+a.offsetHeight/2;break;case"top-top":r+=l;break;case"bottom-top":r+=a.offsetHeight+l;break;case"center-top":r+=a.offsetHeight/2+l}return m.anchorPlacement||m.offset||isNaN(p)||(d=p),r+d};s.default=w},function(y,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(t){for(var c=0,b=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)c+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),b+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:b,left:c}};s.default=o},function(y,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(c){return{node:c}})};s.default=o}])})})(ee);var ne=ee.exports;const ie=oe(ne);ie.init({duration:800,once:!0,offset:50});document.querySelector("#app").innerHTML=`
  <div class="min-h-screen">
    <!-- Header -->
    <header class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a href="#" class="text-2xl font-bold text-primary">VK Solutions</a>
          <div class="hidden md:flex gap-6">
            <a href="#services" class="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" class="hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" class="hover:text-primary transition-colors">Контакты</a>
          </div>
          <button class="btn-primary">Связаться с нами</button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero-gradient min-h-screen flex items-center pt-20 pb-16">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span class="block mb-2">Websites that sell.</span>
            <span class="block mb-2">Designs that inspire.</span>
            <span class="block">Automation that works.</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            VK Solutions: IT-решения, которые двигают ваш бизнес вперёд.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary text-lg px-8 py-4">
              Получить консультацию
            </button>
            <button class="btn-primary text-lg px-8 py-4 bg-white text-primary border-2 border-primary hover:bg-gray-50">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section bg-white" id="services">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Что мы делаем</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${[{icon:"🌐",title:"Веб-разработка",description:"Создание эффективных и современных сайтов"},{icon:"📈",title:"SEO",description:"Оптимизация для поисковых систем и увеличение трафика"},{icon:"⚡",title:"Автоматизация",description:"Повышение эффективности бизнес-процессов"},{icon:"🎨",title:"Дизайн",description:"Уникальные и вдохновляющие визуальные решения"}].map(h=>`
            <div class="service-card" data-aos="fade-up">
              <span class="text-4xl mb-4">${h.icon}</span>
              <h3 class="text-xl font-semibold mb-4">${h.title}</h3>
              <p class="text-gray-600">${h.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Trust Section -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16" data-aos="fade-up">
            <h2 class="section-title">Нам доверяют</h2>
            <div class="flex flex-wrap justify-center gap-8 mb-16 opacity-60">
              <img src="https://placehold.co/120x40" alt="Client Logo" class="h-10">
              <img src="https://placehold.co/120x40" alt="Client Logo" class="h-10">
              <img src="https://placehold.co/120x40" alt="Client Logo" class="h-10">
              <img src="https://placehold.co/120x40" alt="Client Logo" class="h-10">
            </div>
            <blockquote class="text-xl italic text-gray-600">
              "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away."
              <footer class="mt-4 font-semibold">— Matthew Webster</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Наши преимущества</h2>
        <div class="grid md:grid-cols-3 gap-8">
          ${[{icon:"⚡",title:"Быстрая реализация",description:"Оперативное выполнение проектов любой сложности"},{icon:"🎯",title:"Индивидуальный подход",description:"Уникальные решения под ваши задачи"},{icon:"📊",title:"Реальные результаты",description:"Измеримые показатели эффективности"}].map(h=>`
            <div class="benefit-card" data-aos="fade-up">
              <span class="text-4xl mb-4">${h.icon}</span>
              <h3 class="text-xl font-semibold mb-4">${h.title}</h3>
              <p class="text-gray-600">${h.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section class="section bg-gray-50" id="portfolio">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Кейсы и результаты</h2>
        <div class="grid md:grid-cols-3 gap-8">
          ${[{image:"https://placehold.co/400x300",title:"E-commerce платформа",description:"Разработка масштабируемого онлайн-магазина"},{image:"https://placehold.co/400x300",title:"SEO-продвижение",description:"Рост органического трафика на 300%"},{image:"https://placehold.co/400x300",title:"Автоматизация процессов",description:"Сокращение времени обработки заказов на 70%"}].map(h=>`
            <div class="case-card" data-aos="fade-up">
              <img src="${h.image}" alt="${h.title}" class="w-full h-48 object-cover rounded-lg mb-4">
              <h3 class="text-xl font-semibold mb-2">${h.title}</h3>
              <p class="text-gray-600 mb-4">${h.description}</p>
            </div>
          `).join("")}
        </div>
        <div class="text-center mt-12">
          <button class="btn-primary">Подробнее о наших проектах</button>
        </div>
      </div>
    </section>

    <!-- Video Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <div class="aspect-w-16 aspect-h-9 mb-8" data-aos="fade-up">
            <img src="https://placehold.co/1920x1080" alt="Company Video Thumbnail" class="w-full rounded-xl shadow-lg">
          </div>
          <p class="text-xl text-gray-600" data-aos="fade-up">
            Посмотрите, как мы делаем бизнес успешным
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section bg-gray-50" id="contact">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <h2 class="section-title" data-aos="fade-up">
            Готовы вывести ваш бизнес на новый уровень?
          </h2>
          <div class="grid md:grid-cols-2 gap-12">
            <div class="contact-form" data-aos="fade-up">
              <form class="space-y-6">
                <div>
                  <label for="name" class="form-label">Имя</label>
                  <input type="text" id="name" class="form-input" required>
                </div>
                <div>
                  <label for="email" class="form-label">Email</label>
                  <input type="email" id="email" class="form-input" required>
                </div>
                <div>
                  <label for="message" class="form-label">Сообщение</label>
                  <textarea id="message" rows="4" class="form-input"></textarea>
                </div>
                <button type="submit" class="btn-primary w-full">Отправить</button>
              </form>
            </div>
            <div class="contact-info space-y-6" data-aos="fade-up">
              <div>
                <h3 class="text-lg font-semibold mb-2">Email</h3>
                <p class="text-gray-600">hello@vk-solutions.com</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Телефон</h3>
                <p class="text-gray-600">+1 317 711 105</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-2">Адрес</h3>
                <p class="text-gray-600">741 New South Head Rd, Triple Bay SWFW 3148, New York</p>
              </div>
              <div class="flex gap-4">
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">VK Solutions</h3>
            <p class="text-gray-400">Ваш надежный партнер в мире IT</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Навигация</h4>
            <div class="space-y-2">
              <a href="#services" class="block text-gray-400 hover:text-white transition-colors">Услуги</a>
              <a href="#portfolio" class="block text-gray-400 hover:text-white transition-colors">Портфолио</a>
              <a href="#contact" class="block text-gray-400 hover:text-white transition-colors">Контакты</a>
            </div>
          </div>
          <div class="text-right">
            <p class="text-gray-400">© VK Solutions, 2025</p>
            <p class="text-gray-400">Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
`;
