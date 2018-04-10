import React from 'react';
import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import Board from './Board';
import Header from './Header';

export const Game = (props) => (
  <div>
    <Header />
    <div className="game">
      {props.status === "RUN" ? <Board /> : <MainMenu />}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  status: state.game.status
})

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(Game);