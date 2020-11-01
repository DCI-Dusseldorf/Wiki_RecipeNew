import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';
import { GiChickenOven } from 'react-icons/gi';
import {RiFileAddLine} from "react-icons/ri";

function Navigation() {
  return (
    <div className='nav '>
      <div className='logo'>
        {/* <GiChickenOven /> */}
      </div>

      <div className='navHeader'>Wiki Recipe</div>
      <div className='navLinks'>
        <Link to='/' className='link'>
          Home
        </Link>
        <Link to='/add' className='link' id='logo'>
          <RiFileAddLine/>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
