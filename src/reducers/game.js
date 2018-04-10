import { GAME_ACTIONS } from '../actions/actionTypes';

const { INIT_GAME, START_GAME, STOP_GAME } = GAME_ACTIONS;

const initialState = {
  status: 'STOP'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_GAME:
      return {
        status: 'RUN'
      };
    case START_GAME:
      return startGame(state);
    case STOP_GAME:
      return stopGame(state);
    default:
      return state;
  }
};