import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteEnchereComponent } from './vente-enchere.component';

describe('VenteEnchereComponent', () => {
  let component: VenteEnchereComponent;
  let fixture: ComponentFixture<VenteEnchereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteEnchereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteEnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
