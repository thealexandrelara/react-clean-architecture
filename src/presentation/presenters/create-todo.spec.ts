import { CreateTodoPresenter } from './create-todo'
import { CreateTodo } from '@/domain/use-cases/CreateTodo'

describe('Create Todo Presenter', () => {
  it('should call CreateTodo with correct values', () => {
    class CreateTodoStub implements CreateTodo {
      create(text: string) {}
    }

    const createTodoStub = new CreateTodoStub()
    const sut = new CreateTodoPresenter(createTodoStub)
    const createSpy = jest.spyOn(createTodoStub, 'create')
    sut.create('any_text')

    expect(createSpy).toHaveBeenCalledWith('any_text')
  })
})
