const value = document.getElementById('value')
let currentValue = 0
const decrementBut= document.querySelector('[data-action ="decrement"]')
const incrementBut= document.querySelector('[data-action ="increment"]')

incrementBut.addEventListener('click',plus)
decrementBut.addEventListener('click', minus)
function plus(){
     currentValue += 1
     value.textContent = currentValue
}
function minus(){
   if(currentValue !==0){ 
    currentValue -= 1
    value.textContent = currentValue
   }
}