import {TagComponent} from "../../common/tag-component.js";
import './cardsList.css';

export class CardsList extends TagComponent {
    constructor(state) {
        super('div');
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
            <h1>Найдено ${this.state.list.length} книг</h1>
            `
        }
        super.render('cardList', innerHtml);
        return this.el;
    }
}