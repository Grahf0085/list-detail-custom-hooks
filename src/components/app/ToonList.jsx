import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toon from './Toon';
import { useToons } from '../../state/character';
import './toonlist.css';

const ToonList = () => {
  const [page, setPage] = useState(1);
  const { toons, loading } = useToons(page);
  if(loading) return <h1>Loading...</h1>;

  const toonElements = toons.map((toon) => (
    <li key={toon.id}>
      <Toon {...toon} />
    </li>
  ));

  return (
    <>
      <button disabled={page <= 1} onClick={() => setPage((prevPage) => 
        prevPage - 1)}>&lt;</button>
      {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{toonElements}</ul>
    </>
  );
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
