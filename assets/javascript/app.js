
// List of all the questions with 4 possible choices for each question and 
// one correct answer.

var questions = [{
question: "What is the name of the country of the first F1 grand prix of the season?",
choices: ["China", "Monaco", "Australia", "Canada"],
correctAnswer: "Australia",
}, {
question: "What is the name of the current Formula 1 champion?",
choices: ["Sebastian Vettel", "Kimmi Raikkonen", "Nico Rosberg", "Lewis Hamilton"],
correctAnswer: "Nico Rosberg",
}, {
question: "What is the name of the country of the last F1 grand prix of the season?",
choices: ["Brazil", "Mexico", "Abu Dhabi", "USA"],
correctAnswer: "Abu Dhabi",
}, {
question: "What is the name of the current champion team?",
choices: ["Ferrari", "Mercedes", "RedBull", "Ferrari"],
correctAnswer: "Mercedes",
}, {
question: "What is the name of the driver whose nickname is Iceman?",
choices: ["Valteri Bottas", "Max Verstappen", "Kimmi Raikkonen", "Sergio Perez"],
correctAnswer: "Kimmi Raikkonen",
}, {
question: "How many F1 championships did Michael Schumacher win?",
choices: ["7", "3", "5", "9"],
correctAnswer: "7",
}, {
question: "What is the record time of the fastest pit stop by RedBull team?",
choices: ["5.9 seconds", "3.2 seconds", "1.9 seconds", "7.4 seconds"],
correctAnswer: "1.9 seconds",
}, {
question: "What is the name of the driver consider by many the best in history?",
choices: ["Ayrton Senna", "Mario Andretti", "Nikki Lauda", "Alain Prost"],
correctAnswer: "Ayrton Senna",
}];

 

var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;



$("#timerStarts").hide();
$(".submitAnswer").hide();
$("#correctAnswers").hide();
$("#incorrectAnswers").hide();

// The function review compares if the value or answer picked matches the correct
//answer, and will add accordingly.

function review () { 
	for (var i = 0; i < questions.length; i++) {
		var userChoice = $("input[name = 'question-" + i +"']:checked");
		if (userChoice.val() == questions[i].correctAnswer) {
			correctAnswers++; 

			} else {
				incorrectAnswers++;
				
		}
	}
	$("#correctAnswers").append(" " + correctAnswers);
	$("#incorrectAnswers").append(" " + incorrectAnswers); 
};

// Define the time with a value of 60 for seconds and decrease by one with a delay 
// of 1000 milliseconds or 1 second. When counter reaches -1, hide questions, timer
//and answers and display correct and incorrect answers.


function timer() {
	var seconds = 60;
	counter = setInterval (function() {
	$("#timerStarts").html('<h2> Time Remaining:' + seconds-- + '</h2>');
		if (seconds === -1) {
			$("#timerStarts").html("<h2> Time's up! </h2>");
			clearInterval(counter);
			function retraso(){
				$("#showQuestions").hide();
				$("#timerStarts").hide();
				$(".submitAnswer").hide();
				review();
				$("#correctAnswers").show();
				$("#incorrectAnswers").show();
			}
			setTimeout(retraso, 1000);
		}
	}, 1000);
	
};

// Activate game, after pressing button questions will be displayed and timer will start
//running
$(".gameStart").on("click", function() {
	$(".gameStart").hide();
	pregunta();
	$("#timerStarts").show();
	timer();
});



function pregunta() {
	$(".submitAnswer").show();
	for (var i = 0; i < questions.length; i++) {
		$("#showQuestions").append("<h2>" + questions[i].question + "</h2>");
		for (var j = 0; j < questions[i].choices.length; j++) {
			$("#showQuestions").append('<input type="radio" name="question'  + '-' + i + '" value="'+ questions[i].choices[j] + '"> '+ questions[i].choices[j] );

		}
	}

	// when clicking submit answer button, the questions will hide and the correct and incorrect
	//answers will show.
	$(".submitAnswer").on("click", function() {
		$("#showQuestions").hide();
		$("#timerStarts").hide();
		$(".submitAnswer").hide();
		review();
		$("#correctAnswers").show();
		$("#incorrectAnswers").show();

	});
};
