//functie care calculeaza daca un numar e par sau impar
function isImpar(nr) {
    if ((nr % 2) == 1) { //= cand facem atribuire; == egal matematic
        return true;
    }
    else {
        return false;
    }
    isImpar(5);
    isImpar(7);
    isImpar(9);
}
//functie care afiseaza toate numerele mai mici de 20 care sunt impare
function impare() {
    for (var i = 1; i < 20; i++) {
        if (isImpar(i)) {
            console.log(i);
        }
    }
}
console.log(impare()); //asta e pentru a verifica daca functioneaza, scris in consola: impare
//functie care intoarce o lista cu toate numerele impare
//to do: lista pentru stocare numere
//to do: incepem sa adaugam in lista, se umple cu toate numerele impare si apoi returneaza lista
//parametrul e foaia goala care intra in functie (imprimanta) si returneaza foaia scrisa
function impare2() {
    var arr = [];
    for (var i = 1; i < 20; i++) {
        if (isImpar(i)) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(impare2());
//arrNumber=[1,2,8,17]
function impare3(arrNr) {
    var arr = [];
    for (var i = 0; i < arrNr.length; i++) {
        if (isImpar(arrNr[i])) {
            arr.push(arrNr[i]);
        }
        return arr;
    }
    impare3([1, 2, 8, 17]);//<-facem apel de functie
    //sau asa: var b=[1,2,8,17];
    //impare(b);
}
console.log(impare3([]));
//functie care-mi intoarce true sau false daca un numar primit ca parametru este par sau impar
function isPar(nr) {
    if (nr % 2 == 0) {
        return true;
    }
    else {
        return false;
    }

}
isPar(8);
//0<=nr<=20 sa-mi afiseze toate numerele pare
function isPar2() {
    var arr = [];
    for (var i = 0; i <= 20; i++) {
        if (isPar(i)) {
            console.log(i);
        }
    }
}
//sa faca return cu lista numere are
function isPar3() {
    var arr = [];
    for (var i = 0; i <= 20; i++) {
        if (isPar(i)) {
            arr.push(i);
        }
    }
    return arr;
}


