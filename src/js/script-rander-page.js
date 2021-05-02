export function randerPage(dataMenuCard, templateMenuCard) {
    const ulElementForRender = document.querySelector('.js-menu');

    const cardsMarkup = createMenuCards(dataMenuCard);

    function createMenuCards(cards) {
        return cards.map(templateMenuCard).join(' ');  
    };

    ulElementForRender.insertAdjacentHTML('beforeend', cardsMarkup);
 
}