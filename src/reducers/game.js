import { GAME_ACTIONS } from '../actions/actionTypes';
import { generateBoard } from '../utils/helpers';

const { INIT_GAME, START_GAME, STOP_GAME, ADD_CHIP } = GAME_ACTIONS;

const initialState = {
  status: 'STOP',
  chips: generateBoard(),
  currentPlayer: 1
};

const addChip = (state, action) => {
  const chips = state.chips;
  const currentPlayer = state.currentPlayer;
  let hasChanged = false;
  let newChips = chips.map((row) => {
    return row.map((col, index) => {
      if (action.column === index && col === 0 && !hasChanged) {
        hasChanged = true;
        return state.currentPlayer;
      } else {
        return col;
      }
    })
  });
  let newPlayer = (currentPlayer === 1 ? 2 : 1);
  return {
    ...state,
    currentPlayer: newPlayer,
    chips: newChips
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_GAME:
      return {
        ...state,
        status: 'RUN'
      };
    case START_GAME:
      return startGame(state);
    case STOP_GAME:
      return stopGame(state);
    case ADD_CHIP:
      return addChip(state, action);
    default:
      return state;
  }
};