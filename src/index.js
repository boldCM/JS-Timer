import _ from "lodash";
import "./style.css";
import { createInputNumber } from "../src/Components/inputNumber";
//import Icon/IMg...
import printMe from "./print";
// für dem button unten

function component() {
  const element = document.createElement("div");
  //   const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  element.append(createInputNumber());

  // Add the image to our existing div.
  //  const myIcon = new Image();
  //  myIcon.src = Icon;

  //  element.appendChild(myIcon);

  //   für den button aus printMe...
  //   btn.innerHTML = 'Click me and check the console!';
  //   btn.onclick = printMe;

  //   element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
