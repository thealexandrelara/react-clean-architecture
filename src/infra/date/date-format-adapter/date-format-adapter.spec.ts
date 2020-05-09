import { DateFormatAdapter } from './date-format-adapter'

describe('Date Format Adapter', () => {
  it('should return a string when called', () => {
    const dateFormatAdapter = new DateFormatAdapter()
    expect(dateFormatAdapter.format()).toBeString()
  })
})
