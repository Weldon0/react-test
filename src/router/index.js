import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '@/pages/home/home.jsx';
import Teacher from '../pages/teacher/index.jsx';

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/teacher' component={Teacher}/>
          <Redirect to='/' />
        </Switch>
      </HashRouter>
    )
  }
}