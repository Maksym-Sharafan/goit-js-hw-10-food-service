import templateMenuCard from './templates/menu-template.hbs';
import dataMenuCard from './js/menu.json';
import {randerPage} from './js/script-rander-page.js'
import { changeThemsByClickAndRelodePage } from './js/script-change-thema.js'
import './sass/main.scss';

randerPage(dataMenuCard, templateMenuCard);
changeThemsByClickAndRelodePage();



// const ulElementForRender = document.querySelector('.js-menu');

// const cardsMarkup = createMenuCards(dataMenuCard);

// function createMenuCards(cards) {
//     return cards.map(templateMenuCard).join(' ');  
// }

// ulElementForRender.insertAdjacentHTML('beforeend', cardsMarkup);



