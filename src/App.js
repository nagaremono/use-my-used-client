import React from 'react';
import AppHeader from './components/AppHeader';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <AppHeader />
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
