import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithRouter from "./App";

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

serviceWorker.unregister();
