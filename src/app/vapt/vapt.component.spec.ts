import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaptComponent } from './vapt.component';

describe('VaptComponent', () => {
  let component: VaptComponent;
  let fixture: ComponentFixture<VaptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
