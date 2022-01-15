export const VARS = {
  PAPER: 'paper',
  SCISSORS: 'scissors',
  ROCK: 'rock',
};

export const YOU_WIN_IF = [
  `${VARS.PAPER} + ${VARS.ROCK}`,
  `${VARS.ROCK} + ${VARS.SCISSORS}`,
  `${VARS.SCISSORS} + ${VARS.PAPER}`,
];

export const RESULT_TEXTS: {
  0: 'YOU LOSE';
  1: 'DRAWN GAME';
  2: 'YOU WIN';
} = {
  0: 'YOU LOSE',
  1: 'DRAWN GAME',
  2: 'YOU WIN',
};
