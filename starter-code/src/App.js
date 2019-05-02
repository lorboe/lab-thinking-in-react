import React, { Component } from 'react';
import './App.css';
import MainProductTable from './components/MainProductTable'
import MainProductTable1 from './components/MainProductTable1'

import {data} from './data.json'


class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <MainProductTable products={data}/> */}
       <MainProductTable1 products={data}/>

      </div>
    );
  }
}

export default App;
