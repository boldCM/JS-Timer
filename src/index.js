import "./style.css";
import { createInputNumber } from "../src/Components/inputNumber";
import { createSubmitCountdown } from "../src/Components/submitCountdown";
import { createElement } from "../Utils/element";
import { createSubmitCountdownK } from "./Components/Kathrins";

function component() {
  const element = createElement("div", {
    className: "mainContainer",
  });

  element.append(createSubmitCountdown());

  return element;
}

document.body.appendChild(component());
