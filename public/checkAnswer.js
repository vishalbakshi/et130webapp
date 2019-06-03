$(document).ready(function() {
  $("#userAnswerForm").submit(function(e) {
    checkAnswer();
    e.preventDefault;
    return false;
  });
});

// Compare the user's numeric and unit submission with 
// the rendered elements containing the correct answer

function checkAnswer() {
  let numericAnswer = $("#numericAnswer").html();
  let unitAnswer = $("#unitAnswer").html();

  let userNumericAnswer = $("input[name=userAnswer").val();
  let userUnitAnswer = $("select[name=unitChoices]").val();

  // Allow a 10% margin of error in user-submitted answers
  let correctNumericAnswer =
    Math.abs(Number(userNumericAnswer) - Number(numericAnswer)) <
    Number(numericAnswer) * 0.1;

  let correctUnitAnswer = userUnitAnswer == unitAnswer;

  let responseMessage;

  if (!correctNumericAnswer) {
    responseMessage = "Incorrect numeric answer";
  }

  if (!correctUnitAnswer) {
    responseMessage = "Incorrect units";
  }

  if (!correctNumericAnswer && !correctUnitAnswer) {
    responseMessage = "Incorrect numeric answer and units!";
  }
  
  if (correctNumericAnswer && correctUnitAnswer) {
    responseMessage = "Correct!";
  }

  $("#checkAnswerResponse").text(responseMessage);
}
