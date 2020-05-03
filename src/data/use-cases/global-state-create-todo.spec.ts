import { GlobalStateCreateTodo } from './global-state-create-todo'
import { CreateTodoParams } from 'domain/use-cases/CreateTodo'
import { CreateTodoRepository } from 'data/protocols/global-state/create-todo'

describe('Global State Create Todo', () => {
  it('should call CreateTodoRepository with correct values', () => {
    class CreateTodoRepositoryStub implements CreateTodoRepository {
      create(todo: CreateTodoParams) {}
    }
    const createTodoRepositoryStub = new CreateTodoRepositoryStub()
    const sut = new GlobalStateCreateTodo(createTodoRepositoryStub)
    const createSpy = jest.spyOn(createTodoRepositoryStub, 'create')
    sut.create({ text: 'any_text', isCompleted: false })

    expect(createSpy).toHaveBeenCalledWith({
      text: 'any_text',
      isCompleted: false,
    })
  })
})
