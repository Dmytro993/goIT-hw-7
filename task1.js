
const itemRef = document.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории.`);
itemRef.forEach(e=>console.log(`Категория ${e.firstElementChild.textContent}\nКоличество элементов: ${e.lastElementChild.children.length}`),
)

