import logo from './logo.svg';
import './App.css';

import React from 'react';
import Review from './Review';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      <main>
        <section className='container'>
          <div className='title'>
            <h2>our reviews</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
    </div>
  );
}

export default App;
