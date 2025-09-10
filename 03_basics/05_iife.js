 // IMMEDIATELY INVOKED FUNCTION EXPRESSIONS. it is just the fast way to execute function

 function DB () { // this is an example of named iife
    console.log("DATABASE CONNECTED🚀✅")
 }
 DB();

(function DBC() { 
    console.log("DATABASE CONNECTED🚀✅ MORE FASTLY")
 }) ();


 ( (name) => { // this is example of unnamed/ arrow function iife
    console.log(`my name is ${name}`)
 } )("Sajan")

 /* OUTPUTS:
 DATABASE CONNECTED🚀✅
DATABASE CONNECTED🚀✅ MORE FASTLY
my name is Sajan
 */
