import React, { useState } from 'react';

import { Header } from '../Header/Header';
import { Game } from '../Game/Game';

import './App.css';

function App() {
  const [score, setScore] = useState(0);

  const handleFinishGame = (num: number): void => {
    setScore(score + num);
  };

  return (
    <div className="App">
      <Header score={score} />
      <Game handleFinishGame={handleFinishGame} />
    </div>
  );
}

export default App;
