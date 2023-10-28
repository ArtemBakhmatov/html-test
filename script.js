window.addEventListener('DOMContentLoaded', () => {
    /* ############################ TASK3 ############################ */
    const btnRandom = document.querySelector('.TableBtn');
    const randomcolor1 = document.querySelectorAll('.randomcolor1');
    const randomcolor2 = document.querySelectorAll('.randomcolor2');
    const randomcolor3 = document.querySelectorAll('.randomcolor3');
    const randomcolor4 = document.querySelectorAll('.randomcolor4');

    const getRandomColor1 = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
         
        return color;
    }

    const getRandomColor2 = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
         
        return color;
    }

    const getRandomColor3 = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
         
        return color;
    }

    const getRandomColor4 = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
         
        return color;
    }

    btnRandom.addEventListener('click', () => {
        randomcolor1.forEach(item => {
            item.style.backgroundColor = getRandomColor1();
        });
        randomcolor2.forEach(item => {
            item.style.backgroundColor = getRandomColor2();
        });
        randomcolor3.forEach(item => {
            item.style.backgroundColor = getRandomColor3();
        });
        randomcolor4.forEach(item => {
            item.style.backgroundColor = getRandomColor4();
        });
    });
});