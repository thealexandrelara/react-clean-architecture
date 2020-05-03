import { GlobalStateEditTodo } from './global-state-edit-todo'
import { EditTodoParams } from 'domain/use-cases/EditTodo'
import { EditTodoRepository } from 'data/protocols/global-state/edit-todo'

describe('Global State Edit Todo', () => {
  it('should call EditTodoRepository with correct values', () => {
    class EditTodoRepositoryStub implements EditTodoRepository {
      edit(id: string, todo: EditTodoParams) {}
    }
    const editTodoRepositoryStub = new EditTodoRepositoryStub()
    const sut = new GlobalStateEditTodo(editTodoRepositoryStub)
    const editSpy = jest.spyOn(editTodoRepositoryStub, 'edit')
    sut.edit('any_id', { text: 'any_text' })

    expect(editSpy).toHaveBeenCalledWith('any_id', {
      text: 'any_text',
    })
  })
})
