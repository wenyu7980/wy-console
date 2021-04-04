import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { MenuConfig } from '@common-components/auth/define';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.less']
})
export class LayoutMenuComponent implements OnInit, OnDestroy {

  private subscriber$: Subscriber<string>;
  private subject$: Subscription;
  menus$: MenuItem[];
  private menuMap: Map<string, MenuItem[]> = new Map<string, MenuItem[]>();
  menuConfigs: MenuConfig[];
  @Input()
  role: string;
  sideFlag: boolean;

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
  }

  ngOnInit(): void {
    this.subject$ = new Observable((sub: Subscriber<string>) => {
      this.subscriber$ = sub;
    }).subscribe(url => {
      for (const config of this.menuConfigs) {
        if (url.startsWith(config.path)) {
          if (!config.data) {
            this.sideFlag = false;
            break;
          }
          this.sideFlag = true;
          if (!this.menuMap.has(config.data)) {
            this.httpClient.get<MenuItem[]>(config.data)
              .pipe(tap(data => this.menuMap.set(config.data, data)))
              .subscribe(data => {
                this.menus$ = data;
                this.updateMenu(url, this.menus$);
              });
          } else {
            this.menus$ = this.menuMap.get(config.data);
            this.updateMenu(url, this.menus$);
          }
          break;
        }
      }
    });
    // 加载配置文件
    this.httpClient.get('/assets/menu/menu.json')
      .subscribe(data => {
        this.menuConfigs = data[this.role];
        this.subscriber$.next(this.router.url.split('?')[0]);
      });
    // 菜单跟踪
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      // 获取路径
      map((event: NavigationEnd) => event.urlAfterRedirects.split('?')[0]),
    ).subscribe(url => {
      this.subscriber$.next(url);
    });
  }

  /**
   * 激活页面关联的菜单
   * @param url 路径
   * @param menus 菜单
   */
  private updateMenu(url: string, menus: MenuItem[]): boolean {
    let open = false;
    for (const menu of menus) {
      if (menu.children && menu.children.length > 0) {
        menu.open = this.updateMenu(url, menu.children);
        open = open || menu.open;
      } else if (url.startsWith(menu.path)) {
        menu.selected = true;
        menu.open = true;
        open = open || true;
      } else {
        menu.selected = false;
        menu.open = false;
        open = open || false;
      }
    }
    return open;
  }

  private menuHandler(menus: MenuItem[]): MenuItem[] {
    if (!menus) {
      return null;
    }
    const rets: MenuItem[] = [];
    for (const menu of menus) {
      rets.push({
        ...menu,
        children: this.menuHandler(menu.children),
        open: false,
        selected: false
      });
    }
    return rets;
  }

  ngOnDestroy(): void {
    this.subject$.unsubscribe();
  }

}

interface MenuItem {
  name: string;
  path: string;
  icon: string;
  open: boolean;
  selected: boolean;
  children: MenuItem[];
}
