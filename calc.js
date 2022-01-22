function calc(a, b, op) {
  return (checkError(a, b, op) ? 'error' : operation(a, b, op))
}

function checkError(a, b, op) {
  const errorCheck = (typeof (a) !== 'number' || typeof (b) !== 'number' || !op)
  const nanCheck = (a !== a || b !== b)

  return errorCheck || nanCheck
}

function operation(a, b, op) {
  switch (op) {
    case 'sum':
      return a + b
    case 'subt':
      return a - b
    case 'multi':
      return a * b
    case 'div':
      return (b === 0 ? 'На ноль делить нельзя' : a / b)
    case 'exp':
      return a ** b
    case 'rem':
      return (b === 0 ? 'На ноль делить нельзя' : a % b)
    default:
      return 'unknown operation'
  }
}

console.log(calc(123, 13, 'sum'));