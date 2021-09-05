var readlineSync = require("readline-sync");
var score = 0;

// welcome // arrow function
const welcome = () => {
var username = readlineSync.question("Enter your name ");
console.log("welcome" + username + " do you know mukesh");
}

welcome();
//  end of welcome

function play(question, answer) {
  var username = readlineSync.question(question);

  if (username === answer) {
    console.log("right");
    score++;
  } else {
    console.log("wrong");
  }
  console.log("current score:", score);
  console.log("++++++++++++++++++++++++++++");
}


var questions = [
  {
    question: "what is the name of indian captain?",
    answer: "virat kohli",
  },
  {
    question: "total over of 1 day match?",
    answer: "50",
  },
  {
    question: "total overs of 20-20 match ?",
    answer: "20",
  },
  {
    question: "whcih play completed 100 century?",
    answer: "sachin",
  },
  {
    question: "which player score 3 double century in 1-day match ?",
    answer: "rohit sharma",
  },
];

// play(questions[0].question, questions[0].answer);
// play(questions[1].question, questions[1].answer);

for (var i = 0; i < questions.length; i++) {
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
}

// 15
console.log("this is final score", score);
