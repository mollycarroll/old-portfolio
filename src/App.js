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
        <Route path='/'>
          <Home />
        </Route>

        <Route path='/jeopardy'>
            <Jeopardy />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
