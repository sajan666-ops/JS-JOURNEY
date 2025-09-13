// let myInfo = ["Sajan","Mahla","Sam","HarsimranJeet"]

// myInfo.forEach(function (Value){
//     console.log(Value);
    
// })

// myInfo.forEach((Val) => {
//     console.log(Val);
    
// })

// myInfo.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// }
// )



// objects in array with FOR EACH

let myArray = [
    {
        name: "Sajan",
        age: 19
    },
    {
        name: "Sam",
        age: 19
    },
    {
        name: "HarsimranJeet",
        age: 18
    },
    {
        name: "Mahla",
        age: 18
    }
]
myArray.forEach((item => {
    console.log(item.age);
    
}))
