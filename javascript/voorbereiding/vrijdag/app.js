//EVENTS

//click, mouseenter, mouseover,
//zie w3schools
let mouse = document.querySelector(".mouse")
console.log(mouse)
function mouseenter(){
    mouse.style.width = "300px";
    mouse.style.backgroundColor = "red"
}
function mouseleave(){
    mouse.style.width = "200px"
    mouse.style.backgroundColor = "green"
}

function mousemove(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.querySelector(".mousemove").innerHTML = coor;
  }


let popup = document.getElementById("popup")
function mousedown(){
popup.style.visibility ="visible"
}
function mouseup(){
    popup.style.visibility ="hidden"
    }

    let zichtbaar = true;
    let tekst = document.getElementById("testTekst")
    function tonen(){
        zichtbaar = !zichtbaar;
        console.log(zichtbaar)
        if(zichtbaar == true){
            tekst.style.visibility ="visible"
        }else{
            tekst.style.visibility = "hidden"
        }
    
    }

//BOEKENLIJST
let titel = document.getElementById("titel")
let schrijver = document.getElementById("schrijver")
let verhaal = document.getElementById("verhaal")
let boek = document.getElementById("boek")
let btnLijst = document.getElementById("btnLijst")


btnLijst.addEventListener('click', function(){
    console.log(titel.value)
    boek.innerHTML += `<tr>
    <td>${titel.value}</td>
    <td>${schrijver.value}</td>
    <td>${verhaal.value}</td>
    <td id="vuilbak"><i class="fa-solid fa-trash-can" onclick="removeRij(this)"></i></td
    `

})
function removeRij(e){
    console.log(e.parentElement.parentElement)
e.parentElement.parentElement.remove()
}


    
//BLAD STEEN SCHAAR

let winnaar = document.getElementById("winnaar")
let keuze = document.getElementById("spel");
let pc = document.getElementById("pckeuze")
let options = ["blad", "steen", "schaar"]


let puntpc = 0;
let puntUser = 0;
let punten = document.getElementById("punten")
let count = 0

const uitslag = () => {
    count ++
    let pckeuze = Math.round(Math.random() * 2)
    console.log(options[pckeuze])

    pc.innerHTML = `Keuze van de computer: ${options[pckeuze]}`

    console.log(keuze.value)
    if (keuze.value == "blad" && options[pckeuze] == "blad") {
        winnaar.innerHTML += `<li>geen winnaar </li> `;
    }
    if (keuze.value == "steen" && options[pckeuze] == "blad") {
        winnaar.innerHTML += `<li>jij verliest</li>`
        puntpc ++
    }
    if (keuze.value == "schaar" && options[pckeuze] == "blad") {
        winnaar.innerHTML += `<li>jij wint</li>`;
        puntUser ++
    }
    if (keuze.value == "blad" && options[pckeuze] == "steen") {
        winnaar.innerHTML += `<li>jij wint</li>`
        puntUser ++
    }
    if (keuze.value == "steen" && options[pckeuze] == "steen") {
        winnaar.innerHTML += `<li>geen winnaar </li> `
    }
    if (keuze.value == "schaar" && options[pckeuze] == "steen") {
        winnaar.innerHTML += `<li>jij verliest</li>`
        puntpc ++
    }
    if (keuze.value == "blad" && options[pckeuze] == "schaar") {
        winnaar.innerHTML += `<li>jij verliest</li>`
        puntpc ++
    }
    if (keuze.value == "steen" && options[pckeuze] == "schaar") {
        winnaar.innerHTML += `<li>jij wint</li>`
        puntUser ++
    }
    if (keuze.value == "schaar" && options[pckeuze] == "schaar") {
        winnaar.innerHTML = `<li>geen winnaar </li> `
    }
punten.innerHTML = `Totaal aantal spelletjes: ${count}
<br>De pc heeft ${puntpc} punten <br> u heeft ${puntUser} punten`
}




