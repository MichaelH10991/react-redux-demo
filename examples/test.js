// function addToArr(element){
//     var arr = []
//     arr.push(element)
//     return element + " added to " + arr
// }

// var firstPass = addToArr('a')
// var secondPass = addToArr('b')

// console.log(firstPass)
// console.log(secondPass)

// function addToArr(element) {
//     var arr = []
//     function push(){
//         arr.push(element)
//     }
//     return element + " added to " + arr
// }


var result = addToArr()
var choice = chooser()

function addToArr(){
    var arr = []
    return function push(element){
        arr.push(element)
        console.log(arr)
        console.log(arr.reduce(item => item + item) / arr.length)
    }
}

function chooser(){
    let items = [0, 1]
    return function choice(){
        const index = Math.floor(Math.random() * items.length)
        return items[index]
    } 
}

result(choice())
result(choice())

function hello(inp){
    console.log(inp)
    return function goodbye(nestedInp){
        console.log(nestedInp)
    }
}

hello('hello')('goodbye')