/*///////////// start confirmare buton Add To Cart ///////////*/
function addToCartConfirmarion() {
    document.getElementById("idAddToCart_div").style.display = "block";

    setTimeout(function () {
        document.getElementById("idAddToCart_div").style.display = "none";
    }, 2000)
}
/*///////////// stop confirmare buton Add To Cart ///////////*/
///////////// start preluare json ///////////*/
var idprodus = window.location.search.substring(10); /* doar 1, nu ?idProdus=1 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        window.coffee = JSON.parse(xhttp.responseText)
        draw(coffee);
    }
};
xhttp.open("GET", "https://cotroccino.firebaseio.com/produse/" + idprodus + ".json", true);
xhttp.send();
/*///////////// stop preluare json ///////////*/
///////////// start creare "tabel" detalii ///////////*/
function draw(cafea) {
    document.getElementById("img").src = cafea.img;
    document.getElementById("name").innerHTML = cafea.name;
    document.getElementById("description").innerHTML = cafea.description;
    document.getElementById("price").innerHTML = cafea.price;
    document.getElementById("stock").innerHTML = cafea.stock;
}
///////////// stop creare "tabel" detalii ///////////*/
///////////// start add to cart ///////////*/
class userChoice {
    constructor(id, nameItem, priceItem, quantityItem, subtotalItem) {
        this.id = id;
        this.name = nameItem;
        this.price = priceItem;
        this.quantity = quantityItem;
        this.subtotal = subtotalItem;
    }
}
function addToCart() {
    var addToCartName = document.getElementById("name").innerHTML;
    var addToCartPrice = parseInt(document.getElementById("price").innerHTML);
    var addtoCartQuantity = parseInt(document.getElementById("coffee_quantity").value);
    var subTotal = addtoCartQuantity * addToCartPrice;
    var itemId = document.getElementById("id").value; //eroare aici, value of null
    var userItem = new userChoice(addToCartName, addToCartPrice, addtoCartQuantity, subTotal, itemId);
    

    if (addtoCartQuantity > 0 && addtoCartQuantity <= parseInt(document.getElementById("stock").innerHTML)) {
        updateFirebaseUser ("https://cotroccino.firebaseio.com/produse.json, userItem");
   }
   else {
       alert("Too much items for our stock!");
   }
}
///////////// stop add to cart ///////////*/