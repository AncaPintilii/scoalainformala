var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; //sufix.png

var gJson;

function afiseazaVremea() {
    var oras = document.getElementById("oras").value;
    console.log(oras);

    var xhttp = new XMLHttpRequest(); //face o instanta de obiect
    xhttp.onreadystatechange = function () { //se specifica comportamentul daca primim 200
        if (this.readyState == 4 && this.status == 200) { //aici incepe tratamentul raspunsul de la server ->
            var json = this.responseText;
            console.log(json);
            gJson = json;

            var image = JSON.parse(json).weather[0].icon;
            var sufix = ".png";
            document.getElementById("poza").src = URL_WEATHER_ICON_PREFIX + image + sufix;

            var descriereAcum = JSON.parse(json).weather[0].description;
            document.getElementById("descriere").innerHTML = descriereAcum;

            var umidAcum = JSON.parse(json).main.humidity;
            document.getElementById("umiditate").innerHTML = umidAcum;

            var presAcum = JSON.parse(json).main.pressure;
            document.getElementById("presiune").innerHTML = presAcum;

            var temperaturaAcum = JSON.parse(json).main.temp;
            document.getElementById("temperatura_acum").innerHTML = temperaturaAcum;

            var tempMax = JSON.parse(json).main.temp_max;
            document.getElementById("max").innerHTML = tempMax;

            var tempMin = JSON.parse(json).main.temp_min;
            document.getElementById("min").innerHTML = tempMin;
            //<- aici se termina tratamentul raspunsului de la server
        }
    };
    xhttp.open("GET", URL_CURRENT_WEATHER + oras, true); //true - async, false - sync
    xhttp.send();
}
function getPrognozaFromServer() {
    var oras = document.getElementById("oras").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.prognoza = JSON.parse(xhttp.responseText)
            afiseazaPrognoza(prognoza);
        }
    };
    xhttp.open("GET", URL_FORECAST_WEATHER + oras, true);
    xhttp.send();
}

function afiseazaPrognoza(prognoza) {
    var str = "<tr>";

    var list = Object.keys(prognoza.list);
    for (var i = 0; i < list.length; i++) {
        var prognoze = prognoza.list[list[i]];
        var dataFromServer = prognoze.dt_txt;
        str += `<td style="width: 10%">
            <p>${getRomanianDate(dataFromServer)}</p>
            <img src="${URL_WEATHER_ICON_PREFIX}${prognoze.weather[0].icon}.png" />
                <p>${prognoze.main.temp} grade </p>
                <p>${prognoze.weather[0].description}</p>
        </td>`
        if (i % 8 == 7) {
            str += ` </tr>
                <tr>`
        }
    }
    str += "</tr>";
    document.querySelector("#prognoza").innerHTML = str;
}

function getRomanianDate(datestr) {
    var an = datestr.substr(0, 4);
    var luna = datestr.substr(5, 2);
    var zi = datestr.substr(8, 2);
    var ora = datestr.substr(11, 2);
    var minute = datestr.substr(14, 2);
    return zi + "/" + luna + "/" + an + " " + ora + ":" + minute;

}

