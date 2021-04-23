// [Snack 2]

// FUNZIONI

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
    return (Math.random() * (400 - 50) + 1).toFixed(1);
}

// funzione lunghezza random zucchina tra i 7cm e i 28 cm
function lunghRandZucchina() {
    return (Math.random() * (28 - 7) + 1).toFixed(0);
}
// funzione varietà random zucchina
function varietaRandZucchina() {

    var varietaZucchine = ["Zucchina lunga fiorentina", "Zucchina romanesca", "Zucchino siciliano"];
    var randomIndex = (Math.random() * (varietaZucchine.length - 1)).toFixed(0);

    return varietaZucchine[randomIndex];

}

// funzione per il peso di un array di zucchine
function pesoZucchineArray(zucchine) {
    peso = 0;

    for (i = 0; i < zucchine.length; i++) {
        peso += parseInt(zucchine[i].peso);
    }

    return peso;
}





// CORPO DEL PROGRAMMA
// Crea 10 oggetti che rappresentano una zucchina.
var zucchine = [];
var zucchineMaggiori15 = [];
var sommaPeso = 0;
var pesoMaggiori15 = 0;


// creo 10 zucchine 
for (var i = 0; i < 10; i++) {
    var nuovaZucchina = creaZucchina();

    zucchine.push(nuovaZucchina);
}

// se le zucchine sono più lunghe di 15 cm le metto nell'altro array e le cancello
for (var j = 0; j < zucchine.length; j++) {
    
    var lunghezzaInEsame = parseInt(zucchine[j].lunghezza);

    if (lunghezzaInEsame > 15) {
        zucchineMaggiori15 = zucchine.slice(j, 1);
    }

}

sommaPeso = pesoZucchineArray(zucchine);
pesoMaggiori15 = pesoZucchineArray(zucchineMaggiori15);



// stampo l'output del programma
console.log(zucchine);
console.log(zucchineMaggiori15);
console.log(sommaPeso + " gr");
console.log(pesoMaggiori15 + " gr");


// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.