import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public displayDetails = false;
  public clickTimes = [];

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.clickTimes.push(moment.now());
  }

  getBackgroundColor(index): string {
    return index > 2 ? 'blue' : 'white';
  }
}
