import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-note',
  templateUrl: './post-note.component.html',
  styleUrls: ['./post-note.component.css']
})
export class PostNoteComponent implements OnInit {
  data: any[] = [];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    console.log('post notes');
    this._dataService.data.subscribe(
      (data) => {this.data = data; }
    );
  }

}
