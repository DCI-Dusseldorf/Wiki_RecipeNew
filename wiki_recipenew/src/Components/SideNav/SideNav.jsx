import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.scss';

function SideNav({ list }) {
  return (
    <div>
      <div className='sidenav'>
        {list.map((item) => {
          return (
            <Link to={`/recipe/${item.title}`}>
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
