import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BaseHrefIntercepteur implements HttpInterceptor {
    constructor(private location:Location){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const apiReq = req.clone({ url: `your-api-url/${req.url}` });
    console.log("Intercepteur", this.location.prepareExternalUrl( req.url ));
    const apiReq = req.clone({ url:this.location.prepareExternalUrl( req.url ) });
    return next.handle(apiReq);
  }
}