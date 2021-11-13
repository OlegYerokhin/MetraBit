// Задача 1

const arr = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121]

function getSquareRoot(arr) {
  let even = []
  arr.map(a => {
    if(a % 2 === 0) {
      even.push(Math.sqrt(a))
    }
  })
  const evenSqrtSum = even.reduce(function(accumulator, value) {
    return accumulator + value
  })

  return console.log(evenSqrtSum)
}

// Задача 2

const arr = [1, 2, 3, 4, 5, 6, 7]

function getNumberOfNumbers(arr) {
  let numbers = []
  const sumOfNumbers = arr.reduce(function(accumulator, previousValue) {
    if(accumulator <= 20) {
      numbers.push(previousValue)
      accumulator +=previousValue
    }
    return accumulator
  }, 0)

  return sumOfNumbers > 20 ? `Для получения суммы более 20 необходимо ${numbers.length} элементов массива` : 'Чисел в массиве недостаточно!'
}

getNumberOfNumbers(arr)

// Задача 3

const arr = ['some','strings','with','different','number','of','symbols']

// через filter

function getLongStrings(arr) {
  return arr.filter(word => word.length > 5)
}

// через reduce

function getLongStrings(arr) {
  let words = arr.reduce(function(accumulator, value) {
    if(value.length > 5){
      accumulator.push(value)
    }
    return accumulator
  }, [])
  return words
}



// Задача 4

const arr = [1, 2, 3, 4, 0, 5, 6, 7, 8]

function getSumBeforeZero(arr) {
  if(!arr.includes(0)) {
    return 'Переданный массив не содержит нулей'
  } 

  const zeroIndex = arr.indexOf(0)
  const sum = arr.slice(0, zeroIndex).reduce((accumulator, value) => accumulator + value)
  return sum
}

// Задача 5

const studentsMarks  = [
  {
    name: 'John', 
    id: 123, 
    mark : 98 
  },
  {
    name: 'Baba',
    id: 101, 
    mark : 23 
  },
  {
    name: 'yaga', 
    id: 200, 
    mark : 45 
  },
  {
    name: 'Wick', 
    id: 115, 
    mark : 75 
  }
]

function getNameInUpperCase(studentsMarks) {
  const names = studentsMarks.map(student => (student.name).toUpperCase())
  return names
}

function getCleverStudents(studentsMarks) {
  const cleverStudents = studentsMarks.filter(student => {
    if(student.mark > 50 && student.id > 120) {
      return student.name
    }
  })
  const name = cleverStudents.map(student => student.name)
  return name
}

function getSumMark(studentsMarks) {
  const sumMark = studentsMarks.reduce((accumulator, nextMark) => accumulator + nextMark.mark, 0)
  return sumMark
}

function getEncouragedStudents(studentsMarks) {
  const encourage = studentsMarks.reduce(function(nameArr, nextValue) {
    if ((nextValue.mark + 15) > 50) {
      nameArr.push(nextValue.name);
    }
    return nameArr  
  }, [])
  return encourage
}

// Задача 6

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function getSumOfNumbers(arr) {
  let total = 0
  let array = []
  arr.forEach(element => {
    array.push(total += element)
  })
  return array
}

// Задача 7

const arr = [1, 2, 3, 1, 2, 3, 4]

function getUniqueNumbers(arr) {
  function onlyUniqueNumbers(value, index, arr) { 
      return arr.indexOf(value) === index
  }

  const unique = arr.filter(onlyUniqueNumbers)
  return unique
}

// Задача 8

const arr = [[1, 2], [3, 4], [5, 6, 7], [8, 9]]

const aligned = arr.reduce(function(firstValue, nextValue) {
  return firstValue.concat(nextValue)
})

// Задача 9

const arr = ['meow', 1, 2, 'bang!', undefined, 8]

function getUnclearWhat(arr, number) {
  const nested = arr.reduce((newArr, value, index) => (index % number === 0 ? newArr.push([value]) : newArr[newArr.length - 1].push(value)) && newArr, [])
  return nested
}

// Задача 10

const arr = [
  {
    name: 'Sasha',
    age: 45,
    salary: 1900,
  },
  {
    name: 'Max',
    age: 21,
    salary: 1500,
  },
  {
    name: 'Nikita',
    age: 29,
    salary: 800,
  },
  {
    name: 'Sergey',
    age: 32,    
    salary: 2300,
  }
]

function getSortedBySalary(arr) {
  const sorted = arr.sort(function(a, b) {
    if(a.salary > b.salary) {
      return 1
    }
    if(a.salary < b.salary) {
      return -1
    }
    return 0
  })
  return sorted
}

// Задача 11

function getSortedByAge(arr) {
  const sorted = arr.sort(function(a, b) {
    if(a.age < b.age) {
      return 1
    }
    if(a.age > b.age) {
      return -1
    }
    return 0
  })
  return sorted
}

// Задача 12

function getBeggar(arr, minSalary) {
  const array = arr.sort(function(a, b) {
    if(a.salary < b.salary) {
      return 1
    }
    if(a.salary > b.salary) {
      return -1
    }
    return 0
  })

  const beggar = array.find(array => array.salary < minSalary)
  return beggar === undefined ? `Работников с зарплатой меньше ${minSalary}$ не найдено` : beggar
}
