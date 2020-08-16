var none = 0;
var max = Number.MAX_SAFE_INTEGER;
var min = Number.MIN_SAFE_INTEGER;

// TODO: Make chain number ++ or -- instead of using incrementCounterValueBy

function clickPlus() {
    incrementCounterValueBy(1);
    updateMessage();
}

function clickMinus() {
    incrementCounterValueBy(-1);
    updateMessage();
}

function incrementCounterValueBy(amount) {
    var currentValue = getCounterValue();
    if (currentValue === max || currentValue === min) {
        return;
    }
    getCounterElement().innerText = currentValue + amount
}

function getCounterElement() {
    return document.querySelector('#counterValue');
}

function getCounterValue() {
    var counterElement = getCounterElement();
    return Number(counterElement.innerText);
}

function displayMessage(msg) {
    var messageBox = document.querySelector('#messageBox');
    if(messageBox.innerText !== msg) {
        messageBox.innerText = msg;
    }
}

function updateMessage() {
    var counterValue = getCounterValue();
    var msg = getMessageFor(counterValue);
    displayMessage(msg);
}

// Refactored and added DRY concepts (No more ugly else if's!)

function getMessageFor(counterValue) {
    switch (counterValue < 255){
        case (counterValue <= 4):
            return "No guaranteed IVs, 0% HA Chance, low shiny chance";
        case (counterValue <= 9):
            return "1 guaranteed IV, 0% HA Chance, low shiny chance";
        case (counterValue <= 19):
            return "2 guaranteed IVs, 5% HA Chance, low shiny chance";
        case (counterValue <= 29):
            return "3 guaranteed IVs, 10% HA Chance, low shiny chance";
        case (counterValue <= 69):
            return "4 guaranteed IVs, 15% HA Chance, low shiny chance";
        case (counterValue < 255):
            return "4 perfect IVs, 15% HA chance, high (relative) shiny chance";
        case (counterValue === 255):
            return "4 guaranteed IVs, 15% HA Chance, high shiny chance (note - your chain has been reset to zero in-game)";
        case (counterValue === max || counterValue === min):
            return "LIMIT reached!";
    }
}

window.addEventListener('keyup', function(event) {
    const key = event.keyCode;
    if (key === 87 || key === 38) {
        // 'w' or 'up arrow'
        incrementCounterValueBy(1);
    } else if (key === 83 || key === 40) {
        // 's' or 'down arrow'
        incrementCounterValueBy(-1);
    } else if (key === 82) {
        // 'r'
        incrementCounterValueBy(-getCounterValue())
    }
    updateMessage();
})