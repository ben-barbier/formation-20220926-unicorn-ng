import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class PendingRequestsInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerService.currentRequests++;
    return next.handle(request).pipe(tap(() => this.spinnerService.currentRequests--));
  }
}
