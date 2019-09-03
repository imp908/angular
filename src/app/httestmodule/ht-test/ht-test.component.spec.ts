import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtTestComponent } from './ht-test.component';

describe('HtTestComponent', () => {
  let component: HtTestComponent;
  let fixture: ComponentFixture<HtTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
