import React, { useState } from 'react';
import gsap from 'gsap';

import { Variant } from './Variant';
import { VARS } from '../utils/constants';
import { isWin } from '../utils/utils';

import './Game.css';

type GameProps = {
  handleFinishGame: (n: number) => void;
};

export const Game = ({ handleFinishGame }: GameProps) => {
  // const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [housePicked, setHousePicked] = useState<string | null>(null);

  const allVars = Object.values(VARS);

  const handleStartGame = (selectedVar: string) => {
    setSelected(selectedVar);
    const computersVar = allVars[Math.floor(Math.random() * allVars.length)];
    setHousePicked(computersVar);
    const newScore = isWin(selectedVar, computersVar);
    handleFinishGame(newScore);

    const allVarDivs = document.querySelectorAll('.game-your-choice .variant');
    allVarDivs.forEach((item) => {
      if (item.getAttribute('data-name') === selectedVar) {
        gsap.to(item, {
          rotation: '360',
          scale: 1.2,
          opacity: 1,
          top: '6rem',
          left: 0,
          margin: 0,
        });
      } else {
        gsap.to(item, { rotation: '360', scale: 0.5, opacity: 0 });
      }
    });
    const triangleBg = document.querySelector('.game-triangle')!;
    gsap.to(triangleBg, { opacity: 0 });
    const gameSubtitle = document.querySelector('.game-subtitle');
    gsap.to(gameSubtitle, { opacity: 1 });
    const computersVarDiv = document.querySelector('.variant--house-picked');
    gsap.to(computersVarDiv, { rotation: '360', scale: 1.2, opacity: 1 });
  };

  const handlePlayAgain = (): void => {
    console.log('play again');
    // setSelected(null);
    // const triangleBg = document.querySelector('.game-your-choice')!;
    // triangleBg.classList.remove('game-your-choice--selected');
  };

  return (
    <>
      <button className="game-btn" onClick={handlePlayAgain}>
        Play again
      </button>
      <div className="game">
        {/* {selected && ( */}
        <div className="game-subtitle">
          <p>Your choice</p>
          <p>The house picked</p>
        </div>
        {/* )} */}
        <div className="game-field">
          <div className="game-your-choice">
            <div className="game-triangle"></div>
            {/* можно потом в map завернуть, чтобы 3 раза не писать */}
            <Variant
              name={VARS.PAPER}
              handleClick={handleStartGame}
              // isVisible={selected === null || selected === VARS.PAPER}
              isVisible={true}
              isSelected={selected === VARS.PAPER}
            />
            <Variant
              name={VARS.SCISSORS}
              handleClick={handleStartGame}
              // isVisible={selected === null || selected === VARS.SCISSORS}
              isVisible={true}
              isSelected={selected === VARS.SCISSORS}
            />
            <Variant
              name={VARS.ROCK}
              handleClick={handleStartGame}
              // isVisible={selected === null || selected === VARS.ROCK}
              isVisible={true}
              isSelected={selected === VARS.ROCK}
            />
          </div>
          <div className="game-house-picked">
            <Variant
              name={housePicked || ''}
              handleClick={handleStartGame}
              // isVisible={selected !== null}
              isVisible={true}
              isSelected={false}
              isInHouse={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};
