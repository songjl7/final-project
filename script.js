
function ready() {
    var oneDay = document.getElementById("red");
    var oneHour = document.getElementById("blue");
    var fifteenMin = document.getElementById("green");
    var fiveMin = document.getElementById("orange");
    var oneMin = document.getElementById("purple");
    
    submit.onclick = function () { // go is a button on the page
        var timeo = document.getElementById("first").value;
        var timet = document.getElementById("second").value;
        console.log(timeo);
        console.log(timet);
        var diff = Math.abs(new Date(timet) - new Date(timeo));

        let el = document.createElement('p')
        el.innerHTML = "Your elapsed time was: " + diff + "milliseconds";
        console.log("worked");
        results.append(el);
    }
}

document.addEventListener("DOMContentLoaded", ready);