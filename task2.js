const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
 
 const myList = document.getElementById('ingredients')

 ingredients.map(e=>{
 const createElem = document.createElement('li')
 createElem.textContent = e

 myList.append(createElem)
 })
 