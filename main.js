let secret = Math.floor(Math.random()*100)+1
console.log(secret)
let yourGuess = document.querySelector('.inputnumber')
let startClick = document.querySelector('.guess')
let counter = 0


function onClick(){
    let input = Number(yourGuess.value)

    if(counter < 10){
        counter++
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
            yourGuess.value = ''
    }else if(counter == 10){
        let div = document.querySelector('div')
        let itemPrototype = document.querySelector('.computeroutput')
        let p = itemPrototype.querySelector('p') 
        p.innerText = 'You have reach the limited number of guesses!'
        div.append()
    }
    return false
        
}


startClick.addEventListener('click', onClick)
