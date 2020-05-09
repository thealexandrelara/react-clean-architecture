import format from 'date-fns/format'

import { DateFormatter } from 'presentation/protocols/date-formatter'

export class DateFormatAdapter implements DateFormatter {
  format(): string {
    return 'any_format'
  }
}
