// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.
// describe("encoder", () => {
//     it("takes in a string and returns a coded message", () => {
//         expect(encoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(encoder(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(encoder(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

//create a function - encoder
//parameter - string
//convert letters to numbers accodring to code
//Process - 
    //this would be so much easier in Ruby
    //convert string to array with split
    //iterate with for loop
    //use if statement - if [i] = ('a') return 4 etc.
    //return array to string and return string
//New process because that didn't work and I got lost in an overly complex thought process trying to force it to work and realized there must be a simpler way -
    //google
        //use .replace(): string.replace(searchvalue, newvalue)
            //**make a notecard: 
                    //The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced. */
                //Make another notecard for things that become more relevant when you actually read them: 
                    //Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).

// b) Create the function that makes the test pass.

// const encoder = (string) => {
//     let stringA = string.replace(/[aA]/g, "4")
//     let stringE = stringA.replace(/[eE]/g, "3")
//     let stringI = stringE.replace(/[iI]/g, "1")
//     let stringO = stringI.replace(/[oO]/g, "0")
//     return stringO
// }
// console.log(encoder(secretCodeWord1))
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
    //this works but doesn't seem very dynamic
        //feels like manually forcing it to go through a for loop and splitting into an array and mapping over should have worked and resulted in cleaner code

// const encoder = (string) => {
//     let array = string.split("")
//     return array
// }
// console.log(encoder(secretCodeWord1))
// [
//     'L', 'a', 'c', 'k',
//     'a', 'd', 'a', 'i',
//     's', 'i', 'c', 'a',
//     'l'
//   ]
// const encoder = (string) => {
//     let array = string.split("")
//     for(let i = 0; i<array.length; i++){
//         array[i] = array[i].replace('a', '4')
//     }
//     return array
// }
// console.log(encoder(secretCodeWord1))
// [
//     'L', '4', 'c', 'k',
//     '4', 'd', '4', 'i',
//     's', 'i', 'c', '4',
//     'l'
//   ]
// const encoder = (string) => {
//     let array = string.split("")
//     for(let i = 0; i<array.length; i++){
//         array[i] = array[i].replace('a', '4'; 'i', '1')
//     }
//     return array
// }
// console.log(encoder(secretCodeWord1))
//close but the syntax isnt right
// const encoder = (string) => {
//     let array = string.split("")
//     for(let i = 0; i<array.length; i++){
//         array[i] = array[i].replace(/'a':'4', 'i':'1'/)
//     }
//     return array
// }
// console.log(encoder(secretCodeWord1))
//noop
// const encoder = (string) => {
//     let array = string.split("")
//     for(let i = 0; i<array.length; i++){
//         array[i] = array[i].replace('a', '4')
//         array[i] = array[i].replace('i', '1')
//     }
//     return array
// }
// console.log(encoder(secretCodeWord1))
// [
//     'L', '4', 'c', 'k',
//     '4', 'd', '4', '1',
//     's', '1', 'c', '4',
//     'l'
//   ]
    //writing out all of the .replace statements would work
        //there must be a way to make this work more concisely
           

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

//create a function - thingsThatWouldBeEasierWithRuby
//parameter - array
//expected output - all words containing letter a
//process:
    //convert to lowercase
    //iterate through array using for loop
    //use if statement to return words containing letter a
    //google .include? alternative for javascript

describe("thingsThatWouldBeEasierWithRuby", () => {
    it("takes in an array and returns all the words that contain the letter a", () => {
        expect(thingsThatWouldBeEasierWithRuby(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
        expect(thingsThatWouldBeEasierWithRuby(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })
})
var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]

// b) Create the function that makes the test pass.

// const thingsThatWouldBeEasierWithRuby = (array) => {
//     for (let i = 0; i<array.length; i++){
//         if(array[i].includes('a')){
//         }  
//         return array[i]
//     }
//     //only returns banana - need to include capitalization
// const thingsThatWouldBeEasierWithRuby = (array) => {
//     for (let i = 0; i<array.length; i++){
//         if(array[i].includes('a' || 'A')){
//         }  
//         return array[i]
//     }
// }
// console.log(thingsThatWouldBeEasierWithRuby(arrayOfWords1))
//only returns Apple bc for loop stops when first condition met smh.
// const thingsThatWouldBeEasierWithRuby = (array) => {
//     let newArray = array.includes('aA'); 
//     return newArray
// }
// console.log(thingsThatWouldBeEasierWithRuby(arrayOfWords1))

const thingsThatWouldBeEasierWithRuby = (array) => {
    newArray = array.filter(value => value.includes('a') || value.includes('A'));
    return newArray
}
console.log(thingsThatWouldBeEasierWithRuby(arrayOfWords1))
//[ 'Apple', 'Banana', 'Orange' ]
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
//works but still seems like there should be a way to make it cleaner
// const thingsThatWouldBeEasierWithRuby = (array) => {
//     newArray = array.filter(value => value.includes(/'aA'/g));
//     return newArray
// }
// console.log(thingsThatWouldBeEasierWithRuby(arrayOfWords1))
//TypeError: First argument to String.prototype.includes must not be a regular expression
    //Why?




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

//create a function - olsonTwins
//parameters - array
//process
    //iterate through array using for loop
    //set conditions for full house
        //1 pair && 3 of a kind
            //what am I checking for?
                //2 things that are the same, one is 2 items and one is 3
                //if array[0] === array[i] &&....
                //use sort(a, b)
                    //break down "winning parameters" like in tic tac toe game
                        //if the values at two indexes are equal, and the values at two other indexes are equal, and those indexes are not the same.
                            //[0]===[2] && [3] === [4]
                            //[0] === [1] && [2] === [4]
// a) Create a test with an expect statement using the variable provided.

describe("olsonTwins", (array) => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”", () => {
        expect(olsonTwins(hand1)).toEqual(true)
   })
})

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [5, 3, 5, 3, 5]



// b) Create the function that makes the test pass.

const olsonTwins = (array) => {
    let fullHouse = array.sort((a, b) => a - b)
    if (fullHouse[0] === fullHouse[2] && 
        fullHouse[3] === fullHouse [4] ||
        fullHouse[0] === fullHouse[1] &&
        fullHouse[2] === fullHouse[4]){
            return true
        }else{
            return false
        }
}
console.log(olsonTwins(hand1))
    //true
console.log(olsonTwins(hand2))
    //false
console.log(olsonTwins(hand3))
    //false
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

//double check logic - what if hand 1 were 5,3,5,3,5?
console.log(olsonTwins(hand4))
//true
    //thank you marykate and ashley