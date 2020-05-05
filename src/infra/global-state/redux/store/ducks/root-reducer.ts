import { combineReducers } from 'redux'

import { reducer as todos } from './todos/reducer'

export const rootReducer = combineReducers({
  todos,
})
