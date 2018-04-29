import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../numbers.service';

@Component({
  selector: 'app-musk',
  templateUrl: './musk.component.html',
  styleUrls: ['./musk.component.css']
})
export class MuskComponent implements OnInit {

  constructor(private_numbersService: NumbersService) { }

  ngOnInit() {
  }

}
