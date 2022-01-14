import { YOU_WIN_IF } from './constants';

export const isWin = (yourChoice: string, housePicked: string): number => {
  if (yourChoice === housePicked) {
    return 0;
  }
  const choicesPair = `${yourChoice} + ${housePicked}`;
  return YOU_WIN_IF.includes(choicesPair) ? 1 : -1;
};
