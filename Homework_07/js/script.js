// Задача 1

function Fabrika(name, age) {
  this.name = name,
  this.age = age
}

var vasya = new Fabrika('Vasya', 25)
var igor = new Fabrika('Igor', 33)
var petya = new Fabrika('Petya', 44)

function askQuestion(greeting, question) {
  return `${greeting}, ${this.name}, ${question}`
}

askQuestion.apply(vasya, ['Hi', 'are you OK?'])
askQuestion.apply(igor, ["What's up", 'where are you?'])
askQuestion.apply(petya, ['Hey', 'can you call me?'])


// Задача 2

var rs3 = {
  name: 'Audi RS3',
  price: 35000
}

var challenger = {
  name: 'Dodge Challenger',
  price: 14000
}

var allroad = {
  name: 'Audi Allroad', 
  price: 7000
}

function getDiscountAmount(percent) {
  if(!this.price) return 'Price is unset!'
  return this.price / 100 * percent
}

var discountRs3 = getDiscountAmount.bind(rs3)
var discountChallenger = getDiscountAmount.bind(challenger)
var discountAllroad = getDiscountAmount.bind(allroad)

discountRs3(15)
discountChallenger(5)
discountAllroad(10)

// Задача 3

var figures = [
  {
    figureType: 'circle', 
    radius: 5
  },

  {
    figureType: 'circle', 
    radius: 7
  },

  {
    figureType: 'circle', 
    radius: 10
  },

  {
    figureType: 'circle', 
    radius: 15
  },

  {
    figureType: 'circle', 
    radius: 25
  },

  {
    figureType: 'rectangle',
    weight: 100,
    height: 50
  },

  {
    figureType: 'rectangle',
    weight: 40,
    height: 20
  },

  {
    figureType: 'rectangle',
    weight: 80,
    height: 15
  },

  {
    figureType: 'rectangle',
    weight: 25,
    height: 5
  },

  {
    figureType: 'rectangle',
    weight: 100,
    height: 25
  },
]

function checkFigure() {
  return this.figureType === 'circle' ? Math.pow(this.radius, 2) * Math.PI : this.weight * this.height
}

for(var i = 0; i < figures.length; i++) {
  console.log(`Figure area of figure №${i} is ${(checkFigure.call(figures[i])).toFixed(2)}`)
}


// Задача 4

function ProductCreator() {
  ProductCreator.prototype.instanceCounter = 0
  ProductCreator.prototype.showProductCreatorInstanceCounter = function() {
    ProductCreator.prototype.instanceCounter++
    if (this instanceof ProductCreator) {
      this.id = ProductCreator.prototype.instanceCounter
      return `ID: ${this.id}`
    }
  }
}


