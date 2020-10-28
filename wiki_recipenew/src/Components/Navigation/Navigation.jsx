import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='nav '>
      <div className='logo'>Wiki Recepi</div>
      <div className='navLinks'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='/add' className='link'>
          Add
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
