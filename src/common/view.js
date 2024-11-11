import {Header} from "../components/header/header.js";

export class AbstractView {
    constructor(appState) {
        this.appState = appState;
        this.app = document.getElementById('root');
    }

    setTitle(title) {
        document.title = title;
    }

    render(tagName) {
        const main = document.createElement(tagName);
        this.app.innerHTML = '';
        return main;
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }

    destroy() {
        return;
    }
}