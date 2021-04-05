import { Component, OnInit } from '@angular/core';
import { MultiTabsService } from '@common-components/multi-tab';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role-detail-page',
  templateUrl: './role-detail-page.component.html',
  styleUrls: ['./role-detail-page.component.less']
})
export class RoleDetailPageComponent implements OnInit {

  constructor(
    private multiTabsService: MultiTabsService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.multiTabsService.setTabTitle(`角色${params.id}`);
    });
  }
}
