import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { PostsProvider } from './context/PostsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <PostsProvider>
      <App />
    </PostsProvider>
  </ThemeProvider>
);