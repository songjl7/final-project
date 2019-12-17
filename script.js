
function ready() {
    // var oneDay = document.createElement("img");
    // var oneHour = document.createElement("img");
    // var fifteenMin = document.getElementById("green");
    // var fiveMin = document.getElementById("orange");
    // var oneMin = document.getElementById("purple");
    
    submit.onclick = function () { // go is a button on the page
        var timeo = document.getElementById("first").value;
        var timet = document.getElementById("second").value;
        console.log(timeo);
        console.log(timet);
        var diff = Math.abs(new Date(timet) - new Date(timeo));

        function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
              seconds = Math.floor((duration / 1000) % 60),
              minutes = Math.floor((duration / (1000 * 60)) % 60),
              hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
              days = Math.floor((duration / (1000 * 60 * 60 * 24)))
            days = (days < 10) ? "0" + days : days;
            hours = (hours < 10) ? "0" + hours : hours;
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
          
            return days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds.";
        }

        let el = document.createElement('h3');
        el.innerHTML = "Your elapsed time: " + msToTime(diff);
        console.log("worked");
        results.append(el);
    }
}    

document.addEventListener("DOMContentLoaded", ready);

function roundit(which){
return Math.round(which*100)/100
}

function cmconvert(){
    with (document.cminch){
        feet.value = roundit(cm.value/30.84);
        inch.value = roundit(cm.value/2.54);
    }
}

function inchconvert(){
    with (document.cminch){
        cm.value = roundit(inch.value*2.54);
        feet.value=roundit(inch.value/12);
        meter.value=roundit(inch.value/0.0254);
    }
}

function feetconvert(){
    with (document.cminch){
        cm.value=roundit(feet.value*30.48);
        inch.value=roundit(feet.value*12);
        meter.value=roundit(feet.value/3.281);
    }
}

function meterconvert(){
    with (document.cminch){
        cm.value=roundit(meter.value*100);
        inch.value=roundit(meter.value/0.0254);
        feet.value=roundit(meter.value*3.281);
    }
}

function celsiconvert(){
    with (document.ctof){
        fahrenheit.value = roundit((1.8 * celsius.value) + 32);
    }
}

function fahrenconvert(){
    with (document.ctof){
        celsius.value = roundit(((fahrenheit.value - 32)*5)/9);
    }
}

function kmconvert(){
    with (document.kmtomi){
        mile.value = roundit(kilometer.value * 0.621);
    }
}

function miconvert(){
    with (document.kmtomi){
        kilometer.value = roundit(mile.value / 0.621);
    }
}

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}  