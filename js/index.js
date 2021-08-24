import { colors }  from "./colors.js";
import { randomIntegerFromInterval } from "./random-colors-fn.js";
import { startBtnRef } from "./Refs.js";
import { stopBtnRef } from "./Refs.js";
import { body } from "./Refs.js";

let timerId = null;

startBtnRef.addEventListener('click', onBtnStartClick);
stopBtnRef.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
    startBtnRef.disabled = true;
    timerId = setInterval(() => {
        const colorN = randomIntegerFromInterval(0, colors.length);
        body.style.backgroundColor = `${colors[colorN]}`;
    }, 1000);
};

function onBtnStopClick() {
    startBtnRef.disabled = false;
    clearInterval(timerId);
    body.style.backgroundColor = '';
};

