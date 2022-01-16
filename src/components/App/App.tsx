import React, { useState } from 'react';

import { Header } from '../Header/Header';
import { Game } from '../Game/Game';
import { RulesModal } from '../RulesModal/RulesModal';

import './App.css';

function App() {
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);

  const handleFinishGame = (num: number): void => {
    setScore(score + num);
  };

  const handleRulesOpen = () => {
    setOpen(true);
    document.body.classList.add('modal-open');
  };

  const handleRulesClose = () => {
    setOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="App">
      <Header score={score} />
      <Game handleFinishGame={handleFinishGame} />
      <button className="rules-btn" onClick={handleRulesOpen}>
        RULES
      </button>
      <RulesModal isOpen={open} onClose={handleRulesClose} />
    </div>
  );
}

export default App;
