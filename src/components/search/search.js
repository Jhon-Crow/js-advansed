import {TagComponent} from "../../common/tag-component.js";
import './search.css';

export class Search extends TagComponent {
    constructor(state) {
        super('div');
        this.state = state;
        this.render();
    }

    search() {
        const value = this.el.querySelector('input').value;
        this.state.searchQuery = value;
    }

    render() {
        const innerHtml = `
            <div class="search__wrapper">
                <input 
                    type="text"
                    class="search__input"
                    placeholder="Найти книгу или автора...."
                    value="${this.state.searchQuery ? this.state.searchQuery : ''}"
                />
                <img
                    class="search__big-icon"  
                    src="../../../static/search.svg" 
                    alt="Иконка поиска"/>
            </div>
            <button aria-label="Искать">
                <img src="../../../static/search-white.svg" alt="Белая иконка поискка">
            </button>
        `;
        super.render('search', innerHtml);
        this.el.querySelector('button').addEventListener('click', this.search.bind(this));
        this.el.querySelector('input').addEventListener('keydown', event => {
            if (event.code === 'Enter') this.search();
        })
        return this.el;
    }
}