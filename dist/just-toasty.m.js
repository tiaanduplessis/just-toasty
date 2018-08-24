function css(elem, rules) {
    if ( rules === void 0 ) rules = {};

    Object.keys(rules).forEach(function (key) {
        elem.style[key] = rules[key];
    });
}

function toast(content, opts) {
    var obj, obj$1;

    if ( content === void 0 ) content = '';
    if ( opts === void 0 ) opts = {};
    var ref = typeof opts === 'number' ? {
        duration: opts
    } : opts;
    var className = ref.className; if ( className === void 0 ) className = '';
    var duration = ref.duration; if ( duration === void 0 ) duration = 3000;
    var target = ref.target; if ( target === void 0 ) target = 'body';
    var offset = ref.offset; if ( offset === void 0 ) offset = 15;
    var styles = ref.styles; if ( styles === void 0 ) styles = {};
    var selector = ref.selector; if ( selector === void 0 ) selector = 'just-toasty';
    var cb = ref.cb; if ( cb === void 0 ) cb = function () {};
    var ref$1 = ['top','right'];
    var vert = ref$1[0];
    var hor = ref$1[1];
    var targetElem = document.querySelector(target);
    var elem = document.createElement('div');
    elem.classList.add(selector);
    className && elem.classList.add(className);
    elem.innerHTML = content;
    css(elem, Object.assign(( obj = {}, obj[hor] = '15px', obj.opacity = 1, obj.padding = '1em 1.5em', obj.zIndex = 9999, obj.color = '#fff', obj.background = 'rgba(0,0,10,0.8)', obj.display = 'inline-block', obj.position = 'fixed', obj.borderRadius = '.2em', obj.top = '-100px', obj.fontFamily = 'inherit', obj.transition = 'all 0.4s ease-out', obj), styles));
    targetElem.insertBefore(elem, targetElem.firstChild);
    var topOffset = offset;
    document.querySelectorAll(("." + selector)).forEach(function (elem) {
        var height = elem.clientHeight;
        css(elem, ( obj$1 = {}, obj$1[vert] = topOffset + 'px', obj$1));
        topOffset += height + offset;
    });
    setTimeout(function () {
        var obj;

        var width = elem.offsetWidth;
        css(elem, ( obj = {}, obj[hor] = '-' + width + 'px', obj.opacity = 0, obj));
        setTimeout(function () {
            elem.remove();
            cb();
        }, 1000);
    }, duration);
    return elem;
}

export default toast;
//# sourceMappingURL=just-toasty.m.js.map
