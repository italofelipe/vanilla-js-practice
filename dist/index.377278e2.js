(function() {
    console.log("Arquivo TS inicializado");
    const body = document.querySelector("body");
    const wrapper = document.createElement("section");
    wrapper.style.width = "200px";
    wrapper.style.height = "200px";
    wrapper.style.background = "dodgerblue";
    const title = document.createElement("h1");
    title.innerHTML = "Titulo criado via JavaScript Vanilla";
    const appender = (child, father)=>father.append(child);
    const stylesApplier = (element, property, value)=>{
        return element.style[property] = value;
    };
    appender(title, wrapper);
    appender(wrapper, body);
    stylesApplier(title, "color", "pink");
})();

//# sourceMappingURL=index.377278e2.js.map
