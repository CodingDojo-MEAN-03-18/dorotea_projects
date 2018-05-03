import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitNoteComponent } from './submit-note.component';

describe('SubmitNoteComponent', () => {
  let component: SubmitNoteComponent;
  let fixture: ComponentFixture<SubmitNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
