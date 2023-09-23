import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtelekComponent } from './etelek.component';

describe('EtelekComponent', () => {
  let component: EtelekComponent;
  let fixture: ComponentFixture<EtelekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtelekComponent]
    });
    fixture = TestBed.createComponent(EtelekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
