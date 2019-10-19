import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTeamComponent } from './red-team.component';

describe('RedTeamComponent', () => {
  let component: RedTeamComponent;
  let fixture: ComponentFixture<RedTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
