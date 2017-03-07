    var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
        var clicks = 0;
    function downClick() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    };

// keyboard shortcuts

$(document).keypress(function(e) {
 if (e.keyCode == 87) {              // "W" key
  var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
 }
});
    
    $(document).keypress(function(e) {
 if (e.keyCode == 83) {              // "S" key
        var clicks = 0;
    function downClick() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
 }
});
