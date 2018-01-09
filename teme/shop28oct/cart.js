/* Am nevoie de o functie care sa:
1. deseneze tabelul
2. urce comanda fiecaruia
3. sa poata sterge produse din cart
4. sa poate adauga/scoate din cantitatea fiecarui produs in parte
5. delete all cart?

///////////// start preluare json ///////////*/
function addCart() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.cart = JSON.parse(xhttp.responseText)
            draw(cart);
        }
    };
    xhttp.open("GET", "https://cotroccino.firebaseio.com/produse/.json", true);
    xhttp.send();
}
/*///////////// stop preluare json ///////////*/

/*///////////// start creare tabel ///////////*/
var createCart=[];

function createCart(cart) {

    var str = `<tr>
                    <th style="width: 40%">Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub-total</th>
                    <th>Delete item</th>
                </tr>
            `;

    var str2 = JSON.stringify(cart);
//////////////de modificat de aici incolo
    /*var list = Object.keys(cart);
    for (var i = 0; i < list.length; i++) {
        var coffee = cart[list[i]];
        str += `<td><button onclick='change(${JSON.stringify(coffee)},${i})'>${coffee.name}</button></td>
            <td><p>${coffee.price}</p></td>
            <td><p>${coffee.stock}</p></td>
            <td style="width: 35px"><button onclick='deleteItem(${i});'>Delete</button></td>`
        if (i % 1 == 0) {
            str += ` </tr>
            <tr>`
        }
    }
    str += "</tr></tbody>";
    document.querySelector("#cart table").innerHTML = str;
}*/






/*///////////// stop creare tabel ///////////*/

/*///////////// start update cart ///////////*/
/*///////////// stop update cart ///////////*/

/*///////////// start delete item de tot ///////////*/
/*///////////// stop delete item de tot ///////////*/

/*///////////// start add quantity ///////////*/
/*///////////// stop add quantity ///////////*/

/*///////////// start substract quantity ///////////*/
/*///////////// stop substract quantity ///////////*/

/*///////////// start delete all cart ///////////*/
/*///////////// stop delete all cart ///////////*/