import React, { useState } from 'react';
import './App.css';
function App() {
  const [result, setResult] = useState('');

  function handleClick(e) {
    console.log(result.concat(e.target.name));
    setResult(result.concat(e.target.name));
  }

  function Delete() {
    console.log(result.slice(0, result.length - 1));
    setResult(result.slice(0, result.length - 1));
  }

  function Clear() {
    setResult('');
  }

  function Evaluate() {
    try {
      console.log(eval(result).toString());
      setResult(eval(result).toString());
    } catch (error) {
      console.log('Error');
    }
  }
  return (
    <div className="Calc">
      <form>
        <input className="input-box" type="text" value={result} />
      </form>
      <div className="buttons">
        <button id="clear" onClick={Clear}>
          Clear
        </button>
        <button id="delete" onClick={Delete}>
          del
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>

        <button id="result" onClick={Evaluate}>
          Result
        </button>
      </div>
    </div>
  );
}

export default App;
