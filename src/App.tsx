import React from 'react';
import { Router, Switch } from 'react-router-dom';
import './App.css';
import { Article } from './pages/Article';
import { Blog } from './pages/Blog';
import { Home } from './pages/Home';
import { Report } from './pages/Report';
import { SelectedArticle } from './pages/SelectedArticle';
import { PublicRoute } from './router/PublicRouter';

function App() {
  return (
    <Switch>
      <PublicRoute component={Home} path="/" exact />
      <PublicRoute component={Article} path="/articles" exact />
      <PublicRoute component={Blog} path="/blogs" exact />
      <PublicRoute component={Report} path="/reports" exact />
      <PublicRoute component={SelectedArticle} path="/articles/:id" exact />
      {/* <PublicRoute component={NotFound} exact /> */}
    </Switch>
  );
}

export default App;
