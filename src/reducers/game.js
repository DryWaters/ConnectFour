import { GAME_ACTIONS } from '../actions/actionTypes';
import { generateBoard } from '../utils/helpers';
import { WIDTH, HEIGHT } from '../utils/constants';

const { INIT_GAME, START_GAME, STOP_GAME, ADD_CHIP } = GAME_ACTIONS;

const initialState = {
  status: 'STOP',
  chips: generateBoard(),
  currentPlayer: 1,
  chipsPerRow: Array.apply(null, Array(WIDTH)).map(Number.prototype.valueOf, 0),
  winner: 0
};

const addChip = (state, action) => {
  const chips = state.chips;
  let hasChanged = false;
  let addedAtRow = 0;
  let newChips = chips.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      if (action.column === colIndex && col === 0 && !hasChanged) {
        hasChanged = true;
        addedAtRow = rowIndex;
        return state.currentPlayer;
      } else {
        return col;
      }
    })
  });

  let newChipsPerRow = [...state.chipsPerRow];
  newChipsPerRow[action.column]++;

  let hasMovesLeft = checkHasMoves(newChipsPerRow);
  let hasWinner = checkWinner(newChips, state.currentPlayer, action.column, addedAtRow);

  if (hasWinner) {
    return {
      ...state,
      chips: newChips,
      chipsPerRow: newChipsPerRow,
      winner: state.currentPlayer,
      status: "WINNER"
    }
  } else if (!hasMovesLeft) {
    return {
      ...state,
      chips: newChips,
      chipsPerRow: newChipsPerRow,
      status: 'STALEMATE'
    }
  } else {
    return {
      ...state,
      currentPlayer: state.currentPlayer === 1 ? 2: 1,
      chips: newChips,
      chipsPerRow: newChipsPerRow,
    }
  }
}

const checkWinner = (newChips, currentPlayer, column, row) => {
  return (
    checkRow(newChips, currentPlayer, row) || 
    checkCol(newChips, currentPlayer, column) ||
    checkDiag(newChips, currentPlayer, row, column)
  );
}

const checkRow = (chips, currentPlayer, row) => {
  for (let i = 0; i < WIDTH-3; i++) {
    if (
      chips[row][i] === currentPlayer &&
      chips[row][i+1] === currentPlayer && 
      chips[row][i+2] === currentPlayer &&
      chips[row][i+3] === currentPlayer
     ) 
     {
      return true;
    }
  }
  return false;
}

const checkCol = (chips, currentPlayer, column) => {
  for (let i = 0; i < HEIGHT-3; i++) {
    if (
      chips[i][column] === currentPlayer &&
      chips[i+1][column] === currentPlayer && 
      chips[i+2][column] === currentPlayer &&
      chips[i+3][column] === currentPlayer
     ) 
     {
      return true;
    }
  }
  return false;
}

const checkDiag = (chips, currentPlayer, column, row) => {

}

const checkHasMoves = (newChipsCount) => {
  let totalChips = newChipsCount.reduce((total, chipRow) => {
    return total + chipRow;
  }, 0);

  if (totalChips >= (HEIGHT * WIDTH)) {
    return false;
  } else {
    return true;
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_GAME:
      return {
        ...initialState,
        status: "RUN"
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