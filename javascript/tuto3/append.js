const g = t => document.createElement(t)

// const table = g("table")
// table.className = "table"

// const thead = g('thead')
// const tr = g('tr')

// const th = g('th')
// th.innerText = "#"
// th.setAttribute('scope', 'col')
// const tbody = g('tbody')
// const tdFirst = g('td')
// tdFirst.innerText = 'Joe'
// const tdLast = g('td')
// tdLast.innerText = 'Dalton'

// tdFirst.setAttribute('style', 'border: 2px solid red')

// tbody.append(tr, tdFirst, tdLast)
// tr.append(th)
// thead.append(tr)
// table.append(thead, tbody)

// document.body.append(table)

// console.log(table)


//card
let show = document.querySelector('.show')

let img = g('img')
img.setAttribute('src', "https://dierspecialist.nl/media/Adviesformulier-kat-1000x500.jpg")
img.setAttribute('style', 'width:450px; border-radius:10px')

const textContainer = g('div')
const text = g('p')
text.innerText = "Dit is een cardcontainer gemaakt met javascript dmv createElement en append"
textContainer.append(text)

show.append(img, textContainer)

//maak een functie om deze card container te maken

function makeCardContainer(image, cardTitle, description ){
    const card = g('div')
    card.setAttribute('style', 'width: 10rem; display: flex; flex-direction:column; margin: 3rem; border: 2px dotted black;')

    const cardImg = g('img')
    cardImg.setAttribute('src', `${image}`)
    const cT = g('h3')
    cT.innerText = `${cardTitle}`
    const desc = g('p')
    desc.innerText = `${description}`
let button = g('button')
button.setAttribute('style', 'color:white;background-color:red;')
button.innerText = 'info'

card.append(cardImg, cT, desc, button)
document.body.append(card)
}
makeCardContainer("https://flxt.tmsimg.com/assets/p186109_i_v9_ad.jpg", "Avatar", "This is an avatar")
makeCardContainer("https://i.pinimg.com/originals/5c/60/91/5c6091a3a978a99ce44242fae0d5ed4b.jpg", "ME?", "smile, life is beautiful")