var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min"); 
var secHeading = document.getElementById("sec");
var msHeading = document.getElementById("msec");
var interval;
function timer()
{
    msec++;
    msHeading.innerHTML = msec;
    if(msec >= 100)
    {
        sec++;
        secHeading.innerHTML = sec;
        msec = "00";
    }
    else if(sec >= 60)
    {
        min++;
        minHeading.innerHTML = min;
        sec = "00";
    }
}
function start()
{
    clearInterval(interval);
    interval = setInterval(timer,10);
}
function stop()
{
    clearInterval(interval);
}
function reset()
{
    min = "00";
    sec = "00";
    msec = "00";
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msHeading.innerHTML = msec;
    stop();
}