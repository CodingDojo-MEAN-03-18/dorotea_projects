import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailwhaleComponent } from './failwhale.component';

describe('FailwhaleComponent', () => {
  let component: FailwhaleComponent;
  let fixture: ComponentFixture<FailwhaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailwhaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailwhaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
