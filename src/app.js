import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Game from './components/Game';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const game = (
  <Provider store={store}>
    <Game />
  </Provider>
);

ReactDOM.render(game, document.getElementById('app'));