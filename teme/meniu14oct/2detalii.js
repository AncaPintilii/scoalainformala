var id = window.location.search.substring(10);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        window.menu = JSON.parse(xhttp.responseText)
        draw(menu);
    }
};
xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/menu/"+id+".json", true);
xhttp.send();

function draw (menu) {
    document.getElementById("imagine").src=menu.imagine;
    document.getElementById("nume").innerHTML=menu.nume;
    document.getElementById("ingrediente").innerHTML=menu.ingrediente;
    document.getElementById("reteta").innerHTML=menu.reteta;
}
