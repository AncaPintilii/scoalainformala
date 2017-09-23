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
        <table>
            <tr>
                <th>Nume elev </th>
                <th>Medie note</th>
                <th></th>
            </tr>
    `;
    for (var i = 0; i < elevi.length; i++) {
        htmlElevi = htmlElevi + `
        <tr>
            <td>${elevi[i]}</td>
            <td>${medieNote[i]}</td>
            <td> <button onclick="indexElevPeCareAmDatClick=${i}; displayNote();">Vezi notele</button> 
            </td>
        `;
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
