import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuskComponent } from './musk.component';

describe('MuskComponent', () => {
  let component: MuskComponent;
  let fixture: ComponentFixture<MuskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
