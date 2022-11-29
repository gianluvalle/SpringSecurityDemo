import {Injectable} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

  //prende una richiesta http(tipo login) e un oggetto della clase httphandler e la trasforma in un observable
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({withCredentials : true});
    return next.handle(req);

  }


}

export const httpInterceptorProviders = [{ provide : HTTP_INTERCEPTORS, useClass : HttpRequestInterceptor, multi : true }];


