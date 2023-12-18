import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { map, Observable } from "rxjs"
import moment from "moment";

export interface Task {
  id?: string
  title: string
  date?: string
}

@Injectable({providedIn: "root"})

export class TasksService {
  static url: string = "https://calendar-62ad7-default-rtdb.asia-southeast1.firebasedatabase.app"

  constructor(private http: HttpClient) {}

  fetchTasks(date: moment.Moment) {
    return this.http
      .get<Task[]>(`${TasksService.url}/${date.format("DD-MM-YYYY")}.json`)
      .pipe(map(tasks => {
         if (!tasks) {
           return []
         }

         return Object.keys(tasks).map(key => ({...tasks[key], id: key}))
      }))
  }

  createTask(task: Task): Observable<Task> {
    return this.http
      .post<any>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(map(res => {
        return { ...task, id: res.name }
      }))
  }

  removeTask(task: Task): Observable<void>{
    return this.http.delete<void>(`${TasksService.url}/${task.date}/${task.id}.json`)
  }
}
