import { RemoveTodoRepository } from 'data/protocols/global-state/remove-todo'
import {
  RemoveTodo,
  RemoveTodoParams,
} from 'domain/use-cases/RemoveTodo'

export class GlobalStateRemoveTodo implements RemoveTodo {
  constructor(
    private readonly removeTodoRepository: RemoveTodoRepository,
  ) {}

  remove(id: RemoveTodoParams) {
    this.removeTodoRepository.remove(id)
  }
}
