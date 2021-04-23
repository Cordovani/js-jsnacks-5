// creare 10 oggetti zucchina con peso,varietà,lunghezza
// calcolare quanto pesano tutte le zucchine

// funzione per creare una zucchina
function creaZucchina() {
    var zucchina = {
        "peso": pesoRandZucchina(),
        "varietà": varietàRandZucchina(),
        "lunghezza": lunghRandZucchina()
    }

}
// funzione peso random zucchina tra i 50g e i 400g
function pesoRandZucchina() {
    return (Math.random() * (500 - 4000) + 1).toFixed(1);
}

// funzione lunghezza random zucchina tra i 7cm e i 28 cm
function lunghRandZucchina() {
    return (Math.random() * (70 - 280) + 1);
}
// funzione varietà random zucchina
function varietàRandZucchina() {

    var varietàZucchine = ["Zucchina lunga fiorentina", "Zucchina romanesca", "Zucchino siciliano"];
    var randomIndex = (Math.random() * 10).toFixed(0);

    return varietàRandZucchina[randomIndex];

}



// CORPO DEL PROGRAMMA
var zucchine = [];
var sommaPeso = 0;

// creo 10 zucchine 
for (var i = 0; i < 10; i++) {
    zucchine = creaZucchina();
}

// calcolo il peso delle zucchine
for (var j = 0; j < zucchine.length(); j++){
    sommaPeso += zucchine[j].peso;
}

// stampo l'output del programma
console.log(zucchine);
console.log(sommaPeso);