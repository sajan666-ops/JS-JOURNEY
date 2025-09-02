// so today we'll learn OPERATIONS. now one thing will come to your mind like what is operations. operations is like 2 + 2 = 4. that addition was a operation.  
// yes that's what a opertion is not any rocket science 
// so lets start it in JAVASCRIPT 


// ************ VERY BASIC OPERTIONS ************
console.log(2 + 2) // 4 as we all know 2 + 2 = 4 SUM/ADITTION
console.log(2 * 2) // 4 as we all know 2 * 2 = 4 MULTIPLICATION
console.log(2 - 2) // 0 as we all know 2 - 2 = 0 SUBSTRACTION
console.log(2 % 2) // 0 as we all know 2 % 2 = 0 REMAINDER
console.log(2 / 2) // 1 as we all know 2 ÷ 2 OR 2 / 2 = 1 DIVISON
console.log(2 ** 2) // 4 as we all know 2 ^ 2 OR 2 Power 2 = 4 POWER


// ************ ADDING NUMBERS ************
let s = 1 // so here i take s as 1 
let h = 2 // and here h as 2
let g = s + h // so here i take g which is sum of s and h
console.log(g) // after performing it i got 3 which is obvious. because 1 + 2 = 3




// ************ ADDING STRINGS ************
let str1 = "Hello" // so here str1 is greeting which is "Hello"
let str2 = " Sajan" // so here str is my name which is " Sajan". youll notice i used space infront of Sajan. will explain in last.
let str3 = str1 + str2 // this is its addition key like the opeartion whish is used to add str1 and str2 which is str3
console.log(str3) // so its result is "Hello Sajan". if i didn't put SPACE before "Sajan" then it will be "heeloSajan".


// ************ ADDING NUMBER & STRINGS ************
// here lemme tell you one very simple thing on who is at first is LEADER. THAT'S IT
console.log("1" + 2) // here string is at first so another number is also be treated as string so answer will be 12 
console.log(1 + "2") // here number is st first and string is at last but answer stil be 12
/* BECAUSE WE ADD 0 + 1  or 1 + 0  ANSWER REMAINS ONE/1 */
console.log(1 + 2 + "3") // here just the problem is bigger but answer will take same approach like first two numbers are int so their sum is 3 and another is 3 so 
// 3 + 3 = 3
console.log("1" + 2 + 3) // here string came first so no debate ans is 123. as i said already "who is at first is LEADER".


// ************ BOLLEAN OPERATION ************
console.log(true) // here it will simply print true 
console.log(+true) // but here comes twist like bollean is a empty value but putting + in front we made it 1 
//console.log(true+) ---> this is wrong syntax of above code so i already put it in comment
console.log(+"") // here "" is empty string but by putting + ahead we made it number
// keep in mind these are mind confussing question. like interviewer can ask give me number without printing it.


// ************ NUMBER INCREASE WITHOUT ANY ADDITION ************
let counter = 100 // so here we assign a number which is 100
counter++; // or we can write ++counter; BOTH WILL PERFORM SAME THING. by putting ++ we make it like plus one
console.log(counter) // here is its printed version which is 101.


// ************ ANSWERS/TERMINAL OUTPUT ************
/*
4
4
0
0
1
4
3
Hello Sajan
12
12
33
123
true
1
0
101
 */
