import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UnicornDTO } from '../models/unicornDTO.model';
import { UnicornsService } from '../services/unicorns.service';

@Injectable({
  providedIn: 'root',
})
export class MoreThan20KgGuard implements CanActivate {
  constructor(private unicornsService: UnicornsService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<true | UrlTree> {
    const unicornId = route.params['id'];
    return this.unicornsService.get(unicornId).pipe(
      map((unicorn: UnicornDTO): true | UrlTree => {
        return unicorn.weight > 20 ? true : this.router.createUrlTree(['unicorns']);
      })
    );
  }
}
