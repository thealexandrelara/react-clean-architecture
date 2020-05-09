export interface DateFormatter {
  format(date: Date, expectedFormat: string): string
}
