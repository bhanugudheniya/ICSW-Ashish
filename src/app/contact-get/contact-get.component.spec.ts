import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGetComponent } from './contact-get.component';

describe('ContactGetComponent', () => {
  let component: ContactGetComponent;
  let fixture: ComponentFixture<ContactGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
