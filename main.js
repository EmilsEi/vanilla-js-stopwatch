var state = "paused";
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");
var milisecondsElement = document.getElementById("miliseconds");
var button = document.getElementById("start");
button.innerHTML = "Start";
var startTime;
var endTime;
var diffTime = 0;
var currentTime;
var interval;
var seconds;

function start() {
    if (state == "paused") {
        startTime = new Date();
        state = "running";
        console.log(state);
        interval = setInterval(setTime,10);
    } else if (state == "running"){
        state = "paused";
        console.log(state);
        clearInterval(interval);
    }
}

function setTime(){
    currentTime = new Date();
    diffTime = Math.abs(startTime-currentTime);
    displayTime(diffTime);
}

function displayTime(miliseconds){
    minutes = Math.floor(miliseconds/60000);
    seconds = Math.floor(miliseconds/1000)-minutes*60;
    secondsElement.innerHTML = seconds.toString().padStart(2,"0");
    milisecondsElement.innerHTML = displayMiliseconds(Math.floor(miliseconds%1000));
    minutesElement.innerHTML = minutes.toString().padStart(2,"0");
}

function reset(){
    clearInterval(interval)
    diffTime = 0;
    displayTime(diffTime);
    state = "paused";
}

function displayMiliseconds(milisecondsUnparsed){
    milisecondsString = milisecondsUnparsed.toString();
    if (milisecondsString.length==1 || milisecondsString.length==0){
        return milisecondsString.padStart(2,"0");
    } else if (milisecondsString.length==3) {
        return milisecondsString.substring(0,2);
    }
}