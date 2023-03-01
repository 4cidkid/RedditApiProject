import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {  Header } from './components/header/Header';
function App() {
  return (
    <>
    <Header/>
    <div className="App">
        {/* <Counter /> */}
    </div>
    </>
  );
}

export default App;
