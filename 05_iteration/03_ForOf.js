
arr = [1,2,3,4,5,6,7,8,9,10]

for (const num of arr) {
    console.log(num * 3);
    
}


let greeting = "Sajan"
for (const greet of greeting) {
    console.log(`hello ${greet}, welcome to the page`);
    
}


const map = new Map
map.set("IN", "India")
map.set("USA","United States of America")
map.set("NZ", "New Zealand")

console.log(map);


for (const [Key, Value] of map) {
    console.log(`full form of ${Key} is ${Value}.`);
    
}
