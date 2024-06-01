// const quizData = [
//     {question:'What is the capital of france',
//     a:'Paris',
//     b:'London',
//     c:'Berlin',
//     d:'Madrid',
//     correct:'a'
// },
// {question:'What is the Largest Planet in our solar system',
//     a:'Pluto',
//     b:'Jupiter',
//     c:'Mars',
//     d:'Earth',
//     correct:'b'
// },
// {question:'What is the Smallst Planet in our solar system',
//     a:'Mercury',
//     b:'Jupiter',
//     c:'Mars',
//     d:'Earth',
//     correct:'a'
// },
// ];

// const quizContainer = document.querySelector('quiz-container')
// const questionElement = document.getElementById('question')
// const answerEls = document.querySelectorAll('.answer')
// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')
// const d_text = document.getElementById('d_text')
// const submitBtn = document.getElementById('submit')
// const timerElement = document.getElementById('timer')

// // variables

// let currentQuiz = 0
// let score = 0
// let timeleft = 60
// let timer;

// loadQuiz()
// startTimer()

// function loadQuiz() {
//     deselectanswers()

//     const currentQuizData = quizData[currentQuiz];

//     questionElement.innerText  = currentQuizData.question
//     a_text.innerText = currentQuizData.a
//     b_text.innerText = currentQuizData.b
//     c_text.innerText = currentQuizData.c
//     d_text.innerText = currentQuizData.d


// }



// function deselectanswers() {
//     answerEls.forEach((answerEl) => {
//         answerEl.checked = false
//     })

// }
// function getSelected() {
//     let answer;
//     answerEls.forEach((answerEl) =>{
//         if (answerEl.checked){
//             answer = answerEl.id
//         }
//     })

//     return answer
    
// }
// submitBtn.addEventListener('click', () => {
//     const answer = getSelected()
//     if (answer) {
//         if (answer === quizData[currentQuiz].correct) 
//             {
//                 score += 10;
//             }

//             currentQuiz++;

//             if (currentQuiz < quizData.length){
//                 loadQuiz()
//             } else {
//                 quizContainer.innerHTML =`<h2>You answered ${score}/${quizData.length} questions correctly</h2>
//                 <button onclick="location.reload()">Reload</button>`;

//                 clearInterval(timer)
//             }
//     }
// })
// function startTimer() {
//     timer = setInterval(() => {
//         timeleft--
//         timerElement.textContent = timeleft
//         if (timeleft === 0) {
//             clearInterval(timer)
//             quizContainer.innerHTML = `<h2>Times Up</h2>
//             <h2>You answered ${score}/${quizData.length} questions correctly</h2>
//             <button onclick="location.reload()">Reload</button>`;
//         }

//     },1000);

// }
const quizData = [
    {
        question: "What is the capital of France?",
        a: "Paris",
        b: "London",
        c: "Berlin",
        d: "Madrid",
        correct: "a",
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Venus",
        correct: "b",
    },
    {
        question: "What is the smallest planet in our solar system?",
        a: "Mercury",
        b: "Mars",
        c: "Venus",
        d: "Earth",
        correct: "a",
    },
    {
        question: "What is the rarest blood type?",
        a: "O",
        b: "A",
        c: "B",
        d: "AB-Negative",
        correct: "d",
    },
    {
        question: "What is the currency of Japan?",
        a: "Yen",
        b: "Dollar",
        c: "Euro",
        d: "Pound",
        correct: "a",
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d",
    },
    {
        question: "What is the square root of 144?",
        a: "10",
        b: "12",
        c: "14",
        d: "16",
        correct: "b",
    },
    {
        question: "What is the fastest land animal?",
        a: "Cheetah",
        b: "Lion",
        c: "Leopard",
        d: "Tiger",
        correct: "a",
    },
    {
        question: "What is the tallest mammal?",
        a: "Elephant",
        b: "Giraffe",
        c: "Hippopotamus",
        d: "Rhinoceros",
        correct: "b",
    },
    {
        question: "What is the largest desert in the world?",
        a: "Sahara",
        b: "Gobi",
        c: "Arabian",
        d: "Antarctic",
        correct: "a",
    },
];

const quizContainer = document.querySelector(".quiz-container");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");

let currentQuiz = 0;
let score = 0;
let timeLeft = 60;
let timer;

loadQuiz();
startTimer();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
    let answer;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Reload</button>
    `;
      clearInterval(timer);
    }
  }
});

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      quizContainer.innerHTML = `
                <h2>Time's up!</h2>
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }, 1000);
}
;