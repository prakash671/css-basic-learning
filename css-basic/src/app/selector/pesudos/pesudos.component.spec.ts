import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesudosComponent } from './pesudos.component';

describe('PesudosComponent', () => {
  let component: PesudosComponent;
  let fixture: ComponentFixture<PesudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesudosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PesudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
