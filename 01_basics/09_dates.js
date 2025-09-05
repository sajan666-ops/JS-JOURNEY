let myDate = new Date()
console.log(myDate.toString()) // OUTPUT: Fri Sep 05 2025 13:31:44 GMT+0530 (India Standard Time)
console.log(myDate.toJSON()) // OUTPUT: 2025-09-05T08:01:44.632Z
console.log(myDate.toDateString()) // OUTPUT: Fri Sep 05 2025
console.log(myDate.toLocaleDateString()) // OUTPUT: 9/5/2025
console.log(myDate.toLocaleString()) // OUTPUT: 9/5/2025, 1:31:44 PM
console.log(myDate.toISOString()) // OUTPUT: 2025-09-05T08:01:44.632Z
console.log(myDate.toUTCString()) // OUTPUT: Fri, 05 Sep 2025 08:01:44 GMT
console.log(typeof myDate) // OUTPUT: obejct



/* THE BELOW COMMENTED LINE IS USED TO MODIGY THE TYPE FORMAT OF DATE */
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // this is used to get the time for NOW. 
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));  // by adding /1000 we get the time in SECONDS

let newDate = new Date() // simple way to get the date 
console.log(newDate);
console.log(newDate.getMonth() + 1); // simple way to get the EXACT months. REMAINDER: MONTH IN JAVASCRPIT IS ASSIGNED FROM 0 MEAN JANUARY IS 0th MONTH. SO REMEBER TO ADD ONE EVERYTIME.
console.log(newDate.getDay()); // it is used to get the exact Day everytimt 

// `${newDate.getDay()} and the time ` --> STRING INTERPOLATION

newDate.toLocaleString('default', { // byt this you can modify the date.
    weekday: "long",
    
})

/*
OUTPUT:
Fri Sep 05 2025 14:24:28 GMT+0530 (India Standard Time)
2025-09-05T08:54:28.133Z
Fri Sep 05 2025
9/5/2025
9/5/2025, 2:24:28 PM
2025-09-05T08:54:28.133Z
Fri, 05 Sep 2025 08:54:28 GMT
object
1757062468165
1757062468
2025-09-05T08:54:28.166Z
9
5
*/