import { GAME_ACTIONS } from '../actions/actionTypes';
import { generateBoard } from '../utils/helpers';
import { WIDTH, HEIGHT } from '../utils/constants';

const { INIT_GAME, START_GAME, STOP_GAME, ADD_CHIP } = GAME_ACTIONS;

const initialState = {
  status: 'STOP',
  chips: generateBoard(),
  currentPlayer: 1,
  chipsPerRow: Array.apply(null, Array(WIDTH)).map(Number.prototype.valueOf, 0)
};

const addChip = (state, action) => {
  const chips = state.chips;
  const currentPlayer = state.currentPlayer;
  let hasChanged = false;
  let newChips = chips.map((row) => {
    return row.map((col, index) => {
      if (action.column === index && col === 0 && !hasChanged && state.chipsPerRow[action.column] < HEIGHT) {
        hasChanged = true;
        return state.currentPlayer;
      } else {
        return col;
      }
    })
  });

  if (hasChanged) {
    let newChipsPerRow = [...state.chipsPerRow]
    newChipsPerRow[action.column]++;
    let newPlayer = (currentPlayer === 1 ? 2 : 1);
    return {
      ...state,
      currentPlayer: newPlayer,
      chips: newChips,
      chipsPerRow: newChipsPerRow
    }
  } else {
    return {
      ...state
    }
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