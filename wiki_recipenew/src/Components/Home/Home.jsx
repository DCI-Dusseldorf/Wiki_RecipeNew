import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Jumbotron className='Jumbo '>
        <h1>Welcome to the world of recipes!!!</h1>

        <Link to='/add'>
          <Button className='btn' variant='primary'>
            Add
          </Button>
        </Link>
      </Jumbotron>
    </div>
  );
}

export default Home;
