
function ready() {
    
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
    }
}

document.addEventListener("DOMContentLoaded", ready);


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