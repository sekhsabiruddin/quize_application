import React from "react";
import "./FillintheBank.css";

const FillintheBank = ({ singlequestion }) => {
  const { question_start_word, question_end_word } = singlequestion[0];
  // console.log(
  //   "question_start_word",
  //   question_start_word,
  //   "question_end_word",
  //   question_end_word
  // );

  return (
    <div className="fillinthebank-question">
      {question_start_word && (
        <h2>
          {question_start_word} <input /> {question_end_word}
        </h2>
      )}
    </div>
  );
};

export default FillintheBank;
