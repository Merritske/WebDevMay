//element creator

const g = t=>document.createElement(t)
//container
const container = g('div')
container.className = 'container'
//row
const row = g('div')
row.className = 'row justify-content-center align-items-center text-light'
//columns
const col1 = g('div')
const col1T = document.createTextNode('col 1')
col1.appendChild(col1T)
col1.className = 'col-md-4 bg-primary p-5'

const col2 = g('div')
col2.className = 'col-md-4 bg-warning p-5'
const image = g('img')
image.src = 'https://wpjournalist.nl/wp-content/uploads/2018/04/WordPress-plugins-om-je-afbeeldingen-te-comprimeren.jpg'
image.className = 'img-fluid'
image.setAttribute('alt', 'smoke')
col2.appendChild(image)
const col3 = g('div')
col3.className = 'col-md-4 bg-danger p-5'

//append 
row.append(col1)
row.append(col2)
row.append(col3)
container.append(row)
document.body.append(container)


//create table
//table, 
//thead, tr, th, td
//tbody, tr, th, td

const table = g('table')
table.className = 'table table-striped'
//thead
const thead = g('thead')
const trofthead = g('tr')
const index = g('th')
index.setAttribute('scope', 'col')
index.innerText = '#'
const thfirstHead = g('th')
thfirstHead.setAttribute('scope', 'col')
thfirstHead.innerText = "A"
const thsecondHead = g('th')
thsecondHead.setAttribute('scope', 'col')
thsecondHead.innerText = 'B'
const ththirdHead = g('th')
ththirdHead.setAttribute('scope', 'col')
ththirdHead.innerText = 'C'

trofthead.append(index)
trofthead.append(thfirstHead)
trofthead.append(thsecondHead)
trofthead.append(ththirdHead)
thead.append(trofthead)
//tbody
const tbody = g('tbody')
const tr1Body = g('tr')
const td11Body = g('td')
const td12Body = g('td')
const td13Body = g('td')
const td14Body = g('td')
const tr2Body = g('tr')
const td21Body = g('td')
const td22Body = g('td')
const td23Body = g('td')
const td24Body = g('td')
const tr3Body = g('tr')
const td31Body = g('td')
const td32Body = g('td')
const td33Body = g('td')
const td34Body = g('td')
const tr4Body = g('tr')
const td41Body = g('td')
const td42Body = g('td')
const td43Body = g('td')
const td44Body = g('td')
tr1Body.append(td11Body,td12Body, td13Body, td14Body)
tr2Body.append(td21Body,td22Body,td23Body, td24Body )
tr3Body.append(td31Body, td32Body,td33Body, td34Body)
tr4Body.append(td41Body, td42Body, td43Body, td44Body)
tbody.append(tr1Body)
tbody.append(tr2Body)
tbody.append(tr3Body)
tbody.append(tr4Body)


table.append(thead)
table.append(tbody)
document.body.append(table)
console.log(table, thead)



