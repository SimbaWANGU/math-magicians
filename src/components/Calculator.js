import React from 'react';
import './Calculator.css';
import Result from './Result';
import InputValue from './InputValue';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnValue) {
    const { obj } = this.state;
    const newObj = { ...obj, ...calculate(obj, btnValue) };
    this.setState({
      obj: newObj,
    });
  }

  render() {
    const { obj } = this.state;
    return (
      <div className="calculatorContainer">
        <div>
          <Result result={obj.next || obj.total || 0} className="resultContainer" />
          <div className="firstRow">
            <InputValue content="AC" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="+/-" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="%" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="÷" backgroundColor="Moccasin" handleClick={this.handleClick} />
          </div>
          <div className="secondRow">
            <InputValue content="7" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="8" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="9" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="x" backgroundColor="Moccasin" handleClick={this.handleClick} />
          </div>
          <div className="thirdRow">
            <InputValue content="4" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="5" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="6" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="-" backgroundColor="Moccasin" handleClick={this.handleClick} />
          </div>
          <div className="fourthRow">
            <InputValue content="1" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="2" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="3" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <InputValue content="+" backgroundColor="Moccasin" handleClick={this.handleClick} />
          </div>
          <div className="fifthRow">
            <InputValue content="0" backgroundColor="GhostWhite" handleClick={this.handleClick} />
            <div className="lastRow">
              <InputValue content="." backgroundColor="GhostWhite" handleClick={this.handleClick} />
              <InputValue content="=" backgroundColor="Moccasin" handleClick={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
