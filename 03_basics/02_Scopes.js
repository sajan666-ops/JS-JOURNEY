// today we'll do scope's SO in easy word the content in b/w this --> {} is called scope.


let a = 300 // this is simple let with some values.
if (true) {
    let a = 10 // this wont run. because we assigned it but didnt put any print method inside the scope.
    const b = 20 // this alse wont run. because we assigned it but didnt put any print method inside the scope.
    console.log("INNER: ", a); // this will work for sure.
    
}



console.log(a);
 console.log(b); // Error. WASN'T ASSIGNED
 console.log(c); // Error. WASN'T ASSIGNED

/* OUTPUTS:
INNER:  10
30
*/
