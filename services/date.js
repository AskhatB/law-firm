import { monthes } from '../variables';

class Date {
  constructor(date) {
    this.date = date;
  }

  monthName() {
    const date = new Date(this.date);
    console.log('fwe', date);
  }
}

export default Date;
