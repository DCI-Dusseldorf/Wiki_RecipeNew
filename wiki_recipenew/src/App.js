import './App.css';
import React, { useEffect } from 'react';
import Home from './Components/Pages/Home.jsx';
import Edit from './Components/Pages/Edit';
import Recipe from './Components/Pages/Recipe';
import Navigation from './Components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';

const SET = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const GET = (k) => JSON.parse(localStorage.getItem(k));

function App() {
  const [list, setList] = React.useState(GET('textData'));
  function changeArticle(title, value) {
    setList({ ...list, [title]: value });
  }
  useEffect(() => SET('textData', list), [list]);
  return (
    <>
      <div className='App'>
        <Navigation />

        <Switch>
          <Route path='/recipe/:title'>
            <Recipe list={list} />
          </Route>
          <Route path='/edit' component={Edit} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;
