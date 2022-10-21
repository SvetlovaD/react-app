import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (state) => {

    root.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>


    );
}
rerenderDOM(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderDOM(state)
});


/* root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
); */


reportWebVitals();
