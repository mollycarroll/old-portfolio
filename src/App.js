import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom'

import Home from './components/Home'
import Jeopardy from './components/Jeopardy'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/jeopardy'>
            <Jeopardy />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
