import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSelectorComponent } from './mid-selector.component';

describe('MidSelectorComponent', () => {
  let component: MidSelectorComponent;
  let fixture: ComponentFixture<MidSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MidSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
