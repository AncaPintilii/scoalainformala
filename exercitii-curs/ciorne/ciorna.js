/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
functie care calculeaza daca un numar e par sau impar
function isImpar(a) {
    if (a % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
functie care afiseaza (CONSOLE.LOG) toate numerele mai mici de 20 care sunt impare
function isImpar2() {
    for (var i = 0; i < 20; i++) {
        if (isImpar(i)) {
            console.log(i);
        }
    }
}
console.log(isImpar2());
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
functie care intoarce (PUSH) o lista cu toate numerele impare mai mici de 20
function impare() {
    var arr = [];
    for (var i = 1; i < 20; i++) {
        if (isImpar(i)) {
            arr.push(i);
        }
    }
    return arr;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
imi intoarce numerele impare din array-ul [1,2,8,17] -> DE CE-MI DA ASTA UNDEFINED? :(
function impare2(arrNr) {
    var arr = [];
    for (var i = 1; i < arrNr.length; i++) {
        if (isImpar(arrNr[i])) {
            arr.push(arrNr[i]);
        }
        return arr;
    } 

impare2([1, 5, 6, 12, 13]);
}
console.log(impare2([]));*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*functie care primeste ca parametru un numar si-mi spune daca e sau nu e multiplu de 5
/*function eMultipluDe5(a) {
    if (a % 5 == 0) {
        return true;
    }
    else {
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
arr de numere care-mi intoarce toate numerele multiplii de 5
function intoarceMultipliiDe5(arrNr) {
    var arr = [];
    for (var i = 0; i < arrNr.length; i++) {
        if (eMultipluDe5(arrNr[i])) {
            arr.push(arrNr[i]);
        }
    }
    return arr;
}
var test = [5, 17, 200, 15];
var multiplii = intoarceMultipliiDe5(test);
for (var i = 0; i < multiplii.length; i++) {
    console.log(multiplii[i]);
}*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*functie care primeste ca parametru un numar si-mi spune daca e sau nu e multiplu de 3
/*function multiplu3(a) {
    if (a % 3 == 0) {
        return true;
    }
    else {
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
arr de numere care-mi intoarce toate numerele multiplii de 3 arrNr = [3, 4, 6, 12]
function getMultipluDe3(arrNr) {
    var arr = [];
    for (var i = 0; i < arrNr.length; i++) {
        if (multiplu3(arrNr[i])) {
            arr.push(arrNr[i]);
        }
    }
    return arr;
}
var test = [3, 4, 6, 12];
var multiplii = getMultipluDe3(test);
for (var i = 0; i < multiplii.length; i++) {
    console.log(multiplii[i]);
}*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//functie care primeste ca parametru un numar si-mi spune daca e sau nu e multiplu de 7
/*function multiplu7(a) {
    if (a % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
arr de numere care-mi intoarce toate numerele multiplii de 7 arrNr = [3, 7, 6, 35]
function getMultiplu7(arrNr) {
    var arr = [];
    for (var i = 0; i < arrNr.length; i++) {
        if (multiplu7(arrNr[i])) {
            arr.push(arrNr[i]);
        }
    }
    return arr;
}
var test = [3, 7, 6, 35];
var multiplii = getMultiplu7(test);
for (var i = 0; i < multiplii.length; i++) {
    console.log(multiplii[i]);
}*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//functie care primeste ca parametru un numar si-mi spune daca e sau nu e multiplu de 17
/*function multiplu17(a) {
    if (a % 17 == 0) {
        return true;
    }
    else {
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
arr de numere care-mi intoarce toate numerele multiplii de 7 arrNr = [3, 17, 6, 34]
function get17(arrNr) {
    var arr = [];
    for (var i = 0; i < arrNr.length; i++) {
        if (multiplu17(arrNr[i])) {
            arr.push(arrNr[i]);
        }
    }
    return arr;
}
var test = [3, 17, 6, 34];
var multiplii = get17(test);
for (var i = 0; i < multiplii.length; i++) {
    console.log(multiplii[i]);
}*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*multiplii lui 11
function multiplii11(a) {
    if (a % 11 == 0) {
        return true;
    }
    else {
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
afiseaza toti multiplii lui 11 din [11, 3, 22, 13]
function getMultiplu11(arrNr) {
    var arr = [];
    for (var i = 0; i < arrNr.length; i++) {
        if (multiplii11(arrNr[i])) {
            arr.push(arrNr[i]);
        }
    }
    return arr;
}
var test = [11, 3, 22, 13];
var multiplu = getMultiplu11(test);
for (var i = 0; i < multiplu.length; i++) {
    console.log(multiplu[i]);
}
//var medie aritmetica
var suma = 0;
var medie = 0;
var multiplu = getMultiplu11(test);

for (var i = 0; i < multiplu.length; i++) {
suma = suma + multiplu[i];
}
medie = suma / multiplu.length;
console.log(medie);
//produsul multiplilor si produsul multiplilor/numarul de multiplii
var produs = 1;
var medieCiudata = 1; 
var multiplu = getMultiplu11(test);
for (var i = 0; i < multiplu.length; i++) {
produs = produs * multiplu[i];
}
medieCiudata = produs / multiplu.length;
console.log(medieCiudata);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
true - async, false - sync
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
orice aduni cu un string, rezultatul va fi tot string
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
https://developer.mozilla.org/en-US/docs/Web/API/Element//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
tranzactii: acid: atomic consistenta independente durbile
    console, button 2 stanga toggle
operatii pe baza de date -> http verbs
C reate -> P ost
R ead ->  G et
U pdate -> P ut
D elete -> D elete
-> cand scriu ceva in url si dau enter, asta e GET
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



*/