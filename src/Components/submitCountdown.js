import { createElement } from "../../Utils/element";

export const createSubmitCountdown = () => {
  const submitButton = createElement("button", {
    className: "submitButton",
    innerText: "Start Countdown",
  });
  return submitButton;
};
