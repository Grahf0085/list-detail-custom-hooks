import React from 'react';
import PropTypes from 'prop-types';
import Toon from './Toon';
import './toonlist.css';

const ToonList = ({ toons }) => {
  const toonElements = toons.map((toon) => (
    <li key={toon.id}>
      <Toon {...toon} />
    </li>
  ));

  return <ul>{toonElements}</ul>;
};

ToonList.propTypes = {
  toons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default ToonList;
