'use strict';

const btnShare = document.querySelector('.share__btn--create');
const cardUrl = document.querySelector('.share__link--cards');

function sendHandler(event) {
    console.log('holi'); 
    event.preventDefault();
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(cardData),
    })
    .then(response => response.json())
    .then(data => {
        const urlGenerated = data.cardURL;
        cardUrl.innerHTML = urlGenerated;
        cardUrl.href = urlGenerated;
        console.log(urlGenerated);
    })
}

btnShare.addEventListener('click', sendHandler);
