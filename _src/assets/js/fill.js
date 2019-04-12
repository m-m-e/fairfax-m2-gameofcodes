'use strict';

const card = {
    name: 'Nombre Apellido',
    job: 'Front-end developer',
    email: '',
    telephone: '',
    linkedin: '',
    github: '',
    image: 'https://placehold.it/240x200'
};

//nombre y puesto

const nameInput = document.querySelector('#name');
const namePreview = document.querySelector('.preview--h2');

const jobInput = document.querySelector('#job');
const jobPreview = document.querySelector('.preview--h3');

function fillName() {
    if (nameInput.value === '') {
        namePreview.innerHTML = card.name;
    } else {
        namePreview.innerHTML = nameInput.value;
    }
}

nameInput.addEventListener('keyup', fillName);

function fillJob() {
    if (jobInput.value === '') {
        jobPreview.innerHTML = card.job;
    } else {
        jobPreview.innerHTML = jobInput.value;
    }
}

jobInput.addEventListener('keyup', fillJob);
// iconos
// MAIL
const email = document.querySelector('.mail');
const inputEmail = document.querySelector('#email');
const emailIcon = document.querySelector('.sm-link-mail');
const valueEmail = inputEmail.value;


function showEmail() {
    card.email = inputEmail.value;
    if(card.email !== '') {
        email.classList.remove('hidden');
        emailIcon.href = 'mailto:' + valueEmail; 
    }
    else {
        email.classList.add('hidden');
    }   
};

inputEmail.addEventListener('keyup', showEmail);

//PHONE

const phone = document.querySelector('.telephone');
const inputPhone = document.querySelector('#phone');
const phoneIcon = document.querySelector('.sm-link-telephone');
const valuePhone = inputPhone.value;

function showPhone() {
    card.telephone = inputPhone.value;
    if(card.telephone !== '') {
        phone.classList.remove('hidden');
        phoneIcon.href = `tel:${valuePhone}`;
       
    }
    else {
        phone.classList.add('hidden');
    }    
};

inputPhone.addEventListener('keyup', showPhone);

//LINKEDIN
const linkedin = document.querySelector('.linkedin');
const inputLinkedin = document.querySelector('#linkedin');
const linkedinIcon = document.querySelector('.sm-link-linkedin');
const valuelinkedin = inputLinkedin.value;

function showLinkedin() {
    card.linkedin = inputLinkedin.value;
    if(card.linkedin !== '') {
        linkedin.classList.remove('hidden');
        document.querySelector('.sm-link-linkedin').href = 'https://www.linkedin.com/in/' + card.linkedin;
    }
    else {
        linkedin.classList.add('hidden');
    }  
    
};

inputLinkedin.addEventListener('keyup', showLinkedin);

//GITHUB
const github = document.querySelector('.github');
const inputGithub = document.querySelector('#github');
const githubIcon = document.querySelector('.sm-link-github');
const valueGithub = inputGithub.value;

function showGithub() {
    card.github = inputGithub.value;
    if(card.github !== '') {
        github.classList.remove('hidden');
        document.querySelector('.sm-link-github').href = 'https://github.com/' + card.github;
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
    hideIcons();  
    fillName();
    fillJob(); 
}

reset.addEventListener('click', resetCard);



