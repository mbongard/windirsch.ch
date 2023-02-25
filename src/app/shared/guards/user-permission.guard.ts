import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {map, Observable, of} from 'rxjs';
import {catchError} from "rxjs/operators";
import {MeService} from "../../api/gen";
import {UserSessionService} from "../services/user-session.service";

@Injectable({
  providedIn: 'root'
})
export class UserPermissionGuard implements CanActivate {
  constructor(
    private meService: MeService,
    private router: Router,
    private userSessionService: UserSessionService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.meService.whoAmI().pipe(
      map(res => {
        if (res.username) {
          this.userSessionService.setSession(res.username);
        }
        return !!res.username;
      }),
      catchError(() => of(this.router.parseUrl('/')))
    )
  }
}
