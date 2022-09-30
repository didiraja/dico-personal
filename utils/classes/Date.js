import { startOfToday, startOfWeek, nextMonday, nextFriday, format, isToday, parseISO, toDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';

class DateClass {
  constructor() {
    this.today = startOfToday();
    this.week = startOfWeek(this.today);
  }

  toDate(dateObj) {
    return toDate(dateObj);
  }

  parseISO(dateObj) {
    return parseISO(dateObj);
  }

  isToday(dateObj) {
    return isToday(dateObj);
  }

  formattedDate(dateObj) {
    return format(dateObj, 'dd/MM', { locale: ptBR });
  }

  workingWeekStart() {
    return nextMonday(this.week);
  }

  workingWeekEnd() {
    return nextFriday(this.week);
  }

  formattedWeekStart() {
    const mondayDate = nextMonday(this.week);

    return this.formattedDate(mondayDate);
  }

  formattedWeekEnd() {
    const fridayDate = nextFriday(this.week);

    return this.formattedDate(fridayDate);
  }
}

export default new DateClass();
