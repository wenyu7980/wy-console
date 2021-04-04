import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiTabsService } from '@common-components/multi-tab';
import { ActivatedRoute } from '@angular/router';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';

@Component({
  selector: 'app-role-detail-page',
  templateUrl: './role-detail-page.component.html',
  styleUrls: ['./role-detail-page.component.less']
})
export class RoleDetailPageComponent implements OnInit {

  tabs = ['Tab 1', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2', 'Tab 2'];
  selectedIndex = 0;

  constructor(
    private multiTabsService: MultiTabsService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.multiTabsService.setTabTitle(`角色${params.id}`);
    });
  }

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.selectedIndex = this.tabs.length;
  }
}
