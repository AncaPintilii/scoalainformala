var a = 10;
var b = 10;
var max = undefined;
if (a <b) {
    max = b;
}
else {
   max = a;
}
console.log(max);

// max dintr-un array:
var note = [8, 7, 3, 9, 10, 2, 1];
function calculeazaMax () { //single responsability purpose
var max = 0; //presupun ca maximule pe prima pozitie
for (var i = 0; i < note.length; i++) { //initializam pozitia i pe prima pozitie, i < lungimea sirului/note; trecem la urmatoarea pozitie cu i++
// i=0 i<6 i++ (sau i = i +1) -> iteratie
// i=1 i<6 i++
// ... i=6 6<6 nu se mai executa i++
    if (max < note[i]) {
        max = note[i];
    }
}
return max;
}

var maxim = calculeazaMax(); // = calculeazaMax = numele metodei si () = "apel de metode"
console.log(maxim); 
//de implementat o functie findPositionInArray(value) 

function findPositionInArray (valueToFind) {
    var positionWhereElementIsFound = 0;
    for (var i = 0; i < note.length; i++) {
        if (valueToFind == note[i]) {
            positionWhereElementIsFound = i;
        }
    }
    return positionWhereElementIsFound;
}
console.log("positionWhereElementIsFound=" + findPositionInArray(maxim));

///
function sortDesc () {
    var sortedArray = []; //arrayul final
    var nrElem = note.length; //pentru a pastra acelasi nr de elem dupa ce eliberez o pozitie
    for (var i = 0; i < nrElem; i++) { //
        var max = calculeazaMax();
        var positionWhereElementIsFound = findPositionInArray(max)
        sortedArray.push(max);
        note.splice(positionWhereElementIsFound, 1);
    }
    return sortedArray;
}
console.log(sortDesc());

//function displayElevi() {
  //  var eleviHTML = "";
  //  for(var i=0, i < 10; i++) {
 //       eleviHTML = eleviHTML + "<div>Elev " + i + </div>"; //....de continuat
 //   }
//}

//Math.floor(Math.random() * 10); -> 