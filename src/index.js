import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
// import store, {addPost, subscribe, updateNewPostText} from "./redux/store";
import {BrowserRouter} from "react-router-dom";

let renderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
                 />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
renderEntireThree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderEntireThree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
