import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';



var db_answer = "";

function validate_answer(db_answer) {
	var user_answer = document.getElementById("answer_box").value;
	console.log(user_answer);
	console.log(db_answer);
	if (db_answer == user_answer) {
			alert("Yes!");
		} else {
			alert("No...: " + db_answer);
		}
}

async function getData() {
    
    fetch('http://127.0.0.1:5000/http://localhost:8182/GET').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        document.getElementById("question-box").innerHTML = data["question"];
		db_answer = data["answer"];
		
    }).catch(function (e) {
        console.log(e);
    });
}



function App() {
  
  const [answer, setAnswer] = useState("")
  
  const handleChange = e => {
	setAnswer(e.target.value)
  }

  return (
	
    <div className="App">
      <header className="App-header">
		  <p></p>
		  <div id="question-box"></div>
		  <br />
		  <div id="answer-box"></div>
		  <input id="answer_box" type="text" value={answer} onChange={handleChange} />
		
		  <Button onClick={getData}>
				  Get Data
		  </Button>
		  <Button onClick={() => validate_answer(db_answer)}>
				  Check Correctness
		  </Button>
      </header>
    </div>
  );
}

export default App;


