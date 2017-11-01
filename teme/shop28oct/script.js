var COFFEE_SERVER_URL = "https://cotroccino.firebaseio.com/.json";
var COFFEE_ITEM_SERVER_URL = "https://cotroccino.firebaseio.com/produse/";
var gJson;

var coffee;
var coffee_list = [];

class COFFEE {
    constructor(id, description, img, name, price, quantity) {
        this.id = id;
        this.description = description;
        this.img = img;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
function getCoffeesAsJson(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText;
            var json = JSON.parse(response);
            gJson = json;
            coffee_list = [];
            /* var keys = Object.keys(json.menu);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var item = json.menu[key];
                meniu.push(new SimpleMenuItem(key, item.nume, item.imagine, item.ingrediente));
            }*/
            var keys = Object.keys(json.produse);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var prod = json.produse[key];
                listaProduse.unshift(new Produs(key, prod.nume, prod.descriere, prod.pret, prod.cantitate, prod.imagine));
            }

            if (callback) {
                callback();
            }

        }
    };
    xhttp.open("GET", emag_api, true);
    xhttp.send();
}