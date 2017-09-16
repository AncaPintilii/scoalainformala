var note = [];
function generateRandomArray () {
    var randomNote = [];
    for(var i=0;i<10; i++) {
        var valoareRandom = generateRandomNumberBetween0And10();
        randomNote.push(valoareRandom);
    }
    return randomNote;
}

function displayNote (note) {
    var noteHtml = "";
    for(var i=0; i<note.length; i++) {
        noteHtml += "<div>" + note[i] + "</div>";
    }
    document.getElementById("note").innerHTML = noteHtml;
}
function generateRandomNumberBetween0And10() {
    return Math.floor(Math.random() * 10);
}
/////////////////////////

function calculeazaMax (a) {
    var max = a[0]; 
    for (var i=0; i < a.length; i++) { 
        if (max < a[i]) {
            max = a[i];
        }
    }
    return max;
}

function calculeazaMin (a) {
    var min = a[0]; 
    for (var i=0; i < a.length; i++) { 
        if (min > a[i]) {
            min = a[i];
        }
    }
    return min;
}

function findPositionInArray (a, valueToFind) {
    var positionWhereElementIsFound = 0;
    for (var i = 0; i < a.length; i++) {
        if (valueToFind == a[i]) {
                positionWhereElementIsFound = i;
        }
    }
        return positionWhereElementIsFound;
}

function sortAsc(note) {
    note = note.slice ();//creeaza o copie a vectorului
    var sortedArray = []; 
    var nrElem = note.length; 
    for (var i = 0; i < nrElem; i++) { 
        var min = calculeazaMin(note);
        var positionWhereElementIsFound = findPositionInArray(note, min)
        sortedArray.push(min);
        note.splice(positionWhereElementIsFound, 1);
    }
    displayNote(sortedArray);
    return sortedArray;
}
function sortDesc (note) {
    note = note.slice ();//creeaza o copie a vectorului
    var sortedArray = []; 
    var nrElem = note.length; 
    for (var i = 0; i < nrElem; i++) { 
        var max = calculeazaMax(note);
        var positionWhereElementIsFound = findPositionInArray(note, max)
        sortedArray.push(max);
        note.splice(positionWhereElementIsFound, 1);
    }
    displayNote(sortedArray);
    return sortedArray;
}