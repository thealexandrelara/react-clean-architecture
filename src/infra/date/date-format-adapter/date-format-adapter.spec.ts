import * as format from 'date-fns/format'
import { DateFormatAdapter } from './date-format-adapter'

jest.mock('date-fns/format', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue('any_formatted_date'),
}))

describe('Date Format Adapter', () => {
  it('should return a string when called', () => {
    const dateFormatAdapter = new DateFormatAdapter()
    expect(
      dateFormatAdapter.format(new Date(), 'any_format'),
    ).toBeString()
  })

  it('should call format with correct values', () => {
    const dateFormatAdapter = new DateFormatAdapter()
    const formatSpy = jest.spyOn(format, 'default')
    const date = new Date()
    dateFormatAdapter.format(date, 'dd-MM-yyyy')
    expect(formatSpy).toHaveBeenCalledWith(date, 'dd-MM-yyyy')
  })
})
