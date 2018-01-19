/* Am nevoie de o functie care sa:
1. deseneze tabelul -> draw_cart ()
2. urce comanda fiecaruia -> updateCart ()
3. sa poata sterge produse din cart -> deleteItemInCart ()
4. sa poate adauga/scoate din cantitatea fiecarui produs in parte -> addQuantity()/substractQuantity()
5. delete all cart?-> deleteAllUserCart()
6. sub butonul de buy, un calendar, cu tot cu ora, pentru a selecta cand anume poate veni omu' sa-si ridice cafelele
7. calculeze totalul (subtotal + TVA)

///////////// start preluare json ///////////*/
function addCart() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.table_cart = JSON.parse(xhttp.responseText);
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
                <td>  
                    <a href="#"> - </a>  
                    <p>${coffee.quantityItem}</p>  
                    <a href="#"> + </a> 
                </td> 
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

    coffee.name = document.getElementById("name").value;
    coffee.price = document.getElementById("price").value;
    coffee.quantityItem = document.getElementById("quantityItem").value;
    //coffee.idProdus = document.getElementById("idProdus").value; nu-mi dau seama daca trebuie si idProdus..

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.table_cart = JSON.parse(xhttp.responseText)
            //getAllFromFirebaseCart();
            addCart()
        }
    };
    xhttp.open("PUT", "https://cotroccino.firebaseio.com/cart.json", true);
    xhttp.send(JSON.stringify(coffee));
}
addCart()
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