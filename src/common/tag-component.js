export class TagComponent {
    constructor(tagName, appState) {
        if (appState) this.appState = appState;
        this.el = document.createElement(tagName);
    }

    render(className, innerHtml) {
        if (className) this.el.classList.add(className);
        if (innerHtml) this.el.innerHTML = innerHtml;
        return this.el;
    }
}