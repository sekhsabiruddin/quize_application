import React, { useEffect, useState } from "react";
import "./Freeanswer.css";

const Freeanswer = ({ singlequestion }) => {
  const [useranswer, setUsername] = useState("");
  const [alluseranswer, setAllUseranswer] = useState([]);
  const { question, id } = singlequestion[0];

  useEffect(() => {
    // Load data from localStorage
    const storedData = JSON.parse(localStorage.getItem("alluseranswer")) || [];
    setAllUseranswer(storedData);

    // Save to localStorage when the id changes
    handleStoreData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    // Save to localStorage whenever alluseranswer changes
    localStorage.setItem("alluseranswer", JSON.stringify(alluseranswer));
  }, [alluseranswer]);

  const handleStoreData = () => {
    // Use the functional form of the state update function
    setAllUseranswer((prevAllUseranswer) => {
      const updatedAnswer = [
        ...prevAllUseranswer,
        { id: id, useranswer: useranswer },
      ];
      console.log("Updated array answer", updatedAnswer);
      return updatedAnswer;
    });
  };

  return (
    question && (
      <div className="free-question-container">
        <h1>{question}= ?</h1>
        <input
          type="number"
          className="free-question-input"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    )
  );
};

export default Freeanswer;
