import React, { useState } from 'react';
import Login from './Login';
import './App.css'; 

function App() {
  const [message, setMessage] = useState('Kayumba');
  const update = () => setMessage('Leticia');
  const reset = () => setMessage('Kayumba');

  return (
    <div className="app-container">
      <div className="header">
        <h1>Hello JMV</h1>
        <h2>{message}</h2>
        <div className="button-group">
          <button onClick={update} className="action-button">
            Change name
          </button>
          <button onClick={reset} className="action-button">
            Reset
          </button>
        </div>
      </div>
      <Login />
    </div>
  );
}

export default App;
