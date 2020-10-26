import './App.css';

import Home from './Components/Pages/Home.jsx';
import Edit from './Components/Pages/Edit';
import Recipe from './Components/Pages/Recipe';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='App'>
        <Switch>
          <Route path='/edit' component={Edit} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default App;
