const input = document.getElementById('name-input')
const text = document.getElementById('name-output')
input.addEventListener('input',newName)
function newName(){
 if(input.value.length < 1){
    text.textContent = 'незнакомeц'
 } else{
    text.textContent = input.value
 }
}