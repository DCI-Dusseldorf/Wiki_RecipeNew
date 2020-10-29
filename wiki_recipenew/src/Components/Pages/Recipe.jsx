import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './Recipe.scss';

export default function Recipe({ list, setList }) {
  const { id } = useParams();
  const index = list.findIndex((item) => item.id === +id);
  const article = list[index];
  const onDelete = () => {
    if (index === -1) {
      return;
    }
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <>
      <div className='contentHeight'>
        <h1>{article.title}</h1>
        <h2>{ReactHtmlParser(article.description)}</h2>
        <Link to={`/edit/${article.id}`}>
          <Button className='mr-2' variant='secondary'>
            Edit
          </Button>
        </Link>
        <Link to='/'>
          <Button variant='danger' onClick={onDelete}>
            Delete
          </Button>
        </Link>
      </div>
    </>
  );
}
