var hour = 0;
var min = 0;
var sec = 0;

var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");

var interval;

 function timer() {
    sec++;
    secHeading.innerHTML = sec;
    if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    } else if(min >= 60){
        hour++;
        hourHeading.innerHTML = hour;
        min = 0;
    }
}

async function start() {
    interval = setInterval(timer, 1000);
    await disableStartBtn();
}

function stop() {
    clearInterval(interval);
    enableStartBtn();
}

function reset() {
    hour = 0;
    min = 0;
    sec = 0;

    hourHeading.innerHTML = hour;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    
    stop();
}

function disableStartBtn() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(document.getElementById("startBtn").disabled = false) ;
        }, 0);
      });

}

function enableStartBtn() {
    document.getElementById("startBtn").disabled = false;
}