import { createElement } from "../../Utils/element";

export const createInputNumber = () => {
  const inputField = createElement("input", {
    type: "number",
    className: "inputField",
    placeholder: "enter number",
    // innerText: seconds,
  });
  return inputField;
};
