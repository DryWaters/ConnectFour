import React, { Component } from 'react';
import Chip from './Chip';
import ChipSelector from './ChipSelector';
import { connect } from 'react-redux';

const Board = (props) => (
  <div className="board">
    <ChipSelector col={0} classes="chip-selector select-0" />
    <ChipSelector col={1} classes="chip-selector select-1" />
    <ChipSelector col={2} classes="chip-selector select-2" />
    <ChipSelector col={3} classes="chip-selector select-3" />
    <ChipSelector col={4} classes="chip-selector select-4" />
    <ChipSelector col={5} classes="chip-selector select-5" />
    <ChipSelector col={6} classes="chip-selector select-6" />
    {props.chips.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        if (col === 1) {
          return <Chip key={rowIndex + " - " + colIndex} classes={"chip chip--red loc-" + colIndex + "-" + rowIndex} />
        } else if (col === 2) {
          return <Chip key={rowIndex + " - " + colIndex} classes={"chip chip--yellow loc-" + colIndex + "-" + rowIndex} />
        }
      })
    })}
  </div>
);

const mapStateToProps = (state, props) => ({
  chips: state.game.chips
});

export default connect(mapStateToProps)(Board);
