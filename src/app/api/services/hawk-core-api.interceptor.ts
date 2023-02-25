import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest, HttpXsrfTokenExtractor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HawkCoreHttpHeaderService} from "./hawk-core-http-header.service";

/**
 * HawkCore API Client interceptor
 */
@Injectable({
  providedIn: 'root',
})
export class HawkCoreApiInterceptor implements HttpInterceptor {
  constructor(
    private httpXsrfTokenExtractor: HttpXsrfTokenExtractor,
    private wmCoreHeaderProviderService: HawkCoreHttpHeaderService
  ) {}

  /**
   * Intercepts and modifies each request before it is sent out.
   *
   * @param req Request
   * @param next Next HTTP Handler
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const xsrfToken = this.httpXsrfTokenExtractor.getToken();
    if (xsrfToken) {
      this.wmCoreHeaderProviderService.setHeader('X-CSRF-Token', xsrfToken);
    }

    return next
      .handle(
        req.clone({
          withCredentials: true,
          setHeaders: {
            ...this.wmCoreHeaderProviderService.getHeaders(),
          },
        })
      )
      .pipe(catchError(err => throwError(() => err)));
  }
}
