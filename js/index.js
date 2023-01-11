console.log("This file is now connected");

// function showerfarenhetMiroiTags() {
//     const paragrapherfarenhetMiroiTags = document.getElementById("erfarenhet-miroi-tags")
//     if (paragrapherfarenhetMiroiTags.innerText === "Jobbade som coach och servicelärare, där allt från utlärning, prov, läxor samt all annan registrering.") {
//         paragrapherfarenhetMiroiTags.innerText = ""
//     } else {
//         paragrapherfarenhetMiroiTags.innerText = ""
//     }
// }


// function showerfarenhetTeledialogTags() {
//     const paragrapherfarenhetTeledialogTags = document.getElementById("erfarenhet-teledialog-tags")
//     if (paragrapherfarenhetTeledialogTags.innerText === "Jobbade som coach och servicelärare, där allt från utlärning, prov, läxor samt all annan registrering.") {
//         paragrapherfarenhetTeledialogTags.innerText = ""
//     } else {
//         paragrapherfarenhetTeledialogTags.innerText = ""
//     }
// }

// function showerfarenhetLivskunskapTags() {
//     const paragrapherfarenhetLivskunskapTags = document.getElementById("erfarenhet-livskunskap-tags")
//     if (paragrapherfarenhetLivskunskapTags.innerText === "Jobbade som coach och servicelärare, där allt från utlärning, prov, läxor samt all annan registrering.") {
//         paragrapherfarenhetLivskunskapTags.innerText = ""
//     } else {
//         paragrapherfarenhetLivskunskapTags.innerText = "n"
//     }
// }

// function showerfarenhetLocumTags() {
//     const paragrapherfarenhetLocumTags = document.getElementById("erfarenhet-locum-tags")
//     if (paragrapherfarenhetLocumTags.innerText === "Jobbade som coach och servicelärare, där allt från utlärning, prov, läxor samt all annan registrering.") {
//         paragrapherfarenhetLocumTags.innerText = ""
//     } else {
//         paragrapherfarenhetLocumTags.innerText = ""
//     }
// }



// const skillsContent = document.getElementsByClassName('erfarenhet__content'),
//     skillsHeader = document.querySelectorAll('.erfarenhet__header')

// function toggleSkills() {
//     let itemClass = this.parentNode.className
//     for (i = 0; i < skillsContent.length; i++) {
//         skillsContent[i].className = 'erfarenhet__content erfarenhet__close'
//     }
//     if (itemClass === 'erfarenhet__content erfarenhet__close') {
//         this.parentNode.className = 'erfarenhet__content erfarenhet__open'
//     }
// }
// skillsHeader.forEach((el) => {
//     el.addEventListener('click', toggleSkills)
// })


function showerfarenhetMiroiTags() {
    const paragrapherfarenhetMiroiTags = document.getElementById("erfarenhet-miroi-tags")
    if (paragrapherfarenhetMiroiTags.innerText === "") {
        paragrapherfarenhetMiroiTags.innerText = "Lärare i service | Coachning | Föreläsare"
    } else {
        paragrapherfarenhetMiroiTags.innerText = ""
    }
}

function showerfarenhetTeledialogTags() {
    const paragrapherfarenhetTeledialogTags = document.getElementById("erfarenhet-teledialog-tags")
    if (paragrapherfarenhetTeledialogTags.innerText === "") {
        paragrapherfarenhetTeledialogTags.innerText = "Personlig utveckling | Coachning | Samtalsstöd"
    } else {
        paragrapherfarenhetTeledialogTags.innerText = ""
    }
}
function showerfarenhetLivskunskapTags() {
    const paragrapherfarenhetLivskunskapTags = document.getElementById("erfarenhet-livskunskap-tags")
    if (paragrapherfarenhetLivskunskapTags.innerText === "") {
        paragrapherfarenhetLivskunskapTags.innerText = "Lärare i livskunskap | Grupputveckling | Elevstöd"
    } else {
        paragrapherfarenhetLivskunskapTags.innerText = ""
    }
}
function showerfarenhetLocumTags() {
    const paragrapherfarenhetLocumTags = document.getElementById("erfarenhet-locum-tags")
    if (paragrapherfarenhetLocumTags.innerText === "") {
        paragrapherfarenhetLocumTags.innerText = "Chefsassistent | Kundtjänst | Rikstelefonist"
    } else {
        paragrapherfarenhetLocumTags.innerText = ""
    }
}

