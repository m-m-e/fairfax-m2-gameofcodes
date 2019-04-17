'use strict';
const nameInput = document.querySelector('#name');
const namePreview = document.querySelector('.preview--h2');
const jobInput = document.querySelector('#job');
const jobPreview = document.querySelector('.preview--h3');

const email = document.querySelector('.mail');
const inputEmail = document.querySelector('#email');
const emailIcon = document.querySelector('.sm-link-mail');
const valueEmail = inputEmail.value;

const phone = document.querySelector('.telephone');
const inputPhone = document.querySelector('#phone');
const phoneIcon = document.querySelector('.sm-link-telephone');
const valuePhone = inputPhone.value;

const linkedin = document.querySelector('.linkedin');
const inputLinkedin = document.querySelector('#linkedin');
const linkedinIcon = document.querySelector('.sm-link-linkedin');
const valuelinkedin = inputLinkedin.value;

const github = document.querySelector('.github');
const inputGithub = document.querySelector('#github');
const githubIcon = document.querySelector('.sm-link-github');
const valueGithub = inputGithub.value;

const card = {
    name: 'Nombre Apellido',
    job: 'Front-end developer',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: 'https://placehold.it/240x200',
    palette: 1
};

//Coger los datos guardados (si hay)
const savedData = JSON.parse(localStorage.getItem('cardSaved'));

//merge savedData con card
const cardData = {
    ...card,
    ...savedData
};

//imprimir cosas por defecto O guardado
const setCardData = (data) => {
    if (data.name === 'Nombre Apellido') {
        namePreview.innerHTML = data.name;
    } else {
        nameInput.value = data.name;
        namePreview.innerHTML = data.name;
    }
    fillName();
    
    if (data.job === 'Front-end developer') {
        jobPreview.innerHTML = data.job;        
    } else {
        jobInput.value = data.job;
        jobPreview.innerHTML = data.job;
    }
    fillJob();
    inputEmail.value = data.email;
    showEmail();
    inputPhone.value = data.phone;
    showPhone();
    inputLinkedin.value = data.linkedin;
    showLinkedin();
    inputGithub.value = data.github;
    showGithub();
    choosePalette(cardData.palette);

    console.log(data);
};

setCardData(cardData);

//nombre y puesto

function fillName() {
    if (nameInput.value === '') {
        namePreview.innerHTML = card.name;
    } else {
        namePreview.innerHTML = nameInput.value;
        saveData(nameInput.name, nameInput.value);
    }
}

nameInput.addEventListener('keyup', fillName);

function fillJob() {
    if (jobInput.value === '') {
        jobPreview.innerHTML = card.job;
    } else {
        jobPreview.innerHTML = jobInput.value;
        saveData(jobInput.name, jobInput.value);
    }
}

jobInput.addEventListener('keyup', fillJob);
// iconos
// MAIL

function showEmail() {
    cardData.email = inputEmail.value;
    if(cardData.email !== '') {
        email.classList.remove('hidden');
        emailIcon.href = 'mailto:' + valueEmail;
        saveData(inputEmail.name, inputEmail.value);
    }
    else {
        email.classList.add('hidden');
    }   
};

inputEmail.addEventListener('keyup', showEmail);

//PHONE

function showPhone() {
    cardData.phone = inputPhone.value;
    if(cardData.phone !== '') {
        phone.classList.remove('hidden');
        phoneIcon.href = `tel:${valuePhone}`;
        saveData(inputPhone.name, inputPhone.value);
       
    }
    else {
        phone.classList.add('hidden');
    }    
};

inputPhone.addEventListener('keyup', showPhone);

//LINKEDIN

function showLinkedin() {
    cardData.linkedin = inputLinkedin.value;
    if(cardData.linkedin !== '') {
        linkedin.classList.remove('hidden');
        linkedinIcon.href = 'https://www.linkedin.com/in/' + cardData.linkedin;
        saveData(inputLinkedin.name, inputLinkedin.value);
    }
    else {
        linkedin.classList.add('hidden');
    }  
    
};

inputLinkedin.addEventListener('keyup', showLinkedin);

//GITHUB

function showGithub() {
    cardData.github = inputGithub.value;
    if(cardData.github !== '') {
        github.classList.remove('hidden');
        githubIcon.href = 'https://github.com/' + cardData.github;
        saveData(inputGithub.name, inputGithub.value);
    }
    else {
        github.classList.add('hidden');
    }  
    
};

inputGithub.addEventListener('keyup', showGithub);

//RESET
const reset = document.querySelector('.preview__reset');
const field = document.querySelectorAll('.form_field');
const imageDefault = document.querySelector('.preview__card--image');
const iconsDefault = document.querySelectorAll('.sm');

function hideIcons () {
    for (const icon of iconsDefault) {
    icon.classList.add('hidden');
    }
}

function resetCard (event) {
    for (const item of field) {
        item.value = '';
    }
    radioBlue.checked = 'checked';
    hideIcons();  
    fillName();
    fillJob(); 
    changeColors('preview-blue');
}

reset.addEventListener('click', resetCard);

//Save data

function saveData(key, val) {
    cardData[key] = val;
    console.log(cardData);
    localStorage.setItem('cardSaved', JSON.stringify(cardData));
    return cardData;
}


