import {TagComponent} from "../../common/tag-component.js";
import './cardsList.css';
import {Card} from "../card/card.js";

export class CardsList extends TagComponent {
    constructor(state, appState) {
        super('div', appState);
        this.state = state;
        this.render();
    }

    render() {
        let innerHtml;
        if (this.state.loading){
            innerHtml = `
            <h1>Идёт загрузка...</h1>
        `;
        } else {
            innerHtml = `
            <h1>Найдено ${this.state.numFound} книг</h1>
            `
        }
        super.render('cardList', innerHtml);
        for (const card of this.state.list) {
            this.el.append(new Card(card, this.appState).render())
        }
        return this.el;
    }
}