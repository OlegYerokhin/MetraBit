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
    return isNaN(this.firstOperand) || isNaN(this.secondOperand) ? 'Числа не заданы!' : this.firstOperand + this.secondOperand 
    
  },
  multiplyValues() {
    return isNaN(this.firstOperand) || isNaN(this.secondOperand) ? 'Числа не заданы!' : this.firstOperand * this.secondOperand
  }
}

// Задача 2

function CalculatorMaker(firstOperand = 0, secondOperand = 0) {
    this.firstOperand = firstOperand,
    this.secondOperand = secondOperand,
    this.history = []

}

CalculatorMaker.prototype.addition = function() {
  this.history.push(`${this.firstOperand} + ${this.secondOperand}`)
  return this.firstOperand + this.secondOperand
}

CalculatorMaker.prototype.subtraction = function() {
  this.history.push(`${this.firstOperand} - ${this.secondOperand}`)
  return this.firstOperand - this.secondOperand
}

CalculatorMaker.prototype.multiplication = function() {
  this.history.push(`${this.firstOperand} * ${this.secondOperand}`)
  return this.firstOperand * this.secondOperand
}

CalculatorMaker.prototype.division = function() {
  this.history.push(`${this.firstOperand} / ${this.secondOperand}`)
  return this.firstOperand / this.secondOperand
}

CalculatorMaker.prototype.showHistory = function() {
  return this.history.length ? console.log(`Список операций, выполненный этим экземпляром:\n${this.history.join('\n')}`) : console.log('Список операций пуст!') 
}