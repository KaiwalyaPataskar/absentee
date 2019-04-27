import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import RootLayout from './components/rootLayout';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header>
            <Route path="/" component={RootLayout} />
          </Header>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
