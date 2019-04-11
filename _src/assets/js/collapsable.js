
const containerTitle = document.querySelectorAll('.js-container-title');
for (const item of containerTitle) {
    item.addEventListener('click', collapsable);
}
function collapsable (e) {
console.log(e.currentTarget.parentElement);
e.currentTarget.parentElement.classList.toggle('js-container-hidden');
}; 

