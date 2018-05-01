import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  task: any [''] = '';

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log(this.task);
    this._taskService.getTask(this.task);
    this._taskService.task.subscribe((task) => {this.task = task; });
    form.reset();
  }
}
