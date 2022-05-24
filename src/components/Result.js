/* eslint-disable no-useless-constructor */
import React from 'react';
import './Result.css';

// eslint-disable-next-line react/prefer-stateless-function
class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="resultContainer">
        <p>0</p>
      </div>
    );
  }
}

export default Result;
