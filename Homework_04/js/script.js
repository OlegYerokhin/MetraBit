// Задача 1

function countCalls() {
    var counter = 0;
    return function() {
        ++counter
        return counter
    }
}

var getCount = countCalls()

// Задача 2

function havingFunWithNumbers() {
    var uniqueNumbers = []
    return function(min = 1, max = 50) {
        var number = Math.floor(min + Math.random() * (max + 1 - min))
        if(!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number)
        } else {
            console.log('Это число уже есть в массиве!')
        }
 
        return uniqueNumbers
    }    
}

var getArray = havingFunWithNumbers()
