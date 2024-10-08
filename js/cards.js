const cardContainer = document.getElementById('card-container');

const images = [
    './assets/1.png', './assets/2.png', './assets/3.png', 
    './assets/4.png', './assets/5.png', './assets/6.png'
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCards(numPairs) {
    // Supprime toutes les cartes existantes
    cardContainer.innerHTML = '';

    const cards = [];
    for (let i = 0; i < numPairs; i++) {
        const img = images[i % images.length];
        cards.push(createCardElement(img));
        cards.push(createCardElement(img));
    }
    shuffle(cards);
    cards.forEach(card => cardContainer.appendChild(card));
}

function createCardElement(imgSrc) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <div class="card-front"></div>
        <div class="card-back">
            <img src="${imgSrc}" alt="Card image">
        </div>
    `;
    return card;
}

const buttons = document.querySelectorAll('.cardsNumber button');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {

        const cardsNumber = (event.target.value)/2;
        console.log(cardsNumber);

        if (cardsNumber === 3) {
            cardContainer.style.gridTemplateColumns = 'repeat(2, 0.2fr)';
        } else if (cardsNumber === 5) {
            cardContainer.style.gridTemplateColumns = 'repeat(3, 150px)';
        }
        else if (cardsNumber === 7) {
            cardContainer.style.gridTemplateColumns = 'repeat(4, 150px)';
        }
        else if (cardsNumber === 10) {
            cardContainer.style.gridTemplateColumns = 'repeat(5, 150px)';
        }
        createCards(cardsNumber);

    });
});