import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router'

export default function createStore(history) {
    return reduxCreateStore(
        combineReucers({
            hoge: YourReducer,
            router: connectRouter(history),
        }),
        applyMiddleware(routerMiddleware(history))
    )
}