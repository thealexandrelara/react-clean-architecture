import { useDispatch } from 'react-redux'
import { EditTodoPresenterParams } from 'presentation/presenters/todos/edit-todo-protocols'
import { makeToggleTodoCompletedStatus } from 'main/factories/presenters/make-toggle-todo-completed-status-presenter'
import { makeDeleteTodoPresenter } from 'main/factories/presenters/make-delete-todo-presenter'
import { makeEditTodoPresenter } from 'main/factories/presenters/make-edit-todo-presenter'

export type UseTodoItemState = {
  toggleTodoCompletedStatus(id: string): void
  deleteTodo(id: string): void
  editTodo(id: string, todo: EditTodoPresenterParams): void
}

export const useTodoItem = (): UseTodoItemState => {
  const dispatch = useDispatch()
  const toggleTodoCompletedStatusPresenter = makeToggleTodoCompletedStatus(
    dispatch,
  )
  const deleteTodoPresenter = makeDeleteTodoPresenter(dispatch)
  const editTodoPresenter = makeEditTodoPresenter(dispatch)

  return {
    toggleTodoCompletedStatus:
      toggleTodoCompletedStatusPresenter.toggle,
    deleteTodo: deleteTodoPresenter.remove,
    editTodo: editTodoPresenter.edit,
  }
}
