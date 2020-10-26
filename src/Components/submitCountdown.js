import { createElement } from "../../Utils/element";

export const createSubmitCountdown = () => {
  const outputField = createElement("div", {
    className: "outputField",
  });
  const submitButton = createElement("button", {
    className: "submitButton",
    innerText: "Start Countdown",
    type: "submit",
    onclick: () => {
      const seconds = document.querySelector(".inputField").value;
      startCountdown(seconds, outputField);
    },
  });

  const stopButton = createElement("button", {
    className: "stopButton",
    innerText: "Stop",
    type: "submit",
    onclick: () => {
      stopCountdown(outputField);
    },
  });

  const submitContainer = createElement("div", {
    className: "submitContainer",
    children: [submitButton, outputField, stopButton],
  });

  return submitContainer;
};

const startCountdown = (seconds, outputField) => {
  seconds++;
  let counter = seconds;
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    outputField.innerText = counter;
    if (counter === 0) {
      clearInterval(interval);
    }
  }, 1000);
};
const stopCountdown = () => {
  clearInterval(interval);
  // secondsLeft = secondsLeft.innerText;
  document.querySelector(".outputField").value = document.querySelector(
    ".outputField"
  ).innerText;
};
