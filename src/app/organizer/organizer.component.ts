import {Component, OnInit} from "@angular/core"
import {DateService} from "../shared/date.service"
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {Task, TasksService} from "../shared/tasks.service"

@Component({
  selector: "app-organizer",
  templateUrl: "./organizer.component.html",
  styleUrl: "./organizer.component.scss"
})


export class OrganizerComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  tasks: Task[] = []

  constructor(protected dateService: DateService, protected tasksService: TasksService) {}

  ngOnInit() {
    this.dateService.date.pipe(
      switchMap(value => this.tasksService.fetchTasks(value))
    ).subscribe(tasks => {
      this.tasks = tasks
    })

     this.form = new FormGroup({
       title: new FormControl("", Validators.required)
     })
  }

  submit() {
     const {title} = this.form.value
     const task: Task = { title, date: this.dateService.date.value.format("DD-MM-YYYY") }

     this.tasksService.createTask(task).subscribe(task => {
       this.tasks.push(task)
       this.form.reset()
     }, err => console.error(err))
  }

  remove(task: Task) {
    this.tasksService.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    }, err => console.error(err))
  }
}
