// Börjar med att skapa en DIV med id:namnet "box"
var box = document.createElement('div');
box.id = 'box';

// RUBRIK
for (var i = 1; i <= 5; i++) {
    var rad = document.createElement('h' + (6 - i));
    rad.innerText = 'Rad ' + i;
    box.appendChild(rad);
}

document.body.appendChild(box);

// HÄR GÄLLER STYLINGEN
var bakgrundsFarg = ['#333', 'aqua', 'orange', 'pink', 'green']; // Definiera färger
for (var i = 1; i <= 5; i++) {
    var rad = document.querySelector('h' + (6 - i));
    rad.style.textAlign = 'center';
    rad.style.backgroundColor = bakgrundsFarg[i - 1]; // Färger från array för att få 5 olika färger.
    rad.style.padding = (i * 5) + 'px';
}

// FUNKTION SOM GER TRE VERTIKALA KOLUMNER
function createColumns() {
    // EN CONTAINER FÖR KOLUMNERNA.
    var container = document.createElement('div');
    container.style.display = 'flex';
    container.style.margin = '100px'; // Centrerar själva hela behållaren, alltså container.
    container.style.justifyContent = 'center';
    container.style.border = '1px solid black';
    container.style.padding = '30px';

    // FÖRSTA KOLUMN MED SIFFROR 0 TILL 9 ----------------------------!!!
    var column1 = document.createElement('div');
    column1.style.marginRight = '200px'; // Ger avstånd mellan kolumnerna !! (VIKTIGT)
    column1.style.textAlign = 'left'; // Centrera texten i kolumn1
    column1.style.border = '10px solid purple';

    for (var i = 0; i < 10; i++) {
        var element = document.createElement('div');
        element.textContent = i;
        element.style.width = '80px';
        element.style.padding = '5px';

        if (i % 2 === 0) {
            // GER BAKGRUNDSFÄRGEN SVART FÖR ENDAST JÄMNA NUMMER.
            element.style.backgroundColor = 'black';
            element.style.color = 'white';
        }
        column1.appendChild(element);
    }

    // ANDRA KOLUMN MED OMVÄNDA NUMMER 9 TILL 0 ----------------------------!!!
    var column2 = document.createElement('div');
    column2.style.marginRight = '200px'; // Ger avstånd mellan kolumnerna !! (VIKTIGT)
    column2.style.textAlign = 'center'; // Centrera texten i kolumn2
    column2.style.border = '10px solid purple';
    for (var i = 9; i >= 0; i--) {
        var element = document.createElement('div');
        element.textContent = i;
        element.style.width = '80px';
        element.style.padding = '5px';

        // Sätt bakgrundsfärg för jämna nummer
        if ((9 - i) % 2 === 0) {
            element.style.backgroundColor = 'black';
            element.style.color = 'white';
        }
        column2.appendChild(element);
    }

     // TREDJE KOLUMN MED BOKSTÄVER ----------------------------!!!
    var column3 = document.createElement('div');
    column3.style.textAlign = 'right'; // Centrera texten i kolumn3
    column3.style.border = '10px solid purple';
    for (var i = 0; i <= 10; i++) {
        var element = document.createElement('div');
        element.textContent = convertToWord(i + 1);
        element.style.width = '80px';
        element.style.padding = '5px';

        if (i % 2 === 0) {
            // Sätt bakgrundsfärg för jämna nummer
            element.style.backgroundColor = 'black';
            element.style.color = 'white';
        }
        column3.appendChild(element);
    }

    // Ta bort den sista svarta div'en utan bokstav
    var blackDivs = column3.querySelectorAll('div');
    var lastBlackDiv = blackDivs[blackDivs.length - 1];
    if (lastBlackDiv.textContent.trim() === '') {
        column3.removeChild(lastBlackDiv);
    }

    // Lägg till kolumnerna i behållaren
    container.appendChild(column1);
    container.appendChild(column2);
    container.appendChild(column3);

    // Lägg till behållaren i kroppen av dokumentet
    document.body.appendChild(container);
}

// Funktion för att konvertera nummer till deras motsvarande ord
function convertToWord(number) {
    var words = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
    return words[number - 1];
}

// Anropa funktionen för att skapa kolumnerna
createColumns();

/* Det som saknas är en gemensam egenskap för alla tre boxar är:
 - Box 1 som har siffran 4, saknar lila bakgrundsfärg.
 - Box 2 som har siffran 8, saknar lila bakgrundsfärg.
 - Box 3 som har siffran 6, saknar lila bakgrundsfärg.
Möjligen kan man använda nth:child-styling eller liknande, men jag har testat och det verkar inte fungera.
*/
