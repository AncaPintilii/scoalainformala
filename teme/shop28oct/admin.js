/*///////////// start preluare json ///////////*/
function update() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.coffees = JSON.parse(xhttp.responseText)
            draw(coffees);
        }
    };
    xhttp.open("GET", "https://cotroccino.firebaseio.com/produse/.json", true);
    xhttp.send();
}
/*///////////// stop preluare json ///////////*/

/*///////////// start creare tabel ///////////*/
function draw(coffees) {

    var str = `<thead><tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Remove</th>
    </tr></thead>
    <tbody><tr>`;

    var str2 = JSON.stringify(coffees);

    var list = Object.keys(coffees);
    for (var i = 0; i < list.length; i++) {
        var coffee = coffees[list[i]];
        str += `<td><img src="${coffee.img}" style="width: 40px; height: 40px"/></td>
            <td style="width: 150px"><button onclick='change(${JSON.stringify(coffee)},${i})'>${coffee.name}</button></td>
            <td><p>${coffee.description}</p></td>
            <td><p>${coffee.price}</p></td>
            <td><p>${coffee.stock}</p></td>
            <td style="width: 35px"><button onclick='deleteItem(${i});'>Delete</button></td>`
        if (i % 1 == 0) {
            str += ` </tr>
            <tr>`
        }
    }
    str += "</tr></tbody>";
    document.querySelector("#coffees table").innerHTML = str;
}
/*///////////// stop creare tabel ///////////*/

/*////////////// start buton cancel ce sterge totul scris in cele 5 inputuri de change/add//////////*/
function ClearFields() {

    document.getElementById("img").value = "";
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("idProdus").value = "";
}
/*////////////// stop buton cancel ce sterge totul scris in cele 5 inputuri de change/add//////////*/

/* //////////////start buton care sterge din baza de date produsul initial dupa ce-l modifici//////////*/
function deleteItem(i) {
    document.querySelector(`#coffees table tbody tr:nth-of-type(${i + 1})`).style.display = "none";
    var idProdus = window.location.search.substring(10);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           var coffee = JSON.parse(xhttp.responseText);
        }
    };
    xhttp.open("DELETE", "https://cotroccino.firebaseio.com/produse/" + coffees.idProdus + ".json", true);
    xhttp.send();
}

/* //////////////stop buton care sterge din baza de date produsul initial dupa ce-l modifici//////////*/

/*/////////////pentru a prelua datele din tabel///////////*/
function change(coffee, idProdus) {
    document.getElementById("img").value = coffee.img;
    document.getElementById("name").value = coffee.name;
    document.getElementById("description").value = coffee.description;
    document.getElementById("price").value = coffee.price;
    document.getElementById("stock").value = coffee.stock;
    document.getElementById("idProdus").value = idProdus;
}
/*/////////////pentru a salva modificarile in baza de date + a afisa in tabel///////////*/
function saveChangesInTable() {
    var coffee = {};
    coffee.img = document.getElementById("img").value;
    coffee.name = document.getElementById("name").value;
    coffee.description = document.getElementById("description").value;
    coffee.price = document.getElementById("price").value;
    coffee.stock = document.getElementById("stock").value;
    coffee.idProdus = document.getElementById("idProdus").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.coffees = JSON.parse(xhttp.responseText)
            update();
        }
    };
    xhttp.open("PUT", "https://cotroccino.firebaseio.com/produse/" + coffee.idProdus + ".json", true);
    xhttp.send(JSON.stringify(coffee));
}
update()
/*/////////////functie pentru a adauga produse noi/////////////*/
function addNewItem() {

    var coffee = {};
    coffee.description = document.getElementById("description").value;
    coffee.img = document.getElementById("img").value;
    coffee.name = document.getElementById("name").value;
    coffee.price = document.getElementById("price").value;
    coffee.stock = document.getElementById("stock").value;
    coffee.idProdus = document.getElementById("idProdus").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.coffees = JSON.parse(xhttp.responseText);
        update();
    }
};
xhttp.open("POST", "https://cotroccino.firebaseio.com/produse/" + coffee.idProdus + ".json", true);
xhttp.send(JSON.stringify(coffee));
}
//saveChangesInTable ()
