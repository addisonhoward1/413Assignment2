//declares variables
var assignments;
var group;
var quiz;
var exams;
var intex;
var finalgrade;
var letter;
var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    //gets the values from the form in the index.html file
    assignments = parseInt(document.getElementById("assignments").value);
    group = parseInt(document.getElementById("grouppro").value);
    quiz = parseInt(document.getElementById("quizzes").value);
    exams = parseInt(document.getElementById("exams").value);
    intex = parseInt(document.getElementById("intex").value);

    //calculates final grade
    finalgrade = (assignments * .50) + (group * .10) + (quiz * .10) + (exams * .20) + (intex * .10);

    //if statement to find what letter grade
    if (finalgrade >= 94) {
        letter = "A";
    }
    else if (finalgrade >= 90) {
        letter = "A-";
    }
    else if (finalgrade >= 87) {
        letter = "B+";
    }
    else if (finalgrade >= 84) {
        letter = "B";
    }
    else if (finalgrade >= 80) {
        letter = "B-";
    }
    else if (finalgrade >= 77) {
        letter = "C+";
    }
    else if (finalgrade >= 74) {
        letter = "C";
    }
    else if (finalgrade >= 70) {
        letter = "C-";
    }
    else if (finalgrade >= 67) {
        letter = "D+";
    }
    else if (finalgrade >= 64) {
        letter = "D";
    }
    else if (finalgrade >= 60) {
        letter = "D-";
    }
    else {
        letter = "E";
    }

    //tells the user what grade and percentaged they would recieved
    alert("Letter Grade: " + letter + " with a total of " + finalgrade + "%");
});