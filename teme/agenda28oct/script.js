var persoane = [];
class Contact {
    constructor(nume, telefon) {
        this.nume = nume;
        this.telefon = telefon;
    }
}
function adaugarePersoana() {
    var nume = document.getElementById("nume_pers").value;
    var telefon = document.getElementById("telefon_pers").value;
    var c = new Contact(nume, telefon);
    persoane.push(c);
    document.getElementById("nume_pers").value = "";
    document.getElementById("telefon_pers").value = "";
}

var indexPersPeCareAmDaClick = "";

function displayPersoana() {
    var htmlPers = `
    <table style="width: 100%">
        <tr>
            <th>Nume</th>
            <th>Telefon</th>
        </tr>
    
     `;
     for (var i = 0; i < persoane.length; i++) {
        htmlPers = htmlPers + `
        <tr>
            <td>${persoane[i].nume}</td>
            <td>${persoane[i].telefon}</td>
            <td> 
                <button onclick="indexPersPeCareAmDaClick=${i}; modifica()">Modifica</button> 
            </td>
            <td>
                <button onclick="indexPersPeCareAmDaClick=${i}; sterge(); displayPersoana();">Sterge</button> 
            </td>
        </tr>`;
    }
    htmlPers = htmlPers + "</table>"
    document.getElementById("lista_wrapper").innerHTML = htmlPers;
    document.getElementById("lista_wrapper").style.display = "block"; 
}
function sterge() {
    persoane.splice(indexPersPeCareAmDaClick, 1);
}
function modifica () {
    document.getElementById("nume_pers").value = persoane[indexPersPeCareAmDaClick].nume;
    document.getElementById("telefon_pers").value = persoane[indexPersPeCareAmDaClick].telefon;
}
