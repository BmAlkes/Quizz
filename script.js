const quizData = [
  {
    question: "Who is the most powerfull SuperHero in Dc?",
    a: "Superman",
    b: "Shazam",
    c: "Spectre",
    d: "WonderWoman",
    correct: "c",
  },
  {
    question: "Who is the most powerfull SuperHero in Marvel?",
    a: "Franklin Richards",
    b: "Captain Marvel",
    c: "Tony Stark",
    d: "One-Above-All",
    correct: "d",
  },
  {
    question: "What is the most used programming language in 2020?",
    a: "JavaScript",
    b: "Python",
    c: "C++",
    d: "Java",
    correct: "d",
  },
  {
    question: "Which Car is most fastest in the world",
    a: "Bugatti Veyron EB",
    b: "Koenigsegg Agera RS",
    c: "McLaren F1",
    d: "SSC Ultimate Aero ",
    correct: "b",
  },
  {
    question: "Most popular web framework in 2020",
    a: "Django-Python",
    b: "Spring-Java",
    c: "Laravel-Php",
    d: "React-Js ",
    correct: "a",
  },
  {
    question: "What year was Javascript launched?",
    a: "2000",
    b: "1995",
    c: "2010",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quizz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});