export function isString() {}

export function isUndefined(val:unknown):val is undefined {
  return val === undefined
}

export function isBoolean(val:unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isNumber(val:unknown): val is number {
  return typeof val === 'number'
}

export function isArray(val:unknown) {
  return Array.isArray(val)
}

export function isObject(val:unknown) {
  return typeof val === 'object' && val !== null
}

export function isEmpty() {

}

export function isStringNumber() {}
