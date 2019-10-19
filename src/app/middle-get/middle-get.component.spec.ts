import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleGetComponent } from './middle-get.component';

describe('MiddleGetComponent', () => {
  let component: MiddleGetComponent;
  let fixture: ComponentFixture<MiddleGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
