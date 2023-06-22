function expandElement(element) {
  element.classList.add("shrink");
  element.nextElementSibling.classList.add("expand");
}

function shrinkElement(element) {
  element.classList.remove("shrink");
  element.nextElementSibling.classList.remove("expand");
}

export default expandElement;
export default shrinkElement;
