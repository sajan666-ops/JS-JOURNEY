// so today i learned about STRING. yeah i know them but to make my basics fully concrete i did this.

// so lets get started. 
// ***************** STRING ***************************


// -----> STRING INTERPOLATION
const name = "sajan" //----> here i assigned my name to NAME constant
const age = 18 //----> here's the age 
const city  = "Faridkot" //----> here's the city.

/*  BY STRING INTERPOLATION METHOD I CAN USE ALL 3 TERMS IN ONE STRING*/ 
console.log(`Hello my name is ${name}, im ${age} year old. i live in ${city}`)

// -----> LOWERCASE/UPPERCASE
let nameUppercase = name.toUpperCase();
console.log(nameUppercase) // by that method i can UPPERCASE the whole string.

let nameUP = "SAJAN"
let textLC = nameUP.toLowerCase();
console.log(textLC) // by that method i can LOWERCASE the whole string.

// -----> TRIMMING THE STRING
let unTrimmedName = "       Sajan      " // trim works on whitespaces
console.log(unTrimmedName) // simple out put
console.log(unTrimmedName.trim()) // trimmed out put

// -----> POSITIONING
console.log(name.charAt(2)); // this will help to find the character on the particular position
console.log(name.indexOf('s')); // this will help to find the particular position  of the character

// -----> URL
let url = "Sajanmahla739.com" // this is our URL
console.log(url.length) // This help's to find the lenght of the string
console.log(url.replace('7', '-')) // this help's to replace the particular character or word
console.log(url.includes("Sajan")) // if the word/character is present. it will return true
console.log(url.includes("sam")) // here it will return false


// -----> SPLIT
const gameName = new String('Sajan-sm-com') // this is name of the game
console.log(gameName.split('-')); // i used split with this to convert it into array where DASH is present

// ----->  TERMINAL OUTPUTS:
/* 
Hello my name is sajan, im 18 year old. i live in Faridkot
SAJAN
sajan
       Sajan      
Sajan
j
0
17
Sajanmahla-39.com
true
false
[ 'Sajan', 'sm', 'com' ]
*/

