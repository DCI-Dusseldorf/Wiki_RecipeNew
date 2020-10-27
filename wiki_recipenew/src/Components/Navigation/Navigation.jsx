import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <div className='nav'>
        <div className='logo'>Wiki Recepi</div>
        <div className='navLinks'>
          <Link to='/' className='link'>
            Home
          </Link>
          <Link to='/recipe' className='link'>
            Recipe
          </Link>
          <Link to='/edit' className='link'>
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
