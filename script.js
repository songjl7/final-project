function ready() {
    let thyme = document.forms.times; 
    let timeo = thyme.elements.firsttime;
    let timet = thyme.elements.secondtime;
    var time1 = new Date(timeo);
    var time2 = new Date(timet);
    var Day_Difference = time2.getDay() - time1.getDay(); 
    var Hour_Difference = time2.getHours() - time1.getHours(); 
    var Minute_Difference = time2.getMinutes() - time1.getMinutes(); 

    submit.onclick = function () { // go is a button on the page
        let el = document.createElement('p')
        el.innerHTML = "Your elapsed time was: " + Day_Difference + " " + Hour_Difference + " " + Minute_Difference;
        console.log("worked")
        results.append(el);
    }
}

document.addEventListener("DOMContentLoaded", ready);