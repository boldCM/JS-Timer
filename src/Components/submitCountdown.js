import { createElement } from "../../Utils/element";

// export const createInputNumber = () => {
//   const inputField = createElement("input", {
//     type: "number",
//     className: "inputField",
//     placeholder: "enter number",
//     // innerText: seconds,
//   });
//   return inputField;
// };

export const createSubmitCountdown = () => {
  const outputField = createElement("input", {
    className: "inputField",
    type: "Number",
    placeholder: "Enter number",
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

  const pauseButton = createElement("button", {
    className: "pauseButton",
    innerText: "Pause",
    type: "submit",
  });

  const resetButton = createElement("button", {
    className: "resetButton",
    innerText: "Reset",
    type: "submit",
  });

  const submitContainer = createElement("div", {
    className: "submitContainer",
    children: [submitButton, outputField, pauseButton, resetButton],
  });

  return submitContainer;
};

const startCountdown = (seconds, outputField) => {
  const pause = document
    .querySelector(".pauseButton")
    .addEventListener("click", function () {
      clearInterval(interval);
      outputField.value = outputField.value;
    });
  const reset = document
    .querySelector(".resetButton")
    .addEventListener("click", function () {
      clearInterval(interval);
      outputField.value = outputField.placeholder;
    });

  seconds++;
  let counter = seconds;
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    outputField.value = counter;
    if (counter === 0) {
      clearInterval(interval);
    } else if (counter > 0) {
      pause || reset;
    }
  }, 1000);
};
