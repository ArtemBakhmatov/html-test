window.addEventListener('DOMContentLoaded', () => {
    const input1 = document.getElementById('input1');
    const resultValue1 = document.getElementById('resultValue1');
    const icon1 = document.getElementById('icon1');

    input1.addEventListener('input', () => {
        resultValue1.innerHTML = input1.value;

        if ( input1.value.length > 13) {
            icon1.style.display = 'none';
        }

        if (input1.value.length > 16) {
            resultValue1.innerHTML = 'не > 15 символов';
        }
    });

    const input2 = document.getElementById('input2');
    const resultValue2 = document.getElementById('resultValue2');
    const icon2 = document.getElementById('icon2');

    input2.addEventListener('input', () => {
        resultValue2.innerHTML = input2.value;

        if ( input2.value.length > 13) {
            icon2.style.display = 'none';
        }

        if (input2.value.length > 16) {
            resultValue2.innerHTML = 'не > 15 символов';
        }
    });

    const input3 = document.getElementById('input3');
    const resultValue3 = document.getElementById('resultValue3');
    const icon3 = document.getElementById('icon3');

    input3.addEventListener('input', () => {
        resultValue3.innerHTML = input3.value;

        if ( input3.value.length > 13) {
            icon3.style.display = 'none';
        }

        if (input3.value.length > 16) {
            resultValue3.innerHTML = 'не > 15 символов';
        }
    });
});