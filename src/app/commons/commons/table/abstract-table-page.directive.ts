import { Observable, Subscriber, Subscription } from 'rxjs';
import { Directive, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter, switchMap } from 'rxjs/operators';

interface PageBody<T> {
  count?: number;
  data?: Array<T>;
  pages?: number;
}

@Directive()
export abstract class AbstractTablePageDirective<T> implements OnInit, OnDestroy {

  private data$: T[];
  private total$: number;
  private index$: number;
  private size$: number;
  private loading$: boolean;
  /** 汇总路径参数变化 */
  private subscriber$: Subscriber<any>;
  private subscription$: Subscription;

  protected constructor(
    private router$: Router,
    private activatedRoute$: ActivatedRoute,
    private readonly PAGE_SIZE: number = 20) {
    this.index$ = 0;
    this.size$ = PAGE_SIZE;
  }


  ngOnInit(): void {
    // 参数变化处理
    this.subscription$ =
      new Observable(
        (subscriber: Subscriber<any>) => {
          this.subscriber$ = subscriber;
        }).pipe(
        // 索引
        filter(queryParam => !this.setIndexPage(queryParam.index, queryParam.size)),
        // 除索引外其他参数
        filter(queryParam => {
          this.setParam(queryParam);
          if (this.deepEqual(queryParam, this.getParam())) {
            return true;
          }
          this.router$.navigate([], { queryParams: this.cleanEmpty(queryParam) }).then();
          return false;
        }),
        debounceTime(50),
        // 请求数据
        switchMap(queryParam => {
          this.loading$ = true;
          return this.getData(queryParam);
        })
      ).subscribe((body: PageBody<T>) => {
        this.total$ = body.count;
        this.data$ = body.data;
        this.loading$ = false;
      }, (error) => {
        this.loading$ = false;
        throw error;
      });
    // 路径参数变化
    this.activatedRoute$.queryParams
      .subscribe((param: any) => {
        this.subscriber$.next(param);
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  /**
   * 获取参数
   */
  protected abstract getParam(): any;

  /**
   * 设置参数，同时将不合法的参数设置成合法的
   * @param param 参数
   * @return 如果参数设置前后有变化，则返回true
   *         如果参数设置前后无变化，返回false
   */
  protected abstract setParam(param: any): boolean;

  /**
   * 获取数据
   * @param param 参数
   */
  protected abstract getData(param: any): Observable<PageBody<T>>;

  /**
   * 参数变化后调用
   * @param param 参数
   */
  protected changeParam(param: any): void {
    this.router$.navigate([], {
      queryParams: { ...this.cleanEmpty(param), index: 0, size: this.size$ }
    }).then();
  }

  /**
   * 刷新
   */
  protected refresh(): void {
    this.router$.navigate([], {
      queryParams: {
        ...this.getParam(), index: this.index$, size: this.size$,
        // 触发路由变化
        _t: new Date().valueOf()
      }
    }).then();
  }

  private cleanEmpty(param: any): any {
    const value = {};
    for (const key in param) {
      if (param[key] !== null && param[key].trim() !== '') {
        value[key] = param[key].trim();
      }
    }
    return value;
  }

  pageIndexChange(index: number): void {
    this.changeIndexSize(index - 1, this.size$);
  }

  pageSizeChange(size: number): void {
    this.changeIndexSize(this.index$, size);
  }

  private setIndexPage(index: number, size: number): boolean {
    if ((+index) === this.index$ && (+size) === this.size$) {
      return false;
    }
    if (!+index || +index < 0) {
      index = 0;
    }
    if (!+size || +size < 0) {
      size = this.PAGE_SIZE;
    }
    this.changeIndexSize(index, size);
    return true;
  }

  private changeIndexSize(index: number, size: number): void {
    this.size$ = +size;
    this.index$ = +index;
    this.router$.navigate([], {
      queryParams: { ...this.getParam(), index: this.index$, size: this.size$, _t: new Date().valueOf() }
    }).then();
  }


  get data(): T[] {
    return this.data$;
  }

  get total(): number {
    return this.total$;
  }

  get index(): number {
    return this.index$ + 1;
  }

  get size(): number {
    return this.size$;
  }


  get loading(): boolean {
    return this.loading$;
  }

  private deepEqual(x: any, y: any): boolean {
    if (x === y) {
      return true;
    }
    if (x ?? ''.toString() === y ?? ''.toString()) {
      return true;
    }
    // 比较对象内部
    for (const prop of Object.keys(x)) {
      if (!this.deepEqual(x[prop], y[prop])) {
        return false;
      }
    }
    return true;
  }
}
