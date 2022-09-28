import { Component } from '@angular/core';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.scss'],
})
export class HourComponent {
  public hour = new Date().getHours();
}
