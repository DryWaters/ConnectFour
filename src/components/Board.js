import React from 'react';
import { connect } from 'react-redux';
import { addChip } from '../actions/game';
import Chip from './Chip';

export const Board = (props) => (
  <div>
    <p>In Board</p>
    <button value="0" onClick={props.addChip}>Add Chip 0</button>
    <button value="1" onClick={props.addChip}>Add Chip 1</button>
    <button value="2" onClick={props.addChip}>Add Chip 2</button>
    <button value="3" onClick={props.addChip}>Add Chip 3</button>
    <button value="4" onClick={props.addChip}>Add Chip 4</button>
    <button value="5" onClick={props.addChip}>Add Chip 5</button>
    <button value="6" onClick={props.addChip}>Add Chip 6</button>
    <button value="7" onClick={props.addChip}>Add Chip 7</button>
    <button value="8" onClick={props.addChip}>Add Chip 8</button>
    <button value="9" onClick={props.addChip}>Add Chip 9</button>
    {props.chips.map(function(row, rowIndex) {
      return row.map(function(col, colIndex) {
        if (col === 1) {
          return <Chip key={rowIndex + " " + colIndex} />
        }
      })
    })}
  </div>
);

const mapStateToProps = (state) => ({
  chips: state.game.chips
});

const mapDispatchToProps = (dispatch) => ({
  addChip: (e) => dispatch(addChip(1, parseInt(e.target.value)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);