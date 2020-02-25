const axios = require('axios')
const co = require('co')

function * generatorFunction() {
    console.log('This will be executed first')
    yield 'Hello'
    console.log('I will be printed after the pause')
    yield 'World!'
}

const generatorObject = generatorFunction()

/**
 * generatoObject will yield on each invocation
 */
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)
console.log(generatorObject.next().value)

const url = 'https://jsonplaceholder.typicode.com/posts'
function fetchJson(url) {
    return axios(url)
    .then(response => console.log(response))
    .catch(e => console.log(`ERROR: ${e.stack}`))
}

const fetchJson1 = co.wrap(function * (url) {
    try{
        return request = yield axios(url)
    }catch(e){
        return `ERROR: ${e.stack}`
    }
})
const response = fetchJson1('https://jsonplaceholder.typicode.com/posts')

function * naturalNumbers(){
    let num = 1
    while(true){
        yield num
        num ++
    }
}

const numbers = naturalNumbers()
console.log(numbers.next().value)
console.log(numbers.next().value)

// generators lazy evaluation example
function * powerSeries(number, power){
    let base = number
    while(true){
        yield Math.pow(base,power)
        base++
    }
}

// A direct concequence of lazy evaluation is memory efficiency. We generate the values when we need them
const powersOf2 = powerSeries(3, 2)
console.log(powersOf2.next())
console.log(powersOf2.next())

// we can create a combinator function. this takes two iteables and makes one
function * take(n, iter){
    let index = 0
    for(const val of iter){
        if(index >= n){
            console.log('take returned')
            return
        }
        index = index++
        yield val
    }
}

function * cycled(iter){
    const arrOfValues = [...iter]
    while(true){
        for(const val of arrOfValues){
            yield val
        }
    }
}

console.log(...take(3, ['a', 'b', 'c', 'd']))

// const numbers1 = naturalNumbers()
// console.log(...take(10, numbers1))

// console.log(...take(5, powerSeries(3, 2)))
// console.log(...take(10, cycled(take(3, naturalNumbers()))))

function *foo(x){
    var y = 2 * (yield (x + 1))
    var z = yield (y / 3)
    return (x + y + z)
}

var it = foo(5)

console.log(it.next())
console.log(it.next(12))
console.log(it.next(13))

function *bar(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    return 6
}

for(var v of bar()){
    console.log(v)
}

console.log(...bar())
console.log(v)

console.log(('a', 'b'))

function test(printTwo) {
    printing: {
        console.log("one")
        if (!printTwo) break printing
        console.log("two")

    }
    console.log("three")
}

test(true)
test(false)

// function statamemnt
function printName(name){
    return name
}

// variable statement
let thing4

// function expression 
let thing = function (){

}

// variable expression
let yeet = 'yeet'

// named function expression
let thing1 = function hemlo(){

}


/**
 * A function expression produces a value (the function)
 * A Function declaration leads to an action - the creation of a variable - whose value is the function
 * Furtheremore, only a function expression can be immediately invoked, but not a function declaration
 **/

/**
 * named function is only accessible from the scope of the function.
 * In this case we're using me() for recursion. 
 **/ 
let fac = function me(x) {
    return x <=1 ? 1 : x * me(x-1)
}

// console.log(me(x)); wont work

console.log(fac(2))