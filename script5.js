window.addEventListener('DOMContentLoaded', () => {
    const progressbar = document.getElementById('progressbar');
    const progressbarBtn = document.querySelector('.progressbar__btn');

    progressbarBtn.addEventListener('click', () => {
        progressbar.style.width = '75' + '%';
    });


    let inputNumber = document.getElementById('inputNumber');

    inputNumber.addEventListener('input', (e) => {
        progressbar.style.width = `${e.target.value}%`;

        if (e.target.value > 100) {
            progressbar.style.width = `${100}%`;
        }

    });


});