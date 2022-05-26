import React, { useState } from 'react';
import './Calculator.css';
import Result from './Result';
import InputValue from './InputValue';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnValue) => {
    setObj({ ...obj, ...calculate(obj, btnValue) });
  };

  return (
    <div className="calculatorContainer">
      <div>
        <Result result={obj.next || obj.total || 0} className="resultContainer" />
        <div className="firstRow">
          <InputValue content="AC" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="+/-" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="%" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="÷" backgroundColor="Moccasin" handleClick={handleClick} />
        </div>
        <div className="secondRow">
          <InputValue content="7" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="8" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="9" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="x" backgroundColor="Moccasin" handleClick={handleClick} />
        </div>
        <div className="thirdRow">
          <InputValue content="4" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="5" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="6" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="-" backgroundColor="Moccasin" handleClick={handleClick} />
        </div>
        <div className="fourthRow">
          <InputValue content="1" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="2" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="3" backgroundColor="GhostWhite" handleClick={handleClick} />
          <InputValue content="+" backgroundColor="Moccasin" handleClick={handleClick} />
        </div>
        <div className="fifthRow">
          <InputValue content="0" backgroundColor="GhostWhite" handleClick={handleClick} />
          <div className="lastRow">
            <InputValue content="." backgroundColor="GhostWhite" handleClick={handleClick} />
            <InputValue content="=" backgroundColor="Moccasin" handleClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
