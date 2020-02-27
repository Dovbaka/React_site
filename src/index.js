import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/storeRedux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


/*store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});*/

//state={state} dispatch={store.dispatch.bind(store)}

serviceWorker.unregister();
