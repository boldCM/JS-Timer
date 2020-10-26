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
      // get the value from input and pass it to the countdown function
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

let interval = null;

// statt seconds eingabefeld verweisen
export const startCountdown = (seconds) => {
  let counter = seconds;

  // to save my timing event function?
  interval = setInterval(() => {
    counter--;
    document.querySelector(".outputField").innerText = counter;
    if (counter === 0) {
      clearInterval(interval);
      console.log("ding!");
      alert("times over!");
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
  let btn = document.querySelector(".submitButton");
  if (btn.innerText === "Start Countdown") {
    btn.innerText = "Pause Countdown";
    startCountdown(seconds);
  } else {
    pauseCountdown();
    btn.innerText = "Start Countdown";
  }
}
