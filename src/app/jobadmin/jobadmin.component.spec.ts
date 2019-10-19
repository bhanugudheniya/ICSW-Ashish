import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobadminComponent } from './jobadmin.component';

describe('JobadminComponent', () => {
  let component: JobadminComponent;
  let fixture: ComponentFixture<JobadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
