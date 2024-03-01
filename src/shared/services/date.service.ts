export class DateService{

  public isSameDay(fisrtDate: Date, secondDate: Date){
   const result: boolean = fisrtDate.getFullYear() === secondDate.getFullYear() &&
    fisrtDate.getMonth() === secondDate.getMonth() &&
    fisrtDate.getDate() === secondDate.getDate();

    return result;
  }

}