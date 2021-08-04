import React from 'react';
import PropTypes from 'prop-types';

const ToonDetailPage = ({ name, status, species, gender }) => (
  <section role="details">
    <h2>Name: {name}</h2>
    <h3>Status: {status}</h3>
    <h3>Species: {species}</h3>
    <h3>Gender: {gender}</h3>
  </section>
);

ToonDetailPage.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default ToonDetailPage;
