import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { startInit } from '../actions/game';
import Chip from '../components/Chip';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <div className="header__title">
          <Chip classes="header__chip__red"/>
          <Chip classes="header__chip__yellow"/>
          <h1>React Connect Four</h1>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startInit: () => dispatch(startInit())
});

export default connect(undefined, mapDispatchToProps)(Header);