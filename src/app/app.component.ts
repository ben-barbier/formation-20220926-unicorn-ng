import { Component } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'unicorn-ng 🚀';

  constructor(public spinnerService: SpinnerService) {}

  getYear = () => {
    console.count('getYear');
    return new Date().getFullYear();
  };
}
