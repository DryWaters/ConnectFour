import React, { Component } from 'react';
import Chip from './Chip';
import ChipSelector from './ChipSelector';
import { connect } from 'react-redux';
import { WIDTH } from '../utils/constants';
import Winner from './Winner';

class Board extends Component {

  constructor(props) {
    super(props);
  }

  createChipSelectors() {
    let chipSelectors = [];
    if (this.props.winner != 0) {
      return chipSelectors;
    }

    for (let i = 0; i < WIDTH; i++) {
      chipSelectors.push(<ChipSelector key={i} col={i} classes={`chip-selector chip-selector--player${this.props.currentPlayer} select-${i}`} />);
    }
    return chipSelectors;
  }

  createChips() {
    let chips = [];
    this.props.chips.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        if (col === 1) {
          chips.push(<Chip key={rowIndex + " - " + colIndex} classes={"chip chip--red loc-" + colIndex + "-" + rowIndex} />);
        } else if (col === 2) {
          chips.push(<Chip key={rowIndex + " - " + colIndex} classes={"chip chip--yellow loc-" + colIndex + "-" + rowIndex} />);
        }
      })
    })
    return chips;
  }

  render() {
    return (
      <div className="board">
        {this.createChipSelectors()}
        {this.createChips()}
      </div>
    )
  }
};

const mapStateToProps = (state, props) => ({
  chips: state.game.chips,
  currentPlayer: state.game.currentPlayer,
  winner: state.game.winner
});

export default connect(mapStateToProps)(Board);
