import './App.css';
import React, { useEffect } from 'react';
import Home from './Components/Home/Home.jsx';
import Edit from './Components/Pages/Edit';
import Recipe from './Components/Pages/Recipe';
import Navigation from './Components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import SideNav from './Components/SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Pages/Add';

const SET = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const GET = (k) => JSON.parse(localStorage.getItem(k));

function App() {
  const [list, setList] = React.useState(GET('textData') || []);

  useEffect(() => SET('textData', list), [list]);
  return (
    <>
      <div className='App'>
        <Navigation />
        <div className='main'>
          <SideNav list={list} setList={setList} />

          <div className='content'>
            <Switch>
              <Route exact path='/add'>
                <Add list={list} setList={setList} />
              </Route>
              <Route path='/edit/:id'>
                <Edit list={list} setList={setList} />
              </Route>
              <Route path='/:id'>
                <Recipe list={list} setList={setList} />
              </Route>

              <Route exact path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
