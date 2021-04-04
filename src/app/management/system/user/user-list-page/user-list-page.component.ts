import { Component, OnInit } from '@angular/core';
import { MultiTabsService } from '@common-components/multi-tab';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.less']
})
export class UserListPageComponent implements OnInit {

  constructor(private multiTabsService: MultiTabsService) {
  }

  ngOnInit(): void {
    this.multiTabsService.setTabTitle('用户管理');
  }

}
