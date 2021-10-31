// Задача 1

var password
var checkPassword = (function(password) {
  password = 'IL0v3BeeRR'
  return function() {
    
    return password === 'IL0v3BeeRR' ? true : false
  }
})()
checkPassword()

// Задача 2

var n
var addeter = (function(n) {
  var m
  return function(m){
    n = 2
    m = 3
    return n + m
  }
})()

addeter()

// Задача 3

var increment = (function(){
  var counter = 10
  return function(){
    return !counter ? console.log('Отсчет окончен!') : console.log(--counter)
  }
})()

// Задача 4

var array = [1, 2, 3, 4, 5]

function getSum(array) {
  return (array.length === 0) ? 0 : array[0] + getSum(array.slice(1))
}

getSum(array)

// Задача 5 

function getRange(x, y) {
    var range = (function(){
        if(x === y){
            return y;
        } else if(x > y){
            return 'Start is bigger than end!';
        } else {
            return ([x].concat(getRange(++x, y))).join(', ');
        } 
    })()          

    return range
}

getRange(2, 8);

// Задача 6

var numbers = [1, 3, 5, 7, 9, 11, 28, 69]

function getMax(numbers){
  if(numbers.length > 2){
    numbers.splice(0, 1);
    return getMax([numbers[0], getMax(numbers)])
  } else {
    return numbers[0] >= numbers[1] ? numbers[0] : numbers[1]
  }
}
getMax(numbers)

// Задача 7

var object = {
  firstName: 'Oleg',
  lastName: 'Yerokhin',
  birthday: 'Jun 05 1991',
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(newFullName) {
    this.firstName = newFullName.substring(0, newFullName.indexOf(' '))
    this.lastName = newFullName.substring(newFullName.indexOf(' '))
  },
  get age() {
    return new Date(new Date() - new Date(this.birthday)).getFullYear() - 1970
  },
  set age(newBirthday) {
    var fullYear = new Date().getFullYear()
    this.birthday = this.birthday.substring(0, 7).concat(fullYear - newBirthday)
  }
}

// Задача 8

var product = {
  name: 'Car',
  id: 001,
  price: 25000,
  discount: 10,
  get discountPrice() {
    return this.price - this.price / 100 * this.discount
  },
  set discountPrice(newPrice) {
    this.price = newPrice + newPrice / 100 * this.discount
  }
}