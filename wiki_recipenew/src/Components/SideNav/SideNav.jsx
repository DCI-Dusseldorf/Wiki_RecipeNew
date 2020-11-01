import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.scss';

function SideNav({ list }) {
  return (
    <div className='sidenav'>
      <h3>Recipes</h3>

      {list.map((item) => {
        return (
          <Link className='link' to={`/${item.id}`}>
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default SideNav;
