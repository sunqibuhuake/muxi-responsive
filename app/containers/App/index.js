import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ArticlePage from 'containers/ArticlePage/Loadable';
import Header from 'containers/Header';
import FetchWrapper from '../FetchWrapper'
import AboutPage from '../AboutPage'

import './style.css'


export default function App(props) {
  return (
    <FetchWrapper>
      <div className="sq-container">
        <Header {...props}></Header>
        <Switch>
          <Route exact path="/" component={ArticlePage}/>
          <Route exact path="/news/:id" component={ArticlePage}/>
          <Route exact path="/projects/:id" component={ArticlePage}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route path="" component={ArticlePage}/>
        </Switch>
      </div>
    </FetchWrapper>
  );
}
