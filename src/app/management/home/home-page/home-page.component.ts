import { Component, OnInit } from '@angular/core';
import { MultiTabsService } from '@common-components/multi-tab';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  constructor(private  multiTabsService: MultiTabsService) {
  }

  ngOnInit(): void {
    this.multiTabsService.setTabTitle('首页');
  }

}
