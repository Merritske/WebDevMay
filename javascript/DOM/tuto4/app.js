//selectors: parent - sibling - child
const firstColEl = document.querySelector('.first');
//first sibling element
const nextSiblingEl = firstColEl.nextElementSibling

const parentRowContainer = document.querySelector('.columns')

const nextSiblingEl2 = parentRowContainer.firstElementChild.nextElementSibling
//andere manier: parentRowContainer.children[0].nextElementSibling
console.log(nextSiblingEl) //second
console.log(nextSiblingEl2) //second

const prevSibling = parentRowContainer.lastElementChild.previousElementSibling
console.log(prevSibling) //first

//not existing element zoeken geeft 'null'

//insert new elements
let test1 = document.createElement('h2')
test1.innerText = "hello friend!"
parentRowContainer.children[1].insertBefore(test1, null)

//create element => function
const g = t=>document.createElement(t)

const divCol = g('div')
divCol.className = 'col-md-3 bg-danger p-5'
parentRowContainer.insertBefore(divCol, parentRowContainer.lastElementChild) //laatste parameter bepaald de plaats van de insert
const divCol2 = g('div');
divCol2.className = 'col-md-3 bg-dark p-5'
parentRowContainer.insertAdjacentElement('afterbegin', divCol2)//eerste parameter bepaalt de plaats
const divCol3 = g('div')
divCol3.className = 'col-md-3 bg-warning p-5'
parentRowContainer.insertAdjacentElement('beforebegin', divCol3)

const divCol4 = g('div')
divCol4.className = 'col-md-3 bg-secondary p-5 text-light'
divCol4.innerText = 'divCol append'
parentRowContainer.append(divCol4)


