setTimeout(() => {
    alert("Thanks for visiting LiAn Song's website!");
}, 000)


function ready() {
    // var oneDay = document.createElement("img");
    // var oneHour = document.createElement("img");
    // var fifteenMin = document.getElementById("green");
    // var fiveMin = document.getElementById("orange");
    // var oneMin = document.getElementById("purple");
    let i = 0
    setInterval(function(){
            let color = ["black","red","blue"]
            document.getElementById('colors').style.color = color[i]
            if(i == 2){
                i = 0
            } else {
                i++
            }
        }, 500);
    

      
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

    submit2.onclick = function () {
        var month = document.getElementById("birthmonth").value;
        var day = document.getElementById("birthday").value;
        let end = document.createElement('h3');
        var horo = "";
        if (((month == 3) && (day >= 20)) || ((month == 4) && (day <= 21))) {
            horo = "Aries";
        } else if (((month == 4) && (day >= 20)) || ((month == 5) && (day <= 21))) {
            horo = "Taurus";
        } else if (((month == 5) && (day >= 22)) || ((month == 6) && (day <= 21))) {
            horo = "Gemini";
        } else if (((month == 6) && (day >= 22)) || ((month == 7) && (day <= 23))) {
            horo = "Cancer";
        } else if (((month == 7) && (day >= 24)) || ((month == 8) && (day <= 23))) {
            horo = "Leo";
        } else if (((month == 8) && (day >= 24)) || ((month == 9) && (day <= 23))) {
            horo = "Virgo";
        } else if (((month == 9) && (day >= 24)) || ((month == 10) && (day <= 23))) {
            horo = "Libra";
        } else if (((month == 10) && (day >= 24)) || ((month == 11) && (day <= 22))) {
            horo = "Scorpio";
        } else if (((month == 11) && (day >= 23)) || ((month == 12) && (day <= 22))) {
            horo = "Sagittarius"
        } else if (((month == 12) && (day >= 23)) || ((month == 1) && (day <= 20))) {
            horo = "Capricorn";
        } else if (((month == 1) && (day >= 21)) || ((month == 2) && (day <= 19))) {
            horo = "Aquarius";
        } else {
            horo = "Pisces";
        }
        end.innerHTML = "Horoscope is: " + horo;
        horoscopey.append(end)
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

function kgconvert(){
    with (document.kgtolb){
        pound.value = roundit(kilogram.value * 2.2);
        gram.value = roundit(kilogram.value * 1000);
    }
}

function lbconvert(){
    with (document.kgtolb){
        kilogram.value = roundit(pound.value / 2.2);
        gram.value = roundit(pound.value * 453.592);
    }
}

function gconvert(){
    with (document.kgtolb){
        kilogram.value = roundit(gram.value / 1000);
        pound.value = roundit(gram.value / 453.592);
    }
}

// ---------------------------------------------------------

function usdconvert(){
    with (document.moneys){
        euro.value = roundit(usd.value * 0.9);
        epound.value = roundit(usd.value * 0.76);
        yuan.value = roundit(usd.value * 7);
    }
}

function euroconvert(){
    with (document.moneys){
        usd.value = roundit(euro.value / 0.9);
        epound.value = roundit(euro.value / 1.18);
        yuan.value = roundit(euro.value * 7.8)
    }
}

function epoundconvert(){
    with (document.moneys){
        usd.value = roundit(epound.value / 0.76);
        euro.value = roundit(epound.value * 1.18);
        yuan.value = roundit(epound.value * 9.18);
    }
}

function yuanconvert(){
    with (document.moneys){
        usd.value = roundit(yuan.value / 7);
        epound.value = roundit(yuan.value / 9.18);
        euro.value = roundit(yuan.value / 7.8);
    }
}

//-------------------------------------------------------

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

