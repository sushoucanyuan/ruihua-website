/**
 * 设置元素样式
 * 使用 cssText 来批量修改样式可提升性能
 * @param {element} elem 
 * @param {object} obj 
 */
export function setStyle(elem, obj) {
  let css = ''
  for (let attr in obj) {
    css += `${attr}:${obj[attr]};`
  }
  elem.style.cssText += css
}

/**
 * 获取元素样式
 * 使用 getComputedStyle 能获取所有定义的 CSS 样式值
 * @param {element} elem 
 * @param {string} style 
 */
export function getStyle(elem, style) {
  return window.getComputedStyle(elem, null).getPropertyValue(style)
}
