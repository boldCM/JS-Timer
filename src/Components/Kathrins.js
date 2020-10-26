import { createElement } from "../../Utils/element";

export const createSubmitCountdownK = () => {
  const outputField = createElement("div", {
    className: "outputField",
  });
  const submitButton = createElement("button", {
    className: "submitButton",
    innerText: "Start Countdown",
    type: "submit",
    onclick: () => {
      const seconds = document.querySelector(".inputField").value;
      change(seconds);
    },
  });

  const submitContainer = createElement("div", {
    className: "submitContainer",
    children: [submitButton, outputField],
  });

  return submitContainer;
};

let intervall = null;

const startCountdown = (seconds) => {
  let counter = seconds;

  interval = setInterval(() => {
    counter--;
    document.querySelector(".outputfield").innerText = counter;
    if (counter === 0) {
      clearInterval(interval);
      console.log("ding!");
    }
  }, 1000);
};

const pauseCountdown = () => {
  clearInterval(interval);
  document.querySelector(".inputField").value = document.querySelector(
    ".outputField"
  ).innerText;
};

function change(seconds) {
  let btn = document.querySelector("submitButton");
  if (btn.innerText === "Start Countdown") {
    btn.innerText = "Pause Countdown";
    startCountdown(seconds);
  } else {
    pauseCountdown();
    btn.innerText = "Start Countdown";
  }
}
