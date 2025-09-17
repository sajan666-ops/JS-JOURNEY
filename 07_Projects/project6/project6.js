
const randomColor = function(){
    const hex = "123456789ABCDEF"
    let Color = '#'
    for (let i = 0; i < 6; i++) {
     Color += hex[Math.floor(Math.random() * 16)]
    }
    return Color
}

let intervalId;
const StartChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(ChangebgColor, 1000)
    }


function ChangebgColor(){
    document.body.style.backgroundColor = randomColor()
}
}

const StopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null
}


document.querySelector('#start').addEventListener('click', StartChangingColor)
document.querySelector('#stop').addEventListener('click', StopChangingColor)

