import React from 'react';

import './Game.css';

type VariantProps = {
  name: string;
  handleClick: (n: string) => void;
  isVisible: boolean;
  isSelected: boolean;
  isInHouse?: boolean;
};

export const Variant = ({
  name,
  handleClick,
  isVisible,
  isSelected,
  isInHouse,
}: VariantProps) => {
  let classes;
  if (isInHouse) {
    classes = `variant  variant--${name}  variant--house-picked`;
  } else {
    classes = isSelected
      ? `variant  variant--${name}  variant--selected`
      : `variant  variant--${name}`;
  }
  return (
    <>
      {isVisible && (
        <div className={classes} onClick={() => handleClick(name)}></div>
      )}
    </>
  );
};
