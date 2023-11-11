import React, { useState } from "react";
import "./Mcqquestion.css";
const Mcqquestion = ({ singlequestion }) => {
  console.log("mcq question", singlequestion);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const { options, question } = singlequestion[0];
  console.log("question", question, "options", options);

  return (
    <div>
      {question && (
        <div className="mcq-container">
          <h2>{question}</h2>
          <form>
            {options &&
              options.map((option, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="radio"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionChange(option)}
                    />
                    {option}
                  </label>
                  <br />
                  <br />
                </div>
              ))}
          </form>

          <div>
            <p>Selected Option: {selectedOption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mcqquestion;
