import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from './middleware/logger'
import monitorReducerEnhancer from './middleware/monitorReducer'
import rootReducer from './reducers'

export default function configureStore(preloadedState) {
    //middleware should be array in the case of pushing new middleware
    const middleware = [logger, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middleware)

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    // if  (process.env.NODE_ENV !== 'production' && module.hot) {
    //     module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    // }

    return store
}