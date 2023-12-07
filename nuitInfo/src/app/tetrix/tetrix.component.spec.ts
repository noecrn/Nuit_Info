import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrixComponent } from './tetrix.component';

describe('TetrixComponent', () => {
  let component: TetrixComponent;
  let fixture: ComponentFixture<TetrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TetrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TetrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
