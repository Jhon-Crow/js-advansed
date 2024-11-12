import {AbstractView} from "../../common/view.js";
import onChange from "on-change";
import {Search} from "../../components/search/search.js";
import {CardsList} from "../../components/cardsList/cardsList.js";


export class MainView extends AbstractView {
    state = {
        list: [],
        numFound: 0,
        loading: false,
        searchQuery: undefined,
        offset: 0
    }

    constructor(appState) {
        super(appState);
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.state = onChange(this.state, this.stateHook.bind(this));
        this.setTitle('Поиск книг');
    }

    appStateHook(path) {
        if (path === 'favorites') this.render();
    }

    async stateHook(path) {
        if (path === 'searchQuery' && !this.state.loading) {
            this.state.loading = true;
            const data = await this.loadList(this.state.searchQuery, this.state.offset);
            this.state.loading = false;
            this.state.numFound = data.numFound;
            this.state.list = data.docs;
        }
        if (path === 'list' || path === 'loading') this.render();
    }

    async loadList(q, offset) {
        const res = await fetch(`https://openlibrary.org/search.json?q=${q}&offset=${offset}`);
        return res.json();
    }

    renderSearch() {
        const search = new Search(this.state).render();
        this.app.append(search);
    }

    renderCardsList() {
        const list = new CardsList(this.state, this.appState).render();
        this.app.append(list);
    }

    render() {
        const main = super.render('div');
        this.app.append(main);
        this.renderHeader();
        this.renderSearch();
        this.renderCardsList();
    }

}