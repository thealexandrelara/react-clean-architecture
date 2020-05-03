import { EditTodoPresenter } from './edit-todo'
import { EditTodo, EditTodoParams } from 'domain/use-cases/EditTodo'

describe('Edit Todo Presenter', () => {
  it('should call EditTodo with correct values', () => {
    class EditTodoStub implements EditTodo {
      edit(id: string, newTodoParams: EditTodoParams) {}
    }

    const editTodoStub = new EditTodoStub()
    const sut = new EditTodoPresenter(editTodoStub)
    const editSpy = jest.spyOn(editTodoStub, 'edit')
    sut.edit('any_id', { text: 'any_text' })

    expect(editSpy).toHaveBeenCalledWith('any_id', {
      text: 'any_text',
    })
  })
})
