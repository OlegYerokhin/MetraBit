// Задача 1

const phone = {
  name: 'Xiaomi',
  price: '10000',
  discount: null,
  quantity: 1,
  weight: null
}

function excludeNull(obj) {
  const object = Object.assign({}, phone)

  const result = Object.entries(object).map((arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr.includes(null)) return
    }
      return arr.filter(Boolean)
  }).filter((elem) => elem)
  return Object.fromEntries(result)
}

// Задача 2

const laptop = {
  name: 'Dell',
  price: 14000,
  discount: null,
  width: 90,
  height: 60,
  diagonal: '15.6'
}