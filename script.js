function ready() {
    let timeo = document.getElementById("timeo").value;
    let timet = document.getElementById("timet").value;
    var time1 = new Date(timeo);
    var time2 = new Date(timet);
    var diff = Math.abs(time2 - time1);
    console.log(time1);
    console.log(time2);
    submit.onclick = function () { // go is a button on the page
        let el = document.createElement('p')
        el.innerHTML = "Your elapsed time was: " + diff;
        console.log("worked");
        results.append(el);
    }
}

document.addEventListener("DOMContentLoaded", ready);