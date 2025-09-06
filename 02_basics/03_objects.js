// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = { // this is a JSON which include my information
    name: "Sajan",
    "full name": "Sajan mahla",
    [mySym]: "mykey1",
    age: 18,
    location: "faridkot",
    email: "sajan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

 console.log(JsUser.email) // this is how we can print email
console.log(JsUser["email"]) // this is more good practice of JS
 console.log(JsUser["full name"]) // this will give you my full name 
 console.log(JsUser[mySym]) // this is use to print the 

JsUser.email = "Sajan@chatgpt.com" // this is used to update the email.
 Object.freeze(JsUser) // like this is used to freeeze the updation of email  
JsUser.email = "Sajan@microsoft.com" // this has no effect like we used freeze in upper line
 console.log(JsUser);

JsUser.greeting = function(){ //this is greeting function
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){ // this is also greeting function.
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/* OUTPUT:
sajan@google.com
sajan@google.com
Sajan mahla
mykey1
{
  name: 'Sajan',
  'full name': 'Sajan mahla',
  age: 18,
  location: 'faridkot',
  email: 'Sajan@microsoft.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
Hello JS user
undefined
Hello JS user, Sajan
undefined
*/