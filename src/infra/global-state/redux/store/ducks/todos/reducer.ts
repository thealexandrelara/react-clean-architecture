import produce, { Draft } from 'immer'

import { TodoTypes, TodosState } from './protocols'

export const initialState: TodosState = {
  data: [],
}

export const reducer = produce((draft: Draft<TodosState>, action) => {
  switch (action.type) {
    case TodoTypes.CREATE_TODO_REQUEST:
      draft.data.push(action.payload.todo)
      return
    case TodoTypes.EDIT_TODO_REQUEST:
      draft.data = draft.data.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, ...action.payload.todo }
          : todo,
      )
      return
    case TodoTypes.REMOVE_TODO_REQUEST:
      draft.data = draft.data.filter(
        (todo) => todo.id !== action.payload.id,
      )
      return
    case TodoTypes.TOGGLE_TODO_COMPLETED_STATUS:
      draft.data = draft.data.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      )
      return
  }
}, initialState)
