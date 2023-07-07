/**
 * 设置cookie
 * @param cookieName
 * @param value
 * @param expires 天数
 */
export function setCookie(cookieName: string, value: string, expires: number) {
  const d: Date = new Date()
  d.setDate(d.getDate() + expires)
  document.cookie = `${cookieName}=${encodeURIComponent(value)};expires=${d.toUTCString()}`
}

/**
 * 获取指定cookie
 */
export function getCookie(cookieName: string) {
  const reg = new RegExp(`(^| )${cookieName}=([^;]*)(;|$)`)
  const arr = document.cookie.match(reg)
  if (arr) return decodeURIComponent(arr[2])
  else return null
}

/**
 * 清除指定cookie
 * @param {string} cookieName
 */
export function clearCookie(cookieName: string) {
  setCookie(cookieName, '', -1)
}
