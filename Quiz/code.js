//all the questions and possible results listed below

var questions = [];

questions[0] = {
  question: "Question 1",
  answers: ["I do not feel sad", "I feel sad", "I am sad all the time and I can't snap out of it", "I am so sad and unhappy that I can't stand it"],
};

questions[1] = {
  question: "Question 2",
  answers: ["I am not particularly discouraged about the future", "I feel discouraged about the future", "I feel I have nothing to look forward to", "I feel the future is hopeless and that things cannot improve"],
};

questions[2] = {
  question: "Question 3",
  answers: ["I do not feel like a failure",
    "I feel I have failed more than the average person", "As I look back on my life, all I can see is a lot of failures", "I feel I am a complete failure as a person"
  ],
};

questions[3] = {
  question: "Question 4",
  answers: ["I get as much satisfaction out of things as I used to", "I don't enjoy things the way I used to", "I don't get real satisfaction out of anything anymore", "I am dissatisfied or bored with everything"],
};

questions[4] = {
  question: "Question 5",
  answers: ["I don't feel particularly guilty", "I feel guilty a good part of the time", "I feel quite guilty most of the time", "I feel guilty all of the time"],
};

questions[5] = {
  question: "Question 6",
  answers: ["I don't feel I am being punished", "I feel I may be punished", "I expect to be punished", "I feel I am being punished"],
};

questions[6] = {
  question: "Question 7",
  answers: ["I don't feel disappointed in myself", "I am disappointed in myself", "I am disgusted with myself", "I hate myself"],
};

questions[7] = {
  question: "Question 8",
  answers: ["I don't feel I am any worse than anybody else", "I am critical of myself for my weaknesses or mistakes", "I blame myself all the time for my faults", "I blame myself for everything bad that happens"],
};

questions[8] = {
  question: "Question 9",
  answers: ["I don't have any thoughts of killing myself", "I have thoughts of killing myself, but I would not carry them out", "I would like to kill myself", "I would kill myself if I had the chance"],
};

questions[9] = {
  question: "Question 10",
  answers: ["I don't cry any more than usual", "I cry more now than I used to", "I cry all the time now", "I used to be able to cry, but now I can't cry even though I want to"],
};

questions[10] = {
  question: "Question 11",
  answers: ["I am no more irritated by things than I ever was", "I am slightly more irritated now than usual", "I am quite annoyed or irritated a good deal of the time", "I feel irritated all the time"],
};

questions[11] = {
  question: "Question 12",
  answers: ["I have not lost interest in other people", "I am less interested in other people than I used to be", "I have lost most of my interest in other people", "I have lost all of my interest in other people"],
};

questions[12] = {
  question: "Question 13",
  answers: ["I make decisions about as well as I ever could", "I put off making decisions more than I used to", "I have greater difficulty in making decisions more than I used to", "I can't make decisions at all anymore"],
};

questions[13] = {
  question: "Question 14",
  answers: ["I don't feel that I look any worse than I used to", "I am worried that I am looking old or unattractive", "I feel there are permanent changes in my appearance that make me look unattractive", "I believe that I look ugly"],
};

questions[14] = {
  question: "Question 15",
  answers: ["I can work about as well as before", "It takes an extra effort to get started at doing something", "I have to push myself very hard to do anything", "I can't do any work at all"],
};

questions[15] = {
  question: "Question 16",
  answers: ["I can sleep as well as usual", "I don't sleep as well as I used to", "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep", "I wake up several hours earlier than I used to and cannot get back to sleep."]
};

questions[16] = {
  question: "Question 17",
  answers: ["I don't get more tired than usual", "I get tired more easily than I used to", "I get tired from doing almost anything", "I am too tired to do anything"]
};

questions[17] = {
  question: "Question 18",
  answers: ["My appetite is no worse than usual", "My appetite is not as good as it used to be", "My appetite is much worse now", "I have no appetite at all anymore"],
};

questions[18] = {
  question: "Question 19",
  answers: ["I haven't lost much weight, if any, lately", "I have lost more than five pounds", "I have lost more than ten pounds", "I have lost more than fifteen pounds"],
};

