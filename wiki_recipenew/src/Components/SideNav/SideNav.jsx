import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.scss';

function SideNav({ list }) {
  return (
    <div className='sidenav'>
      <div className='Recipes'>
        <span>Recipes</span>
      </div>

      {list.map((item) => {
        return (
          <Link className='link' to={`/${item.id}`}>
            <div className='Box'>
              <p>{item.title}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SideNav;
