
const containerTitle = document.querySelectorAll('.js-container-title');
const container = document.querySelectorAll('.js-container');


function hidden() {
    for (const panelHidden of container) {
        panelHidden.classList.add('js-container-hidden');
    }
}

function collapsable (e) {
    //console.log(e.currentTarget.parentElement);
    const parent = e.currentTarget.parentElement;
    //parent.classList.toggle('js-container-hidden');
    
    if (parent.classList.contains('js-container-hidden') === true) {
        hidden();
        parent.classList.remove('js-container-hidden');
    } else {
        parent.classList.add('js-container-hidden');
    }
};

for (const item of containerTitle) {
    item.addEventListener('click', collapsable);
}
