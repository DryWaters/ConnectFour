import { GAME_ACTIONS } from './actionTypes'

const { INIT_GAME, START_GAME, STOP_GAME } = GAME_ACTIONS;

export const initGame = () => ({
  type: INIT_GAME
});

export const startGame = () => ({
  type: START_GAME
});

export const stopGame = () => ({
  type: STOP_GAME
});