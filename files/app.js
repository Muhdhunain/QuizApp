var questions = [
    {
        question: "JS Stand for options______________ ",
        options: ["CSS", "SQL", "PHP", "JS"],
        correctAns: "JS",
    },
    {
        question: "SQL Stand for options______________ ",
        options: ["JS", "SQL", "PHP", "HTML"],
        correctAns: "SQL",
    },
    {
        question: "CSS Stand for options______________ ",
        options: ["CSS", "HTML", "PHP", "JS"],
        correctAns: "CSS",
    },
    {
        question: "PHP Stand for options______________ ",
        options: ["CSS", "PHP", "JS", "HTML"],
        correctAns: "PHP",
    },
    {
        question: "HTML Stand for options______________ ",
        options: ["CSS", "PHP", "HTML", "SQL"],
        correctAns: "HTML",
    }
];


var displayQuestion = document.getElementById("displayQuestion");
var optionsParent = document.getElementById("optionsParent");
var totalQuestionNumber = document.getElementById("totalQuestionNumber");
var currentQuestionNumber = document.getElementById("currentQuestionNumber");
var progressBar = document.getElementById("progressBar");
var showResult = document.getElementById("showResult");
var showQuestion = document.getElementById("showQuestion");
var showPercentage = document.getElementById("showPercentage");
var indexVal = 0;
var marks = 0;


function renderQuestion() {
    displayQuestion.innerHTML = questions[indexVal].question;
    for (var i = 0; i < questions[indexVal].options.length; i++) {
        optionsParent.innerHTML += `<div class="col-md-6">
        <button
        class="btn wid bg-white rounded text-black fs-5 d-block fw-bold w-100 py-2 mt-3"
        onclick="checkAnswer('${questions[indexVal].options[i]}', '${questions[indexVal].correctAns}')">
        ${questions[indexVal].options[i]}
        </button>
      </div>`;
    }
    totalQuestionNumber.innerHTML = questions.length;
    currentQuestionNumber.innerHTML = indexVal + 1;
    progressBar.max = questions.length;
    progressBar.value = indexVal + 1;
}
renderQuestion();


function nextQuestion() {
    optionsParent.innerHTML = "";
    if (indexVal + 1 == questions.length) {
        showQuestion.style.display = "none";
        showResult.style.display = "block";
        showPercentage.innerHTML = ((marks / questions.length) * 100).toFixed(2);
        console.log("Your marks is ", marks);
    } else {
        indexVal++;

        renderQuestion();
    }
}



function checkAnswer(selectedValue, correctValue) {
    if (selectedValue == correctValue) {
        marks++;
        console.log(marks);
    }
    nextQuestion()
}