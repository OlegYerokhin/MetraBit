// Задача 1

var user = {
  name: 'Повелитель',
}

user.sayHello = function(greeting = 'Добрый день') {
  if (typeof this.name === 'undefined') {
      return 'Имя пользователя не указано'
  } else if (typeof this.name !== 'string') {
    return 'Имя пользователя не указано'
  } else if (this.name === '') {
    return 'Имя пользователя не указано'  
  }

  return `${greeting}, ${this.name}!`
}

// Задача 2

var product = {
  name: 'iPhone',
  id: 7485,
  price: 1000
}

product.priceIncrease = function(percent) {
  var percent = prompt('Введите проценты для увеличения цены');

  return (this.price + (this.price / 100 * (percent)));
}

product.priceIncrease()

// Задача 3

function showStudentsFavoriteLessons(...args) {
  var lessons = ['Математика', 'История', 'Спорт', 'Литература', 'Биология', 'География']
  var students = Array.from(args)

  function checkStudentFavoriteLessons(students) {
	  for (var i = 0; i < students.length; i++) {
      var favLessons = []
      favLessons = lessons.slice(lessons.length - favoriteLessons)
      var favoriteLessons = Math.round((Math.random() * 10));

      if (favLessons.length > 0) {
        console.log(`${students[i]}: ${favLessons}`)
      } else {
        console.log(`${students[i]}: У этого студента нет любимых предметов`)
      }
    }
  }

  checkStudentFavoriteLessons(students)
}

showStudentsFavoriteLessons('John', 'Jack', 'James', 'Jimmy', 'Joe', 'Jane', 'Jared', 'Jill', 'Jackson', 'Jamal')

