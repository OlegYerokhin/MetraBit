// Задача 1

var object = {
  firstOperand: undefined,
  secondOperand: undefined,
  setValues() {
    first = +(prompt('Enter first operand')),
    second = +(prompt('Enter second operand'))
    this.firstOperand = first
    this.secondOperand = second    
  },
  sumValues() {
    return this.firstOperand + this.secondOperand
  },
  multiplyValues() {
    return this.firstOperand * this.secondOperand
  }
}