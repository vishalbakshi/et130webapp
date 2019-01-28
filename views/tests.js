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

QUnit.test("User can input a text answer", function(assert) {
  assert.equal(
    $("input[type=text][name=userAnswer]").length,
    1,
    "Page contains text input for user answer"
  );
});

QUnit.test("User can select units for answer", function(assert) {
  assert.equal(
    $("select[name=unitChoices]").length,
    1,
    "Page contains dropdown for unit selection"
  );
});

QUnit.test("User has submit button available", function(assert) {
  assert.equal(
    $("input[type=submit][name=userAnswerSubmit]").length,
    1,
    "Page containg submit button for user answer"
  );
});

QUnit.test("User receives a message after answer submission", function(assert) {
  checkAnswer();
  assert.notEqual(
    $("#checkAnswerResponse").text(),
    "",
    "Page contains response text after user answer submission"
  );
});

/*
QUnit.test(
  "User receives appropriate message when submitting incorrect units",
  function(assert) {
    $("input[name=userAnswer]").val($("#numericAnswer").text());
    $("#unitChoices").val("N/A");
    $("#userAnswerSubmit").trigger("click");

    assert.equal(
      $("#checkAnswerResponse").text(),
      "Incorrect units",
      "User receives message when submitting incorrect units"
    );
  }
);


QUnit.test(
  "User receives appropriate message when submitting incorrect numeric answer",
  function (assert) {
    $("input[name=userAnswer]").val("N/A");
    $("#unitChoices").val($("#unitAnswer").text());
    $("#userAnswerSubmit").trigger("click");
    assert.equal(
      $("#checkAnswerResponse").text(),
      "Incorrect numeric answer",
      "User receives message when submitting incorrect numeric answer"
    );
  }
);
*/
