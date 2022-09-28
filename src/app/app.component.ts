import { Component } from '@angular/core';
import { map } from 'rxjs';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'unicorn-ng 🚀';

  // 👇: Implem explicite
  public pendingRequests = 0;

  // 👇: Implem implicite (mieux)
  public hasPendingRequests$ = this.spinnerService.pendingRequests$.pipe(map((pendingRequests) => pendingRequests > 0));

  constructor(public spinnerService: SpinnerService) {
    spinnerService.pendingRequests$.subscribe((pendingRequests) => (this.pendingRequests = pendingRequests));
  }
}
