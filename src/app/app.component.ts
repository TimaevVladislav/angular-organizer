import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"

import {SelectorComponent} from "./selector/selector.component"
import {CalendarComponent} from "./calendar/calendar.component"
import {OrganizerComponent} from "./organizer/organizer.component"
import {MomentPipe} from "./shared/moment.pipe"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SelectorComponent,
    CalendarComponent,
    OrganizerComponent,
    MomentPipe
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})

export class AppComponent { title = "organizer" }
