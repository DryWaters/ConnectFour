import React from 'react';

const Winner = (props) => (
  <div className="winner">
    {props.status === "STALEMATE" ? <h1>Stalemate!</h1> : <h1>Player {props.winner} wins!</h1>}
  </div>
);

export default Winner;