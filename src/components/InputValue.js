/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
import React from 'react';
import './InputValue.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class InputValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inputValue" style={{ backgroundColor: this.props.backgroundColor }}>
        <p className="nameOfValue">{this.props.content}</p>
      </div>
    );
  }
}

InputValue.propTypes = { content: PropTypes.string.isRequired };
InputValue.propTypes = { backgroundColor: PropTypes.string.isRequired };

export default InputValue;
