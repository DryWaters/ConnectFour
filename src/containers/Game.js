import React from 'react';
import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import Board from './Board';

export const Game = (state) => (
  <div>
    {state.status==="RUN" ? <Board /> : <MainMenu />}
  </div>
);

const mapStateToProps = (state) => ({
  status: state.game.status
})

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(Game);