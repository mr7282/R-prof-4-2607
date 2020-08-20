import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import initReducers from "./../Reducers";
import middlewares from "../middlewares";

export const history = createBrowserHistory()

function initStore() {


    return createStore(
        initReducers(history),
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
                 window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    );
}

export default initStore;