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
/*///////////////// start carousel ////////////*/
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}
/*///////////// stop carousel ///////////*/

/*///////////// start preluare json ///////////*/
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        window.coffees = JSON.parse(xhttp.responseText)
        draw(coffees);
    }
};
xhttp.open("GET", "https://cotroccino.firebaseio.com/produse/.json", true);
xhttp.send();
/*///////////// stop preluare json ///////////*/

/*///////////// start creare tabel ///////////*/
function draw(coffees) {

    var str = "<tr>";

    var list = Object.keys(coffees);
    for (var i = 0; i < list.length; i++) {
        var coffee = coffees[list[i]];
        str += `<td style="width: 33%">
		<p><strong><big>${coffee.name}</big></strong></p>
		<img src="${coffee.img}" />
			<p>${coffee.price}</p>
			<p>${coffee.description}</p>
			<a href="./details.html?idProdus=${i}">
				<button style="background-color: #98002d; color: #fbf5e9; width: 120px; height: 30px; border-radius: 8px;">DETAILS</button>
			</a>
    </td>`
        if (i % 3 == 2) {
            str += ` </tr>
            <tr>`
        }
    }
    str += "</tr>";
    document.querySelector("#coffees table").innerHTML = str;
}
/*///////////// stop creare tabel ///////////*/