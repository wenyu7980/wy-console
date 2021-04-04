import { Component, OnInit } from '@angular/core';
import { MultiTabsService } from '@common-components/multi-tab';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.less']
})
export class SettingPageComponent implements OnInit {

  constructor(private multiTabService: MultiTabsService) {
  }

  ngOnInit(): void {
    this.multiTabService.setTabTitle('个人设置');
  }

}
