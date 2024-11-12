import {AbstractView} from "../../common/view.js";
import onChange from "on-change";
import {CardsList} from "../../components/cardsList/cardsList.js";


export class FavoritesView extends AbstractView {
    state = {
        loading: false,
    }

    constructor(appState) {
        super(appState);
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('Избранные');
    }

    appStateHook(path) {
        if (path === 'favorites') this.render();
    }

    renderCardsList() {
        const list = new CardsList(this.state, this.appState).render(this.appState.favorites,
            `В избранном ${this.appState.favorites.length} книг`);
        this.app.append(list);
    }

    render() {
        const main = super.render('div');
        this.app.append(main);
        this.renderHeader();
        this.renderCardsList();
    }
}