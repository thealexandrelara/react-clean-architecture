import { createStore, Store } from 'redux'

import { rootReducer } from './ducks'

import { ApplicationState } from './protocols'

export const store: Store<ApplicationState> = createStore(rootReducer)
