!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.toasty=e()}(this,function(){function t(t,e){void 0===e&&(e={}),Object.keys(e).forEach(function(o){t.style[o]=e[o]})}return function(e,o){var i;void 0===e&&(e=""),void 0===o&&(o={});var n="number"==typeof o?{duration:o}:o,r=n.className;void 0===r&&(r="");var a=n.duration;void 0===a&&(a=function(t){return 1e3*function(t){void 0===t&&(t="");var e=document.implementation.createHTMLDocument("New").body;return e.innerHTML=t,e.textContent||e.innerText||""}(t).split(" ").length/1.6}(e));var d=n.target;void 0===d&&(d="body");var u=n.offset;void 0===u&&(u=15);var c=n.styles;void 0===c&&(c={});var s=n.selector;void 0===s&&(s="just-toasty");var f=n.role;void 0===f&&(f="alert");var v=n.type;void 0===v&&(v="polite");var l=n.cb;void 0===l&&(l=function(){});var m=["top","right"],p=m[0],y=m[1],b=document.querySelector(d),x=document.createElement("div");x.setAttribute("role",f),x.setAttribute("aria-live",v),x.setAttribute("aria-atomic","true"),x.classList.add(s),r&&x.classList.add(r),x.innerHTML=e,t(x,Object.assign(((i={})[y]="15px",i.opacity=1,i.padding="1em 1.5em",i.zIndex=9999,i.color="#fff",i.background="rgba(0,0,10,0.8)",i.display="inline-block",i.position="fixed",i.borderRadius=".2em",i.top="-100px",i.fontFamily="inherit",i.transition="all 0.4s ease-out",i),c)),b.insertBefore(x,b.firstChild);var h=u;return document.querySelectorAll("."+s).forEach(function(e){var o,i=e.clientHeight;t(e,((o={})[p]=h+"px",o)),h+=i+u}),setTimeout(function(){var e;t(x,((e={})[y]="-"+x.offsetWidth+"px",e.opacity=0,e)),setTimeout(function(){x.remove(),l()},1e3)},a),x}});
//# sourceMappingURL=just-toasty.umd.js.map
