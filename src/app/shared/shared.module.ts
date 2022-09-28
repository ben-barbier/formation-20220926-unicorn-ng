import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HourComponent } from './components/hour/hour.component';

@NgModule({
  declarations: [HourComponent],
  imports: [CommonModule],
  exports: [HourComponent],
})
export class SharedModule {}
