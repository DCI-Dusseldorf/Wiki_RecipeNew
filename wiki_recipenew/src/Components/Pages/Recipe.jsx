import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
 

export default function Recipe({ list }) {
  const params = useParams();
  //const article = props.list[params.title];
  //const recipes = JSON.parse(localStorage.getItem('textData'));
  console.log(list);
  return (
    <div>
      {list.map((item) => {
        return (
          <Link to={`/recipe/${item.title}`}>
            
              <ol>{}</ol>
            
           
          </Link>
        );
      })}
    </div>
  );
}