questions[19] = {
  question: "Question 20",
  answers: ["I am no more worried about my health than usual", "I am worried about physical problems like aches, pains, upset stomach, or constipation", "I am very worried about physical problems and it's hard to think of much else", "I am so worried about my physical problems that I cannot think of anything else"],
};

questions[20] = {
  question: "Question 21",
  answers: ["I have not noticed any recent change in my interest in sex", "I am less interested in sex than I used to be", "I have almost no interest in sex", "I have lost interest in sex completely"],
};

var results = [];

results[0] = {
  result: "Minimal depression",
  description: "It is likely a temporary deterioration in mood caused by current events in your life. If symptoms persist, take this test after 7 days and compare the results for deterioration or improvement."
};

results[1] = {
  result: "Mild depression",
  description: "The result in this range indicates the need to go to a psychologist or psychotherapist for further diagnosis. Mild depressive symptoms are treated with psychotherapy, without the need for pharmacotherapy. A psychologist or psychotherapist will refer you to a psychiatrist if necessary."
};

results[2] = {
  result: "Moderate depression",
  description: "Scoring in this range suggests taking quick action and contacting a psychologist, psychotherapist or psychiatrist. It is possible that pharmacological and antidepressant treatment will be initiated by a psychiatrist. It is important to start psychotherapy in addition to pharmacological actions. This determines the effective treatment of depression."
};

results[3] = {
  result: "Severe depression",
  description: "It is necessary to see a psychiatrist. It is a dangerous condition for health and life, mainly when suicidal thoughts appear. Psychotherapy is more intense. In some cases, hospital treatment is necessary to prevent life-threatening conditions."
};

//displays first question
document.getElementById("question").textContent = questions[0].question;
document.getElementById("answer0").textContent = questions[0].answers[0];
document.getElementById("answer1").textContent = questions[0].answers[1];
document.getElementById("answer2").textContent = questions[0].answers[2];
document.getElementById("answer3").textContent = questions[0].answers[3];

var next = document.getElementById("next");

//variables for storing the user score, result and the index of a question
// Create a variable to store the user's score
var userScore = 0;
var userResult = [];
var questionNumber = 0;

//the userResult object to store user's personal result
userResult[0] = {
  result: "N/A",
  description: "N/A",
};

// after clicking next button the score is being updated and the questions changed
next.addEventListener('click', function() {


  // assignes the correct amout of points for the answer and sums it
  let answerPoints = parseInt($("form input[name=answer]:checked").val());
  userScore = userScore + answerPoints;

  // shows the results if it is the last question
  if (questionNumber == (questions.length - 1)) {

    //changes the screen to the results screen
    document.getElementsByTagName("article")[0].style.display = "none";
    var resultsPage = document.getElementById("resultsPage");
    resultsPage.classList.remove("results-hidden");

    //assignes the value to the correct result
    if (userScore <= 11) {
      userResult[0].result = results[0].result;
      userResult[0].description = results[0].description;
    } else if ((userScore >= 12) && (userScore <= 19)) {
      userResult[0].result = results[1].result;
      userResult[0].description = results[1].description;
    } else if ((userScore >= 20) && (userScore <= 25)) {
      userResult[0].result = results[2].result;
      userResult[0].description = results[2].description;
    } else if ((userScore >= 26) && (userScore <= 63)) {
      userResult[0].result = results[3].result;
      userResult[0].description = results[3].description;
    }

    //shows the results on the screen
    document.getElementById("result").textContent = userResult[0].result;
    document.getElementById("score").textContent = "Your score is " + userScore;
    document.getElementById("description").textContent = userResult[0].description;

  } else {

    //if it is no the last question, continue and change to the next one
    questionNumber++;

    document.getElementById("question").textContent = questions[questionNumber].question;
    document.getElementById("answer0").textContent = questions[questionNumber].answers[0];
    document.getElementById("answer1").textContent = questions[questionNumber].answers[1];
    document.getElementById("answer2").textContent = questions[questionNumber].answers[2];
    document.getElementById("answer3").textContent = questions[questionNumber].answers[3];
  }

});


//function to copy results to the clipboard
function CopyToClipboard(id) {

  var r = document.createRange();

  r.selectNode(document.getElementById(id));

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);

  document.execCommand('copy');

  window.getSelection().removeAllRanges();

};
