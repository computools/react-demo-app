import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import { HomePage } from './pages/home-page';
import { ListPage } from './pages/list-page';
import { NotFoundPage } from './pages/not-found-page';
import './index.css';
import "antd/dist/antd.css";

export class App extends React.Component{
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/list" component={ListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}
