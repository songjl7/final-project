function ready() {
    let thyme = document.forms.times; 
    let timeo = thyme.elements.firsttime;
    let timet = thyme.elements.secondtime;
    var time1 = new Date(timeo);
    var time2 = new Date(timet);
    var Time_Difference = time2.getTime() - time1.getTime(); 
    submit.onclick = function () { // go is a button on the page
        let el = document.createElement('p')
        el.innerHTML = "Your elapsed time was: " + Time_Difference;
        console.log("worked")
        results.append(el);
    }
}

document.addEventListener("DOMContentLoaded", ready);