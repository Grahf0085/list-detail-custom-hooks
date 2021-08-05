import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <h1>Rick and Morty Toons 4.0132432487398503</h1>
        <Link to={'/'}>
          <form>
            <button>Home</button>
          </form>
        </Link>
      </header>
    </>
  );
};

export default Header;
