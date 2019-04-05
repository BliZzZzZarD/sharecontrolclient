import React, {Component} from 'react';
import {ShareCenter} from "./app/components/ShareCenter";

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShareCenter/>
      </div>
    );
  }
}

export default App;
