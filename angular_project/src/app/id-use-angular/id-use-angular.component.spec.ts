import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdUseAngularComponent } from './id-use-angular.component';

describe('IdUseAngularComponent', () => {
  let component: IdUseAngularComponent;
  let fixture: ComponentFixture<IdUseAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdUseAngularComponent]
    });
    fixture = TestBed.createComponent(IdUseAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
