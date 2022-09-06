import { startOfWeek, nextMonday, nextFriday, format, isToday, parseISO, toDate  } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default class DateClass {
  constructor() {
    this.today = new Date();
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
    const mondayDate = nextMonday(this.week);

    return this.formattedDate(mondayDate);
  }

  workingWeekEnd() {
    const fridayDate = nextFriday(this.week);

    return this.formattedDate(fridayDate);
  }
}
