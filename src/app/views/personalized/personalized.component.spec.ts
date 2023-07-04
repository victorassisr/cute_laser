import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalizedComponent } from './personalized.component';

describe('PersonalizedComponent', () => {
  let component: PersonalizedComponent;
  let fixture: ComponentFixture<PersonalizedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
