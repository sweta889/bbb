import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentboardComponent } from './currentboard.component';

describe('CurrentboardComponent', () => {
  let component: CurrentboardComponent;
  let fixture: ComponentFixture<CurrentboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
