import React from 'react';
import logo from './logo.svg';
import './App.css';
import dayjs from 'dayjs';
var quarterOfYear = require('dayjs/plugin/quarterOfYear')
dayjs.extend(quarterOfYear)

function App() {
var now = dayjs();
var startOfMonth = now.startOf('month')
var startOfQuarter = now.startOf('quarter')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test Only
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
