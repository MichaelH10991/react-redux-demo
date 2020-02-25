/**
 * A simple greeter displaying the cool mechanics of closures in javascript.
 */
let greetMan = greeter('Mr')
let greetWoman = greeter('Ms')

function greeter(title){
    return function(name) {
        return console.log(`Hello ${title} ${name}`)
    }
}

greetMan('Mike')
greetWoman('Elise')

let Person = (function() {
    let person = {
        name: "",
        age: 0
    }
    function setName(personName) {
        person.name = personName
    }

    function setAge(personAge){
        person.age = personAge
    }

    function getPerson(){
        return `${person.name} ${person.age}` 
    }
    return {
        setName,
        setAge,
        getPerson
    }

})()

console.log(Person.getPerson())
Person.setName("Mike")
console.log(Person.getPerson())