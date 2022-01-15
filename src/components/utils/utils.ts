import { YOU_WIN_IF } from './constants';

export const isWin = (yourChoice: string, housePicked: string): 0 | 1 | 2 => {
  if (yourChoice === housePicked) {
    return 1;
  }
  const choicesPair = `${yourChoice} + ${housePicked}`;
  return YOU_WIN_IF.includes(choicesPair) ? 2 : 0;
};
