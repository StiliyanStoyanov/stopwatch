import { TimeStringArray, formatTime, formatTimeToString } from "./stopwatchUtil";
import { createTimeTrackerElement, createElementWithText } from "./stopwatchViewUtil";
type onIntervalTick = (params: TimeStringArray) => void
type onLap = (lapCount: number, currentLapTime: string, totalTime: string, isFastest: boolean, isSlowest: boolean) => void

function stopwatch () {
    let intervalId: NodeJS.Timer;
    let currentTime = 2159960;
    let lapCount = 0;
    let previousLapTimer = 0;
    let fastestTimer = 0;
    let slowestTimer = 0;
    


    function startTimer(onIntervalTick: onIntervalTick) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            currentTime++;
            onIntervalTick(formatTime(currentTime));
        }, 100);
    }

    const pauseTimer = () => {
        clearInterval(intervalId);
    }

    const resetTimer = () => {
        clearInterval(intervalId);
        currentTime = 0;
        currentTime = 0;
        lapCount = 0;
        previousLapTimer = 0
        fastestTimer = 0;
        slowestTimer = 0;
    }
    }
        const isSlowest = currentLapTime > slowestTimer;

    const lapTimer = () => {
        currentTime - fastestTimer
        console.log('flag button clicked');
    }

    return {
        startTimer,
        pauseTimer,
        resetTimer,
        lapTimer
    }
}

export function stopwatchViewSetup() {
    const startPauseButton = document.getElementById('start-pause-button');
    const flagButton = document.getElementById('flag-button') as HTMLButtonElement;
    const resetButton = document.getElementById('reset-button') as HTMLButtonElement;
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const millisecondsElement = document.getElementById('milliseconds');
    const lapTimers = document.getElementById('lap-timers');
    let paused = true;
    let isRunning = false;

    const { startTimer, pauseTimer, resetTimer, lapTimer } = stopwatch();

    startPauseButton.addEventListener('click', () => {
        startPauseButton.classList.toggle("active");
        // Pauses the timer if it is not paused
        if (!paused) {
            console.log('timer is paused');
            paused = true;
            flagButton.disabled = true;
            flagButton.classList.remove('active-fill');
            pauseTimer();
            return;
        }
        // Keeps reset enabled only when there is time on the timer
        if (!isRunning) {
            resetButton.classList.toggle('active-stroke');
            resetButton.disabled = false;
        }

        console.log('timer is running');
        // Disables flag button when timer is paused
        flagButton.disabled = false;
        flagButton.classList.add('active-fill');
        // Updates timer state
        paused = false;
        isRunning = true;
        // Interval callback per 100ms tick with current times as an array
        startTimer(([hours, minutes, seconds, milliseconds]) => {
            hoursElement.textContent = hours;
            minutesElement.textContent = minutes;
            secondsElement.textContent = seconds;
            millisecondsElement.textContent = milliseconds;
        })
    })

    resetButton.addEventListener('click', () => {  
        console.log('timer is reset');
        // Changes button state to play if it is currently running
        if (!paused) startPauseButton.classList.toggle('active');

        // Disables and resets flag time track and reset button states to disabled on reset
        resetButton.classList.toggle('active-stroke');
        resetButton.disabled = true;
        flagButton.disabled = true;
        flagButton.classList.remove('active-fill');
        // Updates timer status
        paused = true;
        isRunning = false;
        // Resets main timer elements
        hoursElement.textContent = '00'
        minutesElement.textContent = '00'
        secondsElement.textContent = '00'
        millisecondsElement.textContent = '00'

        laps.textContent = ''
        time.textContent = ''
        total.textContent = ''

        // Clears timers in utility function
        resetTimer();
    })

    flagButton.addEventListener('click', () => {
        lapTimer();
    })
}