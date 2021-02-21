import React, { useState } from "react";
import "./App.css";

function Quiz() {
  const questions = [
    {
      questionText:
        "How often have you been bothered by feeling down, depressed, irritable, or hopeless over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 3, type: "answer-d answer" },
      ],
    },
    {
      questionText:
        "How often have you been bothered that you have little interest or pleasure in doing things over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 3, type: "answer-d answer" },
      ],
    },
    {
      questionText:
        "How often have you been bothered by trouble falling asleep, staying asleep, or sleeping too much over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 3, type: "answer-d answer" },
      ],
    },
    {
      questionText:
        "How often have you been bothered that you have poor appetite, weight loss, or overeating over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 3, type: "answer-d answer" },
      ],
    },
    {
      questionText:
        "How often have you been bothered by feeling tired, or having little energy over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 3, type: "answer-d answer" },
      ],
    },
    {
      questionText:
        "How often have you been bothered by feeling bad about yourself – or feeling that you are a failure, or that you have let yourself or your family down over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 3, type: "answer-d answer" },
      ],
    },
    {
      questionText:
        "How often have you been bothered that you have trouble concentrating on things like school work, reading, or watching TV over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 3, type: "answer-d answer" },
      ],
    },
    {
      questionText:
        "How often have you been bothered by moving or speaking so slowly that other people could have noticed? Or the opposite – being so fidgety or restless that you were moving around a lot more than usual over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 2, type: "answer-d answer" },
      ],
    },
    {
      questionText:
        "How often have you been bothered by thoughts that you would be better off dead, or of hurting yourself in some way over the last two weeks?",
      answerOptions: [
        { answer: "NOT AT ALL", value: 0, type: "answer-a answer" },
        { answer: "SEVERAL DAYS", value: 1, type: "answer-b answer" },
        {
          answer: "MORE THAN HALF THE DAYS",
          value: 2,
          type: "answer-c answer",
        },
        { answer: "NEARLY EVERY DAY", value: 2, type: "answer-d answer" },
      ],
    },
  ];

  const results = [
    "You seem to to very cheerful😊 keep going. but you can also try some yoga swipe down.",

    "Thanks for taking time to complete the questions😊. While you might be feeling down right now, 🤦‍♂️you’re not showing signs of depression🙌. Those low feelings should go away as the problem passes 😉but you can help things along by trying some of the ideas below. swipe down",

    "Your score shows you have some signs that may indicate depression.😳 If you’re dealing with some hard things that are making you feel down right now, that’s pretty normal👨‍👩‍👧‍👦.  Things should look up as you deal with them, but you should keep an eye on it and definitely check out👀 some of the helpful information on this website.",

    "Your score falls into the middle (or moderate) range and depression could be what’s stopped you working or studying🙇‍♂️, meeting friends, or doing the things that make you happy😊. This isn’t a diagnosis but it looks like it’s time to get help👩‍👧‍👦, and get your life back (as hard as that might sound right now). Lots of people who experience depression have got through it🦾 by talking with someone who’s trained to help.",

    "If you’re having thoughts most days about hurting or killing yourself 🧘‍♂️please reach out straight away 🏃‍♂️and talk to someone who’s trained to help👨‍⚕️. Even if you feel like no-one in the world gets you right now, there are people who can support you👨‍👩‍👦‍👦. These thoughts are common in depression but if you find they are getting more frequent (most days) or you feel more like acting on them -🤙 call us straight away.",
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState();
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (value) => {
    setScore(score + value);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const valu = Math.floor(score / 5);

      setScore(valu);
      setShowScore(2);
    }
  };

  return (
    <div className="Quiz">
      {showScore ? (
        <div className="score-section"> {results[score]}</div>
      ) : (
        <>
          <div className="Question-box">
            <div className="Question">
              {/* <h2>Question 1</h2>Choose one of the following */}
              <div>
                <span> Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.value)}
                className={answerOption.type}
              >
                {answerOption.answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
