import { createStore } from "redux";
import initReducers from "./../Reducers"

function initStore() {


    return createStore(
        initReducers,
                                                        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    );
}

export default initStore;