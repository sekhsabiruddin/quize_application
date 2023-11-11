import React, { useEffect, useState } from "react";
import "./Quizebox.css";
import Freeanswer from "../Freeanswer/Freeanswer";
import FillintheBank from "../FillintheBank/FillintheBank";
import Header from "../Header/Header";
import Mcqquestion from "../Mcqquestion/Mcqquestion";

const Quizebox = () => {
  const [questiontracker, setQuestionTracker] = useState(1);
  const [allthequestion, setAllthequestion] = useState([]);
  const [singlequestion, setSinglequestion] = useState([]);
  const [typeofquestion, setTypeofQuestion] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("mathQuestions");
    const parsedData = storedData ? JSON.parse(storedData) : [];
    const currentQuestion = parsedData.filter(
      (arr) => arr.id == parseInt(questiontracker, 10)
    );
    if (currentQuestion.length > 0) {
      setSinglequestion(currentQuestion);
      let x = currentQuestion[0].questiontype;
      setTypeofQuestion(x);

      setQuestionTracker(questiontracker + 1);
    }
    setAllthequestion(parsedData);
    handleNextButton();
  }, []);

  const handleNextButton = () => {
    const currentQuestion = allthequestion.filter(
      (arr) => arr.id == parseInt(questiontracker, 10)
    );

    // Check if the current question is found
    if (currentQuestion.length > 0) {
      setSinglequestion(currentQuestion);
      let x = currentQuestion[0].questiontype;
      setTypeofQuestion(x);

      setQuestionTracker(questiontracker + 1);
    }
  };
  const handlePrevButton = () => {
    if (questiontracker > 1) {
      const prevQuestion = allthequestion.find(
        (arr) => arr.id === questiontracker - 1
      );

      if (prevQuestion) {
        setSinglequestion([prevQuestion]);
        setTypeofQuestion(prevQuestion.questiontype);
        setQuestionTracker(questiontracker - 1);
      }
    }
  };

  function loadQuestion(questionNumber) {
    const currentQuestion = allthequestion.find(
      (arr) => arr.id === parseInt(questionNumber, 10)
    );

    if (currentQuestion) {
      setSinglequestion([currentQuestion]);
      setTypeofQuestion(currentQuestion.questiontype);
    }
  }
  return (
    <>
      <Header
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
      />
      <div className="quize-container">
        <div className="inner-quize-contaiiner">
          <div className="quetion-box">
            {typeofquestion === "freeques" ? (
              <Freeanswer singlequestion={singlequestion} />
            ) : typeofquestion === "mcq" ? (
              <Mcqquestion singlequestion={singlequestion} />
            ) : typeofquestion === "fillintheblank" ? (
              <FillintheBank singlequestion={singlequestion} />
            ) : null}
          </div>
          <div className="quize-indivusial-button">
            {allthequestion.map((question) => (
              <button
                key={question.id}
                onClick={() => loadQuestion(question.id)}
              >
                {question.id}
              </button>
            ))}
            <div className="button-submit">
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quizebox;
