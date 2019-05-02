import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainProductTable from './MainProductTable';
import jsondata from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
       <MainProductTable />
      </div>
    );
  }
}

export default App;