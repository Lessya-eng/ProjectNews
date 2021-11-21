import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./core"
import { ArticlesService } from './services/ArticlesService';
import { BlogsService } from './services/BlogsService';
import { ReportsService } from './services/ReportsService';

ArticlesService.setCredentials({
  URL: "https://api.spaceflightnewsapi.net/v3/articles",
});

BlogsService.setCredentials({
  URL: "https://api.spaceflightnewsapi.net/v3/blogs",
});

ReportsService.setCredentials({
  URL: "https://api.spaceflightnewsapi.net/v3/reports",
});

ReactDOM.render(
  <BrowserRouter basename="/ProjectNews">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
