import format from 'date-fns/format'

import { DateFormatter } from 'presentation/protocols/date-formatter'

export class DateFormatAdapter implements DateFormatter {
  format(date: Date, expectedFormat: string): string {
    return format(date, expectedFormat)
  }
}
