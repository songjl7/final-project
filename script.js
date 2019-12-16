
function ready() {
    submit.onclick = function () { // go is a button on the page
        var timeo = document.getElementById("first").value;
        var timet = document.getElementById("second").value;
        console.log(timeo);
        console.log(timet);
        var diff = Math.abs(new Date(timet) - new Date(timeo));
        
        let el = document.createElement('p')
        el.innerHTML = "Your elapsed time was: " + diff;
        console.log("worked");
        results.append(el);
    }
}

document.addEventListener("DOMContentLoaded", ready);