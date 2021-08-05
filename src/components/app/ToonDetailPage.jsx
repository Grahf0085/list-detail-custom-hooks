import React from 'react';
import { useParams } from 'react-router-dom';
import { toonDetails } from '../../state/character';
import PropTypes from 'prop-types';

const ToonDetailPage = () => {
  const { id } = useParams();
  const toon = toonDetails(id);
  if(!toon) return <h1>Loading Details...</h1>;

  return (
    <section role="details">
      <h2>Name: {toon.name}</h2>
      <h3>Status: {toon.status}</h3>
      <h3>Species: {toon.species}</h3>
      <h3>Gender: {toon.gender}</h3>
    </section>
  );
};

ToonDetailPage.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default ToonDetailPage;
