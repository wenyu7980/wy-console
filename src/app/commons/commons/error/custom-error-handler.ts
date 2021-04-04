import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

/**
 * 异常统一处理
 */
@Injectable()
export class CustomErrorHandler extends ErrorHandler {

  constructor(private router: Router, private messageService: NzMessageService) {
    super();
  }

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      this.messageService.error(error.message);
    } else {
      console.error(error);
    }
  }
}
