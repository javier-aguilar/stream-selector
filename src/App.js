import React from 'react';
import './App.css';
import Likes from './components/likes';

function App() {
  return (
    <div>
      <header>
        <h1>Stream Selector</h1>
      </header>
      <section>
        <Likes />
      </section>
    </div>
  );
}

export default App;
