import React from 'react'
import {Link} from 'react-router-dom'
import './SideNav.scss'

function SideNav({list}) {
    return (

        <div>
             {list.map((item) => {
        return (
            <div className= 'sidenav'>
          <Link to={`/recipe/${item.title}`}>
                <ol>{item.title}</ol>
          </Link>
          </div>
        );
      })}
            
        </div>
    )
}

export default SideNav
