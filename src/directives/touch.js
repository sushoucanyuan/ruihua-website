import {
  getStyle,
  setStyle
} from '@/utils/dom'

export default function (el, binding) {

  if (!el) return

  let page = 1
  let move = {
    x: 0,
    y: 0
  }

  let {
    x,
    y
  } = binding.modifiers

  el.addEventListener('mousedown', function (e) {

    e.preventDefault() // 用于防止选择文本

    let moved = false
    let {
      pageX,
      pageY
    } = e

    let rect = el.getBoundingClientRect()
    let parentrect = el.parentNode.getBoundingClientRect()

    let offsetX = rect.left - parentrect.left
    let offsetY = rect.top - parentrect.top

    let transform = getStyle(el, 'transform')

    if (transform === 'none') {
      transform = ''
    } else {
      transform += ' '
    }

    let translate = function (x = 0, y = 0) {

      let maxOffsetX = el.clientWidth - el.parentNode.clientWidth
      let maxOffsetY = el.clientHeight - el.parentNode.clientHeight

      if (offsetX + x < -maxOffsetX) {
        x = -maxOffsetX - offsetX
      } else if (offsetX + x > 0) {
        x = 0 - offsetX
      }

      if (offsetY + y < -maxOffsetY) {
        y = -maxOffsetY - offsetY
      } else if (offsetY + y > 0) {
        y = 0 - offsetY
      }

      if ((x != 0 || y != 0) && !moved) {
        moved = true
      }

      setStyle(el, {
        transform: transform + `translate(${x}px,${y}px)`
      })
    }

    let mousemove = function (e) {

      let newOffsetX = y ? 0 : e.pageX - pageX
      let newOffsetY = x ? 0 : e.pageY - pageY

      translate(newOffsetX, newOffsetY)
    }

    let mouseup = function (e) {
      let width = el.parentNode.clientWidth
      let newOffsetX = y ? 0 : e.pageX - pageX

      if (Math.abs(newOffsetX) > 10) {
        let target = newOffsetX
        let timer = setInterval(() => {
          if (newOffsetX > 0) {
            target += 20
            if (target > width) target = width
          } else if (newOffsetX < 0) {
            target -= 20
            if (target < -width) target = -width
          }
          if (Math.abs(target) == width) {
            clearInterval(timer)
          }
          translate(target)
        }, 5)
      }

      document.removeEventListener('mousemove', mousemove)
      document.removeEventListener('mouseup', mouseup)
    }

    let click = function (e) {
      moved && e.stopPropagation() // 用于阻止 click 事件
      document.removeEventListener('click', click, true)
    }

    document.addEventListener('mousemove', mousemove)
    document.addEventListener('mouseup', mouseup)
    document.addEventListener('click', click, true)
  })
}
