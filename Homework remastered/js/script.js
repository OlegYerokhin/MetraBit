// Задача 2.2

// Создать объект product, со следующими полями:
// name: ‘iPhone’,
// id: 7485,
// price: 1000
// Написать метод этого объекта который в качестве аргумента принимает число (количество процентов, на которое нужно увеличить свойство ‘price’).
// Увеличить свойство ‘price’ на заданное количество процентов используя this.
// Вернуть новое значение свойства ‘price’.


var product = {
  name: 'iPhone',
  id: 7485,
  price: 1000
}


product.priceIncrease = function() {
  var percent = prompt('Введите проценты для увеличения цены')

  this.price = (this.price + (this.price / 100 * (percent)))
  return this.price
}

product.priceIncrease()

// Задача 3.3

// Написать функцию, которая принимает в качестве аргумента строку произвольной длины и число (n) – до какого символа обрезать строку.
// Реализуйте сравнение длины строки и переданного вторым аргументом числа. Если длина строки превышает n, то вернуть строку, состоящую из первых n символов строки и добавить троеточия в конце. Если меньше, вернуть начальную строку, в которой, заменены все пробелы на “-” и первая и последняя буквы являются заглавными.

function havingFunWithStrings(string, number) {
  var argString = string
  var devider = number

  function stringIsLonger() {
    argString.split('')
    var result = argString.slice(0, devider)
    result = `${result}...`

    return result
  }

  function deviderIsBigger() {
    var stringArr = argString.split(' ')
    var firstElement = stringArr.shift()
    var lettersArr = firstElement.split('')
    lettersArr[0] = lettersArr[0].toUpperCase()
    lettersArr = lettersArr.join('')
    stringArr.unshift(lettersArr)
    var lastElement = stringArr.pop()
    var lastWordArr = lastElement.split('')
    var lastSymbol = lastWordArr.slice(-1)
    lastSymbol = lastSymbol.toString().toUpperCase() 
    lastWordArr.pop()
    lastWordArr.push(lastSymbol)  
    lastElement = lastWordArr.join('')
    stringArr.push(lastElement)
    stringArr = stringArr.join('-')
    return stringArr
  }

  var result = devider > argString.length ? deviderIsBigger() : stringIsLonger()

  return result
}

havingFunWithStrings('this string have length 30 xxx', 33)

// Задача 5.1

// Создайте IIFE, которое получает пароль в аргументе и возвращает внутреннюю функцию, которая в качестве аргумента принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и faulse – если не совпадает. Для сохранения результата IIFE создайте переменную checkPassword.

var password = 'IL0v3BeeRR'
var checkPassword = (function(passForCheck) {
  
  return function(checkStr) {
    return checkStr === password
  }
})()
checkPassword()

// Задача 5.2

// Создайте IIFE, которое получает число n (начальное значение) в качестве аргумента родительской функции и возвращает функцию, которая получает число, прибавляет его к n, которое находится в замыкании, и возвращает результат. Для сохранения результата IIFE создайте переменную addeter.

var addeter = ((function(n) {
  return function(m){
    return n + m
  }
})(+prompt('Enter first number!')))

addeter(+prompt('Enter second number!'))

// Задача 9.8

// Напишите функцию, которая принимает массив с вложенными массивами и возвращает одномерный (плоский) массив.

const arr = [[1, 2], [3, 4], [5, 6, 7], [8, 9]]

function alignArray(arr) {
  const aligned = arr.reduce(function(firstValue, nextValue) {
    return firstValue.concat(nextValue)
  })
  return aligned
}
alignArray(arr)