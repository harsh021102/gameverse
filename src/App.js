import React from 'react';
import './App.css';
import MainScreen from './MainScreen';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <MainScreen/>
    </div>
  );
}

export default App;
