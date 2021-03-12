import { applyMiddleware, compose, createStore } from 'redux'
import logger from './utils/logger'
import monitorReducerEnhancer from './utils/monitorReducer'

export default function configureStore(preloadedState) {
    //middleware should be array in the case of multiple middleware
    const middleware = [logger,]
    const middlewareEnhancer = applyMiddleware(...middleware)

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composedEnhancers = compose(...enhancers)

    const store = createStore(preloadedState, composedEnhancers)

    return store
}