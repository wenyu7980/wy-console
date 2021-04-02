import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTabComponent } from './multi-tab.component';

describe('MultiTabComponent', () => {
  let component: MultiTabComponent;
  let fixture: ComponentFixture<MultiTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
