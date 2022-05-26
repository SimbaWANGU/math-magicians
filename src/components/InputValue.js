/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './InputValue.css';
import PropTypes from 'prop-types';

const InputValue = ({ content, backgroundColor, handleClick }) => {
  (
    <div className="inputValue" style={{ backgroundColor: { backgroundColor } }}>
      <p className="nameOfValue" onClick={() => handleClick({ content })}>{content}</p>
    </div>
  );
};

InputValue.propTypes = {
  content: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string.isRequired,
};

InputValue.defaultProps = {
  handleClick: () => null,
};

export default InputValue;
