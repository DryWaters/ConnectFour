import React from 'react';
import { Circle } from 'react-konva'
import Konva from 'konva'

const Chip = (props) => (
  <Circle x={props.x} y={props.y} radius={25} fill={props.player === 1 ? 'red' : 'blue'} onClick={props.onClick}/>
);

export default Chip;