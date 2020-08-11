import React from 'react';
import AppHeader from './components/AppHeader';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
