import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import { Article, Blog, Home, Report, SelectedArticle, SelectedReport, SelectedBlog, NotFound } from './pages';
import { PublicRoute } from './router/PublicRouter';

function App() {
  return (
    <Switch>
      <PublicRoute component={Home} path="/" exact />
      <PublicRoute component={Article} path="/articles" exact />
      <PublicRoute component={Blog} path="/blogs" exact />
      <PublicRoute component={Report} path="/reports" exact />
      <PublicRoute component={SelectedArticle} path="/articles/:id" exact />
      <PublicRoute component={SelectedBlog} path="/blogs/:id" exact />
      <PublicRoute component={SelectedReport} path="/reports/:id" exact />
      <PublicRoute component={NotFound} exact />
    </Switch>
  );
}

export default App;
