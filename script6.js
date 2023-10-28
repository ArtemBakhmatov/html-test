window.addEventListener('DOMContentLoaded', () => {
    const animateBtn = document.getElementById('animateBtn');
    const colorBtn = document.getElementById('colorBtn');
    const svg = document.querySelector('.animation__svg');
    const svgFill = document.querySelector('.animation__svg-fill')

    animateBtn.addEventListener('click', () => {
        if (!svg.classList.contains('animation__svg-active')) {
            svg.classList.add('animation__svg-active')
        } else {
            svg.classList.remove('animation__svg-active')
        }
    });


    const getRandomColorSvg = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
         
        return color;
    }

    colorBtn.addEventListener('click', () => {
        svgFill.style.fill = getRandomColorSvg();
    });
});