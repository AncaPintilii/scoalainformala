/* Am nevoie de o functie care sa:
1. deseneze tabelul -> draw_cart ()
2. urce comanda fiecaruia -> updateCart ()
3. sa poata sterge produse din cart -> deleteItemInCart ()
4. sa poate adauga/scoate din cantitatea fiecarui produs in parte -> addQuantity()/substractQuantity()
5. delete all cart?-> deleteAllUserCart()
6. sub butonul de buy, un calendar, cu tot cu ora, pentru a selecta cand anume poate veni omu' sa-si ridice cafelele
7. calculeze totalul (subtotal + TVA)

///////////// start preluare json ///////////*/
window.onload = function(){addCart();};

function addCart() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.table_cart = JSON.parse(xhttp.responseText);
            draw_cart(table_cart);
        }
    };
    xhttp.open("GET", "https://cotroccino.firebaseio.com/cart/.json", true);
    xhttp.send();
}
/*///////////// stop preluare json ///////////*/
/*///////////// start creare tabel ///////////*/


function draw_cart(table_cart) {

    var str = "";
    var list = Object.keys(table_cart);
    for (var i = 0; i < list.length; i++) {
        var coffee = table_cart[list[i]];

        str = `<thead><tr>
        <th style="width: 40%">Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub-total</th>
                    <th>Delete item</th>
                </tr></thead>
                <tbody><tr>
            `;
        //cum pun + si - la quantity? sunt a href-uri? sigur nu e bine ce-am scris 
        str += `<td><p>${coffee.name}</p></td>
                <td><p>${coffee.price}</p></td>
                <td> <a href="#"> - </a>  
                    <p>${coffee.quantityItem}</p>  
                    <a href="#"> + </a> 
                </td> 
                <td>${coffee.subtotal}</td>
                <td><button onclick='deleteItemInCart(${i});'>Delete</button></td>`
        if (i % 1 == 0) {
            str += ` </tr>
            <tr>`
        }
    }
    str += "</tr></tbody>";
    document.querySelector("#table_cart").innerHTML = str;
}

function showItemsInCart() {
    var coffee = {};

    var name = document.getElementById("name").value;
    var price = document.getElementById("price").value;
    var quantityItem = document.getElementById("quantityItem").value;
    var subtotal = coffee.quantityItem * coffee.price;
    var idProdus = window.location.search.substring(10);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.table_cart = JSON.parse(xhttp.responseText)
            //getAllFromFirebaseCart();
            draw_cart()
        }
    };
    xhttp.open("POST", "https://cotroccino.firebaseio.com/cart.json", true);
    xhttp.send(JSON.stringify(coffee));
}
//getAllFromFirebaseCart ()


/*///////////// stop creare tabel ///////////*/

/*///////////// start update cart ///////////*/
function updateCart() {

}
/*///////////// stop update cart ///////////*/

/*///////////// start delete item de tot ///////////*/
function deleteItemInCart() {

}
/*///////////// stop delete item de tot ///////////*/

function addQuantity () {

}
/*///////////// stop add quantity ///////////*/

/*///////////// start substract quantity ///////////*/
function substractQuantity () {

}
/*///////////// stop substract quantity ///////////*/

/*///////////// start delete all cart ///////////*/
 function deleteAllUserCart () {

}
/*///////////// stop delete all cart ///////////*/

/*///////////// start calendar+ora pentru ridicat comanda ///////////*/

/*///////////// stop calendar+ora pentru ridicat comanda ///////////*/
/*///////////// start calculat totalul (subtotal + tva) ///////////*/

/*///////////// stop calculat totalul (subtotal + tva) ///////////*/