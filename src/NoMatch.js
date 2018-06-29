import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch(props) {
  return (
    <div>
      <h1>Page not found</h1>
      <p>You may want below pages:</p>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/search'>Search a book</Link>
        </li>
      </ul>
    </div>
  )
}

export default NoMatch;