let light = document.querySelector("#light")

let isLightOn = false;
light.addEventListener('click', (e) => {
    e.preventDefault();
    switch (isLightOn) {
        case true:
            lightController.lightOff();
            break;
        case false:
            lightController.lightOn();
            break;
        default:
            console.log("something went wrong")
    }
})


//define in an object

const lightController = {
    lightOn: () => {
        console.log("on")
        isLightOn = true
        document.body.style.backgroundColor = "black"
        light.style.backgroundColor = "grey"
        light.style.color = "black"
    },
    lightOff: () => {
        console.log("off")
        isLightOn = false
        document.body.style.backgroundColor = "grey"
        light.style.backgroundColor = "black"
        light.style.color = "grey"
    }
}

// let titel = document.querySelector("#titel")
//  titel.innerHTML = prompt("geef een titel")