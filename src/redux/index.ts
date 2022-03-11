
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  createStore,
  applyMiddleware,
  Store,
  AnyAction
} from 'redux'
import thunk from 'redux-thunk'

import { ROOT_REDUCERS } from './reducers'
import { useMemo } from 'react'

const COMPOSE_ENHANCERS = composeWithDevTools(applyMiddleware(thunk))
let store: any = null

export const STORE = (initialState: any): Store<any, AnyAction> => {
  const STORE: any = createStore(
    ROOT_REDUCERS,
    initialState,
    COMPOSE_ENHANCERS
  )

  return STORE
}

export const INITIALIZE_STORE = (preloadedState: any) => {
  let initialStore = store ?? STORE(preloadedState)

  if (preloadedState && store) {
    initialStore = STORE({
      ...store.getState(),
      ...preloadedState
    })

    store = undefined
  }

  if (typeof window === 'undefined') {
    return initialStore
  }

  if (!store) store = initialStore

  return initialStore
}

export const useStore = (initialState: any) => useMemo(() => INITIALIZE_STORE(initialState), [ initialState ])
