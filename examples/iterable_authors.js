
const myFavouriteAuthors = {
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
    [Symbol.iterator](){
        //get all authors in array
        const genres = Object.values(this.allAuthors)

        // store the current genre and author index
        let currentAuthorIndex = 0
        let currentGenreIndex = 0
        return {
            // implementation of next()
            next(){
                // authors according to the current genre index
                const authors = genres[currentGenreIndex]

                // do not have any more authors if index authors.length
                const doNotHaveMoreAuthors = currentAuthorIndex >= authors.length

                // check of the authors have been exhausted
                if(doNotHaveMoreAuthors){
                    // if they have increment genre index and reset author index
                    currentGenreIndex++
                    currentAuthorIndex = 0
                }

                const doNotHaveMoreGenres = currentGenreIndex >= genres.length
                if(doNotHaveMoreGenres){
                    return {
                        value: undefined,
                        done: true
                    }
                }

                // if everything is correct, return the author from the 
                // current genre and incerement the currentAuthorindex
                // so next time, the next author can be returned.
                return{
                    value: genres[currentGenreIndex][currentAuthorIndex++],
                    done: false
                }

            }
        }
    }
}
// for of loops will essentially do this
const iterable = myFavouriteAuthors[Symbol.iterator]()
console.log(iterable.next())
// iterators will call the Symbol.iterator function, calling the next() function as per the iterator protocol
for(const author of myFavouriteAuthors){
    console.log(author)
}

console.log(...myFavouriteAuthors)

/**
 * you can define what you like in the [Symbol.iterator] function, 
 * it is essentially just a standard for looping mechanisms to 'latch'
 * onto when iterating over lists
 * */ 

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

/**
 * A generator acting as an iterator
 */
function *getAuthors() {
    let authorIndex = 0
    let genreIndex = 0
    let genres = Object.values(myFavouriteAuthors1.allAuthors)
    while(true){    
        let authors = genres[genreIndex]
        if(authorIndex >= authors.length){
            genreIndex++
            authorIndex = 0
        }

        if(genreIndex >= genres.length){
            return
        }
    
        yield genres[genreIndex][authorIndex++]
    }
   
}

const authors = getAuthors()

console.log(authors.next())

console.log(...getAuthors())
console.log(...authors)
gatAuthors().map((item) => {console.log(item)})

const inspect = obj => {
    for (const prop in obj){
        console.log(prop)
        if(obj.hasOwnProperty(prop)){
            console.log(`${prop}: ${obj[prop]}`)
        }
    }

}
// inspect(myFavouriteAuthors)
// console.dir(myFavouriteAuthors, {colors: true})
// console.table(myFavouriteAuthors)
// let thing = authors.map((item) => console.log(item))