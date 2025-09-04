// so here we'll learn about NUMBERS. very easy but very used topic.
let number = 100 // so here we assigned 100 to nums
console.log(number) // here is its simple output

let balance = new Number(100) // by this method we tell the JS to give me number in strictly INT
console.log(balance) // here's the putput

console.log(number.toString()) // by this method i changed the number to STRING

console.log(number.toString().length) // byt his we can find the lenght of the NUMBER

console.log(number.toFixed(1)) // by this method we can see the point after the number the POINTVALUE WILL BE XXX.0 = ONE
console.log(number.toFixed(2)) // by this method we can see the point after the number the POINTVALUE WILL BE XXX.00 = TWO
console.log(number.toFixed(3)) // by this method we can see the point after the number the POINTVALUE WILL BE XXX.000 = THREE


const uglynumber = 21.4738 
console.log(uglynumber.toPrecision(3)) // by thid we can ROUND-FIGURE any number with its precision value


const bignumber = 1000000
console.log(bignumber.toLocaleString()) // this method is used to easily read the complex numbers


/* OUTPUT:
100
[Number: 100]
100
3
100.0
100.00
100.000
21.5
1,000,000
*/

