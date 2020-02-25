
// If we had a simple array
const myFavouriteAuthors = [
    'Neal Stephenson',
    'Arthur Clarke',
    'Issac Asimov',
    'Robert Heinlein'
]

// we can perform iteration quite easily using built in looping mechanisms 

// what if we had some custom data structure

/**
 * This is an object within an object with which contains 3 arrays 
 */
const myFavouriteAuthors1 = {
    allAuthors: {
        fiction: [
            'Agatha Christie',
            'J.K. Rowling',
            'Dr. Seuss'
        ],
        sienceFiction: [
            'Neal Stephenson',
            'Arthur Clarke',
            'Issac Asimov',
            'Robert Heinlein'
        ],
        fantasy: [
            'J.R.R. Tolkien',
            'J.K. Rowling',
            'Terry Pratchett'
        ]
    }
}

// this wont work because {} is not iterable
// for (let author of myFavouriteAuthors1){
//     console.log(author)
// }

// but we can make objects iterables

/**
 * this is a simple approach but a few issues can arise
 * 1. the name getAllAuthors is very specific, if someone else is making thier own myFavouriteAuthors2 they may name is fetchAllAuthors
 * 2. The format could be wrong for other developers
 * basically the developer will have to rely on some arbitrary naming convention for an important method. So ECMA added the Symbol.iterator method
 * to standardize the process of looping over custom objects.
 */
const myFavouriteAuthors2 = {
    allAuthors: {
        fiction: [
            'Agatha Christie',
            'J.K. Rowling',
            'Dr. Seuss'
        ],
        sienceFiction: [
            'Neal Stephenson',
            'Arthur Clarke',
            'Issac Asimov',
            'Robert Heinlein'
        ],
        fantasy: [
            'J.R.R. Tolkien',
            'J.K. Rowling',
            'Terry Pratchett'
        ]
    },
    getAllAuthors() {
        const authors = []
        for(const author of this.allAuthors.fiction){
            authors.push(author)
        }
        for(const author of this.allAuthors.sienceFiction){
            authors.push(author)
        }
        for(const author of this.allAuthors.fantasy){
            authors.push(author)
        }
        return author
    }
}

// Symbol.iterator => iterator {next() => {value, done}}
// We can make objects iterable by implementing the Symbol.iterator method

const iterable = {
    [Symbol.iterator]() {
        let step = 0 
        const iterator = {
            next(){
                step++
                if(step === 1){
                    return {value: 'this', done: false}
                }else if (step === 2){
                    return { value: 'is', done: false}
                }else if (step === 3){
                    return { value: 'iterable', done: false}
                }
                return { value: undefined, done: true }
            }
        }
        return iterator
    }
}
let iterator = iterable[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())