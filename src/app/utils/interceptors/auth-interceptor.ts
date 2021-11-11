import { Injectable } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { LocalstorageService } from "../service";
import { Observable } from "rxjs";
import { environment as env } from 'src/environments/environment'


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(
    private localStorageService: LocalstorageService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Passou pelo interceptor...")
    let requestToApi = req.url.substr(0, env.baseUrl.length) == env.baseUrl
    let localUser = this.localStorageService.getLocalUser()
    if (localUser && requestToApi) {
      const authReq = req.clone({headers: req.headers.set('Authorization', 'Token ' + localUser.token)})
      return next.handle(authReq)
    } else {
      return next.handle(req)
    }
  }
}

export const AuthInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
