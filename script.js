function ready() {
    let thyme = document.forms.time; 
    let time1 = thyme.elements.firsttime; 
    let time2 = thyme.elements.secondtime;
    
    submit.onclick = function () { // go is a button on the page
        alert("Please don't go!");
    }
}

document.addEventListener("DOMContentLoaded", ready);