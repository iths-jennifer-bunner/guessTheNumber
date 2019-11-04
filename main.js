let startClick = document.querySelector('.guess')
let secret = Math.floor(Math.random()*100+1)
console.log(secret)
let input = document.querySelector('.inputnumber').value

// function onStart(){
//     Math.floor(Math.random()*100)
//     console.log(Math.floor(Math.random()*100))
    
// }
input.addEventListener('dblclick', onClick)
function onClick(secret, input){
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


