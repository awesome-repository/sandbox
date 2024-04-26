export function remove<T>(array:T[], value:T) {
  const idx = array.indexOf(value)

  if(idx >= 0 ) array.splice(idx, 1)
  
  return array
}

export function exclude<T>(array:T[], value:T) {
  return array.slice().filter(v => v!==value)
}
