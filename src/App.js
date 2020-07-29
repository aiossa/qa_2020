import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {simpleCalculation, compareTwoNumbers} from './utils/utils';


function App() {
  const [maxNumber, setMaxNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Это ветка Мастер! Мы деплоимся в Хероку
        </p>
        <p>
          Редактируйте <code>src/App.js</code> и сохраните для обновления!
        </p>
        <p>
            Result of calculation is {simpleCalculation(10,5)}
          </p>

          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Изучаем реакт!
        </a>
      </header>
<div>

          <div>
            <input id = "inp1"></input>
            <input id = "inp2"></input>
            <button onClick={() => setMaxNumber(compareTwoNumbers(
            document.getElementById("inp1").value,
            document.getElementById("inp2").value
            ))} >Сравни числа!</button>          
          </div>
          <p> Максимальное число {maxNumber}
          </p>
  </div>

    </div>
    
  );
}

export default App;
