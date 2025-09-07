// SOME MORE INDEPTH KNOWLEDGE OF METHODS

// ******* CONSTRUCTOR in JAVASCRIPT *******

// const tinderUser = new Object() // here i assigned a value OBJECT to tinderUser
const tinderUser = {} // this is also it another syntax for assigning value

// below its information 
tinderUser.id = "123abc"  // its id
tinderUser.name = "Sammy" // its name
tinderUser.isLoggedIn = false // its login status

console.log(tinderUser); // print

const regularUser = {  // it is an example of nest in nest in nest 😂 i know its mind fucking but it is what it is 
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sajan",
            lastname: "Mahla"
        }
    }
}

console.log(regularUser); // printing the regular user 



// the below obj are in diffrent {} but we have to print them together
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // by this method it will print like {{obj1}, {obj2}} which is not good code practice
// const obj3 = Object.assign({}, obj1, obj2, obj4) // this will print the good one but you cann see its somewhat not good looking syntax

const obj3 = {...obj1, ...obj2} // its good looking syntax and we also used it in arrays its called SPREAD
console.log(obj3);


const users = [ // this is example of seprate objects in one []
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // by this we can get a particular object
// console.log(tinderUser);

 console.log(Object.keys(tinderUser)); // this will print keys of TINDERUSER
 console.log(Object.values(tinderUser)); // this will print values of TINDERUSER
 console.log(Object.entries(tinderUser)); // this will print all the entries of TINDERUSER

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // this will return boolean that this is present in tinderuser or not




// ******* DE STRUCTURE in JAVASCRIPT *******
const course = { // this is an object
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor 

const {courseInstructor: instructor} = course // this method is used to shorten the key in object like it was COURSEINSTUCTOR but now it is INSTRUCTOR

// console.log(courseInstructor); // by this we can print the particular key in object
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]




/*
OUTPUTS:
{ id: '123abc', name: 'Sammy', isLoggedIn: false }
{
  email: 'some@gmail.com',
  fullname: { userfullname: { firstname: 'Sajan', lastname: 'Mahla' } }
}
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
[ 'id', 'name', 'isLoggedIn' ]
[ '123abc', 'Sammy', false ]
[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
true
hitesh
*/
