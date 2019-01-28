$(document).ready(function() {
  $("#userAnswerForm").submit(function(e) {
    checkAnswer();
    e.preventDefault;
    return false;
  });
});

function checkAnswer() {
  //alert("answer submitted!");
  let numericAnswer = $("#numericAnswer").html();
  let unitAnswer = $("#unitAnswer").html();

  let userNumericAnswer = $("input[name=userAnswer").val();
  let userUnitAnswer = $("select[name=unitChoices]").val();

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
