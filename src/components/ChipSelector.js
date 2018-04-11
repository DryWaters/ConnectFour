import React from 'react';
import { connect } from 'react-redux';
import { addChip } from '../actions/game';
import { HEIGHT } from '../utils/constants';

const ChipSelector = (props) => (
  <div col={props.col} className={props.classes} onClick={props.chipsPerRow[props.col] < HEIGHT ? props.addChip : null}></div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  addChip: () => dispatch(addChip(ownProps.col))
});

const mapStateToProps = (state, ownProps) => ({
  chipsPerRow: state.game.chipsPerRow
})

export default connect(mapStateToProps, mapDispatchToProps)(ChipSelector);