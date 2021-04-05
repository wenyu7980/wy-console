import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, ResolveEnd, Router } from '@angular/router';
import { MultiTabsService } from '../multi-tabs.service';
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-multi-tabs',
  templateUrl: './multi-tabs.component.html',
  styleUrls: ['./multi-tabs.component.less']
})
export class MultiTabsComponent implements OnInit, OnDestroy {

  selectedIndex: number;
  tabs: Tab[];
  private subscriber$: Subscriber<Tab>;
  private subject$: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private multiTabService: MultiTabsService
  ) {
  }

  ngOnInit(): void {
    // 初始化加载
    this.getTabsFromStorage();
    // 监听
    this.subject$ = new Observable((sub: Subscriber<Tab>) => {
      this.subscriber$ = sub;
    }).subscribe(value => {
      for (const [index, tab] of this.tabs.entries()) {
        if (tab.path === value.path) {
          tab.title = tab.title ?? value.title;
          tab.params = value.params;
          this.setTabsToStorage();
          Promise.resolve().then(() => this.selectedIndex = index);
          return;
        }
      }
      this.tabs.push(value);
      this.setTabsToStorage();
      Promise.resolve().then(() => this.selectedIndex = this.tabs.length - 1);
    });
    // 路由变化
    this.router.events.pipe(
      filter(
        event => event instanceof ResolveEnd || event instanceof NavigationEnd
      ),
      map((event: ResolveEnd) => {
        const route = this.getChild(this.activatedRoute);
        return {
          path: event.urlAfterRedirects.split('?')[0],
          title: event.urlAfterRedirects,
          params: route.snapshot.queryParams
        };
      })
    ).subscribe(value => this.subscriber$.next(value));
    // 初始化
    const r = this.getChild(this.activatedRoute);
    this.subscriber$.next({
      title: r.snapshot.data.title ?? this.router.url,
      path: this.router.url.split('?')[0],
      params: r.snapshot.queryParams
    });
    // 标题设置
    this.multiTabService.observable.subscribe(value => {
      for (const tab of this.tabs) {
        if (tab.path === value.path) {
          tab.title = value.title;
          return;
        }
      }
    });
    // 关闭页面
    this.multiTabService.closeObservable.subscribe(value => {
      this.closeTab({ index: this.tabs.findIndex(v => v.path === value) });
    });
  }

  closeTab($event: { index: number }): void {
    this.tabs.splice($event.index, 1);
    if (this.tabs.length === 0) {
      this.router.navigate(['/']).then();
      return;
    }
    if (this.selectedIndex >= this.tabs.length) {
      this.selectedIndex = this.tabs.length - 1;
    }
    this.clickTab(this.selectedIndex);
    this.setTabsToStorage();
  }

  clickTab(i: number): void {
    this.router.navigate([this.tabs[i].path], { queryParams: this.tabs[i].params }).then();
    this.selectedIndex = i;
  }

  private getTabsFromStorage(): void {
    this.tabs = JSON.parse(sessionStorage.getItem('multi-tabs')) ?? [];
  }

  private setTabsToStorage(): void {
    sessionStorage.setItem('multi-tabs', JSON.stringify(this.tabs));
  }

  private getChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }

}

interface Tab {
  title: string;
  path: string;
  params?: any;
}

