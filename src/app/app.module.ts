import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornCardComponent } from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { PendingRequestsInterceptor } from './shared/interceptors/pending-requests.interceptor';
import { MagicalNamePipe } from './shared/pipes/magical-name.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UnicornListComponent,
    MagicalNamePipe,
    UnicornCardComponent,
    SpinnerComponent,
    UnicornDetailsComponent,
    NavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: PendingRequestsInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
