import React from 'react';
import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import Board from './Board';
import Header from './Header';

export const Game = (state) => (
  <div>
    <Header />
    <div className="game">
      {state.status === "RUN" ? <Board /> : <MainMenu />}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  status: state.game.status
})

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(Game);