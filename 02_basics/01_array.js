// ARRAY
// this may look complicated but trust me its NOT.

let myFirstArray = [1,2,3,4,5,6,7,8,9,0] // this is our first array.

console.log(myFirstArray) 
/*
OUTPUT:
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
*/


// -------------- METHODS -----------------
myFirstArray.push(77) // this will push the number 77 at very last of the array
console.log(myFirstArray)

myFirstArray.pop()
console.log(myFirstArray) // this will remove the last item from the array

// SHIFT/UNSHIFT
myFirstArray.unshift(99) // this will put the number 99 at very first of the array
console.log(myFirstArray)
myFirstArray.shift() // this will remove first item from the array
console.log(myFirstArray)

// TRUE/FALSE/POSTION
console.log(myFirstArray.includes(9)) // this will tell whether particular data is present in array in form of TRUE/FALSE
console.log(myFirstArray.indexOf(0)) // this will tell which object is their on any particular INCIDES/INDEX

// CONVERT ARRAY TO STRING
let NewArr = myFirstArray.join() // this method will change the type from array to string
console.log(NewArr) 
console.log(typeof NewArr)

// _______ SLICE/SPLICE _______
console.log("original array",myFirstArray)

let sliceArr = myFirstArray.slice(1, 3) // by this we can slice the array. mean we get 1,2 but not 3 because its at last
console.log("Sliced array:", sliceArr)
console.log("Orginal array:", myFirstArray)

let spliceArr = myFirstArray.splice(1,3) // byt his we get the portion of the array.
console.log("Spliced array:", spliceArr)
console.log("Orginal array:", myFirstArray)

/*OUTPUT:
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
[
   1, 2, 3, 4, 5,
   6, 7, 8, 9, 0,
  77
]
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
[
  99, 1, 2, 3, 4,
   5, 6, 7, 8, 9,
   0
]
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
true
9
1,2,3,4,5,6,7,8,9,0
string
original array [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
Sliced array: [ 2, 3 ]
Orginal array: [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 0
]
Spliced array: [ 2, 3, 4 ]
Orginal array: [
  1, 5, 6, 7,
  8, 9, 0
] 
*/