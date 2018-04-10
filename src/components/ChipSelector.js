import React from 'react';
import { connect } from 'react-redux';
import { addChip } from '../actions/game';

const ChipSelector = (props) => (
  <div col={props.col} className={props.classes} onClick={props.addChip}></div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  addChip: () => dispatch(addChip(ownProps.col))
});

export default connect(undefined, mapDispatchToProps)(ChipSelector);