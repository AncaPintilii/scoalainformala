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
            var sufix =".png";
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
function afiseazaPrognoza() {
    var oras = document.getElementById("oras").value;
    console.log(oras);

    var xhttp = new XMLHttpRequest(); //face o instanta de obiect
    xhttp.onreadystatechange = function () { //se specifica comportamentul daca primim 200
        if (this.readyState == 4 && this.status == 200) { //aici incepe tratamentul raspunsul de la server ->
            var json = this.responseText;
            console.log(json); 
            gJson = json;
            }
    };
    xhttp.open("GET", URL_FORECAST_WEATHER + oras, true); //true - async, false - sync
    xhttp.send();
}
/*function myFunction() {
    var d = new Date();
    var n = d.getDate();
    document.getElementById("somethingsomething").innerHTML = n;
}*/

