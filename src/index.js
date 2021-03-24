const WORDS_PER_SECOND = 1.6;
const ONE_SECOND = 1000;

function css(elem, rules = {}) {
  Object.keys(rules).forEach((key) => {
    elem.style[key] = rules[key];
  });
}

// https://stackoverflow.com/a/17980070/7027045
function stripHTML(html = "") {
  var tmp = document.implementation.createHTMLDocument("New").body;
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function getDurationBasedOnWords(content) {
  const words = stripHTML(content).split(" ");
  return (words.length * ONE_SECOND) / WORDS_PER_SECOND;
}

function toast(content = "", opts = {}) {
  const {
    className = "",
    duration = getDurationBasedOnWords(content),
    target = "body",
    offset = 15,
    styles = {},
    selector = "just-toasty",
    role = "alert",
    type = "polite",
    cb = () => {},
  } =
    typeof opts === "number"
      ? { duration: opts }
      : typeof opts === "function"
      ? { cb: opts }
      : opts;

  const [vert, hor] = [
    styles.bottom ? "bottom" : "top",
    styles.left ? "left" : "right",
  ];
  const targetElem = document.querySelector(target);
  const elem = document.createElement("div");

  elem.setAttribute("role", role);
  elem.setAttribute("aria-live", type);
  elem.setAttribute("aria-atomic", "true");

  elem.classList.add(selector);
  className && elem.classList.add(className);
  elem.innerHTML = content;

  css(
    elem,
    Object.assign(
      {
        [hor]: "15px",
        opacity: 1,
        padding: "1em 1.5em",
        zIndex: 9999,
        color: "#fff",
        background: "rgba(0,0,10,0.8)",
        display: "inline-block",
        position: "fixed",
        borderRadius: ".2em",
        top: "-100px",
        fontFamily: "inherit",
        transition: "all 0.4s ease-out",
      },
      styles
    )
  );

  targetElem.insertBefore(elem, targetElem.firstChild);

  let verticalOffset = offset;

  document.querySelectorAll(`.${selector}`).forEach((elem) => {
    const height = elem.clientHeight;
    css(elem, {
      [vert]: verticalOffset + "px",
    });
    verticalOffset += height + offset;
  });

  setTimeout(function () {
    const width = elem.offsetWidth;
    css(elem, {
      [hor]: "-" + width + "px",
      opacity: 0,
    });
    setTimeout(() => {
      elem.remove();
      cb();
    }, 1000);
  }, duration);

  return elem;
}

export default toast;
