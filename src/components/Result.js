/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Result.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Result extends React.Component {
  render() {
    return (
      <input
        className="resultContainer"
        value={this.props.result}
        type="text"
        onKeyDown={(e) => e.preventDefault()}
        disabled
      />
    );
  }
}

Result.propTypes = {
  result: PropTypes.number,
};

Result.defaultProps = {
  result: 0,
};

export default Result;
