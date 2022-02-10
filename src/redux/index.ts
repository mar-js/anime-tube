import {
  createStore,
  compose,
  applyMiddleware,
  Store,
  AnyAction
} from 'redux'
import thunk from 'redux-thunk'

import { ROOT_REDUCERS } from './reducers'

const COMPOSE_ENHANCERS = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const STORE = (): Store<any, AnyAction> => {
  const STORE: any = createStore(
    ROOT_REDUCERS,
    {},
    COMPOSE_ENHANCERS(applyMiddleware(thunk))
  )

  return STORE
}
