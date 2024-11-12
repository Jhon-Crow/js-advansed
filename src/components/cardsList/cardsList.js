import {TagComponent} from "../../common/tag-component.js";
import './cardsList.css';
import {Card} from "../card/card.js";

export class CardsList extends TagComponent {
    constructor(state, appState) {
        super('div', appState);
        this.state = state;
        this.render();
    }

    render(bookList, loadedHeaderTemplate) {
        let innerHtml;
        if (this.state.loading){
            innerHtml = `
            <h1>Идёт загрузка...</h1>
        `;
        } else {
            innerHtml = `
            <h1>${loadedHeaderTemplate}</h1>
            `
        }
        super.render('cardList', innerHtml);
        const cardGrid = document.createElement('div');
        cardGrid.classList.add('cardGrid');
        if (bookList) for (const card of bookList) {
           cardGrid.append(new Card(card, this.appState).render())
        }
        this.el.append(cardGrid);
        return this.el;
    }
}