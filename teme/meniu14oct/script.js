/*Spoiler alert: stiu ca nu trebuie sa-mi afiseze toate produsele cand dai click pe butonul de search, dar doar asa am reusit sa
vad in json si network. Si tot n-am gasit solutia.*/

var MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/.json";
var MENU_ITEM_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu/";
var meniu = [];
var gJson;
function afiseazaProduseDupaIngredient() {
    var produs = document.getElementById("search").value;

    var xhttp = new XMLHttpRequest(); //face o instanta de obiect
    xhttp.onreadystatechange = function () { //se specifica comportamentul daca primim 200
        if (this.readyState == 4 && this.status == 200) { //aici incepe tratamentul raspunsul de la server ->
            var json = this.responseText;
            console.log(json);
            gJson = json;

            var imagine = JSON.parse(json).menu.imagine;
            document.getElementById("imagine").innerHTML = imagine;

            var nume = JSON.parse(json).menu.nume;
            document.getElementById("nume").innerHTML = nume;

            var ingrediente = JSON.parse(json).menu.ingrediente;
            document.getElementById("ingrediente").innerHTML = ingrediente;

            var reteta = JSON.parse(json).menu.reteta;
            document.getElementById("reteta").innerHTML = reteta;
        }
    };
    xhttp.open("GET", MENU_SERVER_URL, true); //true - async, false - sync
    xhttp.send();
}
/*function getMenuAsJson(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var res = this.responseText;
            var json = JSON.parse(res);

            gJson = json;

            var keys = Object.keys(json.menu);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var item = json.menu[key];
                meniu.push(new SimpleMenuItem(key, item.nume, item.imagine, item.ingrediente));
            }
            if (callback) {
                callback();
            }
        }
    };
    xhttp.open("GET", MENU_SERVER_URL, true);
    xhttp.send();
}*/
function afiseazaTotMeniul() {
    var meniuTabel = `
        <table>`;
    for (var i = 0; i < meniu.length; i++) {
        meniuTabel = meniuTabel + `
                    <tr>
                        <td>
                            <div id="imagine"></div>
                        </td>
                        <td>
                            <div id="nume"></div>
                        </td>
                        <td>
                            <div id="ingrediente"></div>
                        </td>
                        <td>
                            <div id="reteta">
                            <a href="https://ancapintilii.github.io/scoalainformala/teme/meniu14oct/3contact.html?id=${meniu[i]}" class="button-detalii">DETALII</div>
                        </td>
                    </tr>
                    `;
    }
    meniuTabel = meniuTabel + `
        </table>`;
    document.getElementById("toateProdusele").innerHTML = meniuTabel;
}
