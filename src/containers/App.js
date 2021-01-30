import React, { Component } from 'react';
import { Tree } from './';
import './App.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Project Int.</h2>
        </div>
        <Tree />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
