import "./style.css";
import { createSubmitCountdown } from "../src/Components/submitCountdown";
import { createElement } from "../Utils/element";

function component() {
  const element = createElement("div", {
    className: "mainContainer",
  });

  element.append(createSubmitCountdown());

  return element;
}

document.body.appendChild(component());
