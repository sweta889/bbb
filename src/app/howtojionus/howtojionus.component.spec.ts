import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtojionusComponent } from './howtojionus.component';

describe('HowtojionusComponent', () => {
  let component: HowtojionusComponent;
  let fixture: ComponentFixture<HowtojionusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtojionusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowtojionusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
