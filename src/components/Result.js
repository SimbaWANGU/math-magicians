import React from 'react';
import './Result.css';
import PropTypes from 'prop-types';

const Result = ({ result }) => {
  const text = 'text';
  return (
    <input
      className="resultContainer"
      value={result}
      type={text}
      onKeyDown={(e) => e.preventDefault()}
      disabled
    />
  );
};

Result.propTypes = {
  result: PropTypes.number,
};

Result.defaultProps = {
  result: 0,
};

export default Result;
