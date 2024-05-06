// Show answer class when grid-head is clicked

document.addEventListener('DOMContentLoaded', () => {

    const qtn1 = document.querySelector('#question-1');
    const ans1 = document.querySelector('#answer-1');
    const btn1 = document.querySelector('#button-1');

    qtn1.onclick = function() {
        if (ans1.style.display === 'block') {
            ans1.style.display = 'none';
            btn1.src = "/assets/images/icon-plus.svg";
        } else {
            ans1.style.display = 'block';
            btn1.src = "/assets/images/icon-minus.svg";
        }
    }

    btn1.onclick = function() {
        if (ans1.style.display === 'block') {
            ans1.style.display = 'none';
            btn1.src = "/assets/images/icon-plus.svg";
        } else {
            ans1.style.display = 'block';
            btn1.src = "/assets/images/icon-minus.svg";
        }
    }
});

