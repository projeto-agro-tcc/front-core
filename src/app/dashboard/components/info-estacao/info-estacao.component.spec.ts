import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEstacaoComponent } from './info-estacao.component';

describe('InfoEstacaoComponent', () => {
  let component: InfoEstacaoComponent;
  let fixture: ComponentFixture<InfoEstacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEstacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
