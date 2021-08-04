import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ToonList from './ToonList';
import ToonDetailPage from './ToonDetailPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ToonList} />
      <Route exact path="/id" component={ToonDetailPage} />
    </Switch>
  );
}
