// Задача 1.1

var arr = [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue'];

for(var i = 0; i < arr.length; i++) {
  if(isNaN(arr[i]) === true) {
    arr[i] = null;
  }
}

console.log('Проверка и изменение массива завершена');
console.log(arr);

// Задача 1.2 

var arr = [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue'];
var i = 0;

while(i < arr.length) {
  if(isNaN(arr[i]) === true) {
    arr[i] = null;
  }
  i++;
}

console.log('Проверка и изменение массива завершена');
console.log(arr);

// Задача 2.1

var arr = [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123];
var count = 0;


for(var i = 0; i < arr.length; i++) {
    
  if(arr[i] !== +(arr[i])) {
    arr[i] = +(arr[i])
  }

  if(arr[i] % 3 === 0) {
    count++;
  }
}

if(count > 0) {
  console.log(`В данном массиве ${count} чисел кратных 3`);
} else {
  console.log('В данном массиве нет чисел кратных 3')
}

// Задача 2.2

var arr = [45, '246', 73, '4', 15, 36, 17, 89, '49', 167, 123];
var count = 0;
var i = 0;

while(i < arr.length) {
  if(arr[i] !== +(arr[i])) {
    arr[i] = +(arr[i])
  }
  
  if(arr[i] % 3 === 0) {
    count++;
  }

  i++;
}

if(count > 0) {
  console.log(`В данном массиве ${count} чисел кратных 3`);
} else {
  console.log('В данном массиве нет чисел кратных 3')
}

// Задача 3

var arr = [16, true, 'MetraBit', NaN, {name: 'UserName', hobby: 'JS'}, 30, NaN, null, false, 'Vue'];

function toCountTypes(arr) {
    var numbers = 0;
    var strings = 0;
    var booleans = 0;
    var nulls = 0;
    var objects = 0;

    for(var i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === 'number') {
            numbers++;
        } else if(typeof(arr[i]) === 'string') {
            strings++;
        } else if(typeof(arr[i]) === 'boolean') {
            booleans++;
        } else if(arr[i] === null) {
            nulls++;
        } else if(typeof(arr[i]) === 'object'){
            objects++
        }
    }
    
    return `Number: ${numbers}, string: ${strings}, boolean: ${booleans}, null: ${nulls}, object: ${objects}.`
}

toCountTypes(arr);

// Задача 4.1

var name = 'Tanya';
var greeting = 'Hello';

function toGreetUser(name, greeting) {
    return `${greeting}, ${name}!`;
}

toGreetUser(name, greeting)

// Задача 4.1

var toGreetUser = function(name, greeting) {
    return `${greeting}, ${name}!`;
}

toGreetUser('Tanya', 'Hello')