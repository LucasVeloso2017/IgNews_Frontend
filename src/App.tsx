import React from 'react';
import Routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './styles/global'
import AppProvider from './hooks';

function App() {
  return (
    <Router>
      <AppProvider>
        <GlobalStyle />
        <Routes />
      </AppProvider>
    </Router>
  );
}

export default App;
