import React from 'react';

import './Header.css';

import logo from './logo.svg';

export const Header = ({ score }: { score: number }) => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="score">
        <span className="score-title">Score</span>
        <span className="score-counter">{score}</span>
      </div>
    </header>
  );
};
