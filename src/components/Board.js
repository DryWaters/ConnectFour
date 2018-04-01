import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addChip } from '../actions/game';
import { Rect, Stage, Layer } from 'react-konva';
import Chip from './Chip';

class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <Rect
        x={0}
        y={50}
        width={500}
        height={500}
        fill='brown'
      />
          {this.props.chips.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
              return <Chip 
                key={rowIndex + " " + colIndex} 
                value={col} 
                player={col}
                x={colIndex * 50+25}
                y={rowIndex * -50+525}
                onClick={(e) => this.props.addChip(colIndex, e)}/>
              });
            })}
        </Layer>
      </Stage>
    )
  }
  
};

const mapStateToProps = (state) => ({
  chips: state.game.chips
});

const mapDispatchToProps = (dispatch) => ({
  addChip: (col, e) => dispatch(addChip(1, col))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);