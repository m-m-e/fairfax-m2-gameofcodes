'use strict';

//nombre y puesto

const nameInput = document.querySelector('#name');
const namePreview = document.querySelector('.preview--h2');

const jobInput = document.querySelector('#job');
const jobPreview = document.querySelector('.preview--h3');

function fillName() {

    if (nameInput.value === '') {
        namePreview.innerHTML = 'Nombre Apellido';
    } else {
        namePreview.innerHTML = nameInput.value;
    }
}


nameInput.addEventListener('keyup', fillName);

function fillJob() {
    if (jobInput.value === '') {
        jobPreview.innerHTML = 'Front-end developer';
    } else {
        jobPreview.innerHTML = jobInput.value;
    }
}

jobInput.addEventListener('keyup', fillJob);

// iconos
// MAIL
const emailIcon = document.querySelector('.mail');
const emailInfo = document.querySelector('#email');

function showMail() {
    if(emailInfo.value !== '') {
        emailIcon.classList.remove('hidden');
       
    }
    else {
        emailIcon.classList.add('hidden');
    }  
    
};
emailInfo.addEventListener('keyup', showMail);

//PHONE
const phoneIcon = document.querySelector('.telephone');
const phoneInfo = document.querySelector('#phone');

function showPhone() {
    if(phoneInfo.value !== '') {
        phoneIcon.classList.remove('hidden');
    }
    else {
        phoneIcon.classList.add('hidden');
    }  
    
};
phoneInfo.addEventListener('keyup', showPhone);

//LINKEDIN
const linkedinIcon = document.querySelector('.linkedin');
const linkedinInfo = document.querySelector('#linkedin');

function showLinkedin() {
    if(linkedinInfo.value !== '') {
        linkedinIcon.classList.remove('hidden');
    }
    else {
        linkedinIcon.classList.add('hidden');
    }  
    
};
linkedinInfo.addEventListener('keyup', showLinkedin);

//GITHUB
const githubIcon = document.querySelector('.github');
const githubInfo = document.querySelector('#github');

function showGithub() {
    if(githubInfo.value !== '') {
        githubIcon.classList.remove('hidden');
        // document.querySelector('.github-link').href = 'https://github.com/' + githubInfo.value;
    }
    else {
        githubIcon.classList.add('hidden');
    }  
    
};
githubInfo.addEventListener('keyup', showGithub);

