QUnit.test("Answer display property correctly assigned", function(assert) {
  let answerDisplayStyle = $(".answer").css("display");
  assert.equal(
    answerDisplayStyle,
    "none",
    "Answer hidden on initial page load"
  );

  $("#showAnswer").trigger("click");
  answerDisplayStyle = $(".answer").css("display");

  assert.equal(
    answerDisplayStyle,
    "block",
    "Answer displays upon clicking button with `showAnswer` id"
  );
});

QUnit.test("User can submit an answer", function(assert) {
  assert.equal(1, 1, "initial 1==1 test has passed");
});
