import { createElement } from "../../Utils/element";
import { createInputNumber } from "./inputNumber";

export const createSubmitCountdown = () => {
  const outputField = createElement("div", {
    className: "outputField",
  });
  const submitButton = createElement("button", {
    className: "submitButton",
    innerText: "Start Countdown",
    type: "submit",
    onclick: () => {
      // get the value from input and pass it to the countdown function
      const seconds = document.querySelector(".inputField").value;
      startCountdown(seconds, outputField);
    },
  });

  const stopButton = createElement("button", {
    className: "submitButton",
    innerText: "Stop",
    // onclick: () => {
    //   startCountdown(0, outputField), clearInterval();
    // },
  });

  const submitContainer = createElement("div", {
    className: "submitContainer",
    children: [submitButton, outputField, stopButton],
  });

  return submitContainer;
};

// statt seconds eingabefeld verweisen
export const startCountdown = (seconds, outputField) => {
  seconds++;
  let counter = seconds;
  // to save my timing event function?
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    outputField.innerText = counter;
    if (counter === 0) {
      clearInterval(interval);
      // console.log("ding!");
      // alert("times over!");
    }
  }, 1000);
};

// const stopCountdown = () => {};
