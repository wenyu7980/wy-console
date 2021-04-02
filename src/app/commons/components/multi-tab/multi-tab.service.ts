import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MultiTabService {

  private subscriber$: Subscriber<{ path: string; title: string }>;
  private readonly observable$: Observable<{ path: string; title: string }>;
  private closeSubscriber$: Subscriber<string>;
  private readonly closeObservable$: Observable<string>;

  constructor(
    private router: Router
  ) {
    this.observable$ = new Observable(
      (subscriber: Subscriber<any>) => {
        this.subscriber$ = subscriber;
      });
    this.closeObservable$ = new Observable(
      (subscriber: Subscriber<any>) => {
        this.closeSubscriber$ = subscriber;
      });
  }

  get observable(): Observable<{ path: string; title: string }> {
    return this.observable$;
  }

  get closeObservable(): Observable<string> {
    return this.closeObservable$;
  }


  setTabTitle(title: string): void {
    this.subscriber$.next({ path: this.router.url.split('?')[0], title });
  }

  closeTab(): void {
    this.closeSubscriber$.next(this.router.url.split('?')[0]);
  }
}
