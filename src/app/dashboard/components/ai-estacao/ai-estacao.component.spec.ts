import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiEstacaoComponent } from './ai-estacao.component';

describe('AiEstacaoComponent', () => {
  let component: AiEstacaoComponent;
  let fixture: ComponentFixture<AiEstacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiEstacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
