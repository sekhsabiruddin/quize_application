import { useEffect } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Quizebox from "./component/Quizebox/Quizebox";
import quizedata from "./data";
function App() {
  useEffect(() => {
    localStorage.setItem("mathQuestions", JSON.stringify(quizedata));
  });
  return (
    <div>
      <Quizebox />
    </div>
  );
}

export default App;
