import React from 'react';
import {Link} from 'react-router-dom';

// import './styles.scss';

function Nav() {
  return (
    <>
      <h1> Nav Page </h1>
      <Link to='login'>
        <li> login </li>
      </Link>
      <Link to=''>
        <li> home </li>
      </Link>
    </>
  );
}

export default Nav;
