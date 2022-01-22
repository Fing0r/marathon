function calc(op, a, b) {
  return (checkError(op, a, b) ? 'Error' : operation(op, a, b))
}

function checkError(op, a, b) {
  const errorCheck = (typeof (a) !== 'number' || typeof (b) !== 'number' || !op)
  
  return errorCheck
}

function operation(op, a, b) {
  switch (op) {
    case 'sum':
      return a + b
    case 'subt':
      return a - b
    case 'multi':
      return a * b
    case 'div':
      return a / b
    case 'exp':
      return a ** b
    case 'rem':
      return a % b
    default:
      return 'unknown operation'
  }
}

console.log(calc('sum', 12, 13));