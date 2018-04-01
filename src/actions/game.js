export const setPlayers = (players) => ({
  type: 'SET_PLAYERS',
  players
});

export const addChip = (player, col) => ({
  type: 'ADD_CHIP',
  player,
  col
})