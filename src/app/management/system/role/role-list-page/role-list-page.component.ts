import { Component, OnInit } from '@angular/core';
import { MultiTabsService } from '@common-components/multi-tab';

@Component({
  selector: 'app-role-list-page',
  templateUrl: './role-list-page.component.html',
  styleUrls: ['./role-list-page.component.less']
})
export class RoleListPageComponent implements OnInit {

  constructor(private multiTabService: MultiTabsService) {
  }

  ngOnInit(): void {
    this.multiTabService.setTabTitle('角色管理');
  }

}
