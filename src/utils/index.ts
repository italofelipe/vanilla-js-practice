export const appender = (child: HTMLElement, father: HTMLElement) =>
  father.append(child);


export const stylesApplier = (element: HTMLElement, styles: ElementCSSInlineStyle, value: string) => {
  return element.style[styles] = value
}