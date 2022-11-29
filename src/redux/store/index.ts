import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { createStore, applyMiddleware, AnyAction, compose } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import rootReducer from '../reducer'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export type AppDispatch = typeof store.dispatch
export type ReduxState = ReturnType<typeof rootReducer>
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, AnyAction>
export const useTypedDispatch = () => useDispatch<TypedDispatch>()
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector

export default store
