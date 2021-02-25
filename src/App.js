import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './ListComponent';

const myFunction = (name) => { console.log(name) }

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ListComponent
          myFunction={myFunction}
        />
      </header>
    </div>
  );
}

export default App;
