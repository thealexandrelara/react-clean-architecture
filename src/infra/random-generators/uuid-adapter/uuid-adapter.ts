import { UUIDGenerator } from 'data/protocols/random-generators/uuid-generator'
import { v4 } from 'uuid'

export class UUIDAdapter implements UUIDGenerator {
  generate(): string {
    return v4()
  }
}
