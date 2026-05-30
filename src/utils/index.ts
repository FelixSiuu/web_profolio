import dayjs from 'dayjs'

export const utils = {
  countYear: (start: string, end: string | null): number => {
    const targetDate = !!end ? dayjs(end) : dayjs()
    const startDate = dayjs(start)
    return targetDate.diff(startDate, 'year')
  }
}
