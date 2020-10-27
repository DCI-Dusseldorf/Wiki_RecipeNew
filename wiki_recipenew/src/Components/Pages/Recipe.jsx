import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

export default function Recipe({ list }) {
  const params = useParams();
  //const article = list[params.title];
  console.log(list.descriptionnpm );
  return (
    <>
      <h1>{params.title}</h1>
    </>
  );
}
