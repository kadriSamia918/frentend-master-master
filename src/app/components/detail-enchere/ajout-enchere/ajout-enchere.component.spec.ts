import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEnchereComponent } from './ajout-enchere.component';

describe('AjoutEnchereComponent', () => {
  let component: AjoutEnchereComponent;
  let fixture: ComponentFixture<AjoutEnchereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutEnchereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutEnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
