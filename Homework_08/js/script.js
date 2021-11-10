// Задача 1

  //setInterval

function showNum() {
  let firstNum = 1

  const nextNum = setInterval(() => {
    console.log(firstNum)
    firstNum === 20 ? clearInterval(nextNum) : firstNum++
  }, 1000)
}

showNum()

  //setTimeout

function showNum() {
  let firstNum = 1

  setTimeout(function nextNum() {
    console.log(firstNum)
    if (firstNum < 20) {
      setTimeout(nextNum, 1000)
    }
    firstNum++
  }, 1000) 
}

showNum()

function trafficLigth(red, yellow, green, turnedOn) {
  console.log('Светофор включен!')
  setTimeout(function trafficLightOn() {

    setTimeout(function redOn() {
      console.log('Горит красный!')

      setTimeout(function yellowOn() {
        console.log('Горит желтый!')

        setTimeout(function greenOn() {
          console.log('Горит зеленый!')

        }, green * 1000)
      }, yellow * 1000)
    }, red * 1000)

  })
  setTimeout(function trafficLightOff() {
    console.log('Светофор выключен!')
  }, turnedOn * 1000) 
  
}

trafficLight(1, 2, 3, 8)

// Задача 3

function makingBet() {
  const bet = prompt('Сделайте Вашу ставку!')
  console.log('Ваша ставка принята!')
  const randomNumber = (function(min, max) {
    min = -5
    max = 5
    return Math.floor(Math.random() * (max - min) + min)
  })()
  console.log(`Случайное число = ${randomNumber}`)

  const result = setTimeout(function winOrLoose(){
    randomNumber > 0 ? console.log(`Вы выиграли. Ваш выигрыш составляет ${bet * randomNumber}`) : console.log('Вы проиграли. Ваши деньги сгорели.')
  }, 3000)

  return result
}

makingBet()

// Задача 4

function StudentCreator() {
  StudentCreator.prototype.attendedСlassesList = []
  StudentCreator.prototype.setStudentPresent = function(date) {
    const year = date.substring(0, 4)
    const month = date.substring(5, 7)
    const day = date.substring(8, 10)

    const newDate = new Date(year, month, day, 0, 0, 0)
    const millisecs = Date.parse(newDate)

    return !StudentCreator.prototype.attendedСlassesList.includes(millisecs) ? StudentCreator.prototype.attendedСlassesList.push(millisecs) && console.log('Студент был успешно отмечен') : console.log('Студент уже был отмечен на эту дату')
  }
  StudentCreator.prototype.setStudentTodayPresent = function() {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()

    const newDate = new Date(year, month, day, 0, 0, 0)
    const millisecs = Date.parse(newDate)

    return !StudentCreator.prototype.attendedСlassesList.includes(millisecs) ? StudentCreator.prototype.attendedСlassesList.push(millisecs) && console.log('Студент был успешно отмечен') : console.log('Студент уже был отмечен на эту дату')
  }
  StudentCreator.prototype.checkAttendInDate = function(date) {
    const year = date.substring(0, 4)
    const month = date.substring(5, 7)
    const day = date.substring(8, 10)

    const newDate = new Date(year, month, day, 0, 0, 0)
    const millisecs = Date.parse(newDate)

    return !StudentCreator.prototype.attendedСlassesList.includes(millisecs) ? false : true
  }
  StudentCreator.prototype.showAllVisit = function() {
    return console.log(`Список дат посещения занятий:\n${StudentCreator.prototype.attendedСlassesList.join('\n')}`)
  }
}

// Задача 5

// COMING SOON