import React from 'react';

import './Game.css';

type VariantProps = {
  name: string;
  handleClick: (n: string) => void;
  isSelected: boolean;
  computerChoice?: boolean;
};

export const Variant = ({
  name,
  handleClick,
  isSelected,
  computerChoice,
}: VariantProps) => {
  let classes;
  let winClasses;
  if (computerChoice) {
    classes = `variant  variant--${name}  variant--computer-choice`;
    winClasses = `variant-wins  variant-wins--computer-choice`;
  } else {
    classes = `variant  variant--${name}`;
    winClasses = `variant-wins  variant-wins--${name}`;
  }

  const handleVarClick = () => {
    if (isSelected || computerChoice) {
      return;
    }
    handleClick(name);
  };

  return (
    <>
      <div className={winClasses} data-name={name}></div>

      <div className={classes} onClick={handleVarClick} data-name={name}></div>
    </>
  );
};
