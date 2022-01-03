// 1.1.1

const phone = {
  name: 'Xiaomi',
  price: '10000',
  discount: null,
  quantity: 1,
  weight: null
}

function excludeNull(obj) {
  const object = Object.assign({}, obj)

  const result = Object.entries(object).map((arr) => {
    for(let i = 0; i < arr.length; i++) {
      if(arr.includes(null)) return
    }
      return arr.filter(Boolean)
  }).filter((elem) => elem)
  return Object.fromEntries(result)
}

// 1.1.2

function excludeNull(obj) {
  const object = Object.assign({}, obj)
  let arr = []
  const keyValues = Object.entries(object)

  for(let i = 0; i < keyValues.length; i++) {
    if(keyValues[i][1] !== null) {
      arr.push(keyValues[i])
    }
  }
  return Object.fromEntries(arr)
}

// 1.2

const laptop = {
  name: 'Dell',
  price: 14000,
  discount: null,
  width: 90,
  height: 60,
  diagonal: '15.6'
}

function getEqual(obj1, obj2) {
  const phoneKeys = Object.keys(phone)
  const laptopKeys = Object.keys(laptop)

  const uniqueInPhone = laptopKeys.filter((key) => phoneKeys.indexOf(key) === -1)
  const uniqueInLaptop = phoneKeys.filter((key) => laptopKeys.indexOf(key) === -1)
  uniqueKeysInObjects = uniqueInLaptop.concat(uniqueInPhone)
  if(!uniqueKeysInObjects.length) {
    return true
  }
  return uniqueKeysInObjects
}

getEqual(phone, laptop)


// 1.3

const car = {
  name: 'Audi RS6',
  power: '600hp'
}


function transformObj(object) {
  const arrOfValues = Object.values(car)

  if(!arrOfValues.length) {
      return 'Object is empty'
  }

  const [firstValue, secondValue, ...restValues] = arrOfValues
  const result = Object.assign({}, {
      firstValue,
      secondValue,
      restValues
  })
  return result
}

transformObj(car)