'use strict';

const btnShare = document.querySelector('.share__btn--create');
const nuestroObjeto = {
    palette: 1,
    name: 'Maria',
    job: 'frontend',
    phone: '66666666',
    email: 'maria@gmail.com',
    linkedin: 'mariagar',
    github: 'mariagar',
    photo: base64
}

function sendHandler() {
    console.log('holi'); 

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(nuestroObjeto),
    })
    .then(response => response.json())
    .then(data => {
        const urlGenerated = data.cardURL;
        console.log(urlGenerated);
    })
}

//sendCard();

btnShare.addEventListener('click', sendHandler);