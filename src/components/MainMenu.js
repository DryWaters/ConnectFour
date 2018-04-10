import React from 'react';
import { connect } from 'react-redux';
import { initGame } from '../actions/game';

export const MainMenu = (props) => (
  <div>
    <button className="button" onClick={props.initGame}>Start</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  initGame: () => dispatch(initGame())
});

export default connect(undefined, mapDispatchToProps)(MainMenu);