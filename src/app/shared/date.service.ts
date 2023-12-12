import {Injectable} from "@angular/core"
import moment from "moment"
import {BehaviorSubject} from "rxjs"

@Injectable({
  providedIn: "root"
})

export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject<moment.Moment>(moment())

  changeMonth(direction: number) {
    const value = this.date.value.add(direction, "month")
    this.date.next(value)
  }
}
