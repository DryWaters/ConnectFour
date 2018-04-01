import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { startInit } from '../actions/game';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to='/dashboard'>
          <h1>Boilerplate</h1>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
        <button className="button button--link" onClick={startInit}>Init</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  startInit: () => dispatch(startInit())
});

export default connect(undefined, mapDispatchToProps)(Header);