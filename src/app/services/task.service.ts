import { Injectable } from '@angular/core';

// Observable :- is a sequence of items that arrive asynchronously over time.
// this uses when get the response from the server. 
// ex: assume a newpaper. there are some sources which are containing information about world. so what newspaper
// does is, make headlines and colorfull articals from those informations which are in source. that is some sort of
// convertion of data to proper structure. 

// now those newspapers should send to houses. but the company is send newspapers only for subscribed houses.
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:4242/task';

  constructor(private http: HttpClient) { }

  addNewTask(task: Task) {
    const url = `${this.apiUrl}/add`;
    return this.http.post<Task>(url, task, httpOptions);
  } 

  getTasks(): Observable<Task[]> {
    const url = `${this.apiUrl}/get/all`;
    return this.http.get<Task[]>(url);
  }

  deleteTask(id : number) : Observable<Task> {
    const url = `${this.apiUrl}/delete/task/${id}`
    return this.http.delete<Task>(url);
  }

  compulsoryTask(id: number) : Observable<Task> {
    const url = `${this.apiUrl}/compulsory-task/task/${id}`
    return this.http.post<Task>(url, {}, httpOptions);
  }

}
