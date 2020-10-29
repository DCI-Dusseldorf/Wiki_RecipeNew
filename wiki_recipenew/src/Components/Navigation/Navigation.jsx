import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import { GiChickenOven } from 'react-icons/gi';

function Navigation() {
  return (
    <div className='nav '>
      <div className='logo'>
        <GiChickenOven />
      </div>

      <div className='navHeader'>Wiki Recepi</div>
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
