import React, {Component} from 'react';
import './App.css';
import Header from "./Header"
import MainContent from "./MainContent"
import data from "./data"

class App extends Component {
  constructor(){
    super()

    this.state = {
      i : 0
    }
  }

  handleNext(){

  }

  render(){
  return (
    <div className="App">
      <div>{data[0].name.first}</div>

    </div>
  );
  }
}

export default App;
