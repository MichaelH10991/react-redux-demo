const str = 'hello'
const iter = str[Symbol.iterator]()

// str[Symbol.iterator]().next() = function() {
//     return console.log(yeet)
// }

// for(let i = 0; i <= str.length; i++){
//     console.log(iter.next())
// }

for(i of str){
    console.log(i)
}
