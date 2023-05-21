//  Pour modifier les éléement HTML dans le JavaScript
let countPassenger = document.getElementById("count-passenger")
let savePassenger = document.getElementById("save-passenger")

let passenger = 0 // Pour initialiser le compteur à zéro

//  Pour vérifier si les éléments HTML sont pris en compte
console.log(countPassenger)
console.log(savePassenger)


//  Fonction pour incrémenter les passagers
function increment() {

    passenger += 1 // Ajoute 1 passager à chaque click

    countPassenger.innerText = passenger // Pour afficher le nombre 

    console.log(passenger) // Pour vérifier le comptage des passager

}

//  Fonction pour sauvegarder le nombre de passagers
function save() {

    let countStr = " " + passenger + " -"

    savePassenger.innerText += countStr // Pour sauvegarder chaque étape du processus de comptage 

    countPassenger.innerText = 0 // Pour remettre le compteur à zéro
    passenger = 0 

}

//  Fonction pour reset tout le compteur à zéro
function reset() {

    location.reload() 

}



