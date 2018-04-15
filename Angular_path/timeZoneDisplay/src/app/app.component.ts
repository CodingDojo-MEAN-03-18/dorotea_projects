import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
  switch: boolean = true;
  zoneNow: any = Date.now();
  clicked: boolean =false;
  time: string;
  est: string;
  pst: string;
  
  

  onButtonClick(time) { 
  this.clicked = true;
  if (this.time = this.est){
    this.zoneNow = this.zoneNow + 0;
  }
  else if (this.time = this.pst){
    this.zoneNow = this.zoneNow + 10800;
  }
  console.log(`Click event is working, event:`, time, this.zoneNow);
}


}
