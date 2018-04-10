import React from 'react';
import Chip from './Chip';

const Board = () => (

  <div className="board">
    <Chip classes="chip chip--red loc-0-0" />
    <Chip classes="chip chip--yellow loc-0-1" />
    <Chip classes="chip chip--red loc-0-2" />
    <Chip classes="chip chip--yellow loc-0-3" />
    <Chip classes="chip chip--red loc-0-4" />
    <Chip classes="chip chip--yellow loc-0-5" />
    <Chip classes="chip chip--red loc-1-0" />
    <Chip classes="chip chip--yellow loc-1-1" />
    <Chip classes="chip chip--red loc-1-2" />
    <Chip classes="chip chip--yellow loc-1-3" />
    <Chip classes="chip chip--red loc-1-4" />
    <Chip classes="chip chip--yellow loc-1-5" />
    <Chip classes="chip chip--red loc-2-0" />
    <Chip classes="chip chip--yellow loc-2-1" />
    <Chip classes="chip chip--red loc-2-2" />
    <Chip classes="chip chip--yellow loc-2-3" />
  </div>

);

export default Board;
