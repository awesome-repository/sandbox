export function isKorean(text:string) {
  return /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text)
}

export function escapeStringRegexp(string:string='') {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')
}

export function capitalize(string:string) {
  
}