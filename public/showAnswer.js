$(document).ready(function() {
  showAnswer();
});

function showAnswer() {
  // On page load or refresh, answers should be hidden
  $(".answer").removeClass("selected");
  // when user clicks the `Show Answer` button, the answer is shown
  $("#showAnswer").click(function() {
    $(".answer").addClass("selected");
  });
}
