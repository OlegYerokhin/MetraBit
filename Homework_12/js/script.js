// Задача 1

const cards = [
  '4567456745674567', 
  '4282428242824282', 
  '7224722472247224', 
  '8147814781478147'
]

function makeYourBet() {
  const bet = prompt('Сделайте Вашу ставку!')
  console.log('Ваша ставка принята!')
  return new Promise((resolve, reject) => {
    const randomNumber = (function(min, max) {
      min = -5
      max = 5
      return Math.floor(Math.random() * (max - min) + min)
    })()
    if(bet) {
      setTimeout(() => {
        randomNumber > 0 
          ? resolve({
            value: value = bet * randomNumber,
            message: `Вы выиграли. Ваш выигрыш составляет ${this.value}`
          }) 
          : reject('Вы проиграли. Ваши деньги сгорели.')
      }, 3000)
    }
  }).then((value) => {
    let sum = value.value;
    (function(sum) {
      const userCard = prompt('Введите номер карты, чтобы получить выигрыш!')
      return new Promise((resolve, reject) => {
        if(userCard) {
          setTimeout(() => {
            cards.includes(userCard) 
              ? resolve(`Ваш выигрыш в размере ${sum}, был выведен на карту с номером ${userCard}. Поздравляем!`) 
              : reject('Пользователя с таким номером не существует')
          }, 3000)
        }
      }).then((value) => console.log(value)).catch((value) => console.log(value))
    })(sum)
  }).catch((value) => console.log(value))
}

// Задача 2

function getPhoto() {
  const url = 'https://jsonplaceholder.typicode.com/photos'
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.send()
    request.onload = function(event) {
      event.target.status === 200 
        ? resolve(JSON.parse(this.response)) 
        : reject('Что-то пошло не так')
    }
  })
}

getPhoto().then((response) => {
  let responseArray = response
  let filtered = responseArray.filter(photo => photo.id === 1 || photo.id === 3 || photo.id === 5 || photo.id === 7 || photo.id === 9)
  let body = document.querySelector('body');
  (function() {
    for(let i = 0; i < filtered.length; i++) {
      let img = document.createElement('img')
      img.src = filtered[i].url
      body.appendChild(img)
    }
  })(filtered)
}).catch((response) => console.log(response))