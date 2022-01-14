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
