import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { map, Observable } from "rxjs"

export interface Task {
  id?: string
  title: string
  date?: string
}

@Injectable({providedIn: "root"})

export class TasksService {
  static url: string = "https://calendar-62ad7-default-rtdb.asia-southeast1.firebasedatabase.app"

  constructor(private http: HttpClient) {}

  createTask(task: Task): Observable<Task> {
    return this.http
      .post<any>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(map(res => {
        return { ...task, id: res.name }
      }))
  }
}
