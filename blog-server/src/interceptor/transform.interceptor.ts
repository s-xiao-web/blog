import {
  Injectable,
  NestInterceptor, // 拦截器
  CallHandler, // 
  ExecutionContext,
} from '@nestjs/common';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
interface Response<T> {
  data: T;
}
interface Test {
  code: number,
  data: any
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>,): Observable<Response<T>> {
    return next.handle().pipe(
      map(data => {
        return {
          data,
          code: 0,
          message: 'success',
        };
      }),
    );
  }
}