import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PlayerList from './components/playerList'
import './App.css';

function App() {

  return (
    <>
      <Header />
      <PlayerList />
    </>
  );
}

export default App;
