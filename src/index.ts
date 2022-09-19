
(function () {
  console.log("Arquivo TS inicializado");
  const body = document.querySelector("body");
  const wrapper = document.createElement("section");
  wrapper.style.width = "200px";
  wrapper.style.height = "200px";
  wrapper.style.background = "dodgerblue";
  const title = document.createElement("h1");
  title.innerHTML = "Titulo criado via JavaScript Vanilla";
 const appender = (child: HTMLElement, father: HTMLElement) =>
  father.append(child);


 const stylesApplier = (element: HTMLElement, property: CSSStyleDeclaration, value: string) => {
  return element.style[property as CSSStyleDeclaration] = value
}

    appender(title, wrapper)
    appender(wrapper, body!)
    stylesApplier(title, "color", "pink")
})();
