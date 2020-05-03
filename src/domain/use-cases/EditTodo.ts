export type EditTodoParams = {
  text: string
}
export interface EditTodo {
  edit(id: string, newTodoParams: EditTodoParams): void
}
