export function throwError(errorOrMessage:Error|string):never {
  throw typeof errorOrMessage === 'string' 
    ? new Error(errorOrMessage)
    : errorOrMessage
}

