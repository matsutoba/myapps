import { DateInput } from '@fullcalendar/core'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Tokyo')

export const getFormatedDate = (d: Date | null): string => {
  if (!d) return ''
  return dayjs(d).format('YYYY-MM-DD')

  /*
  return `${d.getFullYear()}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
    */
}

export const getFormatedDateTime = (d: Date | null): string => {
  const date = getFormatedDate(d)
  return `${date}T${d
    ?.getHours()
    .toString()
    .padStart(2, '0')}:${d?.getMinutes().toString().padStart(2, '0')}:00`
}

export const dateEqual = (
  d1?: DateInput | null,
  d2?: DateInput | null,
): boolean => {
  if (!d1 || !d2) return false
  const date1 = dayjs(d1.toString())
  const date2 = dayjs(d2.toString())
  /*
  console.log(
    'EQ',
    date1.isSame(date2, 'date'),
    `${date1.year()}-${date1.month()}-${date1.date()}`,
    `${date2.year()}-${date2.month()}-${date2.date()}`,
  )
  */
  return date1.isSame(date2, 'date')

  //console.log('E', d2, dayjs(d2.toString()).date())
  //return String(date1).slice(0, 10) === String(date2).slice(0, 10)
}
