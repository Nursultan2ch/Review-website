import logo from './logo.svg';
import './App.css';

import React from 'react';
import Review from './Review';

function App() {
  return (
    <div className="App">
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
