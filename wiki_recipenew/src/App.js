import './App.css';
import React, { useEffect } from 'react';
import Home from './Components/Pages/Home.jsx';
import Edit from './Components/Pages/Edit';
import Recipe from './Components/Pages/Recipe';
import Navigation from './Components/Navigation/Navigation';
import { Route, Switch } from 'react-router-dom';
import SideNav from './Components/SideNav/SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';

const SET = (k, v) => localStorage.setItem(k, JSON.stringify(v));
const GET = (k) => JSON.parse(localStorage.getItem(k));

function App() {
  const [list, setList] = React.useState(GET('textData') || []);

  function changeArticle(title, value) {
    list.title = title;
    list.value = value;
    setList([...list]);
  }
  useEffect(() => SET('textData', list), [list]);
  return (
    <>
      <div className='App'>
        <Navigation />
        <div className='main'>
          <SideNav list={list} setList={setList} />

          <div className='content'>
            <Switch>
              <Route path='/recipe/:title?'>
                <Recipe list={list} />
              </Route>
              <Route path='/edit/:title'>
                <Edit list={list} changeArticle={changeArticle} />
              </Route>
              <Route exact path='/'>
                <Home list={list} setList={setList} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
