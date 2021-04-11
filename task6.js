const getInput = document.getElementById('validation-input')
getInput.addEventListener('blur',colors)

function colors (){
    if(getInput.value.length <= 6){
        getInput.classList.add('valid')
        getInput.classList.remove('invalid')
    }else if(getInput.value.length > 6){
        getInput.classList.add('invalid')
        getInput.classList.remove('valid')
    }

}
