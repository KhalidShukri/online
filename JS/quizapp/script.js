const quizData = [
    {question:'What is the capital of france',
    a:'Paris',
    b:'London',
    c:'Berlin',
    d:'Madrid',
    correct:'a'
},
{question:'What is the Largest Planet in our solar system',
    a:'Pluto',
    b:'Jupiter',
    c:'Mars',
    d:'Earth',
    correct:'b'
},
{question:'What is the Smallst Planet in our solar system',
    a:'Mercury',
    b:'Jupiter',
    c:'Mars',
    d:'Earth',
    correct:'a'
},
];

const quizContainer = document.querySelector('quiz-container')
const questionElement = document.getElementById('question')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const timerElement = document.getElementById('timer')

// variables

let currentQuiz = 0
let score = 0
let timeleft = 60
let timer;

loadQuiz()
startTimer()

function loadQuiz() {
    deselectanswers()

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText  = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d


}



function deselectanswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })

}
function getSelected() {
    let answer;
    answerEls.forEach((answerEl) =>{
        if (answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
    
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) 
            {
                score += 10;
            }

            currentQuiz++;

            if (currentQuiz < quizData.length){
                loadQuiz()
            } else {
                quizContainer.innerHTML =`<h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>`;

                clearInterval(timer)
            }
    }
})
function startTimer() {
    timer = setInterval(() => {
        timeleft--
        timerElement.textContent = timeleft
        if (timeleft === 0) {
            clearInterval(timer)
            quizContainer.innerHTML = `<h2>Times Up</h2>
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`;
        }

    },1000);

}