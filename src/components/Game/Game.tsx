import React, { useState } from 'react';

import { Variant } from './Variant';

import './Game.css';

const VARS = {
  PAPER: 'paper',
  SCISSORS: 'scissors',
  ROCK: 'rock',
};

const YOU_WIN_IF = [
  `${VARS.PAPER} + ${VARS.ROCK}`,
  `${VARS.ROCK} + ${VARS.SCISSORS}`,
  `${VARS.SCISSORS} + ${VARS.PAPER}`,
];

type GameProps = {
  handleFinishGame: (n: number) => void;
};

const isWin = (yourChoice: string, housePicked: string): number => {
  if (yourChoice === housePicked) {
    return 0;
  }
  const choicesPair = `${yourChoice} + ${housePicked}`;
  return YOU_WIN_IF.includes(choicesPair) ? 1 : -1;
};

export const Game = ({ handleFinishGame }: GameProps) => {
  // const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [housePicked, setHousePicked] = useState<string | null>(null);

  const allVars = Object.values(VARS);

  const handleStartGame = (selectedVar: string) => {
    // setStarted(true);
    setSelected(selectedVar);
    const triangleBg = document.querySelector('.game-your-choice')!;
    triangleBg.classList.add('game-your-choice--selected');
    const item = allVars[Math.floor(Math.random() * allVars.length)];
    setHousePicked(item);
    const newScore = isWin(selectedVar, item);
    handleFinishGame(newScore);
  };

  const handlePlayAgain = (): void => {
    // setStarted(false);
    setSelected(null);
    const triangleBg = document.querySelector('.game-your-choice')!;
    triangleBg.classList.remove('game-your-choice--selected');
  };

  return (
    <>
      <button className="game-btn" onClick={handlePlayAgain}>
        Play again
      </button>
      <div className="game">
        {selected && (
          <div className="game-subtitle">
            <p>Your choice</p>
            <p>The house picked</p>
          </div>
        )}
        <div className="game-field">
          <div className="game-your-choice">
            <Variant
              name={VARS.PAPER}
              handleClick={handleStartGame}
              isVisible={selected === null || selected === VARS.PAPER}
              isSelected={selected === VARS.PAPER}
            />
            <Variant
              name={VARS.SCISSORS}
              handleClick={handleStartGame}
              isVisible={selected === null || selected === VARS.SCISSORS}
              isSelected={selected === VARS.SCISSORS}
            />
            <Variant
              name={VARS.ROCK}
              handleClick={handleStartGame}
              isVisible={selected === null || selected === VARS.ROCK}
              isSelected={selected === VARS.ROCK}
            />
          </div>
          <div className="game-house-picked">
            <Variant
              name={housePicked || ''}
              handleClick={handleStartGame}
              isVisible={selected !== null}
              isSelected={false}
              isInHouse={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
