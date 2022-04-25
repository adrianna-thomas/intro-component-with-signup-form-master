const form = document.querySelector('.box-2 form');
const inputs = document.querySelectorAll('.box-2 form input');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.classList.remove('error');
        }
    })
})