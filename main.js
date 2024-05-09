
document.addEventListener('DOMContentLoaded', () => {

    //  Define a variable that selects all elements with class name question menu
    const questions = document.querySelectorAll('.question-menu');

    for (let i = 0; i < questions.length; i++) {

        // variable for the question text of a question
        const question = questions[i].querySelector('.question');
        // variable for the answer of a question
        const answer = questions[i].querySelector('.answer');
        // variable for the button's span of a question 
        const button = questions[i].querySelector('.button-span');
        // variable for the button-con of a question
        const button_icon = questions[i].querySelector('.button-icon');

        // When the button is clicked
        showAns(button, answer, button_icon);
        showAns(question, answer, button_icon);

        function showAns(element, answer, button_icon) {

            element.onclick = () => {
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                    button_icon.src = "assets/images/icon-plus.svg";
                } else {
                    answer.style.display = 'block';
                    button_icon.src = "assets/images/icon-minus.svg";
                }
            }

        }

    }

    document.onkeydown = (e) => {
        if (e.key === "Enter") {
            e.activeElement.click();
        }
    };

});
