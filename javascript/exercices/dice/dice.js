//button
//math.random 1-6
//score +1 als dubbel gegooid
let score = 0;
function rundice() {
    let a = Math.round(Math.random() * 6);
    let b = Math.round(Math.random() * 6);
    let diceA = document.querySelector('.a');
    let diceB = document.querySelector('.b')
    diceA.innerHTML = a;
    diceB.innerHTML = b;
    if (a == b) {
        score++

    }
    console.log(a, b)
    let sc = document.querySelector('.score')
    sc.innerText = score
}



