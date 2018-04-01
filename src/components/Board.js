import React from 'react';
import { connect } from 'react-redux';
import { addChip } from '../actions/game';

export const Board = ({addChip}) => (
  <div>
    <p>In Board</p>
    <button value="1" onClick={addChip}>Add Chip</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addChip: (e) => dispatch(addChip(1, 0))
});

export default connect(undefined, mapDispatchToProps)(Board);