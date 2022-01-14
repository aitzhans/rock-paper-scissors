import React, { useEffect } from 'react';
// import gsap from 'gsap';

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
    classes = `variant  variant--${name}`;
    // classes = isSelected
    //   ? `variant  variant--${name}  variant--selected`
    //   : `variant  variant--${name}`;
  }

  // useEffect(() => {
  //   const circle = document.querySelector('.variant--house-picked');
  //   if (isSelected && circle) {
  //     gsap.from(circle, { rotation: '360', scale: 1.2, opacity: 1 });
  //   }
  // });

  return (
    <>
      {isVisible && (
        <div
          className={classes}
          onClick={() => handleClick(name)}
          data-name={name}
        ></div>
      )}
    </>
  );
};
