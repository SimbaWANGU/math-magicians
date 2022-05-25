/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import './InputValue.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class InputValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleClick } = this.props;
    return (
      <div className="inputValue" style={{ backgroundColor: this.props.backgroundColor }}>
        <p className="nameOfValue" onClick={() => handleClick(this.props.content)}>{this.props.content}</p>
      </div>
    );
  }
}

InputValue.propTypes = {
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string.isRequired,
};

InputValue.defaultProps = {
  handleClick: () => null,
};

export default InputValue;
