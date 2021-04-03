import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuConfig } from '@common-components/auth/define';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.less']
})
export class HeaderMenuComponent implements OnInit {

  menus: MenuItem[];

  @Input()
  role: string;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.httpClient.get('/assets/menu/menu.json').subscribe(data => {
      this.menus = data[this.role];
      this.selected();
    });
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.selected();
      });
  }

  private selected(): void {
    for (const menu of this.menus) {
      if (this.router.url.startsWith(menu.path)) {
        menu.selected = true;
      } else {
        menu.selected = false;
      }
    }
  }

  /**
   * 选择
   * @param path 路径
   */
  select(path: string): void {
    this.router.navigate([path]).then();
  }
}

interface MenuItem extends MenuConfig {
  selected: boolean;
}
