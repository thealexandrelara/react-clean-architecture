import { UUIDAdapter } from './uuid-adapter'
import { v4 } from 'uuid'
import { mocked } from 'ts-jest'

jest.mock('uuid')

describe('UUID Adapter', () => {
  describe('> generate', () => {
    it('should return an string when generate method is called', () => {
      const uuidAdapter = new UUIDAdapter()
      mocked(v4).mockReturnValueOnce('any_value')
      expect(uuidAdapter.generate()).toBeString()
    })

    it('should call uuid v4 method when generate method is called', () => {
      const uuidAdapter = new UUIDAdapter()
      uuidAdapter.generate()
      expect(v4).toHaveBeenCalled()
    })
  })
})
