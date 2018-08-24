function css (elem, rules = {}) {
    Object.keys(rules).forEach(key => {
      elem.style[key] = rules[key]
    })
  }
  
  function toast (
    content = '',
    opts = {}
  ) {
    const {
      className = '',
      duration = 3000,
      target = 'body',
      offset = 15,
      styles = {},
      selector = 'just-toasty',
      cb = () => {}
    } = typeof opts === 'number' ? {duration: opts} : opts

    const [vert, hor] = ['top', 'right']
    const targetElem = document.querySelector(target)
    const elem = document.createElement('div')
    elem.classList.add(selector)
    className && elem.classList.add(className)
    elem.innerHTML = content
  
    css(
      elem,
      Object.assign(
        {
          [hor]: '15px',
          opacity: 1,
          padding: '1em 1.5em',
          zIndex: 9999,
          color: '#fff',
          background: 'rgba(0,0,10,0.8)',
          display: 'inline-block',
          position: 'fixed',
          borderRadius: '.2em',
          top: '-100px',
          fontFamily: 'inherit',
          transition: 'all 0.4s ease-out'
        },
        styles
      )
    )
  
    targetElem.insertBefore(elem, targetElem.firstChild)
  
    let topOffset = offset
  
    document.querySelectorAll(`.${selector}`).forEach(elem => {
      const height = elem.clientHeight
      css(elem, {
        [vert]: topOffset + 'px'
      })
      topOffset += height + offset
    })
  
    setTimeout(function () {
      const width = elem.offsetWidth
      css(elem, {
        [hor]: '-' + width + 'px',
        opacity: 0
      })
      setTimeout(() => {
        elem.remove()
        cb()
      }, 1000)
    }, duration)
  
    return elem
  }
  
  export default toast
  