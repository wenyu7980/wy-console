import { Observable, Subscriber, Subscription } from 'rxjs';
import { Directive, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';

interface PageBody<T> {
  count?: number;
  data?: Array<T>;
  pages?: number;
}

@Directive()
export abstract class AbstractTableTabDirective<T> implements OnDestroy {

  private data$: T[];
  private total$: number;
  private index$: number;
  private size$: number;
  private loading$: boolean;
  /** 汇总参数变化 */
  private subscriber$: Subscriber<any>;
  private subscription$: Subscription;

  protected constructor(
    private readonly PAGE_SIZE: number = 10
  ) {
    this.index$ = 0;
    this.size$ = PAGE_SIZE;
    // 参数变化处理
    this.subscription$ =
      new Observable(
        (subscriber: Subscriber<any>) => {
          this.subscriber$ = subscriber;
        }).pipe(
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
    this.subscriber$.next(param);
  }

  /**
   * 刷新
   */
  public refresh(): void {
    this.subscriber$.next({ ...this.getParam(), index: 0, size: this.PAGE_SIZE });
  }

  pageIndexChange(index: number): void {
    this.changeIndexSize(index - 1, this.size$);
  }

  pageSizeChange(size: number): void {
    this.changeIndexSize(this.index$, size);
  }

  private changeIndexSize(index: number, size: number): void {
    this.size$ = +size;
    this.index$ = +index;
    this.subscriber$.next({ ...this.getParam(), index: this.index$, size: this.size$ });
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
}
