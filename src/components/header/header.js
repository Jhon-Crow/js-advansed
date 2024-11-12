import {TagComponent} from "../../common/tag-component.js";
import './header.css';

export class Header extends TagComponent {
    constructor(appState) {
        super('div', appState);
        this.render();
    }

    render() {
        const innerHtml = `
            <a href="#">
                <img src="/static/logo.svg" alt="logo"/>                
            </a>
            <div class="menu">
                <a href="#" class="menu__item">
                    <img src="/static/search.svg" alt="search"/>  
                    Поиск книг                    
                </a>
                <a href="#favorites" class="menu__item">
                    <img src="/static/favorites.svg" alt="favorites"/>  
                    <div class="menu__counter">
                        ${this.appState.favorites.length}
                    </div>                   
                </a>
            </div>
        `;
        super.render('header', innerHtml);
        return this.el;
    }
}