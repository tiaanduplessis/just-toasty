function t(t,e){void 0===e&&(e={}),Object.keys(e).forEach(function(o){t.style[o]=e[o]})}module.exports=function(e,o){var i;void 0===e&&(e=""),void 0===o&&(o={});var r="number"==typeof o?{duration:o}:"function"==typeof o?{cb:o}:o,n=r.className;void 0===n&&(n="");var a=r.duration;void 0===a&&(a=function(t){return 1e3*function(t){void 0===t&&(t="");var e=document.implementation.createHTMLDocument("New").body;return e.innerHTML=t,e.textContent||e.innerText||""}(t).split(" ").length/1.6}(e));var d=r.target;void 0===d&&(d="body");var c=r.offset;void 0===c&&(c=15);var s=r.styles;void 0===s&&(s={});var u=r.selector;void 0===u&&(u="just-toasty");var v=r.role;void 0===v&&(v="alert");var l=r.type;void 0===l&&(l="polite");var f=r.cb;void 0===f&&(f=function(){});var m=["top","right"],p=m[0],y=m[1],b=document.querySelector(d),x=document.createElement("div");x.setAttribute("role",v),x.setAttribute("aria-live",l),x.setAttribute("aria-atomic","true"),x.classList.add(u),n&&x.classList.add(n),x.innerHTML=e,t(x,Object.assign(((i={})[y]="15px",i.opacity=1,i.padding="1em 1.5em",i.zIndex=9999,i.color="#fff",i.background="rgba(0,0,10,0.8)",i.display="inline-block",i.position="fixed",i.borderRadius=".2em",i.top="-100px",i.fontFamily="inherit",i.transition="all 0.4s ease-out",i),s)),b.insertBefore(x,b.firstChild);var g=c;return document.querySelectorAll("."+u).forEach(function(e){var o,i=e.clientHeight;t(e,((o={})[p]=g+"px",o)),g+=i+c}),setTimeout(function(){var e;t(x,((e={})[y]="-"+x.offsetWidth+"px",e.opacity=0,e)),setTimeout(function(){x.remove(),f()},1e3)},a),x};
//# sourceMappingURL=just-toasty.js.map
