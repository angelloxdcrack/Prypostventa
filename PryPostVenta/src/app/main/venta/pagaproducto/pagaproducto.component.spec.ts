import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagaproductoComponent } from './pagaproducto.component';

describe('PagaproductoComponent', () => {
  let component: PagaproductoComponent;
  let fixture: ComponentFixture<PagaproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagaproductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagaproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
