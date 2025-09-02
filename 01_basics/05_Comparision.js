// ************ COMPARISION ************

// comparsion is used to compare the value of same/deiffrent datatypes to see that is it big, small, equal etc. 
// the result of comparsion always comes in boolean

// ************ COMPARISION OF NUMBERS ************ 
console.log( 2 > 1) // here the answer is TRUE because 2 is bigger than 1
console.log( 2 < 1) // here the answer is FALSE because 2 is not smaller than 1
console.log( 2 >= 1) // here the answer is TRUE because 2 is not bigger than equal to  1
console.log( 2 <= 1) // here the answer is FALSE because 2 is not smaller than equal to 1
console.log( 2 == 1) // here the answer is FALSE because 2 is not equal to 1
console.log( 2 != 1) // here the answer is FALSE because 2 is bigger than 1



// ************ COMPARISION OF STRING & NUMBERS ************
console.log("2" > 1) // here the answer is TRUE because JAVASCRIPT itself changed the value inside string to number 
console.log("02" > 1) // same as above line of code


// ************ COMPARISION OF NULL & NUMBERS ************
console.log(null > 0) // here the answer is FALSE because null has no value so its not bigger than ZERO
console.log(null == 0) // here is answer same as above code because null has no value so it'll be never equal to ZERO.
console.log(null >= 0) // here the answer is TRUE. lemme me tell you the reason.
/* so in above line the answer is TRUE because 
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is TRUE and (1) null > O is FALSE.*/ 


// ************ COMPARISION OF NULL & UNDEFINED ************
console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

// ALL OUTPUT IN ABOVE SECTION IS FALSE. NO REASON NEEDED BECAUSE YOU KNOW.

/* 
WE SHOULD NEVER COMPARE NULL AND UNDEFINED WITH NUMBERS AS IT IS BAD PRACTICE IN CODE. IN TYPESCRIPT IT WILL NEVER LET YOU COMPARE THESE THINGS.*/
