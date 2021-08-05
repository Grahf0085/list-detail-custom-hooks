import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import ToonList from './ToonList';
import ToonDetailPage from './ToonDetailPage';
import Header from './Header';
import './app.css';

export default function App() {
  return (<section>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ToonList} />
        <Route exact path="/character/:id" component={ToonDetailPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  </section>
  );
}
