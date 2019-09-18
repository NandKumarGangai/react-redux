import { items, videoToPlay, requestStatus} from "./reducers/reducer";
import { combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

export default function configureStore() {
    const loggerMiddleware = createLogger();
    const middleWares = [thunkMiddleware, loggerMiddleware];
    const store = createStore(
        combineReducers({
            items,
            videoToPlay,
            requestStatus
        }),

        composeWithDevTools(applyMiddleware(...middleWares))
    );   

    return store;
}
