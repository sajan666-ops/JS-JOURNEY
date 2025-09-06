// so here i did array with some more methods.
const marvel_heros = ["thor", "Ironman", "spiderman"]  // this is our first array
const dc_heros = ["superman", "flash", "batman"] // this is second

marvel_heros.push(dc_heros) // ---> this ia raw method to add array but this leads to a problem that when we add them it will give second array in the form of element 
// in easy words array in the array

console.log(marvel_heros);
console.log(marvel_heros[3][1]); //---> this is used to get the 2nd element of the 3rd element. like 3rd element is another array and its second element is 1st index.

const allHeros = marvel_heros.concat(dc_heros) //this will mergge both the arrays.
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // this is SPREAD. it will spread all the elements and can prseent it in new array.

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] // this is the example of bad array

const real_another_array = another_array.flat(Infinity) // by FLAT method we can add all upper array to one array.
console.log(real_another_array);



console.log(Array.isArray("SAJAN")) // this will return the boolean value that the particular thing is array or not
console.log(Array.from("SAJAN")) // this will convert anything in the array 
console.log(Array.from({name: "hitesh"})) // interesting it will give an empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // this will convert upper 3 values to an array

/*  OUTPUT:
[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
flash
[
  'thor',
  'Ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
[
  'thor',
  'Ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
false
[ 'H', 'i', 't', 'e', 's', 'h' ]
[]
[ 100, 200, 300 ]
mac@SAJANs-Macbook-Pro Js-project % node array2.js
[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
flash
[
  'thor',
  'Ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
[
  'thor',
  'Ironman',
  'spiderman',
  [ 'superman', 'flash', 'batman' ],
  'superman',
  'flash',
  'batman'
]
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
false
[ 'S', 'A', 'J', 'A', 'N' ]
[]
[ 100, 200, 300 ]

*/
