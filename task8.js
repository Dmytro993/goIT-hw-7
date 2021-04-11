const make  = document.querySelector('[data-action="render"]')
const clear = document.querySelector('[data-action="destroy"]')
const input = document.querySelector('input')
const myDiv = document.getElementById('boxes')
make.addEventListener('click',doIt)
clear.addEventListener('click',clearBox)
function doIt(){
    for(let i=0;i < input.value;i+=1){
    myDiv.insertAdjacentHTML("afterbegin",'<div width="30px" heigth ="30px"></div>')
   
    }
// console.log(input.value)
}
function clearBox(){
    myDiv.textContent = ''
}