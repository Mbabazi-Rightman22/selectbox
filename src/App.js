import React, { Component } from "react";
import "./styles.css";
import SelectBox from './SelectBox/SelectBox';
import states from './SelectBox/states';

class App extends Component {
  render () {
    return (
      <div select state >
      <div className="App">
      <div className="App-Component">
      <SelectBox items={states}/>
      </div>
      </div>
      </div>
    )
  }
}

export default App;

