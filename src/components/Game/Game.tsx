import React, { useState } from 'react';

import { Variant } from './Variant';

import './Game.css';

const VARS = {
  PAPER: 'paper',
  SCISSORS: 'scissors',
  ROCK: 'rock',
};

type GameProps = {
  // setStarted: () => void;
  handleFinishGame: (n: number) => void;
  // started: boolean;
};

export const Game = ({ handleFinishGame }: GameProps) => {
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleStartGame = (selectedVar: string) => {
    setStarted(true);
    setSelected(selectedVar);
  };

  const handlePlayAgain = (): void => {
    console.log('click');
    setStarted(false);
    setSelected(null);
  };

  return (
    <>
      <button className="game-btn" onClick={handlePlayAgain}>
        Play again
      </button>
      <div className="game">
        <Variant
          name={VARS.PAPER}
          handleClick={handleStartGame}
          isVisible={selected === null || selected === VARS.PAPER}
        />
        <Variant
          name={VARS.SCISSORS}
          handleClick={handleStartGame}
          isVisible={selected === null || selected === VARS.SCISSORS}
        />
        <Variant
          name={VARS.ROCK}
          handleClick={handleStartGame}
          isVisible={selected === null || selected === VARS.ROCK}
        />
      </div>
    </>
  );
};
