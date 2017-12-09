function addToCart() {
    document.getElementById("idAddToCart_div").style.display = "block";
    
    setTimeout(function () {
        document.getElementById("idAddToCart_div").style.display = "none";
    }, 2000)
}
var idprodus = window.location.search.substring(10); /* doar 1, nu ?idProdus=1 */

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        window.coffee = JSON.parse(xhttp.responseText)
        draw(coffee);
    }
};
xhttp.open("GET", "https://cotroccino.firebaseio.com/produse/"+idprodus+".json", true);
xhttp.send();

function draw (cafea) {
    document.getElementById("img").src=cafea.img;
    document.getElementById("name").innerHTML=cafea.name;
    document.getElementById("description").innerHTML=cafea.description;
    document.getElementById("price").innerHTML=cafea.price;
    document.getElementById("stock").innerHTML=cafea.stock;
}