import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderMenuComponent } from './sider-menu.component';

describe('SiderManuComponent', () => {
  let component: SiderMenuComponent;
  let fixture: ComponentFixture<SiderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiderMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
