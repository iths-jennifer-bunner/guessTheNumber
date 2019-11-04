let secret = Math.floor(Math.random()*100+1)
console.log(secret)
let input = Number(document.querySelector('.inputnumber').value)
let startClick = document.querySelector('.guess')
// function onStart(){
//     Math.floor(Math.random()*100)
//     console.log(Math.floor(Math.random()*100))
    
// }

function onClick(){
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

// console.log(onClick("p",50));

startClick.addEventListener('click', onClick)




