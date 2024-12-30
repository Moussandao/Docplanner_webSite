
const cards_countries = document.querySelectorAll('.card_country');

function showCards_country() {
    cards_countries.forEach((card_country, index) => {
        setTimeout(() => {
            card_country.classList.add('show');
        }, index * 500); // Ajustez le délai en millisecondes
    });
}

showCards_country();
