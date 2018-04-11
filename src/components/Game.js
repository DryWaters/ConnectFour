import React from 'react';
import { connect } from 'react-redux';
import MainMenu from './MainMenu';
import Board from './Board';
import Header from './Header';
import Winner from './Winner';

export const Game = (props) => (
  <div>
    <Header />
    <div className="game">
      {props.status === "STOP" ? <MainMenu /> : <Board />}
      {(props.winner != 0 || props.status === "STALEMATE") && <Winner winner={props.winner} status={props.status} />}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  status: state.game.status,
  winner: state.game.winner
})

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(Game);