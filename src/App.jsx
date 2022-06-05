import './App.css'
import ButtonCalculate from './components/ButtonCalculate';
import '../src/styles/ButtonCalculate.css';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState(''); 

  const addInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    }
    else {
      alert("Por favor ingrese valores para realizar los cálculos.")
    }
  };

  return (
    <div className="App">
    
      <div className="container-calculator">
        <Screen 
            input={input}
          />
  
        <div className="fila">
          <ButtonCalculate handleClick={addInput}>1</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>2</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>3</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>/</ButtonCalculate>
        </div>
        <div className="fila">
          <ButtonCalculate handleClick={addInput}>4</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>5</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>6</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>*</ButtonCalculate>
        </div>
        <div className="fila">
          <ButtonCalculate handleClick={addInput}>7</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>8</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>9</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>+</ButtonCalculate>
        </div>
        <div className="fila">
          <ButtonCalculate handleClick={addInput}>.</ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>0</ButtonCalculate>
          <ButtonCalculate handleClick={calculateResult}><span>=</span></ButtonCalculate>
          <ButtonCalculate handleClick={addInput}>-</ButtonCalculate>
        </div>
        <div className="fila">
          <ButtonCalculate handleClick={addInput}>%</ButtonCalculate>
          <ButtonClear handleClick={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>

  )
}

export default App
