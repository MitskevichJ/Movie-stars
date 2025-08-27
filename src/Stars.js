import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import './App.css'; 

const Stars = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const starsArray = Array.from({ length: count }, (_, index) => (
    <li key={index}>
      <Star />
    </li>
  ));

  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray}
    </ul>
  );
};

Stars.propTypes = {
  count: PropTypes.number,
};

export default Stars;