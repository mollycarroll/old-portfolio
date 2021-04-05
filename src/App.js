import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route
} from 'react-router-dom'
import Home from './components/Home'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        {/* <Route path='/jeopardy'>
            <Jeopardy />
        </Route>

        <Route path='/travelist'>
            <Travelist />
        </Route>

        <Route path='/gather'>
            <Gather />
        </Route>

        <Route path='/serapis'>
            <Serapis />
        </Route> */}

      </Switch>
    </Router>
  );
}

export default App;
