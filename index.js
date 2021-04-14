const quizData = [
    {
        1 : '1',
        question: 'PHP files have a default extension of',
        a: '.html',
        b: '.xml',
        c: '.php',
        d: '.ph',
        correct: 'c'
    }, {
        2 : '2',
        question: 'Which version of PHP introduced Try/Catch Exception',
        a: 'PHP 4',
        b: 'PHP 5',
        c: 'PHP 5.3',
        d: 'PHP 6',
        correct: 'b'
    }, {
        3 : '3',
        question: 'Which of the below symbols is a newline character?',
        a: '\\r',
        b: '\\n',
        c: '/n',
        d: '/r',
        correct: 'b'
    }, {
        4 : '4',
        question: 'If $a = 12 what will be returned when($a==12)?5:1 is executed?',
        a: '12',
        b: '1',
        c: 'Error',
        d: '5',
        correct: 'd'
    }, {
        5 : '5',
        question: 'Who is the father of PHP?',
        a: 'Rasmus Lerdorf',
        b: 'Willam Makepiece',
        c: 'Drek Kolkevi',
        d: 'List Barley',
        correct: 'a'
    },{
        6: '6',
        question : 'Where is montreal situated',
        a: 'Quebec',
        b: 'Ontario',
        c: 'Alberta',
        d: 'BC',
        correct: 'a'
    }
];

const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumButton = document.getElementById("submitBtn");
const answerValue = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");


let currentQuiz = 0;
let count = 0;
loadQuiz();


function loadQuiz() {
    deselectedAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getAnswer() {
    let result = undefined;
    answerValue.forEach((answer) => {
        if (answer.checked) {
            result = answer.id;
        }
    });
    return result;
}

function deselectedAnswers() {
    answerValue.forEach((answer) => {
        answer.checked = false;
    });
}

var corrctList = "";
var corrctedAnswer = "";
var falseList = "";
let quiNumber = "";
let number = 0;

let just =0;
sumButton.addEventListener("click", () => {
    let answerResult = getAnswer();
    if (answerResult) {
        number++;
        if (answerResult === quizData[currentQuiz].correct) {
            answerResult = quizData[currentQuiz][answerResult];
            quiNumber = quizData[currentQuiz][number];
            corrctList += "<li style = 'padding: 1rem;list-style: none;'>" + "(" +quiNumber + ") "+  answerResult + "</li>";
            count++;
        } else {
            corrctedAnswer = quizData[currentQuiz].correct;
            corrctedAnswer = quizData[currentQuiz][corrctedAnswer];
            answerResult = quizData[currentQuiz][answerResult];
            quiNumber = quizData[currentQuiz][number];
            falseList += "<li style = 'padding: 1rem;list-style: none;'>"+ "(" + quiNumber + ") " + answerResult + "<span style='color:blue;text-align:right;'> { Correct Answer : "+ corrctedAnswer +" }</span></li>";
            
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h1 style="text-align:center;padding-top:10px;padding-bottom:10px;background-color:#7cffcb;
            background-image: linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%);
            "> You answered total ${count} / ${quizData.length} questions</h1>`;
            quiz.innerHTML += `<h2 style = "padding-top:10px;padding-bottom:10px;text-align:center;background-color: #90d5ec;
           background-image: linear-gradient(315deg, #90d5ec 0%, #fc575e 74%);
           ">Correct Answers</h2>`;
            quiz.innerHTML += `<h3 style = "color:blue;background-color: #f9d29d;
            background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%);
            "> ${corrctList} </h3>`;
            quiz.innerHTML += `<h2 style = "padding-top:10px;padding-bottom:10px;text-align:center;background-color: #90d5ec;
            background-image: linear-gradient(315deg, #90d5ec 0%, #fc575e 74%);
            ">Incorrect Answers</h2>`;
            quiz.innerHTML += `<h3 style = "color:red;background-color: #f9d29d;
            background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%);
            "> ${falseList} </h3>`;
        }
    }
});