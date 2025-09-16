const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        
        const color = e.target.id

switch(color){
    case 'grey':
        body.style.background = 'grey'
         break;
         
         
    case 'white':
        body.style.background = 'white'
         break;
        
    case 'blue':
        body.style.background = 'blue'
        break;       
        
    case 'yellow':
        body.style.background = 'yellow'
         break;

    case 'pink':
        body.style.background = 'pink'
        break;

    case 'purple':
        body.style.background = 'purple'
         break;
              
         
    default:
        body.style.background = 'pink'
        break;
    
}
    })
}) 