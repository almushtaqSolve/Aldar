const subjectsBtns = document.querySelectorAll('.subject');
const quizEl = document.querySelector('.quiz');
const questionField = document.querySelector('.question');
const choosesField = document.querySelectorAll('.choose')
const statusEl = document.querySelector('.status');

subjectsBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const subject = e.target.dataset.subject
        
        fetch(`../../jsons/${subject}-quiz.json`).then((res) => res.json())
        .then((data) => {
            const choosesNames = ['A', 'B', 'C', 'D'];
            
            questionField.innerHTML = data[0].question;

            for (let i = 0; i < choosesField.length; i++) {
                choosesField[i].innerHTML = data[0][choosesNames[i]];
            }
            
            for (let i = 0; i < choosesField.length; i++) {
                choosesField[i].addEventListener('click', () => {
                    if (choosesField[i].dataset.letter === data[0]["answer"]) {
                        
                        choosesField.forEach((btn) => {
                            btn.classList.add('disabled');
                        });

                        choosesField[i].classList.remove('disabled')
                        choosesField[i].style.cssText = `

                            background-color: var(--green-color);
                        `;

                        statusEl.innerHTML = 'صحيح';
                        statusEl.classList.add('correct-status')
                    } else {
                        document.querySelector(`[data-letter="${data[0]["answer"]}"]`).style.cssText = 'background-color: var(--green-color)';

                        choosesField.forEach((btn) => {
                            btn.classList.add('disabled');
                        });

                        choosesField[i].classList.remove('disabled')
                        choosesField[i].style.cssText = `
                            background-color: var(--red-color);
                        `;


                        statusEl.innerHTML = 'خطأ';
                        statusEl.classList.add('wrong-status');



                    }
                })
            }

            quizEl.classList.remove('d-none');
            quizEl.classList.add('d-flex');
        });

    });
});
