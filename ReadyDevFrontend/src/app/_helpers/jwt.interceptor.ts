import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.addAccessTokenToRequest(request));
    }

    addAccessTokenToRequest(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
    }
}