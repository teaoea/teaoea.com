import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Logger } from './logger';
import { LoggerService } from './logger.service';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  constructor(
    private server: LoggerService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = Date.now();
    return next.handle(request).pipe(
      finalize(
        () => {
          const delay = Date.now() - start;
          const logger: Logger = {
            method: request.method,
            path: request.urlWithParams,
            delay: delay.toLocaleString()
          };
          this.server.post(logger);
        }
      )
    );
  }
}
