
function ready() {
    var oneDay = document.createElement("img");
    oneDay.src = "red.jpg";    
    var oneHour = document.createElement("img");
    var fifteenMin = document.getElementById("green");
    var fiveMin = document.getElementById("orange");
    var oneMin = document.getElementById("purple");
    
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
          
            return days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds, and " + milliseconds + " milliseconds.";
        }
        let el = document.createElement('p')
        let stuff = document.createElement('img')

        if (diff )
        el.innerHTML = "Your elapsed time: " + msToTime(diff);
        console.log("worked");
        results.append(el);
    }
}

document.addEventListener("DOMContentLoaded", ready);
