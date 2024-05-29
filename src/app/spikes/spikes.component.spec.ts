import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpikesComponent } from './spikes.component';

describe('SpikesComponent', () => {
  let component: SpikesComponent;
  let fixture: ComponentFixture<SpikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpikesComponent]
    });
    fixture = TestBed.createComponent(SpikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
