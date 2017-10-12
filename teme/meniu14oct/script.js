var MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/.json";
var MENU_ITEM_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu/";

var gJson;
function afiseazaProduse() {
    var produs = document.getElementById("search").value;

    var xhttp = new XMLHttpRequest(); //face o instanta de obiect
    xhttp.onreadystatechange = function () { //se specifica comportamentul daca primim 200
        if (this.readyState == 4 && this.status == 200) { //aici incepe tratamentul raspunsul de la server ->
            var json = this.responseText;
            console.log(json);
            gJson = json;

            var image = JSON.parse(json).weather[0].icon;
            var sufix =".png";
            document.getElementById("poza").src = URL_WEATHER_ICON_PREFIX + image + sufix; 

            /*var nume = JSON.parse(json).weather[0].description;
            document.getElementById("descriere").innerHTML = descriereAcum;

            var ingrediente = JSON.parse(json).weather[0].description;
            document.getElementById("descriere").innerHTML = descriereAcum;
            
            buton detalii*/

        }
    };
    xhttp.open("GET", MENU_ITEM_SERVER_URL + search, true); //true - async, false - sync
    xhttp.send();
}