import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstacoesComponent } from './lista-estacoes.component';

describe('ListaEstacoesComponent', () => {
  let component: ListaEstacoesComponent;
  let fixture: ComponentFixture<ListaEstacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEstacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEstacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
