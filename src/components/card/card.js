import {TagComponent} from "../../common/tag-component.js";
import './card.css';

export class Card extends TagComponent {
    constructor(cardState, appState) {
        super('div', appState);
        this.cardState = cardState;
        this.render();
    }

    render() {
        const existInFavorites = this.appState.favorites.find(
            b => b.key == this.cardState.key
        );
        const innerHtml = `
            <div class="card__image">
                <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="Обложка"/>
            </div>
            <div class="card__info">
                <div class="card__tag">
                    ${this.cardState.subject ? this.cardState.subject[0] : 'Не указано'}
                </div>
                <div class="card__name">
                    ${this.cardState.title}
                </div>
                <div class="card__author">
                    ${this.cardState.author_name ? this.cardState.author_name[0] : 'Не указано'}                
                </div>
                <div class="card__footer">
                    <button class="button__add ${existInFavorites && 'button_active'}">
                        ${existInFavorites
                            ? '<img src="../../../static/favorites.svg"/>'
                            : '<img src="../../../static/favorite-white.svg"/>'
                        }
                    </button>
                </div>
            </div>            
            `

        super.render('card', innerHtml);
        return this.el;
    }
}