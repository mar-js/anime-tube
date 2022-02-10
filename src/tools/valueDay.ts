export let date = ''

const DATE = new Date().getDay()

switch (true) {
  case DATE === 0:
    date = 'sunday'
    break
  case DATE === 1:
    date = 'monday'
    break
  case DATE === 2:
    date = 'tuesday'
    break
  case DATE === 3:
    date = 'wednesday'
    break
  case DATE === 4:
    date = 'thursday'
    break
  case DATE === 5:
    date = 'friday'
    break
  case DATE === 6:
    date = 'saturday'
    break
  default:
    date = ''
    break
}
