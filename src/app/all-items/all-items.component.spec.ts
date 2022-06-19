import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllITemsComponent } from './all-items.component';

describe('AllITemsComponent', () => {
  let component: AllITemsComponent;
  let fixture: ComponentFixture<AllITemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllITemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllITemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
