import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

export default function Recipe({ list, setList }) {
  const { id } = useParams();
  const index = list.findIndex((item) => item.id === +id);
  const article = list[index];
  const onDelete = () => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <>
      <h1>{article.title}</h1>
      <h2>{ReactHtmlParser(article.description)}</h2>
      <Link to={`/edit/${article.id}`}>
        <button>Edit</button>
      </Link>
      <Link to='/'>
        <button onClick={onDelete}>Delete</button>
      </Link>
    </>
  );
}
