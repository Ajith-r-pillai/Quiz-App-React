import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Qustion.css'
import Header from "./Header";
function Qustion() {
  const [Qustions, setQustions] = useState([]);
  const [userSelections, setUserSelections] = useState({});
  const [ind, setind] = useState(0);

const location=useLocation();
const navigate=useNavigate();
 const fetchQustions = async () => {
    const result = await axios.get("./qustion.json");
    setQustions(result.data);
  };
  const handlenext=()=>{
    setind(ind+1)
  }
  const handleprev=()=>{
    setind(ind-1)
  }
 const handlesubmit=()=>{
  localStorage.setItem('userSelections', JSON.stringify(userSelections));
  navigate('/result')
 }
  useEffect(() => {
    fetchQustions();
  }, []);
  console.log(userSelections);
  return (
    <div >
       <Header/>
       <div className="qustion-main">
      {Qustions?.map((item, index) => (
        <div className="qustion" key={index}>
          <h3>{ind+1}.{item[ind].exam}</h3>
          <div>
          <ol>
  {item[ind].answers.map((ans, ansIndex) => (
    <li className="options" key={ansIndex}>
      <label>
        <input
          type="radio"
       
          value={ans}
          checked={userSelections[item[ind].id] === ans}
          onChange={() =>
            setUserSelections({
              ...userSelections,
              [item[ind].id]: ans,
            })
          }
        />
          {ans}
      </label>
    </li>
  ))}
</ol>
            { ind==0 ?"":<button className="sub-btn"  onClick={handleprev}>previous</button>}
         {  ind==Qustions[0].length-1 ?
  <button className="submit-btn" onClick={handlesubmit}>submit</button>
: <button className="sub-btn"  onClick={handlenext}>next</button>}
        
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Qustion;
