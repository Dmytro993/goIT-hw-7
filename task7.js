const range = document.getElementById('font-size-control')
const text = document.getElementById('text')
range.addEventListener('input', funt)

function funt(){
text.style.fontSize = `${range.value}px`
}
