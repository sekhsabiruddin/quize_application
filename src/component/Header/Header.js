import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = ({ handleNextButton, handlePrevButton }) => {
  return (
    <div className="outer-header">
      <div className="header">
        <div className="header-left">
          <button onClick={handlePrevButton}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Prev
          </button>
        </div>
        <div className="header-mid">
          <button>Flag</button>
          <button>Check</button>
          <button>Reset</button>
        </div>
        <div className="header-right">
          <button onClick={handleNextButton}>
            Next
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
