import { Component, OnInit } from '@angular/core';
import { MultiTabsService } from '@common-components/multi-tab';

@Component({
  selector: 'app-department-list-page',
  templateUrl: './department-list-page.component.html',
  styleUrls: ['./department-list-page.component.less']
})
export class DepartmentListPageComponent implements OnInit {

  constructor(private multiTabsService: MultiTabsService) {
  }

  ngOnInit(): void {
    this.multiTabsService.setTabTitle('部门管理');
  }

}
