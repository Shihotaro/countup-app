const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const now = new Date();
now.setHours(0);
const hour = String(now.getHours()).padStart(2,'0');
now.setMinutes(0);
const minutes = String(now.getMinutes()).padStart(2,'0');
now.setSeconds(0);
const seconds = String(now.getSeconds()).padStart(2,'0');
now.setMilliseconds(0);
const milliseconds = String(now.getMilliseconds()/100);

let output = `${hour}:${minutes}:${seconds}:${milliseconds}`;
timer.innerHTML = output

function countUp(){
    now.setMilliseconds(now.getMilliseconds() + 100);
    
    const hour = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');
    const milliseconds = String(now.getMilliseconds()/100);

    let output = `${hour}:${minutes}:${seconds}:${milliseconds}`;
    timer.innerHTML = output    
}

let intervalId = null;

// startボタンが押されたときに計測を始める関数
function onStartClick() {
    intervalId = setInterval(countUp, 100);
    console.log("intervalId: ",intervalId, "start");
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

// stopボタンが押されたときにタイマーを止める関数
function onStopClick() {
    clearInterval(intervalId)
    console.log("intervalId: ",intervalId, "stopped.");
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

// resetボタンが押されたときにタイマーをリセットする関数
function onResetClick(){
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    
    timer.innerHTML = "00:00:00:0"  // 画面表示
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

