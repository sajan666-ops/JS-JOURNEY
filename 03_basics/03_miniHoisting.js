function one(){ // this sis scope 
    const username = "hitesh"

    function two(){ //this is scope inside the scope
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one() // executing the function

if (true) { // scope inside scope in if/else
    const username = "Sajan"
    if (username === "Sajan") {
        const website = " youtube"
         console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

 // this is fuction 
console.log(addone(5)) // --> we can execute the function here because its a genuine funnction

function addone(num){
    return num + 1
}


// this we can call function/expression because it is allocated to const

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)) // ---> this time we can't do it above because it is expression or not genuine function


/*OUTPUTS:
hitesh
Sajan youtube
6
7
*/
