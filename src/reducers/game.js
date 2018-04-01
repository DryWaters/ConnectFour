export default (state = {
  players: 1,
  status: "STOP",
  chips: boardSize(10),
  currentPlayer: 1
}, action) => {
  switch (action.type) {
    case 'SET_PLAYERS':
      return {
        ...state,
        players: action.players,
        status: 'RUN',
        currentPlayer: 1
      }
    case 'ADD_CHIP': {
      let isSet = false;
      return {
        ...state,
        chips: state.chips.map(function(row, rowIndex) {
          return row.map(function(col, colIndex) {
            if (colIndex === action.col && !isSet && col === 0) {
              isSet = true;
              return state.currentPlayer;
            } else {
              return col;
            }
          })
        }),
        currentPlayer: state.currentPlayer === 1 ? 2 : 1
      }
    }
    default:
      return state;
  }
};

const boardSize = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = [];
    for (let j = 0; j < num; j++) {
      arr[i].push(0);
    }
  }
  return arr;
}

// state.chips.map(function(row, rowIndex) {
//   row.map(function(col, colIndex) {
//     if (colIndex === action.locationX && rowIndex === action.locationY) {
//       return action.player;
//     } else {
//       return col;
//     }
//   });
// );
// }