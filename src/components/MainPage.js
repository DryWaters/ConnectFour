import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../firebase/firebase';

export const MainPage = () => {

};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({

});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
