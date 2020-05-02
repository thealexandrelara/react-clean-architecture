import { CreateTodoPresenter } from './create-todo'
import {
  CreateTodo,
  CreateTodoParams,
} from '@/domain/use-cases/CreateTodo'

describe('Create Todo Presenter', () => {
  it('should call CreateTodo with correct values', () => {
    class CreateTodoStub implements CreateTodo {
      create(todo: CreateTodoParams) {}
    }

    const createTodoStub = new CreateTodoStub()
    const sut = new CreateTodoPresenter(createTodoStub)
    const createSpy = jest.spyOn(createTodoStub, 'create')
    sut.create({ text: 'any_text' })

    expect(createSpy).toHaveBeenCalledWith({ text: 'any_text' })
  })
})
