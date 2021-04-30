// creare 10 oggetti zucchina con peso,varietà,lunghezza
// calcolare quanto pesano tutte le zucchine

// funzione per creare una zucchina
function creaZucchina() {
    var zucchina = {
        "peso": pesoRandZucchina() + "gr",
        "varietà": varietaRandZucchina(),
        "lunghezza": lunghRandZucchina() + "cm"
    }

    return zucchina;
}

// funzione peso random zucchina tra i 50g e i 400g
function pesoRandZucchina() {
    return Math.floor(Math.random() * (400 - 50) + 50);
}

// funzione lunghezza random zucchina tra i 7cm e i 28 cm
function lunghRandZucchina() {
    return Math.floor(Math.random() * (28 - 7) + 7);
}
}
// funzione varietà random zucchina
function varietaRandZucchina() {

    var varietaZucchine = ["Zucchina lunga fiorentina", "Zucchina romanesca", "Zucchino siciliano"];
    var randomIndex = (Math.random() * (varietaZucchine.length - 1)).toFixed(0);

    return varietaZucchine[randomIndex];

}


// CORPO DEL PROGRAMMA
var zucchine = [];
var sommaPeso = 0;

// creo 10 zucchine 
for (var i = 0; i < 10; i++) {
    var nuovaZucchina = creaZucchina();

    zucchine.push(nuovaZucchina);
}

// calcolo il peso delle zucchine
for (var j = 0; j < zucchine.length; j++) {

    sommaPeso += parseInt(zucchine[j].peso);
}

// stampo l'output del programma
console.log(zucchine);
console.log(sommaPeso + "gr");



// var zucchina = creaZucchina();
// console.log(zucchina);