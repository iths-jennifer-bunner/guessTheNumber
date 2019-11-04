let secret = Math.floor(Math.random()*100)+1
console.log(secret)
let yourGuess = document.querySelector('.inputnumber')
let startClick = document.querySelector('.guess')


function onClick(){
    let input = Number(yourGuess.value)
    if(secret == input){
        let div = document.querySelector('div')
        let itemPrototype = document.querySelector('.computeroutput')
        let p = itemPrototype.querySelector('p') 
        p.innerText = 'Correct!'
        div.append()        
    }else if(secret < input){
            let div = document.querySelector('div')
            let itemPrototype = document.querySelector('.computeroutput')
            let p = itemPrototype.querySelector('p') 
            p.innerText = 'Too high!'
            div.append()    
        }else if(secret > input){
            let div = document.querySelector('div')
            let itemPrototype = document.querySelector('.computeroutput')
            let p = itemPrototype.querySelector('p') 
            p.innerText = 'Too low!'
            div.append()    
        }else{
            let div = document.querySelector('div')
            let itemPrototype = document.querySelector('.computeroutput')
            let p = itemPrototype.querySelector('p') 
            p.innerText = 'Not a number!'
            div.append()  
        }
    }

startClick.addEventListener('click', onClick)




