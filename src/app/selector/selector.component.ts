import {Component} from "@angular/core"
import {DateService} from "../shared/date.service"
import {AsyncPipe, NgIf} from "@angular/common";
import {MomentPipe} from "../shared/moment.pipe"


@Component({
  selector: "app-selector",
  standalone: true,
  imports: [
    AsyncPipe,
    MomentPipe,
    NgIf
  ],
  templateUrl: "./selector.component.html",
  styleUrl: "./selector.component.scss"
})

export class SelectorComponent {

  constructor(protected dateService: DateService) {}

  nextMonth(direction: number) {
    this.dateService.changeMonth(direction)
  }

  prevMonth(direction: number) {
    this.dateService.changeMonth(direction)
  }
}
