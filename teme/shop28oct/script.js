//var COFFEE_SERVER_URL = "https://cotroccino.firebaseio.com/.json";
//var COFFEE_ITEM_SERVER_URL = "https://cotroccino.firebaseio.com/produse/";
//var gJson;

//var coffee;
//var coffee_list = [];

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

/* start carousel */
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}
/* stop carousel */

`<td style="width: 33%">
    <p>${name}</p>
    <img src="${img}" />
        <p>${price}</p>
        <p>${description}</p>
        <a href="./details.html">
            <button>DETAILS</button>
        </a>
</td>`