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
            window.my_cart = JSON.parse(xhttp.responseText);
            draw_cart(my_cart);
        }
    };
    xhttp.open("GET", "https://cotroccino.firebaseio.com/produse/.json", true);
    xhttp.send();
}
/*///////////// stop preluare json ///////////*/
/*///////////// start creare tabel ///////////*/
function draw_cart(my_cart) { /////
    //var str2 = JSON.stringify(cart); 
    var str2 = "";
    var str = `<tr>
                    <th style="width: 40%">Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub-total</th>
                    <th>Delete item</th>
                </tr>
            `;


    var list = Object.keys(my_cart);
    for (var i = 0; i < list.length; i++) {
        var coffee = my_cart[list[i]];//cum pun + si - la quantity? sunt a href-uri? sigur nu e bine ce-am scris 
        str += `<td><p>${coffee.name}</p></td>
                <td><p>${coffee.price}</p></td>
                <td>  
                    <a href="" onclick="substractQuantity()"> - </a>  
                    <p>${coffee.quantityItem}</p>  
                    <a href="" onclick="addQuantity()"> + </a> 
                </td> 
                <td><button onclick='deleteItemInCart(${i});'>Delete</button></td>`
        if (i % 1 == 0) {
            str += ` </tr>
            <tr>`
        }
    }
    str += "</tr>";
    document.querySelector("#my_cart").innerHTML = str;
}



/*///////////// stop creare tabel ///////////*/

/*///////////// start update cart ///////////*/
function updateCart() {

}
/*///////////// stop update cart ///////////*/

/*///////////// start delete item de tot ///////////*/
/*function deleteItemInCart() {

}
/*///////////// stop delete item de tot ///////////*/

/*///////////// start add quantity ///////////*/
/*function addQuantity () {

}*/
/*///////////// stop add quantity ///////////*/

/*///////////// start substract quantity ///////////*/
/*function substractQuantity () {

}*/
/*///////////// stop substract quantity ///////////*/

/*///////////// start delete all cart ///////////*/
/* function deleteAllUserCart () {

}*/
/*///////////// stop delete all cart ///////////*/

/*///////////// start calendar+ora pentru ridicat comanda ///////////*/

/*///////////// stop calendar+ora pentru ridicat comanda ///////////*/
/*///////////// start calculat totalul (subtotal + tva) ///////////*/

/*///////////// stop calculat totalul (subtotal + tva) ///////////*/