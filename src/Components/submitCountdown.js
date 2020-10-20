import { createElement } from "../../Utils/element";
import { createInputNumber } from "./inputNumber";

export const createSubmitCountdown = () => {
  const outputField = createElement("div", {});
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
  const submitContainer = createElement("div", {
    children: [submitButton, outputField],
  });

  return submitContainer;
};

// statt seconds eingabefeld verweisen
export const startCountdown = (seconds, outputField) => {
  let counter = seconds;

  // to save my timing event function?
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    outputField.innerText = counter;
    if (counter === 0) {
      clearInterval(interval);
      console.log("ding!");
      alert("times over!");
    }
  }, 1000);
};
