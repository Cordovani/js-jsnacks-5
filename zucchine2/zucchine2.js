// [Snack 2]

// FUNZIONI

// funzione per creare una zucchina
function creaZucchina() {
    var zucchina = {
        "peso": pesoRandZucchina(),
        "varietà": varietaRandZucchina(),
        "lunghezza": lunghRandZucchina()
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

// funzione varietà random zucchina
function varietaRandZucchina() {

    var varietaZucchine = ["Zucchina lunga fiorentina", "Zucchina romanesca", "Zucchino siciliano"];
    var randomIndex = Math.round(Math.random() * (varietaZucchine.length - 1));

    return varietaZucchine[randomIndex];

}

// // funzione per il peso di un array di zucchine
// function pesoZucchineArray(zucchine) {
//     peso = 0;

//     for (i = 0; i < zucchine.length; i++) {
//         peso += parseInt(zucchine[i].peso);
//     }

//     return peso;
// }

// // una funzione che ritorna true se la lunghezza della zucchina è maggiore di 15
// function isGreat15(zucchina){

// }

// CORPO DEL PROGRAMMA
// Crea 10 oggetti che rappresentano una zucchina.
var zucchine = [];
var zucchineMaggiori15 = [];
var zucchineMinori15 = [];

var sommaPeso = 0;
var pesoMaggiori15 = 0;


// creo 10 zucchine 
for (var i = 0; i < 10; i++) {
    var nuovaZucchina = creaZucchina();

    zucchine.push(nuovaZucchina);
}


// se le zucchine sono più lunghe di 15 cm le metto nell'altro array e le cancello
for (var j = 0; j < zucchine.length; j++) {

    // var lunghezzaInEsame = zucchine[j].lunghezza;
    // if (lunghezzaInEsame > 15) {
    //     zucchineMaggiori15.push(zucchine.slice(j, 1));
    // }
    // console.log(zucchine.slice(j,1));

    var zucchinaCorrente = zucchine[j];

    // caso zucchina maggiore di 15
    if (zucchinaCorrente.lunghezza >= 15) {
        zucchineMaggiori15.push(zucchinaCorrente);
        pesoMaggiori15 += zucchinaCorrente.peso;
    
    // caso zucchina minore di 15
    } else if (zucchinaCorrente.lunghezza < 15) {
        zucchineMinori15.push(zucchinaCorrente);
        sommaPeso += zucchinaCorrente.peso;
    }


} //rivisto post correzione in aula

// sommaPeso = pesoZucchineArray(zucchine);
// pesoMaggiori15 = pesoZucchineArray(zucchineMaggiori15);

// stampo l'output del programma
console.log(zucchineMinori15);
console.log(zucchineMaggiori15);
console.log("la somma delle zucchine con lunghezza < di 15cm è di: " + sommaPeso.toFixed(2) + " gr");
console.log("la somma delle zucchine con lunghezza > o = di 15cm è di: " + pesoMaggiori15.toFixed(2) + " gr");


// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.