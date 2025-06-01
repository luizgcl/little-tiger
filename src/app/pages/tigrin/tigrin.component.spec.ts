import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigrinComponent } from './tigrin.component';

describe('TigrinComponent', () => {
  let component: TigrinComponent;
  let fixture: ComponentFixture<TigrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TigrinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TigrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
