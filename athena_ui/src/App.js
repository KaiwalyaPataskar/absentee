import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Absentee from './containers/absentee-container';
import Header from './components/header';
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header>
          <Route path="/" component={Absentee} />
        </Header>
      </div>
    </BrowserRouter>
  );
}

export default App;
