/*///////////// start preluare json ///////////*/
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        window.coffees = JSON.parse(xhttp.responseText)
        draw(coffees);
    }
};
xhttp.open("GET", "https://cotroccino.firebaseio.com/produse/.json", true);
xhttp.send();
/*///////////// stop preluare json ///////////*/

/*///////////// start creare tabel ///////////*/
function draw(coffees) {

    var str = `<tr>
        <th>Icon</th>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Remove</th>
    </tr>
    <tr>`;

    var list = Object.keys(coffees);
    for (var i = 0; i < list.length; i++) {
        var coffee = coffees[list[i]];
        str += `<td><img src="${coffee.img}" style="width: 40px; height: 40px"/></td>
            <td> <a href="">${coffee.name}</p></td>
            <td><p>${coffee.price}</p></td>
            <td><p>${coffee.stock}</p> </td>
            <td><button onclick="indexItemPeCareAmDatClick=${i}; deleteItem(); draw();">Delete</button></td>`
        if (i % 1 == 0) {
            str += ` </tr>
            <tr>`
        }
    }
    str += "</tr>";
    document.querySelector("#coffees table").innerHTML = str;
}
/*///////////// stop creare tabel ///////////*/

var indexItemPeCareAmDatClick = "";

function deleteItem() {
    document.getElementById("coffees").style.display = "hidden";
}
function change () {
    document.getElementById("img").value = coffee[indexItemPeCareAmDatClick].img;
    document.getElementById("name").value = coffee[indexItemPeCareAmDatClick].name;
    document.getElementById("description").value = coffee[indexItemPeCareAmDatClick].description;
    document.getElementById("price").value = coffee[indexItemPeCareAmDatClick].price;
    document.getElementById("stock").value = coffee[indexItemPeCareAmDatClick].stock;
}