/* eslint-disable no-useless-constructor */
import React from 'react';
import './Calculator.css';
import Result from './Result';
import InputValue from './InputValue';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculatorContainer">
        <div>
          <Result />
          <div className="firstRow">
            <InputValue content="A/C" backgroundColor="GhostWhite" />
            <InputValue content="+/-" backgroundColor="GhostWhite" />
            <InputValue content="%" backgroundColor="GhostWhite" />
            <InputValue content="/" backgroundColor="Moccasin" />
          </div>
          <div className="secondRow">
            <InputValue content="7" backgroundColor="GhostWhite" />
            <InputValue content="8" backgroundColor="GhostWhite" />
            <InputValue content="9" backgroundColor="GhostWhite" />
            <InputValue content="x" backgroundColor="Moccasin" />
          </div>
          <div className="thirdRow">
            <InputValue content="4" backgroundColor="GhostWhite" />
            <InputValue content="5" backgroundColor="GhostWhite" />
            <InputValue content="6" backgroundColor="GhostWhite" />
            <InputValue content="-" backgroundColor="Moccasin" />
          </div>
          <div className="fourthRow">
            <InputValue content="1" backgroundColor="GhostWhite" />
            <InputValue content="2" backgroundColor="GhostWhite" />
            <InputValue content="3" backgroundColor="GhostWhite" />
            <InputValue content="+" backgroundColor="Moccasin" />
          </div>
          <div className="fifthRow">
            <InputValue content="0" backgroundColor="GhostWhite" />
            <div className="lastRow">
              <InputValue content="." backgroundColor="GhostWhite" />
              <InputValue content="=" backgroundColor="Moccasin" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
