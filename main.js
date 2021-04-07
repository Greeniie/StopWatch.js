let seconds = 00;
let tens = 00;
const appendSec = document.getElementById('seconds');
const appendTens = document.getElementById('tens');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
let Interval;

    startButton.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stopButton.onclick = function () {
        clearInterval(Interval);
    }


    resetButton.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSec.innerHTML = seconds;
    }



    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSec.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSec.innerHTML = seconds;
        }

    }


