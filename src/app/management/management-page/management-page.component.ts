import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.less'],
})
export class ManagementPageComponent implements OnInit {
  siderDisplay: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
