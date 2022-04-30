import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainScreen from './MainScreen';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <MainScreen/>
      {/* <Routes>
        <Route path="/gameverse" eleme></Route>
        <Route index element={[<Sidebar/>,<MainScreen/>]}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
