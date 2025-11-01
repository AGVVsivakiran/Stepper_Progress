import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interactingpage } from './interactingpage';

describe('Interactingpage', () => {
  let component: Interactingpage;
  let fixture: ComponentFixture<Interactingpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interactingpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interactingpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
