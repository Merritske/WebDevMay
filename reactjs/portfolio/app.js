const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function PageTransitions() {
    //Button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', " ")
            this.className += (' active-btn')
        })   
        
    }
    //sections active
    allSections.forEach((sect) => {
        console.log(sect)
        sect.addEventListener('click', function (e) {
            console.log(e.target)
            const id = e.target.dataset.id;
            console.log(id)
            if (id) {
                //remove selected from the other button
            secBtn.forEach((btn) => {
                console.log(btn)
                    btn.classList.remove('active');
                })
                e.target.classList.add('active')
                //hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active')
                })
                const element = document.getElementById(id);
                element.classList.add('active')
            }
        })
    })


}
PageTransitions()



