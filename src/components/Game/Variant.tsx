import React from 'react';

import './Game.css';

type VariantProps = {
  name: string;
  handleClick: (n: string) => void;
  isSelected: boolean;
  isInHouse?: boolean;
};

export const Variant = ({
  name,
  handleClick,
  isSelected,
  isInHouse,
}: VariantProps) => {
  let classes;
  if (isInHouse) {
    classes = `variant  variant--${name}  variant--house-picked`;
  } else {
    classes = `variant  variant--${name}`;
  }

  const handleVarClick = () => {
    if (isSelected || isInHouse) {
      return;
    }
    handleClick(name);
  };

  return (
    <div className={classes} onClick={handleVarClick} data-name={name}></div>
  );
};
