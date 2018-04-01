import React from 'react';
import { connect } from 'react-redux';
import { setPlayers } from '../actions/game';

export const MainMenu = ({setPlayers}) => (
  <div>
    <p>In main menu</p>
    <button value="1" onClick={setPlayers}>One Player</button>
    <button value="2" onClick={setPlayers}>Two Players</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setPlayers: (e) => dispatch(setPlayers(e.target.value))
});

export default connect(undefined, mapDispatchToProps)(MainMenu);