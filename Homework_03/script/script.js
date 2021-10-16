// Задача 1

function gettingArrays(...args) {
    var funcArguments = Array.from(args)
    var arraysFromArgs = []

    for(var i = 0; i < funcArguments.length; i++) {
        if(Array.isArray(funcArguments[i]) === true) {
            arraysFromArgs.push(funcArguments[i])
        }
    }
    var stringFromArray = arraysFromArgs.toString();

    var onlyArrayFromArgs = stringFromArray.split(',')
    onlyArrayFromArgs.push('The End')
    onlyArrayFromArgs.unshift('Start')
    onlyArrayFromArgs.reverse()
    

    return console.log(onlyArrayFromArgs)
}

gettingArrays(null, 123, 'JS', ['Nastya', 'Dima', 'Max', 'Masha'], undefined, {}, true, ['Sasha', 'Denis', 'Marina'])

// Задача 2

var numbersArr = [73, 4, 11, 234, 58, 134]
var stringsArr = ['js', 'css', 'jq', 'html', 'vue', 'bootstrap']

function checkLength(numbersArr, stringsArr) {
    if(numbersArr.length !== stringsArr.length) {
        return 'Массивы имеют разную длину'
    }

    var sortedNumbers = numbersArr.sort((a, b) => {
        return a < b ? -1 : 1
    })

    var stringifiedArr = stringsArr.toString()
    var averageIndex = numbersArr.length / 2

    numbersArr.splice(averageIndex, 0, stringsArr)
    var editedArr = numbersArr.toString()
    var finalArr = editedArr.split(',')
    var result = finalArr.slice(0, (finalArr.length / 2))

    return result
}

checkLength(numbersArr, stringsArr)

// Задача 3

function havingFunWithStrings(string, number) {
    var argString = string
    var devider = number

    function stringIsLonger() {
        argString.split('')
        var result = argString.slice(0, devider)
        result = `${result}...`

        return result
    }

    function deviderIsBigger() {
        var stringArr = argString.split('')
        stringArr.splice(0, 1, stringArr[0].toUpperCase())
        stringArr.splice(-1, 1, stringArr[stringArr.length - 1].toUpperCase())

        var result = stringArr.join('-')
        return result
    }

    var result = devider > argString.length ? deviderIsBigger() : stringIsLonger()

    return result
}

havingFunWithStrings('This string have length 26', 14)

// Задача 4.1

var phrase = 'I tried very hard doing this homework'

function cutWordOff(phrase, word) {
    var wordInner = word.substr(0)
    var phraseArr = phrase.split(' ')

    var elem = phraseArr.findIndex((elem) => {
        return elem === wordInner
    })

    phraseArr.splice(elem, 1)
    var result = phraseArr.join(' ')

    return result
}

// Задача 4.2

var phrase = 'I tried very hard doing this homework'

function cutWordOff(phrase, word) {
    var wordInner = word.substring(0)
    var phraseArr = phrase.split(' ')
    
    var elem = phraseArr.findIndex((elem) => {
        return elem === wordInner
    })

    phraseArr.splice(elem, 1)
    var result = phraseArr.join(' ')

    return result
}

cutWordOff(phrase, 'hard')

// Задача 4.3 

var phrase = 'I tried very hard doing this homework'

function cutWordOff(phrase, word) {
    var phraseArr = phrase.split(' ')

    var elem = phraseArr.findIndex((elem) => {
        return elem === word
    })

    phraseArr.splice(elem, 1)
    var joinedArr = phraseArr.join(' ')
    
    var result = joinedArr.slice(0)
    return result
}

cutWordOff(phrase, 'hard')

// Если честно - совершенно не понял смысл 4 задачи