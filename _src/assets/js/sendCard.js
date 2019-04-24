'use strict';

const btnShare = document.querySelector('.share__btn--create');

//function sendHandler() {
    //console.log('holi'); 
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
        console.log(urlGenerated);
    })
//}

//sendHandler();

// btnShare.addEventListener('click', sendHandler);
