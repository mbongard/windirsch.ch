import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {MeService} from "../../api/gen";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserAlreadyLoggedInGuard implements CanActivate {
  constructor(
    private meService: MeService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.meService.whoAmI().pipe(
      map(res => {
        if (res.username) {
          return this.router.parseUrl('/user')
        }
        return true;
      }),
      catchError(() => of(true))
    )
  }
}
