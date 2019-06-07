function check(){
// This searches the script for a specific id, and reads the value for each id.
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
// Number of correct answers the user has.
var correct = 0;

// If the answer is correct then, increase the value by 1.
    if (question1 == "Rachel Green") {
        correct++;
    }
    if (question2 == "New York") {
        correct++;
    }
    if (question3 == "Central Perk") {
        correct++;
    }
    if (question4 == "Ross and Monica") {
        correct++;
    }
    if (question5 == "How you doin?") {
        correct++;
    if (question6 == "Guitar") {
        correct++;
        }
    if (question7 == "Phoebe") {
        correct++;
        }
    if (question8 == "Joey") {
        correct++;
        }
    if (question9 == "Eddie") {
        correct++;
        }
    if (question10 == "Matresses") {
        correct++;
        }
    if (question11 == "Montauk") {
        correct++;
        }
    if (question12 == "Nose job") {
        correct++;
        }
    if (question13 == "Erika") {
        correct++;
        }
    }
// This array picks the appropriate message depending on the amount of questions you get right.
var messages = ["Great job!", "That's okay... I guess.", "Cmon dude! Try harder next time."];


// This determines what kind of score that we want.
var range;

    if (correct < 4) {
        range = 2;
    }

    if (correct > 4 && correct < 8) {
        range = 1;
    }

    if (correct > 8) {
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";


// This will replace whatever is in the innerHTML with something from the array messages with whatever the variable range is.
    document.getElementById("message").innerHTML = messages[range];
// This adds in the amount of questions the user got right, after they've finished the quiz.
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}