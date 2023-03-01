const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let count = 0;
function countUp() {
    count++;
    let stringCount = String(count)
    let countTime = stringCount.padStart(4,'0')
    timer.innerHTML = `${countTime[0]}:${countTime[1]}:${countTime[2]}:${countTime[3]}`
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
    console.log("ストップボタンが押されました！")
    // let onlyInStopFunction = timer;
    clearInterval(intervalId)
    console.log("intervalId: ",intervalId, "stopped.");
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

// resetボタンが押されたときにタイマーをリセットする関数
function onResetClick(){
    console.log("リセットボタンが押されました！")
    count = 0 // データ
    timer.innerHTML = "0:0:0:0"  // 画面表示
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

