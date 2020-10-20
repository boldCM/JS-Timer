import "./style.css";
import { createInputNumber } from "../src/Components/inputNumber";
import { createSubmitCountdown } from "../src/Components/submitCountdown";
import { createElement } from "../Utils/element";

function component() {
  const element = createElement("div", {
    className: "mainContainer",
  });

  element.append(createInputNumber(), createSubmitCountdown());

  return element;
}

document.body.appendChild(component());
