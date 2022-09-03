import {
    startOfWeek,
	nextMonday,
	nextFriday,
	format,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export class DateClass {

    constructor() {
        this.today = new Date();
        this.week = startOfWeek(this.today);
    }

    formattedDate (dateObj) {
        return format(dateObj, "dd/MM", { locale: ptBR });
    }

    workingWeekStart () {

        const mondayDate = nextMonday(this.week);

        return this.formattedDate(mondayDate);
    }
    
    workingWeekEnd () {
        const fridayDate = nextFriday(this.week);

        return this.formattedDate(fridayDate);
    }
}