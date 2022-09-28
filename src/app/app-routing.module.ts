import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import { UnicornListComponent } from './pages/unicorn-list/unicorn-list.component';
import { MoreThan20KgGuard } from './shared/guards/more-than20-kg.guard';

const routes: Routes = [
  { path: 'unicorns', component: UnicornListComponent },
  { path: 'unicorn/:id', component: UnicornDetailsComponent, canActivate: [MoreThan20KgGuard] },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule) },
  { path: '**', redirectTo: 'unicorns' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
