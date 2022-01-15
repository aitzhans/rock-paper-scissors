/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

import { Variant } from './Variant';
import { VARS, RESULT_TEXTS } from '../utils/constants';
import { isWin } from '../utils/utils';

import './Game.css';

type GameProps = {
  handleFinishGame: (n: number) => void;
};

export const Game = ({ handleFinishGame }: GameProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [housePicked, setHousePicked] = useState<string | null>(null);
  const [resultText, setResultText] = useState<
    'YOU WIN' | 'YOU LOSE' | 'DRAWN GAME'
  >('YOU WIN');
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline();
  }, []);

  const allVars = Object.values(VARS);

  // all animated elements
  let allVarDivs = document.querySelectorAll('.game-your-choice .variant');
  let triangleBg = document.querySelector('.game-triangle')!;
  let gameSubtitle = document.querySelector('.game-subtitle');
  let computersVarDiv = document.querySelector('.variant--house-picked');
  let gameCont = document.querySelector('.game');
  let gameYourChoiceCont = document.querySelector('.game-your-choice');
  let gameResult = document.querySelector('.game-result');

  useEffect(() => {
    allVarDivs = document.querySelectorAll('.game-your-choice .variant');
    triangleBg = document.querySelector('.game-triangle')!;
    gameSubtitle = document.querySelector('.game-subtitle');
    computersVarDiv = document.querySelector('.variant--house-picked');
    gameCont = document.querySelector('.game');
    gameYourChoiceCont = document.querySelector('.game-your-choice');
    gameResult = document.querySelector('.game-result');
  }, [selected]);

  gsap.ticker.lagSmoothing(0);

  const handleStartGame = (selectedVar: string) => {
    setSelected(selectedVar);
    const computersVar = allVars[Math.floor(Math.random() * allVars.length)];
    setHousePicked(computersVar);
    const newScore: 0 | 1 | 2 = isWin(selectedVar, computersVar);
    setResultText(RESULT_TEXTS[newScore]);

    allVarDivs.forEach((item) => {
      if (item.getAttribute('data-name') === selectedVar) {
        gsap.to(item, {
          rotation: '360',
          scale: 1.2,
          opacity: 1,
          top: '6rem',
          left: 0,
          margin: 0,
          pointerEvents: 'none',
        });
      } else {
        gsap.to(item, {
          rotation: '360',
          scale: 0.5,
          opacity: 0,
          pointerEvents: 'none',
        });
      }
    });

    if (tl.current) {
      tl.current
        .to(triangleBg, { opacity: 0 })
        .to(gameSubtitle, { opacity: 1 })
        .to(computersVarDiv, {
          rotation: '360',
          scale: 1.2,
          opacity: 1,
          delay: 0.2,
        })
        .to(gameCont, { width: '114rem', delay: 0.5, duration: 0.3 })
        .to(gameSubtitle, { width: '110rem', delay: -0.3, duration: 0.3 })
        .to(gameYourChoiceCont, { width: '106rem', delay: -0.3, duration: 0.3 })
        .to(gameResult, {
          opacity: 1,
          pointerEvents: 'initial',
          duration: 0.5,
        });
    }

    setTimeout(() => {
      handleFinishGame(newScore - 1);
      let wins = document.querySelector('.variant-wins--house-picked');
      if (newScore === 0) {
        wins = document.querySelector('.variant-wins--house-picked');
        gsap.to(wins, { opacity: 1, delay: 0, duration: 0 });
        gsap.to(wins, {
          width: '100rem',
          height: '100rem',
          top: '-30.4rem',
          right: '-36.4rem',
          delay: 0.1,
          duration: 0.4,
        });
        gsap.to(wins, {
          opacity: 0,
          delay: 0.4,
          duration: 0.4,
        });
      } else if (newScore === 2) {
        wins = document.querySelector(`.variant-wins--${selectedVar}`);
        gsap.to(wins, { opacity: 1, delay: 0, duration: 0 });
        gsap.to(wins, {
          width: '100rem',
          height: '100rem',
          top: '-30.4rem',
          left: '-36.4rem',
          delay: 0.1,
          duration: 0.4,
        });
        gsap.to(wins, {
          opacity: 0,
          delay: 0.4,
          duration: 0.4,
        });
      }
      if (wins) {
        setTimeout(() => {
          gsap.set(wins, { clearProps: 'all' });
        }, 1000);
      }
    }, 2500);
  };

  const handlePlayAgain = (): void => {
    console.log('play again');
    setSelected(null);
    setHousePicked(null);
    gsap.set(allVarDivs, { clearProps: 'all' });
    gsap.set(computersVarDiv, { clearProps: 'all' });
    gsap.set(triangleBg, { clearProps: 'all' });
    gsap.set(gameSubtitle, { clearProps: 'all' });
    gsap.set(gameCont, { clearProps: 'all' });
    gsap.set(gameYourChoiceCont, { clearProps: 'all' });
    gsap.set(gameResult, { clearProps: 'all' });
  };

  return (
    <>
      <div className="game">
        <div className="game-subtitle">
          <p>Your choice</p>
          <p>The house picked</p>
        </div>
        <div className="game-field">
          <div className="game-your-choice">
            <div className="game-triangle"></div>
            {allVars.map((item) => {
              return (
                <Variant
                  key={item}
                  name={item}
                  handleClick={handleStartGame}
                  isSelected={selected === item}
                />
              );
            })}
          </div>
          <div className="game-house-picked">
            <Variant
              key="housePicked"
              name={housePicked || ''}
              handleClick={handleStartGame}
              isSelected={false}
              isInHouse={true}
            />
          </div>
        </div>
        <div className="game-result">
          <p className="game-result-text">{resultText}</p>
          <button className="game-btn" onClick={handlePlayAgain}>
            Play again
          </button>
        </div>
      </div>
    </>
  );
};
