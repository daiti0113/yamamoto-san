/** Day.js 関連の import */
import dayjs from "dayjs"
import ja from "dayjs/locale/ja"
/** NOTE: location(Japan)を設定する */
dayjs.locale(ja)

export const calcAge = (birthday: string) => {
  const today = dayjs()
  const birthDate = dayjs(birthday)
  const baseAge = today.year() - birthDate.year()
  const thisBirthday = dayjs(`${today.year()}-${birthDate.month() + 1}-${birthDate.date()}`)
  return today.isBefore(thisBirthday) ? baseAge - 1 : baseAge
}
