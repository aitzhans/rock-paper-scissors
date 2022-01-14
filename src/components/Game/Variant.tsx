import React from 'react';

import './Game.css';

type VariantProps = {
  name: string;
  handleClick: (n: string) => void;
  isVisible: boolean;
};

export const Variant = ({ name, handleClick, isVisible }: VariantProps) => {
  return (
    <>
      {isVisible && (
        <div
          className={`variant  variant--${name}`}
          onClick={() => handleClick(name)}
        ></div>
      )}
    </>
  );
};
