import { createElement } from "../../Utils/element";

export const createInputNumber = () => {
  const inputField = createElement("input", {
    type: "time",
    className: "inputField",
  });
  return inputField;
};
