var best = 70;
var none = 0;
var max = Number.MAX_SAFE_INTEGER
var min = Number.MIN_SAFE_INTEGER

function clickPlus() {
  incrementCounterValueBy(1)
  updateMessage()
}

function clickMinus() {
  var currentValue
  incrementCounterValueBy(-1)
}

function incrementCounterValueBy(amount) {
  var currentValue = getCounterValue()
  if (currentValue === max || currentValue === min) {
    return
  }
  getCounterElement().innerText = currentValue + amount
}

function getCounterElement() {
  return document.querySelector('#counterValue')
}

function getCounterValue() {
  var counterElement = getCounterElement()
  return Number(counterElement.innerText)
}

function displayMessage(msg) {
  var messageBox = document.querySelector('#messageBox')
  if(messageBox.innerText !== msg) {
    messageBox.innerText = msg
  }  
}

function updateMessage() {
  var counterValue = getCounterValue()
  var msg = getMessageFor(counterValue)
  displayMessage(msg)
}

function getMessageFor(counterValue) {
  if (counterValue === max || counterValue === min) {
    return "LIMIT reached!"
  } else if (counterValue > best) {
    return "4 perfect IVs, 15% HA chance, high (relative) shiny chance"
  } else if (counterValue === best) {
    return "4 perfect IVs, 15% HA chance, high relative shiny chance"
  } else if (counterValue < none) {
    return "No guaranteed IVs, 0% HA Chance, low shiny chance"
  } else if (counterValue === 0) {
    return "No guaranteed IVs, 0% HA Chance, low shiny chance"
  } else if (counterValue === 1) {
    return "No guaranteed IVs, 0% HA Chance, low shiny chance"
  } else if (counterValue === 2) {
    return "No guaranteed IVs, 0% HA Chance, low shiny chance"
  } else if (counterValue === 3) {
    return "No guaranteed IVs, 0% HA Chance, low shiny chance"
  } else if (counterValue === 4) {
    return "No guaranteed IVs, 0% HA Chance, low shiny chance"
  } else if (counterValue === 5) {
    return "1 guaranteed IV, 0% HA Chance, low shiny chance"
  } else if (counterValue === 6) {
    return "1 guaranteed IV, 0% HA Chance, low shiny chance"
  } else if (counterValue === 7) {
    return "1 guaranteed IV, 0% HA Chance, low shiny chance"
  } else if (counterValue === 8) {
    return "1 guaranteed IV, 0% HA Chance, low shiny chance"
  } else if (counterValue === 9) {
    return "1 guaranteed IV, 0% HA Chance, low shiny chance"
  } else if (counterValue === 10) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 11) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 12) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 13) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 14) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 15) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 16) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 17) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 18) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 19) {
    return "2 guaranteed IVs, 5% HA Chance, low shiny chance"
  } else if (counterValue === 20) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 21) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 22) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 23) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 24) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 25) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 26) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 27) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 28) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 29) {
    return "3 guaranteed IVs, 10% HA Chance, low shiny chance"
  } else if (counterValue === 30) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 31) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 32) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 33) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 34) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 35) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 36) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 37) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 38) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 39) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 40) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 41) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 42) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 43) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 44) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 45) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 46) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 47) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 48) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 49) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 50) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 51) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 52) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 53) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 54) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 55) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 56) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 57) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 58) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 59) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 60) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 61) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 62) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 63) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 64) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 65) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 66) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 67) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 68) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 69) {
    return "4 guaranteed IVs, 15% HA Chance, low shiny chance"
  } else if (counterValue === 70) {
    return "4 guaranteed IVs, 15% HA Chance, high shiny chance"
  } else if (counterValue === 255) {
    return "4 guaranteed IVs, 15% HA Chance, high shiny chance (note - your chain has been reset to zero ingame)"
  }
}
