import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  task: any[] = [];
  score: number;
  message: string;

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    console.log('beta');
    this._taskService.task.subscribe(
      (task) => { this.task = task; }
    );

  }

}
