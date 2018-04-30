import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
  task: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }

  getTask( taskname: string) {
    this._http.get('https://api.github.com/users/${task.taskname}').subscribe(
      (task: any[]) => { this.task.next(task); }
    );
    console.log(this.task);
  }

}
