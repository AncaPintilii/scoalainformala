/*tema*/
var elevi = [];
var note = [];
var indexElevPeCareAmDatClick;
var medieNote = [];
///elevi///
function adaugareElev() {
    var nume = document.getElementById("nume_elev").value;
    elevi.push(nume);
    note.push([]); //initializaeaza lista de note a elevului
    medieNote.push(0);
    document.getElementById("nume_elev").value = ""; //sterge ce era mai devreme scris in input
}
function displayElevi() {
    var htmlElevi = `
        <table  style="color: #BF789F"><tr> <th>Nume elev</th><th>Medie note</th><th></th></tr>`;
    for (var i = 0; i < elevi.length; i++) {
        htmlElevi = htmlElevi + `
        <tr><td>${elevi[i]}</td><td>${medieNote[i]}</td>
        <td> <button onclick="indexElevPeCareAmDatClick=${i}; displayNote();">Vezi notele</button> 
            </td></tr>`;
    }
    htmlElevi = htmlElevi + "</table>"
    document.getElementById("lista_elevi").innerHTML = htmlElevi;

}

function displayNote() {
    document.getElementById("span_nume_elev").innerHTML = elevi[indexElevPeCareAmDatClick];
    document.getElementById("note_wrapper").style.display = "block";
    //PAS 1 preluam notele pe care le are elevul
    var noteElev = note[indexElevPeCareAmDatClick];
    //pas 2 compunem htmlul cu notele elevului
    var htmlNote = "";
    for (var i = 0; i < noteElev.length; i++) {
        htmlNote = htmlNote + noteElev[i] + "<br />";
    }
    //pas 3 = afisam htmlul cu notele elevului in ecran
    document.getElementById("lista_note").innerHTML = htmlNote;
}

function hideNote() {
    document.getElementById("note_wrapper").style.display = "none";
}
function adaugaNota() {
    var nota = document.getElementById("nota_elev").value; //nota introduse de utilizator in ecran
    //PAS 1 preiau lista de note din matrice
    var noteElev = note[indexElevPeCareAmDatClick];
    //PAS 2 adaug nota noua in lista
    noteElev.push(nota);
    document.getElementById("nota_elev").value = "";
}
//pentru a calcula media.... ->
function sumaNoteElev() {
    var noteElev = note[indexElevPeCareAmDatClick];
    var sum = 0;
    for (var i = 0; i < noteElev.length; i++) {
        sum = sum + parseInt(noteElev[i]);
    }
    return sum;
}

function medieNoteElev() {
    var noteElev = note[indexElevPeCareAmDatClick];
    var sumaNote = sumaNoteElev();
    var nrNote = noteElev.length;
    var mediaNotelor = sumaNote / nrNote;
    return mediaNotelor;
}
/////////////////////////////////////////
function maxMedie(a) {
    var max_medie = a[0];
    for (var i = 0; i < a.length; i++) {
        if (max_medie < a[i]) {
            max_medie = a[i];
        }
    }
    return max_medie;
}

function minMedie(a) {
    var min_medie = a[0];
    for (var i = 0; i < a.length; i++) {
        if (min_medie > a[i]) {
            min_medie = a[i];
        }
    }
    return min_medie;
}

function maxNota(a) {
    var max_nota = a[0];
    for (var i = 0; i < a.length; i++) {
        if (max_nota < a[i]) {
            max_nota = a[i];
        }
    }
    return max_nota;
}
function minNota(a) {
    var min_nota = a[0];
    for (var i = 0; i < a.length; i++) {
        if (min_nota > a[i]) {
            min_nota = a[i];
        }
    }
    return min_nota;
}
//////

function sortAscMedie(medieNote) {
    medieNote2 = medieNote[elevi].slice();
    var sortedArray = [];
    var nrElem = medieNote2.length;
    for (var i = 0; i < nrElem; i++) {
        var min = minMedie(medieNote2);
        var position = medieNote2.indexOf(min);
        medieNote2.splice(position, 1);
        sortedArray.push(min);
    } medieNote[elevi] = sortedArray;
    displayElevi(sortedArray);
}

function sortDescMedie(medieNote) {
    medieNote2 = medieNote[elevi].slice();
    var sortedArray = [];
    var nrElem = medieNote2.length;
    for (var i = 0; i < nrElem; i++) {
        var max = maxMedie(medieNote2);
        var position = medieNote2.indexOf(max);
        medieNote2.splice(position, 1);
        sortedArray.push(max);
    } 
    medieNote[elevi] = sortedArray;
    displayElevi(sortedArray);
}
////
function sortAscNote(note) {
    note2 = note[indexElevPeCareAmDatClick].slice();
    var sortedArray = [];
    var nrElem = note2.length;
    for (var i = 0; i < nrElem; i++) {
        var min = minNota(note2);
        var position = note2.indexOf(min);
        note2.splice(position, 1);
        sortedArray.push(min);
    }
    displayElevi(sortedArray);
    note[indexElevPeCareAmDatClick] = sortedArray;
    displayNote();
    return sortedArray;
}


function sortDesNote(note) {
    note2 = note[indexElevPeCareAmDatClick].slice();
    var sortedArray = [];
    var nrElem = note2.length;
    for (var i = 0; i < nrElem; i++) {
        var max = maxNota(note2);
        var position = note2.indexOf(max);
        note2.splice(position, 1);
        sortedArray.push(max);
    }
    displayElevi(sortedArray);
    note[indexElevPeCareAmDatClick] = sortedArray;
    displayNote();
    return sortedArray;
}



