//var MENU_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/.json";
//var MENU_ITEM_SERVER_URL = "https://restaurant-menu-v1.firebaseio.com/menu/";
/*class MENIU {
    constructor(id, nume, imagine, ingrediente, reteta) {
        this.id = id;
        this.nume = nume;
        this.imagine = imagine;
        this.ingrediente = ingrediente;
        this.reteta = reteta;
    }
}*/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        window.menu = JSON.parse(xhttp.responseText)
        draw(menu);
    }
};
xhttp.open("GET", "https://restaurant-menu-v1.firebaseio.com/menu/.json", true);
xhttp.send();


function draw(menu) {
    //var 2
    var str = "<tr>";

    var menuKeys = Object.keys(menu);
    for (var i = 0; i < menuKeys.length; i++) {
        var menuItem = menu[menuKeys[i]];

        str += `<td rowspan="2" style="width: 20%">
            <img src="${menuItem.imagine}" id="imagine" style="width: 20%" />
        </td>
        <td style="width: 70%">
            <p id="nume" style="font-size:20px">${menuItem.nume}</p>
            <p id="ingrediente" style="font-size:20px">${menuItem.ingrediente}</p>
        </td>
        <td style="width: 10%">
            <a href="./2detalii.html?id=${i}">
                <button class="button-detalii">DETALII</button>
            </a>
        </td>`;
        //code goes here
        if (i % 2 == 0) {
            str += ` </tr>
            <tr>`
        }
    }
    str += "</tr>"

    document.querySelector("#toateProdusele").innerHTML = str;
}

