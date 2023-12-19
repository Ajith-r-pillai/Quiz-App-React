import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Result.css'

function Results() {
  const location = useLocation();
  const navigate=useNavigate()
  const userSelections = JSON.parse(localStorage.getItem('userSelections')) || {};
  const [Qustions, setQustions] = useState([]);

  useEffect(() => {
    const fetchQustions = async () => {
      try {
        const result = await axios.get("./qustion.json");
        setQustions(result.data[0]); // Assuming result.data is an array containing questions
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
   
  

    fetchQustions();
  }, []);
  const handleStartNewExam = () => {
    // Clear user selections from local storage
    localStorage.removeItem('userSelections');
    // Navigate to the home page
    navigate('/');
  };

  const totalQuestions = Qustions.length;
  const correctAnswers = Qustions.reduce(
    (count, question) =>
      userSelections[question.id] === question.correct_answer ? count + 1 : count, 0);

  return (
 <div>
        <div className="result-main">
          <h2>Results</h2>
          <h3>Total Questions: {totalQuestions}</h3>
          <h3>Correct Answers: {correctAnswers}</h3>
    
          {Qustions.map((question) => (
            <div className="results" key={question.id}>
              <h4>{question.id} {question.exam}</h4>
              <ul>
                {question.answers.map((ans, ansIndex) => (
                  <li
                    key={ansIndex}
                    style={{
                      color:
                        userSelections[question.id] === ans
                          ? ans === question.correct_answer
                            ? 'green'
                            : 'red'
                          : 'black',
                    }}
                  >
                    {ans}
                  </li>
                ))}
              </ul>
            
            </div>
          ))}
            <button className="newexam-btn" onClick={handleStartNewExam}>Start New Exam</button>
            <div></div>
        </div>
 </div>
  );
}

export default Results;