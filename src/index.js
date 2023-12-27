import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/infoMoviesApp">
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


