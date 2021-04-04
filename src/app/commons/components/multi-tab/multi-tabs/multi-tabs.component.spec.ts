import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTabsComponent } from './multi-tabs.component';

describe('MultiTabComponent', () => {
  let component: MultiTabsComponent;
  let fixture: ComponentFixture<MultiTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
