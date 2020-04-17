import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEnchereComponent } from './detail-enchere.component';

describe('DetailEnchereComponent', () => {
  let component: DetailEnchereComponent;
  let fixture: ComponentFixture<DetailEnchereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEnchereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEnchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
